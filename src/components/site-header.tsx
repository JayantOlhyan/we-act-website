"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xs">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-foreground"
          aria-label="WeAct Global home"
        >
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-sm bg-brand-charcoal text-xs font-bold text-primary-foreground"
          >
            <span className="text-accent">W</span>A
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-foreground">
              WeAct Global
            </span>
            <span className="text-xs text-muted-foreground">
              ISO 9001:2015 Certified
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm font-medium transition-colors duration-150",
                  isActive
                    ? "bg-accent-subtle text-accent-text"
                    : "text-foreground/85 hover:bg-surface hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={SITE_CONFIG.phoneHref}
            onClick={() =>
              trackEvent("call_click", {
                page_path: pathname,
                label: "header",
              })
            }
            className="inline-flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground tabular-nums"
          >
            <Phone className="size-4 text-accent-text" aria-hidden="true" />
            <span>{SITE_CONFIG.phoneDisplay}</span>
          </a>
          <Link
            href="#enquiry"
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            Request verification
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border-strong bg-surface-elevated text-foreground lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-surface-elevated px-5 py-4 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "min-h-11 flex items-center rounded-sm px-3 text-base font-medium",
                    isActive
                      ? "bg-accent-subtle text-accent-text"
                      : "text-foreground hover:bg-surface"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
            <Link
              href="#enquiry"
              onClick={() => setMobileOpen(false)}
              className={buttonVariants({ variant: "default" })}
            >
              Request verification
            </Link>
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() => {
                setMobileOpen(false);
                trackEvent("call_click", {
                  page_path: pathname,
                  label: "mobile_menu",
                });
              }}
              className={buttonVariants({ variant: "outline" })}
            >
              <Phone className="size-4" aria-hidden="true" />
              <span className="tabular-nums">{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
