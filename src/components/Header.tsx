import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ContactFormOverlay } from "./ContactFormOverlay";
import { Logo } from "./header/Logo";
import { Navigation } from "./header/Navigation";
import { MobileMenu } from "./header/MobileMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <Navigation onContactClick={() => setIsFormOpen(true)} />
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen}
        onContactClick={() => setIsFormOpen(true)}
        onClose={() => setIsMenuOpen(false)}
      />

      <ContactFormOverlay 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </header>
  );
};