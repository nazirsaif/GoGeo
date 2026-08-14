import React from "react";
import Link from "next/link";
import Image from "next/image";

import ScrollToTopButton from "../ui/ScrollToTopButton";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-gray-300 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <Image src="/logo.jpeg" alt="GoGeo Logo" width={140} height={48} className="object-contain rounded-sm" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Premium bus rental and transport solutions across the UK and Europe. Your journey, our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="/fleet" className="hover:text-gold transition-colors">Our Fleet</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services#corporate-transport" className="hover:text-gold transition-colors">Corporate Transport</Link></li>
            <li><Link href="/services#airport-transfers" className="hover:text-gold transition-colors">Airport Transfers</Link></li>
            <li><Link href="/services#school-transport" className="hover:text-gold transition-colors">School Transport</Link></li>
            <li><Link href="/services#private-coach-hire" className="hover:text-gold transition-colors">Private Coach Hire</Link></li>
          </ul>
          <Link href="/services" className="inline-block mt-4 text-sm font-bold text-gold hover:text-yellow-400 transition-colors">
            View All Services &rarr;
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:sales@gogeo.com" className="hover:text-gold transition-colors">sales@gogeo.com</a></li>
            <li>Phone: <a href="tel:+447537131994" className="hover:text-gold transition-colors">+44 7537 131994</a></li>
            <li>Address: London, United Kingdom</li>
          </ul>
        </div>

      </div>
      
      <div className="container mx-auto px-6 mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} GoGeo Buses LTD. All rights reserved.</p>
        <div className="flex gap-4 items-center">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          <div className="ml-4 border-l border-gray-700 pl-4">
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
