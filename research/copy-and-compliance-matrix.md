# Copy, Compliance & Attribution Matrix — WeAct Global

Reference sheet governing every page, claim, form field, and tracking event on `weactglobal.com`.

---

## 1. Approved vs. Restricted Claims

### Approved for Public Pages (from WeAct Company Profile)
- **Field workforce:** `3,200+` trained / verified field staff
- **Geographic reach:** `585+` cities, towns, and semi-urban locations
- **PIN-code footprint:** `10,000+` PIN codes covered (North, South, and East zones; regional language capability)
- **Track record:** `1M+` verifications delivered
- **Quality certification:** `ISO 9001:2015` certified
- **Turnaround commitment:** `48–72 hour` turnaround-time commitments, subject to assignment scope and agreed SLA
- **Corporate credentials:**
  - Legal name: WeAct Global Solutions (OPC) Pvt. Ltd.
  - CIN: `U74999DL2022OPC398570`
  - GSTIN: `07AADCW2621H1ZI`
  - Registered address: `1/51, Third Floor, WHS Kirti Nagar Industrial Area, Kirti Nagar Furniture Market, New Delhi – 110015`
  - Contact: Neeraj Juneja, Director · `+91 98992 07285` · `neeraj@weactglobal.com`

### Strictly Restricted (DO NOT PUBLISH until written client sign-off)
- **Client names & logos:** IndiaFirst Life Insurance, Future Generali Life, Rubix Data Sciences, Dun & Bradstreet, Runpaisa, IndusInd Bank, Bank of Maharashtra, TATA Communications, KEI, Dr. Reddy's, G-Track, Cenit Advisory, Aramex, DHL.
- **Testimonials:** Samir Modi (Rubix Data Sciences), Shashank (Thronepe & Runpaisa).
- **Contextual performance figures:** `98%` SLA adherence, `78%` verifications under 24-hour TAT, `95%` client satisfaction score, `9,000+` monthly support calls (TATA Communications).
- **Public-safe substitute:** State industry verticals served (*Banking & NBFCs*, *Life & General Insurance*, *Payment Aggregators & Fintechs*, *Enterprise IT & Telecom*, *Logistics & Distribution*) and invite prospects to request the empanelment deck / references under NDA.

---

## 2. Sitemap & Buyer Persona Mapping

| Route | Primary Buyer | Core Problem Answered | Primary CTA |
|---|---|---|---|
| `/` | All enterprise operations, risk & procurement heads | Need one accountable PAN-India field execution partner across verification, audits, and onsite IT | Request verification / empanelment call |
| `/verification-kyc` | Banks, NBFCs, life & general insurers | Physical CPV, KYC, due diligence, and background checks stall across Tier II/III PIN codes | Scope a verification pilot |
| `/merchant-onboarding` | Fintechs, payment aggregators, payment gateways | RBI-aligned physical merchant verification and premises checks needed fast before activation | Discuss merchant verification SLA |
| `/field-it-support` | Enterprises with distributed branches & endpoints | Multi-city laptop, desktop, and printer support needs ticketed dispatch and ERP visibility | Request onsite IT coverage |
| `/company-profile` | Procurement & vendor empanelment teams | Need formal credentials (ISO, CIN, GSTIN, coverage, security) to initiate vendor onboarding | Download empanelment profile |
| `/thank-you` | Post-form submitters | Confirmation + immediate WhatsApp / phone escalation to Director | Message on WhatsApp / Call |
| `/privacy` | All visitors & compliance reviewers | DPDP Act 2023 notice: what is collected, why, recipient, retention & deletion request path | Deletion request via email |

---

## 3. Attribution & Commission-Enforceable Tracking

Every form (`enquiry` and `company-profile`) records first-touch attribution persisted in `sessionStorage` (`weact_first_touch_utm`, wrapped in `try/catch`):

- `utm_source` (e.g., `linkedin`)
- `utm_medium` (`post` | `dm` | `company_page` | `profile`)
- `utm_campaign` (`wk01` … `wk06`)
- `utm_content` (short slug of post or DM)
- `landing_page` (initial pathname + search)
- `referrer` (`document.referrer` at first touch)
- `submitted_at` (ISO 8601 UTC timestamp)

### Analytics Events (GA4 + LinkedIn Insight Tag)
1. `form_submit` — payload: `{ service, utm_source, utm_medium, utm_campaign, page_path }`
2. `profile_download` — payload: `{ utm_source, utm_medium, utm_campaign, page_path }`
3. `whatsapp_click` — payload: `{ page_path, label }`
4. `call_click` — payload: `{ page_path, label }`
