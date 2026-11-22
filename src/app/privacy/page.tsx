import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Notice (DPDP Act 2023)",
  description:
    "How WeAct Global Solutions (OPC) Pvt. Ltd. collects, uses, stores, and deletes personal data submitted through weactglobal.com under India's DPDP Act, 2023.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[820px] px-5 py-12 sm:px-8 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>Back to weactglobal.com</span>
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Notice (DPDP Act, 2023)
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Data Fiduciary: {SITE_CONFIG.legalName} (CIN: {SITE_CONFIG.cin}) · Last updated: November 2026
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-foreground/90">
          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-foreground">
              1. Personal data we collect
            </h2>
            <p className="text-muted-foreground">
              We collect only the business contact details you voluntarily submit through our enquiry or company profile download forms:
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              <li>Enquiry form: full name, organisation name, role/designation, phone number, work email, service needed, and any optional requirement message you provide.</li>
              <li>Company profile download form: full name, organisation name, role/designation, and phone number.</li>
              <li>Campaign attribution metadata: referral URL, landing page path, UTM parameters (if you arrived via a campaign link such as LinkedIn), and submission timestamp.</li>
            </ul>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-foreground">
              2. Why we collect it
            </h2>
            <p className="text-muted-foreground">
              Your details are used strictly to:
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              <li>Respond to your verification, third-party audit, field IT support, or vendor empanelment enquiry.</li>
              <li>Deliver the requested Company Profile PDF and follow up on empanelment documentation.</li>
              <li>Maintain an internal enquiry log to attribute and reconcile business development sources.</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              We do not sell, rent, or trade your personal data to third-party data brokers.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-foreground">
              3. Who receives your data
            </h2>
            <p className="text-muted-foreground">
              Form submissions are delivered directly by email to{" "}
              <strong className="font-medium text-foreground">
                {SITE_CONFIG.contactPerson}
              </strong>{" "}
              ({SITE_CONFIG.email}) and stored in our website hosting provider&apos;s form submission log (Netlify) and transactional email processor (when configured) solely for enquiry fulfilment and source reconciliation.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-foreground">
              4. Analytics &amp; browser storage
            </h2>
            <p className="text-muted-foreground">
              We use browser <code className="font-mono text-xs">sessionStorage</code> solely to preserve first-touch UTM parameters during your active browsing session so campaign attribution remains accurate if you navigate between pages before submitting a form. This clears automatically when you close the browser tab. Where configured, Google Analytics (GA4 with IP anonymisation) and the LinkedIn Insight Tag measure aggregated page and button interactions.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-foreground">
              5. Your rights &amp; how to request deletion
            </h2>
            <p className="text-muted-foreground">
              Under the Digital Personal Data Protection Act, 2023, you have the right to request access to, correction of, withdrawal of consent for, or erasure of the personal data you have submitted through this website.
            </p>
            <div className="rounded-md border border-border bg-surface p-5 text-sm">
              <p className="font-medium text-foreground">
                To request correction or deletion of your enquiry data:
              </p>
              <p className="mt-2 text-muted-foreground">
                Email{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=DPDP%20Data%20Deletion%20Request`}
                  className="font-medium text-accent-text underline underline-offset-4"
                >
                  {SITE_CONFIG.email}
                </a>{" "}
                with the subject line <span className="font-mono text-xs">DPDP Data Deletion Request</span>, or write to:
              </p>
              <p className="mt-2 text-muted-foreground">
                {SITE_CONFIG.legalName}, {SITE_CONFIG.address}
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
