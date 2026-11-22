import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AttributionTracker } from "@/components/attribution-tracker";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { SITE_CONFIG } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "WeAct Global — PAN-India Verification, Due Diligence & Field Operations",
    template: "%s | WeAct Global",
  },
  description:
    "ISO 9001:2015 certified PAN-India field verification, CPV, KYC visits, merchant onboarding audits, and onsite IT support across 585+ cities and 10,000+ PIN codes.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.legalName,
    title: "WeAct Global — PAN-India Verification, Due Diligence & Field Operations",
    description:
      "3,200+ trained field staff across 585+ cities and 10,000+ PIN codes. Geo-tagged CPV, KYC, merchant onboarding verification, third-party audits, and onsite IT support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <AttributionTracker />
        <AnalyticsScripts />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
