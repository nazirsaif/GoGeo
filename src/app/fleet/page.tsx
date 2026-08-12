import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function FleetPage(props: { searchParams: Promise<{ category?: string }> }) {
  const searchParams = await props.searchParams;
  const currentCategory = searchParams?.category;

  const fleet = [
    { name: "4 Seater Mercedes VIP", img: "/fleet/4.jpeg", capacity: 4, type: "VIP Car", desc: "Perfect for discrete, luxury executive travel.", category: "executive" },
    { name: "7 Seater Mercedes VIP", img: "/fleet/5.jpeg", capacity: 7, type: "VIP MPV", desc: "Spacious luxury for small corporate teams or families.", category: "executive" },
    { name: "16 Seater Splinter", img: "/fleet/6.jpeg", capacity: 16, type: "Minibus", desc: "Ideal for airport transfers and small group outings.", category: "standard" },
    { name: "20 Seater VIP", img: "/fleet/7.jpeg", capacity: 20, type: "VIP Minibus", desc: "Premium comfort for medium-sized executive groups.", category: "executive" },
    { name: "36 Seater Bus", img: "/fleet/8.jpeg", capacity: 36, type: "Mid-size Coach", desc: "Reliable and comfortable for school trips and sports teams.", category: "standard" },
    { name: "45 Seater Bus", img: "/fleet/1.jpeg", capacity: 45, type: "Standard Coach", desc: "Great for corporate events and domestic tours.", category: "standard" },
    { name: "55 Seater Bus", img: "/fleet/2.jpeg", capacity: 55, type: "Executive Coach", desc: "Luxury long-distance travel.", premium: true, category: "executive" },
    { name: "65 Seater Bus", img: "/fleet/3.jpeg", capacity: 65, type: "Executive Coach", desc: "High capacity premium transport.", premium: true, category: "executive" },
    { name: "75+ Seater Bus", img: "/fleet/1.jpeg", capacity: 75, type: "Double Decker", desc: "Maximum capacity for massive events and school groups.", premium: true, category: "standard" },
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
            From 4-seater VIP Mercedes to 75+ seater Double-Decker coaches, our 100% owned fleet ensures safety and comfort.
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
