import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { services } from "~/data/content";
import { getIcon, IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import type { Route } from "./+types/services";

export const meta: Route.MetaFunction = () => [
  { title: "Services & Solutions — Enterprise Verification & Field Operations | WeAct" },
  { name: "description", content: "Explore WeAct's comprehensive suite of background screening, KYC due diligence, third-party physical audits, and IT infrastructure support across 585+ cities." },
];

export default function Services() {
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
          <div className="page-hero__badge">Enterprise Suite</div>
          <h1 className="page-hero__title">End-to-End Ground Operations &amp; Verification Platform</h1>
          <p className="page-hero__subtitle">
            Combining technology-driven API workflows with a dedicated network of 4,000+ PIN-code mapped field investigators across 585+ cities to eliminate fraud and accelerate corporate onboarding.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request Enterprise SLA <IconArrowRight size={18} />
            </Link>
            <Link to="/coverage" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore PAN India Network
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Core Capabilities</span>
            <h2 className="section-header__title">Specialized Solution Hubs</h2>
            <p className="section-header__description">
              SLA-backed verification and ground operations tailored for banks, insurers, NBFCs, and retail networks.
            </p>
          </div>

          <div className="grid grid--2 gap-8 anim-fade-up">
            {services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <div key={service.id} className="feature-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "var(--space-8)" }}>
                  <div>
                    <div className="feature-card__icon">
                      <Icon size={28} />
                    </div>
                    <h3 style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--space-3)", color: "var(--color-text)" }}>{service.title}</h3>
                    <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>{service.description}</p>
                    <ul className="feature-card__list" style={{ marginBottom: "var(--space-8)" }}>
                      <li className="feature-card__list-item">
                        <IconCheck size={18} className="text-primary" /> Real-time GPS &amp; geotagged reporting across 585+ cities
                      </li>
                      <li className="feature-card__list-item">
                        <IconCheck size={18} className="text-primary" /> Multi-tiered quality audit before client webhook delivery
                      </li>
                      <li className="feature-card__list-item">
                        <IconCheck size={18} className="text-primary" /> Strict adherence to DPDP Act 2023 &amp; ISO 9001:2015
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link to={`/services/${service.slug}`} className="btn btn--outline" style={{ width: "100%", justifyContent: "center" }}>
                      Explore Deep Dive Specs
                      <IconArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Operational Workflow</span>
            <h2 className="section-header__title">Our 4-Step Execution Pipeline</h2>
            <p className="section-header__description">
              Precision engineered for high velocity, forensic accuracy, and complete data security.
            </p>
          </div>

          <div className="process-grid anim-fade-up">
            <div className="step-card">
              <div className="step-card__number">01</div>
              <h3 className="step-card__title">Case Intake &amp; Routing</h3>
              <p className="step-card__description">Case received via REST API or enterprise dashboard and mapped automatically to the closest PIN-code field executive within seconds.</p>
            </div>
            <div className="step-card">
              <div className="step-card__number">02</div>
              <h3 className="step-card__title">Onsite Field Verification</h3>
              <p className="step-card__description">Assigned investigator conducts physical visits, capturing tamper-proof geotagged photos, coordinates, and digital signatures.</p>
            </div>
            <div className="step-card">
              <div className="step-card__number">03</div>
              <h3 className="step-card__title">Multi-Tier Quality Audit</h3>
              <p className="step-card__description">Internal forensic quality analysts verify evidence authenticity, document timestamps, and statutory compliance before sign-off.</p>
            </div>
            <div className="step-card">
              <div className="step-card__number">04</div>
              <h3 className="step-card__title">Webhook &amp; Dossier Delivery</h3>
              <p className="step-card__description">Instant transmission of digitally signed PDF reports and automated webhook updates back into your core LMS or HRIS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Need a Custom Enterprise Verification Package?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Discuss volume tiers, dedicated field teams, and custom API integration timelines with our solutions architects.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Request Enterprise Pricing <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
