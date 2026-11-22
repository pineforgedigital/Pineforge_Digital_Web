import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { professionalServiceJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Designer & Custom Software in Kenosha, WI | Pineforge Digital",
  },
  description:
    "Pineforge Digital LLC builds hand-coded websites, custom web applications, internal dashboards, and API integrations for businesses in Kenosha and Southeastern Wisconsin.",
  alternates: {
    canonical: "https://pineforge.digital/",
  },
  openGraph: {
    title: "Pineforge Digital | Custom Web Design & Software Engineering",
    description:
      "Hand-coded custom websites, web applications, and digital infrastructure built in Wisconsin for growing local businesses.",
    url: "https://pineforge.digital",
    images: ["/images/logo-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": professionalServiceJsonLd["@type"],
      name: professionalServiceJsonLd.name,
      url: professionalServiceJsonLd.url,
      logo: professionalServiceJsonLd.logo,
      image: professionalServiceJsonLd.image,
      description: professionalServiceJsonLd.description,
      address: professionalServiceJsonLd.address,
      areaServed: professionalServiceJsonLd.areaServed,
      telephone: professionalServiceJsonLd.telephone,
      email: professionalServiceJsonLd.email,
      sameAs: professionalServiceJsonLd.sameAs,
      openingHoursSpecification:
        professionalServiceJsonLd.openingHoursSpecification,
      priceRange: professionalServiceJsonLd.priceRange,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why should I choose custom web development over WordPress, Wix, or Squarespace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike off-the-shelf website builders that rely on bloated templates and third-party plugins, we write clean, custom code from scratch. This delivers near-instant page load speeds, reduced attack surface with zero plugin vulnerabilities, and clean semantic architecture.",
          },
        },
        {
          "@type": "Question",
          name: "How do technical foundations help my business in local searches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We engineer the fast, semantic foundation search engines reward—clean HTML, fast load speeds, mobile responsiveness, and Schema.org metadata. Because search algorithms are controlled by Google, we focus on measurable technical quality rather than guaranteeing specific rankings.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a custom website with Pineforge Digital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most standard business websites are completed and launched within 2 to 4 weeks once project assets and copy are provided. Complex web applications or custom portals typically take 4 to 8 weeks depending on the written Statement of Work.",
          },
        },
        {
          "@type": "Question",
          name: "Do I own my website and code once the project is finished?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Once your project is complete and paid in full, you own your custom code and finished deliverables with zero vendor lock-in. Every launch includes a 14-day defect warranty, and optional maintenance agreements are available separately if needed.",
          },
        },
        {
          "@type": "Question",
          name: "What areas and industries do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Based in Bristol and serving Kenosha, Pleasant Prairie, Racine, Milwaukee, Southeastern Wisconsin, and Northern Illinois, we partner with local small businesses, contractors, professional services, and growing organizations.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        {/* Dark Mode Hero */}
        <section className="hero-dark">
          <div className="container hero-grid">
            <div className="hero-content text-left">
              <span className="badge badge-dark">
                Custom Web Design &amp; Software Development
              </span>
              <h1 className="hero-title-dark">
                Custom Websites That
                <br />
                Grow Your Business
              </h1>
              <p className="hero-subtitle-dark">
                We engineer fast, hand-coded websites, custom web applications,
                and internal dashboards that establish credibility and convert
                visitors into customers.
              </p>
              <div
                className="hero-actions"
                style={{ justifyContent: "flex-start" }}
              >
                <Link href="/contact" className="btn btn-primary-dark">
                  Request a Consultation
                </Link>
                <Link href="/services" className="btn btn-secondary-dark">
                  Discover Services
                </Link>
              </div>
            </div>
            <div className="hero-visual animate-fade-up delay-2">
              <div className="hero-image-container">
                <div className="css-hero-visual floating-image">
                  <div className="code-window">
                    <div className="hero-window-bar">
                      <div className="hero-window-dots" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <span className="hero-window-title">
                        pineforge.digital — production
                      </span>
                      <span className="hero-live-pill">
                        <span className="hero-live-dot" aria-hidden="true"></span>
                        Live
                      </span>
                    </div>
                    <div className="hero-window-body">
                      <div className="hero-metrics-row">
                        <div className="hero-metric-tile">
                          <span className="hero-metric-value hero-metric-green">
                            99
                          </span>
                          <span className="hero-metric-label">Lighthouse</span>
                        </div>
                        <div className="hero-metric-tile">
                          <span className="hero-metric-value hero-metric-blue">
                            0.4s
                          </span>
                          <span className="hero-metric-label">Load Time</span>
                        </div>
                        <div className="hero-metric-tile">
                          <span className="hero-metric-value">0</span>
                          <span className="hero-metric-label">Bloatware</span>
                        </div>
                      </div>

                      <div className="hero-spec-panel">
                        <div className="hero-spec-row">
                          <span className="hero-spec-key">Stack</span>
                          <span className="hero-spec-val">
                            Next.js &middot; React &middot; Sanity CMS
                          </span>
                        </div>
                        <div className="hero-spec-row">
                          <span className="hero-spec-key">Hosting</span>
                          <span className="hero-spec-val">
                            Vercel Edge Network
                          </span>
                        </div>
                        <div className="hero-spec-row">
                          <span className="hero-spec-key">Ownership</span>
                          <span className="hero-spec-val hero-spec-accent">
                            100% Client IP
                          </span>
                        </div>
                      </div>

                      <div className="hero-window-footer">
                        <span>Hand-Coded in Wisconsin</span>
                        <span className="hero-footer-status">
                          Production Ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glow-orb"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="bento-section texture-bg">
          <div className="container">
            <div className="section-header animate-fade-up">
              <span className="badge" style={{ marginBottom: "1rem" }}>
                Core Competencies
              </span>
              <h2>What We Build</h2>
              <p>
                Custom-engineered websites, portals, and workflow systems
                designed around your exact business operations.
              </p>
            </div>

            <div className="bento-grid">
              <div className="bento-card bento-large bento-graphic animate-fade-up">
                <div className="bento-content">
                  <div className="bento-icon icon-blue">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <h3>Custom Website Design &amp; Build</h3>
                  <p>
                    We write every line of code from scratch using your brand
                    assets and copy so your storefront is ultra-fast, responsive
                    on every device, and free of monthly page-builder bloat.
                  </p>
                </div>
                <div className="bento-visual">
                  <div className="mockup-window">
                    <div className="mockup-header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-body">
                      <div className="mockup-sidebar"></div>
                      <div className="mockup-main">
                        <div
                          className="mockup-bar"
                          style={{ width: "40%" }}
                        ></div>
                        <div
                          className="mockup-bar"
                          style={{ width: "80%" }}
                        ></div>
                        <div
                          className="mockup-bar"
                          style={{ width: "60%" }}
                        ></div>
                        <div className="mockup-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-card bento-graphic-vertical animate-fade-up delay-1">
                <div className="bento-content">
                  <div className="bento-icon icon-emerald">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h3>Performance &amp; Technical Foundations</h3>
                  <p>
                    Clean semantic HTML, fast page speeds, and structured
                    Schema.org markup engineered into your codebase for modern
                    browsers and search engines.
                  </p>
                </div>
                <div className="bento-visual-vertical">
                  <div className="db-stack">
                    <div className="db-layer layer-1"></div>
                    <div className="db-layer layer-2"></div>
                    <div className="db-layer layer-3"></div>
                    <div className="db-glow"></div>
                  </div>
                </div>
              </div>

              <div className="bento-card bento-graphic-vertical animate-fade-up">
                <div className="bento-content">
                  <div className="bento-icon icon-violet">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <h3>E-Commerce &amp; API Integrations</h3>
                  <p>
                    Integrate Stripe checkout flows, Shopify storefronts, and
                    standard authenticated third-party APIs to connect payments
                    and business systems seamlessly.
                  </p>
                </div>
                <div className="bento-visual-vertical">
                  <div className="api-nodes">
                    <div className="node node-left">CRM</div>
                    <div className="node-line"></div>
                    <div className="node node-center">API</div>
                    <div className="node-line"></div>
                    <div className="node node-right">ERP</div>
                  </div>
                </div>
              </div>

              <div className="bento-card bento-large bento-graphic animate-fade-up delay-1">
                <div className="bento-content">
                  <div className="bento-icon icon-amber">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <h3>Custom Web Apps &amp; Dashboards</h3>
                  <p>
                    When standard software falls short, we build tailored web
                    applications, internal dashboards, client portals, and
                    automated operational workflows built to your exact
                    specifications.
                  </p>
                </div>
                <div className="bento-visual">
                  <div className="automation-pipeline">
                    <div className="task-box"></div>
                    <svg
                      className="arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-amber)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <div className="task-box processed"></div>
                    <svg
                      className="arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-amber)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <div className="task-box complete">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section
          style={{
            padding: "clamp(4.5rem, 8vw, 8rem) 0",
            background: "#ffffff",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div className="container">
            <div className="section-header animate-fade-up">
              <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>
                Featured Work
              </span>
              <h2>Recent Launch</h2>
              <p>
                Real custom engineering built for local businesses—clean
                design, fast performance, and zero page-builder bloat.
              </p>
            </div>

            <div className="bento-card portfolio-card animate-fade-up">
              <div className="portfolio-content">
                <div>
                  <span className="badge badge-emerald">Client Launch</span>
                </div>
                <h3>Aesthetic Design &amp; Construction</h3>
                <p style={{ marginBottom: "1.25rem" }}>
                  A bespoke, hand-coded website built for a family-owned
                  residential remodeling and custom construction firm. Designed
                  to showcase finished craftsmanship, clarify service offerings,
                  and guide homeowners directly to project inquiries.
                </p>
                <ul className="portfolio-highlights">
                  <li>Custom multi-page architecture &amp; project gallery</li>
                  <li>Mobile-first responsive layout &amp; direct inquiry flow</li>
                  <li>Hand-coded with Sanity CMS and zero WordPress bloat</li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    marginBottom: "2rem",
                  }}
                >
                  <span className="badge badge-blue">Custom Code</span>
                  <span className="badge badge-violet">Mobile-First</span>
                  <span className="badge badge-emerald">Fast Performance</span>
                </div>
                <div>
                  <a
                    href="https://aestheticdesignconstruction.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visit Live Site
                  </a>
                </div>
              </div>

              <div className="portfolio-visual">
                <div className="portfolio-visual-frame">
                  <Image
                    src="/images/aesthetic_design_mockup.png"
                    alt="Aesthetic Design & Construction custom website homepage preview"
                    width={2048}
                    height={1006}
                    sizes="(max-width: 900px) 100vw, 55vw"
                    className="portfolio-visual-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Solved Section */}
        <section
          style={{ padding: "clamp(4.5rem, 8vw, 8rem) 0", background: "#020617", color: "white" }}
        >
          <div className="container animate-fade-up">
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span
                className="badge"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  borderColor: "rgba(255,255,255,0.2)",
                  boxShadow: "none",
                }}
              >
                Practical Engineering
              </span>
              <h2 style={{ color: "white", marginTop: "1rem" }}>
                How We Help Local Businesses
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                gap: "2rem",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  style={{
                    color: "#fca5a5",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  THE PROBLEM
                </p>
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    marginBottom: "1.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Our template site is sluggish, loaded with plugins, and
                  doesn&apos;t represent the quality of our work.&rdquo;
                </h3>
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    marginBottom: "1.5rem",
                  }}
                />
                <p
                  style={{
                    color: "#6ee7b7",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  THE SOLUTION
                </p>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                  We hand-code clean, semantic websites with fast load speeds
                  and structured Schema.org foundations—giving search engines
                  and customers a faster, clearer experience.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  style={{
                    color: "#fca5a5",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  THE PROBLEM
                </p>
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    marginBottom: "1.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Our current site fails to turn visitors into inquiries,
                  and our manual workflows eat up hours.&rdquo;
                </h3>
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    marginBottom: "1.5rem",
                  }}
                />
                <p
                  style={{
                    color: "#6ee7b7",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  THE SOLUTION
                </p>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                  We design focused user journeys, reliable inquiry pipelines,
                  and custom dashboards tailored directly to how your team
                  operates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pineforge Section */}
        <section style={{ padding: "clamp(4rem, 7vw, 6rem) 0", background: "#ffffff" }}>
          <div className="container">
            <div className="section-header animate-fade-up">
              <span className="badge" style={{ marginBottom: "1rem" }}>
                Why Pineforge
              </span>
              <h2>Trusted Execution</h2>
              <p style={{ marginTop: "1rem" }}>
                You don&apos;t need to know how to code. You just need to know
                your business. We handle the engineering.
              </p>
            </div>
            <div className="grid grid-3">
              <div className="bento-card animate-fade-up">
                <h3 className="mb-2">Wisconsin Based</h3>
                <p>
                  We are a local engineering studio serving Wisconsin and
                  Northern Illinois businesses with direct accountability. We
                  never offshore our code.
                </p>
              </div>
              <div className="bento-card animate-fade-up delay-1">
                <h3 className="mb-2">Transparent Scope</h3>
                <p>
                  Every engagement is defined in a clear Statement of Work with
                  explicit deliverables, fixed milestones, and direct developer
                  communication.
                </p>
              </div>
              <div className="bento-card animate-fade-up delay-2">
                <h3 className="mb-2">Business-First Approach</h3>
                <p>
                  We don&apos;t hide behind confusing technical jargon. We align
                  on your operational goals first, then engineer the software to
                  support them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section
          style={{
            padding: "clamp(4.5rem, 8vw, 8rem) 0",
            background: "white",
            borderTop: "1px solid var(--border-subtle)",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div
              className="grid grid-2"
              style={{ alignItems: "center", gap: "4rem" }}
            >
              <div className="animate-fade-up">
                <span
                  className="badge badge-emerald"
                  style={{ marginBottom: "1.5rem" }}
                >
                  Google Lighthouse Optimized
                </span>
                <h2
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  Speed is a competitive advantage.
                </h2>
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  Users expect pages to load immediately. Instead of stacking
                  heavy themes and plugins, we engineer clean custom
                  architectures from the ground up—delivering fast load times,
                  clean technical metadata, and smooth mobile usability.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    color: "var(--text-secondary)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                  }}
                >
                  <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-emerald)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Instant page load speeds
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-emerald)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Clean semantic HTML &amp; technical structure
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-emerald)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Better mobile user retention
                  </li>
                </ul>
              </div>

              <div className="performance-metrics animate-fade-up delay-2">
                <div className="metric-card">
                  <div className="circular-chart red">
                    <svg viewBox="0 0 36 36" className="circular-chart-svg">
                      <path
                        className="circle-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray="0, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text
                        x="18"
                        y="18"
                        dominantBaseline="middle"
                        className="percentage count-up"
                        data-target="50"
                      >
                        0
                      </text>
                    </svg>
                  </div>
                  <h3>Standard Web Builder</h3>
                  <p>Relies on bloated templates</p>
                </div>

                <div className="metric-card highlight">
                  <div className="circular-chart green">
                    <svg viewBox="0 0 36 36" className="circular-chart-svg">
                      <path
                        className="circle-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray="0, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text
                        x="18"
                        y="18"
                        dominantBaseline="middle"
                        className="percentage count-up"
                        data-target="95"
                      >
                        0
                      </text>
                    </svg>
                  </div>
                  <h3>Our Target Score</h3>
                  <p>Hand-coded for speed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Tech Stack Section */}
        <section
          style={{
            padding: "clamp(4.5rem, 8vw, 8rem) 0",
            background: "#f8fafc",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div className="container animate-fade-up">
            <div
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto 4rem auto",
              }}
            >
              <span
                className="badge badge-violet"
                style={{ marginBottom: "1rem" }}
              >
                Built for Speed
              </span>
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.03em",
                }}
              >
                Beyond the basic template.
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                While many local agencies rely on slow page builders like
                WordPress or Wix, we write clean custom code from the ground up
                using proven modern infrastructure so your site stays fast,
                reliable, and maintainable.
              </p>
            </div>

            <div className="grid grid-4" style={{ gap: "2rem" }}>
              <div
                className="bento-card"
                style={{
                  background: "white",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 22h20L12 2z" />
                  </svg>
                  Vercel
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <strong>Global Cloud Hosting.</strong> Edge-cached delivery
                  infrastructure that keeps your website responsive and reliable
                  for every local visitor.
                </p>
              </div>

              <div
                className="bento-card"
                style={{
                  background: "white",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Sanity.io
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <strong>Headless Content Management.</strong> Every website
                  ships with a clean, custom content dashboard so your team can
                  update text and photos effortlessly—without risking layout or
                  speed.
                </p>
              </div>

              <div
                className="bento-card"
                style={{
                  background: "white",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                  PostgreSQL &amp; Supabase
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <strong>Relational Databases.</strong> For custom booking
                  systems, dashboards, and portals, we engineer structured data
                  storage with strict access controls.
                </p>
              </div>

              <div
                className="bento-card"
                style={{
                  background: "white",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12h4l2-9 5 18 2-9h5" />
                  </svg>
                  React &amp; Next.js
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <strong>Modern Engineering Frameworks.</strong> Proven web
                  architecture that delivers smooth navigation, strong type
                  safety, and long-term maintainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Area Section */}
        <section
          style={{
            padding: "clamp(4.5rem, 8vw, 8rem) 0",
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--border-subtle)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(var(--border-strong) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.5,
            }}
          ></div>

          <div
            className="container animate-fade-up"
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                background: "var(--brand-blue-light)",
                borderRadius: "999px",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "6px",
                  height: "6px",
                  background: "#0369a1",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 3px rgba(3, 105, 161, 0.2)",
                }}
              ></span>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#0369a1",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Locally Owned &amp; Operated
              </span>
            </div>
            <h2
              style={{
                fontSize: "2.75rem",
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Website Design &amp; Custom Software in{" "}
              <span style={{ color: "var(--brand-blue)" }}>Kenosha, WI</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.15rem",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Pineforge Digital LLC is based in Bristol and serves Kenosha,
              Racine, Milwaukee, and Northern Illinois. We don&apos;t use
              generic templates and we never outsource development. When you need
              high-performance websites, custom dashboards, or API
              integrations, you partner directly with Wisconsin developers.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          style={{
            padding: "clamp(4.5rem, 8vw, 8rem) 0",
            background: "#ffffff",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div className="container">
            <div className="section-header animate-fade-up">
              <span className="badge" style={{ marginBottom: "1rem" }}>
                Common Questions
              </span>
              <h2>Frequently Asked Questions</h2>
              <p
                style={{
                  marginTop: "1rem",
                  maxWidth: "650px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Clear answers on timelines, ownership, pricing, and how we work.
              </p>
            </div>
            <div
              style={{
                maxWidth: "820px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                className="bento-card animate-fade-up"
                style={{ padding: "2.25rem" }}
              >
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  Why should I choose custom web development over WordPress,
                  Wix, or Squarespace?
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  Unlike off-the-shelf website builders that rely on bloated
                  templates and third-party plugins, we write clean, custom code
                  from scratch. This delivers near-instant page load speeds,
                  reduced attack surface with zero plugin vulnerabilities, and
                  clean semantic architecture.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-1"
                style={{ padding: "2.25rem" }}
              >
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  How do technical foundations help my business in local
                  searches?
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  We engineer the fast, semantic foundation search engines
                  reward—clean HTML, fast load speeds, mobile responsiveness,
                  and Schema.org metadata. Because search algorithms are
                  controlled by Google, we focus on measurable technical quality
                  rather than guaranteeing specific rankings.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-2"
                style={{ padding: "2.25rem" }}
              >
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  How long does it take to build a custom website with Pineforge
                  Digital?
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  Most standard business websites are completed and launched
                  within 2 to 4 weeks once client copy and brand assets are
                  provided. Complex web applications or custom portals typically
                  take 4 to 8 weeks depending on the executed Statement of Work.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up"
                style={{ padding: "2.25rem" }}
              >
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  Do I own my website and code once the project is finished?
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  Yes. Once your project is complete and paid in full, you own
                  your custom code and finished deliverables with zero vendor
                  lock-in. Every launch includes a 14-day defect warranty, and
                  optional maintenance agreements are available separately if
                  needed.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-1"
                style={{ padding: "2.25rem" }}
              >
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  What areas and industries do you serve?
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  We are based in Bristol and work with local small businesses,
                  contractors, professional service providers, and growing
                  organizations throughout Kenosha, Pleasant Prairie, Racine,
                  Milwaukee, and Northern Illinois.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dark CTA */}
        <section className="cta-dark">
          <div className="container animate-fade-up">
            <h2>Ready to scale your business with custom software?</h2>
            <p>
              Schedule a consultation to review your technical requirements and
              scope out a custom website or web application.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary-dark"
              style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}
            >
              Start the Conversation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
