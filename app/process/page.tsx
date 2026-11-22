import type { Metadata } from "next";
import Link from "next/link";
import { professionalServiceJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Development Process",
  description:
    "Explore Pineforge Digital's four-phase development process—from SOW discovery and UI/UX wireframing to custom engineering, 5-day acceptance review, and our 14-day warranty.",
  alternates: {
    canonical: "https://pineforge.digital/process",
  },
  openGraph: {
    title: "Our Development Process | Pineforge Digital",
    description:
      "Transparent, milestone-driven custom web and software development governed by clear Statement of Work specifications.",
    url: "https://pineforge.digital/process",
    images: ["/images/logo-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

export default function ProcessPage() {
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
              Methodology
            </span>
            <h1>Development Process</h1>
            <p>
              Transparent, milestone-driven engineering from Statement of Work
              definition through launch and acceptance.
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
                  Discovery &amp; Scope Definition
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Every project begins with technical discovery to align on your
                  business goals, required integrations, and exact pages or
                  features. We document everything in a written Statement of Work
                  with clear milestones and upfront pricing—so scope is never a
                  guess.
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
                  <li>Initial technical consultation and goal alignment</li>
                  <li>
                    Written Statement of Work (pages, features, and API specs)
                  </li>
                  <li>Sitemap and architecture outline</li>
                  <li>Defined timeline, payment schedule, and deposit invoice</li>
                </ul>
              </div>

              <div className="bento-card animate-fade-up delay-1">
                <span className="badge badge-emerald">Phase 2</span>
                <h2 style={{ marginTop: "1rem", fontSize: "2rem" }}>
                  UI/UX Design &amp; Wireframing
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  We design clean, focused interfaces tailored to your brand
                  using the text copy, logos, and imagery you supply. Layouts
                  are reviewed through structured revision rounds and formally
                  approved before custom development begins.
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
                  <li>High-fidelity UI/UX wireframes and design mockups</li>
                  <li>Typography, spacing, and visual hierarchy alignment</li>
                  <li>Integration of client-supplied copy and brand assets</li>
                  <li>
                    Structured design review rounds and formal phase sign-off
                  </li>
                </ul>
              </div>

              <div className="bento-card animate-fade-up delay-2">
                <span className="badge badge-violet">Phase 3</span>
                <h2 style={{ marginTop: "1rem", fontSize: "2rem" }}>
                  Core Development &amp; Staging
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Once designs are approved, we hand-code your website or web
                  application from scratch without page-builder bloat. You
                  receive access to a functional staging environment to verify
                  progress against your written specifications.
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
                  <li>
                    Clean semantic HTML, CSS, React, and TypeScript codebase
                  </li>
                  <li>Responsive behavior across modern desktop and mobile browsers</li>
                  <li>
                    Performance optimization (targeting 95+ Lighthouse scores)
                  </li>
                  <li>Private staging link for milestone verification</li>
                </ul>
              </div>

              <div className="bento-card animate-fade-up delay-3">
                <span className="badge badge-amber">Phase 4</span>
                <h2 style={{ marginTop: "1rem", fontSize: "2rem" }}>
                  Final Review, Launch &amp; 14-Day Warranty
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  You complete a 5-business-day acceptance review against your
                  Statement of Work prior to final launch. We handle production
                  deployment, domain configuration via delegated access,
                  analytics setup, and back every launch with a 14-day defect
                  warranty.
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
                  <li>5-business-day SOW conformity acceptance review</li>
                  <li>Zero-downtime deployment &amp; DNS configuration</li>
                  <li>
                    Technical Schema.org markup, sitemap &amp; Search Console
                    setup
                  </li>
                  <li>
                    14-day post-launch defect warranty (optional separate
                    maintenance available)
                  </li>
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
              Let&apos;s discuss your project requirements and map out a clear
              Statement of Work, timeline, and budget.
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
                Request a Consultation
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
