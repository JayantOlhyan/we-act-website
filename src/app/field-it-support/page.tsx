import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "PAN-India Onsite Field IT & Infrastructure Support",
  description:
    "Onsite engineers for laptops, desktops, and printers backed by centralised ticket dispatch, ERP integration, and SLA escalation across 585+ Indian cities.",
};

export default function FieldItSupportPage() {
  return (
    <ServicePageTemplate
      pageLabel="Field IT Support"
      defaultServiceValue="field-it-support"
      buyerLine="For enterprises with distributed branches & endpoints"
      headline="Onsite IT engineers dispatched across 585+ cities."
      subheadline="Keep laptops, desktops, and printers operational across regional branches with PIN-mapped field engineers, centralised ticket management, and two-way ERP status updates."
      heroImage="/images/field-it-engineer.jpg"
      heroImageAlt="Onsite IT engineer configuring enterprise laptops at a regional branch office"
      heroImageCaption="Ticketed onsite IT engineer dispatch across 585+ cities"
      deliverablesHeading="Onsite IT & field support capabilities"
      deliverablesIntro="Single-partner accountability for break-fix visits, endpoint upkeep, and multi-location enterprise rollouts."
      deliverables={[
        {
          title: "Laptop, desktop & printer field support",
          description:
            "Trained onsite engineers for diagnostics, hardware replacement coordination, preventive upkeep, and peripheral support.",
        },
        {
          title: "Centralised ticket management",
          description:
            "Structured call logging, PIN-code engineer assignment, and real-time ticket lifecycle tracking through closure.",
        },
        {
          title: "Client ERP integration",
          description:
            "Two-way integration and client-aligned ticket status updates so your internal IT desk sees live field progress.",
        },
        {
          title: "Built-in escalation & fallback matrix",
          description:
            "Documented escalation tiers and backup field engineer arrangements to protect uptime across remote locations.",
        },
        {
          title: "App-based field movement tracking",
          description:
            "Visibility into engineer dispatch and arrival times with geo-tagged closure reports and signed service acknowledgements.",
        },
        {
          title: "SLA & TAT governed delivery",
          description:
            "Turnaround commitments structured around your branch criticality, coverage zones, and mutually agreed SLAs.",
        },
      ]}
      sectorProofNote="WeAct Global delivers high-volume multi-city technical field support under SLA frameworks. Specific enterprise engagement references are shared directly during RFP and empanelment discussions."
      sectorsServed={[
        "Telecom & Network Enterprises",
        "Distributed BFSI Branches",
        "Logistics & Supply Chain",
        "Multi-City Corporate Offices",
      ]}
    />
  );
}
