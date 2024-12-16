import { Image } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const BackgroundRemoverPromo = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-8">
            <Image className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Professional Product Images in Seconds
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Remove backgrounds from your product images instantly with our AI-powered tool.
            Perfect for Amazon sellers and e-commerce businesses.
          </p>
          <Button
            onClick={() => navigate("/background-remover")}
            size="lg"
            className="bg-accent hover:bg-accent/90"
          >
            Try Background Remover
          </Button>
        </div>
      </div>
    </section>
  );
};