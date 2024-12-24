import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [text, setText] = useState("");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    const fullText = "Amazon";

    const typeText = () => {
      let timeoutId: number;

      if (isDeleting) {
        setText(fullText.substring(0, currentIndex));
        currentIndex--;
        if (currentIndex === 0) {
          isDeleting = false;
          timeoutId = setTimeout(typeText, 1000);
        } else {
          timeoutId = setTimeout(typeText, 50);
        }
      } else {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex === fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeText, 2000);
        } else {
          timeoutId = setTimeout(typeText, 150);
        }
      }

      timeoutRef.current = timeoutId;
    };

    typeText();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-16 md:w-2/3 md:mb-0">
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
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
              {" "}
              <span className="typing-text">{text}</span>
              {" "}
              <br />
              <span className="group relative inline-block cursor-pointer">
                <span className="relative z-10">exciting</span>
                <span className="absolute bottom-0 left-0 w-full h-[30%] origin-left scale-x-0 bg-yellow-300/50 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;