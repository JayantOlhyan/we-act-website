/**
 * GSAP Configuration & Utilities
 * Central registration point for all GSAP plugins.
 * Import this file once in the app root.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once globally
gsap.registerPlugin(ScrollTrigger);

// Default animation configs
export const fadeUpConfig = {
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
};

export const fadeInConfig = {
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
};

export const staggerConfig = {
  each: 0.1,
  from: "start",
};

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Create a scroll-triggered fade up animation
 */
export function createScrollFadeUp(
  targets: string | Element | Element[],
  options?: {
    trigger?: string | Element;
    start?: string;
    stagger?: number;
    delay?: number;
  }
) {
  if (prefersReducedMotion()) return;

  return gsap.from(targets, {
    ...fadeUpConfig,
    delay: options?.delay ?? 0,
    stagger: options?.stagger ?? 0.1,
    scrollTrigger: {
      trigger: (options?.trigger ?? targets) as string | Element,
      start: options?.start ?? "top 85%",
      once: true,
    },
  });
}

/**
 * Counter animation for stat numbers
 */
export function animateCounter(
  element: Element,
  endValue: number,
  options?: {
    duration?: number;
    suffix?: string;
    prefix?: string;
  }
) {
  if (prefersReducedMotion()) {
    element.textContent = `${options?.prefix ?? ""}${endValue}${options?.suffix ?? ""}`;
    return;
  }

  const obj = { value: 0 };
  return gsap.to(obj, {
    value: endValue,
    duration: options?.duration ?? 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      once: true,
    },
    onUpdate: () => {
      element.textContent = `${options?.prefix ?? ""}${Math.round(obj.value).toLocaleString()}${options?.suffix ?? ""}`;
    },
  });
}

export { gsap, ScrollTrigger };
