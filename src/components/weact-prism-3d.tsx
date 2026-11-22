"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

interface WeActPrism3DProps {
  /** Scroll-driven normalized progress (0..1) from parent chapter track */
  scrollProgress?: MotionValue<number>;
  /** Visual scale preset */
  variant?: "stage" | "compact";
  /** Optional diagonal light beam opacity multiplier */
  beamOpacity?: MotionValue<number> | number;
  className?: string;
}

interface PrismBoxProps {
  width: number;
  height: number;
  depth: number;
  frontBg: string;
  sideBg: string;
  topBg: string;
  backBg: string;
  borderColor: string;
  glowShadow?: string;
}

function PrismBox({
  width,
  height,
  depth,
  frontBg,
  sideBg,
  topBg,
  backBg,
  borderColor,
  glowShadow,
}: PrismBoxProps) {
  const halfW = width / 2;
  const halfH = height / 2;
  const halfD = depth / 2;

  return (
    <div
      className="weact-prism-3d relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Front */}
      <div
        className="weact-prism-face absolute inset-0"
        style={{
          background: frontBg,
          border: `1px solid ${borderColor}`,
          boxShadow: glowShadow,
          transform: `translateZ(${halfD}px)`,
        }}
      />
      {/* Back */}
      <div
        className="weact-prism-face absolute inset-0"
        style={{
          background: backBg,
          border: `1px solid ${borderColor}`,
          transform: `rotateY(180deg) translateZ(${halfD}px)`,
        }}
      />
      {/* Right */}
      <div
        className="weact-prism-face absolute top-0"
        style={{
          width: `${depth}px`,
          height: `${height}px`,
          left: `${(width - depth) / 2}px`,
          background: sideBg,
          border: `1px solid ${borderColor}`,
          transform: `rotateY(90deg) translateZ(${halfW}px)`,
        }}
      />
      {/* Left */}
      <div
        className="weact-prism-face absolute top-0"
        style={{
          width: `${depth}px`,
          height: `${height}px`,
          left: `${(width - depth) / 2}px`,
          background: sideBg,
          border: `1px solid ${borderColor}`,
          transform: `rotateY(-90deg) translateZ(${halfW}px)`,
        }}
      />
      {/* Top */}
      <div
        className="weact-prism-face absolute left-0"
        style={{
          width: `${width}px`,
          height: `${depth}px`,
          top: `${(height - depth) / 2}px`,
          background: topBg,
          border: `1px solid ${borderColor}`,
          transform: `rotateX(90deg) translateZ(${halfH}px)`,
        }}
      />
      {/* Bottom */}
      <div
        className="weact-prism-face absolute left-0"
        style={{
          width: `${width}px`,
          height: `${depth}px`,
          top: `${(height - depth) / 2}px`,
          background: backBg,
          border: `1px solid ${borderColor}`,
          transform: `rotateX(-90deg) translateZ(${halfH}px)`,
        }}
      />
    </div>
  );
}

/**
 * Daylight Architectural 3D WeAct Prism Monolith:
 * Anodized Signal Orange upper block + Brushed Graphite Charcoal lower pillar
 * suspended over a crisp architectural coordinate ring & studio contact shadow.
 */
