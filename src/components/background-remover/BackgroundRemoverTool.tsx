import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ImageDropzone from "./ImageDropzone";
import ProcessingButton from "./ProcessingButton";
import ResultDisplay from "./ResultDisplay";

interface BackgroundRemoverToolProps {
  email: string;
  remainingUses: number;
  onUsageUpdate: (newRemainingUses: number) => void;
}

const BackgroundRemoverTool = ({ 
  email, 
  remainingUses, 
  onUsageUpdate 
}: BackgroundRemoverToolProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleRemoveBackground = async () => {
    if (!selectedImage || remainingUses <= 0) return;

    setLoading(true);
    try {
      // Update usage count using RPC call to the increment_usage_count function
      const { data: usageData, error: updateError } = await supabase
        .rpc('increment_usage_count', { user_email: email });

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
      onUsageUpdate(remainingUses - 1);
      
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

export default BackgroundRemoverTool;