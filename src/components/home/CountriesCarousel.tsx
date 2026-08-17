"use client";

import React from 'react';
import Link from 'next/link';

const countries = [
  { name: "Austria", code: "at" },
  { name: "Belarus", code: "by" },
  { name: "Belgium", code: "be" },
  { name: "Bosnia and Herzegovina", code: "ba" },
  { name: "Bulgaria", code: "bg" },
  { name: "Croatia", code: "hr" },
  { name: "Cyprus", code: "cy" },
  { name: "Czech Republic", code: "cz" },
  { name: "Denmark", code: "dk" },
  { name: "England", code: "gb-eng" },
  { name: "Estonia", code: "ee" },
  { name: "Finland", code: "fi" },
  { name: "France", code: "fr" },
  { name: "Georgia", code: "ge" },
  { name: "Germany", code: "de" },
  { name: "Greece", code: "gr" },
  { name: "Hungary", code: "hu" },
  { name: "Iceland", code: "is" },
  { name: "Ireland", code: "ie" },
  { name: "Italy", code: "it" },
  { name: "Latvia", code: "lv" },
  { name: "Liechtenstein", code: "li" },
  { name: "Lithuania", code: "lt" },
  { name: "Luxembourg", code: "lu" },
  { name: "Malta", code: "mt" },
  { name: "Moldova", code: "md" },
  { name: "Monaco", code: "mc" },
  { name: "Montenegro", code: "me" },
  { name: "Netherlands", code: "nl" },
  { name: "Norway", code: "no" },
  { name: "Poland", code: "pl" },
  { name: "Portugal", code: "pt" },
  { name: "Romania", code: "ro" },
  { name: "San Marino", code: "sm" },
  { name: "Scotland", code: "gb-sct" },
  { name: "Serbia", code: "rs" },
  { name: "Spain", code: "es" },
  { name: "Sweden", code: "se" },
  { name: "Switzerland", code: "ch" },
  { name: "Turkey", code: "tr" },
  { name: "United Kingdom", code: "gb" },
  { name: "Vatican City", code: "va" }
];

export default function CountriesCarousel() {
  return (
    <section className="py-24 bg-gray-200 overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">Our Global Reach</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
          Serving All Across Europe
        </h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We provide world-class transportation tailored to your exact needs in the following countries. Click any country to get an instant quote.
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden h-32">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#e2e6ea] to-transparent z-10 pointer-events-none"></div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#e2e6ea] to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex whitespace-nowrap gap-12 items-center absolute animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '120s', minWidth: 'max-content' }}
        >
          {/* Double the list to create a seamless infinite scroll effect */}
          {[...countries, ...countries].map((country, i) => (
            <Link
              key={i}
              href={`/?destination=${encodeURIComponent(country.name)}#quote`}
              className="flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={`${country.name} flag`}
                className="w-10 rounded-sm shadow-sm filter grayscale-[40%] group-hover:grayscale-0 transition-all"
              />
              <span className="font-bold text-navy group-hover:text-gold transition-colors text-xl">{country.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
