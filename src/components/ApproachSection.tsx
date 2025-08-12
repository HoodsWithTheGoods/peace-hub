'use client';

import React from 'react';

const approachItems = [
  {
    icon: "🌱",
    title: "Cultivate",
    description: "We create the conditions for peace to grow naturally through structured programs and community engagement.",
    bgColor: "bg-primary-yellow"
  },
  {
    icon: "🤝",
    title: "Collaborate", 
    description: "We bring diverse voices together through facilitated dialogue and shared problem-solving initiatives.",
    bgColor: "bg-primary-orange"
  },
  {
    icon: "🌿",
    title: "Connect",
    description: "We build lasting relationships that strengthen communities and create resilient networks of peace.",
    bgColor: "bg-primary-yellow"
  }
];

export default function ApproachSection() {
  return (
    <section className="py-20 px-10 bg-primary-blue">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white uppercase text-center mb-16">
          Our Approach
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {approachItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className={`w-20 h-20 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase mb-4">{item.title}</h3>
              <p className="text-[#E5E5E5] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
