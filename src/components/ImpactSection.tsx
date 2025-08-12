'use client';

import React from 'react';

const impactItems = [
  {
    number: "500+",
    title: "Community Members",
    description: "Active participants in our peace programs",
    color: "text-primary-blue"
  },
  {
    number: "25",
    title: "Communities", 
    description: "Served across different regions",
    color: "text-primary-yellow"
  },
  {
    number: "95%",
    title: "Success Rate",
    description: "In conflict resolution programs",
    color: "text-primary-orange"
  },
  {
    number: "3",
    title: "Years",
    description: "Of cultivating peace together",
    color: "text-primary-blue"
  }
];

export default function ImpactSection() {
  return (
    <section className="py-20 px-10 bg-background-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-text-primary uppercase mb-16">
          Our Impact
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {impactItems.map((item) => (
            <div key={item.title}>
              <div className={`text-6xl font-black ${item.color} mb-4`}>
                {item.number}
              </div>
              <h3 className="text-xl font-bold text-text-primary uppercase mb-2">{item.title}</h3>
              <p className="text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
