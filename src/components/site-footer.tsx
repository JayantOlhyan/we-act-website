import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-config";

const CREDENTIAL_BADGES = [
  { label: "Quality Standard", value: "ISO 9001:2015 Certified" },
  { label: "Corporate ID (CIN)", value: SITE_CONFIG.cin },
  { label: "Tax Registration (GSTIN)", value: SITE_CONFIG.gstin },
  { label: "Privacy Governance", value: "DPDP Act 2023 Aligned" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8">
        {/* Highlighted 1px Signal-Orange Empanelment Frame */}
        <div className="rounded-xl border border-accent/70 bg-brand-charcoal p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <FileText className="size-4" aria-hidden="true" />
                <span>Vendor empanelment &amp; RFP evaluation</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-surface-dark-foreground sm:text-3xl">
                Access the WeAct Global Company Profile
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-surface-dark-muted">
                Download the 5-page PDF with corporate credentials, PAN-India PIN-code coverage, e-platform architecture, and ISO 9001:2015 controls.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/company-profile"
                className={buttonVariants({ variant: "accent", size: "lg" })}
              >
                <span>Download profile (PDF)</span>
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Credentials & Compliance Strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 border-y border-surface-dark-muted/20 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIAL_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex items-start gap-3 rounded-md border border-surface-dark-muted/20 bg-brand-charcoal/70 px-4 py-3.5"
            >
              <ShieldCheck
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-xs text-surface-dark-muted">{badge.label}</p>
                <p className="mt-0.5 font-mono text-xs font-medium text-surface-dark-foreground break-all">
                  {badge.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sitemap & Corporate Info */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white p-0.5">
                <Image
                  src="/weact-logo.jpg"
                  alt="WeAct Global logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-sans text-lg font-bold tracking-tight text-surface-dark-foreground">
                {SITE_CONFIG.legalName}
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-surface-dark-muted">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-surface-dark-foreground">
              Services &amp; resources
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-surface-dark-muted">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-150 hover:text-accent"
                >
                  Overview
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors duration-150 hover:text-accent"
                >
                  Privacy notice (DPDP Act 2023)
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-surface-dark-foreground">
              Registered office &amp; director desk
            </h3>
            <address className="mt-3 not-italic text-sm leading-relaxed text-surface-dark-muted">
              <p>{SITE_CONFIG.address}</p>
              <p className="mt-3 font-medium text-surface-dark-foreground">
                {SITE_CONFIG.contactPerson}
              </p>
              <p className="mt-1">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="tabular-nums transition-colors duration-150 hover:text-accent"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="transition-colors duration-150 hover:text-accent"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-surface-dark-muted/20 pt-6 text-xs text-surface-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.
          </p>
          <p>
            Turnaround commitments (48-72 hours) are subject to assignment scope and mutually agreed SLAs.
          </p>
        </div>
      </div>
    </footer>
  );
}
