import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function ProductCard({ product }) {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-primary mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-4">
          {user ? (
            <span className="text-2xl font-bold text-accent">
              €{product.price.toFixed(2).replace('.', ',')}
            </span>
          ) : (
            <span className="text-lg font-semibold text-gray-500">
              Prijs zichtbaar voor klanten
            </span>
          )}
          <button className="bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold">
            Meer info
          </button>
        </div>
      </div>
    </div>
  );
}
