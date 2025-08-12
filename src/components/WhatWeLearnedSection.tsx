'use client';

import React from 'react';

export default function WhatWeLearnedSection() {
  return (
    <section className="py-20 px-10 bg-background-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary uppercase text-center mb-16">
          What We Learned
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Younger Generation */}
          <div className="bg-primary-blue rounded-[20px] p-8 text-center">
            <h3 className="text-2xl font-bold text-white uppercase mb-6">
              From the Younger Generation
            </h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6">
                <p className="text-white font-semibold italic">
                  "Peace begins within."
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6">
                <p className="text-white font-semibold italic">
                  "The youth can bring more change through energy and influence."
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6">
                <p className="text-white font-semibold italic">
                  "We need trust, collaboration, and shared values."
                </p>
              </div>
            </div>
          </div>
          
          {/* Older Generation */}
          <div className="bg-primary-orange rounded-[20px] p-8 text-center">
            <h3 className="text-2xl font-bold text-white uppercase mb-6">
              From the Older Generation
            </h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6">
                <p className="text-white font-semibold italic">
                  "Patience and dedication are essential."
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6">
                <p className="text-white font-semibold italic">
                  "Support diversity and equality."
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6">
                <p className="text-white font-semibold italic">
                  "Guidance and real-world examples matter."
                </p>
              </div>
            </div>
          </div>
          
          {/* Common Challenges */}
          <div className="bg-primary-yellow rounded-[20px] p-8 text-center">
            <h3 className="text-2xl font-bold text-text-primary uppercase mb-6">
              Common Challenges
            </h3>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-[12px] p-4">
                <p className="text-text-primary font-semibold">
                  Lack of knowledge and resources
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-[12px] p-4">
                <p className="text-text-primary font-semibold">
                  Financial barriers
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-[12px] p-4">
                <p className="text-text-primary font-semibold">
                  Not being taken seriously
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-[12px] p-4">
                <p className="text-text-primary font-semibold">
                  Limited political and social influence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
