
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-brand-blue">
            Cloud<span className="text-brand-orange">OptimizeX</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex space-x-3">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Sign In
            </Button>
            <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-brand-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white p-4 pt-2 pb-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile />
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full">
                Sign In
              </Button>
              <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const navClass = mobile ? "flex flex-col space-y-4" : "flex space-x-8";
  const linkClass = "font-medium text-gray-600 hover:text-brand-blue transition-colors duration-200";

  return (
    <div className={navClass}>
      <a href="#how-it-works" className={linkClass}>How It Works</a>
      <a href="#features" className={linkClass}>Features</a>
      <a href="#pricing" className={linkClass}>Pricing</a>
      <a href="#contact" className={linkClass}>Contact</a>
    </div>
  );
};

export default Header;
