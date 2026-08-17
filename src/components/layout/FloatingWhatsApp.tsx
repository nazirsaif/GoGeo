"use client";

import React, { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const phoneNumber = "+447537158644";
  const message = "Hello GoGeo! I would like to inquire about bus rentals.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Initial delay before showing
    const initialDelay = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);

    // Toggle visibility periodically (e.g. visible for 5s, hidden for 5s)
    const interval = setInterval(() => {
      setShowTooltip((prev) => !prev);
    }, 5000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip Notification */}
      <div 
        className={`mb-4 mr-2 relative bg-gold text-white px-5 py-3 rounded-2xl shadow-2xl border border-yellow-500 font-bold text-sm whitespace-nowrap transition-all duration-700 origin-bottom-right
          ${showTooltip ? 'opacity-100 scale-100 translate-y-0 animate-bounce' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}
        `}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Get an instant quote
        </span>
        {/* Tail / Arrow */}
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-gold border-b border-r border-yellow-500 transform rotate-45"></div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}
