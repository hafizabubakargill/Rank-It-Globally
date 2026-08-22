import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import FreeAuditForm from "@/components/FreeAuditForm";
import { auditChecks, calendlyUrl } from "@/content/publicPages";

export const metadata: Metadata = {
  title: "Growth Audit | Rank It Globally",
  description:
    "Request a Growth Audit covering speed, technical SEO, crawlability, AI search readiness, and conversion opportunities, then book a call to walk through the findings.",
  alternates: {
    canonical: "https://rankitglobally.com/free-audit",
  },
};

export default function FreeAuditPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Growth Audit",
    provider: {
      "@type": "Organization",
      name: "Rank It Globally",
      url: "https://rankitglobally.com",
    },
    areaServed: "Worldwide",
    serviceType: "Website SEO and conversion audit",
    url: "https://rankitglobally.com/free-audit",
  };

  return (
    <main className="marketing-page audit-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="audit-hero">
        <div className="audit-hero-copy">
          <div className="marketing-eyebrow">Growth Audit</div>
          <h1>
            Find the leaks costing you{" "}
            <span className="gtext">rankings, leads, and sales.</span>
          </h1>
          <p>
            Tell us about your business and what feels stuck. We will review
            speed, crawlability, on-page SEO, AI search readiness, and
            conversion friction, then walk you through it live on a call.
          </p>
          <div className="audit-checks">
            {auditChecks.map((check) => (
              <span key={check}>{check}</span>
            ))}
          </div>
        </div>
        <div className="audit-hero-card">
          <Suspense fallback={<div className="standalone-audit-form" />}>
            <FreeAuditForm />
          </Suspense>
        </div>
      </section>

      <section aria-labelledby="audit-inspection-title">
        <p className="marketing-eyebrow">What we inspect</p>
        <h2 id="audit-inspection-title">
          A focused review of the issues that affect{" "}
          <span className="gtext">visibility and conversion.</span>
        </h2>
        <div className="marketing-card-grid audit-inspection-grid">
          <article className="marketing-card">
            <span className="marketing-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 18a8 8 0 1 1 16 0" />
                <path d="m12 14 4-4" />
                <path d="M7 18h10" />
              </svg>
            </span>
            <h3>Page speed and mobile experience</h3>
            <p>
              We review loading performance, Core Web Vitals, layout stability,
              and mobile usability signals that can cost attention and leads.
            </p>
          </article>
          <article className="marketing-card">
            <span className="marketing-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 3h8l3 3v15H5V3h3Z" />
                <path d="M9 10h6M9 14h6M9 18h4" />
              </svg>
            </span>
            <h3>Technical SEO and crawlability</h3>
            <p>
              We check whether search engines can access, understand, and index
              the important parts of your website without unnecessary friction.
            </p>
          </article>
          <article className="marketing-card">
            <span className="marketing-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" />
                <path d="m16.2 16.2 4.3 4.3M8 11h6M11 8v6" />
              </svg>
            </span>
            <h3>Search and AI readiness</h3>
            <p>
              We assess titles, headings, content structure, schema, and trust
              signals that help Google and AI systems interpret your offer.
            </p>
          </article>
          <article className="marketing-card">
            <span className="marketing-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 5h16v14H4z" />
                <path d="M4 9h16M8 14h3M8 17h6" />
              </svg>
            </span>
            <h3>Conversion friction</h3>
            <p>
              We look for unclear messaging, weak calls to action, and journey
              gaps that may stop qualified visitors from contacting you.
            </p>
          </article>
        </div>
      </section>

      <section className="marketing-process" aria-labelledby="audit-process-title">
        <div>
          <p className="marketing-eyebrow">How it works</p>
          <h2 id="audit-process-title">
            From website details to a{" "}
            <span className="gtext">clear action plan.</span>
          </h2>
        </div>
        <ol>
          <li>
            <strong>Share what feels stuck.</strong> Tell us what you want
            reviewed, your budget range, and the website we should inspect.
          </li>
          <li>
            <strong>We review your site.</strong> A senior strategist looks at
            performance, SEO, search visibility, and conversion opportunities
            before you talk to anyone.
          </li>
          <li>
            <strong>Book a time.</strong> Pick a slot right after you submit
            the form and we will walk through prioritized findings together,
            in plain English.
          </li>
        </ol>
      </section>

      <section className="marketing-split">
        <div>
          <p className="marketing-eyebrow">What you get</p>
          <h2>
            A plain-English walkthrough, <span className="gtext">not a mystery spreadsheet.</span>
          </h2>
        </div>
        <div className="marketing-copy">
          <p>
            The audit is designed to show what is stopping the site from being
            found, understood, and trusted, then explain it in a live call so
            the recommendations are easier to act on.
          </p>
          <p>
            Prefer to skip the form? Book a call directly and we will pull up
            your site during the conversation.
          </p>
          <Link
            className="marketing-link"
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a call instead
          </Link>
        </div>
      </section>

      <section className="marketing-split">
        <div>
          <p className="marketing-eyebrow">What to expect</p>
          <h2>
            Useful direction without{" "}
            <span className="gtext">the hard sell.</span>
          </h2>
        </div>
        <div className="marketing-copy">
          <p>
            You will get practical recommendations ordered by likely impact,
            not a generic checklist. The call highlights what deserves
            attention now, what can wait, and where further investigation may
            be needed.
          </p>
          <p>
            The audit does not guarantee rankings, traffic, or revenue, and
            implementation is not included. There is no obligation to hire us
            after the call.
          </p>
        </div>
      </section>
    </main>
  );
}
