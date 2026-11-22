import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  FileText,
  Laptop,
  Lock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { ProofStrip } from "@/components/proof-strip";
import { EnquiryForm } from "@/components/enquiry-form";
import { CallLink, WhatsAppLink } from "@/components/tracked-contact-links";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  EPLATFORM_CAPABILITIES,
  INDUSTRY_VERTICALS,
  SECURITY_CONTROLS,
  SITE_CONFIG,
  WORKFLOW_STEPS,
} from "@/lib/site-config";

const CORE_SERVICES = [
  {
    icon: ShieldCheck,
    title: "Verification, CPV & KYC visits",
    buyer: "Banks, NBFCs & insurers",
    description:
      "Address, telephone, and document verification, Customer Profile Verification (CPV), due diligence, KYC visits, collection assistance, and background checks.",
    href: "/verification-kyc",
    cta: "Explore Verification & KYC",
  },
  {
    icon: ClipboardCheck,
    title: "Merchant onboarding & third-party audits",
    buyer: "Fintechs, payment aggregators & brands",
    description:
      "Physical verification for merchant onboarding and payment gateways, dealer and distributor authentication, mystery audits, and BFSI field visits.",
    href: "/merchant-onboarding",
    cta: "Explore Merchant Onboarding",
  },
  {
    icon: Laptop,
    title: "Onsite IT & infrastructure support",
    buyer: "Enterprises with distributed branches",
    description:
      "Trained onsite field engineers for laptops, desktops, and printers backed by centralised ticket allocation, escalation protocols, and ERP updates.",
    href: "/field-it-support",
    cta: "Explore Field IT Support",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — visible above the fold at 1280x800 and 375x812 */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground leading-[1.08] sm:text-5xl">
              PAN-India verification built for field reality.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              WeAct Global deploys 3,200+ trained field executives across 10,000+ PIN codes for geo-tagged CPV, KYC visits, merchant onboarding audits, and onsite IT support.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry"
                className={buttonVariants({ variant: "accent", size: "lg" })}
              >
                <span>Request verification</span>
                <ArrowRight aria-hidden="true" />
              </a>
              <WhatsAppLink
                pageLabel="Home Hero"
                variant="outline"
                size="lg"
                label="WhatsApp Director"
              />
              <CallLink pageLabel="Home Hero" variant="ghost" size="lg" />
            </div>
          </div>

          {/* Signature: Institutional Dispatch & Credential Ledger */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-border bg-surface-elevated">
              <div className="flex items-center justify-between border-b border-border bg-brand-charcoal px-5 py-3.5 text-primary-foreground rounded-t-lg">
                <span className="font-display text-sm font-semibold">
                  Operational dispatch profile
                </span>
                <span className="font-mono text-xs text-accent">
                  ISO 9001:2015
                </span>
              </div>
              <dl className="divide-y divide-border text-sm">
                <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <dt className="text-muted-foreground">Coverage zones</dt>
                  <dd className="font-medium text-foreground text-right">
                    North, South &amp; East India
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <dt className="text-muted-foreground">Field footprint</dt>
                  <dd className="font-mono font-medium text-foreground tabular-nums text-right">
                    585+ cities / 10,000+ PINs
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <dt className="text-muted-foreground">Turnaround commitment</dt>
                  <dd className="font-mono font-medium text-foreground tabular-nums text-right">
                    48–72 hrs (per SLA)
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <dt className="text-muted-foreground">Evidence standard</dt>
                  <dd className="font-medium text-foreground text-right">
                    Geo-tagged mobile capture
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <dt className="text-muted-foreground">Corporate entity</dt>
                  <dd className="font-mono text-xs text-foreground text-right">
                    {SITE_CONFIG.cin}
                  </dd>
                </div>
              </dl>
              <div className="border-t border-border bg-surface px-5 py-3.5 rounded-b-lg">
                <Link
                  href="/company-profile"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:underline underline-offset-4"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  <span>Download vendor empanelment profile (PDF)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Approved Proof Strip */}
      <ProofStrip />

      {/* 3. Core Services */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Three field practices under one SLA framework
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Purpose-built for operations, credit risk, compliance, and IT heads who need verified on-ground execution beyond metro limits.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {CORE_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.href}
                    className="flex flex-col justify-between rounded-md border border-border bg-surface-elevated p-6"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex size-10 items-center justify-center rounded-sm bg-accent-subtle text-accent-text">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {service.buyer}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-semibold text-foreground leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 border-t border-border pt-4">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline underline-offset-4"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Technology-Enabled Delivery Workflow */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-text">
                <MapPin className="size-4" aria-hidden="true" />
                <span>Technology-enabled delivery</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                PIN-code mapping to geo-tagged closure
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Our digital operating model coordinates distributed assignments across metros, Tier I, Tier II, Tier III cities, and semi-urban towns with regional language field staff and fallback backup coverage.
              </p>

              <ol className="mt-8 space-y-5">
                {WORKFLOW_STEPS.map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm bg-brand-charcoal font-mono text-xs font-semibold text-primary-foreground tabular-nums">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-x-auto rounded-md border border-border bg-surface-elevated">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-brand-charcoal text-primary-foreground">
                    <tr>
                      <th className="px-5 py-3.5 font-medium">E-platform capability</th>
                      <th className="px-5 py-3.5 font-medium">Operational role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {EPLATFORM_CAPABILITIES.map((row) => (
                      <tr key={row.capability}>
                        <td className="px-5 py-4 font-medium text-foreground">
                          {row.capability}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {row.detail}
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

      {/* 5. Sectors & Security Compliance */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-text">
                <Building2 className="size-4" aria-hidden="true" />
                <span>Industry sectors served</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Built for regulated enterprise workflows
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Client references and assignment case summaries are shared directly during vendor empanelment under NDA.
              </p>

              <div className="mt-6 divide-y divide-border rounded-md border border-border bg-surface-elevated">
                {INDUSTRY_VERTICALS.map((vertical) => (
                  <div key={vertical.sector} className="p-4 sm:p-5">
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {vertical.sector}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {vertical.scope}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-text">
                <Lock className="size-4" aria-hidden="true" />
                <span>Quality, security &amp; compliance</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                ISO 9001:2015 certified controls
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Documented handling of sensitive customer records, field photographs, and subject consent across every engagement.
              </p>

              <div className="mt-6 overflow-x-auto rounded-md border border-border bg-surface-elevated">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-surface text-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Control area</th>
                      <th className="px-4 py-3 font-semibold">Practice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {SECURITY_CONTROLS.map((control) => (
                      <tr key={control.area}>
                        <td className="px-4 py-3.5 font-medium text-foreground">
                          {control.area}
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground">
                          {control.practice}
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

      {/* 6. Enquiry + Direct Contact + Profile Download */}
      <section id="enquiry" className="scroll-mt-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-lg border border-border bg-surface-elevated p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Speak directly with the Director
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every enquiry is handled directly by {SITE_CONFIG.contactPerson}. Message on WhatsApp or call to verify PIN-code coverage or request a pilot quote.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <WhatsAppLink
                    pageLabel="Home Enquiry Section"
                    variant="default"
                    label="Message on WhatsApp"
                  />
                  <CallLink
                    pageLabel="Home Enquiry Section"
                    variant="outline"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-surface-elevated p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-accent-text">
                  <FileText className="size-4" aria-hidden="true" />
                  <span>Procurement &amp; empanelment</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Need our formal Company Profile?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Download the 5-page vendor empanelment PDF with ISO 9001:2015, CIN, GSTIN, service scope, and security practices.
                </p>
                <Link
                  href="/company-profile"
                  className={`${buttonVariants({ variant: "outline" })} mt-5 w-full`}
                >
                  <span>Download company profile</span>
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
