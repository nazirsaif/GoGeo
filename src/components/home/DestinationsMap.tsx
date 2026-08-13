"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from 'next/dynamic';
import CountryModal from "./CountryModal";
import { destinationsData, DestinationInfo } from "@/data/destinationsData";

// Dynamically import Globe to avoid SSR issues with Three.js
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

interface GeoJsonFeature {
  properties: {
    ISO_A3: string;
    ADMIN: string;
    [key: string]: unknown;
  };
}

export default function DestinationsMap() {
  const [countries, setCountries] = useState<{features: GeoJsonFeature[]}>({ features: [] });
  const [selectedCountry, setSelectedCountry] = useState<DestinationInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetWidth // Keep it square
        });
      }
    };
    
    // Initial size
    setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);

    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Scroll to rotate the globe
  useEffect(() => {
    const handleScroll = () => {
      if (globeEl.current) {
        const scrollY = window.scrollY;
        const controls = globeEl.current.controls();
        if (controls) {
          controls.autoRotate = false;
          const rotationOffset = scrollY * 0.001;
          const currentPov = globeEl.current.pointOfView();
          globeEl.current.pointOfView({
            lat: currentPov.lat,
            lng: currentPov.lng + rotationOffset,
            altitude: currentPov.altitude
          }, 0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up default auto-rotation and fix wheel scroll hijacking
  useEffect(() => {
    if (globeEl.current && isMounted) {
      const controls = globeEl.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableZoom = false; // Disable zoom to prevent wheel hijacking
      }
      
      // Attempt to forcefully remove wheel event listeners from canvas to allow page scrolling
      const canvas = globeEl.current.renderer().domElement;
      canvas.addEventListener('wheel', (e: Event) => {
        // Prevent ThreeJS from stopping the scroll
        e.stopPropagation();
      }, { passive: true });
    }
  }, [isMounted]);

  const getCountryColor = (feature: object) => {
    const geoFeature = feature as GeoJsonFeature;
    const isoA3 = geoFeature.properties.ISO_A3;
    const isDestination = destinationsData.some(d => d.isoA3 === isoA3);
    return isDestination ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)'; 
  };

  if (!isMounted) {
    return (
      <div className="w-full h-[600px] bg-gray-50 flex items-center justify-center">
        <div className="text-navy text-xl">Loading Globe...</div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: The Globe */}
          <div className="w-full lg:w-1/2 flex justify-center" ref={containerRef}>
            <div 
              className="relative rounded-full shadow-2xl flex items-center justify-center bg-white"
              style={{ width: dimensions.width, height: dimensions.height }}
              onWheel={(e) => {
                 // Manually scroll window if user scrolls over the globe container
                 window.scrollBy({ top: e.deltaY, behavior: 'auto' });
              }}
            >
              <Globe
                ref={globeEl}
                width={dimensions.width}
                height={dimensions.height}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                
                polygonsData={countries.features}
                polygonAltitude={0.005}
                polygonCapColor={getCountryColor}
                polygonSideColor={() => 'rgba(0,0,0,0)'}
                polygonStrokeColor={() => 'rgba(255,255,255,0.2)'}
                
                htmlElementsData={destinationsData}
                htmlElement={(d: object) => {
                  const dest = d as DestinationInfo;
                  const el = document.createElement('div');
                  
                  el.style.width = '32px';
                  el.style.height = '32px';
                  el.style.display = 'flex';
                  el.style.flexDirection = 'column';
                  el.style.alignItems = 'center';
                  el.style.justifyContent = 'center';
                  el.style.cursor = 'pointer';
                  el.style.pointerEvents = 'auto';
                  el.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                  
                  // The Map Pin
                  const pin = document.createElement('div');
                  pin.style.width = '24px';
                  pin.style.height = '24px';
                  pin.style.backgroundColor = '#eab308'; // Gold
                  pin.style.borderRadius = '50% 50% 50% 0';
                  pin.style.transform = 'rotate(-45deg)';
                  pin.style.boxShadow = '0 4px 8px rgba(0,0,0,0.4)';
                  pin.style.display = 'flex';
                  pin.style.alignItems = 'center';
                  pin.style.justifyContent = 'center';
                  pin.style.position = 'relative';
                  
                  // The Flag Emoji inside the pin
                  const flag = document.createElement('div');
                  flag.innerText = dest.flag;
                  flag.style.transform = 'rotate(45deg)'; // Counter-rotate so flag is upright
                  flag.style.fontSize = '12px';
                  flag.style.lineHeight = '1';
                  
                  pin.appendChild(flag);
                  el.appendChild(pin);

                  // Country Name Label
                  const label = document.createElement('div');
                  label.innerText = dest.name;
                  label.style.position = 'absolute';
                  label.style.bottom = '-24px';
                  label.style.color = '#0b2c4d';
                  label.style.backgroundColor = 'rgba(255,255,255,0.9)';
                  label.style.padding = '2px 8px';
                  label.style.borderRadius = '4px';
                  label.style.fontSize = '13px';
                  label.style.fontWeight = 'bold';
                  label.style.pointerEvents = 'none';
                  label.style.opacity = '0';
                  label.style.transition = 'opacity 0.2s';
                  label.style.whiteSpace = 'nowrap';
                  label.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                  
                  el.appendChild(label);

                  el.onmouseenter = () => {
                    el.style.transform = 'scale(1.4) translateY(-5px)';
                    label.style.opacity = '1';
                  };
                  el.onmouseleave = () => {
                    el.style.transform = 'scale(1) translateY(0)';
                    label.style.opacity = '0';
                  };
                  el.onclick = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setSelectedCountry(dest);
                    setIsModalOpen(true);
                  };
                  el.onpointerdown = (e) => e.stopPropagation();
                  el.onpointerup = (e) => e.stopPropagation();
                  el.onpointermove = (e) => e.stopPropagation();
                  
                  return el;
                }}
              />
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
                <div className="text-3xl">🖱️</div>
                <div>
                  <p className="font-bold">Interactive Experience</p>
                  <p className="text-sm text-gray-500">Grab and spin the globe, and click on any flag pin to see our localized services.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <CountryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        country={selectedCountry} 
      />
    </section>
  );
}
