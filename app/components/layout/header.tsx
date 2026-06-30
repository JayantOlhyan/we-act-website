import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { IconChevronDown } from "~/components/ui/icons";
import "~/styles/components/header.css";

interface NavChild {
  label: string;
  path: string;
  desc?: string;
}

interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
  wide?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Services & Solutions",
    path: "/services",
    wide: true,
    children: [
      {
        label: "Verification Services",
        path: "/services/verification",
        desc: "Address, telecom & document checks with instant reports",
      },
      {
        label: "Due Diligence & KYC",
        path: "/services/due-diligence",
        desc: "Comprehensive background screening & corporate checks",
      },
      {
        label: "Third-Party Audits",
        path: "/services/audits",
        desc: "Mystery audits, retail authentication & site compliance",
      },
      {
        label: "IT & Infrastructure",
        path: "/services/it-support",
        desc: "Onsite hardware support, AMC & field engineering",
      },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    wide: true,
    children: [
      { label: "Banking & Financial Services", path: "/industries/bfsi", desc: "Fast-track onboarding & loan verifications" },
      { label: "Insurance & Claims", path: "/industries/insurance", desc: "Policyholder & claim investigator checks" },
      { label: "NBFC & Fintech", path: "/industries/nbfc", desc: "High-volume digital & physical borrower KYC" },
      { label: "Telecom Infrastructure", path: "/industries/telecom", desc: "Cell site audits & distributor verifications" },
      { label: "Pharma & Healthcare", path: "/industries/pharma", desc: "Supply chain integrity & stockist checks" },
      { label: "Digital Payments", path: "/industries/payments", desc: "Merchant onboarding & POS verification" },
    ],
  },
  { label: "Why WeAct", path: "/why-weact" },
  { label: "Clients", path: "/clients" },
  { label: "PAN India Reach", path: "/coverage" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <div className="header__logo-text">
              <span className="header__logo-brand">WeAct</span>
              <span className="header__logo-tagline">Global Solutions</span>
            </div>
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.path} className="nav__item">
                <Link
                  to={item.path}
                  className={`nav__link ${
                    location.pathname === item.path ||
                    (item.path !== "/" && location.pathname.startsWith(item.path))
                      ? "nav__link--active"
                      : ""
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <IconChevronDown size={12} className="nav__link-chevron" />
                  )}
                </Link>
                {item.children && (
                  <div className={`nav__dropdown ${item.wide ? "nav__dropdown--wide" : ""}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="nav__dropdown-item"
                      >
                        <span className="nav__dropdown-title">{child.label}</span>
                        {child.desc && <span className="nav__dropdown-desc">{child.desc}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header__cta">
            <Link to="/contact" className="btn btn--outline btn--sm" style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}>
              Talk to Sales
            </Link>
            <Link to="/contact" className="btn btn--primary btn--sm">
              Book a Demo
            </Link>
          </div>

          <button
            className={`header__menu-btn ${isMobileOpen ? "header__menu-btn--open" : ""}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileOpen ? "mobile-nav--open" : ""}`}>
        {navItems.map((item) => (
          <div key={item.path}>
            <Link
              to={item.path}
              className={`mobile-nav__link ${
                location.pathname === item.path ? "mobile-nav__link--active" : ""
              }`}
              onClick={() => {
                if (item.children) {
                  setOpenDropdown(openDropdown === item.label ? null : item.label);
                }
              }}
            >
              {item.label}
            </Link>
            {item.children && openDropdown === item.label && (
              <div className="mobile-nav__sub">
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className="mobile-nav__sub-link"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="mobile-nav__cta">
          <Link to="/contact" className="btn btn--primary btn--full">
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
