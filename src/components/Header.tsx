import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(13);

  const navItems = [
    { label: "Design Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-2">
            <div className="relative w-16 h-16">
              <img 
                src="/lovable-uploads/f3a3a9e1-1184-4623-9309-31dee722768b.png" 
                alt="Final Upload Logo" 
                className="w-full h-full object-contain animate-pulse"
              />
              <div className="absolute -bottom-2 left-0 right-0 w-full">
                <Progress value={progress} className="h-1" />
              </div>
            </div>
            <span className="font-mono text-lg font-bold">final upload</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors font-mono"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="bg-accent hover:bg-accent/90 font-mono">
              Get Started
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="bg-accent hover:bg-accent/90 font-mono w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};