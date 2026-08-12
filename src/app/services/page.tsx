import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { title: "Corporate Transport", desc: "Reliable transportation for corporate events, employee transfers, and conferences.", icon: "💼" },
    { title: "Airport Transfers", desc: "Timely meet-and-greet services, flight monitoring, and seamless transfers.", icon: "✈️" },
    { title: "School Transport", desc: "Safe, vetted, and coordinated educational transport with safeguarding training.", icon: "🏫" },
    { title: "Private Coach Hire", desc: "Flexible private hire for custom journeys and private groups of any size.", icon: "🚌" },
    { title: "Weddings & Events", desc: "Elegant transport solutions for guests, bridal parties, and event planners.", icon: "💍" },
    { title: "Sports-Team Transport", desc: "Spacious coaches with large luggage storage for equipment and teams.", icon: "⚽" },
    { title: "European Tours", multiDay: true, desc: "Multi-day cross-border transport covering France, Germany, Italy, and beyond.", icon: "🌍" },
    { title: "Hotel & Cruise Transfers", desc: "Comfortable connections from major ports and luxury hotels across the UK.", icon: "🚢" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-navy py-20 text-white border-b-4 border-gold">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Comprehensive transport solutions tailored for every occasion, from local transfers to multi-day European tours.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                
                <Link href="/contact" className="text-sm font-bold text-navy group-hover:text-gold transition-colors inline-flex items-center gap-1 mt-auto">
                  Request Quote <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
             <div className="bg-navy p-10 rounded-2xl text-white shadow-2xl relative">
                <div className="absolute -top-6 -left-6 text-gold text-6xl opacity-50">★</div>
                <h3 className="text-3xl font-serif font-bold mb-6">The GoGeo Standard</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><span className="text-gold">✓</span> Flight Details Monitored</li>
                  <li className="flex items-center gap-3"><span className="text-gold">✓</span> Multiple Pickup Points Arranged</li>
                  <li className="flex items-center gap-3"><span className="text-gold">✓</span> Drivers Can Contact Organizers directly</li>
                  <li className="flex items-center gap-3"><span className="text-gold">✓</span> Multilingual Support Staff Available</li>
                  <li className="flex items-center gap-3"><span className="text-gold">✓</span> 24/7 Emergency & Out-of-Hours Support</li>
                </ul>
             </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Seamless Operations, Every Time.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We go beyond simply providing a vehicle. From the moment you request a quote to the time you arrive at your final destination, our dedicated support team coordinates every detail.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need waiting time added to your journey, return trips, or a fleet of several vehicles organized for a massive public event, we handle the logistics so you don't have to.
            </p>
            <Link href="/fleet" className="inline-block bg-gold text-white px-8 py-4 font-bold rounded hover:bg-yellow-600 transition-colors">
              View Our Vehicle Options
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
