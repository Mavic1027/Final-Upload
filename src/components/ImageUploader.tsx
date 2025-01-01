import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ImageDropzone from "./background-remover/ImageDropzone";
import ProcessingButton from "./background-remover/ProcessingButton";
import ResultDisplay from "./background-remover/ResultDisplay";

const MAX_USES = 3; // Maximum number of times a user can use the tool

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [remainingUses, setRemainingUses] = useState(MAX_USES);
  const { toast } = useToast();

  const verifyEmail = async (email: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('verify-email', {
        body: { email }
      });
      
      if (error) throw error;
      return data?.isValid || false;
    } catch (error) {
      console.error('Error verifying email:', error);
      return false;
    }
  };

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const isValid = await verifyEmail(email);
    if (!isValid) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address that can receive messages.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('background_remover_emails')
        .upsert([{ email, usage_count: 0 }], {
          onConflict: 'email',
          ignoreDuplicates: false
        })
        .select('usage_count')
        .single();

      if (error) throw error;

      setIsEmailSubmitted(true);
      setRemainingUses(MAX_USES - (data?.usage_count || 0));
      
      toast({
        title: "Success",
        description: "You can now use the background remover tool!",
      });
    } catch (error) {
      console.error('Error storing email:', error);
      toast({
        title: "Error",
        description: "Failed to submit email. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleRemoveBackground = async () => {
    if (!selectedImage || remainingUses <= 0) return;

    setLoading(true);
    try {
      // Update usage count first
      const { error: updateError } = await supabase
        .from('background_remover_emails')
        .update({ usage_count: supabase.sql`usage_count + 1` })
        .eq('email', email);

      if (updateError) throw updateError;

      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      
      const base64Data = await new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          if (!reader.result) {
            reject(new Error('Failed to read file'));
            return;
          }
          const base64 = reader.result.toString();
          const base64Data = base64.split(',')[1];
          resolve(base64Data);
        };
        reader.onerror = (error) => reject(new Error('Failed to read file'));
      });

      console.log('Sending image to remove-background function...');
      const { data, error } = await supabase.functions.invoke('remove-background', {
        body: { image_data: base64Data }
      });

      if (error) {
        console.error('Function error:', error);
        throw error;
      }

      if (!data?.success || !data?.image) {
        throw new Error(data?.error || 'Failed to process image');
      }

      setProcessedImage(`data:image/png;base64,${data.image}`);
      setRemainingUses(prev => prev - 1);
      
      toast({
        title: "Success",
        description: "Background removed successfully!",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to remove background. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isEmailSubmitted) {
    return (
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Enter your email to get started</h2>
          <p className="text-sm text-gray-600">
            We'll send you updates about our AI background removal tool and other exciting features.
            You can use the tool up to {MAX_USES} times with one email address.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleEmailSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full text-right text-sm text-gray-600">
            Remaining uses: {remainingUses}
          </div>
          <ImageDropzone
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
          />
          {selectedImage && (
            <ProcessingButton
              onClick={handleRemoveBackground}
              loading={loading}
              disabled={remainingUses <= 0}
            />
          )}
          {remainingUses <= 0 && (
            <p className="text-red-500 text-sm">
              You have reached the maximum number of uses for this email.
            </p>
          )}
        </div>
      </Card>
      <ResultDisplay processedImage={processedImage} />
    </div>
  );
};

export default ImageUploader;