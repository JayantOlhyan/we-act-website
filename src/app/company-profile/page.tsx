import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { CompanyProfileForm } from "@/components/company-profile-form";
import { APPROVED_PROOF_METRICS, SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Download Company Profile (Vendor Empanelment PDF)",
  description:
    "Access the official WeAct Global Solutions (OPC) Pvt. Ltd. Company Profile PDF for procurement and vendor empanelment.",
};

const PROFILE_CONTENTS = [
  "Corporate credentials: ISO 9001:2015 certification, CIN, GSTIN, and registered office details",
  "Complete service matrix across verification, third-party audits, field IT support, and e-platform",
  "PAN-India network overview covering 3,200+ trained field staff, 585+ cities, and 10,000+ PIN codes",
  "Technology-enabled delivery workflow: ERP integration, ticket allocation, and geo-tagged evidence",
  "Data security, NDA governance, consent documentation, and paperless mobile controls",
] as const;

export default function CompanyProfilePage() {
  return (
    <section className="bg-background weact-vignette">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-accent-text">
              For procurement &amp; vendor empanelment teams
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground leading-[1.1] sm:text-4xl">
              WeAct Global Company Profile
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Everything your vendor onboarding and risk committees need to evaluate WeAct Global Solutions (OPC) Pvt. Ltd. in one concise 5-page PDF.
            </p>

            <div className="mt-6 weact-card-elevated rounded-xl p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <ShieldCheck className="size-4 text-accent-text" aria-hidden="true" />
                <span>Company at a glance</span>
              </div>
              <dl className="mt-3 divide-y divide-border text-sm">
                <div className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted-foreground">Legal name</dt>
                  <dd className="font-medium text-foreground sm:text-right">
                    {SITE_CONFIG.legalName}
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted-foreground">Certification</dt>
                  <dd className="font-mono text-foreground sm:text-right">
                    {SITE_CONFIG.certification}
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted-foreground">CIN</dt>
                  <dd className="font-mono text-xs text-foreground sm:text-right">
                    {SITE_CONFIG.cin}
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted-foreground">GSTIN</dt>
                  <dd className="font-mono text-xs text-foreground sm:text-right">
                    {SITE_CONFIG.gstin}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <h2 className="text-base font-semibold text-foreground">
                Inside the PDF
              </h2>
              <ul className="mt-3 space-y-2.5">
                {PROFILE_CONTENTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent-text"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6">
              {APPROVED_PROOF_METRICS.map((metric) => (
                <div key={metric.label}>
                  <p className="font-mono text-lg font-semibold text-foreground tabular-nums">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <CompanyProfileForm />
          </div>
        </div>
      </div>
    </section>
  );
}
