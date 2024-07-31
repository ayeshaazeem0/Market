// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Shop
        </h1>
        <p className="text-gray-600 mb-8">
          Discover the best products at unbeatable prices.
        </p>
        <a
          href="#shop"
          className="bg-black text-white py-3 px-4 rounded hover:bg-gray-500 transition duration-300 "
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
