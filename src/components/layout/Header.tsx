"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Slogan Bar */}
      <div className="bg-navy text-gold text-xs font-bold text-center py-2 tracking-widest uppercase shadow-sm">
        Go together, Go premium
      </div>
      
      {/* Main Navigation */}
      <div className="bg-gray-200/95 backdrop-blur-md shadow-sm border-b border-gray-100 w-full">
        <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="GoGeo Buses Logo" width={72} height={72} className="object-contain rounded-sm w-[72px] h-[72px]" priority />
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

        {/* CTA & Hamburger */}
        <div className="flex items-center gap-4">
          <Link href="/#quote" className="hidden sm:inline-flex bg-gold text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-600 hover:shadow-md transition-all transform hover:-translate-y-0.5">
            Request a Quote
          </Link>
          
          <button 
            className="md:hidden text-navy hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-gray-200 border-b border-gray-100 shadow-lg py-6 flex flex-col px-6 gap-6">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-navy hover:text-gold transition-colors">Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-navy hover:text-gold transition-colors">About Us</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-navy hover:text-gold transition-colors">Services</Link>
          <Link href="/fleet" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-navy hover:text-gold transition-colors">Vehicle Options</Link>
          <Link href="/destinations" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-navy hover:text-gold transition-colors">Destinations</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-navy hover:text-gold transition-colors">Contact Us</Link>
          <Link href="/#quote" onClick={() => setIsMobileMenuOpen(false)} className="text-center bg-gold text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-600 transition-colors mt-2">
            Request a Quote
          </Link>
        </div>
      )}
      </div>
    </header>
  );
}
