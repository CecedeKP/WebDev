
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-primary">
            Nicolas
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
