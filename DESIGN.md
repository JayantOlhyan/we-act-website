# Design: WeAct Global (`weactglobal.com`)

The locked design system for WeAct Global Solutions (OPC) Pvt. Ltd. (Obsidian Institutional + 3D Scroll Prism Edition). Every UI task reads this file first and adheres to it. Change it deliberately; never contradict it in component code.

---

## 1. Direction & Tone

- **Genre:** `modern-minimal` (obsidian institutional B2B operations & compliance)
- **Visual Reference:** Structural layout, editorial serif display voice, dark-obsidian radial atmosphere, interactive vertical switchers, and persistent 3D scroll prism adapted from `perfios.ai` — re-engineered 100% in WeAct Global's charcoal-and-signal-orange brand palette.
- **Tone:** Audit-grade, authoritative, calm, technologically capable. Built for bank, NBFC, insurer, fintech, and enterprise operations heads opening links from LinkedIn on mobile and desktop.
- **Anti-patterns (strictly forbidden):** No AI-SaaS purple/blue gradients, no generic neon glows, no floating glass blobs, no decorative filler sections, no tracked uppercase eyebrows, no card-inside-a-card nesting, no emoji icons, no em-dashes in UI copy, no invented metrics, no unapproved client logos or testimonials.

---

## 2. Color Tokens

All colors live as CSS custom properties in `:root` (mapped to Tailwind CSS variables). **Zero hardcoded hex values in components.**

```css
:root {
  /* Surfaces (obsidian charcoal ground with subtle warm atmospheric depth) */
  --background: oklch(0.11 0.004 55);           /* #060608 obsidian ground */
  --surface: oklch(0.155 0.005 55);             /* #101013 structured dark band */
  --surface-elevated: oklch(0.195 0.006 55);    /* #17171B elevated card/tab surface */
  --surface-vignette: oklch(0.175 0.022 48);    /* subtle warm charcoal-copper radial vignette */

  /* Brand & Ink (anchored to WeAct logo: #282828 charcoal + #F08030 orange) */
  --foreground: oklch(0.965 0.004 80);          /* #F5F4F0 titanium white primary ink */
  --brand-charcoal: oklch(0.278 0 0);           /* #282828 WeAct logo charcoal */
  --muted-foreground: oklch(0.71 0.006 70);     /* #A6A39D secondary ink (>= 7:1 AA contrast on obsidian) */
  --border: oklch(0.26 0.006 55);               /* #27272B crisp 1px dark hairline */
  --border-strong: oklch(0.36 0.008 55);        /* #3E3E44 active/input border */

  /* Signal Accent (WeAct Orange #F08030 family) */
  --accent: oklch(0.713 0.163 48.2);            /* #F08030 primary signal fill & 3D prism highlight */
  --accent-bright: oklch(0.78 0.15 55);         /* #FFA352 warm amber highlight / CTA gradient end */
  --accent-deep: oklch(0.54 0.145 45);          /* #B84D10 deep copper shaded 3D facet */
  --accent-foreground: oklch(0.14 0.004 55);    /* #0D0D0F dark ink on orange (>= 7.4:1 AA+) */
  --accent-text: oklch(0.77 0.155 52);          /* #FF9B4E accessible orange for text links on obsidian (>= 8.5:1 AA+) */
  --accent-subtle: oklch(0.24 0.045 48);        /* warm dark amber-tinted active surface */

  /* Primary Action */
  --primary: oklch(0.965 0.004 80);             /* #F5F4F0 crisp primary button on dark ground */
  --primary-foreground: oklch(0.14 0.004 55);   /* #0D0D0F dark ink */

  /* Semantic */
  --destructive: oklch(0.68 0.19 25);           /* #F87171 high-contrast validation error on obsidian */
  --success: oklch(0.72 0.14 152);              /* #4ADE80 verified / submitted on obsidian */
  --ring: oklch(0.77 0.155 52);                 /* #FF9B4E instant :focus-visible ring */
}
```

