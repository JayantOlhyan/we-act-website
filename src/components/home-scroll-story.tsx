"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowLeftRight,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileCheck2,
  Laptop,
  MapPin,
  ShieldCheck,
  Smartphone,
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

  // Container-locked pixel choreography so 1280px, 1440px, 1920px, and 2560px monitors
  // keep the 3D monolith aligned inside the 1280px grid without drifting into outer margins
  const prismX = useTransform(
    smoothProgress,
    [0, 0.08, 0.19, 0.56, 0.72, 1],
    ["370px", "370px", "-420px", "-420px", "380px", "360px"]
  );
  const prismScale = useTransform(
    smoothProgress,
    [0, 0.19, 0.48, 0.72, 1],
    [1, 0.92, 0.96, 1.02, 1.06]
  );
  const prismOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.19, 0.56, 0.65, 0.72, 1],
    [1, 0.88, 0.98, 0.98, 0.88, 1, 0.98]
  );
  const beamOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.22, 0.56, 0.74, 1],
    [0.9, 0.6, 0.85, 0.85, 0.9, 0.75]
  );

  const portalTiltX = useTransform(smoothProgress, [0.16, 0.34], [5, 0]);
  const portalTiltY = useTransform(smoothProgress, [0.16, 0.34], [-4, 0]);

  const activeSector =
    INDUSTRY_VERTICALS[activeSectorIndex] ?? INDUSTRY_VERTICALS[0];
  const SectorIcon = SECTOR_ICONS[activeSectorIndex] ?? Building2;
  const activeStage = LIFECYCLE_STAGES[activeStageIndex] ?? LIFECYCLE_STAGES[0];

  return (
    <div ref={trackRef} className="relative border-b border-border bg-background">
      {/* Desktop sticky 3D stage layer on Daylight White (xl: 1280px+ where side-by-side 3D gutter has full room; <1280px uses clean full-width layout + inline 3D prism) */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden xl:block sticky top-0 z-0 h-screen overflow-hidden weact-vignette"
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-center px-8">
          <motion.div
            style={
              prefersReducedMotion
                ? { transform: "translateX(370px)" }
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

      {/* Foreground narrative chapters */}
      <div className="relative z-10 xl:-mt-[100vh]">
        {/* CHAPTER 1: Operating Backbone + Studio 3D Hardware Card */}
        <section className="border-b border-border xl:min-h-[84vh] xl:flex xl:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 xl:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-sm font-semibold text-accent-text">
                  01 | PAN-India Field Operating Backbone
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

                {/* Architectural studio render card + key operational pillars */}
                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-center">
                  <div className="weact-card-elevated overflow-hidden rounded-lg p-2 sm:col-span-5">
                    <Image
                      src="/images/architectural-prism.jpg"
                      alt="WeAct Global architectural verification system"
                      width={420}
                      height={320}
                      className="h-40 w-full rounded-md object-cover"
                    />
                  </div>
                  <ul className="space-y-2.5 text-sm text-foreground sm:col-span-7">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-accent-text"
                        aria-hidden="true"
                      />
                      <span>PIN-code-based field executive mapping across 10,000+ PINs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-accent-text"
                        aria-hidden="true"
                      />
                      <span>Regional language capabilities among on-ground staff</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-accent-text"
                        aria-hidden="true"
                      />
                      <span>Structured escalation matrix with fallback backup coverage</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-accent-text"
                        aria-hidden="true"
                      />
                      <span>48-72 hour turnaround commitments (subject to scope &amp; SLA)</span>
                    </li>
                  </ul>
                </div>

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

              {/* Mobile & Tablet (<1280px) inline 3D emblem */}
              <div className="flex justify-center lg:col-span-5 xl:hidden">
                <WeActPrism3D variant="compact" />
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 2: Technology-Enabled Delivery & Field-to-ERP Architecture Console */}
        <section className="border-b border-border bg-surface/65 xl:bg-transparent xl:min-h-[90vh] xl:flex xl:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 xl:py-24">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:items-center">
              <div className="hidden xl:block xl:col-span-4" />

              <motion.div
                className="xl:col-span-8 weact-prism-scene"
                style={
                  prefersReducedMotion
                    ? undefined
                    : { rotateX: portalTiltX, rotateY: portalTiltY }
                }
              >
                <div className="weact-card-elevated rounded-xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                    <div>
                      <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent-text">
                        <MapPin className="size-4" aria-hidden="true" />
                        <span>02 | Technology-enabled delivery</span>
                      </p>
                      <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        From PIN-code dispatch to geo-tagged closure
                      </h2>
                    </div>
                    <span className="rounded-sm border border-accent/40 bg-accent-subtle px-3 py-1 font-mono text-xs font-semibold text-accent-text tabular-nums">
                      48-72 hr SLA (per scope)
                    </span>
                  </div>

                  {/* Alloy-style Visual Field-to-ERP Architecture Bar */}
                  <div className="mt-5 grid grid-cols-1 gap-2.5 rounded-lg border border-border bg-surface p-4 sm:grid-cols-3">
                    <div className="flex items-center gap-3 rounded-md border border-border bg-surface-elevated p-3">
                      <Database className="size-5 shrink-0 text-accent-text" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          1. Client ERP / LOS / Ticket
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Two-way API or batch intake
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-md border border-border bg-surface-elevated p-3">
                      <ArrowLeftRight className="size-5 shrink-0 text-accent-text" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          2. PIN-Code Allocation Engine
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Local executive + fallback backup
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-md border border-border bg-surface-elevated p-3">
                      <Smartphone className="size-5 shrink-0 text-accent-text" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          3. Geo-Tagged Mobile Closure
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Encrypted photo &amp; SLA report
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 4-stage execution workflow */}
                  <ol className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {WORKFLOW_STEPS.map((step) => (
                      <li
                        key={step.step}
                        className="rounded-md border border-border bg-surface p-4"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-brand-charcoal font-mono text-xs font-bold text-primary-foreground tabular-nums">
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
                  <div className="mt-5 overflow-x-auto rounded-md border border-border">
                    <table className="w-full text-left text-sm">
                      <thead className="border-b border-border bg-brand-charcoal text-primary-foreground">
                        <tr>
                          <th className="px-4 py-3 font-semibold">E-platform capability</th>
                          <th className="px-4 py-3 font-semibold">How it supports delivery</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border bg-surface-elevated">
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

        {/* CHAPTER 3: Interactive Sector Switcher with Editorial Photography (Perfios Stage 6 pattern) */}
        <section className="border-b border-border xl:min-h-[88vh] xl:flex xl:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 xl:py-24">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-12 xl:items-start">
              {/* Left gutter reserved for sticky 3D Prism on xl: (1280px+) */}
              <div className="hidden xl:block xl:col-span-3" />

              <div className="xl:col-span-9">
                <p className="text-sm font-semibold text-accent-text">
                  03 | Regulated Industry Workflows
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground leading-[1.14] sm:text-4xl">
                  Field Coverage Across Regulated Sectors
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  Select an industry vertical to inspect tailored deliverables and on-ground execution. Named client references are shared directly during vendor empanelment under NDA.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                  {/* Vertical tab switcher */}
                  <div
                    role="tablist"
                    aria-label="Industry sectors served"
                    className="flex flex-col gap-2 md:col-span-5"
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
                              : "border border-border/70 bg-surface/60 text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                          )}
                        >
                          {item.sector}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active sector details + bespoke editorial photography */}
                  <div
                    role="tabpanel"
                    id={`sector-panel-${activeSector.id}`}
                    aria-labelledby={`sector-tab-${activeSector.id}`}
                    className="weact-card-elevated overflow-hidden rounded-xl md:col-span-7"
                  >
                    <div className="relative h-52 w-full overflow-hidden border-b border-border bg-surface">
                      <Image
                        src={activeSector.image}
                        alt={activeSector.sector}
                        width={720}
                        height={420}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-md border border-border bg-surface-elevated/95 px-3.5 py-2 text-xs shadow-sm backdrop-blur-xs">
                        <span className="font-medium text-foreground">
                          {activeSector.imageCaption}
                        </span>
                        <span className="shrink-0 rounded-xs bg-accent-subtle px-2 py-0.5 font-mono text-[11px] font-semibold text-accent-text">
                          Geo-Tagged
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {activeSector.scope}
                      </p>

                      <div className="mt-5 space-y-4">
                        {activeSector.highlights.map((highlight) => (
                          <div
                            key={highlight.title}
                            className="flex items-start gap-3.5"
                          >
                            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/35 bg-accent-subtle text-accent-text">
                              <SectorIcon className="size-4" aria-hidden="true" />
                            </span>
                            <div>
                              <h3 className="text-base font-semibold text-foreground">
                                {highlight.title}
                              </h3>
                              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                                {highlight.summary}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
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
          </div>
        </section>

        {/* CHAPTER 4: Interactive Verification Lifecycle Switcher + Field Dossier Specimen (Perfios Stage 7/8) */}
        <section className="border-b border-border bg-surface/65 xl:bg-transparent xl:min-h-[88vh] xl:flex xl:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 xl:py-24">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-12 xl:items-start">
              <div className="xl:col-span-8">
                <p className="text-sm font-semibold text-accent-text">
                  04 | End-to-End Field Verification Lifecycles
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground leading-[1.14] sm:text-4xl">
                  We Simplify Your Field Verification Lifecycles
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  Inspect each verification or field-support workflow and the audit-ready evidence dossier returned to your team.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                  {/* Left 6 lifecycle tabs */}
                  <div
                    role="tablist"
                    aria-label="Verification lifecycle workflows"
                    className="flex flex-col gap-2 md:col-span-5"
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
                              : "border border-border/70 bg-surface-elevated/60 text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                          )}
                        >
                          {stage.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Center detail console + Verification Dossier Specimen */}
                  <div
                    role="tabpanel"
                    id={`lifecycle-panel-${activeStage.id}`}
                    aria-labelledby={`lifecycle-tab-${activeStage.id}`}
                    className="weact-card-elevated rounded-xl p-6 md:col-span-7"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
                      <span className="font-mono text-xs font-semibold text-accent-text">
                        SPECIMEN // {activeStage.code}
                      </span>
                      <span className="rounded-xs bg-success-subtle px-2 py-0.5 font-mono text-xs font-medium text-success">
                        ISO 9001:2015 Protocol
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {activeStage.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {activeStage.summary}
                    </p>

                    {/* Field Verification Dossier Checkpoints */}
                    <div className="mt-5 rounded-lg border border-border bg-surface p-4">
                      <p className="text-xs font-semibold text-foreground">
                        On-ground field verification checkpoints
                      </p>
                      <ul className="mt-2.5 space-y-2">
                        {activeStage.checkpoints.map((cp) => (
                          <li
                            key={cp}
                            className="flex items-center gap-2 text-xs text-foreground"
                          >
                            <CheckCircle2
                              className="size-3.5 shrink-0 text-success"
                              aria-hidden="true"
                            />
                            <span>{cp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <dl className="mt-5 space-y-3 border-t border-border pt-4 text-sm">
                      <div>
                        <dt className="font-medium text-foreground">
                          Evidence package returned
                        </dt>
                        <dd className="text-muted-foreground">
                          {activeStage.evidence}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-foreground">
                          Delivery governance
                        </dt>
                        <dd className="text-muted-foreground">
                          {activeStage.sla}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-5 border-t border-border pt-4">
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

              {/* Right gutter reserved for sticky 3D prism on xl: */}
              <div className="hidden xl:block xl:col-span-4" />
            </div>
          </div>
        </section>

        {/* CHAPTER 5: Closing Transformation Lead-In */}
        <section className="xl:min-h-[70vh] xl:flex xl:items-center">
          <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 xl:py-20">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:items-center">
              <div className="xl:col-span-7">
                <p className="text-sm font-semibold text-accent-text">
                  05 | Direct Director Engagement
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground leading-[1.1] sm:text-5xl">
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
