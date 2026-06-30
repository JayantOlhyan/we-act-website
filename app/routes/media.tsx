import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { mediaMentions } from "~/data/content";
import { IconArrowRight, IconFileText } from "~/components/ui/icons";
import type { Route } from "./+types/media";

export const meta: Route.MetaFunction = () => [
  { title: "Media Mentions & Press Coverage — WeAct Global Solutions | WeAct" },
  { name: "description", content: "Explore news coverage and press mentions of WeAct Global Solutions in leading national business and finance publications." },
];

export default function Media() {
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

  const mediaSpotlights = [
    {
      publication: "The Economic Times",
      date: "October 2025",
      headline: "How AI-Driven Field Verification is Solving India's Loan Onboarding Bottleneck",
      excerpt: "Featuring WeAct Global Solutions' PIN-code routing model that enabled top NBFCs to slash semi-urban Contact Point Verification TATs by over 60%.",
      tag: "BFSI Innovation"
    },
    {
      publication: "LiveMint",
      date: "January 2026",
      headline: "WeAct Crosses 4,000 Field Executive Milestone Across Tier II & III Towns",
      excerpt: "Director Neeraj Juneja outlines the company's expansion into 585+ cities, bringing formal SLA-backed audit standards to rural distribution hubs.",
      tag: "Company Expansion"
    },
    {
      publication: "Business Standard",
      date: "March 2026",
      headline: "Mitigating Insurance Fraud: The Rise of Geotagged Physical Audits",
      excerpt: "An in-depth analysis on how tamper-proof cellular timestamping and GPS geofencing are eliminating leakages in health and commercial claim underwriting.",
      tag: "Risk & Compliance"
    }
  ];

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">Press &amp; Media Room</div>
          <h1 className="page-hero__title">In the Spotlight</h1>
          <p className="page-hero__subtitle">
            Featured across national business portals for our rapid expansion, corporate governance standards, and technology-led field operations model across India.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Media Inquiries <IconArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Corporate Factsheet
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Press Spotlights */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Editorial Coverage</span>
            <h2 className="section-header__title">Recent Press Features</h2>
          </div>

          <div className="feature-grid anim-fade-up">
            {mediaSpotlights.map((item, idx) => (
              <div key={idx} className="feature-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                    <span style={{ fontWeight: "var(--font-extrabold)", fontSize: "var(--text-lg)", color: "var(--color-primary)" }}>{item.publication}</span>
                    <span style={{ fontSize: "var(--text-xs)", background: "var(--color-gray-100)", padding: "4px 8px", borderRadius: "var(--radius-full)", color: "var(--color-text-muted)" }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)", lineHeight: "1.4" }}>{item.headline}</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-6)" }}>
                    "{item.excerpt}"
                  </p>
                </div>
                <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-4)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-semibold)", color: "var(--color-text)" }}>Topic: {item.tag}</span>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--color-primary)", fontWeight: "var(--font-bold)" }}>Verified Archive</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions Badge Grid */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Syndication Network</span>
            <h2 className="section-header__title">Featured Publications</h2>
          </div>
          <div className="grid grid--3 gap-8 anim-fade-up">
            {mediaMentions.map((media) => (
              <div key={media.name} className="feature-card" style={{ textAlign: "center", padding: "var(--space-8)" }}>
                <div style={{ fontSize: "var(--text-xl)", fontWeight: "var(--font-extrabold)", color: "var(--color-text)", marginBottom: "var(--space-2)" }}>
                  {media.name}
                </div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--color-primary)", textTransform: "uppercase", fontWeight: "var(--font-bold)" }}>
                  Press Mention
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Journalist or Industry Analyst?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Get in touch with our corporate communications team for interviews or data insights on India's verification sector.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Contact Communications Desk <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
