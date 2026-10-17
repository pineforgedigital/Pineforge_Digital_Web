import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pineforge Digital",
  description:
    "Based in Southeastern Wisconsin, Pineforge Digital specializes in building premium, custom websites and digital tools that solve real business problems.",
  alternates: {
    canonical: "https://pineforge.digital/privacy",
  },
  openGraph: {
    title: "Pineforge Digital | Premium Custom Web Development",
    description:
      "We build premium, custom websites that help local businesses generate more leads and revenue.",
    url: "https://pineforge.digital/privacy",
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

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="page-header-dark" style={{ padding: "12rem 0 4rem" }}>
          <div className="container animate-fade-up">
            <h1>Privacy Policy</h1>
            <p>Last Updated: October 2026</p>
          </div>
        </section>
        <section className="legal-section">
          <div className="container legal-content">
            <h2>1. Information We Collect</h2>
            <p>
              When you request a quote, fill out a contact form, or communicate
              with us, we may collect personal information such as your name,
              email address, company name, and phone number.
            </p>

            <h2>2. How We Use Your Information &amp; Confidentiality</h2>
            <p>
              We use your information exclusively to provide requested services,
              respond to inquiries, and manage project communications. We do not
              sell your personal data to third parties.
            </p>
            <p>
              In accordance with our Master Services Agreement, we agree to
              maintain the strict confidentiality of all non-public business
              information you disclose to us during discovery or project
              execution.
            </p>

            <h2>3. Payment Processing</h2>
            <p>
              Pineforge Digital LLC utilizes third-party payment processors
              (such as Stripe) to facilitate transactions securely. We do not
              store, process, or transmit your full credit card numbers or
              sensitive bank account information on our own servers. All payment
              data is handled directly by our compliant payment partners.
            </p>

            <h2>4. Cookies and Analytics</h2>
            <p>
              We use essential cookies to ensure our website functions correctly.
              We respect your privacy and do not use intrusive third-party
              tracking cookies.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement standard security measures to protect your personal
              information from unauthorized access, loss, or misuse.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, your data, or our
              confidentiality practices, please contact us at{" "}
              <a href="mailto:admin@pineforge.digital">
                admin@pineforge.digital
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
