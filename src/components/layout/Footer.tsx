import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">G</div>
            <span className="text-xl font-extrabold tracking-tight">GoGeo</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium bus rental and transport solutions across the UK and Europe. Your journey, our priority.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/fleet" className="hover:text-blue-400">Our Fleet</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/services#airport" className="hover:text-blue-400">Airport Transfers</Link></li>
            <li><Link href="/services#corporate" className="hover:text-blue-400">Corporate Transport</Link></li>
            <li><Link href="/services#weddings" className="hover:text-blue-400">Weddings</Link></li>
            <li><Link href="/services#tours" className="hover:text-blue-400">European Tours</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: <a href="mailto:sales@gogeo.com" className="hover:text-blue-400">sales@gogeo.com</a></li>
            <li>Phone: <a href="tel:+447537131994" className="hover:text-blue-400">+44 7537 131994</a></li>
            <li>Address: London, United Kingdom</li>
          </ul>
        </div>

      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} GoGeo Buses LTD. All rights reserved.
      </div>
    </footer>
  );
}
