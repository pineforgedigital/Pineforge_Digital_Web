import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Pineforge Digital | Web Developers in Kenosha, WI",
  description:
    "Ready to start your custom website project? Contact Pineforge Digital today. We serve Kenosha, Racine, Bristol, and all of Southeastern Wisconsin.",
  alternates: {
    canonical: "https://pineforge.digital/contact",
  },
  openGraph: {
    title: "Pineforge Digital | Premium Custom Web Development",
    description:
      "We build premium, custom websites that help local businesses generate more leads and revenue.",
    url: "https://pineforge.digital/contact",
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="page-header-dark">
          <div className="container animate-fade-up">
            <h1>Contact Us</h1>
            <p>
              If you have questions about our services or want to discuss a
              project, please get in touch.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="contact-grid">
              <div className="animate-fade-up delay-1">
                <Suspense
                  fallback={
                    <div style={{ color: "var(--text-secondary)" }}>
                      Loading contact form...
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>

              <div className="animate-fade-up delay-2">
                <div className="contact-info-card">
                  <h2
                    className="mb-4"
                    style={{ marginTop: 0, fontSize: "1.5rem" }}
                  >
                    Information
                  </h2>

                  <div className="info-block">
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Hours &amp; Availability
                    </h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: "0.25rem 1.25rem",
                        marginBottom: "0.75rem",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span>Monday – Friday:</span>
                      <strong
                        style={{
                          color: "var(--text-primary)",
                          fontWeight: 500,
                        }}
                      >
                        9:00 AM – 5:00 PM
                      </strong>
                      <span>Saturday:</span>
                      <span>Closed</span>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <p>
                      <strong>Email/Form:</strong> 24/7. We reply within one
                      business day.
                    </p>
                  </div>

                  <div className="info-block">
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Contact Direct
                    </h3>
                    <p>
                      Phone:{" "}
                      <a
                        href="tel:2622341027"
                        style={{
                          color: "var(--brand-blue)",
                          textDecoration: "none",
                        }}
                      >
                        (262) 234-1027
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:admin@pineforge.digital"
                        style={{
                          color: "var(--brand-blue)",
                          textDecoration: "none",
                        }}
                      >
                        admin@pineforge.digital
                      </a>
                    </p>
                  </div>

                  <div className="info-block">
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Primary Service Areas
                    </h3>
                    <ul
                      style={{
                        marginTop: "0.5rem",
                        color: "var(--text-secondary)",
                        listStyle: "disc",
                        marginLeft: "1.5rem",
                      }}
                    >
                      <li>Kenosha, WI</li>
                      <li>Racine, WI</li>
                      <li>Milwaukee, WI</li>
                      <li>Southeastern Wisconsin</li>
                    </ul>
                  </div>

                  <div className="info-block" style={{ marginTop: "2rem" }}>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      We offer remote services nationwide, but specialize in
                      local partnerships throughout Wisconsin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
