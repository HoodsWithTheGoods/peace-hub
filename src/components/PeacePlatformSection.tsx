'use client';

import React from 'react';

const platformInitiatives = [
  {
    title: "Peace in the Neighbourhood",
    description: "Local events and initiatives for cooperation.",
    icon: "🏘️"
  },
  {
    title: "Peace Centers",
    description: "Open spaces for learning, collaboration, and innovation.",
    icon: "🏛️"
  },
  {
    title: "E-Peace Education",
    description: "An online hub for peace learning and dialogue.",
    icon: "💻"
  },
  {
    title: "Social Mentorship Platform",
    description: "Connecting mentors and mentees for growth.",
    icon: "👥"
  },
  {
    title: "Seeds of Peace",
    description: "Empowering youth with leadership and community skills.",
    icon: "🌱"
  },
  {
    title: "Social Influencer Studios",
    description: "Amplifying positive voices for social change.",
    icon: "📡"
  }
];

export default function PeacePlatformSection() {
  return (
    <section className="py-20 px-10 bg-primary-blue">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-8">
            The Peace Platform
          </h2>
          <p className="text-lg text-[#E5E5E5] max-w-3xl mx-auto leading-relaxed">
            The Peace Platform is our engine for long-term change – an integrated system of initiatives that nurture peace in every sector.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformInitiatives.map((initiative, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center text-white hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-bold uppercase mb-4">{initiative.title}</h3>
              <p className="text-[#E5E5E5] leading-relaxed">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
