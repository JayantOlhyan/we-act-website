import { Link } from "react-router";
import { company } from "~/data/content";
import type { Route } from "./+types/terms-of-use";

export const meta: Route.MetaFunction = () => [
  { title: "Terms of Use — WeAct Global Solutions" },
  { name: "description", content: "Terms of Use and Legal Disclaimer for WeAct Global Solutions website and verification platforms." },
];

export default function TermsOfUse() {
  return (
    <main className="main-content">
      <section className="section section--dark" style={{ paddingBlock: "var(--space-16)" }}>
        <div className="container">
          <h1 style={{ color: "#fff", marginBottom: "var(--space-2)" }}>Terms of Use</h1>
          <p style={{ color: "var(--color-gray-400)" }}>Legal terms governing access to WeAct Global Solutions digital portals and verification services.</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="card" style={{ padding: "var(--space-10)", lineHeight: "var(--leading-relaxed)" }}>
            <div style={{ marginBottom: "var(--space-6)", padding: "var(--space-4)", backgroundColor: "var(--color-bg-alt)", borderRadius: "var(--radius-md)", fontSize: "var(--text-sm)" }}>
              <strong>Company Name:</strong> {company.legalName}<br />
              <strong>CIN:</strong> {company.cin} &bull; <strong>GSTIN:</strong> {company.gstin}<br />
              <strong>Registered Office:</strong> {company.address.full}
            </div>

            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: "var(--space-6)" }}>
              By accessing the website and client dashboards of WeAct Global Solutions, you agree to be bound by these Terms of Use and all applicable laws of India.
            </p>

            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>2. Use of Verification Reports</h2>
            <p style={{ marginBottom: "var(--space-6)" }}>
              All background verification reports, due diligence summaries, and audit data delivered by WeAct are intended solely for lawful commercial decision-making by authorized client entities under executed Service Level Agreements (SLAs).
            </p>

            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>3. Intellectual Property</h2>
            <p style={{ marginBottom: "var(--space-6)" }}>
              All content, trademarks, software interfaces, API definitions, and operational methodologies displayed on this portal are the sole property of {company.legalName}.
            </p>

            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>4. Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of the use of this portal or services shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
