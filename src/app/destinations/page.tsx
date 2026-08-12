import React from "react";
import Link from "next/link";

export default function DestinationsPage() {
  const regions = [
    {
      country: "United Kingdom",
      cities: ["London", "Manchester", "Liverpool", "Birmingham"]
    },
    {
      country: "Scotland & Ireland",
      cities: ["Edinburgh", "Dublin"]
    },
    {
      country: "France & Monaco",
      cities: ["Paris", "Monaco Ville", "Monte Carlo"]
    },
    {
      country: "Italy & Spain",
      cities: ["Rome", "Milan", "Naples", "Seville", "Barcelona", "Madrid", "Marbella"]
    },
    {
      country: "Germany & Central Europe",
      cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Budapest (Hungary)"]
    },
    {
      country: "Nordics & Switzerland",
      cities: ["Oslo (Norway)", "Stockholm (Sweden)", "Zurich", "Geneva", "Bern"]
    },
    {
      country: "Belgium",
      cities: ["Brussels"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-navy py-20 text-white border-b-4 border-gold">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Destinations</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Providing premium group travel across the UK and the most iconic cities in Europe.
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-4 border-b-2 border-gold inline-block pb-1">
                  {region.country}
                </h3>
                <ul className="space-y-2 mt-4">
                  {region.cities.map((city, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-lg">
                      <span className="text-gold mr-3">✦</span> {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy text-white rounded-xl p-10 text-center shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-4">Planning a Cross-Border Tour?</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Our professional drivers and luxury coaches are fully equipped and licensed for international cross-border travel across Europe.
                </p>
                <Link href="/contact" className="inline-block bg-gold text-white px-8 py-4 font-bold rounded hover:bg-yellow-600 transition-colors">
                  Contact Our Travel Experts
                </Link>
             </div>
          </div>

        </div>
      </section>

    </div>
  );
}
