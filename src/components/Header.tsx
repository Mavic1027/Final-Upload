import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { ContactFormOverlay } from "./ContactFormOverlay";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(13);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Design Services", href: "/#services" },
    { label: "Free Tool", href: "/background-remover" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/#blog" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on the home page and trying to access a section
      if (location.pathname !== '/') {
        navigate('/');
        // Add a small delay to allow the navigation to complete
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If we're already on the home page, just scroll
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For non-anchor links, just navigate
      navigate(href);
    }
  };

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
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-600 hover:text-primary transition-colors font-mono"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/90 font-mono"
              onClick={() => setIsFormOpen(true)}
            >
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
              <button
                key={item.label}
                onClick={() => {
                  handleNavigation(item.href);
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-primary transition-colors font-mono text-left"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/90 font-mono w-full"
              onClick={() => {
                setIsFormOpen(true);
                setIsMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}

      <ContactFormOverlay 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </header>
  );
};