export function WeActPrism3D({
  scrollProgress,
  variant = "stage",
  beamOpacity = 0.85,
  className,
}: WeActPrism3DProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  const fallbackProgress = useMotionValue(0.35);
  const activeProgress = scrollProgress ?? fallbackProgress;

  const rawPointerX = useMotionValue(0);
  const rawPointerY = useMotionValue(0);
  const pointerTiltY = useSpring(rawPointerX, { stiffness: 120, damping: 20 });
  const pointerTiltX = useSpring(rawPointerY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const scrollRotateY = useTransform(
    activeProgress,
    [0, 0.25, 0.5, 0.78, 1],
    [-26, 28, 22, -34, -20]
  );
  const scrollRotateX = useTransform(
    activeProgress,
    [0, 0.3, 0.6, 0.85, 1],
    [10, 6, 12, 14, 8]
  );
  const upperTwistZ = useTransform(
    activeProgress,
    [0, 0.35, 0.7, 1],
    [-15, -22, -12, -17]
  );
  const upperLiftY = useTransform(
    activeProgress,
    [0, 0.35, 0.7, 1],
    [-8, -16, -5, -10]
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !canHover || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    rawPointerX.set(nx * 7);
    rawPointerY.set(-ny * 7);
  };

  const handlePointerLeave = () => {
    rawPointerX.set(0);
    rawPointerY.set(0);
  };

  const isCompact = variant === "compact";
  const upperDims = isCompact
    ? { width: 108, height: 76, depth: 56 }
    : { width: 146, height: 104, depth: 76 };
  const lowerDims = isCompact
    ? { width: 108, height: 144, depth: 56 }
    : { width: 146, height: 198, depth: 76 };

  return (
    <div
      ref={containerRef}
      onPointerMove={variant === "compact" ? handlePointerMove : undefined}
      onPointerLeave={variant === "compact" ? handlePointerLeave : undefined}
      aria-hidden="true"
      className={cn(
        "weact-prism-scene relative flex items-center justify-center select-none",
        isCompact ? "h-[300px] w-[260px]" : "h-[440px] w-[340px]",
        className
      )}
    >
      {/* Architectural coordinate ring & warm daylight studio backplate */}
      <div
        className="pointer-events-none absolute inset-4 rounded-full border border-border-strong/60"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--accent) 16%, var(--surface)) 0%, transparent 72%)",
        }}
      />
      <div className="pointer-events-none absolute inset-12 rounded-full border border-dashed border-border-strong/70" />

      {/* Studio contact shadow on white ground */}
      <div
        className="pointer-events-none absolute bottom-5 left-1/2 h-8 w-48 -translate-x-1/2 rounded-full blur-xl"
        style={{
          background:
            "radial-gradient(ellipse, color-mix(in oklch, var(--foreground) 26%, transparent) 0%, transparent 75%)",
        }}
      />

      {/* Diagonal copper-orange hairline ray across prism junction */}
      <motion.div
        style={{ opacity: prefersReducedMotion ? 0.65 : beamOpacity }}
        className="pointer-events-none absolute left-1/2 top-[43%] h-[1.5px] w-[340px] -translate-x-1/2 -rotate-[24deg]"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--accent-deep) 48%, transparent 100%)",
          }}
        />
      </motion.div>

      <motion.div
        className="weact-prism-3d relative flex flex-col items-center gap-3"
        style={
          prefersReducedMotion
            ? { transform: "rotateX(9deg) rotateY(-24deg)" }
            : scrollProgress
              ? { rotateY: scrollRotateY, rotateX: scrollRotateX }
              : { rotateY: pointerTiltY, rotateX: pointerTiltX, rotateZ: 0 }
        }
      >
        {/* Upper faceted WeAct Signal Orange anodized wedge block */}
        <motion.div
          className="weact-prism-3d"
          style={
            prefersReducedMotion
              ? { transform: "rotateZ(-14deg) translateY(-6px)" }
              : scrollProgress
                ? { rotateZ: upperTwistZ, y: upperLiftY }
                : { transform: "rotateZ(-14deg) translateY(-6px)" }
          }
        >
          <PrismBox
            {...upperDims}
            frontBg="linear-gradient(145deg, var(--accent-bright) 0%, var(--accent) 58%, var(--accent-deep) 100%)"
            sideBg="linear-gradient(180deg, var(--accent) 0%, var(--accent-deep) 100%)"
            topBg="linear-gradient(135deg, var(--accent-bright) 0%, var(--accent) 100%)"
            backBg="var(--accent-deep)"
            borderColor="color-mix(in oklch, var(--accent-deep) 45%, var(--surface-elevated))"
            glowShadow="0 18px 38px -16px color-mix(in oklch, var(--accent-deep) 35%, transparent)"
          />
        </motion.div>

        {/* Lower architectural Brushed Graphite Charcoal pillar */}
        <div className="weact-prism-3d">
          <PrismBox
            {...lowerDims}
            frontBg="linear-gradient(160deg, var(--brand-charcoal) 0%, var(--foreground) 75%, var(--surface-dark) 100%)"
            sideBg="linear-gradient(180deg, color-mix(in oklch, var(--accent) 22%, var(--brand-charcoal)) 0%, var(--foreground) 100%)"
            topBg="linear-gradient(135deg, color-mix(in oklch, var(--accent) 36%, var(--brand-charcoal)) 0%, var(--foreground) 100%)"
            backBg="var(--foreground)"
            borderColor="color-mix(in oklch, var(--surface-elevated) 24%, var(--brand-charcoal))"
            glowShadow="0 24px 44px -18px color-mix(in oklch, var(--foreground) 32%, transparent)"
          />
        </div>
      </motion.div>
    </div>
  );
}
