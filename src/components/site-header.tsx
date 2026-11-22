"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const ENQUIRY_PAGES = new Set([
  "/",
  "/verification-kyc",
  "/merchant-onboarding",
  "/field-it-support",
]);

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const enquiryHref = ENQUIRY_PAGES.has(pathname) ? "#enquiry" : "/#enquiry";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-foreground whitespace-nowrap"
          aria-label="WeAct Global home"
        >
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white p-0.5">
            <Image
              src="/weact-logo.jpg"
              alt="WeAct Global logo"
              width={32}
              height={32}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-sans text-base font-bold tracking-tight text-foreground whitespace-nowrap">
              WeAct Global
            </span>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
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
                  "whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium transition-colors duration-150",
                  isActive
                    ? "bg-accent-subtle text-accent-text"
                    : "text-foreground/85 hover:bg-surface-elevated hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={SITE_CONFIG.phoneHref}
            onClick={() =>
              trackEvent("call_click", {
                page_path: pathname,
                label: "header",
              })
            }
            className="hidden items-center gap-1.5 whitespace-nowrap px-2 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground tabular-nums xl:inline-flex"
          >
            <Phone className="size-4 text-accent-text" aria-hidden="true" />
            <span>{SITE_CONFIG.phoneDisplay}</span>
          </a>
          <Link
            href={enquiryHref}
            className={buttonVariants({ variant: "accent", size: "sm" })}
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
          className="border-t border-border bg-surface px-5 py-4 lg:hidden"
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
                      : "text-foreground hover:bg-surface-elevated"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
            <Link
              href={enquiryHref}
              onClick={() => setMobileOpen(false)}
              className={buttonVariants({ variant: "accent" })}
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
