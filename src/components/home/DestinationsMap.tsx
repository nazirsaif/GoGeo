"use client";

import React, { useState } from "react";
import CountryModal from "./CountryModal";
import { destinationsData, DestinationInfo } from "@/data/destinationsData";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const DestinationMarker = ({ dest, onClick }: { dest: DestinationInfo, onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Marker 
      coordinates={[dest.lng, dest.lat]} 
      onClick={onClick} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <g
        transform="translate(-12, -24)"
        style={{ cursor: "pointer" }}
      >
        {/* Pin body */}
        <path
          d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"
          fill={isHovered ? "#eab308" : "#0b2c4d"} /* Gold on hover, Navy by default */
          stroke="#ffffff"
          strokeWidth="1.5"
          style={{ transition: "fill 0.2s" }}
        />
        {/* Flag Emoji */}
        <text
          textAnchor="middle"
          y="12"
          x="12"
          fontSize="10"
          style={{ pointerEvents: "none" }}
        >
          {dest.flag}
        </text>
      </g>
      {/* Tooltip Country Name */}
      {isHovered && (
        <text
          textAnchor="middle"
          y="-30"
          style={{ fill: "#0b2c4d", fontSize: "14px", fontWeight: "bold", pointerEvents: "none", filter: "drop-shadow(0px 2px 2px rgba(255,255,255,0.8))" }}
        >
          {dest.name}
        </text>
      )}
    </Marker>
  );
};

export default function DestinationsMap() {
  const [selectedCountry, setSelectedCountry] = useState<DestinationInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMarkerClick = (dest: DestinationInfo) => {
    setSelectedCountry(dest);
    setIsModalOpen(true);
  };

  if (!isMounted) {
    return (
      <section className="py-24 bg-gray-50 overflow-hidden relative min-h-[600px] flex items-center justify-center">
         <div className="text-navy text-xl">Loading Map...</div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: The 2D Map */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* The wrapper ensures it doesn't get too large on big screens */}
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
              
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 120,
                  center: [0, 40]
                }}
                width={800}
                height={600}
                style={{ width: "100%", height: "100%" }}
              >
                {/* ZoomableGroup adds pan & zoom controls for the user */}
                <ZoomableGroup zoom={1} minZoom={1} maxZoom={5} translateExtent={[[0, 0], [800, 600]]}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        // Check if this geography is one of our destinations
                        const isDestination = destinationsData.some(
                          (d) => d.isoA3 === geo.properties.iso_a3 || d.isoA3 === geo.id
                        );
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={isDestination ? "#fef08a" : "#f3f4f6"} // Light Gold if destination, light gray if not
                            stroke="#d1d5db"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: "none" },
                              hover: { outline: "none", fill: isDestination ? "#fde047" : "#e5e7eb" },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>

                  {/* Render Pins */}
                  {destinationsData.map((dest, i) => (
                    <DestinationMarker key={i} dest={dest} onClick={() => handleMarkerClick(dest)} />
                  ))}
                </ZoomableGroup>
              </ComposableMap>
              
              {/* Map controls hint */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm text-xs text-gray-500 font-medium border border-gray-100 flex items-center gap-2">
                <span className="text-lg">🖱️</span> Scroll to zoom, drag to pan
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">
              Our Coverage
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
              Global Destinations, <br /> Premium Services.
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From the historic streets of London to the vibrant energy of Tokyo and Miami, our luxury charter services span the globe. We provide world-class transportation tailored to your exact needs, no matter where your journey takes you.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block">
              <div className="flex items-center gap-4 text-navy">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-bold">Interactive Map</p>
                  <p className="text-sm text-gray-500">Zoom and pan the map, and click on any pin to see our localized services.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* The pop-out modal (already exists and works!) */}
      <CountryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        country={selectedCountry} 
      />
    </section>
  );
}
