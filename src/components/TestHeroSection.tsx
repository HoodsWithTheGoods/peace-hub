'use client';

import React from 'react';

export default function TestHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop" 
          alt="Peace garden background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-indigo-600 uppercase tracking-tight mb-6">
          Testing<br />
          Tailwind
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 uppercase">
          With Different Parameters
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          This is a test version with different Tailwind classes to verify that styling is working correctly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all duration-200 hover:scale-105 shadow-lg">
            Test Button 1
          </button>
          <button className="bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all duration-200 hover:scale-105">
            Test Button 2
          </button>
        </div>
      </div>
    </section>
  );
}
