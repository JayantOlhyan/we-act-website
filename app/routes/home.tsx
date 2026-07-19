import { useRef, useState } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { services, stats, clients, testimonials } from "~/data/content";
import { getIcon, IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import "~/styles/components/hero.css";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [
  { title: "WeAct Global Solutions — PAN India Verification, KYC & Ground Operations" },
  { name: "description", content: "ISO 9001:2015 certified B2B verification, KYC, due diligence, audits & IT support across 585+ cities in India. Trusted by TATA, IndusInd Bank, Future Generali & more." },
  { property: "og:title", content: "WeAct Global Solutions — PAN India Verification & Field Operations" },
  { property: "og:description", content: "Your trusted partner in PAN India verification, support & field operations. 2M+ verifications delivered across 585+ cities." },
  { property: "og:type", content: "website" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const explorerRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState("verification");

  const statsList = Object.values(stats);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    // Hero timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero__label", { y: 20, opacity: 0, duration: 0.6 })
      .from(".hero__title", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3")
      .from(".hero__description", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".floating-badge", { y: 20, opacity: 0, stagger: 0.15, duration: 0.6 }, "-=0.3")
      .from(".hero__actions", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(".hero__trust-item", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.2");

    // Stats counter animation
    gsap.from(".stat-card", {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
    });

    // Workflow steps animation
    gsap.from(".step-card", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: { trigger: workflowRef.current, start: "top 80%", once: true },
    });

    // Services features animation
    gsap.from(".feature-card", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: { trigger: servicesRef.current, start: "top 80%", once: true },
    });

    // Testimonials animation
    gsap.from(".testimonial-card", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: { trigger: testimonialRef.current, start: "top 80%", once: true },
    });
  }, { scope: heroRef });

  const explorerData: Record<string, { title: string; badge: string; sla: string; coverage: string; desc: string; bullet1: string; bullet2: string; status: string }> = {
    verification: {
      title: "Automated & Ground Employee / Address Verification",
      badge: "Verification Engine",
      sla: "4-to-6 Hrs (Metros)",
      coverage: "585+ Cities PAN India",
      desc: "Combines AI OCR and API database checks with physical field visit verification by 4,000+ ground executives with geotagging and real-time photo uploads.",
      bullet1: "Geotagged & timestamped physical residency inspections",
      bullet2: "Automated EPFO / UAN career tenure verification",
      status: "Verified • SLA Met",
    },
    kyc: {
      title: "High-Risk Merchant & Corporate Due Diligence",
      badge: "Regulatory Compliance",
      sla: "24-to-48 Hrs",
      coverage: "19,100+ PIN Codes",
      desc: "Comprehensive promoter screening, court record searches across 3,500+ tribunals, AML sanctions screening, and bank account ownership cross-verification.",
      bullet1: "MCA promoter cross-holding & shell entity identification",
      bullet2: "e-Courts litigation & regulatory penalty screening",
      status: "Cleared • Zero High-Risk",
    },
    audits: {
      title: "Physical Retail, Warehouse & Asset Deployment Audits",
      badge: "Ground Intelligence",
      sla: "Real-Time Portal Feed",
      coverage: "Pan-India Tier I-III",
      desc: "Custom mystery shopping scorecards, POS machine installation audits, distributor stock verification, and franchise brand standard inspections.",
      bullet1: "Terminal serial number & POS standee verification",
      bullet2: "Cold-chain temperature & inventory audit logging",
      status: "Audit Passed • 99.4% Score",
    },
    it: {
      title: "IT Infrastructure Support & Field Engineering AMC",
      badge: "Hardware & Field IT",
      sla: "2-Hr Onsite Dispatch",
      coverage: "Over 1,000+ Sites",
      desc: "Onsite router maintenance, biometric access control deployment, server troubleshooting, and annual maintenance contracts (AMC) nationwide.",
      bullet1: "Biometric & CCTV hardware deployment SLAs",
      bullet2: "Router replacement & network diagnostic troubleshooting",
      status: "Online • Active AMC",
    },
  };

  const currentExplore = explorerData[activeTab];

  return (
    <main ref={heroRef}>
      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__bg-gradient" />
          <div className="hero__bg-pattern" />
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="hero__label">
              <span className="hero__label-dot" />
              ISO 9001:2015 Certified • AI-Led & Ground Verified
            </div>
            <h1 className="hero__title">
              Trust. Transformed by AI.{" "}
              <span className="hero__title-highlight">Verified on the Ground.</span>
            </h1>
            <p className="hero__description">
              From identity and background checks to physical due diligence,
              merchant onboarding, and infrastructure audits — combining intelligent
              automation with 4,000+ field executives across 585+ cities.
            </p>

            {/* Floating Status Badges */}
            <div className="floating-badge-container">
              <span className="floating-badge">⚡ 4-6 Hr Metro Verification SLA</span>
              <span className="floating-badge">🛡️ ISO 9001:2015 Data Security</span>
              <span className="floating-badge">📍 19,100+ PIN Codes Covered</span>
            </div>

            <div className="hero__actions" style={{ marginTop: "var(--space-8)" }}>
              <Link to="/contact" className="btn btn--primary btn--lg">
                Request SLA Proposal
                <IconArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
                Explore Solutions Hub
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="hero__trust">
              <div className="hero__trust-item">
                <span className="hero__trust-value">2M+</span>
                <span className="hero__trust-label">Verifications Delivered</span>
              </div>
              <div className="hero__trust-item">
                <span className="hero__trust-value">585+</span>
                <span className="hero__trust-label">Cities Covered</span>
              </div>
              <div className="hero__trust-item">
                <span className="hero__trust-value">15,000+</span>
                <span className="hero__trust-label">Monthly Field Visits</span>
              </div>
              <div className="hero__trust-item">
                <span className="hero__trust-value">99.7%</span>
                <span className="hero__trust-label">SLA Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Infinite Marquee Client Track ── */}
      <section className="marquee-wrapper" aria-label="Our Trusted Enterprise Clients">
        <div className="marquee-track">
          {[...clients, ...clients].map((client, idx) => (
            <div key={`${client.name}-${idx}`} className="marquee-item">
              <span style={{ color: "var(--color-primary)" }}>✦</span>
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats Strip Section ── */}
      <section className="section" ref={statsRef} style={{ backgroundColor: "rgba(13, 13, 26, 0.4)", borderBottom: "1px solid rgba(255, 255, 255, 0.05)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
        <div className="container">
          <div className="grid grid--4 gap-6">
            {statsList.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-card__value">
                  {stat.display}
                </div>
                <div className="stat-card__label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Solution Explorer Showcase ── */}
      <section className="section" ref={explorerRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Interactive Solution Explorer</span>
            <h2 className="section-header__title">Engineered for High-Velocity Enterprise Verification</h2>
            <p className="section-header__description">
              Select an enterprise domain below to explore live execution SLAs, field force coverage, and automated compliance pipelines.
            </p>
          </div>

          <div className="explorer-tabs">
            <button
              type="button"
              className={`explorer-tab-btn ${activeTab === "verification" ? "explorer-tab-btn--active" : ""}`}
              onClick={() => setActiveTab("verification")}
            >
              Verification Services
            </button>
            <button
              type="button"
              className={`explorer-tab-btn ${activeTab === "kyc" ? "explorer-tab-btn--active" : ""}`}
              onClick={() => setActiveTab("kyc")}
            >
              Due Diligence &amp; KYC
            </button>
            <button
              type="button"
              className={`explorer-tab-btn ${activeTab === "audits" ? "explorer-tab-btn--active" : ""}`}
              onClick={() => setActiveTab("audits")}
            >
              Third-Party Audits
            </button>
            <button
              type="button"
              className={`explorer-tab-btn ${activeTab === "it" ? "explorer-tab-btn--active" : ""}`}
              onClick={() => setActiveTab("it")}
            >
              IT Infrastructure &amp; AMC
            </button>
          </div>

          <div className="explorer-panel">
            <div className="explorer-grid">
              <div>
                <span style={{ display: "inline-block", padding: "4px 12px", background: "rgba(245, 124, 32, 0.2)", borderRadius: "var(--radius-full)", color: "var(--color-primary-light)", fontSize: "var(--text-xs)", fontWeight: "var(--font-semibold)", marginBottom: "var(--space-4)" }}>
                  {currentExplore.badge}
                </span>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "var(--space-4)", color: "#fff" }}>
                  {currentExplore.title}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-6)" }}>
                  {currentExplore.desc}
                </p>
                <ul className="flex flex--col gap-3" style={{ marginBottom: "var(--space-8)" }}>
                  <li className="flex gap-2" style={{ alignItems: "center" }}>
                    <IconCheck size={18} className="text-primary" />
                    <span>{currentExplore.bullet1}</span>
                  </li>
                  <li className="flex gap-2" style={{ alignItems: "center" }}>
                    <IconCheck size={18} className="text-primary" />
                    <span>{currentExplore.bullet2}</span>
                  </li>
                </ul>
                <Link to={`/services/${activeTab === "kyc" ? "due-diligence" : activeTab === "it" ? "it-support" : activeTab}`} className="btn btn--primary">
                  Explore Full Specifications <IconArrowRight size={18} />
                </Link>
              </div>

              {/* Simulated Live Dashboard Feed */}
              <div style={{ background: "rgba(0, 0, 0, 0.4)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
                <div className="flex flex--between" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "var(--space-4)", marginBottom: "var(--space-6)" }}>
                  <span style={{ fontSize: "var(--text-xs)", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase" }}>Live Telemetry Feed</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--text-xs)", color: "#10B981" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                    {currentExplore.status}
                  </span>
                </div>

                <div className="grid grid--2 gap-4">
                  <div className="explorer-metric-box">
                    <span style={{ fontSize: "var(--text-xs)", color: "rgba(255, 255, 255, 0.6)" }}>Target SLA Turnaround</span>
                    <span style={{ fontSize: "var(--text-xl)", fontWeight: "bold", color: "var(--color-primary-light)" }}>{currentExplore.sla}</span>
                  </div>
                  <div className="explorer-metric-box">
                    <span style={{ fontSize: "var(--text-xs)", color: "rgba(255, 255, 255, 0.6)" }}>Pan-India Reach</span>
                    <span style={{ fontSize: "var(--text-xl)", fontWeight: "bold", color: "#fff" }}>{currentExplore.coverage}</span>
                  </div>
                </div>

                <div style={{ marginTop: "var(--space-4)", padding: "var(--space-4)", background: "rgba(255, 255, 255, 0.03)", borderRadius: "var(--radius-md)", fontSize: "var(--text-xs)", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconShield size={16} className="text-primary" />
                  <span>ISO 9001:2015 &amp; DPDP Act 2023 compliant encrypted workflow.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scroll-Driven 4-Step Ground Pipeline ── */}
      <section className="section section--alt" ref={workflowRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Execution Architecture</span>
            <h2 className="section-header__title">How WeAct Delivers Ground Verification at Scale</h2>
            <p className="section-header__description">
              Our 4-step hybrid verification framework blends automated database cross-checks with physical field inspections across India.
            </p>
          </div>

          <div className="process-grid">
            <div className="step-card">
              <div className="step-card__number">01</div>
              <h3 className="step-card__title">API / Portal Intake</h3>
              <p className="step-card__description">Cases ingested securely via encrypted REST APIs, CSV batch uploads, or enterprise client portal.</p>
            </div>
            <div className="step-card">
              <div className="step-card__number">02</div>
              <h3 className="step-card__title">AI OCR &amp; Routing</h3>
              <p className="step-card__description">Automated document parsing and real-time dispatch to the nearest field officer based on PIN code coordinates.</p>
            </div>
            <div className="step-card">
              <div className="step-card__number">03</div>
              <h3 className="step-card__title">Geotagged Visit</h3>
              <p className="step-card__description">Onsite physical inspection with timestamped photos, GPS coordinates, and digital signatures.</p>
            </div>
            <div className="step-card">
              <div className="step-card__number">04</div>
              <h3 className="step-card__title">2-Tier QC &amp; Webhook</h3>
              <p className="step-card__description">Rigorous desk audit verification followed by instant JSON webhook report delivery to client systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid Section ── */}
      <section className="section" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Core Offerings</span>
            <h2 className="section-header__title">Comprehensive Verification &amp; Support Hubs</h2>
            <p className="section-header__description">
              Explore our four specialized operational hubs tailored for banking, insurance, telecom, and corporate leaders.
            </p>
          </div>
          <div className="grid grid--2 gap-8">
            {services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <Link key={service.id} to={`/services/${service.slug}`} style={{ textDecoration: "none" }}>
                  <div className="feature-card">
                    <div className="card__icon" style={{ marginBottom: "var(--space-4)" }}>
                      <Icon size={28} />
                    </div>
                    <h3 className="feature-card__title">{service.title}</h3>
                    <p className="feature-card__description">{service.description}</p>
                    <span className="card__link" style={{ marginTop: "var(--space-4)", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--color-primary)", fontWeight: "var(--font-semibold)" }}>
                      Explore Specifications <IconArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="section section--alt" ref={testimonialRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Client Confidence</span>
            <h2 className="section-header__title">Proven Impact Across India</h2>
          </div>

          <div className="grid grid--2 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-card__quote">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Ready to Scale Your Verification Operations?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Connect with our solution architects today for a custom SLA proposal across India&apos;s 585+ cities.
          </p>
          <div className="flex gap-4 flex--center flex--wrap">
            <Link to="/contact" className="btn btn--white btn--lg">
              Schedule Ground Demo <IconArrowRight size={18} />
            </Link>
            <Link to="/coverage" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Check PIN Code Reach
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
