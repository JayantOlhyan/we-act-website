import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Physical Merchant Onboarding & Third-Party Audits",
  description:
    "PAN-India physical merchant verification for payment gateways and fintechs, plus dealer authentication and mystery audits across 10,000+ PIN codes.",
};

export default function MerchantOnboardingPage() {
  return (
    <ServicePageTemplate
      pageLabel="Merchant Onboarding"
      defaultServiceValue="merchant-onboarding"
      buyerLine="For payment aggregators, payment gateways & fintechs"
      headline="Verify merchant premises before you activate settlement."
      subheadline="WeAct Global runs PAN-India physical merchant onboarding visits, signage and business-activity checks, and third-party audits with geo-tagged proof."
      deliverablesHeading="Merchant verification & third-party audit scope"
      deliverablesIntro="Built for risk, onboarding, and compliance teams needing reliable physical checks across metros and Tier II/III towns."
      deliverables={[
        {
          title: "Physical merchant onboarding verification",
          description:
            "On-site premises inspection confirming physical store or office existence, operational activity, signage, and business category.",
        },
        {
          title: "Payment gateway compliance visits",
          description:
            "Structured physical verification aligned with payment aggregator and banking risk checks prior to merchant go-live.",
        },
        {
          title: "Dealer & distributor authentication",
          description:
            "On-ground verification of channel partners, stockists, and retail outlets to validate inventory presence and legitimacy.",
        },
        {
          title: "Mystery audits",
          description:
            "Unannounced field audits evaluating retail compliance, service adherence, and point-of-sale execution across distributed networks.",
        },
        {
          title: "Geo-tagged photographic evidence",
          description:
            "Paperless mobile capture of storefront, interior, merchant representative, and GPS coordinates in audit-ready reports.",
        },
        {
          title: "Regional language field coverage",
          description:
            "Local executives mapped by PIN code across North, South, and East zones reduce reschedule delays and merchant friction.",
        },
      ]}
      sectorProofNote="WeAct Global executes physical merchant onboarding checks and third-party channel audits across India. Named client references are provided under NDA during vendor evaluation."
      sectorsServed={[
        "Payment Aggregators",
        "Payment Gateways",
        "Fintech Platforms",
        "Distribution & Retail Networks",
      ]}
    />
  );
}
