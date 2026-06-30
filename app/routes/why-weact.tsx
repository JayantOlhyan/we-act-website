import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { advantages, stats } from "~/data/content";
import { getIcon, IconArrowRight, IconCheck } from "~/components/ui/icons";
import type { Route } from "./+types/why-weact";

export const meta: Route.MetaFunction = () => [
  { title: "Why Choose WeAct — Enterprise Ground Verification & Field Architecture | WeAct" },
  { name: "description", content: "Discover why India's leading banks, insurers, and telecom giants trust WeAct for PIN-code mapped field verification, real-time ERP orchestration, and ISO-certified quality." },
];

export default function WhyWeAct() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".anim-fade-up", {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">The Ground Advantage</div>
          <h1 className="page-hero__title">Why Leading Enterprises Choose WeAct</h1>
          <p className="page-hero__subtitle">
            While API databases verify digital identities, only physical verification confirms real-world presence. We bridge digital speed with on-ground reality through 4,000+ PIN-code mapped field agents and AI-automated workflow orchestration.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Partner With WeAct <IconArrowRight size={18} />
            </Link>
            <Link to="/coverage" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore PAN India Network
            </Link>
          </div>
        </div>
      </section>

      {/* 8 Core Differentiators */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Operational Pillars</span>
            <h2 className="section-header__title">Built for Scale, Accuracy &amp; Compliance</h2>
            <p className="section-header__description">
              Our infrastructure combines proprietary field automation technology with rigorous human oversight.
            </p>
          </div>

          <div className="feature-grid anim-fade-up">
            {advantages.map((adv) => {
              const Icon = getIcon(adv.icon);
              return (
                <div key={adv.title} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon size={26} />
                  </div>
                  <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>{adv.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)" }}>
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Traditional vs WeAct */}
      <section className="section section--alt">
        <div className="container anim-fade-up">
          <div className="section-header">
            <span className="section-header__label">Competitive Matrix</span>
            <h2 className="section-header__title">Traditional Vendors vs. WeAct Architecture</h2>
          </div>

          <div style={{ overflowX: "auto", background: "var(--color-white)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "var(--color-gray-50)", borderBottom: "2px solid var(--color-border)" }}>
                  <th style={{ padding: "var(--space-5) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: "var(--font-bold)", color: "var(--color-text)" }}>Evaluation Criteria</th>
                  <th style={{ padding: "var(--space-5) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: "var(--font-bold)", color: "var(--color-text-muted)" }}>Legacy Verification Agencies</th>
                  <th style={{ padding: "var(--space-5) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: "var(--font-bold)", color: "var(--color-primary)", background: "var(--color-primary-50)" }}>WeAct Global Solutions</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontWeight: "var(--font-semibold)", fontSize: "var(--text-sm)" }}>Field Allocation Model</td>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>Manual spreadsheet assignment leading to SLA delays</td>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: "var(--font-semibold)", color: "var(--color-text)", background: "var(--color-primary-50)" }}>Automated PIN-code geo-routing to closest agent</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontWeight: "var(--font-semibold)", fontSize: "var(--text-sm)" }}>Evidence Verification</td>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>Unverified paper forms or simple camera photos</td>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: "var(--font-semibold)", color: "var(--color-text)", background: "var(--color-primary-50)" }}>Encrypted GPS coordinates, cell timestamp &amp; OCR validation</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontWeight: "var(--font-semibold)", fontSize: "var(--text-sm)" }}>Turnaround Time (TAT)</td>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>3 to 7 business days for physical checks</td>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: "var(--font-semibold)", color: "var(--color-text)", background: "var(--color-primary-50)" }}>24 to 48 hours for urban &amp; Tier II locations</td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontWeight: "var(--font-semibold)", fontSize: "var(--text-sm)" }}>System Integration</td>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>Email attachments and manual CSV uploads</td>
                  <td style={{ padding: "var(--space-4) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: "var(--font-semibold)", color: "var(--color-text)", background: "var(--color-primary-50)" }}>Turnkey REST APIs &amp; direct HRIS/ERP webhooks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section section--dark">
        <div className="container anim-fade-up">
          <div className="grid grid--4 gap-8 text-center">
            <div>
              <div style={{ fontSize: "var(--text-4xl)", fontWeight: "var(--font-extrabold)", color: "var(--color-primary)", marginBottom: "var(--space-2)" }}>
                {stats.verifications.display}
              </div>
              <div style={{ color: "var(--color-gray-400)", fontSize: "var(--text-sm)" }}>{stats.verifications.label}</div>
            </div>
            <div>
              <div style={{ fontSize: "var(--text-4xl)", fontWeight: "var(--font-extrabold)", color: "var(--color-primary)", marginBottom: "var(--space-2)" }}>
                {stats.executives.display}
              </div>
              <div style={{ color: "var(--color-gray-400)", fontSize: "var(--text-sm)" }}>{stats.executives.label}</div>
            </div>
            <div>
              <div style={{ fontSize: "var(--text-4xl)", fontWeight: "var(--font-extrabold)", color: "var(--color-primary)", marginBottom: "var(--space-2)" }}>
                {stats.cities.display}
              </div>
              <div style={{ color: "var(--color-gray-400)", fontSize: "var(--text-sm)" }}>{stats.cities.label}</div>
            </div>
            <div>
              <div style={{ fontSize: "var(--text-4xl)", fontWeight: "var(--font-extrabold)", color: "var(--color-primary)", marginBottom: "var(--space-2)" }}>
                {stats.tat.display}
              </div>
              <div style={{ color: "var(--color-gray-400)", fontSize: "var(--text-sm)" }}>{stats.tat.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Ready to Upgrade Your Verification Engine?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Let our solutions team demonstrate live API intake and PIN-code routing.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Schedule Live Demo <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
