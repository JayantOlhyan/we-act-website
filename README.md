# WeAct Global Website (`weactglobal.com`)

Production lead-capture website for **WeAct Global Solutions (OPC) Pvt. Ltd.** — built by Jayant Systems following `DESIGN.md` and the Jayant Systems Frontend Stack Rules.

---

## Project Status

- [x] **Design Foundation (`DESIGN.md`)**: Locked Daylight Architectural White (`#FDFDFB` / `#F5F3EE` / `#FFFFFF`) + WeAct Charcoal (`#282828`) + WeAct Signal Orange (`#F08030`) & Warm Amber (`#FFA14E`) token system, AA-compliant contrast roles, typography (`Playfair Display`, `Inter`, `JetBrains Mono`), and compliance guardrails.
- [x] **Competitive Research (`research/`)**: Reference website benchmarks (`Perfios.ai` live 3D-scroll teardown, `AuthBridge`, `Netrika Consulting`, `IDfy`, `Signzy`, `Kroll`, `First Advantage`, `SGS`) and copy/compliance/attribution matrix.
- [x] **Bespoke Editorial Photography & 3D Assets (`public/images/`)**:
  - `field-verification.jpg` — On-site Indian field verification executive capturing geo-tagged CPV/KYC proof
  - `merchant-audit.jpg` — Retail merchant onboarding & POS verification audit
  - `field-it-engineer.jpg` — Onsite enterprise IT engineer servicing branch hardware
  - `architectural-prism.jpg` — Studio macro 3D render of WeAct charcoal & signal-orange verification monolith on alabaster white
- [x] **Daylight 3D Scroll & Interactive B2B Architecture**:
  - Layered Daylight Hero with rotating buyer-sector slot (`RotatingHeroWord`), editorial field photography, live Geo-Tagged Field Capture dossier strip, and 4-metric proof bar
  - Three Flagship Field Practice photographic cards (`Verification, CPV & KYC`, `Merchant Onboarding & Audits`, `Onsite Field IT Support`)
  - 5-chapter desktop sticky CSS 3D `preserve-3d` WeAct Prism (`WeActPrism3D` + `HomeScrollStory`) with `motion/react` `useScroll` + `useSpring`, Field-to-ERP Architecture Flow diagram, interactive Sector Switcher (with live photography), and interactive Verification Lifecycle Console (with live `SPECIMEN` dossier checkpoints)
  - Interactive **PAN-India PIN-Code & Zone Coverage Explorer** (`IndiaCoverageConsole`) with 4 regional operating zones and an interactive SVG India PIN-grid dispatch map
  - ISO 9001:2015 Quality & Security Controls matrix paired with the statutory **Company at a Glance** ledger
- [x] **All 7 Routes Built**:
  - `/` — Main landing page
  - `/verification-kyc` — CPV, due diligence, KYC visits, background verification
  - `/merchant-onboarding` — Physical merchant onboarding & payment gateway verification
  - `/field-it-support` — Onsite IT engineers, ticketed dispatch, ERP integration
  - `/company-profile` — Gated vendor empanelment PDF download
  - `/thank-you` — Post-submit confirmation + WhatsApp/Call escalation
  - `/privacy` — DPDP Act 2023 privacy notice
- [x] **Attribution & Enquiry Pipeline**: First-touch UTM capture in `sessionStorage` (`weact_first_touch_utm`), hidden UTM fields, honeypot spam trap, server-side `zod` validation (`/api/enquiry`), Resend email hook, and Netlify Forms static registry (`public/__forms.html`) for exportable CSV enquiry logs.
- [x] **Build, Lint & Multi-Aspect-Ratio Browser QA Verification**:
  - WeAct logo added at `public/weact-logo.jpg` and official 5-page vendor empanelment PDF wired at `public/WeAct_Global_Company_Profile_Vendor_Empanelment.pdf` (`HTTP 200`)
  - Verified `npm run typecheck` (`tsc --noEmit`), `npm run lint` (`0` warnings, `0` errors), and `npm run build` (all 13 static/dynamic routes compiled cleanly)
  - Verified live across **5 aspect ratios** (`360x640` 9:16 mobile, `768x1024` 3:4 tablet portrait, `1024x768` 4:3 tablet landscape, `1280x800` 16:10 laptop, `1440x900`, and `1920x1080` 16:9 widescreen) and **all 7 routes** (`/`, `/verification-kyc`, `/merchant-onboarding`, `/field-it-support`, `/company-profile`, `/thank-you`, `/privacy`): `0` console errors, `0` failed network requests, `0` horizontal overflow at `360px`, container-locked 3D prism alignment, solid vertical buyer-sector reel, and cross-page `#enquiry` header routing
- [ ] **Remaining Go-Live Items**:
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
