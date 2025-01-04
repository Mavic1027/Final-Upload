import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationProps {
  onContactClick: () => void;
}

export const Navigation = ({ onContactClick }: NavigationProps) => {
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
  };

  return (
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
        onClick={onContactClick}
      >
        Get Started
      </Button>
    </nav>
  );
};