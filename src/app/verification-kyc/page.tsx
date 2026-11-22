import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "PAN-India Verification, CPV & KYC Visits",
  description:
    "Physical address, document, and Customer Profile Verification (CPV), due diligence, KYC visits, and background checks across 585+ cities and 10,000+ PIN codes.",
};

export default function VerificationKycPage() {
  return (
    <ServicePageTemplate
      pageLabel="Verification & KYC"
      defaultServiceValue="verification-kyc"
      buyerLine="For banks, NBFCs, life & general insurers"
      headline="Physical CPV and KYC visits that close on SLA."
      subheadline="When digital checks are not enough, WeAct Global dispatches PIN-mapped, regional-language executives across 10,000+ PIN codes for geo-tagged field verification and due diligence."
      heroImage="/images/field-verification.jpg"
      heroImageAlt="WeAct Global field executive performing an on-site CPV and physical KYC check"
      heroImageCaption="Geo-tagged CPV & KYC verification across 10,000+ PIN codes"
      deliverablesHeading="Verification & due diligence capabilities"
      deliverablesIntro="Every visit follows documented consent protocols and returns geo-tagged evidence through encrypted channels."
      deliverables={[
        {
          title: "Customer Profile Verification (CPV)",
          description:
            "On-ground residential and office verification confirming applicant identity, occupancy, business stability, and neighbourhood checks.",
        },
        {
          title: "Due diligence & physical KYC visits",
          description:
            "Nationwide physical KYC visits for banking, NBFC, and insurance underwriting with structured checklists and time-stamped photographs.",
        },
        {
          title: "Address, telephone & document verification",
          description:
            "Multi-point verification of submitted identity, address, and supporting documents prior to credit disbursal or policy issuance.",
        },
        {
          title: "Background verification",
          description:
            "Field-backed background screening supporting enterprise onboarding, vendor empanelment, and risk review workflows.",
        },
        {
          title: "Collection & recovery assistance",
          description:
            "Structured field visits and customer contact support aligned with client compliance and escalation guidelines.",
        },
        {
          title: "Insurance, banking & NBFC field visits",
          description:
            "Dedicated last-mile field execution across metros, Tier I, Tier II, Tier III cities, and semi-urban locations.",
        },
      ]}
      sectorProofNote="WeAct Global supports PAN-India verification, KYC, and due diligence workflows across regulated financial institutions. Client names and assignment references are shared directly during vendor empanelment under NDA."
      sectorsServed={[
        "Scheduled Banks",
        "NBFCs & Digital Lenders",
        "Life & General Insurers",
        "Credit & Risk Analytics",
      ]}
    />
  );
}
