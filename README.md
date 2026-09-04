# WeAct Global Solutions Website

> Modern, performance-optimized corporate frontend for WeAct Global Solutions, featuring PWA support, fluid animations, and static pre-rendering.

## Overview

This repository contains the source code for the WeAct Global Solutions corporate website. WeAct is a B2B enterprise providing PAN India Verification, KYC, Due Diligence, Audits, and IT Support services.

The project is built as a static/hybrid web application using **React 19** and **React Router v8**. It is heavily optimized for performance, SEO, and visual fidelity, utilizing GSAP for animations, Lenis for smooth scrolling, and a custom service worker for Progressive Web App (PWA) offline capabilities. It does not contain a backend API or database; all content is managed locally within the codebase.

## Features

* **Server-Side Rendering / Pre-rendering**: Pages are pre-rendered at build time via React Router for optimal SEO and load performance.
* **Progressive Web App (PWA)**: Implements a service worker (`sw.js`) with an offline fallback page and real-time network status toasts.
* **High-Performance Animations**: Utilizes GSAP (`@gsap/react`) for scroll-triggered hero animations, feature cards, and statistics counters.
* **Smooth Scrolling**: Integrated with Lenis for fluid, hardware-accelerated scroll interpolation.
* **Fluid Background Simulations**: Utilizes `webgl-fluid` for interactive WebGL background effects.
* **Tailwind CSS v4**: Implements utility-first styling alongside modular component-specific CSS (e.g., `button.css`, `hero.css`).

## Architecture

```text
User Request
    ↓
CDN / Netlify Edge (Configured via netlify.toml)
    ↓
Pre-rendered Static HTML (for indexed routes: /, /about, /services, etc.)
    ↓
React Hydration
    ↓
Client-side Routing (React Router v8)
    ↓
Static Data Services (app/data/content.ts)
```

## Tech Stack

### Frontend
* **Framework**: React 19
* **Routing / SSR**: React Router v8 (`@react-router/node`, `@react-router/serve`)
* **Styling**: Tailwind CSS v4, Custom CSS
* **Animations**: GSAP v3.12, WebGL Fluid Simulation, Lenis
* **Language**: TypeScript

### Infrastructure
* **Build Tool**: Vite v8
* **Deployment**: Netlify (`netlify.toml`)
* **Containerization**: Docker (Multi-stage build)

## Repository Structure

```text
weact-global-website/
├── app/
│   ├── components/       # Reusable UI elements (icons, layout headers/footers)
│   ├── data/             # Static content and copy (content.ts)
│   ├── lib/              # Utilities and configuration (e.g., GSAP config)
│   ├── routes/           # React Router page components (home, about, services, etc.)
│   ├── styles/           # Global and component-specific CSS
│   ├── root.tsx          # Root layout, ErrorBoundary, and Service Worker registration
│   └── routes.ts         # Route definitions and layout mapping
├── public/               # Static assets, PWA manifest, service worker (sw.js), icons
├── Dockerfile            # Multi-stage Docker build configuration
├── netlify.toml          # Netlify build commands, headers, and redirects
├── react-router.config.ts# React Router configuration (Prerendered routes)
├── vite.config.ts        # Vite plugins and configuration
└── package.json          # Dependencies and scripts
```

## Installation & Local Development

### Prerequisites
* Node.js v20+ (v24 recommended based on Dockerfile)
* npm

### Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "weact website"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## Docker / Self-Hosting

A multi-stage `Dockerfile` is provided for containerized environments.

1. **Build the image:**
   ```bash
   docker build -t weact-website .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 weact-website
   ```
   *Note: Ensure your reverse proxy routes traffic to port 3000.*

## Deployment

The project is pre-configured for Netlify deployment via `netlify.toml`.

### Build Process
```bash
npm run build
```
This generates:
* `build/client/`: Static assets and pre-rendered HTML (published to Netlify).
* `build/server/`: Server-side Node.js code (unused in standard static SPA fallback).

### Security Headers
The Netlify configuration automatically injects the following security headers:
* `X-Frame-Options: DENY`
* `X-Content-Type-Options: nosniff`
* `Referrer-Policy: strict-origin-when-cross-origin`
* `Strict-Transport-Security: max-age=31536000; includeSubDomains`

## Known Limitations

* **No Backend/Database**: The application relies entirely on hardcoded static data in `app/data/content.ts`. Any content updates require a codebase modification and redeployment.
* **No Authentication**: There is no auth mechanism or protected administration portal.
* **Contact Forms**: As there is no backend API mapped in this repository, form submissions (if implemented on the `/contact` route) likely rely on a third-party service (e.g., Netlify Forms, Formspree) or are not yet functional.

## AI / Developer Orientation

If you are an AI coding agent or a new developer making changes:
* **To update page content**: Modify `app/data/content.ts` or the specific page in `app/routes/`. Do not look for a database schema.
* **To add a new page**: Create the component in `app/routes/`, then register it in `app/routes.ts` and add the path to the `prerender` array in `react-router.config.ts`.
* **To modify animations**: Look in the component file itself (e.g., `app/routes/home.tsx`) for the `useGSAP` hook implementation.
* **To adjust styling**: Global CSS is in `app/styles/global.css`. Utility classes are Tailwind v4. Component-specific overrides are in `app/styles/components/`.
