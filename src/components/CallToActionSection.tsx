'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="py-20 px-10 bg-primary-blue">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-8">
          Be Part of the Story
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-[#E5E5E5] leading-relaxed mb-12">
            Peace is built one connection at a time. Whether you're here to learn, share your expertise, or support our initiatives, there's a place for you at HWPL Essen.
          </p>
          
          <Link href="/contact">
            <Button className="bg-primary-yellow hover:bg-primary-yellow/90 text-text-primary px-12 py-6 rounded-full font-bold uppercase text-xl tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_8px_25px_rgba(255,255,0,0.3)]">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
