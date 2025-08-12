'use client';

import React from 'react';

export default function LivingLabsSection() {
  return (
    <section className="py-20 px-10 bg-background-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary uppercase mb-8">
              Living Labs
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Our events are living labs – real-world innovation ecosystems where ideas meet action.
              </p>
              <p>
                We use structured problem-solving, decision-making, and collaborative methods to inspire bottom-up commitment from unexpected actors.
              </p>
              <p>
                This is where social barriers dissolve and new alliances form.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-primary-orange rounded-[20px] p-8 transform -rotate-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <img 
                src="/images/2.png" 
                alt="Living Labs workshop with participants collaborating and problem-solving" 
                className="w-full h-auto rounded-[12px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <h3 className="text-2xl font-bold text-text-primary uppercase mb-2">Innovation Ecosystem</h3>
              <p className="text-sm text-text-secondary">Where ideas become action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
