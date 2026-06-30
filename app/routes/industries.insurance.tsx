import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import type { Route } from "./+types/industries.insurance";

export const meta: Route.MetaFunction = () => [
  { title: "Insurance Claim Verification & Investigation — WeAct" },
  { name: "description", content: "Combat policy fraud with nationwide pre-policy medical checks, hospital record audits, agent screening, and claim investigation across 585+ cities." },
];

export default function IndustryInsurance() {
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
          <div className="page-hero__badge">Insurance Sector</div>
          <h1 className="page-hero__title">Life, General &amp; Health Insurance Investigation</h1>
          <p className="page-hero__subtitle">
            Combating fraudulent insurance claims and accelerating policy issuance through forensic hospital record checks, pre-policy medical audits, agency screening, and post-issuance CPV across 585+ cities.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request Insurance SLAs <IconArrowRight size={18} />
            </Link>
            <Link to="/services/due-diligence" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore Due Diligence Specs
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges vs Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Sector Challenges</span>
            <h2 className="section-header__title">Mitigating High-Loss Insurance Fraud</h2>
            <p className="section-header__description">
              Insurance carriers require rigorous on-ground verification to stop inflated medical claims, fictitious policies, and agency misrepresentation.
            </p>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            <div className="feature-card">
              <h3 className="feature-card__title">Hospital &amp; Medical Claim Audits</h3>
              <p className="feature-card__description">Onsite physical verification of hospital admission records, billing authenticity, and treating doctor credentials for health insurance claims.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Physical verification of nursing homes</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Detection of phantom bills &amp; inflated charges</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Agent Background Screening</h3>
              <p className="feature-card__description">Rigorous pre-empanelment verification of POSP and insurance brokers, screening past criminal history, IRDAI blacklists, and financial standing.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Nationwide court &amp; FIR record check</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> IRDAI regulatory database verification</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Post-Issuance CPV &amp; Beneficiary Check</h3>
              <p className="feature-card__description">Physical visits to verify nominee details, applicant existence, and socioeconomic profile for high-sum-assured life insurance policies.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Geotagged neighborhood inquiries</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Instant mobile app questionnaire sync</li>
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
                <span className="section-header__label" style={{ color: "var(--color-primary)" }}>Enterprise Confidence</span>
                <h2 style={{ marginBottom: "var(--space-4)" }}>Trusted by Top Insurers</h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>
                  Supporting national carriers including <strong>TATA AIG</strong>, <strong>Future Generali</strong>, and <strong>India First Life</strong> across high-risk claim investigations and agency onboarding audits.
                </p>
                <div className="flex gap-4">
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>35%+</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Fraud Prevention Rate</div>
                  </div>
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>24-48h</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Rapid Claim Audit SLA</div>
                  </div>
                </div>
              </div>
              <div style={{ background: "var(--color-primary-50)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-primary-200)" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>IRDAI Compliance &amp; Confidentiality</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text)", lineHeight: "var(--leading-relaxed)" }}>
                  All medical and claim investigation dossiers are managed under strict NDA protocols and encrypted data pipelines compliant with IRDAI security standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Eliminate Insurance Claim Fraud</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Partner with India's most thorough ground investigation network today.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Schedule an Investigation Demo <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
