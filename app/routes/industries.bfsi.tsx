import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import type { Route } from "./+types/industries.bfsi";

export const meta: Route.MetaFunction = () => [
  { title: "BFSI Verification & KYC Solutions — WeAct Global Solutions" },
  { name: "description", content: "Accelerating banking onboarding, retail loan address verification, and strict RBI KYC compliance across 585+ cities with 4,000+ ground executives." },
];

export default function IndustryBFSI() {
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
          <div className="page-hero__badge">BFSI Sector</div>
          <h1 className="page-hero__title">Banking, Financial Services &amp; Insurance (BFSI)</h1>
          <p className="page-hero__subtitle">
            Helping India's premier banking institutions scale retail lending while maintaining zero tolerance for fraud through rapid Contact Point Verification (CPV), digital onboarding checks, and asset audits across 585+ cities.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request BFSI Case Study <IconArrowRight size={18} />
            </Link>
            <Link to="/services/verification" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              View Verification Specs
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges vs Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Sector Challenges</span>
            <h2 className="section-header__title">Solving High-Volume Banking Operations</h2>
            <p className="section-header__description">
              Banks face mounting pressure to deliver instant loan approvals without compromising on strict RBI fraud mitigation mandates.
            </p>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            <div className="feature-card">
              <h3 className="feature-card__title">Retail Loan CPV Backlogs</h3>
              <p className="feature-card__description">High volumes of credit card, auto loan, and personal loan applications often stall due to slow physical verification turnarounds.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> 4-hour metro SLA turnarounds</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Geotagged photo proof &amp; GPS coordinates</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Merchant Onboarding Fraud</h3>
              <p className="feature-card__description">Payment gateway and acquiring banks require physical verification of merchant storefronts, POS terminals, and RoC registrations.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Physical storefront verification</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> QR code &amp; terminal inventory audits</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Rural &amp; Tier III Penetration</h3>
              <p className="feature-card__description">Expanding micro-finance and agricultural lending deep into Tier II and Tier III towns requires local ground intelligence.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> 4,000+ PIN-code mapped investigators</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Multi-lingual field verification</li>
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
                <span className="section-header__label" style={{ color: "var(--color-primary)" }}>Proven Impact</span>
                <h2 style={{ marginBottom: "var(--space-4)" }}>Trusted by Leading Scheduled Banks</h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>
                  WeAct supports major banking institutions including <strong>IndusInd Bank</strong> and <strong>Bank of Maharashtra</strong> across complex retail loan portfolios and PAN India branch audits.
                </p>
                <div className="flex gap-4">
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>99.8%</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Audit Compliance Rate</div>
                  </div>
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>65%</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Faster Turnaround SLA</div>
                  </div>
                </div>
              </div>
              <div style={{ background: "var(--color-primary-50)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-primary-200)" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>RBI Compliance Guarantee</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text)", lineHeight: "var(--leading-relaxed)" }}>
                  Our field workflows and data storage fully comply with RBI Master Directions on KYC and Outsourcing of Financial Services, ensuring complete audit readiness and zero data leakage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Accelerate Your BFSI Verification Pipeline</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Schedule an SLA consultation with our banking sector specialists today.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Consult BFSI Specialists <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
