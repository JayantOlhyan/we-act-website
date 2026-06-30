import { Link } from "react-router";
import { company } from "~/data/content";
import { IconPhone, IconMail, IconMapPin } from "~/components/ui/icons";
import "~/styles/components/footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div>
                <span className="footer__logo-brand">WeAct</span>
              </div>
            </Link>
            <p className="footer__brand-description">
              Your trusted partner in PAN India verification, support &amp; field
              operations. ISO 9001:2015 certified processes serving enterprise
              clients across BFSI, insurance, telecom, pharma, and payments
              sectors.
            </p>
            <div className="footer__iso-badge">
              <IconShieldSmall />
              ISO 9001:2015 Certified
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer__column-title">Services</h4>
            <ul className="footer__links">
              <li><Link to="/services/verification">Verification Services</Link></li>
              <li><Link to="/services/due-diligence">Due Diligence &amp; KYC</Link></li>
              <li><Link to="/services/audits">Third-Party Audits</Link></li>
              <li><Link to="/services/it-support">IT &amp; Infrastructure</Link></li>
              <li><Link to="/why-weact">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer__column-title">Company</h4>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/clients">Clients &amp; Testimonials</Link></li>
              <li><Link to="/coverage">PAN India Coverage</Link></li>
              <li><Link to="/media">Media Mentions</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/security-compliance">Security &amp; Compliance</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer__column-title">Contact Us</h4>
            <div className="footer__contact-item">
              <IconMapPin size={18} className="footer__contact-icon" />
              <span>{company.address.full}</span>
            </div>
            <div className="footer__contact-item">
              <IconPhone size={18} className="footer__contact-icon" />
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </div>
            <div className="footer__contact-item">
              <IconMail size={18} className="footer__contact-icon" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} {company.legalName}. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconShieldSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
