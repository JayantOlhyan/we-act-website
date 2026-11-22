export const SITE_CONFIG = {
  brandName: "WeAct Global",
  legalName: "WeAct Global Solutions (OPC) Pvt. Ltd.",
  tagline: "PAN-India physical verification, due diligence, third-party audits, and onsite IT field operations.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.weactglobal.com",
  cin: "U74999DL2022OPC398570",
  gstin: "07AADCW2621H1ZI",
  certification: "ISO 9001:2015 Certified",
  address: "1/51, Third Floor, WHS Kirti Nagar Industrial Area, Kirti Nagar Furniture Market, New Delhi 110015",
  contactPerson: "Neeraj Juneja, Director",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 98992 07285",
  phoneHref: `tel:${process.env.NEXT_PUBLIC_PHONE_E164 || "+919899207285"}`,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919899207285",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "neeraj@weactglobal.com",
  profilePdfPath: "/WeAct_Global_Company_Profile_Vendor_Empanelment.pdf",
} as const;

export function buildWhatsAppUrl(pageLabel: string): string {
  const message = `Hello Neeraj, I am reaching out via weactglobal.com (${pageLabel}) to discuss PAN-India verification / field support requirements.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Approved baseline proof figures ONLY (from WeAct Company Profile).
 * Do NOT add unapproved performance percentages or client-attributed volumes here.
 */
export const APPROVED_PROOF_METRICS = [
  { value: "3,200+", label: "Trained field staff" },
  { value: "585+", label: "Cities, towns & semi-urban locations" },
  { value: "10,000+", label: "PIN codes covered" },
  { value: "1M+", label: "Verifications delivered" },
] as const;

export const NAV_LINKS = [
  { href: "/verification-kyc", label: "Verification & KYC" },
  { href: "/merchant-onboarding", label: "Merchant Onboarding" },
  { href: "/field-it-support", label: "Field IT Support" },
  { href: "/company-profile", label: "Company Profile" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "verification-kyc", label: "Verification, CPV & KYC Visits" },
  { value: "merchant-onboarding", label: "Merchant Onboarding & Payment Gateway Verification" },
  { value: "third-party-audits", label: "Third-Party Audits & Dealer Authentication" },
  { value: "field-it-support", label: "Onsite IT & Infrastructure Support" },
  { value: "vendor-empanelment", label: "Vendor Empanelment / RFP Discussion" },
] as const;

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "PIN-code executive mapping",
    detail: "Each request is mapped by PIN code to a trained, verified local field executive with regional language capability.",
  },
  {
    step: "02",
    title: "Real-time ticket allocation",
    detail: "Assignments dispatch via centralised ticket management or two-way client ERP integration with fallback backup coverage.",
  },
  {
    step: "03",
    title: "Geo-tagged field capture",
    detail: "Executives capture geo-tagged photographs, consent documentation, and structured findings on a paperless mobile workflow.",
  },
  {
    step: "04",
    title: "SLA-governed reporting",
    detail: "Audit-ready reports are delivered within agreed 48-72 hour turnaround commitments (subject to scope and SLA) with structured escalation.",
  },
] as const;

export const EPLATFORM_CAPABILITIES = [
  {
    capability: "ERP integration",
    detail: "Two-way integration and client-aligned status updates",
  },
  {
    capability: "Ticket management",
    detail: "Centralised assignment and tracking of service requests",
  },
  {
    capability: "Real-time allocation",
    detail: "Direct call and task allocation to PIN-mapped field executives",
  },
  {
    capability: "Field movement tracking",
    detail: "App-based movement visibility across active field operations",
  },
  {
    capability: "Geo-tagged evidence",
    detail: "Time- and location-stamped photographs and field reports",
  },
  {
    capability: "SLA / TAT protocols",
    detail: "Service delivery governed by agreed timelines and built-in escalation matrix",
  },
] as const;

export const SECURITY_CONTROLS = [
  {
    area: "Data transmission",
    practice: "End-to-end encrypted data channels for field evidence and reports",
  },
  {
    area: "Confidentiality",
    practice: "NDA-compliant engagements across every client account",
  },
  {
    area: "Quality framework",
    practice: "ISO 9001:2015 certified quality management and ISO-aligned security practices",
  },
  {
    area: "Consent & documentation",
    practice: "Region-specific compliance and documented subject consent (DPDP Act 2023 aligned)",
  },
  {
    area: "Operational controls",
    practice: "Secure, paperless mobile workflow with structured escalation support",
  },
] as const;

export const COMPANY_AT_A_GLANCE = [
  { label: "Legal name", value: "WeAct Global Solutions (OPC) Pvt. Ltd." },
  { label: "Quality certification", value: "ISO 9001:2015 Certified" },
  { label: "Corporate Identity (CIN)", value: "U74999DL2022OPC398570" },
  { label: "GST Registration (GSTIN)", value: "07AADCW2621H1ZI" },
  { label: "Turnaround commitment", value: "48-72 hours (subject to scope & SLA)" },
  { label: "Registered headquarters", value: "Kirti Nagar Industrial Area, New Delhi 110015" },
] as const;

/**
 * Industry verticals served — public-safe until written client logo/name permissions are obtained.
 */
export const INDUSTRY_VERTICALS = [
  {
    id: "banking-nbfc",
    sector: "Banking & NBFCs",
    scope: "Customer Profile Verification (CPV), due diligence, KYC visits, and collection & recovery assistance.",
    href: "/verification-kyc",
    cta: "Explore Verification & KYC",
    image: "/images/field-verification.jpg",
    imageCaption: "On-ground residential & office CPV visit with geo-tagged timestamp",
    highlights: [
      {
        title: "Customer Profile Verification (CPV)",
        summary: "On-ground residential, employment, and business premises checks mapped directly to local PIN codes.",
      },
      {
        title: "Credit Due Diligence & Recovery Support",
        summary: "Geo-tagged field visits, document validation, and compliant collection assistance under NDA.",
      },
    ],
  },
  {
    id: "insurance",
    sector: "Life & General Insurance",
    scope: "PAN-India physical KYC visits, document validation, and field claim/profile verification.",
    href: "/verification-kyc",
    cta: "Explore Insurance KYC",
    image: "/images/field-verification.jpg",
    imageCaption: "PAN-India policyholder KYC & document validation across Tier I-III towns",
    highlights: [
      {
        title: "Nationwide Physical KYC Visits",
        summary: "Structured policyholder identity, address, and document verification across metros and Tier II/III towns.",
      },
      {
        title: "Regional Language Field Coverage",
        summary: "3,200+ verified executives fluent in local languages across North, South, and East zones.",
      },
    ],
  },
  {
    id: "payment-fintech",
    sector: "Payment Aggregators & Fintechs",
    scope: "Physical merchant onboarding verification, premises checks, and payment gateway compliance visits.",
    href: "/merchant-onboarding",
    cta: "Explore Merchant Onboarding",
    image: "/images/merchant-audit.jpg",
    imageCaption: "Physical merchant premises, counter, and signage verification before settlement activation",
    highlights: [
      {
        title: "Merchant Premises Authentication",
        summary: "Physical storefront, signage, inventory, and live business-activity validation before go-live.",
      },
      {
        title: "Payment Gateway Onboarding Checks",
        summary: "Time- and GPS-stamped photographic evidence captured in a paperless mobile workflow.",
      },
    ],
  },
  {
    id: "enterprise-it",
    sector: "Enterprise IT & Telecom",
    scope: "Onsite field engineers for laptops, desktops, and printers under ticketed SLA frameworks.",
    href: "/field-it-support",
    cta: "Explore Field IT Support",
    image: "/images/field-it-engineer.jpg",
    imageCaption: "Onsite hardware & endpoint support engineer dispatched under centralised ticket SLA",
    highlights: [
      {
        title: "Multi-City Onsite Engineers",
        summary: "Trained hardware technicians dispatched across 585+ cities for endpoint upkeep and break-fix visits.",
      },
      {
        title: "Two-Way Client ERP Integration",
        summary: "Centralised ticket allocation, real-time engineer movement visibility, and escalation protocols.",
      },
    ],
  },
  {
    id: "risk-distribution",
    sector: "Risk, Credit & Distribution",
    scope: "Third-party audits, dealer and distributor authentication, mystery audits, and risk assessment visits.",
    href: "/merchant-onboarding",
    cta: "Explore Third-Party Audits",
    image: "/images/merchant-audit.jpg",
    imageCaption: "Dealer authentication, stockist inspection, and mystery audit execution",
    highlights: [
      {
        title: "Dealer & Distributor Authentication",
        summary: "On-site checks confirming physical stockist operations, trade legitimacy, and infrastructure readiness.",
      },
      {
        title: "Unannounced Mystery Audits",
        summary: "Independent retail and channel compliance reporting with geo-tagged verification records.",
      },
    ],
  },
] as const;

export const LIFECYCLE_STAGES = [
  {
    id: "cpv",
    label: "Customer Profile Verification",
    code: "WF-CPV-01",
    summary:
      "Validate applicant residence, office presence, and neighbourhood standing across 10,000+ PIN codes before credit approval or onboarding.",
    evidence: "Geo-tagged premises photographs, subject consent log, and structured CPV report.",
    sla: "48-72 hour turnaround commitment (subject to scope and agreed SLA).",
    checkpoints: ["Address & occupancy confirmation", "Neighbour & landmark cross-check", "Geo-tagged exterior & entry photo"],
    href: "/verification-kyc",
  },
  {
    id: "kyc-due-diligence",
    label: "Physical KYC & Due Diligence",
    code: "WF-KYC-02",
    summary:
      "Bridge digital onboarding gaps with verified physical KYC visits, original document sighting, and tele-verification across Tier I to Tier III locations.",
    evidence: "Time-stamped identity validation, encrypted mobile submission, and audit trail.",
    sla: "PIN-code executive mapping with fallback backup allocation.",
    checkpoints: ["Original POI / POA sighting", "In-person applicant photograph", "DPDP consent attestation"],
    href: "/verification-kyc",
  },
  {
    id: "merchant-onboarding",
    label: "Merchant Onboarding Audits",
    code: "WF-MRC-03",
    summary:
      "Confirm actual business existence, storefront signage, operational activity, and premises compliance for payment gateways and fintech aggregators.",
    evidence: "Storefront, interior, GPS coordinate stamp, and merchant verification checklist.",
    sla: "Centralised ticket tracking with real-time field movement visibility.",
    checkpoints: ["Storefront signage & fascia photo", "Active stock & POS counter check", "Business category verification"],
    href: "/merchant-onboarding",
  },
  {
    id: "dealer-mystery",
    label: "Dealer & Mystery Audits",
    code: "WF-AUD-04",
    summary:
      "Inspect third-party dealers, distributors, and retail touchpoints for authenticity, stocking standards, and brand-process adherence.",
    evidence: "Field audit scoring sheet, photographic proof, and escalation-ready summary.",
    sla: "Structured reporting across North, South, and East India zones.",
    checkpoints: ["Channel partner existence check", "Warehouse / display compliance", "Unannounced mystery evaluation"],
    href: "/merchant-onboarding",
  },
  {
    id: "bgv",
    label: "Background Verification",
    code: "WF-BGV-05",
    summary:
      "Execute physical address, reference, and document verification for workforce hiring, vendor empanelment, and partner risk screening.",
    evidence: "NDA-bound field verification record compliant with DPDP Act 2023 consent norms.",
    sla: "Two-way status updates aligned with client ERP and HR workflows.",
    checkpoints: ["Permanent & current address visit", "Signed respondent statement", "Encrypted report delivery"],
    href: "/verification-kyc",
  },
  {
    id: "field-it",
    label: "Onsite Field IT Support",
    code: "WF-ITS-06",
    summary:
      "Dispatch trained onsite engineers for laptops, desktops, and printers across distributed regional branches under ticketed SLAs.",
    evidence: "Signed service acknowledgement, geo-tagged attendance, and asset ticket closure.",
    sla: "Built-in escalation matrix and backup engineer coverage.",
    checkpoints: ["Laptop, desktop & printer diagnosis", "Two-way client ERP ticket sync", "Branch sign-off & SLA closure"],
    href: "/field-it-support",
  },
] as const;

export const INDIA_COVERAGE_ZONES = [
  {
    id: "north",
    zone: "North India Zone",
    hubs: "New Delhi HQ, NCR, Chandigarh, Jaipur, Lucknow, Dehradun, Ludhiana",
    tiers: "Metros, Tier I, Tier II, Tier III & semi-urban PIN clusters",
    languages: "Hindi, Punjabi, English & regional dialects",
    capabilities: "Full CPV, KYC visits, due diligence, merchant audits & onsite IT engineer dispatch",
    mapCoords: [
      { city: "New Delhi HQ", cx: 145, cy: 112 },
      { city: "Chandigarh", cx: 138, cy: 88 },
      { city: "Jaipur", cx: 122, cy: 134 },
      { city: "Lucknow", cx: 184, cy: 132 },
    ],
  },
  {
    id: "south",
    zone: "South India Zone",
    hubs: "Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore, Visakhapatnam, Mysuru",
    tiers: "Metro IT corridors, Tier I/II commercial hubs & rural taluk PIN codes",
    languages: "Kannada, Tamil, Telugu, Malayalam & English",
    capabilities: "Native-language CPV/KYC executives, fintech merchant onboarding & enterprise IT support",
    mapCoords: [
      { city: "Hyderabad", cx: 162, cy: 232 },
      { city: "Bengaluru", cx: 144, cy: 274 },
      { city: "Chennai", cx: 184, cy: 290 },
      { city: "Kochi", cx: 138, cy: 320 },
    ],
  },
  {
    id: "east",
    zone: "East & North-East Zone",
    hubs: "Kolkata, Bhubaneswar, Patna, Ranchi, Guwahati, Siliguri, Jamshedpur",
    tiers: "Eastern commercial centres, industrial towns & last-mile semi-urban districts",
    languages: "Bengali, Odia, Assamese, Hindi & English",
    capabilities: "Deep last-mile address verification, insurance KYC, distributor audits & branch IT",
    mapCoords: [
      { city: "Patna", cx: 218, cy: 145 },
      { city: "Kolkata", cx: 244, cy: 184 },
      { city: "Bhubaneswar", cx: 222, cy: 214 },
      { city: "Guwahati", cx: 278, cy: 136 },
    ],
  },
  {
    id: "west-central",
    zone: "West & Central Corridor",
    hubs: "Mumbai, Pune, Ahmedabad, Surat, Nagpur, Indore, Bhopal, Raipur",
    tiers: "BFSI headquarters, MSME industrial belts & high-volume merchant clusters",
    languages: "Marathi, Gujarati, Hindi & English",
    capabilities: "High-density BFSI due diligence, payment aggregator merchant checks & field IT",
    mapCoords: [
      { city: "Ahmedabad", cx: 96, cy: 174 },
      { city: "Indore", cx: 134, cy: 180 },
      { city: "Mumbai", cx: 102, cy: 224 },
      { city: "Pune", cx: 114, cy: 238 },
    ],
  },
] as const;
