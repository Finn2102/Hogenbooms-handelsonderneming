import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Neem contact met ons op
          </h2>
          <p className="text-gray-600 text-lg">
            Wij staan klaar om u te helpen. Benaderjaar ons via telefoon, e-mail of het contactformulier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Contactgegevens
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Telefoon</h4>
                  <a href="tel:+31612345678" className="text-gray-600 hover:text-accent transition-colors">
                    +31 (0)6 1234 5678
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">E-mail</h4>
                  <a href="mailto:info@hogenbooms.nl" className="text-gray-600 hover:text-accent transition-colors">
                    info@hogenbooms.nl
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Adres</h4>
                  <p className="text-gray-600">
                    Industrieweg 42<br />
                    3261 AB Rotterdam<br />
                    Nederland
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Openingstijden</h4>
                  <p className="text-gray-600">
                    Maandag - Vrijdag: 08:00 - 17:30<br />
                    Zaterdag: 09:00 - 13:00<br />
                    Zondag: Gesloten
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Stuur ons een bericht
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Bedankt! Uw bericht is ontvangen. We nemen zo snel mogelijk contact met u op.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Uw naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Jan Jansen"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="jan@voorbeeld.nl"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="+31 (0)6 1234 5678"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                  Onderwerp *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Uw onderwerp"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                  placeholder="Uw bericht hier..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 transition-transform"
              >
                Verzenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
