import type { Metadata } from "next";
import Link from "next/link";
import { professionalServiceJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us | Kenosha, WI",
  description:
    "Meet Caleb Cannon and Richard Firkin, co-founders of Pineforge Digital LLC—a Wisconsin-based custom web design and software engineering studio.",
  alternates: {
    canonical: "https://pineforge.digital/about",
  },
  openGraph: {
    title: "About Pineforge Digital | Wisconsin Web Engineering",
    description:
      "100% in-house Wisconsin web development with zero templates, zero outsourcing, and full ownership of your finished website and code.",
    url: "https://pineforge.digital/about",
    images: ["/images/logo-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

export default function AboutPage() {
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
              Our Mission
            </span>
            <h1>
              Precision Craftsmanship.
              <br />
              Wisconsin Roots.
            </h1>
            <p>
              Two Wisconsin developers building fast, custom websites and web
              software for local businesses—without agency overhead or monthly
              template fees.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-section" style={{ background: "var(--bg-base)" }}>
          <div className="container">
            <div
              className="grid grid-2"
              style={{ gap: "clamp(2rem, 5vw, 4rem)", alignItems: "center" }}
            >
              <div className="about-story-col-1 animate-fade-up">
                <h2>A different approach.</h2>
                <p>
                  Pineforge Digital was founded to give local businesses direct
                  access to custom web design and software development—without
                  inflated agency retainers or clunky templates.
                </p>
              </div>
              <div className="about-story-col-2 animate-fade-up delay-1">
                <p>
                  We saw too many businesses stuck paying recurring fees for
                  slow, generic websites they didn&apos;t truly own or control.
                </p>
                <p>
                  We take a different approach. Every site and application we
                  build is hand-coded from scratch and paired with Sanity CMS so
                  you can update content easily—with fast load times, clean
                  mobile usability, and 100% ownership of your website and code
                  once your project is complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy (Dark Section) */}
        <section
          className="dark-theme about-section"
          style={{
            background: "#020617",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="container">
            <div className="section-header animate-fade-up">
              <h2 style={{ color: "white" }}>Our Development Philosophy</h2>
            </div>
            <div className="grid grid-3">
              <div className="bento-card dark-surface-card animate-fade-up">
                <h3 style={{ color: "white", marginBottom: "1rem" }}>
                  100% In-House Development
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  Every line of code is written right here in Wisconsin. We
                  don&apos;t offshore or outsource. When you partner with us, you
                  work directly with the developers building your site.
                </p>
              </div>
              <div className="bento-card dark-surface-card animate-fade-up delay-1">
                <h3 style={{ color: "white", marginBottom: "1rem" }}>
                  Obsessive Performance
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  Speed isn&apos;t an add-on—it&apos;s built into every page
                  from day one. By cutting out heavy plugins and hosting on fast
                  global cloud networks, your site loads almost instantly on
                  phones and desktops.
                </p>
              </div>
              <div className="bento-card dark-surface-card animate-fade-up delay-2">
                <h3 style={{ color: "white", marginBottom: "1rem" }}>
                  Unrestricted Ownership
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  We believe in transparent partnerships, not vendor lock-in.
                  Once your project is complete and paid in full, you own your
                  finished website and code outright.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founders */}
        <section className="about-section" style={{ background: "var(--bg-surface)" }}>
          <div className="container">
            <div className="section-header animate-fade-up">
              <h2>Leadership</h2>
              <p
                style={{
                  marginTop: "1rem",
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Meet the two Wisconsin co-founders who design and build your
                project directly.
              </p>
            </div>

            <div
              className="grid grid-2"
              style={{ gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}
            >
              {/* Caleb Card */}
              <div className="bento-card leadership-card animate-fade-up">
                <h3>Caleb Cannon</h3>
                <p
                  style={{
                    color: "var(--accent-blue)",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontSize: "0.85rem",
                  }}
                >
                  Co-Founder &amp; Technical Lead
                </p>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                  }}
                >
                  Combining a background in cybersecurity with front-end
                  development (React, TypeScript) and UI/UX design, Caleb builds
                  clean, intuitive interfaces that keep your site secure, easy
                  to navigate, and focused on turning visitors into customers.
                </p>
              </div>

              {/* Richard Card */}
              <div className="bento-card leadership-card animate-fade-up delay-1">
                <h3>Richard Firkin</h3>
                <p
                  style={{
                    color: "var(--accent-emerald)",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontSize: "0.85rem",
                  }}
                >
                  Co-Founder &amp; Lead Developer
                </p>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                  }}
                >
                  With deep experience in Python, Java, and SQL databases,
                  Richard builds the behind-the-scenes systems that power custom
                  web apps, internal dashboards, and third-party tool
                  integrations—keeping complex business data fast and reliable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Banner */}
        <section
          style={{
            padding: "clamp(3.5rem, 6vw, 6rem) 0",
            borderTop: "1px solid var(--border-subtle)",
            textAlign: "center",
          }}
        >
          <div className="container animate-fade-up">
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-tertiary)",
                fontWeight: 600,
                fontSize: "0.85rem",
                marginBottom: "2rem",
              }}
            >
              Our Core Technology Stack
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(1.75rem, 4vw, 4rem)",
                flexWrap: "wrap",
                opacity: 0.8,
                filter: "grayscale(100%)",
              }}
            >
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: "var(--text-primary)",
                }}
              >
                React
              </span>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: "var(--text-primary)",
                }}
              >
                Next.js
              </span>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: "var(--text-primary)",
                }}
              >
                Vercel
              </span>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: "var(--text-primary)",
                }}
              >
                Sanity.io
              </span>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: "var(--text-primary)",
                }}
              >
                PostgreSQL
              </span>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  color: "var(--text-primary)",
                }}
              >
                Node.js
              </span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="about-section"
          style={{ background: "var(--bg-base)", textAlign: "center" }}
        >
          <div className="container animate-fade-up">
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to move past generic templates?
            </h2>
            <p
              style={{
                fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                color: "var(--text-secondary)",
                marginBottom: "2.5rem",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Contact our team to explore how a custom, high-performance website
              or application can drive your business forward.
            </p>
            <div className="responsive-cta-actions">
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}
              >
                Request a Consultation
              </Link>
              <Link
                href="/services"
                className="btn btn-secondary"
                style={{
                  padding: "1rem 2.5rem",
                  fontSize: "1.05rem",
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
