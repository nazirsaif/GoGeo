import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="GoGeo Buses Logo" width={64} height={64} className="object-contain" priority />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-bold text-navy hover:text-gold transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-bold text-navy hover:text-gold transition-colors">About Us</Link>
          <Link href="/services" className="text-sm font-bold text-navy hover:text-gold transition-colors">Services</Link>
          <Link href="/fleet" className="text-sm font-bold text-navy hover:text-gold transition-colors">Vehicle Options</Link>
          <Link href="/destinations" className="text-sm font-bold text-navy hover:text-gold transition-colors">Destinations</Link>
          <Link href="/contact" className="text-sm font-bold text-navy hover:text-gold transition-colors">Contact Us</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="/#quote" className="hidden sm:inline-flex bg-gold text-white px-6 py-3 font-bold text-sm hover:bg-yellow-600 transition-colors shadow-sm">
            Request a Quote
          </Link>
        </div>

      </div>
    </header>
  );
}
