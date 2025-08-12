'use client';

import React from 'react';

const ongoingProjects = [
  {
    title: "Peace Concert",
    description: "Music as a universal language for unity.",
    icon: "🎵",
    color: "bg-primary-blue"
  },
  {
    title: "Peace Service",
    description: "Civil service opportunities dedicated to peace.",
    icon: "🤲",
    color: "bg-primary-orange"
  },
  {
    title: "Case Study Sharing",
    description: "Spreading success stories to inspire others.",
    icon: "📖",
    color: "bg-primary-yellow"
  },
  {
    title: "Peace Investigative Journalism",
    description: "Uncovering stories that matter for peace.",
    icon: "📰",
    color: "bg-primary-blue"
  }
];

export default function OngoingProjectsSection() {
  return (
    <section className="py-20 px-10 bg-background-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary uppercase mb-8">
            Ongoing Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our projects turn ideas into measurable impact:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {ongoingProjects.map((project, index) => (
            <div key={index} className={`${project.color} rounded-[20px] p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)]`}>
              <div className="flex items-start gap-6">
                <div className="text-5xl">{project.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold uppercase mb-4">{project.title}</h3>
                  <p className="text-[#E5E5E5] leading-relaxed text-lg">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
