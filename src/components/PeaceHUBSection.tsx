'use client';

import React from 'react';

export default function PeaceHUBSection() {
  return (
    <section className="py-20 px-10 bg-background-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary uppercase mb-8">
              PeaceHUB: Incubating Peace Across Social Sectors
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                At PeaceHub, we are building the digital and physical spaces where peace is not just imagined – it&apos;s designed, tested, and lived.
              </p>
              <p>
                Through PeaceHUB, we connect changemakers across generations, professions, and cultures to collaborate on real solutions for our communities.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary-yellow rounded-[20px] p-8 transform rotate-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <img 
                src="/images/1.png" 
                alt="PeaceHUB community gathering and collaboration event" 
                className="w-full h-auto rounded-[12px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <h3 className="text-2xl font-bold text-text-primary uppercase mb-2">PeaceHUB</h3>
              <p className="text-sm text-text-secondary">Where peace is designed and lived</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
