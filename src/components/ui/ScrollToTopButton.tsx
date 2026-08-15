"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="ml-4 bg-gray-200 text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  );
}
