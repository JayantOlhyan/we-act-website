import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import type { Route } from "./+types/industries.pharma";

export const meta: Route.MetaFunction = () => [
  { title: "Pharmaceutical Supply Chain Audits & Verification — WeAct" },
  { name: "description", content: "Safeguard drug integrity with cold-chain warehouse audits, stockist screening, counterfeit detection audits, and medical representative verification for Dr. Reddy's and pharma leaders." },
];

export default function IndustryPharma() {
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
          <div className="page-hero__badge">Pharmaceuticals &amp; Healthcare</div>
          <h1 className="page-hero__title">Pharmaceutical Supply Chain Integrity &amp; Audits</h1>
          <p className="page-hero__subtitle">
            Safeguarding drug distribution networks through rigorous physical stockist audits, cold-chain warehouse verification, counterfeit investigation, and medical representative field monitoring across 585+ cities.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request Pharma Audit SLA <IconArrowRight size={18} />
            </Link>
            <Link to="/services/audits" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore Audit Frameworks
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges vs Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Supply Chain Risk</span>
            <h2 className="section-header__title">Protecting Brand Equity &amp; Patient Safety</h2>
            <p className="section-header__description">
              Pharmaceutical manufacturers face severe regulatory penalties and brand damage from unauthorized stockists and counterfeit drug infiltration.
            </p>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            <div className="feature-card">
              <h3 className="feature-card__title">Distributor &amp; Stockist KYC</h3>
              <p className="feature-card__description">Pre-empanelment physical inspection of drug stockists and C&amp;F agents, verifying drug license validity, storage facilities, and GST registration.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Physical drug license matching</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Warehouse capacity &amp; hygiene check</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Cold-Chain &amp; Warehouse Audits</h3>
              <p className="feature-card__description">Unannounced physical inspections of cold storage depots and logistics partners to verify temperature loggers, backup power, and storage standards.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Temperature log verification</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> CDSCO compliance audit reporting</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Mystery Audits &amp; Anti-Counterfeit</h3>
              <p className="feature-card__description">Field mystery shopping at retail chemists and pharmacy networks across Tier II/III markets to detect counterfeit packaging and unauthorized grey-market sales.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Batch number &amp; QR forensics</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Chain-of-custody evidence collection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Client Spotlight */}
      <section className="section section--alt">
        <div className="container anim-fade-up">
          <div className="card" style={{ padding: "var(--space-10)", backgroundColor: "var(--color-white)", border: "1px solid var(--color-border)" }}>
            <div className="grid grid--2 gap-8" style={{ alignItems: "center" }}>
              <div>
                <span className="section-header__label" style={{ color: "var(--color-primary)" }}>Proven Trust</span>
                <h2 style={{ marginBottom: "var(--space-4)" }}>Trusted by Pharma Leaders</h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>
                  Supporting global pharmaceutical giants including <strong>Dr. Reddy's Laboratories</strong> with nationwide supply chain auditing, stockist physical verification, and field compliance monitoring.
                </p>
                <div className="flex gap-4">
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>100%</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>License Verification Accuracy</div>
                  </div>
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>585+</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Cities &amp; Towns Covered</div>
                  </div>
                </div>
              </div>
              <div style={{ background: "var(--color-primary-50)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-primary-200)" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>CDSCO &amp; FDA Audit Readiness</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text)", lineHeight: "var(--leading-relaxed)" }}>
                  Our inspection dossiers are built with time-stamped visual proof and forensic chain-of-custody documentation, ensuring complete readiness for statutory internal and external quality reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Secure Your Pharma Distribution Network</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Partner with India's most dependable healthcare supply chain verification network today.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Consult Pharma Audit Specialists <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
