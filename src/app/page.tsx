import Link from "next/link";
import {
  ArrowRight,
  Clock,
  FileText,
  Globe2,
  Lock,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { RotatingHeroWord } from "@/components/rotating-hero-word";
import { HomeScrollStory } from "@/components/home-scroll-story";
import { EnquiryForm } from "@/components/enquiry-form";
import { CallLink, WhatsAppLink } from "@/components/tracked-contact-links";
import { buttonVariants } from "@/components/ui/button";
import { SECURITY_CONTROLS, SITE_CONFIG } from "@/lib/site-config";

const HERO_PROOF_TILES_LEFT = [
  {
    icon: Users,
    value: "3,200+",
    label: "Trained field executives",
  },
  {
    icon: MapPin,
    value: "10,000+",
    label: "PIN codes covered",
  },
  {
    icon: ShieldCheck,
    value: "ISO 9001:2015",
    label: "Certified quality system",
  },
] as const;

const HERO_PROOF_TILES_RIGHT = [
  {
    icon: Globe2,
    value: "585+",
    label: "Cities & semi-urban towns",
  },
  {
    icon: FileText,
    value: "1M+",
    label: "Verifications delivered",
  },
  {
    icon: Clock,
    value: "48-72 hrs",
    label: "Turnaround (per SLA)",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. Perfios-Inspired Dark Obsidian Hero (50/50 split) */}
      <section className="relative border-b border-border bg-background weact-vignette">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 py-12 sm:px-8 md:py-16 lg:min-h-[calc(100vh-72px)] lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Left: Badge + Editorial Serif H1 with rotating buyer slot + Gradient CTA */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center rounded-full border border-border-strong bg-surface px-4 py-1.5 text-sm font-medium text-accent-text">
              ISO 9001:2015 Certified | PAN-India Field Operations
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground leading-[1.08] sm:text-5xl xl:text-[54px]">
              PAN-India Field Verification for
              <RotatingHeroWord />
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              WeAct Global delivers physical CPV, KYC visits, merchant onboarding audits, third-party checks, and onsite IT support across 10,000+ PIN codes with geo-tagged evidence and NDA governance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

          {/* Right: 2-Column Dark Rounded-Tile Proof Wall (approved figures only) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-4 weact-float-slow">
                {HERO_PROOF_TILES_LEFT.map((tile) => {
                  const Icon = tile.icon;
                  return (
                    <div
                      key={tile.label}
                      className="flex items-center gap-4 rounded-xl border border-border bg-surface/90 px-5 py-5 transition-colors duration-150 hover:border-border-strong"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent-subtle text-accent-text">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-2xl font-semibold tracking-tight text-foreground tabular-nums">
                          {tile.value}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground leading-snug">
                          {tile.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4 sm:pt-8 weact-float-slow-alt">
                {HERO_PROOF_TILES_RIGHT.map((tile) => {
                  const Icon = tile.icon;
                  return (
                    <div
                      key={tile.label}
                      className="flex items-center gap-4 rounded-xl border border-border bg-surface/90 px-5 py-5 transition-colors duration-150 hover:border-border-strong"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent-subtle text-accent-text">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-2xl font-semibold tracking-tight text-foreground tabular-nums">
                          {tile.value}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground leading-snug">
                          {tile.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-surface/70 px-4 py-3 text-xs text-muted-foreground">
              <span>North, South &amp; East India coverage | CIN: {SITE_CONFIG.cin}</span>
              <Link
                href="/company-profile"
                className="font-medium text-accent-text hover:underline underline-offset-4"
              >
                Download empanelment profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 5-Chapter 3D Scroll Prism Experience + Interactive Consoles */}
      <HomeScrollStory />

      {/* 3. Quality, Data Security & Compliance */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-text">
                <Lock className="size-4" aria-hidden="true" />
                <span>Quality, data security &amp; compliance</span>
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                ISO 9001:2015 certified operational controls
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Every field engagement runs over encrypted data channels with NDA-bound execution, documented subject consent, and paperless mobile reporting.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-x-auto rounded-lg border border-border bg-surface">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-surface-elevated text-foreground">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">Control area</th>
                      <th className="px-5 py-3.5 font-semibold">Operational practice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {SECURITY_CONTROLS.map((control) => (
                      <tr key={control.area}>
                        <td className="px-5 py-4 font-medium text-foreground">
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
          </div>
        </div>
      </section>

      {/* 4. Director Desk Enquiry + Direct Contact + Profile Download */}
      <section id="enquiry" className="scroll-mt-20 bg-surface/60">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-lg border border-border bg-surface p-6">
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

              <div className="rounded-lg border border-border bg-surface p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-accent-text">
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
