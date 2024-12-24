import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Image className="h-8 w-8" />
            <span className="font-bold">Lovable</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/blog" className="text-foreground/60 hover:text-foreground">
              Blog
            </Link>
            <Link
              to="/background-remover"
              className="flex items-center space-x-1 text-foreground/60 hover:text-foreground"
            >
              <span>Free Tool</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};