import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconCheck, IconArrowRight, IconShield, IconFileText, IconUsers } from "~/components/ui/icons";
import type { Route } from "./+types/services.due-diligence";

export const meta: Route.MetaFunction = () => [
  { title: "Due Diligence & KYC Screening — Corporate Risk Mitigation | WeAct" },
  { name: "description", content: "In-depth corporate background investigations, leadership screening, vendor due diligence, and regulatory KYC compliance audits across India." },
];

export default function DueDiligenceService() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".anim-fade-up", { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" });
  }, { scope: containerRef });

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">Regulatory Compliance &amp; Intelligence</div>
          <h1 className="page-hero__title">Due Diligence &amp; KYC Solutions</h1>
          <p className="page-hero__subtitle">
            Mitigate enterprise risk with 360-degree background screening, corporate vetting, and RBI-aligned KYC audits. From C-suite hiring to vendor onboarding, we deliver actionable ground intelligence.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request Due Diligence Audit <IconArrowRight size={18} />
            </Link>
            <Link to="/industries/bfsi" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore BFSI Applications
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Risk Management Modules</span>
            <h2 className="section-header__title">Comprehensive Screening Architecture</h2>
            <p className="section-header__description">
              Uncovering hidden financial, legal, and operational risks before commercial commitments are executed.
            </p>
          </div>

          <div className="feature-grid anim-fade-up">
            <div className="feature-card">
              <div className="feature-card__icon"><IconUsers size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Executive &amp; Leadership Vetting</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Deep-dive intelligence on prospective directors, C-suite executives, and key personnel to protect shareholder value and corporate reputation.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Board Directorship &amp; Conflict Audit</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Regulatory &amp; SEBI Disciplinary Searches</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Media &amp; Adverse Reputation Analysis</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Vendor &amp; Partner Due Diligence</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Thorough physical and statutory vetting of suppliers, distributors, and logistics partners to prevent shell company fraud and supply chain breakdown.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Physical Warehouse &amp; Site Verification</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> GSTIN &amp; ROC Financial Filing Analysis</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Beneficial Ownership &amp; Promoter Screening</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconFileText size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>RBI &amp; IRDAI KYC Compliance</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                High-volume, SLA-bound physical and digital KYC verification for banking applicants, insurance policyholders, and mutual fund investors.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Geotagged Contact Point Verification (CPV)</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> CKYC Registry Integration Support</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Politically Exposed Person (PEP) Checks</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>AML &amp; Global Watchlist Screening</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Screening entities and individuals against global sanctions lists, Interpol watchlists, financial crime databases, and adverse media reports.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> OFAC, UN, EU &amp; RBI Sanctions Lists</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Anti-Money Laundering (AML) Compliance</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Real-time Alerting on New Infractions</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconFileText size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>M&amp;A &amp; Joint Venture Intelligence</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Investigative due diligence on merger targets and JV partners to uncover undisclosed liabilities, litigation risks, or labor compliance issues.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Court Records &amp; Pending Litigation Audit</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Statutory Labor Law &amp; PF Compliance Check</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Key Customer &amp; Supplier Reputation Check</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Credit &amp; Financial Capacity Verification</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Assessing true financial solvency, banking behavior, and repayment capacity of corporate borrowers and trade debtors.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Bank Statement Analysis &amp; Verification</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Default &amp; Cheque Bounce Case Search</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Physical Inventory &amp; Asset Capacity Audit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Box */}
      <section className="section section--alt">
        <div className="container">
          <div className="sla-box anim-fade-up">
            <h3 style={{ fontSize: "var(--text-xl)", color: "var(--color-text)", marginBottom: "var(--space-2)" }}>
              Strict DPDP Act 2023 &amp; NDA Alignment
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-base)", margin: 0 }}>
              All investigative due diligence is conducted with strict confidentiality under non-disclosure frameworks. Data collection complies strictly with India's **Digital Personal Data Protection (DPDP) Act 2023**, ensuring verifiable purpose limitation and complete audit trails.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Methodology */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Methodology</span>
            <h2 className="section-header__title">The Due Diligence Workflow</h2>
          </div>

          <div className="process-grid anim-fade-up">
            <div className="process-step">
              <span className="process-step__num">01</span>
              <h4 className="process-step__title">Scope &amp; Mandate Definition</h4>
              <p className="process-step__desc">Collaborating with legal and compliance heads to define precise risk thresholds, jurisdiction scope, and SLA requirements.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">02</span>
              <h4 className="process-step__title">Multi-Source Intelligence Collection</h4>
              <p className="process-step__desc">Deploying on-ground investigators while querying regulatory registries, court databases, and global intelligence feeds.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">03</span>
              <h4 className="process-step__title">Forensic Synthesis &amp; QC</h4>
              <p className="process-step__desc">Cross-verifying contradictory claims and synthesizing raw evidence into an executive-ready risk analysis dossier.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">04</span>
              <h4 className="process-step__title">Dossier Delivery &amp; Briefing</h4>
              <p className="process-step__desc">Confidential transmission of encrypted dossiers with red-flag highlights and actionable mitigation recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Safeguard Your Corporate Transactions</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Let our compliance practice build a customized due diligence protocol for your onboarding pipeline.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Schedule Compliance Briefing <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
