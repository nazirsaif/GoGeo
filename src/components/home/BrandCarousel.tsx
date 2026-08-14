"use client";

import React from 'react';

const brands = [
  { name: "Turkish Airlines", url: "/logos/turkishairlines.svg" },
  { name: "Qatar Airways", url: "/logos/qatarairways.svg" },
  { name: "British Airways", url: "/logos/britishairways.svg" },
  { name: "Emirates", url: "/logos/emirates.svg" },
  { name: "Ferrari", url: "/logos/ferrari.svg" },
  { name: "BMW", url: "/logos/bmw.svg" },
  { name: "Shell", url: "/logos/shell.svg" },
  { name: "Sony", url: "/logos/sony.svg" }
];

export default function BrandCarousel() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Trusted by Innovative Brands Worldwide</h4>
      </div>
      
      <div className="relative w-full flex items-center overflow-hidden h-24">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex whitespace-nowrap gap-20 items-center absolute animate-marquee hover:[animation-play-state:paused]"
        >
          {/* Double the list to create a seamless infinite scroll effect */}
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.url}
                alt={brand.name}
                className="h-12 w-auto max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
