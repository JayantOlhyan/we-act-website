"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Laptop,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { WeActPrism3D } from "@/components/weact-prism-3d";
import { buttonVariants } from "@/components/ui/button";
import { CallLink, WhatsAppLink } from "@/components/tracked-contact-links";
import {
  EPLATFORM_CAPABILITIES,
  INDUSTRY_VERTICALS,
  LIFECYCLE_STAGES,
  WORKFLOW_STEPS,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

const SECTOR_ICONS = [
  Building2,
  ShieldCheck,
  ClipboardCheck,
  Laptop,
  FileCheck2,
] as const;

export function HomeScrollStory() {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [activeSectorIndex, setActiveSectorIndex] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Desktop sticky 3D monolith choreography across 5 narrative chapters:
  // Ch1 (Right) -> Ch2 (Left subtle recess behind skewed E-platform portal)
  // -> Ch3 (Left beside Industry Switcher) -> Ch4 (Right beside Lifecycle Switcher)
  // -> Ch5 (Right opposite Closing CTA)
  const prismX = useTransform(
    smoothProgress,
    [0, 0.08, 0.19, 0.56, 0.72, 1],
    ["26vw", "26vw", "-31vw", "-31vw", "28vw", "26vw"]
  );
  const prismScale = useTransform(
    smoothProgress,
    [0, 0.19, 0.48, 0.72, 1],
    [1, 0.92, 0.96, 1.02, 1.06]
  );
  const prismOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.19, 0.56, 0.65, 0.72, 1],
    [1, 0.85, 0.98, 0.98, 0.85, 1, 0.98]
  );
  const beamOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.22, 0.56, 0.74, 1],
    [0.95, 0.65, 0.85, 0.85, 0.9, 0.75]
  );

  // Chapter 2 subtle 3D perspective entrance for the E-Platform console
  const portalTiltX = useTransform(smoothProgress, [0.16, 0.34], [6, 0]);
  const portalTiltY = useTransform(smoothProgress, [0.16, 0.34], [-5, 0]);

  const activeSector = INDUSTRY_VERTICALS[activeSectorIndex] ?? INDUSTRY_VERTICALS[0];
  const SectorIcon = SECTOR_ICONS[activeSectorIndex] ?? Building2;
  const activeStage = LIFECYCLE_STAGES[activeStageIndex] ?? LIFECYCLE_STAGES[0];

  return (
    <div ref={trackRef} className="relative border-b border-border bg-background">
      {/* Desktop sticky 3D stage layer (hidden on mobile; pointer-events-none so all tabs/links remain clickable) */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block sticky top-0 z-0 h-screen overflow-hidden weact-vignette"
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-center px-8">
          <motion.div
            style={
              prefersReducedMotion
                ? { transform: "translateX(26vw)" }
                : { x: prismX, scale: prismScale, opacity: prismOpacity }
            }
          >
            <WeActPrism3D
              scrollProgress={smoothProgress}
              beamOpacity={beamOpacity}
              variant="stage"
            />
          </motion.div>
        </div>
      </div>

      {/* Foreground narrative chapters (pulled up on lg: to overlay the sticky 3D stage) */}
      <div className="relative z-10 lg:-mt-[100vh]">
        {/* CHAPTER 1: Operating Backbone */}
        <section className="border-b border-border/60 lg:min-h-[82vh] lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="text-sm font-medium text-accent-text">
                  PAN-India Field Operating Backbone
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground leading-[1.12] sm:text-5xl">
                  Built to execute where digital verification stops.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  WeAct Global combines{" "}
                  <span className="font-semibold text-accent-text tabular-nums">
                    3,200+ trained field executives
                  </span>{" "}
                  across{" "}
                  <span className="font-semibold text-foreground tabular-nums">
                    585+ cities and 10,000+ PIN codes
                  </span>{" "}
                  with PIN-mapped allocation, regional language capability, and geo-tagged evidence across North, South, and East zones.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#enquiry"
                    className={buttonVariants({ variant: "default", size: "lg" })}
                  >
                    <span>Scope a pilot</span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                  <Link
                    href="/company-profile"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                  >
                    <span>Vendor empanelment PDF</span>
                  </Link>
                </div>
              </div>

              {/* Mobile inline 3D emblem */}
              <div className="flex justify-center lg:hidden">
                <WeActPrism3D variant="compact" />
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 2: Technology-Enabled Delivery & E-Platform Portal */}
        <section className="border-b border-border/60 bg-surface/55 lg:bg-transparent lg:min-h-[88vh] lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="hidden lg:block lg:col-span-4" />

              <motion.div
                className="lg:col-span-8 weact-prism-scene"
                style={
                  prefersReducedMotion
                    ? undefined
                    : { rotateX: portalTiltX, rotateY: portalTiltY }
                }
              >
                <div className="rounded-lg border border-border-strong bg-surface/95 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                    <div>
                      <p className="inline-flex items-center gap-2 text-sm font-medium text-accent-text">
                        <MapPin className="size-4" aria-hidden="true" />
                        <span>Technology-enabled delivery</span>
                      </p>
                      <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        From PIN-code dispatch to geo-tagged closure
                      </h2>
                    </div>
                    <span className="rounded-sm border border-accent/40 bg-accent-subtle px-3 py-1 font-mono text-xs font-medium text-accent-text tabular-nums">
                      48-72 hr SLA (per scope)
                    </span>
                  </div>

                  {/* 4-stage execution workflow */}
                  <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {WORKFLOW_STEPS.map((step) => (
                      <li
                        key={step.step}
                        className="rounded-md border border-border bg-surface-elevated p-4"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-accent font-mono text-xs font-bold text-accent-foreground tabular-nums">
                            {step.step}
                          </span>
                          <h3 className="text-base font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.detail}
                        </p>
                      </li>
                    ))}
                  </ol>

                  {/* E-Platform capabilities table */}
                  <div className="mt-6 overflow-x-auto rounded-md border border-border bg-background/80">
                    <table className="w-full text-left text-sm">
                      <thead className="border-b border-border bg-surface-elevated text-foreground">
                        <tr>
                          <th className="px-4 py-3 font-semibold">E-platform capability</th>
                          <th className="px-4 py-3 font-semibold">Operational support</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {EPLATFORM_CAPABILITIES.map((row) => (
                          <tr key={row.capability}>
                            <td className="px-4 py-3 font-medium text-foreground">
                              {row.capability}
                            </td>
                            <td className="px-4 py-3 text-muted-foreground">
                              {row.detail}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CHAPTER 3: Interactive Sector Switcher (Perfios Stage 6 pattern) */}
        <section className="border-b border-border/60 lg:min-h-[88vh] lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              {/* Left gutter reserved for the sticky 3D Prism on desktop */}
              <div className="hidden lg:block lg:col-span-3" />

              <div className="lg:col-span-9">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground leading-[1.14] sm:text-4xl">
                  Field Coverage Across Regulated Sectors
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  Select an industry vertical to inspect tailored deliverables. Client case references are shared directly during vendor empanelment under NDA.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
                  {/* Vertical tab switcher */}
                  <div
                    role="tablist"
                    aria-label="Industry sectors served"
                    className="flex flex-col gap-1.5 md:col-span-5"
                  >
                    {INDUSTRY_VERTICALS.map((item, idx) => {
                      const isActive = idx === activeSectorIndex;
                      return (
                        <button
                          key={item.id}
                          role="tab"
                          type="button"
                          aria-selected={isActive}
                          aria-controls={`sector-panel-${item.id}`}
                          id={`sector-tab-${item.id}`}
                          onClick={() => setActiveSectorIndex(idx)}
                          className={cn(
                            "w-full rounded-md px-4 py-3.5 text-left text-base transition-colors duration-150 cursor-pointer",
                            isActive
                              ? "weact-tab-active font-semibold text-foreground"
                              : "border border-transparent text-muted-foreground hover:bg-surface hover:text-foreground"
                          )}
                        >
                          {item.sector}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active sector details panel */}
                  <div
                    role="tabpanel"
                    id={`sector-panel-${activeSector.id}`}
                    aria-labelledby={`sector-tab-${activeSector.id}`}
                    className="rounded-lg border border-border bg-surface/95 p-6 backdrop-blur-sm md:col-span-7"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {activeSector.scope}
                    </p>

                    <div className="mt-6 space-y-5">
                      {activeSector.highlights.map((highlight) => (
                        <div key={highlight.title} className="flex items-start gap-3.5">
                          <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md border border-accent/35 bg-accent-subtle text-accent-text">
                            <SectorIcon className="size-5" aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="text-base font-semibold text-foreground">
                              {highlight.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {highlight.summary}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                      <Link
                        href={activeSector.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline underline-offset-4"
                      >
                        <span>{activeSector.cta}</span>
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        NDA references available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 4: Interactive Verification Lifecycle Switcher (Perfios Stage 7/8 pattern) */}
        <section className="border-b border-border/60 bg-surface/55 lg:bg-transparent lg:min-h-[88vh] lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-8">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground leading-[1.14] sm:text-4xl">
                  We Simplify Your Field Verification Lifecycles
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  Inspect each verification or field-support workflow from dispatch through audit-ready closure.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
                  {/* Left 6 lifecycle tabs */}
                  <div
                    role="tablist"
                    aria-label="Verification lifecycle workflows"
                    className="flex flex-col gap-1.5 md:col-span-5"
                  >
                    {LIFECYCLE_STAGES.map((stage, idx) => {
                      const isActive = idx === activeStageIndex;
                      return (
                        <button
                          key={stage.id}
                          role="tab"
                          type="button"
                          aria-selected={isActive}
                          aria-controls={`lifecycle-panel-${stage.id}`}
                          id={`lifecycle-tab-${stage.id}`}
                          onClick={() => setActiveStageIndex(idx)}
                          className={cn(
                            "w-full rounded-md px-4 py-3 text-left text-base transition-colors duration-150 cursor-pointer",
                            isActive
                              ? "weact-tab-active font-semibold text-foreground"
                              : "border border-transparent text-muted-foreground hover:bg-surface-elevated/60 hover:text-foreground"
                          )}
                        >
                          {stage.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Center detail console */}
                  <div
                    role="tabpanel"
                    id={`lifecycle-panel-${activeStage.id}`}
                    aria-labelledby={`lifecycle-tab-${activeStage.id}`}
                    className="rounded-lg border border-border bg-background/95 p-6 backdrop-blur-sm md:col-span-7"
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      {activeStage.label}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {activeStage.summary}
                    </p>

                    <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-accent-text"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="font-medium text-foreground">
                            Evidence standard
                          </dt>
                          <dd className="text-muted-foreground">
                            {activeStage.evidence}
                          </dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-accent-text"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="font-medium text-foreground">
                            Delivery governance
                          </dt>
                          <dd className="text-muted-foreground">
                            {activeStage.sla}
                          </dd>
                        </div>
                      </div>
                    </dl>

                    <div className="mt-6">
                      <Link
                        href={activeStage.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline underline-offset-4"
                      >
                        <span>Explore workflow</span>
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right gutter reserved for sticky 3D prism */}
              <div className="hidden lg:block lg:col-span-4" />
            </div>
          </div>
        </section>

        {/* CHAPTER 5: Closing Transformation Lead-In (Perfios Stage 10 pattern) */}
        <section className="lg:min-h-[75vh] lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground leading-[1.1] sm:text-5xl">
                  Ready to Verify Across 10,000+ PIN Codes?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Speak directly with Neeraj Juneja (Director) to confirm regional field coverage, review ISO 9001:2015 security protocols, or launch a verification pilot.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#enquiry"
                    className={buttonVariants({ variant: "accent", size: "lg" })}
                  >
                    <span>Send requirement</span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                  <WhatsAppLink
                    pageLabel="Home Closing Band"
                    variant="outline"
                    size="lg"
                    label="WhatsApp Director"
                  />
                  <CallLink pageLabel="Home Closing Band" variant="ghost" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
