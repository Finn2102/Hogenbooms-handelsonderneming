import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-lg">
            HH
          </div>
          <span className="text-xl font-bold hidden sm:inline">Hogenbooms Handelsonderneming</span>
          <span className="text-xl font-bold sm:hidden">Hogenbooms</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-accent transition-colors duration-200">
            Home
          </a>
          <a href="#producten" className="hover:text-accent transition-colors duration-200">
            Producten
          </a>
          <a href="#over-ons" className="hover:text-accent transition-colors duration-200">
            Over ons
          </a>
          <a href="#contact" className="hover:text-accent transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-gray-700 pb-4">
          <nav className="flex flex-col gap-3 px-4 pt-4">
            <a
              href="#home"
              className="hover:text-accent transition-colors duration-200 block py-2"
              onClick={handleMenuClick}
            >
              Home
            </a>
            <a
              href="#producten"
              className="hover:text-accent transition-colors duration-200 block py-2"
              onClick={handleMenuClick}
            >
              Producten
            </a>
            <a
              href="#over-ons"
              className="hover:text-accent transition-colors duration-200 block py-2"
              onClick={handleMenuClick}
            >
              Over ons
            </a>
            <a
              href="#contact"
              className="hover:text-accent transition-colors duration-200 block py-2"
              onClick={handleMenuClick}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
