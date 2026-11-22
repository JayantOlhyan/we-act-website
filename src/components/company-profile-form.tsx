"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  FileText,
  Loader2,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WhatsAppLink } from "@/components/tracked-contact-links";
import { SITE_CONFIG } from "@/lib/site-config";
import { getFirstTouchAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";
import {
  companyProfileSchema,
  type CompanyProfileFormInput,
  type CompanyProfileFormValues,
} from "@/lib/validation";

export function CompanyProfileForm() {
  const pathname = usePathname();
  const [unlocked, setUnlocked] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CompanyProfileFormInput, unknown, CompanyProfileFormValues>({
    resolver: zodResolver(companyProfileSchema),
    defaultValues: {
      formType: "company-profile",
      name: "",
      company: "",
      role: "",
      phone: "",
      consent: false,
      website_url: "",
    },
  });

  const onSubmit = async (values: CompanyProfileFormValues) => {
    setServerError(null);

    const attribution = getFirstTouchAttribution();
    const submittedAt = new Date().toISOString();

    const payload: CompanyProfileFormValues = {
      ...values,
      formType: "company-profile",
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
      landing_page: attribution.landing_page,
      referrer: attribution.referrer,
      submitted_at: submittedAt,
      source_page: pathname,
    };

    try {
      const apiRes = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const apiData = (await apiRes.json()) as { ok?: boolean; error?: string };
      if (!apiRes.ok || !apiData.ok) {
        setServerError(
          apiData.error || "Unable to unlock the profile right now. Please try again."
        );
        return;
      }

      const formBody = new URLSearchParams({
        "form-name": "company-profile",
        website_url: payload.website_url,
        name: payload.name,
        company: payload.company,
        role: payload.role,
        phone: payload.phone,
        consent: payload.consent ? "yes" : "no",
        utm_source: payload.utm_source,
        utm_medium: payload.utm_medium,
        utm_campaign: payload.utm_campaign,
        utm_content: payload.utm_content,
        landing_page: payload.landing_page,
        referrer: payload.referrer,
        submitted_at: payload.submitted_at,
        source_page: payload.source_page,
      });

      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      }).catch(() => {});

      trackEvent("profile_download", {
        utm_source: payload.utm_source || "direct",
        utm_medium: payload.utm_medium || "none",
        utm_campaign: payload.utm_campaign || "none",
        page_path: pathname,
      });

      setUnlocked(true);
    } catch {
      setServerError(
        "Network error while unlocking the profile. Please try again or request it on WhatsApp."
      );
    }
  };

  if (unlocked) {
    return (
      <div className="weact-card-elevated rounded-xl border-success/40 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 size-6 shrink-0 text-success"
            aria-hidden="true"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Company profile ready to download
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thank you. Your vendor empanelment copy of the WeAct Global Company Profile (PDF) is unlocked below.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE_CONFIG.profilePdfPath}
            download="WeAct_Global_Company_Profile_Vendor_Empanelment.pdf"
            className={buttonVariants({ variant: "accent", size: "lg" })}
          >
            <Download aria-hidden="true" />
            <span>Download Company Profile (PDF)</span>
          </a>
          <WhatsAppLink
            pageLabel="Company Profile Unlocked"
            variant="outline"
            size="lg"
            label="Discuss empanelment on WhatsApp"
          />
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Need additional vendor onboarding documents (ISO 9001:2015 certificate, GST certificate, or NDA draft)? Email{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="font-medium text-accent-text underline underline-offset-4"
          >
            {SITE_CONFIG.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="weact-card-elevated rounded-xl p-6 sm:p-8">
      <div className="flex items-center gap-2.5 text-sm font-medium text-accent-text">
        <FileText className="size-4" aria-hidden="true" />
        <span>Vendor empanelment PDF (5 pages)</span>
      </div>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Download the WeAct Global Company Profile
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Enter four short details to access the empanelment PDF covering corporate credentials, PAN-India reach, e-platform architecture, and security controls.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-6 space-y-4"
      >
        <div className="hidden" aria-hidden="true">
          <label htmlFor="profile-website_url">Website</label>
          <input
            id="profile-website_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website_url")}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="profile-name">Full name</Label>
            <Input
              id="profile-name"
              autoComplete="name"
              placeholder="Your full name"
              className="mt-1.5"
              aria-invalid={Boolean(errors.name)}
              {...register("name")}
            />
            {errors.name ? (
              <p className="mt-1 text-xs text-destructive" role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="profile-company">Organisation</Label>
            <Input
              id="profile-company"
              autoComplete="organization"
              placeholder="Company or institution name"
              className="mt-1.5"
              aria-invalid={Boolean(errors.company)}
              {...register("company")}
            />
            {errors.company ? (
              <p className="mt-1 text-xs text-destructive" role="alert">
                {errors.company.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="profile-role">Role / designation</Label>
            <Input
              id="profile-role"
              autoComplete="organization-title"
              placeholder="e.g. Vendor Management / Operations"
              className="mt-1.5"
              aria-invalid={Boolean(errors.role)}
              {...register("role")}
            />
            {errors.role ? (
              <p className="mt-1 text-xs text-destructive" role="alert">
                {errors.role.message}
              </p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="profile-phone">Phone / WhatsApp number</Label>
            <Input
              id="profile-phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98XXX XXXXX"
              className="mt-1.5 tabular-nums"
              aria-invalid={Boolean(errors.phone)}
              {...register("phone")}
            />
            {errors.phone ? (
              <p className="mt-1 text-xs text-destructive" role="alert">
                {errors.phone.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="rounded-md border border-border bg-surface p-3.5">
          <label className="flex items-start gap-3 text-sm leading-snug text-foreground cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 rounded-xs border-border-strong accent-primary"
              aria-invalid={Boolean(errors.consent)}
              {...register("consent")}
            />
            <span>
              I consent to WeAct Global Solutions (OPC) Pvt. Ltd. logging this download request under the DPDP Act, 2023.{" "}
              <Link
                href="/privacy"
                className="font-medium text-accent-text underline underline-offset-4"
              >
                Privacy notice
              </Link>
              .
            </span>
          </label>
          {errors.consent ? (
            <p className="mt-2 text-xs text-destructive" role="alert">
              {errors.consent.message}
            </p>
          ) : null}
        </div>

        {serverError ? (
          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-sm border border-destructive/40 bg-destructive/5 p-3.5 text-sm text-destructive"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{serverError}</span>
          </div>
        ) : null}

        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              <span>Unlocking PDF...</span>
            </>
          ) : (
            <>
              <Download aria-hidden="true" />
              <span>Unlock company profile PDF</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
