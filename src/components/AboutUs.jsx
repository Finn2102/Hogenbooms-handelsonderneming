import React from 'react';

export default function AboutUs() {
  return (
    <section id="over-ons" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full h-80 bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-white text-center px-6">
                <p className="text-xl font-bold">Sinds 1985</p>
                <p className="text-sm mt-2">Uw betrouwbare partner</p>
              </span>
            </div>
          </div>

          {/* Right side - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Over ons
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Hogenbooms Handelsonderneming is een familiebedrijf met meer dan 40 jaar ervaring in de handel van industriële producten en professioneel gereedschap.
              </p>
              <p>
                Wij staan bekend om onze toewijding aan kwaliteit, betrouwbaarheid en uitstekende klantenservice. Ons passie voor vakmanschap en innovatie stimuleert ons om steeds de beste producten aan te bieden.
              </p>
              <p>
                Met een team van ervaren professionals helpen wij zowel kleine bedrijven als grote industriële onderneming en met hun behoeften. Uw succes is onze succes.
              </p>
              <p className="font-semibold">
                We bieden:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Uitgebreide assortiment professioneel gereedschap</li>
                <li>Deskundige advies en ondersteuning</li>
                <li>Competitieve prijzen en kwaliteit</li>
                <li>Snelle en betrouwbare bezorging</li>
                <li>Persoonlijke dienstverlening</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
