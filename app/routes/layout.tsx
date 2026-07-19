import { useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";
import { WhatsAppWidget } from "~/components/ui/whatsapp-widget";
import { ScrollProgress } from "~/components/ui/scroll-progress";
import { FluidBackground } from "~/components/ui/fluid-background";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SiteLayout() {
  useEffect(() => {
    // Disable Lenis on touch-only devices to preserve native momentum scroll
    const isTouchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchOnly) return;

    let cleanupLenis: (() => void) | null = null;

    // Load Lenis dynamically to prevent SSR errors during prerendering
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Sync Lenis with GSAP ScrollTrigger
      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });

      cleanupLenis = () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    });

    return () => {
      if (cleanupLenis) {
        cleanupLenis();
      }
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <FluidBackground />
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
