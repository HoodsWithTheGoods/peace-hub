'use client';

import React from 'react';
import { Button } from './ui/button';

export default function VisionSection() {
  return (
    <section className="py-20 px-10 bg-background-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary uppercase mb-8">
              The Vision
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Like a carefully tended garden, peace doesn't happen by accident. 
                It requires intentional design, patient cultivation, and the right conditions for growth.
              </p>
              <p>
                At Peace Hub, we believe that lasting peace emerges from the grassroots—
                when communities come together with purpose, structure, and shared commitment 
                to understanding.
              </p>
              <p>
                Our approach transforms conflict into collaboration, 
                diversity into strength, and isolation into connection.
              </p>
            </div>
            <Button className="bg-primary-yellow hover:bg-primary-yellow/90 text-text-primary px-8 py-4 rounded-full font-bold uppercase text-base tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(74,127,255,0.3)]">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="bg-primary-yellow rounded-[20px] p-8 transform rotate-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" 
                alt="Community garden" 
                className="w-full h-auto rounded-[12px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <h3 className="text-2xl font-bold text-text-primary uppercase mb-2">Peace Garden</h3>
              <p className="text-sm text-text-secondary">Growing harmony through intention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
