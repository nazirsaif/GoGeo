import HeroQuoteForm from "@/components/home/HeroQuoteForm";
import VehicleCategories from "@/components/home/VehicleCategories";
import BrandCarousel from "@/components/home/BrandCarousel";
import CountriesCarousel from "@/components/home/CountriesCarousel";

import FadeIn from "@/components/home/FadeIn";
import TrustBadges from "@/components/home/TrustBadges";
import ReviewsSection from "@/components/home/ReviewsSection";
import Image from "next/image";
import { ShieldCheck, UserCheck, Clock, BusFront, Headset, Globe2 } from "lucide-react";

export default function Home() {
  const features = [
    { title: "Safety-Focused", desc: "Passenger safety treated as a priority.", icon: <ShieldCheck size={32} /> },
    { title: "Professional Drivers", desc: "Experienced, appropriately licensed drivers.", icon: <UserCheck size={32} /> },
    { title: "Punctual Operations", desc: "Dependable scheduling and coordination.", icon: <Clock size={32} /> },
    { title: "Comfortable Vehicles", desc: "Options for different group sizes.", icon: <BusFront size={32} /> },
    { title: "Dedicated Support", desc: "Clear communication for your journey.", icon: <Headset size={32} /> },
    { title: "Responsible Travel", desc: "Efficient group journey planning.", icon: <Globe2 size={32} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-100">

      {/* Hero Section */}
      <section id="quote" className="relative w-full min-h-screen md:min-h-[85vh] flex items-center justify-center pt-40 pb-32 md:pt-48 md:pb-32 lg:pt-56 lg:pb-48">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpeg"
            alt="Luxury Coach"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gradient overlay: dark on edges for text/form readability, clear in middle for the bus */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-navy/90 via-navy/20 to-navy/90 mix-blend-multiply"></div>
          {/* Additional subtle gradient to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

          <FadeIn direction="right" delay={0.2} className="w-full lg:w-5/12 text-white text-center lg:text-left mt-10">
            <h4 className="text-gold font-bold tracking-widest text-sm uppercase mb-4 drop-shadow-md">Professional Group Transport</h4>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-6 drop-shadow-lg">
              Reliable Coach and Minibus Transport
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow-md">
              Safe, comfortable and professionally managed transport solutions for businesses, events, airport transfers, tours and private groups.
            </p>
          </FadeIn>

          {/* Spacer to let the background image show through in the middle */}
          <div className="hidden lg:block lg:w-3/12"></div>

          {/* Form remains visible as per original CRITICAL instruction */}
          <FadeIn direction="left" delay={0.4} className="w-full lg:w-4/12 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <HeroQuoteForm />
          </FadeIn>

        </div>
      </section>

      {/* Feature Boxes (from reference image) */}
      <section className="relative z-20 -mt-8 md:-mt-16 container mx-auto px-6">
        <FadeIn delay={0.6} className="bg-navy rounded-xl shadow-2xl border border-gray-800 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-gold mb-4 shadow-sm border-2 border-transparent group-hover:border-gold group-hover:bg-white/20 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2 group-hover:text-gold transition-colors">{f.title}</h3>
              <p className="text-gray-400 text-xs">{f.desc}</p>
            </div>
          ))}
        </FadeIn>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* Countries Carousel */}
      <CountriesCarousel />

      {/* Vehicle Categories Flow */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4 font-serif">Explore Our Fleet</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need executive VIP transport or standard reliable travel, we have the perfect vehicle for your group.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <VehicleCategories />
          </FadeIn>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Reviews Section */}
      <ReviewsSection />

    </div>
  );
}
