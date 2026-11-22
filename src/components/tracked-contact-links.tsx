"use client";

import { MessageSquare, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { buildWhatsAppUrl, SITE_CONFIG } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface TrackedContactLinkProps {
  pageLabel: string;
  variant?: "default" | "accent" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  label?: string;
}

export function WhatsAppLink({
  pageLabel,
  variant = "outline",
  size = "default",
  className,
  label = "WhatsApp",
}: TrackedContactLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl(pageLabel)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("whatsapp_click", {
          page_path: typeof window !== "undefined" ? window.location.pathname : pageLabel,
          label: pageLabel,
        })
      }
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <MessageSquare aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function CallLink({
  pageLabel,
  variant = "outline",
  size = "default",
  className,
  label = SITE_CONFIG.phoneDisplay,
}: TrackedContactLinkProps) {
  return (
    <a
      href={SITE_CONFIG.phoneHref}
      onClick={() =>
        trackEvent("call_click", {
          page_path: typeof window !== "undefined" ? window.location.pathname : pageLabel,
          label: pageLabel,
        })
      }
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Phone aria-hidden="true" />
      <span className="tabular-nums">{label}</span>
    </a>
  );
}
