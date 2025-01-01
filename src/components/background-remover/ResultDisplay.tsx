import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ResultDisplayProps {
  processedImage: string | null;
}

const ResultDisplay = ({ processedImage }: ResultDisplayProps) => {
  if (!processedImage) return null;

  return (
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
  );
};

export default ResultDisplay;