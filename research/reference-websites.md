# Reference Websites & Competitive UX Research — WeAct Global

Compiled for `weactglobal.com` (Jayant Systems). Every structural and UX decision in this project draws from institutional B2B verification and risk-consulting benchmarks — borrowing clarity and trust architecture, never copying copy or layouts.

---

## 1. Indian Verification & Risk Benchmarks

### AuthBridge (`https://www.authbridge.com`)
- **Positioning:** India's largest authentication, BGV, KYC, and CPV (GroundCheck.ai) platform for BFSI, fintech, and enterprise teams.
- **What works well:**
  - Modular service entry points by buyer workflow (Verification / KYC / CPV / Third-Party Risk) rather than generic agency prose.
  - Explicit mention of geospatial/PIN-code precision, hybrid field-force + digital workflow, and enterprise system integration (ERP/LOS/LMS).
  - Upfront ISO and regulatory posture — compliance sits near the top, not buried in the footer.
- **Takeaway for WeAct:** Lead with the physical + digital field delivery model (`PIN-code mapping → real-time allocation → geo-tagged evidence → SLA report`) and give each buyer persona its own dedicated landing page.

### Netrika Consulting (`https://www.netrika.com`)
- **Positioning:** Risk management, corporate due diligence, third-party audits, and integrity consulting across India.
- **What works well:**
  - Calm, executive-grade visual hierarchy that speaks directly to risk committees, legal, and compliance heads.
  - Clear delineation between due diligence, third-party risk audits, and field verification without marketing fluff.
- **Takeaway for WeAct:** Keep tone austere, factual, and audit-ready. Avoid startup hype, oversized gradients, or consumer-app aesthetics.

### IDfy (`https://www.idfy.com`)
- **Positioning:** Enterprise identity verification, fraud detection, and onboarding workflows for fintechs and digital lenders.
- **What works well:**
  - Buyer-problem-first hero framing ("what risk does this eliminate?") paired with immediate demo/enquiry CTAs.
  - Clean separation of regulated verticals (Banking/NBFC, Insurance, Payment Aggregators).
- **Takeaway for WeAct:** Open every service page with the specific buyer's operational bottleneck in plain language, followed immediately by a crisp answer and direct enquiry/WhatsApp path.

### Karza Technologies / Perfios (`https://www.perfios.com`) & Signzy (`https://www.signzy.com`)
- **Positioning:** Deep BFSI due diligence, KYB, and compliant onboarding orchestration.
- **What works well:**
  - Explicit DPDPA / RBI / consent-architecture signaling directly in onboarding and enquiry flows.
  - Structured tabular specification blocks instead of vague marketing bullet lists.
- **Takeaway for WeAct:** Present WeAct's ERP integration, security controls, and PAN-India network in crisp specification tables that procurement and vendor-empanelment teams can scan in 15 seconds.

---

## 2. Global Institutional Benchmarks

### Kroll (`https://www.kroll.com`)
- **Positioning:** Global investigative due diligence, risk advisory, and third-party vetting.
- **UX Pattern:** High-authority editorial grids, hairline borders, restrained palette, direct escalation paths to senior specialists (mirroring WeAct's direct-to-Director enquiry model).

### First Advantage (`https://fadv.com`)
- **Positioning:** Enterprise-scale background screening across 200+ countries.
- **UX Pattern:** Upfront verified scale strip (hard operational numbers only), strict WCAG 2.1 AA accessibility, and mobile-first form UX with low friction and clear field labels.

### SGS (`https://www.sgs.com`) & Bureau Veritas (`https://group.bureauveritas.com`)
- **Positioning:** Global physical inspection, testing, and certification.
- **UX Pattern:** Industrial precision — crisp charcoal + single signal accent (orange/amber in SGS's case, closely paralleling WeAct's `#282828` charcoal + `#F08030` orange), strong typographic hierarchy, and clean compliance/certification metadata (ISO 9001:2015, CIN, GSTIN).

---

## 3. Applied UX Architecture for `weactglobal.com`

| Decision | Rationale from Benchmarks |
|---|---|
| **Charcoal `#282828` + WeAct Orange `#F08030` on warm white `#FDFDFB`** | Matches WeAct's official logo while projecting SGS/Netrika-level institutional authority. |
| **Dedicated buyer routes (`/verification-kyc`, `/merchant-onboarding`, `/field-it-support`)** | Mirrors AuthBridge & IDfy: LinkedIn visitors from BFSI, fintech, or enterprise IT land directly on their exact workflow. |
| **Structured specification tables for E-Platform & Security** | Mirrors Karza/Kroll: procurement teams want scannable control areas (ERP, geo-tagged evidence, NDA, ISO 9001:2015), not fluff. |
| **Direct WhatsApp + Phone + Short Enquiry Form** | Adapted to Indian B2B reality (Neeraj handles enquiries directly) with mobile-first tap targets for LinkedIn mobile traffic. |
| **DPDP Act 2023 consent notice + `/privacy`** | Matches top Indian BFSI vendor standards and satisfies statutory compliance from day one. |
