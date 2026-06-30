import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconCheck, IconArrowRight, IconShield, IconMapPin, IconPhone, IconFileText } from "~/components/ui/icons";
import type { Route } from "./+types/services.verification";

export const meta: Route.MetaFunction = () => [
  { title: "Verification Services — Address, Telecom & Document Checks | WeAct" },
  { name: "description", content: "AuthBridge-grade physical address verification (CPV), telecom screening, employment background checks, and identity document authentication across 585+ Indian cities." },
];

export default function VerificationService() {
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
          <div className="page-hero__badge">Flagship Verification Suite</div>
          <h1 className="page-hero__title">Comprehensive Ground &amp; Digital Verification</h1>
          <p className="page-hero__subtitle">
            Empowering enterprises with tamper-proof physical and API-driven background screening across 585+ cities. Eliminate fraud at onboarding with 4,000+ PIN-code mapped investigators.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Deploy Verification Teams <IconArrowRight size={18} />
            </Link>
            <Link to="/coverage" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Check PIN Code Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* Key Offerings Feature Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Core Capabilities</span>
            <h2 className="section-header__title">Multitiered Verification Modules</h2>
            <p className="section-header__description">
              Customizable verification workflows built to satisfy stringent RBI, IRDAI, and corporate risk frameworks.
            </p>
          </div>

          <div className="feature-grid anim-fade-up">
            <div className="feature-card">
              <div className="feature-card__icon"><IconMapPin size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Address &amp; CPV Verification</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Physical site visits confirming residential or commercial addresses with real-time GPS coordinates and timestamped photographs.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> GPS Geotagging &amp; Time-sync</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Neighbor &amp; Landlord Reference Cross-check</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Landmark &amp; PIN Code Verification</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconPhone size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Telecom &amp; Digital Screening</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Automated subscriber identity verification confirming active SIM status, billing address match, and tenure with major telecom carriers.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> SIM Ownership &amp; Active Status</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Carrier Billing Address Cross-verification</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Fraud &amp; Porting Risk Scoring</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconFileText size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Identity &amp; Document Authentication</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Instant and forensic validation of Aadhaar, PAN, Passport, Voter ID, and Driving Licenses against official issuing authorities.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> OCR-based Automated Data Extraction</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Direct API Verification with NSDL / UIDAI</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Forgery &amp; Tamper Detection</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Employment &amp; Credential Checks</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Forensic investigation of past employment tenure, salary records, designation, and exit reasons directly from HR departments.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Direct HR &amp; Supervisor Verification</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> UAN &amp; EPF Cross-referencing</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Moonlighting &amp; Dual Employment Audit</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Court Records &amp; Criminal Checks</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Nationwide search across Supreme Court, High Courts, District Courts, and tribunals, supplemented by physical police verification.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> e-Courts &amp; Tribunal Database Scanning</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Physical Police Station Verification</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Global Sanctions &amp; Watchlist Screening</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Education Verification</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Authenticating university degrees, certificates, mark sheets, and institute accreditation directly through registrar offices.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> UGC &amp; AICTE Recognized University Checks</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Physical Roll Number &amp; Transcript Audit</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Fake University &amp; Diploma Mill Detection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLA & Quality Guarantee */}
      <section className="section section--alt">
        <div className="container">
          <div className="sla-box anim-fade-up">
            <h3 style={{ fontSize: "var(--text-xl)", color: "var(--color-text)", marginBottom: "var(--space-2)" }}>
              SLA-Backed Enterprise Accuracy Guarantee
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-base)", margin: 0 }}>
              All verification reports undergo a 3-tier quality control process compliant with **ISO 9001:2015** quality management standards. We guarantee 99.4%+ report accuracy and automated webhooks delivering tamper-proof encrypted PDFs straight into your core banking or HRIS software.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Step Workflow */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Operational Flow</span>
            <h2 className="section-header__title">How We Act on Every Case</h2>
          </div>

          <div className="process-grid anim-fade-up">
            <div className="process-step">
              <span className="process-step__num">01</span>
              <h4 className="process-step__title">API Intake &amp; Mapping</h4>
              <p className="process-step__desc">Case details ingested via secure API/dashboard and instantly mapped to the closest PIN-code field investigator.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">02</span>
              <h4 className="process-step__title">Field Deployment</h4>
              <p className="process-step__desc">Investigator visits the physical address within hours, capturing geotagged evidence and timestamped photos.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">03</span>
              <h4 className="process-step__title">Digital Cross-Check</h4>
              <p className="process-step__desc">Simultaneous automated queries run against UIDAI, NSDL, e-Courts, and telecom carrier databases.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">04</span>
              <h4 className="process-step__title">Multi-Level QC Audit</h4>
              <p className="process-step__desc">Quality analysts verify evidence authenticity, metadata integrity, and compliance before sign-off.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">05</span>
              <h4 className="process-step__title">Encrypted Report Dispatch</h4>
              <p className="process-step__desc">Tamper-proof PDF report generated with digital signatures and delivered via real-time webhook.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">06</span>
              <h4 className="process-step__title">Audit Trail Retention</h4>
              <p className="process-step__desc">Encrypted archive maintained under strict DPDP Act 2023 compliance for future statutory auditing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Ready to Eliminate Onboarding Fraud?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Partner with India's most dependable ground verification footprint. Custom SLA packages available.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Request Enterprise Pricing <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
