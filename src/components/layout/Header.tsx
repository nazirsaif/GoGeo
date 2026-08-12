import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo Placeholder */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">GoGeo</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/services" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/fleet" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">Fleet</Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        {/* Multi-language & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-600">
            <span className="mr-1">🌐</span> EN
          </div>
          <Link href="/contact" className="hidden sm:inline-flex bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">
            Contact Us
          </Link>
        </div>

      </div>
    </header>
  );
}
