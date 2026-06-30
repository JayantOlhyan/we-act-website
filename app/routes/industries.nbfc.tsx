import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import type { Route } from "./+types/industries.nbfc";

export const meta: Route.MetaFunction = () => [
  { title: "NBFC & Fintech Verification Solutions — WeAct Global Solutions" },
  { name: "description", content: "High-velocity API and ground verification for digital lenders, NBFCs, micro-finance institutions, and consumer loan underwriting across India." },
];

export default function IndustryNBFC() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".anim-fade-up", { y: 30, opacity: 0, stagger: 0.12, duration: 0.8 });
  }, { scope: containerRef });

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">NBFC &amp; Fintech</div>
          <h1 className="page-hero__title">High-Velocity Lending Verification &amp; KYC</h1>
          <p className="page-hero__subtitle">
            Enabling Non-Banking Financial Companies (NBFCs) and digital fintech lenders to disburse loans faster while maintaining robust fraud defense through API-driven checks and rapid ground CPV across 585+ cities.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request NBFC SLAs <IconArrowRight size={18} />
            </Link>
            <Link to="/services/verification" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore Verification APIs
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges vs Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Fintech Challenges</span>
            <h2 className="section-header__title">Scaling Digital Lending Without Risk</h2>
            <p className="section-header__description">
              Digital lenders operate on razor-thin turnaround expectations where conventional slow field checks cause high borrower drop-off.
            </p>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            <div className="feature-card">
              <h3 className="feature-card__title">Instant Digital Loan CPV</h3>
              <p className="feature-card__description">Rapid 4-to-8 hour ground verification for unsecured personal loans, buy-now-pay-later (BNPL), and two-wheeler financing.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Geotagged photo proof via mobile app</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Real-time API webhook integration</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Commercial &amp; MSME Due Diligence</h3>
              <p className="feature-card__description">Detailed business site inspection, stock evaluation, and promoter litigation checks for MSME and supply-chain financing NBFCs.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> GSTIN &amp; RoC physical match</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Warehouse inventory auditing</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Micro-Finance Rural Verification</h3>
              <p className="feature-card__description">Deep penetration into Tier II, III, and rural PIN codes to verify Joint Liability Groups (JLG) and self-help group borrowers.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Local dialect executive deployment</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Community verification checkpoints</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLA & Compliance Spotlight */}
      <section className="section section--alt">
        <div className="container anim-fade-up">
          <div className="card" style={{ padding: "var(--space-10)", backgroundColor: "var(--color-white)", border: "1px solid var(--color-border)" }}>
            <div className="grid grid--2 gap-8" style={{ alignItems: "center" }}>
              <div>
                <span className="section-header__label" style={{ color: "var(--color-primary)" }}>API-First Operations</span>
                <h2 style={{ marginBottom: "var(--space-4)" }}>Designed for Modern Fintech Workflows</h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>
                  Our proprietary verification infrastructure connects directly to your Loan Origination System (LOS) via REST webhooks, triggering instant field dispatch the moment an application is submitted.
                </p>
                <div className="flex gap-4">
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>100%</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>PIN-Code Coverage</div>
                  </div>
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>&lt; 6 Hours</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Metro City SLA</div>
                  </div>
                </div>
              </div>
              <div style={{ background: "var(--color-primary-50)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-primary-200)" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>DPDP Act &amp; RBI Alignment</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text)", lineHeight: "var(--leading-relaxed)" }}>
                  Zero data retention policies and explicit consent workflows guarantee complete alignment with India's Digital Personal Data Protection Act 2023 and RBI digital lending norms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Scale Your NBFC Lending Pipeline</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Integrate with our high-speed verification network today.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Request Fintech Integration Demo <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
