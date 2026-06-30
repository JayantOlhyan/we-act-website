import { useRef } from "react";
import { Link } from "react-router";
import { company } from "~/data/content";
import type { Route } from "./+types/privacy-policy";

export const meta: Route.MetaFunction = () => [
  { title: "Privacy Policy — WeAct Global Solutions" },
  { name: "description", content: "Privacy Policy under Digital Personal Data Protection Act (DPDP Act) 2023 for WeAct Global Solutions." },
];

export default function PrivacyPolicy() {
  return (
    <main className="main-content">
      <section className="section section--dark" style={{ paddingBlock: "var(--space-16)" }}>
        <div className="container">
          <h1 style={{ color: "#fff", marginBottom: "var(--space-2)" }}>Privacy Policy</h1>
          <p style={{ color: "var(--color-gray-400)" }}>Compliant with Digital Personal Data Protection Act (DPDP Act) 2023 &bull; Effective: January 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="card" style={{ padding: "var(--space-10)", lineHeight: "var(--leading-relaxed)" }}>
            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>1. Introduction &amp; Scope</h2>
            <p style={{ marginBottom: "var(--space-6)" }}>
              WeAct Global Solutions (OPC) Pvt. Ltd. ("WeAct", "we", "our") is committed to protecting the privacy and security of personal data processed during our verification, due diligence, and field operations across India. This policy describes how we collect, process, store, and safeguard data in strict alignment with India's DPDP Act 2023 and ISO 9001:2015 standards.
            </p>

            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>2. Information We Collect</h2>
            <p style={{ marginBottom: "var(--space-6)" }}>
              In executing B2B verification mandates, we may process candidate or business entity data provided explicitly by our corporate clients under authorized consent, including address proof details, employment records, contact numbers, and geotagged field inspection records.
            </p>

            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>3. Data Processing &amp; Purpose Limitation</h2>
            <p style={{ marginBottom: "var(--space-6)" }}>
              Data is processed strictly for the verified completion of authorized background screenings, contact point verifications (CPV), and audit reports requested by corporate clients. We do not sell, monetize, or repurpose candidate personal data for secondary commercial marketing.
            </p>

            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>4. Data Security &amp; Encryption</h2>
            <p style={{ marginBottom: "var(--space-6)" }}>
              All verification files and inspection reports are transmitted over encrypted TLS 1.3 channels and stored in secure, access-controlled cloud repositories with strict role-based authorization and complete audit logging.
            </p>

            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>5. Data Subject Rights &amp; Contact</h2>
            <p style={{ marginBottom: "var(--space-4)" }}>
              Under the DPDP Act 2023, data principals have the right to request access, correction, or erasure of their personal information processed by us. For any data privacy queries or grievance redressal, please contact our Data Protection Officer at:
            </p>
            <div style={{ padding: "var(--space-4)", backgroundColor: "var(--color-bg-alt)", borderRadius: "var(--radius-md)" }}>
              <strong>Email:</strong> {company.email}<br />
              <strong>Address:</strong> {company.address.full}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
