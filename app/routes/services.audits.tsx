import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconCheck, IconArrowRight, IconShield, IconMapPin, IconFileText, IconUsers } from "~/components/ui/icons";
import type { Route } from "./+types/services.audits";

export const meta: Route.MetaFunction = () => [
  { title: "Third-Party Audits & Mystery Inspections — Nationwide Reach | WeAct" },
  { name: "description", content: "Unannounced mystery audits, retail store inspections, pharma stockist authentication, telecom tower verification, and asset audits across 585+ cities." },
];

export default function AuditsService() {
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
          <div className="page-hero__badge">Nationwide Ground Inspections</div>
          <h1 className="page-hero__title">Third-Party Audits &amp; Inspections</h1>
          <p className="page-hero__subtitle">
            Deploy trained field inspectors across 585+ cities to verify retail network compliance, audit distributor stockists, and conduct mystery shopping evaluations with real-time geotagged proof.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Schedule Audit Campaign <IconArrowRight size={18} />
            </Link>
            <Link to="/industries/pharma" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore Pharma Audits
            </Link>
          </div>
        </div>
      </section>

      {/* Audit Capabilities Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Audit Frameworks</span>
            <h2 className="section-header__title">Multisector Inspection Services</h2>
            <p className="section-header__description">
              Unbiased third-party verification ensuring your operational standards are enforced at every branch, distributor point, and retail location.
            </p>
          </div>

          <div className="feature-grid anim-fade-up">
            <div className="feature-card">
              <div className="feature-card__icon"><IconUsers size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Mystery Shopping &amp; Retail Compliance</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Unannounced visits evaluating staff customer service, visual merchandising adherence, pricing policy compliance, and promotional rollout execution.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Objective Evaluation Scorecards</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Covert Audio &amp; Photo Evidence Capture</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Staff Grooming &amp; SLA Adherence Audits</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Pharma Distributor &amp; Stockist Audits</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Verifying drug storage compliance, cold-chain integrity, batch tracking records, and licensing validity for pharmaceutical stockists nationwide.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Drug License &amp; GST Verification</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Expiry Date &amp; Batch Quarantine Audit</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Cold-Chain Temperature Log Inspection</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconMapPin size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Telecom Tower &amp; Cell Site Audits</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Geotagged physical inspection of remote telecom towers, battery backup assets, diesel generator run-time logs, and physical site security.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Geotagged Hardware &amp; Serial Number Audit</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Battery &amp; Generator Condition Checking</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Perimeter Security &amp; Safety Inspection</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconFileText size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Supply Chain &amp; Warehouse Audits</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Periodic inventory counts, pilferage investigation, loading bay safety inspections, and third-party logistics (3PL) warehouse audits.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Spot Inventory Reconciliation</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Safety &amp; Fire Hazard Compliance</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Loading Bay &amp; Security Gate Audit</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Fixed Asset Tagging &amp; Verification</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Physical barcode/QR tagging and verification of corporate IT assets, office furniture, POS terminals, and machinery across multi-branch networks.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Asset Barcode / QR Label Tagging</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Ghost Asset Identification &amp; Write-off</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Statutory Fixed Asset Register (FAR) Matching</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Brand Protection &amp; Anti-Counterfeit Audits</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Market sweeps across Tier II and III wholesale hubs to identify counterfeit merchandise, unauthorized grey-market sellers, and trademark infringement.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Wholesale Market Intelligence Sweeps</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Counterfeit Product Sample Procurement</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Evidence Documentation for Legal Action</li>
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
              Tamper-Proof Geotagged Evidence Guarantee
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-base)", margin: 0 }}>
              Every audit inspection conducted by WeAct field agents is captured via our proprietary mobile application enforcing **mandatory GPS coordinates, cellular timestamp verification, and tamper-proof media encryption**. Audit reports are delivered with complete digital trails that withstand strict corporate and statutory scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Methodology */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Execution Cycle</span>
            <h2 className="section-header__title">How We Run Nationwide Audits</h2>
          </div>

          <div className="process-grid anim-fade-up">
            <div className="process-step">
              <span className="process-step__num">01</span>
              <h4 className="process-step__title">Checklist &amp; Scorecard Design</h4>
              <p className="process-step__desc">Translating your brand guidelines and statutory requirements into a standardized mobile inspection questionnaire.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">02</span>
              <h4 className="process-step__title">PIN-Code Agent Allocation</h4>
              <p className="process-step__desc">Assigning verified local auditors from our 4,000+ network who speak the native dialect and understand local nuances.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">03</span>
              <h4 className="process-step__title">On-Ground Inspection</h4>
              <p className="process-step__desc">Agents execute physical visits, capturing timestamped photos, serial numbers, and signed declarations.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">04</span>
              <h4 className="process-step__title">Central QC Review</h4>
              <p className="process-step__desc">Our central quality analysts inspect every submitted photograph and score to ensure zero biased or incomplete data.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">05</span>
              <h4 className="process-step__title">Analytics Dashboard Delivery</h4>
              <p className="process-step__desc">Receive aggregated branch rankings, compliance heatmaps, and downloadable inspection PDFs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Need Audits Across Multiple PIN Codes?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Share your location list with our audit operations desk for a rapid deployment timeline.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Request Audit Proposal <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
