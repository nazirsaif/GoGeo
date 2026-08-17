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
  { name: "Sony", url: "/logos/sony.svg", imgClass: "h-20 max-w-[180px]" },
  { name: "Brand 1", url: "/logos/new 1.png", imgClass: "h-20 max-w-[180px]" },
  { name: "Brand 3", url: "/logos/new 3.png", imgClass: "h-20 max-w-[180px]" }
];

export default function BrandCarousel() {
  return (
    <section className="py-12 bg-transparent overflow-hidden border-b border-gray-200">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Trusted by Innovative Brands Worldwide</h4>
      </div>

      <div className="relative w-full flex items-center overflow-hidden h-24">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#e2e6ea] to-transparent z-10 pointer-events-none"></div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#e2e6ea] to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex whitespace-nowrap gap-20 items-center absolute animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '35s', minWidth: 'max-content' }}
        >
          {/* Double the list to create a seamless infinite scroll effect */}
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-2 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 drop-shadow-sm hover:drop-shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.url}
                alt={brand.name}
                className={`w-auto object-contain ${brand.imgClass || 'h-12 max-w-[120px]'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
