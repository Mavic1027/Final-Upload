import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageDropzoneProps {
  onImageSelect: (file: File) => void;
  selectedImage: File | null;
}

const ImageDropzone = ({ onImageSelect, selectedImage }: ImageDropzoneProps) => {
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
      onImageSelect(file);
    }
  };

  return (
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
            onClick={() => onImageSelect(null as any)}
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
  );
};

export default ImageDropzone;