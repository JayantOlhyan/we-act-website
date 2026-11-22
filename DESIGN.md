# Design: WeAct Global (`weactglobal.com`)

The locked design system for WeAct Global Solutions (OPC) Pvt. Ltd. Every UI task reads this file first and adheres to it. Change it deliberately; never contradict it in component code.

---

## 1. Direction & Tone

- **Genre:** `modern-minimal` (institutional B2B operations & compliance)
- **Tone:** Audit-grade, utilitarian, authoritative, calm. Built for bank, NBFC, insurer, fintech, and enterprise operations heads opening links from LinkedIn on mobile.
- **Reference Posture:** Structural clarity and institutional trust comparable to enterprise risk/verification leaders (e.g., AuthBridge, Netrika Consulting) — original visual identity grounded in WeAct's own charcoal-and-orange brand mark.
- **Anti-patterns (strictly forbidden):** No AI-SaaS purple/blue gradients, no glow borders, no floating glass blobs, no decorative filler sections, no tracked uppercase eyebrows, no card-inside-a-card nesting, no emoji icons, no invented metrics, no unapproved client logos or testimonials.

---

## 2. Color Tokens

All colors live as CSS custom properties in `:root` (mapped to Tailwind CSS variables). **Zero hardcoded hex values in components.**

```css
:root {
  /* Surfaces (architectural light ground) */
  --background: oklch(0.992 0.002 90);          /* #FDFDFB crisp warm white */
  --surface: oklch(0.968 0.004 85);             /* #F5F4F0 subtle stone panel */
  --surface-elevated: oklch(1 0 0);             /* #FFFFFF elevated form/card */
  --surface-dark: oklch(0.24 0 0);              /* #1F1F1F charcoal band (footer / high-contrast strip) */

  /* Brand & Ink (anchored to WeAct logo: #282828 charcoal + #F08030 orange) */
  --foreground: oklch(0.235 0 0);               /* #1E1E1E primary ink */
  --brand-charcoal: oklch(0.278 0 0);           /* #282828 WeAct logo charcoal */
  --muted-foreground: oklch(0.46 0.005 70);     /* #5C5A56 secondary ink (AA >= 6.5:1 on white) */
  --border: oklch(0.895 0.004 85);              /* #DFDDD8 crisp 1px hairline */
  --border-strong: oklch(0.78 0.005 80);        /* #BDBAB4 active/input border */

  /* Signal Accent (WeAct Orange #F08030) */
  --accent: oklch(0.713 0.163 48.2);            /* #F08030 brand signal (fills with dark ink, rules, icons) */
  --accent-foreground: oklch(0.21 0 0);         /* #181818 high-contrast ink on orange (7.4:1 AA+) */
  --accent-text: oklch(0.54 0.145 46);          /* #B8510B accessible orange for text links on light ground (4.9:1 AA) */
  --accent-subtle: oklch(0.955 0.032 52);       /* #FDF0E6 subtle orange tint for active states */

  /* Primary Action */
  --primary: oklch(0.278 0 0);                  /* #282828 WeAct charcoal */
  --primary-foreground: oklch(0.99 0 0);        /* #FCFCFC crisp white (14.5:1 AAA) */

  /* Semantic */
  --destructive: oklch(0.54 0.2 25);            /* #C9352B validation error */
  --success: oklch(0.49 0.13 152);              /* #1F7A4D verified / submitted */
  --ring: oklch(0.713 0.163 48.2);              /* #F08030 instant :focus-visible ring */
}
```

### Contrast Rules
- Never place white text on `#F08030` (`--accent`). Always use `--accent-foreground` (`#181818`) on `--accent`, or use `--primary` (`#282828`) with `--primary-foreground` (`#FCFCFC`).
- Never use raw `#F08030` for small body links on white; use `--accent-text` (`#B8510B`).

---

## 3. Typography

Loaded via `next/font/google` and bound to CSS variables.

- **Display / Headings (`--font-display`):** `Plus Jakarta Sans` (weights 600, 700). Tight tracking (`-0.025em` on H1, `-0.015em` on H2/H3), single weight and single color per heading, `overflow-wrap: break-word`. Never italicize a single word inside a roman heading.
- **Body / UI (`--font-sans`):** `Inter` (weights 400, 500, 600). Base size `16px`, line-height `1.6`, max prose measure `65ch`.
- **Technical / Tabular (`--font-mono`):** `JetBrains Mono` (weight 400, 500) — used strictly for PIN-code counts, SLA durations, ISO/CIN/GSTIN identifiers, and structured tabular figures (`font-variant-numeric: tabular-nums`). Never used as decorative eyebrow labels.
- **Labels & Nav:** Body face (`Inter`), sentence case, `14px`, untracked. No all-caps tracked eyebrows.