### Contrast Rules
- Never place white text on `#F08030` (`--accent`) or `.weact-cta-gradient`. Always use `--accent-foreground` (`#0D0D0F`).
- Never use dim muted text below `--muted-foreground` (`#A6A39D`) for readable body copy on obsidian surfaces.
- On dark obsidian, use `--accent-text` (`#FF9B4E`) for inline accent words, `Learn more` links, and active indicators (`>= 8.5:1` contrast).

---

## 3. Typography

Loaded via Google Fonts CSS tokens in `src/app/layout.tsx` and bound in `src/app/globals.css`.

- **Display / Headings (`--font-display`):** `Playfair Display` (weights 500, 600, 700) — high-contrast editorial serif voice for H1/H2 section titles, matching Perfios's authoritative enterprise heading cadence. Tight tracking (`-0.02em`), single weight and single color per heading (except the dedicated rotating buyer noun slot in the Hero H1), `overflow-wrap: break-word; min-width: 0`. Never italicize a single word inside a roman heading.
- **Body / UI (`--font-sans`):** `Inter` (weights 400, 500, 600). Base size `16px`, line-height `1.6`, max prose measure `65ch`.
- **Technical / Tabular (`--font-mono`):** `JetBrains Mono` (weights 400, 500) — used strictly for PIN-code counts, SLA durations, ISO/CIN/GSTIN identifiers, and structured tabular figures (`font-variant-numeric: tabular-nums`). Never used as decorative eyebrow labels.
- **Labels & Nav:** Body face (`Inter`), sentence case, `14px`, untracked. No all-caps tracked eyebrows.

### Type Scale
| Role | Mobile (375px) | Desktop (1280px+) | Weight | Line Height |
|---|---|---|---|---|
| H1 (Hero) | `34px` | `54px` | 600 | `1.08` |
| H2 (Section) | `28px` | `40px` | 600 | `1.16` |
| H3 (Item/Card) | `19px` | `21px` | 600 | `1.3` |
| Body | `16px` | `16px` | 400 | `1.6` |
| Small / Meta | `14px` | `14px` | 400/500 | `1.5` |

---

## 4. Layout, Grid & 3D Scroll Architecture

- **Container:** Capped at `1280px` (`max-w-[1280px] mx-auto px-5 sm:px-8`). At `1920px`, outer gutters grow while content measure and grids stay locked.
- **Horizontal safety:** `overflow-x: clip` on `html` and `body` (never `overflow: hidden`, so `position: sticky` works reliably for the desktop 3D scroll stage). Zero horizontal scroll at `360px` / `390px`.
- **Grid discipline:** Image- and data-bearing grid tracks use `minmax(0, 1fr)`. One consistent column gap (`24px` / `gap-6`) for multi-card grids.
- **3D Scroll Prism (`WeActPrism3D` + `HomeScrollStory`):**
  - Desktop (`>= 1024px`): A sticky viewport-tall 3D stage drives a true CSS `preserve-3d` extruded two-block geometric WeAct Prism (upper chamfered Signal-Orange block + lower Architectural Charcoal pillar + diagonal Signal-Orange hairline beam) via `motion/react` `useScroll` + `useSpring` across 5 chapters (`Operating Backbone` -> `E-Platform Console` -> `Interactive Sector Switcher` -> `Interactive Lifecycle Switcher` -> `Security & Director CTA`).
  - Mobile (`< 1024px`): Separate mobile composition with inline visual accents, zero pinned dead scroll, and touch-safe vertical stacking.
- **Above the fold:** Hero headline, rotating target buyer slot, value sentence, primary `.weact-cta-gradient` CTA, WhatsApp/Call actions, and the 2-column dark proof tile grid are immediately legible without scrolling at `1440x900` / `1280x800` and cleanly stacked at `390x844`.
- **Radii:** Architectural and restrained — `--radius-sm: 6px`, `--radius-md: 8px`, `--radius-lg: 12px`. Crisp `1px` hairline borders (`--border`) and Perfios-style `.weact-tab-active` (dark elevated surface + `2px` bottom `--accent` border).

