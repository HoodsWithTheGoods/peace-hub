'use client';

import React from 'react';

const actionStreams = [
  {
    title: "Community Engagement",
    description: "Events that foster understanding and collaboration.",
    icon: "🤝",
    color: "bg-primary-blue"
  },
  {
    title: "Educational Programs",
    description: "Peace education for all ages.",
    icon: "📚",
    color: "bg-primary-orange"
  },
  {
    title: "Skill-Building Workshops",
    description: "Empowering future leaders.",
    icon: "⚡",
    color: "bg-primary-yellow"
  },
  {
    title: "Awareness Campaigns",
    description: "Spreading the message of peace.",
    icon: "📢",
    color: "bg-primary-blue"
  },
  {
    title: "Mentorship Programs",
    description: "Connecting wisdom with youthful energy.",
    icon: "🌟",
    color: "bg-primary-orange"
  },
  {
    title: "Resource Sharing",
    description: "Uniting tools, spaces, and funding for change.",
    icon: "💎",
    color: "bg-primary-yellow"
  }
];

export default function ActionStreamsSection() {
  return (
    <section className="py-20 px-10 bg-background-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary uppercase mb-8">
            Turning Insights into Action
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From our dialogues, we co-created six action streams that now guide our work:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actionStreams.map((stream, index) => (
            <div key={index} className={`${stream.color} rounded-[20px] p-8 text-center text-white transform hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)]`}>
              <div className="text-4xl mb-4">{stream.icon}</div>
              <h3 className="text-xl font-bold uppercase mb-4">{stream.title}</h3>
              <p className="text-[#E5E5E5] leading-relaxed">{stream.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
