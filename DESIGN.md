# Design: WeAct Global (`weactglobal.com`)

The locked design system for WeAct Global Solutions (OPC) Pvt. Ltd. (Daylight Institutional White + 3D Scroll Prism Edition). Every UI task reads this file first and adheres to it. Change it deliberately; never contradict it in component code.

---

## 1. Direction & Tone

- **Genre:** `modern-minimal` (daylight institutional B2B operations, compliance & verification)
- **Visual Reference:** Structural layout, editorial serif display voice, interactive vertical switchers, and persistent 3D scroll prism adapted from `perfios.ai`, combined with `SGS`, `AuthBridge`, and `Alloy` visual workflow diagrams — built on a **crisp architectural white & warm alabaster daylight palette** anchored to WeAct Global's charcoal (`#282828`) and signal orange (`#F08030`) brand mark.
- **Tone:** Audit-grade, authoritative, bright, trustworthy, and tangible. Built for Indian bank, NBFC, insurer, fintech, and enterprise operations heads.
- **Anti-patterns (strictly forbidden):** No dark/black mode canvas, no AI-SaaS purple/blue gradients, no neon glows, no decorative filler sections, no tracked uppercase eyebrows, no card-inside-a-card nesting, no emoji icons, no em-dashes in UI copy, no invented metrics, no unapproved client logos or testimonials.

---

## 2. Color Tokens (Daylight Architectural White)

All colors live as CSS custom properties in `:root` (mapped to Tailwind CSS variables). **Zero hardcoded hex values in components.**

```css
:root {
  /* Surfaces (crisp daylight alabaster white & warm architectural stone) */
  --background: oklch(0.992 0.002 85);          /* #FDFDFB crisp warm white primary canvas */
  --surface: oklch(0.968 0.004 82);             /* #F5F3EE warm stone secondary section band */
  --surface-elevated: oklch(1 0 0);             /* #FFFFFF pure white elevated card/panel */
  --surface-input: oklch(1 0 0);                /* #FFFFFF crisp form input surface */
  --surface-vignette: oklch(0.955 0.018 55);    /* soft warm daylight amber-stone radial aura */
  --surface-dark: oklch(0.22 0.004 55);         /* #1B1B1D deep charcoal masthead footer only */
  --surface-dark-foreground: oklch(0.975 0.002 85);
  --surface-dark-muted: oklch(0.76 0.005 75);

  /* Brand & Ink (anchored to WeAct logo: #282828 charcoal + #F08030 orange) */
  --foreground: oklch(0.205 0.004 55);          /* #171719 deep charcoal primary ink (16.5:1 AAA) */
  --brand-charcoal: oklch(0.278 0 0);           /* #282828 WeAct logo charcoal */
  --muted-foreground: oklch(0.45 0.006 65);     /* #575551 secondary ink (>= 7.2:1 AA+ on white) */
  --border: oklch(0.895 0.005 80);              /* #DFDDD7 crisp 1px architectural hairline */
  --border-strong: oklch(0.79 0.007 75);        /* #C0BDB5 active/input border */

  /* Signal Accent (WeAct Orange #F08030 family) */
  --accent: oklch(0.713 0.163 48.2);            /* #F08030 primary signal fill & 3D prism highlight */
  --accent-bright: oklch(0.77 0.15 55);         /* #FFA14E warm amber highlight */
  --accent-deep: oklch(0.52 0.145 45);          /* #B0480C deep copper shaded 3D facet */
  --accent-foreground: oklch(0.16 0.004 55);    /* #101012 dark ink on orange (>= 7.5:1 AA+) */
  --accent-text: oklch(0.52 0.145 45);          /* #B0480C accessible burnt orange for text on white (>= 5.2:1 AA) */
  --accent-subtle: oklch(0.955 0.028 52);       /* #FDF0E6 soft warm orange tint for badges/active states */

  /* Primary Action (WeAct Charcoal on white canvas) */
  --primary: oklch(0.235 0.004 55);             /* #1E1E20 deep charcoal button */
  --primary-foreground: oklch(0.99 0 0);        /* #FCFCFC crisp white ink (15:1 AAA) */

  /* Semantic */
  --destructive: oklch(0.53 0.2 25);            /* #C83228 validation error on white */
  --success: oklch(0.48 0.13 152);              /* #1D784B verified / geo-tagged status */
  --ring: oklch(0.713 0.163 48.2);              /* #F08030 instant :focus-visible ring */
}
```

### Contrast Rules
- Never place white text on `#F08030` (`--accent`) or `.weact-cta-gradient`. Always use `--accent-foreground` (`#101012`), or use `--primary` (`#1E1E20`) with `--primary-foreground` (`#FCFCFC`).
- Never use raw `#F08030` for small body text on white surfaces; always use `--accent-text` (`#B0480C`, `>= 5.2:1` AA contrast).

---

## 3. Typography

- **Display / Headings (`--font-display`):** `Playfair Display` (weights 500, 600, 700) — high-contrast editorial serif voice for H1/H2 section titles. Tight tracking (`-0.02em`), single weight and single color per heading (except the dedicated rotating buyer noun slot in the Hero H1).
- **Body / UI (`--font-sans`):** `Inter` (weights 400, 500, 600). Base size `16px`, line-height `1.6`, max prose measure `65ch`.
- **Technical / Tabular (`--font-mono`):** `JetBrains Mono` (weights 400, 500) — used strictly for PIN-code counts, GPS coordinates, SLA durations, ISO/CIN/GSTIN identifiers, and structured tabular figures (`font-variant-numeric: tabular-nums`).

---

## 4. Visual Richness, Photography & Interactive Elements

1. **Bespoke Editorial Photography & 3D Studio Renders (`public/images/`):**
   - Hero field verification executive photography with live geo-tagged evidence overlay card.
   - Merchant onboarding physical audit photography.
   - Onsite field IT support engineer photography.
   - Studio 3D architectural monolith render on alabaster white.
2. **Persistent Daylight 3D WeAct Prism (`WeActPrism3D` + `HomeScrollStory`):**
   - Brushed Charcoal (`#282828`) and Anodized Signal Orange (`#F08030`) extruded 3D monolith casting soft studio shadows on the white canvas, choreographed across 5 scroll chapters.
3. **Interactive PAN-India Zone & PIN-Code Coverage Explorer:**
   - Interactive zone selector (North, South, East & Central, West & Pan-India Corridors) with an SVG India coverage map and regional dispatch telemetry.
4. **Interactive Field-to-ERP Architecture & 4-Stage Pipeline Visualizer:**
   - Visual data flow from Client ERP/LOS/LMS to PIN-mapped field capture and SLA report.
5. **Perfios-Style Interactive Sector Switcher & Verification Lifecycle Console (with Visual Dossier Specimen):**
   - Elevated white active tab with a razor-sharp `2px` Signal-Orange bottom border (`.weact-tab-active`), paired with real photography and a live Verification Report Specimen preview.
