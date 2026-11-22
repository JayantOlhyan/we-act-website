"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const BUYER_SECTORS = [
  "Banks & NBFCs",
  "Life & General Insurers",
  "Payment Aggregators",
  "Enterprise IT Teams",
] as const;

export function RotatingHeroWord() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % BUYER_SECTORS.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span className="mt-1 block text-accent-text">
        Banks, Insurers &amp; Enterprises
      </span>
    );
  }

  return (
    <span
      aria-live="polite"
      className="relative mt-1 block h-[1.22em] overflow-hidden text-accent-text"
    >
      <span
        className="block transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(0, -${index * 25}%, 0)`,
        }}
      >
        {BUYER_SECTORS.map((sector) => (
          <span
            key={sector}
            className="block h-[1.22em] leading-[1.22] whitespace-nowrap"
          >
            {sector}
          </span>
        ))}
      </span>
    </span>
  );
}
