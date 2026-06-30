import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconArrowRight, IconFileText } from "~/components/ui/icons";
import type { Route } from "./+types/blog";

export const meta: Route.MetaFunction = () => [
  { title: "Enterprise Verification & Compliance Blog | WeAct Global Solutions" },
  { name: "description", content: "Expert research, whitepapers, and operational guides on ground verification, KYC screening, DPDP Act compliance, and field infrastructure in India." },
];

export default function Blog() {
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

  const articles = [
    {
      slug: "dpdp-act-2023-ground-verification",
      category: "Legal & Compliance",
      readTime: "7 min read",
      date: "June 2026",
      title: "DPDP Act 2023 & Ground Verification: What Chief Risk Officers Must Know",
      summary: "India's Digital Personal Data Protection Act enforces strict purpose limitations and notice mandates. Explore how enterprise screening protocols must adapt physical evidence gathering to remain compliant."
    },
    {
      slug: "eliminating-cpv-delays-semi-urban-india",
      category: "Banking & NBFC",
      readTime: "5 min read",
      date: "May 2026",
      title: "Eliminating Contact Point Verification (CPV) Bottlenecks in Semi-Urban India",
      summary: "How PIN-code mapped investigator routing and automated cellular geofencing cut loan onboarding turnaround times from 5 days to under 24 hours."
    },
    {
      slug: "why-api-only-verification-fails-tier-3",
      category: "Supply Chain Risk",
      readTime: "6 min read",
      date: "April 2026",
      title: "Why API-Only Screening Falls Short When Onboarding Tier III Stockists",
      summary: "Digital databases only confirm historical records. Discover why physical site visits and inventory audits are essential to detect shell distributors and grey-market operations."
    },
    {
      slug: "retail-mystery-shopping-best-practices",
      category: "Audit & Quality",
      readTime: "8 min read",
      date: "March 2026",
      title: "Designing Standardized Scorecards for Nationwide Retail Mystery Audits",
      summary: "A step-by-step guide for retail heads on implementing objective, evidence-backed mystery shopping campaigns across 100+ store locations."
    },
    {
      slug: "telecom-tower-audit-compliance",
      category: "Infrastructure",
      readTime: "6 min read",
      date: "February 2026",
      title: "Remote Asset Tracking: Auditing Telecom Towers & Cell Sites at Scale",
      summary: "Managing diesel generator logs, battery backup assets, and perimeter security across remote rural towers using geotagged mobile inspection apps."
    },
    {
      slug: "iso-9001-quality-control-in-background-checks",
      category: "Quality Assurance",
      readTime: "5 min read",
      date: "January 2026",
      title: "ISO 9001:2015 Quality Controls in High-Volume Background Screening",
      summary: "Inside our 3-tier quality control architecture that eliminates human error and ensures 99.4%+ report accuracy before client webhook delivery."
    }
  ];

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">Knowledge &amp; Insights</div>
          <h1 className="page-hero__title">Research &amp; Operational Perspectives</h1>
          <p className="page-hero__subtitle">
            Authoritative intelligence on background verification benchmarks, regulatory mandates, and field operations management across Indian enterprises.
          </p>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Editorial Articles</span>
            <h2 className="section-header__title">Latest Perspectives</h2>
          </div>

          <div className="feature-grid anim-fade-up">
            {articles.map((art) => (
              <div key={art.slug} className="feature-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                    <span style={{ fontSize: "var(--text-xs)", background: "var(--color-primary-50)", color: "var(--color-primary)", padding: "4px 10px", borderRadius: "var(--radius-full)", fontWeight: "var(--font-bold)" }}>
                      {art.category}
                    </span>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{art.readTime} &bull; {art.date}</span>
                  </div>
                  <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)", lineHeight: "1.35", color: "var(--color-text)" }}>
                    {art.title}
                  </h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-6)" }}>
                    {art.summary}
                  </p>
                </div>
                <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-4)" }}>
                  <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-bold)", color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    Read Research Report <IconArrowRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Consultation Banner */}
      <section className="section section--alt">
        <div className="container anim-fade-up">
          <div style={{ background: "var(--color-secondary-dark)", borderRadius: "var(--radius-2xl)", padding: "var(--space-12)", color: "#fff", textAlign: "center" }}>
            <h2 style={{ color: "#fff", marginBottom: "var(--space-3)" }}>Need Custom Industry Benchmarks?</h2>
            <p style={{ color: "var(--color-gray-300)", maxWidth: "600px", margin: "0 auto var(--space-6)" }}>
              Our analytics team produces custom verification reports and turnaround time benchmarks tailored for financial institutions and insurance underwriters.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request Industry Benchmarks <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
