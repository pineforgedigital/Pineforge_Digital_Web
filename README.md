# Pineforge Digital Website

The official corporate website for [Pineforge Digital LLC](https://pineforge.digital), built with **Next.js App Router**, **TypeScript**, and **Resend**.

## Tech Stack

*   **Framework:** Next.js 16 (App Router) & React 19
*   **Language:** TypeScript
*   **Styling:** Custom CSS (`app/globals.css`) with Inter via `next/font/google`
*   **Email & Lead Handling:** Next.js Server Actions (`app/actions/contact.ts`) + Resend API
*   **Analytics:** Vercel Analytics & Vercel Speed Insights (consent-aware)
*   **Deployment:** Vercel

## Getting Started

### Prerequisites

*   Node.js 20.9+
*   npm

### Installation

```bash
git clone https://github.com/cannonc6-cell/Pineforge_Digital_Web.git
cd Pineforge_Digital_Web
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory for local contact form testing:

```env
RESEND_API_KEY=re_123456789
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Verification Commands

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Project Structure

*   **`app/`**: App Router pages (`/`, `/services`, `/process`, `/about`, `/contact`, `/privacy`, `/terms`), `sitemap.ts`, `robots.ts`, `not-found.tsx`, `globals.css`, and `actions/contact.ts`.
*   **`components/`**: Shared UI and client components (`Navbar`, `Footer`, `ContactForm`, `CookieBanner`, `AnalyticsWrapper`, `SpotlightEffects`).
*   **`lib/`**: Shared allowlists and structured data (`contact.ts`, `schema.ts`).
*   **`public/`**: Static icons, verification files, and optimized brand/portfolio images.

## Security & Headers

Configured in `next.config.mjs`:
*   Strict HTTP security headers (`Strict-Transport-Security`, `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)
*   Permanent `308` redirects for legacy `.html` URLs
*   Server-side contact form rate limiting, honeypot + time-trap bot filtering, strict input/allowlist validation, and explicit Resend delivery verification

## Vercel Deployment Notes

When deploying the `v2-nextjs-migration` branch (or after merging into `main`):

1.  In the Vercel Dashboard under **Project Settings -> Build and Deployment**, set **Framework Preset** to **Next.js** (switching from the legacy Express preset).
2.  Ensure `RESEND_API_KEY` is configured in **Project Settings -> Environment Variables**.
3.  Deploy!
