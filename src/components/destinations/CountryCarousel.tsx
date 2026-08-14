"use client";
import React from "react";
import Link from "next/link";

const countries = [
  { name: "United Kingdom", iso: "gb" }, { name: "Ireland", iso: "ie" }, { name: "France", iso: "fr" },
  { name: "Belgium", iso: "be" }, { name: "Monaco", iso: "mc" }, { name: "Netherlands", iso: "nl" },
  { name: "Luxembourg", iso: "lu" }, { name: "Germany", iso: "de" }, { name: "Switzerland", iso: "ch" },
  { name: "Hungary", iso: "hu" }, { name: "Austria", iso: "at" }, { name: "Liechtenstein", iso: "li" },
  { name: "Czech Republic", iso: "cz" }, { name: "Slovakia", iso: "sk" }, { name: "Poland", iso: "pl" },
  { name: "Italy", iso: "it" }, { name: "Spain", iso: "es" }, { name: "Portugal", iso: "pt" },
  { name: "Greece", iso: "gr" }, { name: "Malta", iso: "mt" }, { name: "Cyprus", iso: "cy" },
  { name: "Vatican City", iso: "va" }, { name: "San Marino", iso: "sm" }, { name: "Norway", iso: "no" },
  { name: "Sweden", iso: "se" }, { name: "Finland", iso: "fi" }, { name: "Denmark", iso: "dk" },
  { name: "Iceland", iso: "is" }, { name: "Croatia", iso: "hr" }, { name: "Bosnia & Herz.", iso: "ba" },
  { name: "Serbia", iso: "rs" }, { name: "Montenegro", iso: "me" }, { name: "Slovenia", iso: "si" },
  { name: "Turkey", iso: "tr" }, { name: "Estonia", iso: "ee" }, { name: "Latvia", iso: "lv" },
  { name: "Lithuania", iso: "lt" }, { name: "Belarus", iso: "by" }, { name: "Moldova", iso: "md" },
  { name: "Romania", iso: "ro" }, { name: "Bulgaria", iso: "bg" }, { name: "Georgia", iso: "ge" }
];

const images = [
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
];

const mappedCountries = countries.map((c, i) => ({
  ...c,
  image: images[i % images.length]
}));

export default function CountryCarousel() {
  // Duplicate array to create a seamless infinite marquee loop
  const scrollItems = [...mappedCountries, ...mappedCountries];

  return (
    <div className="w-full overflow-hidden bg-white py-12 relative border-b border-gray-100 shadow-inner">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-navy">Explore Our Network</h2>
        <p className="text-gray-500 text-sm mt-2">Serving 42 countries across the UK and Europe. Click a destination to get a quote.</p>
      </div>
      
      {/* Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />
      
      <div className="flex w-[max-content] animate-marquee hover:[animation-play-state:paused]">
        {scrollItems.map((country, idx) => (
          <Link 
            key={idx} 
            href="/contact"
            className="group relative w-64 h-40 md:w-72 md:h-48 mx-3 md:mx-4 rounded-xl overflow-hidden shadow-md shrink-0 block border border-gray-200"
          >
            {/* Background Image */}
            <img
              src={country.image}
              alt={country.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors" />
            
            {/* Flag */}
            <div className="absolute top-4 right-4 z-20 shadow-lg border border-white/30 rounded-sm overflow-hidden h-5 w-7">
              <img 
                src={`https://flagcdn.com/w40/${country.iso}.png`} 
                alt={`${country.name} flag`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <h3 className="text-white font-bold text-lg md:text-xl mb-1">{country.name}</h3>
              <div className="text-gold text-xs font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                Get a Quote <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
