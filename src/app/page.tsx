import HeroQuoteForm from "@/components/home/HeroQuoteForm";
import VehicleCategories from "@/components/home/VehicleCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Luxury Coach"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-white text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Premium Coach Hire <br/> Across the UK & Europe
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 mb-8 max-w-2xl">
              Reliable, comfortable, and luxurious transport solutions for every occasion. Experience the GoGeo standard.
            </p>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <HeroQuoteForm />
          </div>

        </div>
      </section>

      {/* Vehicle Categories Flow */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Fleet</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need executive VIP transport or standard reliable travel, we have the perfect vehicle for your group.
            </p>
          </div>
          <VehicleCategories />
        </div>
      </section>

      {/* Why Choose Us Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GoGeo?</h2>
          <p className="text-lg text-gray-600">
            Professional drivers, 24/7 support, and a modern fleet maintained to the highest safety standards.
          </p>
        </div>
      </section>

    </div>
  );
}
