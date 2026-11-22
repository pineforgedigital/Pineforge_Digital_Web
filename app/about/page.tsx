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
      "100% in-house Wisconsin web development with zero templates, zero outsourcing, and full client ownership of SOW deliverables.",
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
              We are two dedicated web developers building custom,
              high-performance digital infrastructure for growing local
              businesses.
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
                  Pineforge Digital LLC was founded to give local businesses
                  access to direct, custom software engineering without
                  inflated agency retainers or bloated templates.
                </p>
              </div>
              <div className="about-story-col-2 animate-fade-up delay-1">
                <p>
                  We saw too many businesses trapped paying recurring monthly
                  fees for slow, generic template websites they didn&apos;t
                  truly own or control.
                </p>
                <p>
                  We do things differently. Every platform we build is
                  hand-coded from scratch—no clunky page builders, no template
                  bloat, and no vendor lock-in. That guarantees fast load times,
                  reliable mobile performance, and full ownership of your final
                  deliverables upon project completion.
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
            <div className="bento-grid">
              <div
                className="bento-card animate-fade-up"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <h3 style={{ color: "white", marginBottom: "1rem" }}>
                  100% In-House Development
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  Every line of code is written right here in Wisconsin. We
                  don&apos;t offshore or outsource. When you partner with us, you
                  work directly with the developers building your platform.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <h3 style={{ color: "white", marginBottom: "1rem" }}>
                  Obsessive Performance
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  Speed is not a luxury; it is an engineering baseline. We
                  leverage modern edge networks and static/server-rendered
                  architectures so customers never bounce from a slow page.
                </p>
              </div>
              <div
                className="bento-card animate-fade-up delay-2"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <h3 style={{ color: "white", marginBottom: "1rem" }}>
                  Unrestricted Ownership
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  We believe in transparent partnerships, not vendor lock-in.
                  Once final payment is received under your Statement of Work,
                  the completed deliverables belong to you.
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
                The co-founders and engineering minds behind Pineforge Digital
                LLC.
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
                  Merging a rigorous background in cybersecurity with deep
                  expertise in front-end engineering, React, TypeScript, and
                  UI/UX design, Caleb ensures every Pineforge Digital platform
                  is resilient, clean, and built to serve real business goals.
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
                  With a strong background in Python, Java, back-end systems,
                  and relational SQL databases, Richard translates complex
                  operational workflows into fast, reliable server-side
                  architecture and API integrations.
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
              Built With Modern Infrastructure
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
              Ready to elevate your digital presence?
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
                Schedule Consultation
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
