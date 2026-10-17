import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Designer in Kenosha, WI | Pineforge Digital",
  description:
    "Pineforge Digital is Kenosha's premier website designer and custom software development studio. We build websites that bring in local customers.",
  alternates: {
    canonical: "https://pineforge.digital/",
  },
  openGraph: {
    title: "Pineforge Digital | Premium Custom Web Development",
    description:
      "We build premium, custom websites that help local businesses generate more leads and revenue.",
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
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name":
            "Why should I choose custom web development over WordPress, Wix, or Squarespace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Unlike off-the-shelf website builders that rely on bloated templates and dozens of third-party plugins, we write clean, custom code from scratch. This delivers near-instant page load speeds, rock-solid security with zero plugin vulnerabilities, and structural code optimization designed specifically to outrank competitors in Google search results.",
          },
        },
        {
          "@type": "Question",
          "name":
            "How does a custom website help my business rank higher in Kenosha and local Google searches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Local SEO requires fast load times, clean semantic HTML, mobile responsiveness, and rich Schema.org structured data. Search engines prioritize websites that deliver exceptional user experience and accurate local business metadata. We build all of these directly into your website's foundation so local customers throughout Kenosha, Racine, and Southeastern Wisconsin find you first.",
          },
        },
        {
          "@type": "Question",
          "name":
            "How long does it take to build a custom website with Pineforge Digital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most standard business websites are completed and launched within 2 to 4 weeks. Complex web applications or custom customer portals typically take 4 to 8 weeks depending on scope. Throughout the entire project, you communicate directly with our Wisconsin developers with transparent milestones and zero unnecessary technical jargon.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I own my website and code once the project is finished?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, completely. Once final payment is made, you own 100% of your website, design assets, and source code. We do not lock you into proprietary hosting contracts or hidden licensing fees. If you prefer, we also offer ongoing managed maintenance and cloud hosting so you never have to worry about updates or uptime.",
          },
        },
        {
          "@type": "Question",
          "name": "What areas and industries do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We are proudly based in Southeastern Wisconsin and work with local small businesses, professional service providers, contractors, medical practices, and growing companies throughout Kenosha, Pleasant Prairie, Racine, Milwaukee, and Northern Illinois.",
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
      <main>
        {/* Dark Mode Hero */}
        <section className="hero hero-dark">
          <div className="container hero-grid">
            <div className="hero-content text-left">
              <span className="badge badge-dark">
                Custom Web Design &amp; Development
              </span>
              <h1 className="hero-title-dark">
                Custom Websites That<br />Grow Your Business
              </h1>
              <p className="hero-subtitle-dark">
                We design and develop custom websites that help local businesses
                establish a professional online presence, improve their search
                rankings, and generate more consistent leads.
              </p>
              <div
                className="hero-actions"
                style={{ justifyContent: "flex-start" }}
              >
                <Link href="/contact" className="btn btn-primary-dark">
                  Schedule Consultation
                </Link>
                <Link href="/services" className="btn btn-secondary-dark">
                  Discover Services
                </Link>
              </div>
            </div>
            <div className="hero-visual animate-fade-up delay-2">
              <div className="hero-image-container">
                <div className="css-hero-visual floating-image">
                  {/* Main Window */}
                  <div className="code-window">
                    <div className="window-header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="window-body">
                      <div className="sidebar">
                        <div className="skeleton-line short"></div>
                        <div className="skeleton-line"></div>
                        <div className="skeleton-line"></div>
                        <div className="skeleton-line"></div>
                      </div>
                      <div className="main-content">
                        <div className="skeleton-title"></div>
                        <div className="skeleton-grid">
                          <div className="skeleton-card">
                            <div className="sk-circle"></div>
                            <div className="sk-line"></div>
                          </div>
                          <div className="skeleton-card highlight">
                            <div
                              className="sk-bar bg-green"
                              style={{ height: "60%" }}
                            ></div>
                            <div
                              className="sk-bar bg-blue"
                              style={{ height: "80%" }}
                            ></div>
                            <div
                              className="sk-bar bg-purple"
                              style={{ height: "40%" }}
                            ></div>
                          </div>
                        </div>
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
                We build premium digital assets that generate leads, build
                trust, and outrank your competition.
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
                  <h3>Custom Website Design</h3>
                  <p>
                    Your website is your 24/7 sales engine. We write every line of
                    code from scratch to ensure your site is incredibly fast,
                    perfectly responsive on mobile, and structurally optimized for
                    local SEO.
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
                  <h3>Local SEO Dominance</h3>
                  <p>
                    We structure your website&apos;s architecture to align with
                    modern search algorithms. Our structured data markup and
                    performance optimizations maximize your visibility for
                    high-intent local searches.
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
                  <h3>E-Commerce &amp; Portals</h3>
                  <p>
                    Sell products online or build custom client portals. We
                    integrate Stripe, Shopify, or custom checkout flows to make
                    buying from you completely frictionless.
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
                  <h3>Custom Web Applications</h3>
                  <p>
                    Sometimes an off-the-shelf website isn&apos;t enough. We build
                    complex, highly interactive web applications tailored
                    entirely to your specific operational needs, from custom
                    booking engines to specialized data dashboards.
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

        {/* Problems Solved Section */}
        <section style={{ padding: "8rem 0", background: "#020617", color: "white" }}>
          <div className="container animate-fade-up">
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span
                className="badge"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                Digital Growth
              </span>
              <h2 style={{ color: "white", marginTop: "1rem" }}>
                How We Help Local Businesses
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                  &ldquo;We do great work, but when people search for our
                  services online, our competitors always show up first.&rdquo;
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
                  We build custom websites from scratch that are structurally
                  optimized to rank high in local Google searches and get you
                  found.
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
                  &ldquo;Our current website is outdated. We get traffic, but
                  nobody ever calls us or fills out our contact form.&rdquo;
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
                  We design premium, modern websites developed specifically to
                  build trust and convert your traffic into paying customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pineforge Section */}
        <section style={{ padding: "5rem 0", background: "#ffffff" }}>
          <div className="container">
            <div className="section-header animate-fade-up">
              <span className="badge" style={{ marginBottom: "1rem" }}>
                Why Pineforge
              </span>
              <h2>Trusted Execution</h2>
              <p style={{ marginTop: "1rem" }}>
                You don&apos;t need to know how to code. You just need to know
                your business. We handle the rest.
              </p>
            </div>
            <div className="grid grid-3">
              <div className="bento-card animate-fade-up">
                <h3 className="mb-2">Wisconsin Based</h3>
                <p>
                  We are a local agency serving Wisconsin and Northern Illinois
                  businesses with face-to-face dedication. We never offshore our
                  code.
                </p>
              </div>
              <div className="bento-card animate-fade-up delay-1">
                <h3 className="mb-2">Transparent Process</h3>
                <p>
                  No black boxes. We provide clear documentation, iterative
                  delivery, and constant communication throughout the entire
                  software lifecycle.
                </p>
              </div>
              <div className="bento-card animate-fade-up delay-2">
                <h3 className="mb-2">Business-First Approach</h3>
                <p>
                  We don&apos;t speak in confusing technical jargon. We listen to
                  your business goals first, then we build the exact technology
                  required to achieve them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section
          style={{
            padding: "8rem 0",
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
                  Modern search engines prioritize websites that load instantly.
                  Instead of relying on heavy templates, we build clean, custom
                  architectures from the ground up. The result? Near-instant page
                  loads, optimized SEO fundamentals, and a seamless experience for
                  your customers.
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
                    Optimized SEO fundamentals
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
                {/* Standard Web Builder */}
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

                {/* Pineforge Score */}
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
            padding: "8rem 0",
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
                While most local agencies still rely on slow, clunky page
                builders like WordPress or Wix, we write clean custom code from
                the ground up. We use the exact same technology as top Silicon
                Valley companies to ensure your site is faster, more secure, and
                outranks your local competition.
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
                  <strong>Global Cloud Hosting.</strong> The same infrastructure
                  used by major tech companies. It ensures your site never goes
                  down and loads instantly for every local customer.
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
                  <strong>Modern Content Management.</strong> A lightweight
                  alternative to WordPress. We build a simple, secure dashboard so
                  you can update your own text and photos effortlessly.
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
                  Supabase
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <strong>Secure Databases.</strong> If you ever need a custom
                  booking system or secure client portal, we use bank-level data
                  storage technology to keep your customer data safe.
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
                  <strong>Premium Coding Frameworks.</strong> The same technology
                  powering apps like Netflix. We hand-code your site so it feels
                  like a premium app rather than a clunky template.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Area Section */}
        <section
          style={{
            padding: "8rem 0",
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
              Pineforge Digital is Kenosha&apos;s dedicated web design and
              custom software studio. We don&apos;t use templates and we never
              outsource our development. When you need high-performance web
              applications, beautiful UI/UX, or complex automation, you partner
              directly with expert local developers right here in Southeastern
              Wisconsin.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          style={{
            padding: "8rem 0",
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
                Everything you need to know about working with Pineforge Digital
                to design and build your custom website.
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
                  templates and dozens of third-party plugins, we write clean,
                  custom code from scratch. This delivers near-instant page load
                  speeds, rock-solid security with zero plugin vulnerabilities,
                  and structural code optimization designed specifically to
                  outrank competitors in Google search results.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-1"
                style={{ padding: "2.25rem" }}
              >
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  How does a custom website help my business rank higher in
                  Kenosha and local Google searches?
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  Local SEO requires fast load times, clean semantic HTML, mobile
                  responsiveness, and rich Schema.org structured data. Search
                  engines prioritize websites that deliver exceptional user
                  experience and accurate local business metadata. We build all of
                  these directly into your website&apos;s foundation so local
                  customers throughout Kenosha, Racine, and Southeastern
                  Wisconsin find you first.
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
                  within 2 to 4 weeks. Complex web applications or custom customer
                  portals typically take 4 to 8 weeks depending on scope.
                  Throughout the entire project, you communicate directly with
                  our Wisconsin developers with transparent milestones and zero
                  unnecessary technical jargon.
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
                  Yes, completely. Once final payment is made, you own 100% of
                  your website, design assets, and source code. We do not lock
                  you into proprietary hosting contracts or hidden licensing
                  fees. If you prefer, we also offer ongoing managed maintenance
                  and cloud hosting so you never have to worry about updates or
                  uptime.
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
                  We are proudly based in Southeastern Wisconsin and work with
                  local small businesses, professional service providers,
                  contractors, medical practices, and growing companies
                  throughout Kenosha, Pleasant Prairie, Racine, Milwaukee, and
                  Northern Illinois.
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
              Schedule a consultation to discuss your technical requirements and
              explore what custom software can do for your business.
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
