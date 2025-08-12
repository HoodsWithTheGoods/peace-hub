'use client';

import React from 'react';

export default function LaunchSection() {
  return (
    <section className="py-20 px-10 bg-primary-blue">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-12">
          Our Launch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="space-y-6 text-lg text-[#E5E5E5] leading-relaxed">
              <p>
                In our first two events, more than <span className="font-bold text-primary-yellow">160 attendees</span> – experts, youth, and community leaders – came together to solve pressing social issues.
              </p>
              <p>
                Using innovative, structured workshops, we generated insights that became <span className="font-bold text-primary-yellow">10 community projects</span>, with <span className="font-bold text-primary-yellow">6 already active today</span>.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center">
              <div className="text-5xl font-black text-primary-yellow mb-4">160+</div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">Attendees</h3>
              <p className="text-[#E5E5E5] text-sm">Experts, youth, and community leaders</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center">
              <div className="text-5xl font-black text-primary-yellow mb-4">10</div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">Projects</h3>
              <p className="text-[#E5E5E5] text-sm">Community initiatives created</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center">
              <div className="text-5xl font-black text-primary-yellow mb-4">6</div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">Active</h3>
              <p className="text-[#E5E5E5] text-sm">Projects currently running</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 text-center">
              <div className="text-5xl font-black text-primary-yellow mb-4">2</div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">Events</h3>
              <p className="text-[#E5E5E5] text-sm">Successful launch events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
