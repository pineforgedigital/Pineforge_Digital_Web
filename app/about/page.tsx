import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Pineforge Digital | Website Designers in Kenosha, WI",
  description:
    "Pineforge Digital is a local website designer and software company serving Kenosha, WI. We build premium, hand-coded websites that solve real business problems.",
  alternates: {
    canonical: "https://pineforge.digital/about",
  },
  openGraph: {
    title: "Pineforge Digital | Premium Custom Web Development",
    description:
      "We build premium, custom websites that help local businesses generate more leads and revenue.",
    url: "https://pineforge.digital/about",
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

export default function AboutPage() {
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
              Our Mission
            </span>
            <h1>
              Precision Craftsmanship.<br />Wisconsin Roots.
            </h1>
            <p>
              We are two dedicated web developers building premium,
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
                  Pineforge Digital was built to give local businesses access to
                  agency-level web development without the inflated enterprise
                  price tags.
                </p>
              </div>
              <div className="about-story-col-2 animate-fade-up delay-1">
                <p>
                  We noticed too many businesses struggling with slow, generic
                  websites that didn&apos;t actually generate leads. They were
                  stuck paying monthly fees for pre-built templates that they
                  didn&apos;t fully own or control.
                </p>
                <p>
                  We do things differently. Every platform we build is
                  hand-coded from scratch. No bloated templates, no clunky page
                  builders, and no vendor lock-in. This approach guarantees
                  lightning-fast load times, flawless mobile performance, and a
                  digital storefront built entirely around your unique business
                  goals.
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
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
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
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  Speed is not a luxury; it is a requirement. We leverage modern
                  edge networks and custom-built static generation to guarantee
                  instant load times, ensuring you never lose a customer to a slow
                  page.
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
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  We believe in transparent partnerships, not vendor lock-in.
                  Once a project is completed, you own the entire codebase and all
                  intellectual property. We build it, but it belongs to you.
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
                The development minds behind Pineforge Digital.
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
                  Merging a rigorous background in Cyber Security with a deep
                  understanding of front-end development, React, web design, and
                  graphic art, Caleb ensures that every Pineforge Digital
                  platform is not only highly secure, but visually stunning. He
                  focuses on crafting premium user experiences that drive real
                  business growth.
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
                  With a strong background in Python, Java, and back-end
                  development, Richard brings deep expertise in databases and SQL
                  to ensure raw performance and clean architecture. He translates
                  complex business logic into lightning-fast, highly optimized
                  code—ensuring that every project we deploy performs flawlessly
                  under pressure.
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
              Powered By Enterprise Infrastructure
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
                Supabase
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
              Contact us to explore how a custom, high-performance website can
              drive your business forward.
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