---

## 5. Controls & Interactive States

All primitives sourced from **shadcn/ui (Base UI style `base-nova`)** or cleanly wrapped in `components/ui/`.

- **Accent CTA (`.weact-cta-gradient`):** Horizontal gradient `--accent` to `--accent-bright` (`#F08030` -> `#FFA352`), `--accent-foreground` (`#0D0D0F`) semibold text, `8px` radius, `44px` min height.
- **Primary Button:** Crisp `--primary` (`#F5F4F0`) fill with `--primary-foreground` (`#0D0D0F`) text on dark obsidian, `8px` radius, `44px` min height.
- **Outline / Secondary Button:** `--surface-elevated` with `1px solid var(--border-strong)`, `--foreground` text, `8px` radius, `44px` min height.
- **Active Switcher Tab (`.weact-tab-active`):** Elevated `--surface-elevated` card surface, `8px` radius, subtle top/side hairlines, and `2px solid var(--accent)` bottom edge.
- **Forms:** Built with `react-hook-form` + `zod`. Visible labels above every dark-surface input (`#131317`), clear `--destructive` inline validation messages, mandatory DPDP Act 2023 consent checkbox linking to `/privacy`, hidden honeypot (`website_url`), and hidden first-touch UTM + page metadata fields.

---

## 6. Motion

- **Character:** **Architectural 3D Scroll + Restrained Micro-Interactions.**
- **Rules:**
  - All 3D scroll transformations animate strictly `transform` (`translate3d`, `rotateX`, `rotateY`, `rotateZ`, `scale`) and `opacity` on GPU-composited layers. Never animate `width`, `height`, `top`, `left`, or use `transition: all`.
  - Subtle pointer tilt (`<= 7deg`) applies only when `(hover: hover) and (pointer: fine)` matches.
  - Full `prefers-reduced-motion: reduce` support: disables hero rotating word cycle, 3D continuous rotation, and proof-wall drift, while keeping all content, tabs, forms, and static 3D emblem visible and functional.

---

## 7. Architecture & Compliance Guardrails

- **Stack:** Next.js 15 (App Router) + TypeScript (strict) + Tailwind CSS v4 + shadcn/ui (`base-nova`) + `motion` (`motion/react`) + `react-hook-form` + `zod` + `lucide-react`. Deployed on Netlify.
- **Excluded (out of scope):** No CMS, no database, no auth, no CRM, no chatbot, no `react-query`, no `zustand`.
- **Routes (7 total):**
  1. `/` — Main landing page (Hero + 5-chapter 3D scroll experience + Security + Enquiry)
  2. `/verification-kyc` — CPV, due diligence, KYC visits, background verification
  3. `/merchant-onboarding` — Physical merchant & payment gateway verification
  4. `/field-it-support` — Onsite engineers, ticketed field support, ERP integration
  5. `/company-profile` — Gated empanelment profile PDF download
  6. `/thank-you` — Post-submission confirmation + WhatsApp escalation
  7. `/privacy` — DPDP Act 2023 privacy & data handling notice
- **Approved Proof Points ONLY:**
  - `3,200+` trained field staff · `585+` cities · `10,000+` PIN codes · `1M+` verifications delivered · `ISO 9001:2015` certified · `48-72 hour` turnaround commitments (subject to scope & SLA).
- **Restricted Content (DO NOT PUBLISH without written client sign-off):**
  - No named client lists, client logos, or testimonials (IndiaFirst, Future Generali, Rubix, D&B, Runpaisa, IndusInd, Bank of Maharashtra, TATA, etc.).
  - No contextual performance figures (`98% SLA`, `78% under 24h`, `95% CSAT`, `9,000+ monthly support calls`).
  - Use industry verticals served until written logo/quote approvals arrive.
