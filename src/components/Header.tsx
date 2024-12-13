import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Design Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-2">
            <span className="w-8 h-8 bg-accent rounded-full"></span>
            <span className="font-mono text-lg font-bold">After Hours Creative</span>
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