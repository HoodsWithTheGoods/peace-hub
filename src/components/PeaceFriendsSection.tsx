'use client';

import React from 'react';

export default function PeaceFriendsSection() {
  return (
    <section className="py-16 px-10 bg-background-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary uppercase mb-12">
          Peace Friends
        </h2>
        
        {/* Partner Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Partner 7 */}
          <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:scale-105">
            <img 
              src="/images/7.png" 
              alt="Partner 7" 
              className="w-24 h-24 object-contain"
            />
          </div>
          
          {/* Partner 8 */}
          <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:scale-105">
            <img 
              src="/images/8.png" 
              alt="Partner 8" 
              className="w-24 h-24 object-contain"
            />
          </div>
          
          {/* Partner 9 */}
          <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:scale-105">
            <img 
              src="/images/9.png" 
              alt="Partner 9" 
              className="w-24 h-24 object-contain"
            />
          </div>
          
          {/* Partner 10 */}
          <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:scale-105">
            <img 
              src="/images/10.png" 
              alt="Partner 10" 
              className="w-24 h-24 object-contain"
            />
          </div>
          
          {/* Partner 11 */}
          <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:scale-105">
            <img 
              src="/images/11.png" 
              alt="Partner 11" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
