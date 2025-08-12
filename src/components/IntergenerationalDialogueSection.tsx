'use client';

import React from 'react';

export default function IntergenerationalDialogueSection() {
  return (
    <section className="py-20 px-10 bg-primary-blue">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-12">
          Intergenerational Dialogue
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-12 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-yellow mb-8">
              We asked one big question:
            </h3>
            <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed">
              What happens when generations listen to and learn from each other?
            </p>
          </div>
          
          <div className="space-y-8 text-lg text-[#E5E5E5] leading-relaxed">
            <p>
              The answers revealed wisdom, challenges, and opportunities for collaboration between the younger and older generations.
            </p>
            <p>
              This dialogue is now the foundation for our peacebuilding work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
