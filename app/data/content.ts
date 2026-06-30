/**
 * WeAct Global Solutions — Company Data
 * Static content data used across the site.
 * CMS-editable values are loaded from content/ files.
 */

// ── Company Information ──
export const company = {
  legalName: "WeAct Global Solutions (OPC) Pvt. Ltd.",
  shortName: "WeAct",
  brandName: "WeAct Global Solutions",
  founded: 2020,
  director: "Neeraj Juneja",
  iso: "ISO 9001:2015",
  gstin: "07AADCW2621H1ZI",
  cin: "U74999DL2022OPC398570",
  domain: "weactglobal.com",
  address: {
    full: "Kovark Coworking Space, 2nd Floor, Plot No. 10A, Shivaji Marg, Moti Nagar, DLF Industrial Area, Karam Pura, Delhi – 110015",
    short: "Moti Nagar, Delhi – 110015",
    city: "Delhi",
    pincode: "110015",
  },
  phone: "+91-9899207285",
  email: "neeraj@weactglobal.com",
  whatsapp: "919899207285",
} as const;

// ── Key Statistics (pending client confirmation) ──
export const stats = {
  verifications: { value: 2000000, display: "2M+", label: "Verifications Delivered" },
  cities: { value: 585, display: "585+", label: "Cities Covered" },
  executives: { value: 4000, display: "4,000+", label: "Trained Field Executives" },
  monthlyCalls: { value: 15000, display: "15,000+", label: "Monthly Service Calls" },
  satisfaction: { value: 98, display: "98%", label: "Client Satisfaction" },
  tat: { value: 95, display: "95%", label: "On-Time TAT" },
} as const;

// ── Client Logos ──
export const clients = [
  { name: "TATA Communications", slug: "tata-communications" },
  { name: "Rubix Data Sciences", slug: "rubix" },
  { name: "Dun & Bradstreet", slug: "dnb" },
  { name: "Future Generali", slug: "future-generali" },
  { name: "Dr. Reddy's", slug: "dr-reddys" },
  { name: "KEI", slug: "kei" },
  { name: "Runpaisa", slug: "runpaisa" },
  { name: "GTrack", slug: "gtrack" },
  { name: "Cenit Advisory", slug: "cenit" },
  { name: "IndusInd Bank", slug: "indusind-bank" },
  { name: "Bank of Maharashtra", slug: "bank-of-maharashtra" },
  { name: "India First Life", slug: "india-first-life" },
  { name: "TATA AIG", slug: "tata-aig" },
  { name: "DHL", slug: "dhl" },
  { name: "Aramex", slug: "aramex" },
] as const;

// ── Testimonials ──
export const testimonials = [
  {
    name: "Samir Modi",
    company: "Rubix Data Sciences",
    title: "CEO",
    quote:
      "WeAct has been an exceptional partner for our verification operations. Their PAN India reach and real-time reporting have significantly improved our turnaround times and data accuracy.",
  },
  {
    name: "Shashank",
    company: "Thronepe & Runpaisa",
    title: "Founder",
    quote:
      "The team at WeAct delivers consistent quality across geographies. Their PIN-code mapped executive network ensures we get reliable field intelligence from every corner of the country.",
  },
  {
    name: "Operations Head",
    company: "Future Generali",
    title: "VP Operations",
    quote:
      "WeAct's systematic approach to verification and their ISO-certified processes give us the confidence to rely on them for our critical compliance operations.",
  },
  {
    name: "Risk Team",
    company: "IndusInd Bank",
    title: "Risk Management",
    quote:
      "Reliable, timely, and thorough — WeAct has become our go-to partner for field verification across multiple states.",
  },
  {
    name: "Compliance Lead",
    company: "TATA Communications",
    title: "Compliance",
    quote:
      "WeAct's technology-driven approach and their commitment to data security align perfectly with our enterprise standards.",
  },
] as const;

// ── Services ──
export const services = [
  {
    id: "verification",
    title: "Verification Services",
    shortTitle: "Verification",
    slug: "verification",
    icon: "shield-check",
    description:
      "Comprehensive address, tele, document, and physical verification services with real-time ERP sync and 48-72hr TAT commitment.",
    features: [
      "Address Verification",
      "Tele-Verification",
      "Document Verification",
      "Customer Profile Verification (CPV)",
      "Background Verification",
      "Physical Verification for Merchant Onboarding",
      "Collection & Recovery Assistance",
    ],
  },
  {
    id: "due-diligence",
    title: "Due Diligence & KYC",
    shortTitle: "Due Diligence",
    slug: "due-diligence",
    icon: "clipboard-check",
    description:
      "End-to-end KYC visits and due diligence services for banking, insurance, and NBFC sectors with compliance-grade documentation.",
    features: [
      "KYC Compliance Visits",
      "Insurance Verification Visits",
      "Banking Due Diligence",
      "NBFC Verification Visits",
      "Regulatory Compliance Checks",
      "Documentation & Reporting",
    ],
  },
  {
    id: "audits",
    title: "Third-Party Audits",
    shortTitle: "Audits",
    slug: "audits",
    icon: "search",
    description:
      "Independent dealer & distributor authentication and mystery audits to ensure quality standards and compliance across your supply chain.",
    features: [
      "Dealer & Distributor Authentication",
      "Mystery Audits",
      "Quality Compliance Audits",
      "Supply Chain Verification",
      "Outlet Authentication",
      "Process Compliance Checks",
    ],
  },
  {
    id: "it-support",
    title: "IT & Infrastructure Support",
    shortTitle: "IT Support",
    slug: "it-support",
    icon: "cpu",
    description:
      "Onsite engineers for laptops, desktops, printers, and IT infrastructure with PAN India coverage and monthly support capacity.",
    features: [
      "Onsite Hardware Support",
      "Laptop & Desktop Maintenance",
      "Printer & Peripheral Support",
      "Network Infrastructure",
      "Monthly Support Packages",
      "Emergency Break-Fix Services",
    ],
  },
] as const;

