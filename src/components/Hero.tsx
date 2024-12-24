import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Amazon";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (isDeleting) {
        setDisplayText(fullText.substring(0, currentIndex - 1));
        currentIndex--;
        if (currentIndex === 0) {
          isDeleting = false;
          timeoutId = setTimeout(typeText, 1000);
        } else {
          timeoutId = setTimeout(typeText, 50);
        }
      } else {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeText, 2000);
        } else {
          timeoutId = setTimeout(typeText, 150);
        }
      }
    };

    if (isTyping) {
      timeoutId = setTimeout(typeText, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [isTyping]);

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-mono text-4xl md:text-6xl font-bold leading-tight">
            We{" "}
            <span className="relative inline-block px-2">
              <span className="relative z-10 text-primary">make</span>
              <span className="absolute inset-0 border border-yellow-300 transform hover:scale-105 transition-transform duration-200">
                <span className="absolute w-2 h-2 border border-yellow-300 -top-1 -left-1 bg-white"></span>
                <span className="absolute w-2 h-2 border border-yellow-300 -top-1 -right-1 bg-white"></span>
                <span className="absolute w-2 h-2 border border-yellow-300 -bottom-1 -left-1 bg-white"></span>
                <span className="absolute w-2 h-2 border border-yellow-300 -bottom-1 -right-1 bg-white"></span>
              </span>
            </span>
            {" "}
            <span className="text-accent">boring</span>
            <br />
            <span className="typing-text inline-block min-w-[140px]">{displayText}</span>
            {" "}listings
            <br />
            <span className="group relative inline-block cursor-pointer">
              <span className="relative z-10">exciting</span>
              <span className="absolute bottom-0 left-0 w-full h-[30%] origin-left scale-x-0 bg-yellow-300/50 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Data-driven design that converts browsers into buyers. No fluff, just results.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 font-mono"
            onClick={() => window.location.href = '/contact'}
          >
            <Sparkles className="mr-2 h-4 w-4" /> Make My Listings Pop
          </Button>
        </div>
      </div>
    </section>
  );
};