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
          timeoutId = setTimeout(typeText, 1000); // Pause before typing again
        } else {
          timeoutId = setTimeout(typeText, 50);
        }
      } else {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeText, 2000); // Pause before deleting
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
            <span className="relative inline-block px-2 py-1">
              <span className="relative z-10 text-primary">make</span>
              <span className="absolute inset-0 border-2 border-primary transform hover:scale-105 transition-transform duration-200"></span>
            </span>
            {" "}
            <span className="text-accent">boring</span>
            <br />
            <span className="typing-text inline-block min-w-[140px]">{displayText}</span>
            {" "}listings
            <br />
            <span className="group relative inline-block cursor-pointer">
              <span className="relative z-10">exciting</span>
              <span className="absolute bottom-0 left-0 w-0 h-2 bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Data-driven design that converts browsers into buyers. No fluff, just results.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 font-mono">
            <Sparkles className="mr-2 h-4 w-4" /> Make My Listings Pop
          </Button>

          <div className="grid grid-cols-2 gap-16 pt-24">
            <div className="text-left">
              <h2 className="text-3xl font-mono font-bold mb-6">
                The power of creative that converts
              </h2>
            </div>
            <div className="text-right">
              <p className="text-lg md:text-xl font-mono font-normal text-gray-800">
                If you want to grab{" "}
                <span className="bg-accent/20 px-1">attention</span>, {" "}
                <span className="bg-accent/20 px-1">drive clicks</span>, and supercharge your{" "}
                <span className="bg-accent/20 px-1">conversions</span>.
              </p>
              <p className="text-xl font-mono font-bold mt-4">
                You need a Final Upload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};