import HeroQuoteForm from "@/components/home/HeroQuoteForm";
import VehicleCategories from "@/components/home/VehicleCategories";
import Image from "next/image";

export default function Home() {
  const features = [
    { title: "Safety-Focused", desc: "Passenger safety treated as a priority.", icon: "✧" },
    { title: "Professional Drivers", desc: "Experienced, appropriately licensed drivers.", icon: "👔" },
    { title: "Punctual Operations", desc: "Dependable scheduling and coordination.", icon: "⏱" },
    { title: "Comfortable Vehicles", desc: "Options for different group sizes.", icon: "🛋" },
    { title: "Dedicated Support", desc: "Clear communication for your journey.", icon: "🎧" },
    { title: "Responsible Travel", desc: "Efficient group journey planning.", icon: "☘" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-24 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-navy">
          <Image
            src="/hero-bg.png"
            alt="Luxury Coach"
            fill
            className="object-cover object-center opacity-40 mix-blend-overlay"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-white text-center lg:text-left mt-10">
            <h4 className="text-gold font-bold tracking-widest text-sm uppercase mb-4">Professional Group Transport</h4>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-6">
              Reliable Coach and Minibus Transport <br/> <span className="text-gold font-serif">Across the UK</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 mb-8 max-w-2xl">
              Safe, comfortable and professionally managed transport solutions for businesses, events, airport transfers, tours and private groups.
            </p>
          </div>

          {/* Form remains visible as per original CRITICAL instruction */}
          <div className="flex-1 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <HeroQuoteForm />
          </div>

        </div>
      </section>

      {/* Feature Boxes (from reference image) */}
      <section className="relative z-20 -mt-16 container mx-auto px-6">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-gold text-3xl mb-3">{f.icon}</div>
              <h3 className="text-navy font-bold text-sm mb-2">{f.title}</h3>
              <p className="text-gray-500 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Categories Flow */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4 font-serif">Explore Our Fleet</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need executive VIP transport or standard reliable travel, we have the perfect vehicle for your group.
            </p>
          </div>
          <VehicleCategories />
        </div>
      </section>

    </div>
  );
}
