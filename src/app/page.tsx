import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Laptop,
  Lock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { RotatingHeroWord } from "@/components/rotating-hero-word";
import { HomeScrollStory } from "@/components/home-scroll-story";
import { IndiaCoverageConsole } from "@/components/india-coverage-console";
import { EnquiryForm } from "@/components/enquiry-form";
import { CallLink, WhatsAppLink } from "@/components/tracked-contact-links";
import { buttonVariants } from "@/components/ui/button";
import {
  APPROVED_PROOF_METRICS,
  COMPANY_AT_A_GLANCE,
  SECURITY_CONTROLS,
  SITE_CONFIG,
} from "@/lib/site-config";

const CORE_PRACTICES = [
  {
    icon: ShieldCheck,
    title: "Verification, CPV & KYC visits",
    buyer: "Banks, NBFCs & insurers",
    image: "/images/field-verification.jpg",
    imageAlt: "WeAct field executive conducting an on-site CPV and KYC verification visit",
    bullets: [
      "Address, telephone & document verification",
      "Customer Profile Verification (CPV)",
      "Due diligence & physical KYC visits",
      "Collection, recovery & background checks",
    ],
    href: "/verification-kyc",
    cta: "Explore Verification & KYC",
  },
  {
    icon: ClipboardCheck,
    title: "Merchant onboarding & third-party audits",
    buyer: "Fintechs, payment aggregators & brands",
    image: "/images/merchant-audit.jpg",
    imageAlt: "Field audit specialist verifying retail merchant premises and POS counter",
    bullets: [
      "Physical merchant onboarding & payment gateway checks",
      "Dealer & distributor authentication",
      "Unannounced mystery audits",
      "Insurance, banking & NBFC field visits",
    ],
    href: "/merchant-onboarding",
    cta: "Explore Merchant Onboarding",
  },
  {
    icon: Laptop,
    title: "Onsite IT & infrastructure support",
    buyer: "Enterprises with distributed branches",
    image: "/images/field-it-engineer.jpg",
    imageAlt: "Onsite IT support engineer configuring enterprise laptops at a branch office",
    bullets: [
      "Onsite engineers for laptops, desktops & printers",
      "Centralised ticket management & dispatch",
      "Two-way client ERP status integration",
      "Built-in escalation & fallback engineer matrix",
    ],
    href: "/field-it-support",
    cta: "Explore Field IT Support",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. Daylight Architectural White Hero with Layered Field Verification Photography */}
      <section className="relative border-b border-border bg-background weact-vignette">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left: Institutional Badge + Playfair Editorial H1 + Rotating Buyer Slot + CTAs */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface-elevated px-4 py-1.5 text-sm font-medium text-accent-text shadow-2xs">
              <ShieldCheck className="size-4" aria-hidden="true" />
              <span>ISO 9001:2015 Certified | PAN-India Field Operations</span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground leading-[1.08] sm:text-5xl xl:text-[52px]">
              PAN-India Field Verification for
              <RotatingHeroWord />
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              WeAct Global deploys 3,200+ trained field executives across 585+ cities and 10,000+ PIN codes for geo-tagged CPV, physical KYC visits, merchant onboarding audits, and onsite IT support.
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

            {/* Approved 4-Metric Proof Strip right inside Hero */}
            <div className="mt-9 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
              {APPROVED_PROOF_METRICS.map((metric) => (
                <div key={metric.label} className="border-l-2 border-accent pl-3">
                  <p className="font-mono text-2xl font-semibold tracking-tight text-foreground tabular-nums">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dimensional Layered Field Verification Showcase + Live Geo-Tagged Evidence Card */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[580px]">
              {/* Primary framed editorial photograph */}
              <div className="weact-card-elevated relative overflow-hidden rounded-2xl p-2.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface">
                  <Image
                    src="/images/field-verification.jpg"
                    alt="WeAct Global trained field executive capturing geo-tagged verification proof on-site"
                    width={960}
                    height={720}
                    className="h-full w-full object-cover"
                    priority
                  />

                  {/* Top-left live dispatch badge */}
                  <div className="absolute left-3.5 top-3.5 inline-flex items-center gap-2 rounded-md border border-border bg-surface-elevated/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-xs">
                    <span className="size-2 rounded-full bg-success" aria-hidden="true" />
                    <span>PIN-Code Mapped Field Network</span>
                  </div>

                  {/* Top-right SLA pill */}
                  <div className="absolute right-3.5 top-3.5 rounded-md bg-brand-charcoal/95 px-3 py-1.5 font-mono text-xs font-medium text-primary-foreground shadow-sm">
                    48-72 Hr SLA
                  </div>
                </div>

                {/* Live Geo-Tagged Verification Evidence Dossier Strip below photo */}
                <div className="mt-2.5 rounded-xl border border-border bg-surface p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-accent-text" aria-hidden="true" />
                      <span className="text-xs font-semibold text-foreground">
                        Geo-Tagged Field Capture | New Delhi (PIN 110015)
                      </span>
                    </div>
                    <span className="rounded-xs bg-success-subtle px-2 py-0.5 font-mono text-[11px] font-semibold text-success">
                      Verified &amp; Encrypted
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-muted-foreground">Workflow</p>
                      <p className="mt-0.5 font-medium text-foreground">
                        CPV / Physical KYC
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Evidence</p>
                      <p className="mt-0.5 font-mono text-foreground">
                        GPS + Photo + Consent
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Corporate CIN</p>
                      <p className="mt-0.5 font-mono text-[11px] text-foreground truncate">
                        {SITE_CONFIG.cin}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Core Field Practices with Bespoke Editorial Photography */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-accent-text">
                Core Service Capabilities
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Three field practices under one ISO 9001:2015 framework
              </h2>
            </div>
            <Link
              href="/company-profile"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline underline-offset-4"
            >
              <FileText className="size-4" aria-hidden="true" />
              <span>Download 5-page vendor empanelment PDF</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CORE_PRACTICES.map((practice) => {
              const Icon = practice.icon;
              return (
                <article
                  key={practice.href}
                  className="weact-card-elevated flex flex-col justify-between overflow-hidden rounded-xl"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden border-b border-border bg-surface">
                      <Image
                        src={practice.image}
                        alt={practice.imageAlt}
                        width={640}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-sm border border-border bg-surface-elevated/95 px-2.5 py-1 text-xs font-medium text-foreground shadow-2xs">
                        {practice.buyer}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2.5">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent-subtle text-accent-text">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-semibold text-foreground leading-snug">
                          {practice.title}
                        </h3>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {practice.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <CheckCircle2
                              className="mt-0.5 size-4 shrink-0 text-accent-text"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-border bg-surface/50 px-6 py-4">
                    <Link
                      href={practice.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline underline-offset-4"
                    >
                      <span>{practice.cta}</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 5-Chapter Daylight 3D Scroll Prism Experience + Interactive Consoles */}
      <HomeScrollStory />

      {/* 4. Interactive PAN-India PIN-Code & Zone Coverage Explorer */}
      <IndiaCoverageConsole />

      {/* 5. Quality, Data Security & Company at a Glance Ledger */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: ISO 9001:2015 Security Controls */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent-text">
                <Lock className="size-4" aria-hidden="true" />
                <span>Quality, data security &amp; compliance</span>
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                ISO 9001:2015 certified operational controls
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Every field engagement runs over encrypted data channels with NDA-bound execution, documented subject consent, and paperless mobile reporting.
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-surface-elevated shadow-2xs">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-brand-charcoal text-primary-foreground">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">Control area</th>
                      <th className="px-5 py-3.5 font-semibold">Operational practice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {SECURITY_CONTROLS.map((control) => (
                      <tr key={control.area}>
                        <td className="px-5 py-4 font-semibold text-foreground">
                          {control.area}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {control.practice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Company at a Glance Table (from Page 1 of Company Profile PDF) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent-text">
                <Building2 className="size-4" aria-hidden="true" />
                <span>Corporate credentials</span>
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Company at a glance
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Verified statutory and empanelment identifiers for vendor registration and compliance teams.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-2xs">
                <dl className="divide-y divide-border text-sm">
                  {COMPANY_AT_A_GLANCE.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-12 sm:items-center"
                    >
                      <dt className="font-medium text-muted-foreground sm:col-span-5">
                        {row.label}
                      </dt>
                      <dd className="font-mono text-xs font-semibold text-foreground sm:col-span-7 sm:text-right">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-border bg-accent-subtle px-5 py-3.5">
                  <Link
                    href="/company-profile"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline underline-offset-4"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    <span>Download full vendor empanelment profile (PDF)</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Director Desk Enquiry + Direct Contact + Profile Download */}
      <section id="enquiry" className="scroll-mt-20 bg-surface">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="weact-card-elevated rounded-xl p-6">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Speak directly with the Director
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every enquiry is handled directly by {SITE_CONFIG.contactPerson}. Message on WhatsApp or call to confirm PIN-code coverage or request a pilot quote.
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

              <div className="weact-card-elevated rounded-xl p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-accent-text">
                  <FileText className="size-4" aria-hidden="true" />
                  <span>Procurement &amp; empanelment</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
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
