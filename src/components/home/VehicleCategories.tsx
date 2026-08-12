import Link from "next/link";
import React from "react";

export default function VehicleCategories() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
      
      {/* Executive Vehicles */}
      <Link href="/fleet?category=executive" className="flex-1 group">
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gray-900" /> {/* Fallback color if no image */}
          {/* We will add images later if needed */}
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <h3 className="text-3xl font-bold text-white mb-2">Executive Vehicles</h3>
            <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              VIP Mercedes Sprinters and premium coaches for corporate and luxury travel.
            </p>
            <span className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold text-sm">
              View Executive Fleet &rarr;
            </span>
          </div>
        </div>
      </Link>

      {/* Standard Vehicles */}
      <Link href="/fleet?category=standard" className="flex-1 group">
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-blue-900" /> {/* Fallback color */}
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <h3 className="text-3xl font-bold text-white mb-2">Standard Vehicles</h3>
            <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              Comfortable, reliable, and cost-effective transport for schools, events, and trips.
            </p>
            <span className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold text-sm">
              View Standard Fleet &rarr;
            </span>
          </div>
        </div>
      </Link>

    </div>
  );
}
