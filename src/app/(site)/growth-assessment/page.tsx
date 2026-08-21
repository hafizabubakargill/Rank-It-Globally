import type { Metadata } from "next";
import { Suspense } from "react";
import GrowthAssessmentScheduler from "@/components/GrowthAssessmentScheduler";

export const metadata: Metadata = {
  title: "Growth Assessment | Rank It Globally",
  description:
    "Book a focused growth assessment for your website, SEO, AI search visibility, and conversion path.",
  alternates: {
    canonical: "https://rankitglobally.com/growth-assessment",
  },
};

export default function GrowthAssessmentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Growth Assessment",
    provider: {
      "@type": "Organization",
      name: "Rank It Globally",
      url: "https://rankitglobally.com",
    },
    areaServed: "Worldwide",
    serviceType: "Website, SEO, AI search, and conversion strategy assessment",
    url: "https://rankitglobally.com/growth-assessment",
  };

  return (
    <main className="marketing-page audit-page growth-assessment-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="audit-hero growth-assessment-hero">
        <div className="audit-hero-copy">
          <div className="marketing-eyebrow">Growth Assessment</div>
          <h1>
            Find the clearest path to{" "}
            <span className="gtext">more qualified leads.</span>
          </h1>
          <p>
            Book a focused strategy call with Rank It Globally. We will review
            your current website, search visibility, offer clarity, and
            conversion path before recommending the strongest next move.
          </p>
          <div className="audit-checks">
            <span>Website and mobile experience</span>
            <span>SEO and AI search visibility</span>
            <span>Lead quality and conversion friction</span>
            <span>Priority actions for the next stage</span>
          </div>
        </div>
        <Suspense fallback={<div className="growth-calendly-card" />}>
          <GrowthAssessmentScheduler />
        </Suspense>
      </section>

      <section aria-labelledby="assessment-fit-title">
        <p className="marketing-eyebrow">What we cover</p>
        <h2 id="assessment-fit-title">
          A senior review of the issues that affect{" "}
          <span className="gtext">visibility, trust, and conversion.</span>
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
            <h3>Performance and mobile clarity</h3>
            <p>
              We look for speed, layout, and mobile experience issues that can
              weaken trust before a visitor contacts you.
            </p>
          </article>
          <article className="marketing-card">
            <span className="marketing-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" />
                <path d="m16.2 16.2 4.3 4.3M8 11h6M11 8v6" />
              </svg>
            </span>
            <h3>Search and AI visibility</h3>
            <p>
              We discuss whether your pages are structured clearly enough for
              Google, AI Overviews, and high-intent prospects.
            </p>
          </article>
          <article className="marketing-card">
            <span className="marketing-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 5h16v14H4z" />
                <path d="M4 9h16M8 14h3M8 17h6" />
              </svg>
            </span>
            <h3>Conversion path</h3>
            <p>
              We review message clarity, proof, calls to action, and form or
              booking friction that may stop qualified leads.
            </p>
          </article>
          <article className="marketing-card">
            <span className="marketing-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 3h8l3 3v15H5V3h3Z" />
                <path d="M9 10h6M9 14h6M9 18h4" />
              </svg>
            </span>
            <h3>Scope direction</h3>
            <p>
              You leave with a clearer sense of whether the next step is SEO,
              CRO, paid traffic support, a rebuild, or a smaller fix.
            </p>
          </article>
        </div>
      </section>

      <section className="marketing-process" aria-labelledby="assessment-process-title">
        <div>
          <p className="marketing-eyebrow">How it works</p>
          <h2 id="assessment-process-title">
            From quick context to a{" "}
            <span className="gtext">clear next move.</span>
          </h2>
        </div>
        <ol>
          <li>
            <strong>Choose a time.</strong> Use the calendar above and share the
            basic context Calendly asks for.
          </li>
          <li>
            <strong>We review the opportunity.</strong> Before the call, we look
            at your site, offer, visible trust signals, and likely conversion
            bottlenecks.
          </li>
          <li>
            <strong>Walk through the priority path.</strong> On the call, we
            discuss what is worth addressing now and what can wait.
          </li>
        </ol>
      </section>
    </main>
  );
}
