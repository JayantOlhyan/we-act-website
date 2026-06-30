import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconShield, IconCheck, IconArrowRight, IconFileText } from "~/components/ui/icons";
import type { Route } from "./+types/security-compliance";

export const meta: Route.MetaFunction = () => [
  { title: "Security & Compliance — ISO 9001:2015 & DPDP Act Aligned | WeAct" },
  { name: "description", content: "Explore WeAct's enterprise data security architecture, ISO 9001:2015 quality frameworks, role-based access controls, and strict compliance with India's DPDP Act 2023." },
];

export default function SecurityCompliance() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".anim-fade-up", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">Infosec &amp; Governance</div>
          <h1 className="page-hero__title">Data Security &amp; Regulatory Compliance</h1>
          <p className="page-hero__subtitle">
            We design our verification infrastructure with defense-in-depth security to protect sensitive enterprise data, candidate PII, and financial records under strict ISO 9001:2015 protocols and India's DPDP Act 2023.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request Infosec Dossier <IconArrowRight size={18} />
            </Link>
            <Link to="/privacy-policy" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Review Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Compliance Pillars</span>
            <h2 className="section-header__title">Defense-in-Depth Architecture</h2>
            <p className="section-header__description">
              Engineered to satisfy vendor risk assessments of leading Indian banks, NBFCs, and insurers.
            </p>
          </div>

          <div className="feature-grid anim-fade-up">
            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>ISO 9001:2015 Quality Management</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Certified operational workflows governing case allocation, field execution, multi-tier QC auditing, and report archiving.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Multi-tiered QC audit before report generation</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Regular internal &amp; statutory surveillance audits</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Zero unauthorized manual editing of evidence</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconFileText size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>DPDP Act 2023 Compliance</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Strict alignment with the Digital Personal Data Protection Act, enforcing explicit purpose limitations, notice requirements, and right to erasure.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Automated data purge post statutory retention SLA</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Explicit purpose-bound candidate consent tracking</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Data sovereignty maintained strictly within India</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Encrypted Orchestration</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                All API communications, webhook payloads, and mobile app field uploads are secured using TLS 1.3 encryption both in transit and at rest.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> AES-256 encrypted database storage at rest</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Tamper-proof digitally signed PDF reports</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> IP-whitelisted API endpoint access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NDA & Personnel Governance */}
      <section className="section section--alt">
        <div className="container">
          <div className="card anim-fade-up" style={{ padding: "var(--space-10)" }}>
            <h2 style={{ marginBottom: "var(--space-4)" }}>Personnel Vetting &amp; Role-Based Access Control</h2>
            <p style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-6)", color: "var(--color-text-muted)" }}>
              Every field executive and data analyst across our 4,000+ member network undergoes background checks, police record verification, and executes legally binding Non-Disclosure Agreements (NDAs) prior to deployment.
            </p>
            <div className="grid grid--3 gap-6">
              <div className="feature-card" style={{ padding: "var(--space-6)" }}>
                <h4 style={{ marginBottom: "var(--space-2)", fontSize: "var(--text-base)" }}>Multi-Factor Auth (MFA)</h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", margin: 0 }}>Enforced across all field apps and central dashboards.</p>
              </div>
              <div className="feature-card" style={{ padding: "var(--space-6)" }}>
                <h4 style={{ marginBottom: "var(--space-2)", fontSize: "var(--text-base)" }}>Strict RBAC Isolation</h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", margin: 0 }}>Agents only view case details assigned to their specific PIN code.</p>
              </div>
              <div className="feature-card" style={{ padding: "var(--space-6)" }}>
                <h4 style={{ marginBottom: "var(--space-2)", fontSize: "var(--text-base)" }}>Complete Audit Logs</h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", margin: 0 }}>Every view, download, and QC edit timestamped permanently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Review Our Comprehensive Infosec Dossier</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Our security team can support vendor onboarding questionnaires and regulatory security reviews.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Request Security Documentation <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
