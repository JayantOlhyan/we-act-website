import Link from "next/link";
import { ArrowRight, Check, FileText, Lock } from "lucide-react";
import { ProofStrip } from "@/components/proof-strip";
import { EnquiryForm } from "@/components/enquiry-form";
import { CallLink, WhatsAppLink } from "@/components/tracked-contact-links";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  EPLATFORM_CAPABILITIES,
  SECURITY_CONTROLS,
  WORKFLOW_STEPS,
} from "@/lib/site-config";

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServicePageProps {
  pageLabel: string;
  defaultServiceValue: string;
  buyerLine: string;
  headline: string;
  subheadline: string;
  deliverablesHeading: string;
  deliverablesIntro: string;
  deliverables: ServiceDeliverable[];
  sectorProofNote: string;
  sectorsServed: string[];
}

export function ServicePageTemplate({
  pageLabel,
  defaultServiceValue,
  buyerLine,
  headline,
  subheadline,
  deliverablesHeading,
  deliverablesIntro,
  deliverables,
  sectorProofNote,
  sectorsServed,
}: ServicePageProps) {
  return (
    <>
      {/* 1. Hero */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent-text">{buyerLine}</p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground leading-[1.1] sm:text-5xl">
              {headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subheadline}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry"
                className={buttonVariants({ variant: "accent", size: "lg" })}
              >
                <span>Request scope &amp; SLA</span>
                <ArrowRight aria-hidden="true" />
              </a>
              <WhatsAppLink
                pageLabel={pageLabel}
                variant="outline"
                size="lg"
                label="WhatsApp Director"
              />
              <CallLink pageLabel={pageLabel} variant="ghost" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof Strip (approved figures only) */}
      <ProofStrip />

      {/* 3. What WeAct does for this buyer */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {deliverablesHeading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {deliverablesIntro}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-md border border-border bg-surface-elevated p-6"
                >
                  <div className="flex items-start gap-2.5">
                    <Check
                      className="mt-1 size-4 shrink-0 text-accent-text"
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 pl-6 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              How field execution works
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Every assignment follows a documented four-stage workflow from PIN-code allocation to geo-tagged closure.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((item) => (
              <li
                key={item.step}
                className="rounded-md border border-border bg-surface-elevated p-6"
              >
                <span className="font-mono text-sm font-semibold text-accent-text tabular-nums">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 overflow-x-auto rounded-md border border-border bg-surface-elevated">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-brand-charcoal text-primary-foreground">
                <tr>
                  <th className="px-5 py-3.5 font-medium">E-platform capability</th>
                  <th className="px-5 py-3.5 font-medium">How it supports delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {EPLATFORM_CAPABILITIES.map((row) => (
                  <tr key={row.capability}>
                    <td className="px-5 py-3.5 font-medium text-foreground">
                      {row.capability}
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Compliance & data security */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-text">
                <Lock className="size-4" aria-hidden="true" />
                <span>Compliance &amp; data security</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Structured for audit-sensitive teams
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Operations run on an ISO 9001:2015 certified quality framework with encrypted channels, NDA-bound engagements, and documented subject consent.
              </p>

              {/* 6. Approved sector experience (no unapproved client names) */}
              <div className="mt-8 rounded-md border border-border bg-surface p-5">
                <h3 className="font-display text-base font-semibold text-foreground">
                  Sector experience &amp; NDA references
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sectorProofNote}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {sectorsServed.map((sector) => (
                    <li
                      key={sector}
                      className="rounded-sm border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-x-auto rounded-md border border-border bg-surface-elevated">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-surface text-foreground">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">Control area</th>
                      <th className="px-5 py-3.5 font-semibold">Operational practice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {SECURITY_CONTROLS.map((row) => (
                      <tr key={row.area}>
                        <td className="px-5 py-3.5 font-medium text-foreground">
                          {row.area}
                        </td>
                        <td className="px-5 py-3.5 text-muted-foreground">
                          {row.practice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 & 8. Enquiry form + WhatsApp + Call + Company Profile download */}
      <section id="enquiry" className="scroll-mt-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <EnquiryForm defaultService={defaultServiceValue} />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-lg border border-border bg-surface-elevated p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Prefer a direct conversation?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Reach Neeraj Juneja (Director) directly on WhatsApp or phone to confirm PIN-code availability, TATs, or pilot pricing.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <WhatsAppLink
                    pageLabel={`${pageLabel} Enquiry Sidebar`}
                    variant="default"
                    label="Message on WhatsApp"
                  />
                  <CallLink
                    pageLabel={`${pageLabel} Enquiry Sidebar`}
                    variant="outline"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-surface-elevated p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-accent-text">
                  <FileText className="size-4" aria-hidden="true" />
                  <span>Vendor empanelment</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Download the Company Profile
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Share WeAct Global&apos;s ISO 9001:2015 credentials, CIN/GSTIN details, PAN-India coverage, and e-platform overview with your procurement team.
                </p>
                <Link
                  href="/company-profile"
                  className={`${buttonVariants({ variant: "outline" })} mt-5 w-full`}
                >
                  <span>Go to profile download</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
