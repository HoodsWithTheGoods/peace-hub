'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Link href="/">
                <img 
                  src="/images/Logo.png" 
                  alt="PeaceHUB Logo" 
                  className="h-12 w-auto mr-3"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-text-muted mb-6">
              Cultivating grassroots peace through structured collaboration and community engagement.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/peace_hub_europe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center hover:bg-primary-blue/90 transition-colors cursor-pointer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 50 50" 
                  width="20" 
                  height="20"
                  fill="white"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-text-muted hover:text-primary-blue transition-colors uppercase">Home</a></li>
              <li><a href="/about" className="text-text-muted hover:text-primary-blue transition-colors uppercase">About Us</a></li>
              <li><a href="/contact" className="text-text-muted hover:text-primary-blue transition-colors uppercase">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="text-text-muted hover:text-primary-blue transition-colors uppercase">Impressum</a></li>
              <li><a href="/datenschutz" className="text-text-muted hover:text-primary-blue transition-colors uppercase">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#333333] mt-8 pt-8 text-center">
          <p className="text-sm text-text-secondary">
            © 2024 Peace Hub. All rights reserved. | Building peace, one community at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
