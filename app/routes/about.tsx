import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { company, stats } from "~/data/content";
import { IconCheck, IconArrowRight, IconShield, IconUsers } from "~/components/ui/icons";
import type { Route } from "./+types/about";

export const meta: Route.MetaFunction = () => [
  { title: "About Us — WeAct Global Solutions | ISO 9001:2015 Certified" },
  { name: "description", content: "Learn about WeAct Global Solutions, India's premier B2B verification, KYC, and field operations company founded in 2020 by Director Neeraj Juneja." },
];

export default function About() {
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
          <div className="page-hero__badge">Corporate Overview</div>
          <h1 className="page-hero__title">Driving Ground Verification Excellence Across India</h1>
          <p className="page-hero__subtitle">
            Founded in 2020, {company.legalName} has grown into India's most dependable ground verification and infrastructure support partner, operating across 585+ cities with over 4,000 field executives.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Contact Executive Leadership <IconArrowRight size={18} />
            </Link>
            <Link to="/clients" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              View Client Portfolio
            </Link>
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
                {stats.satisfaction.display}
              </div>
              <div style={{ color: "var(--color-gray-400)", fontSize: "var(--text-sm)" }}>{stats.satisfaction.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Mission & Leadership */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2 gap-8 anim-fade-up">
            <div className="card" style={{ padding: "var(--space-10)" }}>
              <h2 style={{ marginBottom: "var(--space-4)" }}>Our Mission</h2>
              <p style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-6)", color: "var(--color-text-muted)" }}>
                To empower enterprises with uncompromising trust through technology-enabled, physical verification and field support services that eliminate fraud, accelerate onboarding, and ensure 100% regulatory compliance.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <li className="flex flex--center" style={{ justifyContent: "flex-start", gap: "var(--space-3)", color: "var(--color-text)" }}>
                  <IconCheck size={20} className="text-primary" /> Real-time mobile app and ERP data synchronization
                </li>
                <li className="flex flex--center" style={{ justifyContent: "flex-start", gap: "var(--space-3)", color: "var(--color-text)" }}>
                  <IconCheck size={20} className="text-primary" /> Multi-tiered quality auditing before report dispatch
                </li>
                <li className="flex flex--center" style={{ justifyContent: "flex-start", gap: "var(--space-3)", color: "var(--color-text)" }}>
                  <IconCheck size={20} className="text-primary" /> Dedicated PIN-code mapped field teams
                </li>
              </ul>
            </div>

            <div className="card" style={{ padding: "var(--space-10)", backgroundColor: "var(--color-primary-50)", borderColor: "var(--color-primary-200)" }}>
              <div className="flex flex--center" style={{ width: "48px", height: "48px", borderRadius: "var(--radius-lg)", backgroundColor: "var(--color-primary)", color: "#fff", marginBottom: "var(--space-4)" }}>
                <IconShield size={24} />
              </div>
              <h2 style={{ marginBottom: "var(--space-4)" }}>ISO 9001:2015 Certified</h2>
              <p style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-6)", color: "var(--color-text-muted)" }}>
                Our operations strictly adhere to international quality management standards. Every verification case undergoes stringent multi-level QC checkpoints to ensure zero false reporting and complete data security under DPDP Act 2023.
              </p>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text)", borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-4)" }}>
                <strong>Director:</strong> {company.director} &bull; <strong>Founded:</strong> {company.founded}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Compliance Details */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Corporate Governance</span>
            <h2 className="section-header__title">Entity Registration &amp; Compliance</h2>
            <p className="section-header__description">
              As a formal B2B solutions provider, we maintain complete transparency in our corporate governance and regulatory filings.
            </p>
          </div>

          <div className="grid grid--3 gap-8 anim-fade-up">
            <div className="feature-card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>Legal Entity Name</div>
              <div style={{ fontWeight: "var(--font-bold)", fontSize: "var(--text-lg)", color: "var(--color-text)" }}>{company.legalName}</div>
            </div>
            <div className="feature-card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>Corporate Identity Number (CIN)</div>
              <div style={{ fontWeight: "var(--font-bold)", fontSize: "var(--text-lg)", color: "var(--color-primary)" }}>{company.cin}</div>
            </div>
            <div className="feature-card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>GST Registration (GSTIN)</div>
              <div style={{ fontWeight: "var(--font-bold)", fontSize: "var(--text-lg)", color: "var(--color-text)" }}>{company.gstin}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Ready to Elevate Your Verification Standards?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Partner with India's most trusted field operations network. Get custom TATs and SLA-backed quality today.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Schedule a Consultation <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
