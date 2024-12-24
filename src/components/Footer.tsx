import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/8e4b0a16-6c33-496b-bb54-9edf496b20ab.png" 
                alt="final upload logo" 
                className="w-8 h-8"
              />
              <h3 className="font-heading text-xl font-bold text-white">
                final upload
              </h3>
            </div>
            <p className="mb-4">
              Data-driven design services for Amazon sellers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent">
                  Pricing
                </a>
              </li>
              <li>
                <Link to="/background-remover" className="hover:text-accent">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:hello@afterhourscreative.com" className="hover:text-accent">
                  hello@afterhourscreative.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Newsletter
            </h4>
            <p className="mb-4">
              Subscribe for Amazon selling tips and design insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700"
              />
              <Button className="bg-accent hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>
            © {year} After Hours Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};