import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Pineforge Digital",
  description:
    "Based in Southeastern Wisconsin, Pineforge Digital specializes in building premium, custom websites and digital tools that solve real business problems.",
  alternates: {
    canonical: "https://pineforge.digital/terms",
  },
  openGraph: {
    title: "Pineforge Digital | Premium Custom Web Development",
    description:
      "We build premium, custom websites that help local businesses generate more leads and revenue.",
    url: "https://pineforge.digital/terms",
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

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="page-header-dark" style={{ padding: "12rem 0 4rem" }}>
          <div className="container animate-fade-up">
            <h1>Terms of Service</h1>
            <p>Last Updated: October 2026</p>
          </div>
        </section>
        <section className="legal-section">
          <div className="container legal-content">
            <h2>1. Structure of Agreement</h2>
            <p>
              These Terms of Service serve as our Master Services Agreement
              (&ldquo;Agreement&rdquo;). By engaging Pineforge Digital LLC
              (&ldquo;Company&rdquo;) for digital consulting, software
              development, web development, integration, or related technical
              services, you (&ldquo;Client&rdquo;) agree to these terms. Each
              discrete project shall be defined in a separately executed
              Statement of Work (&ldquo;SOW&rdquo;). In the event of a conflict
              between this Agreement and an SOW, this Agreement shall control
              unless the SOW expressly states otherwise.
            </p>

            <h2>2. Services &amp; Scope Control</h2>
            <p>
              Company provides services as an independent contractor. Company
              does not guarantee business outcomes, revenue generation,
              specific commercial results, search engine rankings (SEO), or
              website traffic volumes unless expressly stated in writing.
            </p>
            <p>
              Services are strictly limited to those expressly described in an
              executed SOW. Any functionality, feature, or service not described
              is excluded. Company is not obligated to perform out-of-scope work
              unless both Parties execute a written Change Order.
            </p>

            <h2>3. Client Responsibilities</h2>
            <p>
              Client agrees to provide accurate, complete, and timely
              requirements, approvals, and feedback, and maintain all rights,
              licenses, and permissions to content and trademarks provided to
              Company. Client must provide access to required third-party
              platforms via &ldquo;Delegated Access&rdquo; or similar roles.
              Company refuses to accept or store Client master passwords.
            </p>
            <p>
              <strong>Project Dormancy:</strong> If Client fails to respond to
              requests or provide assets for 21 consecutive days, the project
              will be considered &ldquo;Dormant&rdquo; and may incur a restart
              fee. After 42 days of dormancy, Company may terminate the SOW and
              invoice for all work completed.
            </p>

            <h2>4. Fees, Payment, and Changes</h2>
            <p>
              Unless otherwise stated in an SOW, a non-refundable deposit is
              required prior to commencement of work. Invoices are due upon
              receipt. Late payments may accrue interest at the lesser of 1.5%
              per month or the maximum permitted by law. Repeated scope expansion
              or excessive revision requests may result in termination at
              Company&apos;s discretion.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              Upon full payment of all amounts due, Client shall own the final
              deliverables expressly identified in the SOW. Ownership does not
              transfer until full payment is received. Company retains ownership
              of pre-existing materials, proprietary frameworks, and generic
              code libraries, though Client is granted a license to use them as
              integrated into the final deliverable. Unless explicitly revoked in
              writing, Company retains the non-exclusive right to display
              graphics and links to the completed project in its portfolio and
              marketing materials.
            </p>

            <h2>6. Warranty and Support</h2>
            <p>
              Company warrants that deliverables will materially conform to the
              written specifications for fourteen (14) days following formal
              acceptance or deployment. During this Warranty Period,
              Company&apos;s sole obligation is the correction of documented
              defects (code failing to perform explicitly outlined actions). After
              the Warranty Period, all work is billable unless covered by a
              separate maintenance agreement.
            </p>
            <p>
              Company does not warrant third-party systems, browser updates
              after deployment, modifications made by Client, or security
              breaches resulting from Client negligence.
            </p>

            <h2>7. Limitation of Liability &amp; Indemnification</h2>
            <p>
              To the maximum extent permitted by law, Company&apos;s total
              aggregate liability arising out of this Agreement shall not exceed
              the total fees paid by Client under the applicable SOW. In no event
              shall Company be liable for lost profits, lost revenue, loss of
              data, or indirect damages.
            </p>
            <p>
              Client shall indemnify and hold harmless Company from claims
              arising out of Client-provided content, business operations, or
              regulatory violations.
            </p>

            <h2>8. Termination &amp; Dispute Resolution</h2>
            <p>
              Either Party may terminate for material breach if not cured within
              14 days of written notice. Client may terminate for convenience at
              any time but shall pay for all work performed to date and
              non-recoverable expenses. Deposits remain non-refundable.
            </p>
            <p>
              These terms are governed by the laws of the State of Wisconsin.
              The Parties agree to attempt good faith resolution and mediation
              prior to litigation, except for claims regarding non-payment of
              fees which may be pursued directly in Wisconsin small claims court.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
