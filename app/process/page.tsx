import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Web Design Process | Pineforge Digital",
  description:
    "Learn about our streamlined, transparent web design and development process. From initial discovery to launch, we partner with you every step of the way.",
  alternates: {
    canonical: "https://pineforge.digital/process",
  },
  openGraph: {
    title: "Pineforge Digital | Premium Custom Web Development",
    description:
      "We build premium, custom websites that help local businesses generate more leads and revenue.",
    url: "https://pineforge.digital/process",
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

export default function ProcessPage() {
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
              Methodology
            </span>
            <h1>Development Process</h1>
            <p>
              Transparent, iterative, and secure development from concept to
              deployment.
            </p>
          </div>
        </section>

        <section style={{ padding: "8rem 0" }}>
          <div className="container">
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
              }}
            >
              <div className="bento-card animate-fade-up">
                <span className="badge badge-blue">Phase 1</span>
                <h2 style={{ marginTop: "1rem", fontSize: "2rem" }}>
                  Discovery &amp; Strategy
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Every successful website starts with a deep understanding of
                  your business goals. We sit down with you to understand your
                  target audience, identify your unique selling points, and map
                  out exactly how your website can generate more leads and
                  revenue.
                </p>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  Deliverables:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "1.5rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <li>Initial consultation and goal alignment</li>
                  <li>Competitor and local market analysis</li>
                  <li>Sitemap and core feature outline</li>
                  <li>Project timeline and transparent pricing</li>
                </ul>
              </div>

              <div className="bento-card animate-fade-up delay-1">
                <span className="badge badge-emerald">Phase 2</span>
                <h2 style={{ marginTop: "1rem", fontSize: "2rem" }}>
                  Design &amp; Copywriting
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  First impressions are everything. We design clean, minimalist
                  interfaces that strip away distractions and focus entirely on
                  your value proposition. Alongside a beautiful design, we write
                  compelling copy that guides your visitors exactly where they
                  need to go.
                </p>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  Deliverables:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "1.5rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <li>Custom high-fidelity design mockups</li>
                  <li>Brand color and typography selection</li>
                  <li>SEO-optimized content strategy and copywriting</li>
                  <li>Design review and refinement cycles</li>
                </ul>
              </div>

              <div className="bento-card animate-fade-up delay-2">
                <span className="badge badge-violet">Phase 3</span>
                <h2 style={{ marginTop: "1rem", fontSize: "2rem" }}>
                  Custom Development
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Once the design is approved, we build your website entirely
                  from scratch. By writing custom code instead of relying on
                  bulky page builders like WordPress or Wix, we ensure your site
                  is incredibly fast, accessible, and looks perfect on every
                  mobile device.
                </p>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  Deliverables:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "1.5rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <li>Clean, semantic HTML, CSS, and modern JavaScript</li>
                  <li>Flawless mobile responsive implementation</li>
                  <li>
                    Performance optimization (target 95+ Lighthouse score)
                  </li>
                  <li>Private staging link to track progress</li>
                </ul>
              </div>

              <div className="bento-card animate-fade-up delay-3">
                <span className="badge badge-amber">Phase 4</span>
                <h2 style={{ marginTop: "1rem", fontSize: "2rem" }}>
                  Launch &amp; Local SEO
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Launching is just the beginning. We handle all the technical
                  heavy lifting of taking your site live, configuring your
                  domain, and submitting it to search engines. We set up
                  analytics so you can track your growth from day one.
                </p>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  Deliverables:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    marginLeft: "1.5rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <li>Zero-downtime deployment and domain configuration</li>
                  <li>Google Search Console &amp; Analytics integration</li>
                  <li>Local SEO schema markup and indexing</li>
                  <li>30 days of post-launch monitoring and support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: "8rem 0",
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--border-subtle)",
            textAlign: "center",
          }}
        >
          <div className="container animate-fade-up">
            <h2 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
              Ready to start the process?
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--text-secondary)",
                marginBottom: "3rem",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Let&apos;s get on a call, discuss your business goals, and map out
              exactly how we can build a solution to hit them.
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
                style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="btn btn-secondary"
                style={{
                  fontSize: "1.1rem",
                  padding: "1rem 2.5rem",
                  border: "1px solid var(--border-subtle)",
                  background: "transparent",
                  color: "var(--text-primary)",
                }}
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
