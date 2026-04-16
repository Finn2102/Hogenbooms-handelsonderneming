import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold">
                HH
              </div>
              <h3 className="text-lg font-bold">Hogenbooms Handelsonderneming</h3>
            </div>
            <p className="text-gray-400">
              Uw partner in professioneel gereedschap en industriële oplossingen sinds 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigatie</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#producten" className="hover:text-accent transition-colors">
                  Producten
                </a>
              </li>
              <li>
                <a href="#over-ons" className="hover:text-accent transition-colors">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacteer ons</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+31612345678" className="hover:text-accent transition-colors">
                  +31 (0)6 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@hogenbooms.nl" className="hover:text-accent transition-colors">
                  info@hogenbooms.nl
                </a>
              </li>
              <li className="text-sm">
                Boterdijk 115<br />
                1424 ND De Kwakel<br />
                Nederland
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Hogenbooms Handelsonderneming. Alle rechten voorbehouden.
            </p>
            <p className="text-xs italic">
              ✨ Dit is een demo/concept website
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
