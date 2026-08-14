import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">About GoGeo Buses</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            15 years of excellence in providing premium group travel transportation across the UK and Europe.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Our Story</h2>
            <h3 className="text-3xl font-serif font-bold text-navy mb-6">Established for Luxury Travel</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              GoGeo Buses LTD was established with a singular vision: to provide luxury group travel transportation across Europe. Over the past 15 years, we have built a reputation based on uncompromising professionalism and exceptional customer service.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We own and operate our expansive fleet, meaning we have full control over the quality, safety, and maintenance of every vehicle. From comfortable minibuses to 75-seater double-decker coaches, we guarantee premium transportation at affordable prices.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="bg-white border-l-4 border-gold p-4 shadow-sm">
                <span className="block text-2xl font-bold text-navy">15+</span>
                <span className="text-sm text-gray-500 font-medium">Years Experience</span>
              </div>
              <div className="bg-white border-l-4 border-gold p-4 shadow-sm">
                <span className="block text-2xl font-bold text-navy">100%</span>
                <span className="text-sm text-gray-500 font-medium">Owned Fleet</span>
              </div>
            </div>
          </div>
          
          <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] md:flex-1 rounded-2xl overflow-hidden shadow-2xl shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium Coach Interior" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600">The strongest genuine reason customers choose us is premium group travel at affordable prices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gold text-4xl mb-4">👔</div>
              <h4 className="text-xl font-bold text-navy mb-3">Professionalism</h4>
              <p className="text-gray-600">All our drivers are professionally licensed, experienced, and undergo rigorous background checks. Your safety and comfort are treated as a priority.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gold text-4xl mb-4">🎧</div>
              <h4 className="text-xl font-bold text-navy mb-3">Customer Service</h4>
              <p className="text-gray-600">We provide clear communication for your journey, with 24/7 out-of-hours contact services and emergency support always available.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gold text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-navy mb-3">Cross-Border Expertise</h4>
              <p className="text-gray-600">We offer multi-day coach tours and international cross-border transport across major European countries and cities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-10">Who We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Government Entities', 'Event Planners', 'Corporate Clients', 'Sports Clubs', "NGO's", 'Hotels', 'Group Travelers', 'Schools & Universities'].map((client, idx) => (
              <span key={idx} className="bg-white/10 px-6 py-3 rounded-full text-sm font-medium border border-white/20">
                {client}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contact" className="inline-block bg-gold text-white px-8 py-4 font-bold rounded hover:bg-yellow-600 transition-colors">
              Get in Touch Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
