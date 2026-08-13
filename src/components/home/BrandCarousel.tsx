"use client";

import React from 'react';

const brands = [
  "Turkish Airlines", "Qatar Airways", "British Airways", "Etihad Airways",
  "Emirates Airways", "Ryan Airways", "JetAirways", "DHL", "Champions League",
  "Barclays Premier League", "LA Liga", "European Parliament", "NATO", "Ferrari",
  "BMW", "SHELL", "SONY"
];

export default function BrandCarousel() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Trusted by Innovative Brands Worldwide</h4>
      </div>
      
      <div className="relative w-full flex items-center overflow-hidden h-20">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex whitespace-nowrap gap-16 items-center absolute animate-marquee hover:[animation-play-state:paused]"
        >
          {/* Double the list to create a seamless infinite scroll effect */}
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-navy">
              <span className="text-xl font-bold text-gray-300 tracking-wide uppercase transition-colors duration-300 hover:text-navy">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
