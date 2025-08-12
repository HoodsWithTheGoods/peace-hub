'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-primary relative pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-10 bg-primary-blue">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-8">
            About Us – PeaceHub
          </h1>
          <p className="text-xl text-[#E5E5E5] max-w-3xl mx-auto leading-relaxed">
            Incubating Peace Across Communities and Generations
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-10 bg-background-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
            1. Our Story
          </h2>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              PeaceHub was born from a belief that peace is not just the absence of conflict — it&apos;s the active creation of systems, relationships, and opportunities that allow people to thrive.
            </p>
            <p>
              Our journey began in Essen with two landmark events that brought over 160 people — youth leaders, professionals, and community voices — into structured collaboration.
              From these sessions emerged 10 community projects, 6 of which are active today.
            </p>
            <p>
              We proved that when people from different generations, cultures, and sectors meet in the right environment, real solutions take shape.
            </p>
          </div>
        </div>
      </section>

      {/* Why Peace Matters Now Section */}
      <section className="py-20 px-10 bg-background-primary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
            2. Why Peace Matters Now
          </h2>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Across Europe, the call for peace grows louder, yet governments still invest heavily in instruments of war.
              We believe the focus must shift — toward health, education, meaningful work, and a sustainable planet.
            </p>
            <p>
              Peace is not an abstract dream. It&apos;s a living reality we can build by:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Strengthening international law to prevent conflict.</li>
              <li>Making peace education a core part of schools and universities.</li>
              <li>Engaging media as a force for understanding and unity.</li>
              <li>Empowering youth as co-creators of the future.</li>
            </ul>
            <p>
              This is our blueprint for a Europe that leads in peace and stability.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-10 bg-background-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
            3. How We Work
          </h2>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              PeaceHub is a living lab — a real-world innovation ecosystem for peace.
              We design, test, and scale initiatives through:
            </p>
            <ul className="list-disc pl-8 space-y-3">
              <li><strong>Community Engagement</strong> – events, festivals, and dialogue platforms.</li>
              <li><strong>Educational Programs</strong> – online and in-person peace learning.</li>
              <li><strong>Mentorship</strong> – connecting generations for guidance and growth.</li>
              <li><strong>Skill-Building Workshops</strong> – equipping changemakers.</li>
              <li><strong>Awareness Campaigns</strong> – shaping the public narrative.</li>
              <li><strong>Resource Sharing</strong> – pooling tools, networks, and funding for greater impact.</li>
            </ul>
            <p>
              Every project is built from the ground up with community ownership and transparency at its core.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-20 px-10 bg-background-primary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary uppercase mb-12">
            4. Meet the Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Josephine Schaefer */}
            <div className="bg-white rounded-[20px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/images/josephine.jpeg"
                    alt="Josephine Schaefer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-primary-yellow rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-2xl font-bold text-text-primary">JS</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Josephine Schaefer</h3>
                <p className="text-primary-blue font-semibold">Founder of Tweyambe Uganda Hilfe</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a 
                    href="https://www.linkedin.com/in/josephine-schaefer-724853a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-blue/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="space-y-4 text-text-secondary">
                <p>
                  With extensive experience in both local and international projects, Josephine excels at connecting people across cultures and disciplines. She brings a structured, responsible approach to building partnerships that last.
                </p>
                <blockquote className="border-l-4 border-primary-yellow pl-4 italic">
                  &ldquo;The challenges we face are great, but so is the resilience of the human spirit. Let us come together to inspire, be inspired, and take concrete steps toward a more peaceful world.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Dr. Zusan Osmani */}
            <div className="bg-white rounded-[20px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/images/zusan.webp"
                    alt="Dr. Zusan Osmani"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-primary-yellow rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-2xl font-bold text-text-primary">ZO</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Dr. Zusan Osmani</h3>
                <p className="text-primary-blue font-semibold">Founder of Female Union | Human Rights Activist | International UN Coordinator – New York</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a 
                    href="https://www.linkedin.com/in/zusan-osmani-dba-34870a160/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-blue/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/female_union/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-primary-blue/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Zusan blends corporate strategy with a passion for humanitarian work, creating platforms that empower women, foster cooperation, and drive meaningful change.
                </p>
                <blockquote className="border-l-4 border-primary-yellow pl-4 italic">
                  &ldquo;This is more than an invitation — it&apos;s a call to action. Your presence is essential. Together, we will make peace non-negotiable.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Role in the Movement Section */}
      <section className="py-20 px-10 bg-background-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
            5. Your Role in the Movement
          </h2>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Peace cannot be outsourced — it is built by people like you.
              Whether you are here to learn, mentor, collaborate, or fund a project, there&apos;s a place for you in PeaceHub.
            </p>
            <p>
              Let&apos;s turn dialogue into action, and action into lasting peace.
            </p>
            <div className="mt-12">
              <Link href="/contact">
                <button className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-full font-bold uppercase text-base tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(74,127,255,0.3)]">
                  Join the Movement →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
