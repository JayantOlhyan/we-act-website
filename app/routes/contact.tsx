import { useRef, useState } from "react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "~/lib/gsap";
import { company } from "~/data/content";
import { IconPhone, IconMail, IconMapPin, IconArrowRight, IconCheck, IconShield } from "~/components/ui/icons";
import "~/styles/components/contact.css";
import type { Route } from "./+types/contact";

export const meta: Route.MetaFunction = () => [
  { title: "Contact Us — Request Enterprise Verification SLA | WeAct" },
  { name: "description", content: "Connect with WeAct Global Solutions enterprise sales and ground verification specialists. Custom B2B verification packages across 585+ cities in India." },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".anim-fade-up", {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <main className="main-content" ref={containerRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container anim-fade-up">
          <div className="page-hero__badge">Enterprise Sales &amp; Support</div>
          <h1 className="page-hero__title">Connect with Our Verification Specialists</h1>
          <p className="page-hero__subtitle">
            Whether you require automated API background screening or physical ground audits across 585+ cities, our enterprise solutions team is ready to engineer your workflow within 2 business hours.
          </p>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid anim-fade-up">
            {/* Form Column */}
            <div className="card" style={{ padding: "var(--space-8)" }}>
              <h2 style={{ marginBottom: "var(--space-2)", fontSize: "var(--text-2xl)" }}>Request a Tailored SLA Proposal</h2>
              <p style={{ marginBottom: "var(--space-6)", color: "var(--color-text-muted)" }}>Fill out the form below and an enterprise account director will contact you promptly.</p>

              {submitted ? (
                <div style={{ padding: "var(--space-8)", textAlign: "center", backgroundColor: "var(--color-primary-50)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-primary-200)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-4)" }}>
                    <IconCheck size={24} />
                  </div>
                  <h3 style={{ color: "var(--color-primary)", marginBottom: "var(--space-2)" }}>Inquiry Received!</h3>
                  <p style={{ color: "var(--color-text-muted)" }}>Thank you for reaching out. Our enterprise team will review your requirements and get back to you within 2 business hours.</p>
                </div>
              ) : (
                <form
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <p hidden><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>

                  <div className="form-group">
                    <label className="form-label" htmlFor="inquiryType">Inquiry Category *</label>
                    <select id="inquiryType" name="inquiryType" className="form-select" required>
                      <option value="">Select Service Area</option>
                      <option value="Verification Services">Verification Services (CPV / Employee / Address)</option>
                      <option value="Due Diligence & KYC">Due Diligence &amp; Regulatory KYC</option>
                      <option value="Third-Party Audits">Third-Party Audits &amp; Mystery Shopping</option>
                      <option value="IT Support & AMC">IT Infrastructure Support &amp; AMC</option>
                      <option value="Enterprise Partnership">Pan-India Enterprise Partnership / API</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="grid grid--2 gap-4">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">Full Name *</label>
                      <input id="fullName" name="fullName" type="text" className="form-input" placeholder="e.g. Rajesh Sharma" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company Name *</label>
                      <input id="company" name="company" type="text" className="form-input" placeholder="e.g. HDFC Bank Ltd" required />
                    </div>
                  </div>

                  <div className="grid grid--2 gap-4">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Work Email *</label>
                      <input id="email" name="email" type="email" className="form-input" placeholder="name@company.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" className="form-input" placeholder="+91 98765 43210" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Project Requirements &amp; Volume Expectations</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Please outline your monthly verification volume, target locations, or expected turnaround times..." />
                  </div>

                  <div className="form-group">
                    <label className="form-checkbox-group">
                      <input type="checkbox" name="consent" className="form-checkbox" required />
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                        I authorize WeAct Global Solutions to contact me regarding my inquiry and agree to the{" "}
                        <Link to="/privacy-policy" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>Privacy Policy</Link> under DPDP Act 2023.
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn--primary btn--lg" style={{ width: "100%", justifyContent: "center" }}>
                    Submit Enterprise Inquiry <IconArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <div className="contact-info-card">
                <h3 style={{ marginBottom: "var(--space-6)", fontSize: "var(--text-xl)" }}>Corporate Headquarters</h3>

                <div className="contact-info-item">
                  <div style={{ color: "var(--color-primary)", marginTop: "2px" }}>
                    <IconMapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: "var(--font-semibold)", color: "var(--color-text)" }}>Registered Office</div>
                    <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", lineHeight: "var(--leading-relaxed)", marginTop: "var(--space-1)" }}>
                      {company.address.full}
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div style={{ color: "var(--color-primary)", marginTop: "2px" }}>
                    <IconPhone size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: "var(--font-semibold)", color: "var(--color-text)" }}>Sales &amp; Support Helpline</div>
                    <a href={`tel:${company.phone}`} style={{ fontSize: "var(--text-sm)", color: "var(--color-primary)", display: "block", marginTop: "var(--space-1)", textDecoration: "none" }}>
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div style={{ color: "var(--color-primary)", marginTop: "2px" }}>
                    <IconMail size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: "var(--font-semibold)", color: "var(--color-text)" }}>Enterprise Desk</div>
                    <a href={`mailto:${company.email}`} style={{ fontSize: "var(--text-sm)", color: "var(--color-primary)", display: "block", marginTop: "var(--space-1)", textDecoration: "none" }}>
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Escalation Card */}
              <div className="card" style={{ background: "var(--color-primary-50)", borderColor: "var(--color-primary-200)", padding: "var(--space-6)" }}>
                <div className="flex flex--center gap-3" style={{ marginBottom: "var(--space-3)" }}>
                  <IconShield size={22} className="text-primary" />
                  <h4 style={{ margin: 0, color: "var(--color-primary)" }}>ISO 9001:2015 Escalation Framework</h4>
                </div>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text)", lineHeight: "var(--leading-relaxed)", margin: 0 }}>
                  For existing enterprise clients requiring priority operational escalation or SLA audit reviews, contact our Executive Director <strong>{company.director}</strong> directly via your dedicated account portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
