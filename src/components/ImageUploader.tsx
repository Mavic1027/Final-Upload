import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ImageDropzone from "./background-remover/ImageDropzone";
import ProcessingButton from "./background-remover/ProcessingButton";
import ResultDisplay from "./background-remover/ResultDisplay";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('background_remover_emails')
        .insert([{ email }]);

      if (error) throw error;

      setIsEmailSubmitted(true);
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
    if (!selectedImage) return;

    setLoading(true);
    try {
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
          <ImageDropzone
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
          />
          {selectedImage && (
            <ProcessingButton
              onClick={handleRemoveBackground}
              loading={loading}
            />
          )}
        </div>
      </Card>
      <ResultDisplay processedImage={processedImage} />
    </div>
  );
};

export default ImageUploader;