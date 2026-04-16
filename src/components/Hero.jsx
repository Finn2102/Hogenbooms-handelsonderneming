import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary to-gray-800 text-white py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Kwaliteit & Betrouwbaarheid
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Hogenbooms Handelsonderneming - Uw partner in industriële oplossingen en professioneel gereedschap sinds 1985.
        </p>
        <a
          href="#producten"
          className="inline-block bg-accent hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg transform hover:scale-105 transition-transform"
        >
          Bekijk onze producten
        </a>
      </div>
    </section>
  );
}
