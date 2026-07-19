import { useEffect, useRef } from "react";

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1, y: -1 });

  useEffect(() => {
    // Track mouse coordinates to know where to trigger scroll splats
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    let cleanupFluid: (() => void) | null = null;

    // Load webgl-fluid dynamically to prevent SSR errors in React Router
    // @ts-ignore
    import("webgl-fluid").then((module) => {
      if (!isMounted) return;
      const WebGLFluid = module.default;
      const canvas = canvasRef.current;

      if (canvas) {
        try {
          // Initialize fluid simulation
          WebGLFluid(canvas, {
            TRIGGER: "hover",
            IMMEDIATE: true,
            AUTO: false,
            COLORFUL: true,
            TRANSPARENT: true,
            BLOOM: true,
            BLOOM_INTENSITY: 0.4,
            BLOOM_THRESHOLD: 0.85,
            DENSITY_DISSIPATION: 0.98, // Fluid trails persist slightly longer
            VELOCITY_DISSIPATION: 0.98,
            SPLAT_RADIUS: 0.28,
            SPLAT_FORCE: 5000,
            CURL: 28,
            PAUSED: false,
            SHADING: true,
          });

          // Handle window resizing
          const handleResize = () => {
            if (canvas) {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
            }
          };
          window.addEventListener("resize", handleResize, { passive: true });
          handleResize();

          // Scroll event listener to dispatch synthetic splats
          let lastScrollY = window.scrollY;
          const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const deltaY = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;

            if (Math.abs(deltaY) < 1.5) return;

            const rect = canvas.getBoundingClientRect();
            // Use current mouse position if active, otherwise center of screen
            const x = mouseRef.current.x !== -1 ? mouseRef.current.x : rect.width / 2;
            const y = mouseRef.current.y !== -1 ? mouseRef.current.y : rect.height / 2;

            // Dispatch synthetic mouse events to trigger WebGLFluid's internal movement listeners
            const dispatch = (type: string, ox: number, oy: number) => {
              const ev = new MouseEvent(type, { bubbles: true, cancelable: true });
              // Inject custom offsets required by webgl-fluid event handler
              Object.defineProperty(ev, "offsetX", { value: ox, writable: true });
              Object.defineProperty(ev, "offsetY", { value: oy, writable: true });
              canvas.dispatchEvent(ev);
            };

            // Trigger mousedown to activate pointer id -1
            dispatch("mousedown", x, y);
            // Simulate dragging force in the scroll direction
            const dragOffset = Math.min(Math.abs(deltaY) * 1.5, 60);
            dispatch("mousemove", x, y + (dragOffset * (deltaY > 0 ? 1 : -1)));
            // Release pointer
            dispatch("mouseup", x, y);
          };

          window.addEventListener("scroll", handleScroll, { passive: true });

          cleanupFluid = () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
          };
        } catch (err) {
          console.error("Failed to initialize WebGL Fluid:", err);
        }
      }
    });

    return () => {
      isMounted = false;
      if (cleanupFluid) {
        cleanupFluid();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fluid-bg-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
}
