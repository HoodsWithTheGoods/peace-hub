'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-20 px-10 bg-primary-orange">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white uppercase mb-8">
          Join Our Garden
        </h2>
        <p className="text-xl text-white mb-12 leading-relaxed">
          Stay connected with our peace-building community. 
          Get updates on programs, events, and opportunities to make a difference.
        </p>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary-yellow text-text-primary placeholder-text-muted"
              required
            />
            <Button className="bg-primary-yellow hover:bg-primary-yellow/90 text-text-primary px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-300 hover:scale-105">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
