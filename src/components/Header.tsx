
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-brand-blue">
            Kloud<span className="text-brand-orange">OptimizeX</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex space-x-3">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              <Link to="/signup">Get Started</Link>
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
                <Link to="/login">Sign In</Link>
              </Button>
              <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white w-full">
                <Link to="/signup">Get Started</Link>
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
      <Link to="/#how-it-works" className={linkClass}>How It Works</Link>
      <Link to="/#features" className={linkClass}>Features</Link>
      <Link to="/#pricing" className={linkClass}>Pricing</Link>
      <Link to="/#contact" className={linkClass}>Contact</Link>
    </div>
  );
};

export default Header;
