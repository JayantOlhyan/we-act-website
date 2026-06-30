import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { industries } from "~/data/content";
import { getIcon, IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import type { Route } from "./+types/industries";

export const meta: Route.MetaFunction = () => [
  { title: "Industries Served — Tailored Verification & Compliance | WeAct" },
  { name: "description", content: "Dedicated verification, KYC, physical ground audits, and infrastructure solutions engineered for BFSI, Insurance, NBFC, Telecom, Pharma, and Digital Payments sectors across India." },
];

export default function Industries() {
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
          <div className="page-hero__badge">Regulated Sectors</div>
          <h1 className="page-hero__title">Specialized Solutions for Highly Regulated Industries</h1>
          <p className="page-hero__subtitle">
            From RBI compliance in banking to remote cell site audits in telecommunications — customized ground verification workflows engineered for your industry's exact regulatory and risk profile across 585+ cities.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Consult Sector Specialist <IconArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Explore Services Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Sector Portfolios</span>
            <h2 className="section-header__title">Industry-Specific Execution Models</h2>
            <p className="section-header__description">
              Select your vertical to explore our dedicated screening protocols, compliance checklists, and ground audit frameworks.
            </p>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            {industries.map((industry) => {
              const Icon = getIcon(industry.icon);
              return (
                <div key={industry.id} className="feature-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "var(--space-8)" }}>
                  <div>
                    <div className="feature-card__icon">
                      <Icon size={28} />
                    </div>
                    <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)", color: "var(--color-text)" }}>{industry.title}</h3>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>{industry.description}</p>
                    <ul className="feature-card__list" style={{ marginBottom: "var(--space-6)" }}>
                      <li className="feature-card__list-item">
                        <IconCheck size={16} className="text-primary" /> Dedicated sector QC checkpoints
                      </li>
                      <li className="feature-card__list-item">
                        <IconCheck size={16} className="text-primary" /> Rapid SLA execution across Tier II &amp; III hubs
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link to={`/industries/${industry.slug}`} className="btn btn--outline" style={{ width: "100%", justifyContent: "center" }}>
                      Explore Sector Specs <IconArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Compliance Matrix */}
      <section className="section section--alt">
        <div className="container anim-fade-up">
          <div className="section-header">
            <span className="section-header__label">Regulatory Alignment</span>
            <h2 className="section-header__title">Built for Audit-Ready Operations</h2>
          </div>
          <div className="industry-matrix">
            <table className="industry-matrix__table">
              <thead>
                <tr>
                  <th>Industry Sector</th>
                  <th>Primary Regulatory Mandate</th>
                  <th>WeAct Solution Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>BFSI &amp; Banking</strong></td>
                  <td>RBI Master Directions on KYC &amp; Outsourcing</td>
                  <td>Real-time Contact Point Verification (CPV) with Geotagged timestamps &amp; encrypted webhook delivery.</td>
                </tr>
                <tr>
                  <td><strong>Insurance</strong></td>
                  <td>IRDAI Fraud Risk Mitigation Guidelines</td>
                  <td>Forensic hospital records checks, pre-policy medical physical audits, and post-issuance CPV.</td>
                </tr>
                <tr>
                  <td><strong>NBFC &amp; Fintech</strong></td>
                  <td>Digital Lending Guidelines &amp; DPDP Act 2023</td>
                  <td>API-integrated instant address verification and physical distributor credit underwriting audits.</td>
                </tr>
                <tr>
                  <td><strong>Telecom &amp; Pharma</strong></td>
                  <td>DoT Cell Site Security &amp; CDSCO Stockist Audits</td>
                  <td>Geofenced physical asset verification, generator diesel audits, and cold-chain warehouse inspection.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Operating in a Regulated Vertical?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Let our compliance architects design an SLA-backed workflow tailored exactly to your sector.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Consult Sector Specialist <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
