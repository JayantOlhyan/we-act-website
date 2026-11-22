"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICE_OPTIONS } from "@/lib/site-config";
import { getFirstTouchAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";
import {
  enquirySchema,
  type EnquiryFormInput,
  type EnquiryFormValues,
} from "@/lib/validation";

interface EnquiryFormProps {
  defaultService?: string;
  heading?: string;
  subheading?: string;
}

export function EnquiryForm({
  defaultService = "verification-kyc",
  heading = "Send your requirement directly to the Director desk",
  subheading = "Share your coverage scope, volume, or empanelment request. Enquiries go straight to Neeraj Juneja with no call-centre queue.",
}: EnquiryFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormInput, unknown, EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      formType: "enquiry",
      name: "",
      company: "",
      role: "",
      phone: "",
      email: "",
      service: defaultService,
      message: "",
      consent: false,
      website_url: "",
    },
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setServerError(null);

    const attribution = getFirstTouchAttribution();
    const submittedAt = new Date().toISOString();

    const payload: EnquiryFormValues = {
      ...values,
      formType: "enquiry",
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
      // 1. Server-side validation + structured log + Resend email (when configured)
      const apiRes = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const apiData = (await apiRes.json()) as { ok?: boolean; error?: string };
      if (!apiRes.ok || !apiData.ok) {
        setServerError(
          apiData.error || "Could not submit your enquiry. Please try again or reach us on WhatsApp."
        );
        return;
      }

      // 2. Best-effort Netlify Forms capture for exportable CSV enquiry log
      const formBody = new URLSearchParams({
        "form-name": "enquiry",
        website_url: payload.website_url,
        name: payload.name,
        company: payload.company,
        role: payload.role,
        phone: payload.phone,
        email: payload.email,
        service: payload.service,
        message: payload.message,
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
      }).catch(() => {
        // Local dev does not intercept Netlify Forms; /api/enquiry already validated & logged
      });

      trackEvent("form_submit", {
        service: payload.service,
        utm_source: payload.utm_source || "direct",
        utm_medium: payload.utm_medium || "none",
        utm_campaign: payload.utm_campaign || "none",
        page_path: pathname,
      });

      router.push(`/thank-you?service=${encodeURIComponent(payload.service)}`);
    } catch {
      setServerError(
        "Network error while sending your enquiry. Please call or message on WhatsApp."
      );
    }
  };

  return (
    <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {heading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {subheading}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-6 space-y-5"
      >
        {/* Honeypot field — hidden from humans and assistive technology */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_url">Website</label>
          <input
            id="website_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website_url")}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="enquiry-name">Full name</Label>
            <Input
              id="enquiry-name"
              autoComplete="name"
              placeholder="e.g. Rajesh Verma"
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
            <Label htmlFor="enquiry-company">Organisation</Label>
            <Input
              id="enquiry-company"
              autoComplete="organization"
              placeholder="Bank, NBFC, Fintech or Enterprise"
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
            <Label htmlFor="enquiry-role">Role / designation</Label>
            <Input
              id="enquiry-role"
              autoComplete="organization-title"
              placeholder="e.g. Head of Risk / Ops"
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
            <Label htmlFor="enquiry-phone">Phone / WhatsApp number</Label>
            <Input
              id="enquiry-phone"
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="enquiry-email">Work email</Label>
            <Input
              id="enquiry-email"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              className="mt-1.5"
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email ? (
              <p className="mt-1 text-xs text-destructive" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="enquiry-service">Service needed</Label>
            <select
              id="enquiry-service"
              className="mt-1.5 flex min-h-11 w-full rounded-sm border border-border-strong bg-surface-input px-3.5 py-2.5 text-base text-foreground transition-colors duration-150 hover:border-foreground/50"
              aria-invalid={Boolean(errors.service)}
              {...register("service")}
            >
              {SERVICE_OPTIONS.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-surface text-foreground"
                >
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service ? (
              <p className="mt-1 text-xs text-destructive" role="alert">
                {errors.service.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <Label htmlFor="enquiry-message">
            Requirement details{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Textarea
            id="enquiry-message"
            placeholder="Share target regions or PIN codes, monthly volume, or SLA expectations."
            className="mt-1.5"
            {...register("message")}
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-destructive" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <div className="rounded-sm border border-border bg-background/60 p-3.5">
          <label className="flex items-start gap-3 text-sm leading-snug text-foreground cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 rounded-xs border-border-strong accent-accent"
              aria-invalid={Boolean(errors.consent)}
              {...register("consent")}
            />
            <span>
              I consent to WeAct Global Solutions (OPC) Pvt. Ltd. processing the details submitted above to respond to this enquiry in accordance with the Digital Personal Data Protection (DPDP) Act, 2023.{" "}
              <Link
                href="/privacy"
                className="font-medium text-accent-text underline underline-offset-4"
              >
                Read privacy notice
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

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                <span>Submitting enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit enquiry</span>
                <ArrowRight aria-hidden="true" />
              </>
            )}
          </Button>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-accent-text" aria-hidden="true" />
            <span>NDA-ready engagements. Direct Director response.</span>
          </p>
        </div>
      </form>
    </div>
  );
}
