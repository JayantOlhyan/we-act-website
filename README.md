# WeAct Global Website (`weactglobal.com`)

Production lead-capture website for **WeAct Global Solutions (OPC) Pvt. Ltd.** — built by Jayant Systems following `DESIGN.md` and the Jayant Systems Frontend Stack Rules.

---

## Project Status

- [x] **Design Foundation (`DESIGN.md`)**: Locked Obsidian Charcoal (`#060608` / `#282828`) + WeAct Signal Orange (`#F08030`) & Warm Amber (`#FFA352`) token system, AA-compliant contrast roles, typography (`Playfair Display`, `Inter`, `JetBrains Mono`), and compliance guardrails.
- [x] **Competitive Research (`research/`)**: Reference website benchmarks (`Perfios.ai` live 3D-scroll teardown, `AuthBridge`, `Netrika Consulting`, `IDfy`, `Signzy`, `Kroll`, `First Advantage`, `SGS`) and copy/compliance/attribution matrix.
- [x] **Perfios-Inspired 3D Scroll & Interactive Architecture**:
  - Rotating Hero buyer-sector slot (`RotatingHeroWord`) paired with 2-column dark proof-tile showcase
  - 5-chapter desktop sticky CSS 3D `preserve-3d` WeAct Prism (`WeActPrism3D` + `HomeScrollStory`) with `motion/react` `useScroll` + `useSpring` and reduced-motion fallbacks
  - Interactive Sector Coverage Switcher (`Field Coverage Across Regulated Sectors`) and Verification Lifecycle Switcher (`We Simplify Your Field Verification Lifecycles`)
  - Compact interactive 3D prism accent across service landing pages (`/verification-kyc`, `/merchant-onboarding`, `/field-it-support`)
- [x] **All 7 Routes Built**:
  - `/` — Main landing page
  - `/verification-kyc` — CPV, due diligence, KYC visits, background verification
  - `/merchant-onboarding` — Physical merchant onboarding & payment gateway verification
  - `/field-it-support` — Onsite IT engineers, ticketed dispatch, ERP integration
  - `/company-profile` — Gated vendor empanelment PDF download
  - `/thank-you` — Post-submit confirmation + WhatsApp/Call escalation
  - `/privacy` — DPDP Act 2023 privacy notice
- [x] **Attribution & Enquiry Pipeline**: First-touch UTM capture in `sessionStorage` (`weact_first_touch_utm`), hidden UTM fields, honeypot spam trap, server-side `zod` validation (`/api/enquiry`), Resend email hook, and Netlify Forms static registry (`public/__forms.html`) for exportable CSV enquiry logs.
- [x] **Build, Lint & Visual/Interactive QA Verification**:
  - WeAct logo added at `public/weact-logo.jpg`
  - Verified `npm run typecheck` (`tsc --noEmit`), `npm run lint` (`0` warnings, `0` errors), and `npm run build` (all 13 static/dynamic routes compiled cleanly)
  - Verified live in browser at desktop (`1440x900`) and mobile (`390x844`): `0` console errors, `0` failed network requests, single-line header navigation, `0` horizontal overflow on mobile, verified interactive tab switching in Sector & Lifecycle consoles, and spot-checked `/verification-kyc`, `/company-profile`, and `/privacy`
- [ ] **Remaining Go-Live Items**:
  - Drop final `WeAct_Global_Company_Profile_Vendor_Empanelment.pdf` into `public/`
  - Lighthouse mobile audit (>= 90 Performance & Accessibility)
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
