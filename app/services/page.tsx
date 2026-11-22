import type { Metadata } from "next";
import Link from "next/link";
import { professionalServiceJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Custom Web Development Services in Kenosha, WI",
  description:
    "Explore Pineforge Digital's custom website builds, web applications, internal dashboards, e-commerce payment systems, and API integrations in Southeastern Wisconsin.",
  alternates: {
    canonical: "https://pineforge.digital/services",
  },
  openGraph: {
    title: "Custom Web Development Services | Pineforge Digital",
    description:
      "Hand-coded websites, internal dashboards, e-commerce payment flows, and API integrations built to clear Statement of Work specifications.",
    url: "https://pineforge.digital/services",
    images: ["/images/logo-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <main id="main-content">
        <section className="page-header-dark">
          <div className="container animate-fade-up">
            <span className="badge badge-dark" style={{ marginBottom: "1rem" }}>
              Capabilities
            </span>
            <h1>Custom Web Development Services</h1>
            <p>
              We build custom websites, web applications, internal dashboards,
              and API integrations under clear Statement of Work milestones.
            </p>
          </div>
        </section>

        <section style={{ padding: "8rem 0" }}>
          <div className="container">
            {/* 1. Custom Website Design & Build */}
            <div className="service-row">
              <div className="service-text animate-fade-up">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                  Custom Website Design &amp; Build
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  We build fast, reliable business websites from scratch using
                  your copy, logos, and imagery. By eliminating bloated page
                  builders, we deliver responsive storefronts built for speed,
                  clarity, and straightforward ownership.
                </p>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Key Deliverables:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "1.5rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  <li>
                    Fast, lightweight custom code (Google Lighthouse optimized)
                  </li>
                  <li>Fully responsive, mobile-first layout</li>
                  <li>
                    Clean semantic HTML &amp; Schema.org technical foundations
                  </li>
                  <li>
                    Sanity.io headless CMS included for effortless content
                    updates
                  </li>
                </ul>
              </div>
              <div
                className="bento-card service-card animate-fade-up delay-1"
                style={{ background: "var(--bg-surface)", padding: "3rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Business Outcomes
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "1rem",
                  }}
                >
                  Eliminate template lag, ensure crisp mobile usability, and
                  present your company with a custom-built digital storefront.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="badge badge-emerald">Fast Load Times</span>
                  <span className="badge badge-blue">Custom Craftsmanship</span>
                  <span className="badge badge-violet">Zero Builder Bloat</span>
                </div>
              </div>
            </div>

            {/* 2. Custom Web Applications & Internal Dashboards */}
            <div className="service-row service-row-reverse">
              <div className="service-text animate-fade-up">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                  Custom Web Applications &amp; Dashboards
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  For when off-the-shelf software slows your team down. We
                  architect secure internal dashboards, customer portals, and
                  custom scheduling or operational tools tailored specifically
                  to your workflows.
                </p>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Key Deliverables:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "1.5rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  <li>Custom internal dashboards &amp; administrative tools</li>
                  <li>Client portals with role-based authentication</li>
                  <li>Relational database architecture (PostgreSQL/Supabase)</li>
                  <li>Clean React / TypeScript front-end interfaces</li>
                </ul>
              </div>
              <div
                className="bento-card service-card animate-fade-up delay-1"
                style={{ background: "var(--bg-surface)", padding: "3rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Business Outcomes
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "1rem",
                  }}
                >
                  Consolidate scattered spreadsheets and manual steps into one
                  bespoke platform that your business owns outright.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="badge badge-amber">No Per-Seat Fees</span>
                  <span className="badge badge-emerald">Full Ownership</span>
                  <span className="badge badge-blue">Centralized Data</span>
                </div>
              </div>
            </div>

            {/* 3. E-Commerce & Payment Integration */}
            <div className="service-row">
              <div className="service-text animate-fade-up">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                  E-Commerce &amp; Payment Integration
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  We build streamlined checkout experiences and integrate
                  compliant payment processors like Stripe. Whether selling
                  products, bookings, or services, transactions stay fast,
                  reliable, and secure.
                </p>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Key Deliverables:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "1.5rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  <li>Stripe &amp; Shopify headless integrations</li>
                  <li>Custom shopping carts and checkout flows</li>
                  <li>Secure customer payment portals</li>
                  <li>Automated order notifications and receipt handling</li>
                </ul>
              </div>
              <div
                className="bento-card service-card animate-fade-up delay-1"
                style={{ background: "var(--bg-surface)", padding: "3rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Business Outcomes
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "1rem",
                  }}
                >
                  Reduce checkout friction and collect payments cleanly using
                  established, PCI-compliant payment providers.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="badge badge-emerald">Smooth Checkout</span>
                  <span className="badge badge-blue">Secure Payments</span>
                  <span className="badge badge-violet">Frictionless UX</span>
                </div>
              </div>
            </div>

            {/* 4. API Integrations & Business Automation */}
            <div className="service-row service-row-reverse">
              <div className="service-text animate-fade-up">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                  API Integrations &amp; Business Automation
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  Connect your website or internal dashboard to the documented
                  third-party platforms you already rely on—eliminating manual
                  copy-and-paste work across systems.
                </p>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Key Deliverables:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "1.5rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  <li>
                    Authenticated integrations with documented third-party APIs
                  </li>
                  <li>Automated lead routing &amp; webhook processing</li>
                  <li>CRM, scheduling, and inventory data display</li>
                  <li>Reliable server-side validation and error handling</li>
                </ul>
              </div>
              <div
                className="bento-card service-card animate-fade-up delay-1"
                style={{ background: "var(--bg-surface)", padding: "3rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Business Outcomes
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "1rem",
                  }}
                >
                  Save administrative time every week by automating routine data
                  handoffs between your website and backend tools.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="badge badge-amber">Less Manual Entry</span>
                  <span className="badge badge-emerald">Reliable Sync</span>
                  <span className="badge badge-blue">Clean Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          className="light-theme"
          style={{
            padding: "8rem 0",
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div className="container">
            <div className="section-header animate-fade-up">
              <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>
                Transparent Pricing
              </span>
              <h2>Investment Plans</h2>
              <p
                style={{
                  marginTop: "1rem",
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Clear starting pricing scoped through a written Statement of
                Work. Choose the tier that fits your technical goals.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: "2rem", marginBottom: "3rem" }}>
              {/* Tier 1 */}
              <div
                className="bento-card animate-fade-up"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "0.5rem",
                    marginTop: 0,
                  }}
                >
                  Standard Website
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  Built for local businesses needing a fast, mobile-responsive,
                  hand-coded digital storefront with clean technical markup.
                </p>

                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: "2rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  $2,000
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-tertiary)",
                      fontWeight: 500,
                      letterSpacing: 0,
                    }}
                  >
                    {" "}
                    /starting
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "2.5rem",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-emerald)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Custom Code &amp; Design
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-emerald)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Lightning-Fast Load Times
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-emerald)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Mobile Responsive Layout
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-emerald)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Semantic HTML &amp; Schema Foundations
                  </li>
                </ul>

                <Link
                  href="/contact?service=website"
                  className="btn btn-secondary"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Get Started
                </Link>
              </div>

              {/* Tier 2 */}
              <div
                className="bento-card animate-fade-up delay-1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "0.5rem",
                    marginTop: 0,
                  }}
                >
                  E-Commerce Site
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  For growing businesses taking online payments, booking
                  appointments, or connecting documented third-party APIs.
                </p>

                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: "2rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  $3,500
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-tertiary)",
                      fontWeight: 500,
                      letterSpacing: 0,
                    }}
                  >
                    {" "}
                    /starting
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "2.5rem",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--brand-blue)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    <strong>Everything in Standard</strong>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--brand-blue)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Stripe Payment Integration
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--brand-blue)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Custom Scheduling Systems
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--brand-blue)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Standard API Connections
                  </li>
                </ul>

                <Link
                  href="/contact?service=ecommerce"
                  className="btn btn-primary"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Get Started
                </Link>
              </div>

              {/* Tier 3 */}
              <div
                className="bento-card animate-fade-up delay-2"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "0.5rem",
                    marginTop: 0,
                  }}
                >
                  Fully Custom App
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  Custom web applications, internal dashboards, and secure
                  client portals engineered specifically to your operational
                  requirements.
                </p>

                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: "2rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Quote
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-tertiary)",
                      fontWeight: 500,
                      letterSpacing: 0,
                    }}
                  >
                    {" "}
                    /custom build
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "2.5rem",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--text-tertiary)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Relational Database Architecture
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--text-tertiary)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Secure User Authentication
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--text-tertiary)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Interactive Internal Dashboards
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--text-tertiary)"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Optional Separate Maintenance Agreement
                  </li>
                </ul>

                <Link
                  href="/contact?service=app"
                  className="btn btn-secondary"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Request Quote
                </Link>
              </div>
            </div>

            {/* SOW & Scope Callout */}
            <div
              className="bento-card"
              style={{
                background: "white",
                padding: "2rem 2.5rem",
                maxWidth: "960px",
                margin: "0 auto",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>
                  Engagement Terms:
                </strong>{" "}
                Every project is governed by our Master Services Agreement and a
                written Statement of Work defining exact pages, integrations, and
                milestones. Clients supply final text copy, logos, and imagery.
                All completed launches include a 14-day defect warranty, with
                optional separate maintenance agreements available upon request.{" "}
                <Link
                  href="/terms"
                  style={{
                    color: "var(--brand-blue)",
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  Review Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="light-theme"
          style={{
            padding: "8rem 0",
            background: "var(--bg-base)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div className="container">
            <div className="section-header animate-fade-up">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <div className="bento-card animate-fade-up" style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                  Do you use WordPress or website templates?
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  No. We hand-code every website from scratch rather than
                  relying on bloated WordPress themes or drag-and-drop builders.
                  You get faster load times, tighter security with zero plugin
                  vulnerabilities, and clean semantic markup built to last.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-1"
                style={{ padding: "2rem" }}
              >
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                  Who owns the code after the project is finished?
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  You do. Upon full payment of all amounts due, ownership of the
                  final deliverables expressly identified in your Statement of
                  Work transfers to your business. Pre-existing libraries and
                  third-party open-source packages remain licensed for use within
                  your build.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-2"
                style={{ padding: "2rem" }}
              >
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                  How do you handle security and platform access?
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  We follow strict least-privilege practices: we never accept or
                  store master passwords, requesting Delegated or Collaborator
                  access only. For applications handling user logins or data, we
                  implement encrypted transport, strict validation, and scoped
                  database permissions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          style={{
            padding: "6rem 0",
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--border-subtle)",
            textAlign: "center",
          }}
        >
          <div className="container animate-fade-up">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
              Ready to build a custom solution for your business?
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              Schedule a consultation with our development team to define your
              Statement of Work, architecture, and timeline.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ padding: "1rem 2.5rem" }}
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