### Type Scale
| Role | Mobile (375px) | Desktop (1280px+) | Weight | Line Height |
|---|---|---|---|---|
| H1 (Hero) | `32px` | `48px` | 700 | `1.1` |
| H2 (Section) | `26px` | `34px` | 600 | `1.2` |
| H3 (Item/Card) | `19px` | `21px` | 600 | `1.3` |
| Body | `16px` | `16px` | 400 | `1.6` |
| Small / Meta | `14px` | `14px` | 400/500 | `1.5` |

---

## 4. Layout, Grid & Spacing

- **Container:** Capped at `1200px` (`max-w-[1200px] mx-auto px-5 sm:px-8`). At `1920px`, outer gutters grow while content measure and grids stay locked.
- **Horizontal safety:** `overflow-x: clip` on `html` and `body`. Zero horizontal scroll at `360px` / `375px`.
- **Grid discipline:** Image- and data-bearing grid tracks use `minmax(0, 1fr)`. One consistent column gap (`24px` / `gap-6`) below the hero.
- **Section rhythm:** Generous vertical separation (`py-14 md:py-20`) separated by `1px solid var(--border)` hairline rules or subtle alternating `--background` / `--surface` bands.
- **Above the fold:** Hero headline (≤ 7 words), one value sentence, primary CTA, and secondary action (WhatsApp / Call) must all be visible without scrolling at `1280×800` and `375×812`.
- **Radii:** Architectural and restrained — `--radius-sm: 6px` (inputs, badges), `--radius-md: 8px` (buttons, panels), `--radius-lg: 12px` (form containers). No heavy drop shadows; use crisp `1px` borders.

---

## 5. Controls & Interactive States

All primitives sourced from **shadcn/ui (Base UI base)** — never hand-rolled.

- **Primary Button:** `--primary` fill (`#282828`), `--primary-foreground` text, `8px` radius, `44px` min height (touch-safe on mobile). Hover darkens slightly or shows subtle `--accent` indicator; instant `:focus-visible` ring (`2px solid var(--ring)`, `2px` offset).
- **Accent CTA (Enquiry Submit / Urgent Action):** `--accent` fill (`#F08030`), `--accent-foreground` (`#181818`) bold text, `8px` radius, `44px` min height.
- **Secondary Button:** Transparent or `--surface-elevated` with `1px solid var(--border-strong)`, `--foreground` text, same radius and height.
- **WhatsApp / Call Actions:** Clean, direct buttons with `lucide-react` icons (`MessageSquare` / `Phone`), clearly labelled, tracked via analytics events (`whatsapp_click`, `call_click`).
- **Forms:** Built with `react-hook-form` + `zod` + shadcn form controls. Visible labels above every input (never placeholder-only), clear inline error messages, mandatory DPDP Act 2023 consent checkbox linking to `/privacy`, honeypot field hidden from assistive tech, and hidden first-touch UTM + page metadata fields.

---

## 6. Motion

- **Character:** **Minimal / Severe.** Operations buyers value speed and clarity.
- **Rules:** Use `motion/react` sparingly — at most one restrained entrance reveal per viewport (`opacity` + `translateY(8px)`, `220ms`, `ease-out`). Never animate `width`, `height`, `top`, `left`, or use `transition: all`.
- **Accessibility:** Full `prefers-reduced-motion: reduce` support; all content remains visible with JavaScript disabled.

---

## 7. Architecture & Compliance Guardrails

- **Stack:** Next.js (App Router) + TypeScript (strict) + Tailwind CSS + shadcn/ui (Base UI) + `motion` + `react-hook-form` + `zod` + `lucide-react`. Deployed on Netlify.
- **Excluded (out of scope):** No CMS, no database, no auth, no CRM, no chatbot, no `react-query`, no `zustand`.
- **Routes (7 total):**
  1. `/` — Main landing page
  2. `/verification-kyc` — CPV, due diligence, KYC visits, background verification
  3. `/merchant-onboarding` — Physical merchant & payment gateway verification
  4. `/field-it-support` — Onsite engineers, ticketed field support, ERP integration
  5. `/company-profile` — Gated empanelment profile PDF download
  6. `/thank-you` — Post-submission confirmation + WhatsApp escalation
  7. `/privacy` — DPDP Act 2023 privacy & data handling notice
- **Approved Proof Points ONLY:**
  - `3,200+` trained field staff · `585+` cities · `10,000+` PIN codes · `1M+` verifications delivered · `ISO 9001:2015` certified · `48–72 hour` turnaround commitments (subject to scope & SLA).
- **Restricted Content (DO NOT PUBLISH without written client sign-off):**
  - No named client lists, client logos, or testimonials (IndiaFirst, Future Generali, Rubix, D&B, Runpaisa, IndusInd, Bank of Maharashtra, TATA, etc.).
  - No contextual performance figures (`98% SLA`, `78% under 24h`, `95% CSAT`, `9,000+ monthly support calls`).
  - Use industry verticals served (e.g., *Banking & NBFCs*, *Life & General Insurance*, *Payment Aggregators & Fintechs*, *Enterprise IT*) until written logo/quote approvals arrive.
