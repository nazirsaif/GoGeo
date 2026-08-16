"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedStatProps {
  endValue: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedStat({ endValue, suffix = "", duration = 3500 }: AnimatedStatProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Use easing function for smoother animation (easeOutQuart)
            const easeOut = 1 - Math.pow(1 - progress, 4);
            
            setValue(Math.floor(easeOut * endValue));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setValue(endValue);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration]);

  const formattedValue = value >= 1000 ? value.toLocaleString() : value;

  return <span ref={ref}>{formattedValue}{suffix}</span>;
}
