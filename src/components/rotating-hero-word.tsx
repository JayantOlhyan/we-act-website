"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

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
      <span className="block text-accent-text">
        Banks, Insurers &amp; Enterprises
      </span>
    );
  }

  return (
    <span className="relative mt-1 block h-[1.22em] overflow-hidden text-accent-text">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={BUYER_SECTORS[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.34, ease: "easeOut" }}
          className="block whitespace-nowrap"
        >
          {BUYER_SECTORS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
