"use client";

import React from "react";
import FadeIn from "./FadeIn";
import { Star } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="bg-white border-b border-gray-100 py-6 relative z-30">
      <div className="container mx-auto px-6">
        <FadeIn delay={0.2} className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 opacity-80">

          {/* Trustpilot-style Badge */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Excellent on</span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-navy">Trustpilot</span>
              <div className="flex gap-1 bg-[#00b67a] p-1 rounded-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-white text-white" />
                ))}
              </div>
            </div>
            <span className="text-xs text-gray-500 mt-1">4.6 / 5</span>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          {/* Trusted Partners */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Trusted Partners</span>
            <div className="flex items-center gap-6 font-serif text-xl text-gray-400 font-bold">
              <span>Booking.com</span>
              <span>Expedia</span>
              <span>TripAdvisor</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          {/* Safety Badge */}
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Certified</span>
            <span className="text-lg font-bold text-navy flex items-center gap-2">
              100% Secure & Insured
            </span>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
