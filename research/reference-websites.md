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
| **Obsidian Charcoal `#060608` + WeAct Orange `#F08030` / Warm Amber `#FFA352`** | Adapts Perfios's dark-obsidian institutional presence strictly into WeAct's charcoal-and-orange brand identity. |
| **Editorial Serif Display (`Playfair Display`) + Clean Sans (`Inter`) + `JetBrains Mono`** | Mirrors Perfios's authoritative C-suite serif display contrast paired with scannable operational UI and tabular metrics. |
| **Persistent 3D Extruded WeAct Prism (`preserve-3d` + `useScroll`)** | Adapts Perfios's scrolling 3D monolith across 5 story chapters (gliding left-to-right, tilting in perspective, accented by a diagonal orange hairline beam). |
| **Dedicated buyer routes (`/verification-kyc`, `/merchant-onboarding`, `/field-it-support`)** | Mirrors AuthBridge & IDfy: LinkedIn visitors from BFSI, fintech, or enterprise IT land directly on their exact workflow. |
| **Interactive Switcher Consoles (2px orange bottom-border active tab)** | Adapts Perfios's industry & lifecycle vertical switchers for sector selection and verification lifecycle exploration. |
| **Direct WhatsApp + Phone + Short Enquiry Form** | Adapted to Indian B2B reality (Neeraj handles enquiries directly) with mobile-first tap targets for LinkedIn mobile traffic. |
| **DPDP Act 2023 consent notice + `/privacy`** | Matches top Indian BFSI vendor standards and satisfies statutory compliance from day one. |

---

## 4. Perfios.ai Live Visual & 3D Scroll Teardown (22 Nov 2026)

Audited at `1440x900` on `https://perfios.ai/?ref_page=home` to derive structural, typographic, and 3D choreography patterns for WeAct Global:

1. **Hero Composition (50/50 Asymmetric Split):**
   - Left: compact dark pill badge + bold Editorial Serif H1 paired with a vertical rotating buyer-sector slot + 3-line value statement + horizontal gradient CTA (`#F08030 -> #FFA352` in WeAct's palette).
   - Right: 2-column dark rounded-tile grid (`#101013` / `#17171B` fill, `1px` border) showcasing verified scale & compliance facts instead of unapproved client logos.
2. **Dark Obsidian Surface + Subtle Radial Vignette:**
   - Alternates deep `#060608` ground with subtle warm radial vignette illumination behind the 3D monolith so negative space (`~40-50%` per band) gives the geometry breathing room.
3. **Persistent 3D Monolith Across Scroll Chapters:**
   - Rather than heavy `<canvas>` WebGL overhead, CSS 3D `preserve-3d` extruded planes driven by `motion/react` `useScroll` + `useSpring` move the brand totem across chapters: right side for intro -> receding opposite the skewed E-platform portal -> left margin beside the Sector Switcher -> right third beside the Lifecycle Switcher -> bold closing perspective beside the CTA.
4. **Signature Active Tab Geometry:**
   - Both vertical switchers highlight the active selection with a subtle elevated dark card surface and a razor-sharp `2px` bottom accent border (`var(--accent)`) rather than loud full-box fills.
5. **Footer Framing:**
   - Top full-width dark empanelment banner framed by a crisp `1px` accent border, followed by certification strip, multi-column sitemap, and registered corporate credentials.
