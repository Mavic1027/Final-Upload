import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ImageUploader from "@/components/ImageUploader";
import AuthForm from "@/components/AuthForm";

const BackgroundRemover = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    toast({
      title: "Success!",
      description: "You can now use the background remover tool.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            AI Background Remover
          </h1>
          <p className="text-center mb-8 text-lg">
            Remove backgrounds from your product images instantly with our AI-powered tool.
          </p>

          {!isAuthenticated ? (
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Sign up to get started</h2>
              <AuthForm onSuccess={handleAuthSuccess} />
            </Card>
          ) : (
            <ImageUploader />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BackgroundRemover;