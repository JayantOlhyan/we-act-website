import { z } from "zod";

const phoneRegex = /^[+]?[0-9\s()-]{8,18}$/;

export const attributionSchema = z.object({
  utm_source: z.string().max(120).optional().default(""),
  utm_medium: z.string().max(120).optional().default(""),
  utm_campaign: z.string().max(120).optional().default(""),
  utm_content: z.string().max(160).optional().default(""),
  landing_page: z.string().max(300).optional().default(""),
  referrer: z.string().max(300).optional().default(""),
  submitted_at: z.string().max(64).optional().default(""),
  source_page: z.string().max(160).optional().default(""),
  website_url: z.string().max(200).optional().default(""),
});

export const enquirySchema = attributionSchema.extend({
  formType: z.literal("enquiry").default("enquiry"),
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  company: z.string().trim().min(2, "Please enter your organisation name.").max(120),
  role: z.string().trim().min(2, "Please enter your role or designation.").max(100),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Enter a valid phone number (with STD/country code if needed)."),
  email: z.string().trim().email("Enter a valid work email address.").max(150),
  service: z.string().trim().min(2, "Please select the service you need.").max(100),
  message: z.string().trim().max(1500).optional().default(""),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required under the DPDP Act 2023 to process your enquiry.",
  }),
});

export const companyProfileSchema = attributionSchema.extend({
  formType: z.literal("company-profile").default("company-profile"),
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  company: z.string().trim().min(2, "Please enter your organisation name.").max(120),
  role: z.string().trim().min(2, "Please enter your role or designation.").max(100),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Enter a valid phone number."),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required under the DPDP Act 2023 to download the profile.",
  }),
});

export type EnquiryFormInput = z.input<typeof enquirySchema>;
export type EnquiryFormValues = z.output<typeof enquirySchema>;
export type CompanyProfileFormInput = z.input<typeof companyProfileSchema>;
export type CompanyProfileFormValues = z.output<typeof companyProfileSchema>;
