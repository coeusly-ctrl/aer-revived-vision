import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/aer-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Collections Copilot Logo" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Collections Copilot
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a href="#how-it-works" className="block text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="block text-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </a>
            <Button className="w-full bg-gradient-primary">
              Join Waitlist
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;