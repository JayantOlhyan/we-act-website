import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import type { Route } from "./+types/industries.telecom";

export const meta: Route.MetaFunction = () => [
  { title: "Telecom Cell Site Audits & Verification — WeAct Global Solutions" },
  { name: "description", content: "Physical infrastructure audits, SIM subscriber address verification, cell tower maintenance checks, and distributor KYC for telecom leaders like TATA Communications." },
];

export default function IndustryTelecom() {
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
          <div className="page-hero__badge">Telecom Sector</div>
          <h1 className="page-hero__title">Telecom Infrastructure &amp; Subscriber Verification</h1>
          <p className="page-hero__subtitle">
            Providing comprehensive physical cell tower audits, subscriber address verification, channel partner due diligence, and network hardware maintenance across remote and metro locations in India.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request Telecom Case Study <IconArrowRight size={18} />
            </Link>
            <Link to="/services/audits" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore Third-Party Audits
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges vs Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Operational Challenges</span>
            <h2 className="section-header__title">Securing Nationwide Telecom Networks</h2>
            <p className="section-header__description">
              Managing thousands of remote cell towers and distributor channels requires strict on-ground oversight and audit compliance.
            </p>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            <div className="feature-card">
              <h3 className="feature-card__title">Cell Tower &amp; Asset Audits</h3>
              <p className="feature-card__description">Unannounced physical inspections of remote cell towers to verify generator diesel levels, battery health, and structural compliance.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Geotagged tower site photographs</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Prevention of fuel &amp; battery theft</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Channel &amp; Distributor KYC</h3>
              <p className="feature-card__description">Onsite physical screening of SIM distributors, franchise retail outlets, and master distributors before network authorization.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Storefront &amp; warehouse inventory check</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> RoC &amp; GST compliance verification</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3 className="feature-card__title">Subscriber &amp; Enterprise CPV</h3>
              <p className="feature-card__description">Strict physical address verification for high-value enterprise leased-line deployments and bulk corporate subscriber onboarding.</p>
              <ul className="feature-card__list" style={{ marginTop: "var(--space-4)" }}>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> SLA-backed corporate site inspection</li>
                <li className="feature-card__list-item"><IconCheck size={16} className="text-primary"/> Instant API dossier generation</li>
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
                <span className="section-header__label" style={{ color: "var(--color-primary)" }}>Sector Leadership</span>
                <h2 style={{ marginBottom: "var(--space-4)" }}>Trusted by Telecom Giants</h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>
                  WeAct supports national telecom infrastructure leaders including <strong>TATA Communications</strong> with remote cell site verification, network engineering audits, and distributor compliance checks.
                </p>
                <div className="flex gap-4">
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>15,000+</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Monthly Field Calls</div>
                  </div>
                  <div style={{ background: "var(--color-gray-50)", padding: "var(--space-4)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "bold", color: "var(--color-primary)" }}>99.9%</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>GPS Geotag Accuracy</div>
                  </div>
                </div>
              </div>
              <div style={{ background: "var(--color-primary-50)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-primary-200)" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>DoT Regulatory Compliance</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text)", lineHeight: "var(--leading-relaxed)" }}>
                  All field verification reports and subscriber KYC documents comply strictly with Department of Telecommunications (DoT) verification mandates and security guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Secure Your Telecom Infrastructure</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Discuss custom cell site audit schedules with our telecom operations team today.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Consult Telecom Specialists <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
