import { useRef } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { IconCheck, IconArrowRight, IconShield, IconMapPin } from "~/components/ui/icons";
import type { Route } from "./+types/services.it-support";

export const meta: Route.MetaFunction = () => [
  { title: "IT Support & Infrastructure Maintenance — Break-Fix & AMC | WeAct" },
  { name: "description", content: "Rapid emergency break-fix support, preventative AMC, branch IT rollouts, and hardware field servicing across 585+ cities in India." },
];

export default function ITSupportService() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".anim-fade-up", { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" });
  }, { scope: containerRef });

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">Enterprise IT Field Operations</div>
          <h1 className="page-hero__title">IT Support &amp; Infrastructure Maintenance</h1>
          <p className="page-hero__subtitle">
            Keep your distributed branch networks running without disruption. Rapid emergency break-fix engineer dispatch, preventative AMC servicing, and turnkey branch IT rollouts across 585+ cities.
          </p>
          <div className="flex gap-4 flex--wrap">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request IT SLA Quote <IconArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Back to Services Overview
            </Link>
          </div>
        </div>
      </section>

      {/* IT Support Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Field IT Capabilities</span>
            <h2 className="section-header__title">Complete Branch IT Lifecycle Support</h2>
            <p className="section-header__description">
              Eliminating the overhead of maintaining full-time IT personnel at every remote branch office.
            </p>
          </div>

          <div className="feature-grid anim-fade-up">
            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Emergency Break-Fix Support</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Rapid onsite dispatch of certified hardware engineers to diagnose and resolve critical laptop, desktop, printer, and router failures.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> 2 to 4-Hour Emergency Dispatch SLAs</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Onsite Motherboard &amp; Peripheral Replacement</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Spare Parts Pool Management</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Preventative Annual Maintenance (AMC)</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Proactive quarterly servicing of IT assets across all branches to prevent unexpected downtime and extend hardware lifecycles.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Scheduled Preventative Hardware Cleaning</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Thermal &amp; Power Supply Health Checks</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Comprehensive Asset Health Reporting</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconMapPin size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Turnkey Branch IT Rollouts</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                End-to-end hardware deployment for new bank branches, retail outlets, and regional corporate offices across Tier II and III towns.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Desktop &amp; Workstation Unboxing &amp; Setup</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> OS Imaging &amp; Domain Joining</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Network Switch &amp; Router Rack Installation</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Network &amp; Structured Cabling</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Professional CAT6 LAN cabling, patch panel dressing, Wi-Fi access point installation, and LAN certification testing.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Structured CAT6 / Fiber Optic Cabling</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Server Rack Dressing &amp; Cable Management</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Fluke Network Speed Testing</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>POS &amp; Peripheral Servicing</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Dedicated field servicing for Point-of-Sale (POS) machines, thermal receipt printers, barcode scanners, and biometric passbook kiosks.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Retail POS &amp; Kiosk Firmware Upgrades</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Biometric Scanner Calibration</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Thermal Printer &amp; Scanner Replacement</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><IconShield size={26} /></div>
              <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Remote IT Helpdesk Triage</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                Centralized Level 1 and Level 2 remote assistance resolving OS, email, VPN, and printer driver issues before escalating to field visits.
              </p>
              <ul className="feature-card__list">
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Secure Remote Desktop Troubleshooting</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> Ticket Management &amp; Escalation Tracking</li>
                <li className="feature-card__list-item"><IconCheck size={18} className="text-primary" /> First-Call Resolution (FCR) Focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Box */}
      <section className="section section--alt">
        <div className="container">
          <div className="sla-box anim-fade-up">
            <h3 style={{ fontSize: "var(--text-xl)", color: "var(--color-text)", marginBottom: "var(--space-2)" }}>
              Nationwide SLA Commitments
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-base)", margin: 0 }}>
              Our IT field network operates across **Tier I metros (4-hour resolution SLA), Tier II capitals (Next Business Day SLA), and Tier III towns (48-hour SLA)**. We maintain dedicated regional replacement inventories so your branch operations never stop.
            </p>
          </div>
        </div>
      </section>

      {/* Dispatch Workflow */}
      <section className="section">
        <div className="container">
          <div className="section-header anim-fade-up">
            <span className="section-header__label">Service Orchestration</span>
            <h2 className="section-header__title">SLA Engineer Dispatch Flow</h2>
          </div>

          <div className="process-grid anim-fade-up">
            <div className="process-step">
              <span className="process-step__num">01</span>
              <h4 className="process-step__title">Ticket Logging</h4>
              <p className="process-step__desc">Branch staff logs an issue via portal, email, or API integration with your ITSM ticketing platform.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">02</span>
              <h4 className="process-step__title">Remote Triage</h4>
              <p className="process-step__desc">L1/L2 engineers attempt instant remote diagnosis. If hardware is faulty, a field engineer is dispatched.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">03</span>
              <h4 className="process-step__title">Onsite Resolution</h4>
              <p className="process-step__desc">Local PIN-mapped engineer arrives with appropriate spares to repair or swap out the equipment.</p>
            </div>
            <div className="process-step">
              <span className="process-step__num">04</span>
              <h4 className="process-step__title">Sign-Off &amp; Closure</h4>
              <p className="process-step__desc">Branch manager signs digital sign-off report; ticket updated instantly in central dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--primary" style={{ textAlign: "center" }}>
        <div className="container anim-fade-up">
          <h2 style={{ color: "#fff", marginBottom: "var(--space-4)" }}>Need IT AMC for 50+ Branch Locations?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-lg)", maxWidth: "600px", margin: "0 auto var(--space-8)" }}>
            Discuss your branch footprint with our infrastructure operations team for tailored SLA pricing.
          </p>
          <Link to="/contact" className="btn btn--white btn--lg">
            Discuss Enterprise AMC <IconArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
