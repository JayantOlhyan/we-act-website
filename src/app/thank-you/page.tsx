import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText } from "lucide-react";
import { CallLink, WhatsAppLink } from "@/components/tracked-contact-links";
import { buttonVariants } from "@/components/ui/button";
import { SERVICE_OPTIONS, SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Enquiry Received",
  description: "Your enquiry has been sent directly to Neeraj Juneja, Director at WeAct Global.",
  robots: { index: false, follow: false },
};

interface ThankYouPageProps {
  searchParams: Promise<{ service?: string }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const matchedService = SERVICE_OPTIONS.find((s) => s.value === params.service);

  return (
    <section className="bg-background weact-vignette">
      <div className="mx-auto max-w-[760px] px-5 py-16 sm:px-8 md:py-24">
        <div className="rounded-lg border border-border bg-surface p-7 sm:p-10">
          <div className="flex items-center gap-3 text-success">
            <CheckCircle2 className="size-7 shrink-0" aria-hidden="true" />
            <span className="font-mono text-sm font-medium">Enquiry logged</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Thank you. Your requirement is with our Director desk.
          </h1>

          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Your submission
            {matchedService ? ` regarding ${matchedService.label}` : ""} has been sent directly to{" "}
            <strong className="font-medium text-foreground">
              {SITE_CONFIG.contactPerson}
            </strong>{" "}
            at {SITE_CONFIG.email}. Expect a direct response within one business day.
          </p>

          <div className="mt-8 rounded-md border border-border bg-background/60 p-5">
            <h2 className="text-base font-semibold text-foreground">
              Need an immediate PIN-code check or urgent SLA discussion?
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Message on WhatsApp or call directly to speak with Neeraj now.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <WhatsAppLink
                pageLabel="Thank You Page"
                variant="accent"
                label="Continue on WhatsApp"
              />
              <CallLink pageLabel="Thank You Page" variant="outline" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent-text"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              <span>Return to overview</span>
            </Link>

            <Link
              href="/company-profile"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <FileText aria-hidden="true" />
              <span>Download Company Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
