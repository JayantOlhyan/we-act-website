"use client";

import { useState } from "react";
import { CheckCircle2, Globe2, Languages, MapPin, ShieldCheck } from "lucide-react";
import { APPROVED_PROOF_METRICS, INDIA_COVERAGE_ZONES } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function IndiaCoverageConsole() {
  const [activeZoneIdx, setActiveZoneIdx] = useState(0);
  const activeZone = INDIA_COVERAGE_ZONES[activeZoneIdx] ?? INDIA_COVERAGE_ZONES[0];

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-24">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-accent-text">
              <MapPin className="size-4" aria-hidden="true" />
              <span>PAN-India operations &amp; last-mile delivery network</span>
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              10,000+ PIN codes mapped across metros, Tier I, II &amp; III towns
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Select a regional operating zone to inspect hub cities, local language capabilities, and PIN-code field dispatch architecture.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {APPROVED_PROOF_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-border bg-surface-elevated px-3.5 py-2.5"
              >
                <p className="font-mono text-lg font-semibold text-foreground tabular-nums">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground leading-tight">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: 4 Zone Selector Tabs */}
          <div
            role="tablist"
            aria-label="PAN-India operating zones"
            className="flex flex-col gap-2.5 lg:col-span-4"
          >
            {INDIA_COVERAGE_ZONES.map((item, idx) => {
              const isActive = idx === activeZoneIdx;
              return (
                <button
                  key={item.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`zone-panel-${item.id}`}
                  id={`zone-tab-${item.id}`}
                  onClick={() => setActiveZoneIdx(idx)}
                  className={cn(
                    "w-full rounded-md px-5 py-4 text-left transition-colors duration-150 cursor-pointer",
                    isActive
                      ? "weact-tab-active text-foreground"
                      : "border border-border bg-surface-elevated/60 text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-semibold text-foreground">
                      {item.zone}
                    </span>
                    <span className="font-mono text-xs text-accent-text">
                      Active
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                    {item.hubs}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Center: Architectural SVG India PIN-Grid Dispatch Visualizer */}
          <div className="lg:col-span-4">
            <div className="weact-card-elevated relative flex flex-col items-center justify-center rounded-xl p-6">
              <div className="flex w-full items-center justify-between border-b border-border pb-3 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  PIN-Code Dispatch Grid
                </span>
                <span className="font-mono text-accent-text">
                  {activeZone.zone}
                </span>
              </div>

              <svg
                viewBox="0 0 340 360"
                className="mt-4 h-[290px] w-full max-w-[300px]"
                role="img"
                aria-label={`Coverage schematic highlighting ${activeZone.zone}`}
              >
                {/* Architectural background coordinate grid */}
                <defs>
                  <pattern
                    id="weact-pin-grid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth="0.75"
                    />
                  </pattern>
                </defs>
                <rect width="340" height="360" fill="url(#weact-pin-grid)" rx="8" />

                {/* Stylized geometric India continental polygon silhouette */}
                <polygon
                  points="135,28 168,34 182,58 175,86 210,115 245,120 296,112 310,136 276,162 252,174 238,205 198,248 184,302 158,342 136,332 122,282 98,236 86,192 64,174 74,145 104,132 114,92 118,54"
                  fill="var(--surface)"
                  stroke="var(--border-strong)"
                  strokeWidth="1.5"
                />

                {/* Inter-zone dispatch network lines */}
                {INDIA_COVERAGE_ZONES.flatMap((z) =>
                  z.mapCoords.map((pt) => ({
                    city: pt.city,
                    cx: pt.cx,
                    cy: pt.cy,
                  }))
                ).map((pt, i) => (
                  <line
                    key={`line-${pt.city}-${i}`}
                    x1={145}
                    y1={112}
                    x2={pt.cx}
                    y2={pt.cy}
                    stroke="var(--border-strong)"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                ))}

                {/* All regional hubs (muted when not in active zone) */}
                {INDIA_COVERAGE_ZONES.flatMap((z) =>
                  z.mapCoords.map((pt) => ({ ...pt, zoneId: z.id }))
                ).map((pt) => {
                  const isSelected = pt.zoneId === activeZone.id;
                  return (
                    <g key={pt.city}>
                      {isSelected ? (
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r={12}
                          fill="color-mix(in oklch, var(--accent) 22%, transparent)"
                        />
                      ) : null}
                      <circle
                        cx={pt.cx}
                        cy={pt.cy}
                        r={isSelected ? 5.5 : 3.5}
                        fill={
                          isSelected
                            ? "var(--accent-deep)"
                            : "var(--muted-foreground)"
                        }
                      />
                      {isSelected ? (
                        <text
                          x={pt.cx + 9}
                          y={pt.cy + 4}
                          fontSize="10"
                          fontWeight="600"
                          fill="var(--foreground)"
                        >
                          {pt.city}
                        </text>
                      ) : null}
                    </g>
                  );
                })}
              </svg>

              <div className="mt-3 flex w-full items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                <span>HQ: New Delhi 110015</span>
                <span className="font-mono text-foreground">48-72 Hr SLA</span>
              </div>
            </div>
          </div>

          {/* Right: Active Zone Operational Telemetry */}
          <div
            role="tabpanel"
            id={`zone-panel-${activeZone.id}`}
            aria-labelledby={`zone-tab-${activeZone.id}`}
            className="weact-card-elevated rounded-xl p-6 lg:col-span-4"
          >
            <div className="inline-flex items-center gap-2 rounded-sm bg-accent-subtle px-2.5 py-1 text-xs font-semibold text-accent-text">
              <Globe2 className="size-3.5" aria-hidden="true" />
              <span>Regional Dispatch Specification</span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
              {activeZone.zone}
            </h3>

            <dl className="mt-5 space-y-4 text-sm">
              <div className="border-b border-border pb-3.5">
                <dt className="font-medium text-foreground">
                  Key dispatch hubs &amp; clusters
                </dt>
                <dd className="mt-1 text-muted-foreground">
                  {activeZone.hubs}
                </dd>
              </div>

              <div className="border-b border-border pb-3.5">
                <dt className="flex items-center gap-1.5 font-medium text-foreground">
                  <Languages className="size-4 text-accent-text" aria-hidden="true" />
                  <span>On-ground language fluency</span>
                </dt>
                <dd className="mt-1 text-muted-foreground">
                  {activeZone.languages}
                </dd>
              </div>

              <div className="border-b border-border pb-3.5">
                <dt className="flex items-center gap-1.5 font-medium text-foreground">
                  <CheckCircle2 className="size-4 text-accent-text" aria-hidden="true" />
                  <span>Location tier reach</span>
                </dt>
                <dd className="mt-1 text-muted-foreground">
                  {activeZone.tiers}
                </dd>
              </div>

              <div>
                <dt className="flex items-center gap-1.5 font-medium text-foreground">
                  <ShieldCheck className="size-4 text-accent-text" aria-hidden="true" />
                  <span>Active field capabilities</span>
                </dt>
                <dd className="mt-1 text-muted-foreground">
                  {activeZone.capabilities}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
