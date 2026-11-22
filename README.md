# WeAct Global Website (`weactglobal.com`)

Production lead-capture website for **WeAct Global Solutions (OPC) Pvt. Ltd.** — built by Jayant Systems following `DESIGN.md` and the Jayant Systems Frontend Stack Rules.

---

## Project Status

- [x] **Design Foundation (`DESIGN.md`)**: Locked charcoal (`#282828`) + WeAct Signal Orange (`#F08030`) token system, AA-compliant contrast roles, typography (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`), and compliance guardrails.
- [x] **Competitive Research (`research/`)**: Reference website benchmarks (`AuthBridge`, `Netrika Consulting`, `IDfy`, `Karza/Perfios`, `Signzy`, `Kroll`, `First Advantage`, `SGS`) and copy/compliance/attribution matrix.
- [x] **All 7 Routes Built**:
  - `/` — Main landing page
  - `/verification-kyc` — CPV, due diligence, KYC visits, background verification
  - `/merchant-onboarding` — Physical merchant onboarding & payment gateway verification
  - `/field-it-support` — Onsite IT engineers, ticketed dispatch, ERP integration
  - `/company-profile` — Gated vendor empanelment PDF download
  - `/thank-you` — Post-submit confirmation + WhatsApp/Call escalation
  - `/privacy` — DPDP Act 2023 privacy notice
- [x] **Attribution & Enquiry Pipeline**: First-touch UTM capture in `sessionStorage` (`weact_first_touch_utm`), hidden UTM fields, honeypot spam trap, server-side `zod` validation (`/api/enquiry`), Resend email hook, and Netlify Forms static registry (`public/__forms.html`) for exportable CSV enquiry logs.
- [x] **Logo & Build Verification**:
  - WeAct logo added at `public/weact-logo.jpg`
  - Verified `npm run typecheck` (`tsc --noEmit`), Next.js ESLint/type checks, and `npm run build` (all 7 routes + `/api/enquiry`, `/sitemap.xml`, `/robots.txt` built cleanly)
- [ ] **Remaining Go-Live Items**:
  - Drop final `WeAct_Global_Company_Profile_Vendor_Empanelment.pdf` into `public/`
  - Visual QA at `360px`, `768px`, `1280px`, and `1920px` + Lighthouse mobile audit (>= 90 Performance & Accessibility)
  - Deploy to Netlify and point `weactglobal.com` DNS

---

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first tokens in `src/app/globals.css`)
- **UI Primitives:** shadcn/ui (`components.json` configured with `@magicui` and `@kibo-ui` registries)
- **Forms & Validation:** `react-hook-form` + `zod` (client & server)
- **Motion:** `motion` (`motion/react`, minimal with `prefers-reduced-motion`)
- **Icons:** `lucide-react`
- **Hosting & Forms:** Netlify (`netlify.toml` + `public/__forms.html`)

---

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

### Verification Commands

```bash
npm run typecheck
npm run lint
npm run build
```

---

## Compliance & Content Guardrails

- **Approved figures only:** `3,200+` trained field staff, `585+` cities, `10,000+` PIN codes, `1M+` verifications delivered, `ISO 9001:2015` certified, `48–72 hour` turnaround commitments (subject to scope & SLA).
- **Zero unapproved claims:** No client names, logos, testimonials, or contextual performance percentages are published until WeAct provides written confirmation.
- **DPDP Act 2023:** Every form requires explicit consent linking to `/privacy`.
