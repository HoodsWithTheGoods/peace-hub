'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-beige">

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="headline-4 mb-4 text-white">PEACE HUB</h3>
              <p className="body-text text-white opacity-90 mb-6">
                Cultivating grassroots peace through structured collaboration and community engagement.
              </p>
              <div className="flex gap-4">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="headline-4 mb-4 text-white">QUICK LINKS</h4>
              <div className="flex flex-col gap-2">
                <a href="#about" className="footer-link">About Us</a>
                <a href="#programs" className="footer-link">Programs</a>
                <a href="#contact" className="footer-link">Contact</a>
                <a href="#get-involved" className="footer-link">Get Involved</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="headline-4 mb-4 text-white">CONTACT</h4>
              <div className="flex flex-col gap-2">
                <p className="body-text text-white opacity-90">
                  <i className="fas fa-envelope mr-2"></i>
                  info@peacehub.org
                </p>
                <p className="body-text text-white opacity-90">
                  <i className="fas fa-phone mr-2"></i>
                  +49 30 123 4567
                </p>
                <p className="body-text text-white opacity-90">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Berlin, Germany
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white border-opacity-20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="footer-copyright">
                © 2024 Peace Hub. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="/impressum" className="footer-link">Impressum</a>
                <a href="/datenschutz" className="footer-link">Datenschutz</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 