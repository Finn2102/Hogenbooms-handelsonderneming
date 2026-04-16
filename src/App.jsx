import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid products={products} />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
