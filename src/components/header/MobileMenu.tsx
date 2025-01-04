import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onContactClick: () => void;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onContactClick, onClose }: MobileMenuProps) => {
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
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigation(item.href)}
            className="text-gray-600 hover:text-primary transition-colors font-mono text-left"
          >
            {item.label}
          </button>
        ))}
        <Button 
          variant="default" 
          className="bg-accent hover:bg-accent/90 font-mono w-full"
          onClick={() => {
            onContactClick();
            onClose();
          }}
        >
          Get Started
        </Button>
      </nav>
    </div>
  );
};