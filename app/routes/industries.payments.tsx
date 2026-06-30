import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import type { Route } from "./+types/industries.payments";

export const meta: Route.MetaFunction = () => [
  { title: "Digital Payments & Merchant KYC Verification — WeAct" },
  { name: "description", content: "Rapid physical merchant onboarding checks, POS machine verification, QR code deployment audits, and payment gateway KYC across 585+ cities in India." },
];

export default function IndustryPayments() {
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
          <div className="page-hero__badge">Payments &amp; Fintech</div>
          <h1 className="page-hero__title">Digital Payments &amp; Merchant Onboarding KYC</h1>
          <p className="page-hero__subtitle">
            Enabling payment aggregators, fintech gateways, and UPI platforms to onboard merchants with speed and security through physical storefront verification, POS deployment checks, and QR code audits across 585+ cities.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request Merchant KYC SLAs <IconArrowRight size={18} />
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
            <span className="section-header__label">Sector Challenges</span>
            <h2 className="section-header__title">Eliminating Merchant Onboarding Fraud</h2>
            <p className="section-header__description">
              Payment aggregators face strict RBI KYC mandates that require physical storefront verification to prevent shell merchants and money laundering.
            </p>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            <div className="feature-card">
              <h3 className="feature-card__title">Physical Storefront Verification</h3>
              <p className="feature-card__description">Rapid physical visits to verify active merchant business operations, storefront signage, inventory presence, and shop establishment licenses.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Geotagged storefront photographs</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> 4-to-6 hour metro turnaround SLA</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">POS Machine &amp; QR Deployment Audits</h3>
              <p className="feature-card__description">Onsite audits to confirm physical installation of EDC/POS terminals, soundboxes, and UPI QR standees at authorized merchant locations.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Terminal serial &amp; TID verification</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> QR tampering &amp; overlay fraud check</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">High-Risk Merchant Due Diligence</h3>
              <p className="feature-card__description">Deep investigation into promoter identity, bank account ownership match, and business litigation screening for high-volume payment gateway accounts.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Bank statement &amp; PAN physical cross-check</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> AML &amp; sanctions screening</li>
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
                <span className="section-header__label" style={{ color: "var(--color-primary)" }}>Fintech Confidence</span>
                <h2 style={{ marginBottom: "var(--space-4)" }}>Trusted by Payment Aggregators</h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>
                  WeAct empowers leading payment networks including <strong>Runpaisa</strong> and innovative fintech platforms to onboard thousands of merchants monthly across Tier I, II, and III cities.
                </p>
                <div className="flex gap-4">
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>99.7%</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Merchant Verification Accuracy</div>
                  </div>
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>585+</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>PAN India City Reach</div>
                  </div>
                </div>
              </div>
              <div style={{ background: "var(--color-primary-50)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-primary-200)" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>RBI Payment Aggregator Guidelines</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text)", lineHeight: "var(--leading-relaxed)" }}>
                  Our physical verification workflows ensure strict adherence to RBI Guidelines on Regulation of Payment Aggregators (PA) and Payment Gateways (PG), safeguarding your license compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Scale Your Merchant Onboarding Pipeline</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Integrate our nationwide merchant verification force with your payment onboarding platform.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Schedule Merchant KYC Demo <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
