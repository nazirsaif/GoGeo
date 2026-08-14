import React from "react";
import Link from "next/link";
import CountryCarousel from "@/components/destinations/CountryCarousel";

export default function DestinationsPage() {
  const regions = [
    {
      name: "United Kingdom & Ireland",
      countries: [
        { name: "United Kingdom", cities: ["London", "Manchester", "Liverpool", "Birmingham", "Edinburgh"] },
        { name: "Ireland", cities: ["Dublin"] }
      ]
    },
    {
      name: "Western Europe",
      countries: [
        { name: "France", cities: ["Paris"] },
        { name: "Belgium", cities: ["Brussels"] },
        { name: "Monaco", cities: ["Monaco Ville", "Monte Carlo"] },
        { name: "Netherlands" },
        { name: "Luxembourg" }
      ]
    },
    {
      name: "Central Europe",
      countries: [
        { name: "Germany", cities: ["Berlin", "Munich", "Hamburg", "Frankfurt"] },
        { name: "Switzerland", cities: ["Zurich", "Geneva", "Bern"] },
        { name: "Hungary", cities: ["Budapest"] },
        { name: "Austria" },
        { name: "Liechtenstein" },
        { name: "Czech Republic (Czechia)" },
        { name: "Slovakia" },
        { name: "Poland" }
      ]
    },
    {
      name: "Southern Europe",
      countries: [
        { name: "Italy", cities: ["Rome", "Milan", "Naples"] },
        { name: "Spain", cities: ["Seville", "Barcelona", "Madrid", "Marbella"] },
        { name: "Portugal" },
        { name: "Greece" },
        { name: "Malta" },
        { name: "Cyprus" },
        { name: "Vatican City" },
        { name: "San Marino" }
      ]
    },
    {
      name: "Northern Europe",
      countries: [
        { name: "Norway", cities: ["Oslo"] },
        { name: "Sweden", cities: ["Stockholm"] },
        { name: "Finland" },
        { name: "Denmark" },
        { name: "Iceland" }
      ]
    },
    {
      name: "Southeastern Europe (Balkans)",
      countries: [
        { name: "Croatia" },
        { name: "Bosnia and Herzegovina" },
        { name: "Serbia" },
        { name: "Montenegro" },
        { name: "Slovenia" },
        { name: "Turkey" }
      ]
    },
    {
      name: "Eastern Europe & Baltics",
      countries: [
        { name: "Estonia" },
        { name: "Latvia" },
        { name: "Lithuania" },
        { name: "Belarus" },
        { name: "Moldova" },
        { name: "Romania" },
        { name: "Bulgaria" },
        { name: "Georgia" }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-navy py-20 text-white border-b-4 border-gold">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Destinations</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Providing premium group travel across the UK and {regions.reduce((acc, region) => acc + region.countries.length, 0)} iconic European countries.
          </p>
        </div>
      </section>

      {/* Country Marquee Slideshow */}
      <CountryCarousel />

      {/* Destinations List */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-navy mb-6 border-b-2 border-gold inline-block pb-1">
                  {region.name}
                </h3>
                <ul className="space-y-4">
                  {region.countries.map((country, i) => (
                    <li key={i} className="text-gray-700">
                      <span className="font-bold text-navy flex items-center gap-2">
                        <span className="text-gold text-sm">✦</span> {country.name}
                      </span>
                      {country.cities && (
                        <span className="block text-sm text-gray-500 mt-1 ml-6 leading-relaxed">
                          {country.cities.join(" • ")}
                        </span>
                      )}
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
