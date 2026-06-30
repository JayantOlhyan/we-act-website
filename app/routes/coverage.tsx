import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { stats } from "~/data/content";
import { IconArrowRight, IconCheck, IconMapPin } from "~/components/ui/icons";
import type { Route } from "./+types/coverage";

export const meta: Route.MetaFunction = () => [
  { title: "PAN India Coverage — 585+ Cities & 4,000+ Field Executives | WeAct" },
  { name: "description", content: "Explore WeAct's nationwide reach covering Tier I metros, Tier II hubs, and Tier III towns across 28 states and 8 union territories with native language fluency." },
];

export default function Coverage() {
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
          <div className="page-hero__badge">Nationwide Footprint</div>
          <h1 className="page-hero__title">Every PIN Code. Verified on the Ground.</h1>
          <p className="page-hero__subtitle">
            Our operational network extends across 585+ cities and towns, supported by 4,000+ PIN-code mapped investigators with deep regional expertise and native dialect fluency across 28 states and 8 Union Territories.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Check PIN Code Feasibility <IconArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section--dark">
        <div className="container anim-fade-up">
          <div className="grid grid--4 gap-8 text-center">
            <div>
              <div style={{ fontSize: "var(--text-4xl)", fontWeight: "var(--font-extrabold)", color: "var(--color-primary)", marginBottom: "var(--space-2)" }}>
                {stats.cities.display}
              </div>
              <div style={{ color: "var(--color-gray-400)", fontSize: "var(--text-sm)" }}>{stats.cities.label}</div>
            </div>
            <div>
              <div style={{ fontSize: "var(--text-4xl)", fontWeight: "var(--font-extrabold)", color: "var(--color-primary)", marginBottom: "var(--space-2)" }}>
                {stats.executives.display}
              </div>
              <div style={{ color: "var(--color-gray-400)", fontSize: "var(--text-sm)" }}>{stats.executives.label}</div>
            </div>
            <div>
              <div style={{ fontSize: "var(--text-4xl)", fontWeight: "var(--font-extrabold)", color: "var(--color-primary)", marginBottom: "var(--space-2)" }}>
                28 + 8
              </div>
              <div style={{ color: "var(--color-gray-400)", fontSize: "var(--text-sm)" }}>States &amp; UTs Covered</div>
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

      {/* Tier Breakdown Matrix */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Tiered Penetration</span>
            <h2 className="section-header__title">Urban Speed, Rural Precision</h2>
            <p className="section-header__description">
              How we deploy ground personnel across distinct demographic tiers across India.
            </p>
          </div>

          <div className="feature-grid anim-fade-up">
            <div className="feature-card">
              <div className="feature-card__icon"><IconMapPin size={26} /></div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--color-primary)", fontWeight: "var(--font-bold)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>Tier I Metropolitan Hubs</div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Delhi NCR, Mumbai, Bengaluru, Chennai</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                High-density mobile investigator fleets equipped with instant automated route optimization for rapid corporate onboarding.
              </p>
              <div style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)", color: "var(--color-text)" }}>Average SLA: 12 to 24 Hours</div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconMapPin size={26} /></div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--color-primary)", fontWeight: "var(--font-bold)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>Tier II State Capitals</div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Jaipur, Lucknow, Ahmedabad, Pune, Indore</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Permanent regional coordination hubs bridging banking and insurance verification pipelines with local municipal compliance.
              </p>
              <div style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)", color: "var(--color-text)" }}>Average SLA: 24 to 36 Hours</div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconMapPin size={26} /></div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--color-primary)", fontWeight: "var(--font-bold)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>Tier III &amp; Rural Districts</div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Tehsils, Talukas &amp; Industrial clusters</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Resident PIN-mapped field personnel eliminating cross-district travel delays and high logistics expenses.
              </p>
              <div style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)", color: "var(--color-text)" }}>Average SLA: 48 Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Capabilities */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--2 gap-8 anim-fade-up">
            <div className="feature-card">
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>Eliminating Logistics Bottlenecks</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                While major metros are easily serviced by traditional agencies, semi-urban and rural markets present severe travel bottlenecks. WeAct solves this through hyper-local recruitment and PIN-code routing.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Investigators residing permanently within assigned PIN codes</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Zero travel delays or outstation reimbursement markups</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Consistent SLAs regardless of geographic remoteness</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>Native Dialect &amp; Community Fluency</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Ground audits require sensitive interaction with neighbors, HR departments, and village panchayats. Our agents speak the native tongue, ensuring zero friction and authentic reporting.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Fluent across Hindi, Marathi, Gujarati, Tamil, Telugu &amp; Bengali</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> High community acceptance during Contact Point Verifications</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Automated translation back into central English dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Need Verification in Specific Districts?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Provide your target PIN codes and get instant deployment timelines.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Check PIN Code Feasibility <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
