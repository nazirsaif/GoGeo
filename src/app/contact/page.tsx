"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      emailAddress: formData.get('emailAddress'),
      message: formData.get('message'),
    };
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Page Header */}
      <section className="bg-navy py-20 text-white border-b-4 border-gold">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            We are available 24/7 to assist you with your transportation needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-16">

          {/* Contact Details */}
          <div className="flex-1">
            <h2 className="text-3xl font-serif font-bold text-navy mb-8">Get In Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-gold mt-1"><MapPin size={32} /></div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-1">Operating Address</h4>
                  <p className="text-gray-600">GoGeo Buses LTD</p>
                  <p className="text-gray-600">128 City Road</p>
                  <p className="text-gray-600">London, EC1V 2NX</p>
                  <p className="text-gray-600">United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1"><Phone size={32} /></div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-1">Public Telephone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+447537158644" className="hover:text-gold transition-colors">+44 7537 158644</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1"><Clock size={32} /></div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-1">Business Hours</h4>
                  <p className="text-gray-600">Open 24/7 for emergency and out-of-hours support.</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 h-64 w-full rounded-xl overflow-hidden shadow-sm border border-gray-300">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=128+City+Rd,+London+EC1V+2NX,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>

          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Send us a message</h3>
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center font-medium border border-green-200">
                  Thank you! Your message has been sent successfully. Our team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Full Name</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold outline-none bg-gray-50 text-gray-900" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Email Address</label>
                    <input type="email" name="emailAddress" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold outline-none bg-gray-50 text-gray-900" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Message</label>
                    <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold outline-none bg-gray-50 text-gray-900" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-gold hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
