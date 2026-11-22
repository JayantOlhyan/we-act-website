import { ShieldCheck } from "lucide-react";
import { APPROVED_PROOF_METRICS, SITE_CONFIG } from "@/lib/site-config";

export function ProofStrip() {
  return (
    <section
      aria-label="PAN-India operational scale"
      className="border-y border-border bg-surface"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-5 lg:items-center">
          {APPROVED_PROOF_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="min-w-0 border-l-2 border-accent pl-4"
            >
              <p className="font-mono text-2xl font-semibold tracking-tight text-foreground tabular-nums sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-snug">
                {metric.label}
              </p>
            </div>
          ))}

          <div className="col-span-2 flex items-center gap-3 rounded-md border border-border bg-surface-elevated p-4 lg:col-span-1">
            <ShieldCheck
              className="size-5 shrink-0 text-accent-text"
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="font-mono text-sm font-semibold text-foreground">
                {SITE_CONFIG.certification}
              </p>
              <p className="text-xs text-muted-foreground">
                48-72 hr TAT (per SLA)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
