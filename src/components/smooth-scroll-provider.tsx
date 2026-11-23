"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET_PX = 88;

/**
 * Airy quintic ease-in-out: slow start, unhurried glide, soft long settle.
 * Designed for B2B executive reading cadence.
 */
function easeInOutQuint(t: number): number {
  return t < 0.5
    ? 16 * t * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

function glideToTarget(targetId: string): boolean {
  const target = document.getElementById(targetId);
  if (!target) return false;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const targetTop = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX
  );

  if (prefersReducedMotion) {
    window.scrollTo({ top: targetTop, behavior: "auto" });
    return true;
  }

  const startY = window.scrollY;
  const distance = targetTop - startY;
  const absDistance = Math.abs(distance);

  if (absDistance < 4) return true;

  // Slow, light duration scaled gently by travel distance (1.05s to 1.55s)
  const duration = Math.min(1550, Math.max(1050, absDistance * 0.32));
  const startTime = performance.now();
  let rafId = 0;
  let cancelled = false;

  const cancel = () => {
    cancelled = true;
    window.cancelAnimationFrame(rafId);
    cleanupListeners();
  };

  const cleanupListeners = () => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("keydown", cancel);
  };

  window.addEventListener("wheel", cancel, { passive: true, once: true });
  window.addEventListener("touchstart", cancel, { passive: true, once: true });
  window.addEventListener("keydown", cancel, { passive: true, once: true });

  const step = (now: number) => {
    if (cancelled) return;
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = easeInOutQuint(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      rafId = window.requestAnimationFrame(step);
    } else {
      cleanupListeners();
      // Gently highlight the enquiry card and focus the first field without jumping
      const formCard = target.querySelector<HTMLElement>(".weact-card-elevated");
      if (formCard) {
        formCard.classList.add("weact-enquiry-arrived");
        window.setTimeout(() => {
          formCard.classList.remove("weact-enquiry-arrived");
        }, 1600);
      }
      const firstInput = target.querySelector<HTMLInputElement>("input:not([type='hidden']):not([tabindex='-1'])");
      if (firstInput) {
        firstInput.focus({ preventScroll: true });
      }
    }
  };

  rafId = window.requestAnimationFrame(step);
  return true;
}

export function SmoothScrollProvider() {
  const pathname = usePathname();

  // Handle cross-page hash navigation (e.g., clicking Request verification from /company-profile -> /#enquiry)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const timer = window.setTimeout(() => {
      glideToTarget(hash);
    }, 260);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  // Intercept same-page anchor links (e.g., #enquiry) for slow, calm full-page glide
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const targetEl = event.target as HTMLElement | null;
      const anchor = targetEl?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      let hashId = "";
      if (rawHref.startsWith("#") && rawHref.length > 1) {
        hashId = rawHref.slice(1);
      } else if (rawHref.includes("#")) {
        const url = new URL(anchor.href, window.location.origin);
        if (
          url.origin === window.location.origin &&
          url.pathname === window.location.pathname &&
          url.hash.length > 1
        ) {
          hashId = url.hash.slice(1);
        }
      }

      if (!hashId) return;

      if (glideToTarget(hashId)) {
        event.preventDefault();
        window.history.replaceState(null, "", `#${hashId}`);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
