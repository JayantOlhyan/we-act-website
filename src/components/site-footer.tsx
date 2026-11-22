import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex size-8 items-center justify-center rounded-sm bg-accent text-xs font-bold text-accent-foreground"
              >
                WA
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                {SITE_CONFIG.legalName}
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-surface-dark-muted">
              {SITE_CONFIG.tagline}
            </p>
            <dl className="mt-5 grid grid-cols-1 gap-2 text-xs text-surface-dark-muted sm:grid-cols-2">
              <div>
                <dt className="text-surface-dark-muted/80">Certification</dt>
                <dd className="font-mono text-surface-dark-foreground">
                  {SITE_CONFIG.certification}
                </dd>
              </div>
              <div>
                <dt className="text-surface-dark-muted/80">CIN</dt>
                <dd className="font-mono text-surface-dark-foreground">
                  {SITE_CONFIG.cin}
                </dd>
              </div>
              <div>
                <dt className="text-surface-dark-muted/80">GSTIN</dt>
                <dd className="font-mono text-surface-dark-foreground">
                  {SITE_CONFIG.gstin}
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold text-surface-dark-foreground">
              Services &amp; resources
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-surface-dark-muted">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-150 hover:text-surface-dark-foreground"
                >
                  Overview
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-surface-dark-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors duration-150 hover:text-surface-dark-foreground"
                >
                  Privacy notice (DPDP Act 2023)
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-semibold text-surface-dark-foreground">
              Registered office &amp; director desk
            </h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-surface-dark-muted">
              <p>{SITE_CONFIG.address}</p>
              <p className="mt-3 text-surface-dark-foreground">
                {SITE_CONFIG.contactPerson}
              </p>
              <p className="mt-1">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="tabular-nums transition-colors duration-150 hover:text-surface-dark-foreground"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="transition-colors duration-150 hover:text-surface-dark-foreground"
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
            Turnaround commitments (48–72 hours) are subject to assignment scope and mutually agreed SLAs.
          </p>
        </div>
      </div>
    </footer>
  );
}
