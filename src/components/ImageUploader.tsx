import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "Image must be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedImage(file);
      setProcessedImage(null);
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

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-xl h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4">
            {selectedImage ? (
              <div className="relative w-full h-full">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="w-full h-full object-contain"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => setSelectedImage(null)}
                >
                  Change Image
                </Button>
              </div>
            ) : (
              <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  Click or drag image to upload
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageSelect}
                />
              </label>
            )}
          </div>

          {selectedImage && (
            <Button
              onClick={handleRemoveBackground}
              disabled={loading}
              className="w-full max-w-md"
            >
              {loading ? "Processing..." : "Remove Background"}
            </Button>
          )}
        </div>
      </Card>

      {processedImage && (
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Result</h3>
          <div className="w-full max-w-xl mx-auto">
            <img
              src={processedImage}
              alt="Processed"
              className="w-full h-auto"
            />
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => {
                const link = document.createElement("a");
                link.href = processedImage;
                link.download = "processed-image.png";
                link.click();
              }}
            >
              Download Image
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ImageUploader;