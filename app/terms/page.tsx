import type { Metadata } from "next";
import { professionalServiceJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review Pineforge Digital LLC's Master Services Agreement terms governing project scope, Change Orders, client responsibilities, IP ownership, 14-day warranty, and Wisconsin law.",
  alternates: {
    canonical: "https://pineforge.digital/terms",
  },
  openGraph: {
    title: "Terms of Service | Pineforge Digital LLC",
    description:
      "Master Services Agreement terms for custom web development, web applications, and digital consulting by Pineforge Digital LLC.",
    url: "https://pineforge.digital/terms",
    images: ["/images/logo-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

export default function TermsPage() {
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
            <h1>Terms of Service</h1>
            <p>Last Updated: November 2026</p>
          </div>
        </section>
        <section className="legal-section">
          <div className="container legal-content">
            <h2>1. Structure of Agreement</h2>
            <p>
              These Terms of Service reflect our standard Master Services
              Agreement (&ldquo;Agreement&rdquo;). By engaging Pineforge Digital
              LLC (&ldquo;Company&rdquo;) for digital consulting, software
              development, web development, integration, or related technical
              services, you (&ldquo;Client&rdquo;) agree to these terms. Each
              discrete project is governed by an executed Master Services
              Agreement and Statement of Work (&ldquo;SOW&rdquo;). In the event
              of a conflict between the MSA and an SOW, the MSA controls unless
              the SOW expressly overrides a specific provision. No oral
              statements, proposals, or marketing materials modify the written
              agreement unless incorporated into an executed SOW.
            </p>

            <h2>2. Services, Scope Control &amp; Change Orders</h2>
            <p>
              Company provides services as an independent contractor. Company
              does not guarantee business outcomes, revenue generation,
              specific commercial results, search engine rankings (SEO), or
              website traffic volumes unless expressly stated in writing.
            </p>
            <p>
              Services are strictly limited to those expressly described in an
              executed SOW. Any functionality, feature, integration, or
              service not specifically described—including copywriting, custom
              asset creation, SEO/marketing campaigns, security audits, or
              ongoing post-deployment infrastructure management—is excluded
              unless expressly contracted in writing. Any scope modification
              requires a written Change Order; an explicit email exchange
              detailing scope and fees followed by Client&apos;s affirmative
              electronic approval constitutes a binding Change Order.
            </p>

            <h2>3. Client Responsibilities &amp; Compliance</h2>
            <p>
              Client agrees to provide accurate, complete, and timely
              requirements, text copy, brand assets, approvals, and feedback,
              and maintain all rights, licenses, and permissions to materials
              provided to Company. Client must provide access to third-party
              platforms strictly via &ldquo;Delegated Access,&rdquo;
              &ldquo;Collaborator,&rdquo; or &ldquo;Manager&rdquo; roles.
              Company refuses to accept, store, or manage Client master
              passwords.
            </p>
            <p>
              Company is not responsible for legal or regulatory compliance of
              Client&apos;s business. While Company uses standard semantic HTML
              practices, full ADA/WCAG accessibility compliance requires ongoing
              third-party audits and is not warranted by Company.
            </p>
            <p>
              <strong>Project Dormancy:</strong> If Client fails to respond to
              requests, provide required assets, or grant approvals for 21
              consecutive days, the project is considered &ldquo;Dormant&rdquo;
              and may incur a restart fee. After 42 consecutive days of
              dormancy, Company may terminate the SOW and invoice for all work
              completed to date.
            </p>

            <h2>4. Fees, Payment &amp; Acceptance</h2>
            <p>
              Unless otherwise stated in an SOW, a non-refundable deposit is
              required prior to commencement of work and becomes earned upon
              commencement. Invoices are due upon receipt, and late payments may
              accrue interest at the lesser of 1.5% per month or the maximum
              permitted by law. Repeated scope expansion or excessive revision
              requests may result in termination at Company&apos;s discretion.
            </p>
            <p>
              Deliverables are deemed accepted if they materially conform to the
              written SOW specifications and Client does not submit a detailed
              written rejection within five (5) business days of delivery.
              Delivery to production or transfer of final code constitutes
              project completion.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              Upon full payment of all amounts due, Client shall own the final
              deliverables expressly identified in the applicable SOW. Ownership
              does not transfer until full payment is received, and any reversed
              or charged-back payment automatically revokes Client&apos;s
              license to use deliverables. Company retains ownership of
              pre-existing materials, proprietary frameworks, and generic code
              libraries, while third-party open-source packages remain subject
              to their respective open-source licenses. Unless expressly revoked
              in writing prior to SOW execution, Company retains the
              non-exclusive right to display screenshots and links to the
              completed project in its portfolio and marketing materials.
            </p>

            <h2>6. Warranty and Support</h2>
            <p>
              Company warrants that deliverables will materially conform to the
              written SOW specifications for fourteen (14) days following formal
              acceptance or deployment (&ldquo;Warranty Period&rdquo;). During
              the Warranty Period, Company&apos;s sole obligation is the
              correction of documented defects failing to perform explicitly
              outlined SOW specifications. After the Warranty Period, all work
              is billable unless covered by a separate written maintenance
              agreement.
            </p>
            <p>
              Company does not warrant third-party systems or hosting uptime,
              browser or OS updates after deployment, modifications made by
              Client or third parties, or security breaches resulting from
              Client negligence or compromised credentials.
            </p>

            <h2>7. Limitation of Liability &amp; Indemnification</h2>
            <p>
              To the maximum extent permitted by law, Company&apos;s total
              aggregate liability arising out of or relating to this Agreement
              shall not exceed the total fees paid by Client under the
              applicable SOW. In no event shall Company be liable for lost
              profits, lost revenue, loss of data, or any consequential,
              incidental, indirect, special, or punitive damages.
            </p>
            <p>
              Client shall indemnify and hold harmless Company from claims
              arising out of Client-provided content or data, Client&apos;s
              business operations, regulatory violations, or misuse of
              deliverables.
            </p>

            <h2>8. Termination &amp; Dispute Resolution</h2>
            <p>
              Either Party may terminate for material breach if uncured within 14
              days after written notice. Client may terminate for convenience at
              any time upon written notice, paying for all work performed to
              date, non-recoverable expenses, and committed third-party costs
              (with deposits remaining non-refundable).
            </p>
            <p>
              This Agreement is governed by the laws of the State of Wisconsin,
              with exclusive venue in the state or federal courts located in
              Wisconsin. Unresolved disputes shall first undergo mediation prior
              to litigation, except for claims regarding non-payment of fees
              within Wisconsin small claims court jurisdiction.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
