import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { professionalServiceJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Kenosha, WI",
  description:
    "Ready to start your custom website or software project? Contact Pineforge Digital LLC in Bristol, WI—serving Kenosha, Racine, Milwaukee, and Southeastern Wisconsin.",
  alternates: {
    canonical: "https://pineforge.digital/contact",
  },
  openGraph: {
    title: "Contact Pineforge Digital | Southeastern Wisconsin",
    description:
      "Get in touch with Pineforge Digital to request a consultation or custom project quote.",
    url: "https://pineforge.digital/contact",
    images: ["/images/logo-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

export default function ContactPage() {
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
            <h1>Contact Us</h1>
            <p>
              If you have questions about our services or want to talk through a
              custom project, send us a message below.
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
                        9:00 AM – 5:00 PM CT
                      </strong>
                      <span>Saturday:</span>
                      <span>Closed</span>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <p>
                      <strong>Email &amp; Form:</strong> Submit anytime—we reply
                      within one business day.
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
                    <p>
                      Google:{" "}
                      <a
                        href="https://share.google/Pp6TIz4FkOKFzQPUA"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--brand-blue)",
                          textDecoration: "none",
                        }}
                      >
                        View Google Business Profile
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
                      Based in Bristol, WI. We offer remote services nationwide,
                      with local partnerships throughout Southeastern Wisconsin.
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
