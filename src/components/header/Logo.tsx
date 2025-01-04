import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export const Logo = () => {
  const [progress] = useState(13);

  return (
    <a href="/" className="flex items-center space-x-2">
      <div className="relative w-16 h-16">
        <img 
          src="/lovable-uploads/cf63f306-29f4-4bdd-8c87-432d51ea24c9.png" 
          alt="Final Upload Logo" 
          className="w-full h-full object-contain"
        />
        <div className="absolute -bottom-2 left-0 right-0 w-full">
          <Progress value={progress} className="h-1" />
        </div>
      </div>
      <span className="font-mono text-lg font-bold">final upload</span>
    </a>
  );
};