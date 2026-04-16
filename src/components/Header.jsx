import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    signOut();
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
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
        <div className="hidden md:flex items-center gap-8">
          <a href="/#home" className="hover:text-accent transition-colors duration-200">
            Home
          </a>
          <a href="/#producten" className="hover:text-accent transition-colors duration-200">
            Producten
          </a>
          <a href="/#over-ons" className="hover:text-accent transition-colors duration-200">
            Over ons
          </a>
          <a href="/#contact" className="hover:text-accent transition-colors duration-200">
            Contact
          </a>
          {user ? (
            <>
              <Link
                to="/profile"
                className="hover:text-accent transition-colors duration-200"
              >
                Profiel
              </Link>
              <button
                onClick={handleLogoutClick}
                className="bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Loguit
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              Login
            </Link>
          )}
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
              href="/#home"
              className="hover:text-accent transition-colors duration-200 block py-2"
              onClick={handleMenuClick}
            >
              Home
            </a>
            <a
              href="/#producten"
              className="hover:text-accent transition-colors duration-200 block py-2"
              onClick={handleMenuClick}
            >
              Producten
            </a>
            <a
              href="/#over-ons"
              className="hover:text-accent transition-colors duration-200 block py-2"
              onClick={handleMenuClick}
            >
              Over ons
            </a>
            <a
              href="/#contact"
              className="hover:text-accent transition-colors duration-200 block py-2"
              onClick={handleMenuClick}
            >
              Contact
            </a>
            {user ? (
              <>
                <Link
                  to="/profile"
                  onClick={handleMenuClick}
                  className="hover:text-accent transition-colors duration-200 block py-2"
                >
                  Profiel
                </Link>
                <button
                  onClick={() => {
                    handleLogoutClick();
                    handleMenuClick();
                  }}
                  className="bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
                >
                  Loguit
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={handleMenuClick}
                className="bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-bold text-primary mb-3">Zeker weten?</h2>
            <p className="text-gray-600 mb-6">Wil je zeker uit willen loggen?</p>
            <div className="flex gap-3">
              <button
                onClick={cancelLogout}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Annuleer
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Loguit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
