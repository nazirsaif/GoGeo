"use client";

import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Coordinates for Europe, UAE, and Saudi Arabia markers
const markers = [
  { name: "United Kingdom", coordinates: [-3.4359, 55.3781] },
  { name: "France", coordinates: [2.2137, 46.2276] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Spain", coordinates: [-3.7492, 40.4637] },
  { name: "Italy", coordinates: [12.5674, 41.8719] },
  { name: "Netherlands", coordinates: [5.2913, 52.1326] },
  { name: "Switzerland", coordinates: [8.2275, 46.8182] },
  { name: "Sweden", coordinates: [18.6435, 60.1282] },
  { name: "Norway", coordinates: [8.4689, 60.472] },
  { name: "UAE", coordinates: [53.8478, 23.4241] }, // United Arab Emirates
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859] } // Saudi Arabia
];

export default function DestinationsMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
          All destinations where we <br /> offer our Charter bus rental services
        </h2>
        <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Countries</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="w-full h-[500px] md:h-[700px] bg-[#f0f4f8] flex items-center justify-center">
          {!isMounted ? (
            <div className="text-gray-400">Loading map...</div>
          ) : (
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 500, // Zoomed in
                center: [20, 45], // Centered around Europe/Middle East
              }}
              className="w-full h-full"
            >
              <ZoomableGroup center={[20, 45]} zoom={1.2}>
                <Geographies geography={geoUrl}>
                  {({ geographies }: { geographies: any[] }) =>
                    geographies.map((geo: any) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#0b2c4d" // navy color matching theme
                        stroke="#d1d5db"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#1a4674", outline: "none" },
                          pressed: { fill: "#0b2c4d", outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                
                {markers.map(({ name, coordinates }) => (
                  <Marker key={name} coordinates={coordinates as [number, number]}>
                    {/* Flag-like marker styling */}
                    <g transform="translate(-12, -24)">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="#eab308" // gold color
                        stroke="white"
                        strokeWidth={1.5}
                      />
                    </g>
                    <text
                      textAnchor="middle"
                      y={5}
                      style={{ fontFamily: "system-ui", fill: "white", fontSize: "10px", fontWeight: "bold" }}
                    >
                      {name}
                    </text>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          )}
        </div>
      </div>
    </section>
  );
}