// ── Industries ──
export const industries = [
  {
    id: "bfsi",
    title: "Banking, Financial Services & Insurance",
    shortTitle: "BFSI",
    slug: "bfsi",
    icon: "building-bank",
    description:
      "Specialized verification and KYC services for banks and financial institutions with compliance-grade processes.",
    relatedClients: ["IndusInd Bank", "Bank of Maharashtra"],
    relatedServices: ["verification", "due-diligence"],
  },
  {
    id: "insurance",
    title: "Insurance",
    shortTitle: "Insurance",
    slug: "insurance",
    icon: "shield",
    description:
      "Policy verification, claim investigation support, and on-ground due diligence for insurance providers.",
    relatedClients: ["Future Generali", "India First Life", "TATA AIG"],
    relatedServices: ["verification", "due-diligence", "audits"],
  },
  {
    id: "nbfc",
    title: "Non-Banking Financial Companies",
    shortTitle: "NBFC",
    slug: "nbfc",
    icon: "credit-card",
    description:
      "Loan verification, borrower authentication, and compliance support tailored for NBFC operations.",
    relatedClients: [],
    relatedServices: ["verification", "due-diligence"],
  },
  {
    id: "telecom",
    title: "Telecom",
    shortTitle: "Telecom",
    slug: "telecom",
    icon: "antenna",
    description:
      "SIM verification, subscriber onboarding checks, and field audits for telecom operators.",
    relatedClients: ["TATA Communications"],
    relatedServices: ["verification", "audits"],
  },
  {
    id: "pharma",
    title: "Pharmaceutical",
    shortTitle: "Pharma",
    slug: "pharma",
    icon: "pill",
    description:
      "Field verification, dealer authentication, and supply chain audits for pharmaceutical companies.",
    relatedClients: ["Dr. Reddy's"],
    relatedServices: ["audits", "verification"],
  },
  {
    id: "payments",
    title: "Payments & Fintech",
    shortTitle: "Payments",
    slug: "payments",
    icon: "wallet",
    description:
      "Merchant onboarding verification and payment gateway compliance checks for fintech companies.",
    relatedClients: ["Runpaisa"],
    relatedServices: ["verification", "due-diligence"],
  },
] as const;

// ── Media Mentions ──
export const mediaMentions = [
  { name: "Dailyhunt", slug: "dailyhunt" },
  { name: "Times Nation", slug: "times-nation" },
  { name: "HT Media Group", slug: "ht-media" },
  { name: "India News", slug: "india-news" },
  { name: "The Influencers of India", slug: "influencers-of-india" },
  { name: "Bharat Bulletin", slug: "bharat-bulletin" },
  { name: "Business Up2Date", slug: "business-up2date" },
] as const;

// ── Competitive Advantages ──
export const advantages = [
  {
    title: "ISO 9001:2015 Certified",
    description: "Every process follows internationally recognized quality management standards.",
    icon: "certificate",
  },
  {
    title: "Real-Time ERP Sync",
    description: "Live data synchronization with client systems for transparent, up-to-the-minute reporting.",
    icon: "refresh",
  },
  {
    title: "PIN-Code Mapped Executives",
    description: "Hyper-local field workforce mapped to specific PIN codes for faster, more accurate coverage.",
    icon: "map-pin",
  },
  {
    title: "AI-Based Performance Monitoring",
    description: "Machine learning algorithms monitor field executive performance and flag anomalies in real-time.",
    icon: "brain",
  },
  {
    title: "24×7 Escalation Framework",
    description: "Round-the-clock escalation matrix ensures no critical case goes unresolved.",
    icon: "clock",
  },
  {
    title: "Secure Paperless Workflow",
    description: "End-to-end digital process with encrypted data channels and NDA-compliant engagements.",
    icon: "lock",
  },
  {
    title: "48–72hr TAT Commitment",
    description: "Industry-leading turnaround times backed by SLA guarantees and performance metrics.",
    icon: "zap",
  },
  {
    title: "Certified Field Workforce",
    description: "4,000+ trained and verified field executives across 585+ cities in India.",
    icon: "users",
  },
] as const;
