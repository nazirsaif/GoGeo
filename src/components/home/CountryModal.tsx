import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { DestinationInfo } from '@/data/destinationsData';

interface CountryModalProps {
  isOpen: boolean;
  onClose: () => void;
  country: DestinationInfo | null;
}

export default function CountryModal({ isOpen, onClose, country }: CountryModalProps) {
  if (!country) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white md:text-gray-800 md:bg-white/80 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={country.imageUrl}
                alt={country.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <h2 className="absolute bottom-4 left-6 text-3xl font-serif font-bold text-white md:hidden">
                {country.name}
              </h2>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-gray-50 flex flex-col">
              <h2 className="hidden md:block text-4xl font-serif font-bold text-navy mb-2">
                {country.name}
              </h2>
              <div className="w-16 h-1 bg-gold mb-6 hidden md:block"></div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {country.description}
              </p>

              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-navy mb-4 uppercase tracking-wider text-sm">
                  Available Services
                </h3>
                <ul className="space-y-3">
                  {country.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-gold mr-3 flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
