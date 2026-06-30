import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { clients, testimonials } from "~/data/content";
import { IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import "~/styles/components/clients.css";
import type { Route } from "./+types/clients";

export const meta: Route.MetaFunction = () => [
  { title: "Clients & Testimonials — Trusted by India's Enterprises | WeAct" },
  { name: "description", content: "See how WeAct Global Solutions supports TATA Communications, IndusInd Bank, Future Generali, Dr. Reddy's and more with dependable PAN India verification and field audits." },
];

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".anim-fade-up", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">Trusted Enterprise Network</div>
          <h1 className="page-hero__title">Trusted by India's Industry Leaders</h1>
          <p className="page-hero__subtitle">
            From top private sector banks to global logistics giants — enterprises choose WeAct for uncompromising data security, rapid ground execution, and ISO-certified accuracy across 585+ cities.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Become a Client Partner <IconArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore Verification Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Our Portfolio</span>
            <h2 className="section-header__title">Enterprises That Rely on WeAct</h2>
            <p className="section-header__description">
              We serve market leaders across BFSI, insurance, telecommunications, pharmaceuticals, and digital payments.
            </p>
          </div>
          <div className="client-logos--grid client-logos--light anim-fade-up">
            {clients.map((client) => (
              <div key={client.slug} className="client-logo">
                <span className="client-logo__name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Case Studies */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Operational Impact</span>
            <h2 className="section-header__title">Enterprise Case Snapshots</h2>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--color-primary)", fontWeight: "var(--font-bold)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>BFSI &amp; NBFC Sector</div>
              <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)" }}>65% Faster Loan KYC Turnaround</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                A leading private sector bank integrated our real-time CPV API, reducing physical verification bottlenecks in semi-urban Tier II centers from 5 days to under 24 hours.
              </p>
              <div style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)", color: "var(--color-text)" }}>Result: 15,000+ monthly checks automated</div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--color-primary)", fontWeight: "var(--font-bold)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>Insurance Sector</div>
              <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)" }}>Eliminating False Claim Leakage</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                A top health and life insurer deployed our forensic ground investigators for post-issuance verification, identifying 14% fraudulent medical declarations prior to claim settlement.
              </p>
              <div style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)", color: "var(--color-text)" }}>Result: 99.4% audit accuracy achieved</div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--color-primary)", fontWeight: "var(--font-bold)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>Telecom &amp; Pharma</div>
              <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)" }}>Nationwide Tower &amp; Distributor Audits</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                A major telecom infrastructure provider utilized our 4,000+ field force to conduct quarterly physical audits of remote cell sites across 28 states and 8 Union Territories.
              </p>
              <div style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)", color: "var(--color-text)" }}>Result: 100% remote asset visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Client Testimonials</span>
            <h2 className="section-header__title">What Our Partners Say</h2>
          </div>
          <div className="grid grid--2 gap-8 anim-fade-up">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card" style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "var(--space-8)" }}>
                <p className="testimonial-card__quote" style={{ fontSize: "var(--text-base)", color: "var(--color-text)", fontStyle: "italic", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>
                  "{t.quote}"
                </p>
                <div className="testimonial-card__author" style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                  <div className="testimonial-card__avatar" style={{ width: "48px", height: "48px", borderRadius: "var(--radius-full)", background: "var(--color-primary-50)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "var(--font-bold)", fontSize: "var(--text-lg)" }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-card__name" style={{ fontWeight: "var(--font-bold)", color: "var(--color-text)" }}>{t.name}</div>
                    <div className="testimonial-card__role" style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Join India's Leading Enterprises</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Let us build a customized verification workflow for your business.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Request Enterprise Walkthrough <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
