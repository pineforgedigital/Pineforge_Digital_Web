import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Web Design & Custom Software Services in Kenosha, WI | Pineforge Digital",
  description:
    "Explore our specialized web services for Kenosha businesses, including custom website design, client portals, and business applications.",
  alternates: {
    canonical: "https://pineforge.digital/services",
  },
  openGraph: {
    title: "Pineforge Digital | Premium Custom Web Development",
    description:
      "We build premium, custom websites that help local businesses generate more leads and revenue.",
    url: "https://pineforge.digital/services",
    images: ["/images/logo-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Pineforge Digital LLC",
  "url": "https://pineforge.digital",
  "logo": "https://pineforge.digital/images/Brand_Logo_white.png",
  "image": "https://pineforge.digital/images/logo-social.jpg",
  "description":
    "Custom website design, web development, and custom web development for small and mid-sized businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bristol",
    "addressRegion": "WI",
    "postalCode": "53104",
    "addressCountry": "US",
  },
  "areaServed": [
    { "@type": "City", "name": "Kenosha" },
    { "@type": "City", "name": "Racine" },
    { "@type": "City", "name": "Milwaukee" },
    { "@type": "State", "name": "Wisconsin" },
  ],
  "telephone": "+1-262-234-1027",
  "email": "admin@pineforge.digital",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
  ],
  "priceRange": "$$",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="page-header-dark">
          <div className="container animate-fade-up">
            <span className="badge badge-dark" style={{ marginBottom: "1rem" }}>
              Capabilities
            </span>
            <h1>Custom Web Development Services</h1>
            <p>
              We specialize in custom website design, backed by robust custom web
              development capabilities.
            </p>
          </div>
        </section>

        <section style={{ padding: "8rem 0" }}>
          <div className="container">
            {/* 1. Front-End Web Development */}
            <div
              className="grid grid-2"
              style={{
                gap: "4rem",
                alignItems: "center",
                marginBottom: "8rem",
              }}
            >
              <div className="animate-fade-up">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                  Front-End Web Development
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  We build marketing and brochure websites from scratch using raw
                  code. By eliminating bloated site builders, we deliver
                  lightning-fast, highly secure, and visually striking digital
                  storefronts that represent your brand perfectly.
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
                  <li>Blazing fast load times (Google Lighthouse Optimized)</li>
                  <li>Fully responsive, mobile-first design</li>
                  <li>Custom headless CMS (Sanity.io) for easy editing</li>
                  <li>High-converting copywriting and layouts</li>
                </ul>
              </div>
              <div
                className="bento-card animate-fade-up delay-1"
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
                  Eliminate lag, ensure perfect mobile responsiveness, and
                  provide your visitors with a premium browsing experience.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="badge badge-emerald">More Leads</span>
                  <span className="badge badge-blue">Premium Brand Image</span>
                  <span className="badge badge-violet">Zero Frustrating Lag</span>
                </div>
              </div>
            </div>

            {/* 2. Search Engine Optimization (SEO) */}
            <div
              className="grid grid-2"
              style={{
                gap: "4rem",
                alignItems: "center",
                marginBottom: "8rem",
              }}
            >
              <div
                className="bento-card animate-fade-up delay-1"
                style={{
                  background: "var(--bg-surface)",
                  padding: "3rem",
                  order: 2,
                }}
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
                  Capture organic traffic in your target market by ensuring
                  search engines can read, index, and prioritize your content.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="badge badge-emerald">
                    Higher Search Visibility
                  </span>
                  <span className="badge badge-amber">More Organic Calls</span>
                  <span className="badge badge-blue">Local Authority</span>
                </div>
              </div>
              <div className="animate-fade-up" style={{ order: 1 }}>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                  Search Engine Optimization (SEO)
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  A beautiful website is useless if nobody finds it. We
                  architect your site&apos;s codebase specifically to rank high
                  on Google. We handle the technical metadata, schema markup, and
                  speed optimizations required to push your business to the top
                  of local search results.
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
                  <li>Comprehensive Schema.org Markup</li>
                  <li>On-page SEO optimization for local keywords</li>
                  <li>Google Business Profile integration</li>
                  <li>Technical SEO audits and monitoring</li>
                </ul>
              </div>
            </div>

            {/* 3. E-Commerce & Portals */}
            <div
              className="grid grid-2"
              style={{
                gap: "4rem",
                alignItems: "center",
                marginBottom: "8rem",
              }}
            >
              <div className="animate-fade-up">
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
                  We build custom checkout flows and integrate robust payment
                  gateways like Stripe. Whether you are selling digital services,
                  subscriptions, or physical inventory, we ensure the
                  transaction process is frictionless, secure, and fully
                  automated.
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
                  <li>Automated receipt and inventory syncing</li>
                </ul>
              </div>
              <div
                className="bento-card animate-fade-up delay-1"
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
                  Reduce cart abandonment with a streamlined checkout process
                  tailored directly to your specific sales model.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="badge badge-emerald">Higher Conversions</span>
                  <span className="badge badge-blue">Secure Payments</span>
                  <span className="badge badge-violet">Frictionless UX</span>
                </div>
              </div>
            </div>

            {/* 4. Full-Stack Web Applications */}
            <div
              className="grid grid-2"
              style={{
                gap: "4rem",
                alignItems: "center",
                marginBottom: "6rem",
              }}
            >
              <div
                className="bento-card animate-fade-up delay-1"
                style={{
                  background: "var(--bg-surface)",
                  padding: "3rem",
                  order: 2,
                }}
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
                  Consolidate your business operations into a single, proprietary
                  platform that you own and control completely.
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className="badge badge-amber">No Monthly App Fees</span>
                  <span className="badge badge-emerald">Full Ownership</span>
                  <span className="badge badge-blue">Automate Workflows</span>
                </div>
              </div>
              <div className="animate-fade-up" style={{ order: 1 }}>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                  Custom Web Applications
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  For when your business outgrows standard software. If you need
                  specialized internal tools, custom booking systems, or secure
                  client portals, we build tailored applications that streamline
                  your daily operations.
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
                  <li>Custom internal tools &amp; CRMs</li>
                  <li>Client portals with secure login</li>
                  <li>Complex database architecture (Supabase)</li>
                  <li>Third-party API integrations</li>
                </ul>
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
            <div className="section-header animate-fade-up text-center">
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
                Clear, upfront pricing with no hidden fees. Choose the solution
                that fits your business goals.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: "2rem", marginBottom: "4rem" }}>
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
                  Perfect for local businesses needing a fast, professional, and
                  SEO-optimized digital storefront to establish trust.
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
                    Lightning Fast Load Times
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
                    Mobile Responsive
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
                    Basic Local SEO Setup
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
                  For growing businesses taking payments, booking appointments,
                  or needing powerful third-party software integrations.
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
                    Custom API Connections
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
                  Enterprise-level platforms, bespoke SaaS applications, and
                  highly secure client portals built perfectly to your spec.
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
                    Complex Database Architecture
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
                    Interactive Dashboards
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
                    Long-Term Retainer Options
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
          </div>
        </section>

        {/* FAQ Section */}
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
                  Do you use templates like WordPress?
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  No. We hand-code every website from scratch instead of using
                  bloated WordPress templates. This results in lightning-fast
                  load times, better security, and higher Google rankings for
                  your business.
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
                  You do. Once the project is complete and fully paid for, all
                  intellectual property, source code, and assets are transferred
                  entirely to your company. No vendor lock-in.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-2"
                style={{ padding: "2rem" }}
              >
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                  How do you handle security and data protection?
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Security is our top priority. We use bank-level encryption,
                  secure user authentication, and strict access controls to
                  ensure your sensitive business data is completely protected
                  from unauthorized access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          style={{
            padding: "6rem 0",
            background: "var(--bg-base)",
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
              Schedule a consultation with our development team to map out the
              architecture and timeline for your custom application.
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
