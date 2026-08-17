"use client";
import React from "react";
import Link from "next/link";

const countries = [
  { name: "England", iso: "gb-eng", image: "/destinations/england.jpg" },
  { name: "Scotland", iso: "gb-sct", image: "/destinations/scotland.jpg" },
  { name: "Wales", iso: "gb-wls", image: "/destinations/wales.jpg" },
  { name: "Northern Ireland", iso: "gb-nir", image: "/destinations/northern_ireland.jpg" },
  { name: "Ireland", iso: "ie", image: "/destinations/ireland.jpg" },
  { name: "France", iso: "fr", image: "/destinations/france.jpg" },
  { name: "Belgium", iso: "be", image: "/destinations/belgium.jpg" },
  { name: "Netherlands", iso: "nl", image: "/destinations/netherlands.jpg" },
  { name: "Luxembourg", iso: "lu", image: "/destinations/luxembourg.jpg" },
  { name: "Monaco", iso: "mc", image: "/destinations/monaco.jpg" },
  { name: "Germany", iso: "de", image: "/destinations/germany.jpg" },
  { name: "Switzerland", iso: "ch", image: "/destinations/switzerland.jpg" },
  { name: "Austria", iso: "at", image: "/destinations/austria.jpg" },
  { name: "Czechia", iso: "cz", image: "/destinations/czechia.jpg" },
  { name: "Poland", iso: "pl", image: "/destinations/poland.jpg" },
  { name: "Slovakia", iso: "sk", image: "/destinations/slovakia.jpg" },
  { name: "Hungary", iso: "hu", image: "/destinations/hungary.jpg" },
  { name: "Italy", iso: "it", image: "/destinations/italy.jpg" },
  { name: "Spain", iso: "es", image: "/destinations/spain.jpg" },
  { name: "Portugal", iso: "pt", image: "/destinations/portugal.jpg" },
  { name: "Greece", iso: "gr", image: "/destinations/greece.jpg" },
  { name: "Malta", iso: "mt", image: "/destinations/malta.jpg" },
  { name: "Cyprus", iso: "cy", image: "/destinations/cyprus.jpg" },
  { name: "Denmark", iso: "dk", image: "/destinations/denmark.jpg" },
  { name: "Sweden", iso: "se", image: "/destinations/sweden.jpg" },
  { name: "Norway", iso: "no", image: "/destinations/norway.jpg" },
  { name: "Finland", iso: "fi", image: "/destinations/finland.jpg" },
  { name: "Iceland", iso: "is", image: "/destinations/iceland.jpg" },
  { name: "Estonia", iso: "ee", image: "/destinations/estonia.jpg" },
  { name: "Latvia", iso: "lv", image: "/destinations/latvia.jpg" },
  { name: "Lithuania", iso: "lt", image: "/destinations/lithuania.jpg" },
  { name: "Romania", iso: "ro", image: "/destinations/romania.jpg" },
  { name: "Bulgaria", iso: "bg", image: "/destinations/bulgaria.jpg" },
  { name: "Croatia", iso: "hr", image: "/destinations/croatia.jpg" },
  { name: "Slovenia", iso: "si", image: "/destinations/slovenia.jpg" },
  { name: "Japan", iso: "jp", image: "/destinations/japan.jpg" },
  { name: "Saudi Arabia", iso: "sa", image: "/destinations/saudi_arabia.jpg" },
  { name: "United Arab Emirates", iso: "ae", image: "/destinations/united_arab_emirates.jpg" },
  { name: "Australia", iso: "au", image: "/destinations/australia.jpg" },
  { name: "United States", iso: "us", image: "/destinations/united_states.jpg" }
];

export default function CountryCarousel() {
  // Duplicate array to create a seamless infinite marquee loop
  const scrollItems = [...countries, ...countries];

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
