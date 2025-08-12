'use client';

import React from 'react';
import { Button } from './ui/button';
import dynamic from 'next/dynamic';

const World = dynamic(() => import('./ui/globe').then(mod => ({ default: mod.World })), {
  ssr: false,
});

// Sample data for the globe visualization - Long distance connections only
const globeData = [
  // Cross-continental connections only
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.0060, // NYC
    endLat: 51.5074,
    endLng: -0.1278, // London
    arcAlt: 0.3,
    color: "#FFB6C1" // Light pink
  },
  {
    order: 2,
    startLat: 40.7128,
    startLng: -74.0060, // NYC
    endLat: 35.6762,
    endLng: 139.6503, // Tokyo
    arcAlt: 0.4,
    color: "#87CEEB" // Sky blue
  },
  {
    order: 3,
    startLat: 40.7128,
    startLng: -74.0060, // NYC
    endLat: -33.8688,
    endLng: 151.2093, // Sydney
    arcAlt: 0.5,
    color: "#98FB98" // Pale green
  },
  {
    order: 4,
    startLat: 40.7128,
    startLng: -74.0060, // NYC
    endLat: 55.7558,
    endLng: 37.6176, // Moscow
    arcAlt: 0.3,
    color: "#DDA0DD" // Plum
  },
  {
    order: 5,
    startLat: 40.7128,
    startLng: -74.0060, // NYC
    endLat: -26.2041,
    endLng: 28.0473, // Johannesburg
    arcAlt: 0.4,
    color: "#F0E68C" // Khaki
  },
  {
    order: 6,
    startLat: 40.7128,
    startLng: -74.0060, // NYC
    endLat: -23.5505,
    endLng: -46.6333, // São Paulo
    arcAlt: 0.4,
    color: "#FFA07A" // Light salmon
  },
  {
    order: 7,
    startLat: 51.5074,
    startLng: -0.1278, // London
    endLat: 35.6762,
    endLng: 139.6503, // Tokyo
    arcAlt: 0.4,
    color: "#B0E0E6" // Powder blue
  },
  {
    order: 8,
    startLat: 51.5074,
    startLng: -0.1278, // London
    endLat: -33.8688,
    endLng: 151.2093, // Sydney
    arcAlt: 0.5,
    color: "#FFE4B5" // Moccasin
  },
  {
    order: 9,
    startLat: 51.5074,
    startLng: -0.1278, // London
    endLat: -26.2041,
    endLng: 28.0473, // Johannesburg
    arcAlt: 0.4,
    color: "#E6E6FA" // Lavender
  },
  {
    order: 10,
    startLat: 51.5074,
    startLng: -0.1278, // London
    endLat: -23.5505,
    endLng: -46.6333, // São Paulo
    arcAlt: 0.4,
    color: "#FFB6C1" // Light pink
  },
  {
    order: 11,
    startLat: 35.6762,
    startLng: 139.6503, // Tokyo
    endLat: -33.8688,
    endLng: 151.2093, // Sydney
    arcAlt: 0.4,
    color: "#87CEEB" // Sky blue
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503, // Tokyo
    endLat: -26.2041,
    endLng: 28.0473, // Johannesburg
    arcAlt: 0.4,
    color: "#98FB98" // Pale green
  },
  {
    order: 13,
    startLat: 35.6762,
    startLng: 139.6503, // Tokyo
    endLat: -23.5505,
    endLng: -46.6333, // São Paulo
    arcAlt: 0.5,
    color: "#DDA0DD" // Plum
  },
  {
    order: 14,
    startLat: 35.6762,
    startLng: 139.6503, // Tokyo
    endLat: 55.7558,
    endLng: 37.6176, // Moscow
    arcAlt: 0.3,
    color: "#F0E68C" // Khaki
  },
  {
    order: 15,
    startLat: 55.7558,
    startLng: 37.6176, // Moscow
    endLat: -33.8688,
    endLng: 151.2093, // Sydney
    arcAlt: 0.4,
    color: "#FFA07A" // Light salmon
  },
  {
    order: 16,
    startLat: 55.7558,
    startLng: 37.6176, // Moscow
    endLat: -26.2041,
    endLng: 28.0473, // Johannesburg
    arcAlt: 0.3,
    color: "#B0E0E6" // Powder blue
  },
  {
    order: 17,
    startLat: 55.7558,
    startLng: 37.6176, // Moscow
    endLat: -23.5505,
    endLng: -46.6333, // São Paulo
    arcAlt: 0.4,
    color: "#FFE4B5" // Moccasin
  },
  {
    order: 18,
    startLat: -33.8688,
    startLng: 151.2093, // Sydney
    endLat: -26.2041,
    endLng: 28.0473, // Johannesburg
    arcAlt: 0.4,
    color: "#E6E6FA" // Lavender
  },
  {
    order: 19,
    startLat: -33.8688,
    startLng: 151.2093, // Sydney
    endLat: -23.5505,
    endLng: -46.6333, // São Paulo
    arcAlt: 0.4,
    color: "#FFB6C1" // Light pink
  },
  {
    order: 20,
    startLat: -26.2041,
    startLng: 28.0473, // Johannesburg
    endLat: -23.5505,
    endLng: -46.6333, // São Paulo
    arcAlt: 0.3,
    color: "#87CEEB" // Sky blue
  }
];

const globeConfig = {
  globeColor: "#95BEDC", // Lighter blue
  atmosphereColor: "#ffffff",
  showAtmosphere: true,
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(244, 248, 6, 0.7)",
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1500, // Faster animation
  arcLength: 0.8, // Slightly shorter arcs for more dynamic feel
  rings: 1, // More rings
  maxRings: 3, // More max rings
  autoRotate: true,
  autoRotateSpeed: 0.8 // Much faster rotation
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background-primary overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-4xl max-h-4xl">
          <World globeConfig={globeConfig} data={globeData} />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-primary-yellow uppercase tracking-[-2px] mb-6">
          Building Peace Together
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto text-white leading-relaxed">
          From dialogue to action – uniting generations, communities, and institutions for a sustainable peace.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="primary" size="lg" className="text-lg px-8 py-4">
            Join the Movement
          </Button>
        </div>
      </div>
    </section>
  );
}
