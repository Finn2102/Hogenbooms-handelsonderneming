import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <section id="producten" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Onze Producten
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Wij bieden een breed assortiment van professionele gereedschappen en industriële materialen van de hoogste kwaliteit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
