import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function FleetPage(props: { searchParams: Promise<{ category?: string }> }) {
  const searchParams = await props.searchParams;
  const currentCategory = searchParams?.category;
  const fleet = [
    { name: "4 Seater Mercedes E/S-Class", img: "/fleet/e-class-1.jpeg", capacity: 4, type: "VIP Car", desc: "Perfect for discrete, luxury executive travel.", category: "executive" },
    { name: "7 Seater Mercedes V-Class", img: "/fleet/v-class.jpeg", capacity: 7, type: "VIP MPV", desc: "Spacious luxury for small corporate teams or families.", category: "executive" },
    { name: "16 Seater Mercedes Sprinter", img: "/fleet/sprinter-1.jpeg", capacity: 16, type: "Minibus", desc: "Ideal for airport transfers and small group outings.", category: "standard" },
    { name: "16 Seater Standard Sprinter", img: "/fleet/16-seater-standard-sprinter.jpeg", capacity: 16, type: "Standard Minibus", desc: "Reliable and affordable transport for small groups.", category: "standard" },
    { name: "23 Seater VIP Minibus Mercedes", img: "/fleet/23-seater.jpeg", capacity: 23, type: "VIP Minibus", desc: "Premium comfort for medium-sized executive groups.", category: "executive" },
    { name: "30 Seater Standard Coach", img: "/fleet/30-seater.jpeg", capacity: 30, type: "Standard Coach", desc: "Reliable and comfortable for school trips and sports teams.", category: "standard" },
    { name: "43 Seater Standard Coach", img: "/fleet/43-seater.jpeg", capacity: 43, type: "Standard Coach", desc: "Great for corporate events and domestic tours.", category: "standard" },
    { name: "53 Seater Executive Coach", img: "/fleet/53-seater-1.jpeg", capacity: 53, type: "Executive Coach", desc: "Luxury long-distance travel.", premium: true, category: "executive" },
    { name: "55 Seater Standard Coach", img: "/fleet/55-seater.jpeg", capacity: 55, type: "Standard Coach", desc: "High capacity transport for large groups.", category: "standard" },
    { name: "72 Seater Double Decker", img: "/fleet/72-seater-1.jpeg", capacity: 72, type: "Double Decker", desc: "Maximum capacity for massive events and school groups.", premium: true, category: "standard" },
  ];

  // Filter if category matches, otherwise show all
  const filteredFleet = currentCategory
    ? fleet.filter(v => v.category === currentCategory)
    : fleet;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Page Header */}
      <section className="bg-navy py-20 text-white border-b-4 border-gold">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">
            {currentCategory === 'executive' ? 'Executive Vehicles' : currentCategory === 'standard' ? 'Standard Vehicles' : 'Vehicle Options'}
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            From 4-seater VIP Mercedes to 75+ seater Double-Decker coaches, our modern, premium fleet ensures safety and comfort.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/fleet" className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${!currentCategory ? 'bg-gold text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>All Vehicles</Link>
            <Link href="/fleet?category=executive" className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${currentCategory === 'executive' ? 'bg-gold text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>Executive</Link>
            <Link href="/fleet?category=standard" className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${currentCategory === 'standard' ? 'bg-gold text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>Standard</Link>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredFleet.map((vehicle, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group">
                {/* Image Area */}
                <div className="relative h-64 w-full bg-gray-200">
                  <Image
                    src={vehicle.img}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={idx < 2}
                  />
                  <div className="absolute top-4 right-4 bg-navy text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {vehicle.capacity} Seats
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">{vehicle.name}</h3>
                  <p className="text-gold font-bold text-sm uppercase tracking-wide mb-3">{vehicle.type}</p>
                  <p className="text-gray-600 mb-6">{vehicle.desc}</p>

                  {/* Standard Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Air Conditioning</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Reclining Seats</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Seat Belts</span>
                  </div>

                  {/* Premium Amenities (Only for 50+ seats) */}
                  {vehicle.premium && (
                    <div className="border-t border-gray-100 pt-4 mb-6">
                      <h4 className="text-xs font-bold text-navy mb-2 uppercase">Premium Amenities Included:</h4>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <li className="flex items-center gap-1"><span className="text-gold">✓</span> Microphone/PA</li>
                        <li className="flex items-center gap-1"><span className="text-gold">✓</span> Advanced A/C</li>
                        <li className="flex items-center gap-1"><span className="text-gold">✓</span> DVD/Entertainment</li>
                        <li className="flex items-center gap-1"><span className="text-gold">✓</span> Power Outlets</li>
                        <li className="flex items-center gap-1"><span className="text-gold">✓</span> Onboard WC</li>
                      </ul>
                    </div>
                  )}

                  <Link href={`/#quote?vehicle=${encodeURIComponent(vehicle.name)}`} className="block w-full text-center bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded transition-colors">
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
