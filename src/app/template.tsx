"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const AIRY_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Slow, light, immersive B2B page transition (remounts on every App Router route change).
 * Keeps navigation calm and unhurried so enterprise buyers have room to absorb each page.
 */
export default function Template({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Subtle architectural hairline progress sweep under sticky header */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0.9 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.9, ease: AIRY_EASE }}
        className="pointer-events-none fixed left-0 right-0 top-[72px] z-30 h-[2px] origin-left bg-accent"
      />

      {/* Light alabaster breathing veil that lifts softly on arrival */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.65 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.72, ease: AIRY_EASE }}
        className="pointer-events-none fixed inset-0 z-20 bg-background"
      />

      {/* Incoming page content glides up gently and settles */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.78, ease: AIRY_EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}
