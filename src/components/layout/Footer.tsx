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
            <Image src="/logo.jpeg" alt="GoGeo Logo" width={80} height={80} className="object-contain rounded-sm" style={{ width: "auto" }} />
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
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Email: <a href="mailto:info@gogeobuses.com" className="hover:text-gold transition-colors">info@gogeobuses.com</a></li>
            <li>Phone: <a href="tel:+447537158644" className="hover:text-gold transition-colors">+44 7537 158644</a></li>
            <li>Address: 128 City Road, London, EC1V 2NX, United Kingdom</li>
          </ul>
        </div>

      </div>
      
      <div className="container mx-auto px-6 mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} GoGeo Buses LTD. All rights reserved.</p>
        
        {/* Payment Methods */}
        <div className="flex gap-3 items-center">
          {[
            { name: 'Visa', url: 'https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/logo/visa.svg', invert: false },
            { name: 'Mastercard', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg', invert: false },
            { name: 'PayPal', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg', invert: false },
            { name: 'Apple Pay', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg', invert: true },
            { name: 'Stripe', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', invert: false }
          ].map((card) => (
            <div key={card.name} className="w-16 h-10 bg-white/10 rounded-md flex items-center justify-center border border-white/10 shadow-sm" title={card.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={card.url} 
                alt={card.name} 
                className="max-w-[40px] max-h-[20px] object-contain transition-transform hover:scale-110"
                style={card.invert ? { filter: "brightness(0) invert(1)" } : {}} 
              />
            </div>
          ))}
        </div>

        <div className="flex gap-4 items-center text-xs text-gray-500">
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
