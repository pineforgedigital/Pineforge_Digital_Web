import type { Metadata } from "next";
import { professionalServiceJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Pineforge Digital LLC Privacy Policy covering inquiry data, confidentiality, Stripe payment processing, Resend email delivery, and analytics preferences.",
  alternates: {
    canonical: "https://pineforge.digital/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Pineforge Digital LLC",
    description:
      "How Pineforge Digital LLC collects, protects, and uses inquiry information, transactional email, and site telemetry.",
    url: "https://pineforge.digital/privacy",
    images: ["/images/logo-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <main id="main-content">
        <section className="page-header-dark" style={{ padding: "12rem 0 4rem" }}>
          <div className="container animate-fade-up">
            <h1>Privacy Policy</h1>
            <p>Last Updated: November 2026</p>
          </div>
        </section>
        <section className="legal-section">
          <div className="container legal-content">
            <h2>1. Information We Collect</h2>
            <p>
              When you request a quote, fill out our contact form, or
              communicate with us directly, we collect the information you
              voluntarily submit—such as your name, email address, company name,
              service interest, and project message.
            </p>

            <h2>2. How We Use Your Information &amp; Confidentiality</h2>
            <p>
              We use your information exclusively to respond to inquiries, scope
              Statements of Work, deliver contracted services, and manage
              project communications. We do not sell, rent, or trade your
              personal information to third parties.
            </p>
            <p>
              In accordance with our Master Services Agreement, both parties
              agree to maintain the confidentiality of non-public business
              information disclosed during discovery or project execution.
            </p>

            <h2>3. Payment Processing</h2>
            <p>
              Pineforge Digital LLC utilizes compliant third-party payment
              processors (such as Stripe) to facilitate transactions securely.
              We do not store, process, or transmit your full credit card
              numbers or bank account information on our own servers.
            </p>

            <h2>4. Service Providers, Storage &amp; Analytics</h2>
            <p>
              To operate this website reliably and handle inquiries, we use:
            </p>
            <p>
              <strong>Transactional Email (Resend):</strong> Contact form
              submissions are transmitted via Resend to deliver your inquiry to
              our team and send a confirmation receipt to your email address.
            </p>
            <p>
              <strong>Local Storage &amp; Telemetry (Vercel):</strong> We store
              your privacy notice choice locally in your browser&apos;s{" "}
              <code>localStorage</code>. Unless you decline via our consent
              banner, we use privacy-friendly Vercel Analytics and Vercel Speed
              Insights to measure site performance and aggregate traffic without
              cross-site advertising trackers.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement HTTPS encryption, HTTP security headers, input
              validation, and least-privilege access controls to protect your
              information from unauthorized access, alteration, or misuse.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, your submitted
              information, or our confidentiality practices, please contact us
              at{" "}
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
