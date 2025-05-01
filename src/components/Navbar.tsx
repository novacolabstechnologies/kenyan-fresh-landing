
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-kenya-green flex items-center gap-2">
            <span className="text-kenya-terracotta">Karibu</span> Market
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="font-medium hover:text-kenya-green transition-colors">Products</a>
          <a href="#about" className="font-medium hover:text-kenya-green transition-colors">About Us</a>
          <a href="#testimonials" className="font-medium hover:text-kenya-green transition-colors">Testimonials</a>
          <a href="#contact" className="font-medium hover:text-kenya-green transition-colors">Contact</a>
          <Button className="bg-kenya-terracotta hover:bg-kenya-terracotta/90 flex gap-2 items-center">
            <ShoppingCart className="h-4 w-4" />
            <span>Order Online</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full py-4 shadow-md animate-fade-in">
          <div className="container flex flex-col gap-4">
            <a href="#products" className="font-medium hover:text-kenya-green transition-colors py-2 border-b">Products</a>
            <a href="#about" className="font-medium hover:text-kenya-green transition-colors py-2 border-b">About Us</a>
            <a href="#testimonials" className="font-medium hover:text-kenya-green transition-colors py-2 border-b">Testimonials</a>
            <a href="#contact" className="font-medium hover:text-kenya-green transition-colors py-2">Contact</a>
            <Button className="bg-kenya-terracotta hover:bg-kenya-terracotta/90 flex gap-2 items-center">
              <ShoppingCart className="h-4 w-4" />
              <span>Order Online</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
