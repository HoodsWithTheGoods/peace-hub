import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background-primary relative pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-10 bg-primary-blue">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-8">
            Get In Touch
          </h1>
          <p className="text-xl text-[#E5E5E5] max-w-3xl mx-auto leading-relaxed">
            Ready to join the peacebuilding movement? We&apos;d love to hear from you and explore how we can work together to create positive change in our communities.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-10 bg-background-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">PeaceHub</h3>
                  <div className="space-y-3 text-text-secondary">
                    <p>📍 Essen, Germany</p>
                    <p>📧 info@peace-hub.de</p>
                    <p>📞 +49 (0) 201 123 4567</p>
                  </div>
                </div>


              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 px-10 bg-background-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
                Ways to Get Involved
              </h2>
              <div className="space-y-6 text-text-secondary">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Volunteer</h3>
                    <p>Join our community of volunteers and contribute your time and skills to peacebuilding initiatives.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Share Ideas</h3>
                    <p>Have innovative ideas for peacebuilding? We&apos;d love to hear from you and explore collaboration opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📚</div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Learn Together</h3>
                    <p>Participate in our educational programs and workshops to develop peacebuilding skills and knowledge.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-text-primary uppercase mb-8">
                Our Commitment
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  At PeaceHub, we believe that every individual has the power to contribute to peacebuilding. 
                  Whether you&apos;re a student, professional, or community member, there&apos;s a place for you in our movement.
                </p>
                <p>
                  We respond to all inquiries within 24-48 hours and are committed to building meaningful 
                  partnerships that advance our shared vision of a more peaceful world.
                </p>
                <p>
                  Your voice matters, and together we can create lasting positive change in our communities 
                  and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
