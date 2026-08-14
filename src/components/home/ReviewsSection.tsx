"use client";

import React from "react";
import FadeIn from "./FadeIn";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Event Coordinator",
    text: "The executive coach we hired for our corporate retreat was flawless. The driver was extremely professional and the premium amenities were exactly as described.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "School Principal",
    text: "We use GoGeo for all our school trips. Their 72-seater double deckers are always spotless, on time, and their safety standards are industry-leading.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Private Client",
    text: "Hired a VIP Mercedes for an airport transfer. Incredible service from start to finish. The booking process was seamless and the journey was pure luxury.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-64 bg-navy/5 -skew-y-3 transform origin-top-left z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">Client Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Trusted by Thousands</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Read what our clients have to say about their journey with us.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full flex flex-col relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                <Quote className="absolute top-6 right-6 text-gold/20 w-12 h-12 transform group-hover:scale-110 transition-transform" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed relative z-10 italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
