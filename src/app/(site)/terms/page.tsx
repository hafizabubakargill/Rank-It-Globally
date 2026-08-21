import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Rank It Globally",
  description:
    "Terms of Service for Rank It Globally website, audits, consultations, and digital marketing services.",
  alternates: {
    canonical: "https://rankitglobally.com/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      updated="June 19, 2026"
      intro="These Terms of Service govern your use of the Rank It Globally website, Growth Assessment booking, and related services."
      sections={[
        {
          title: "Use of the Website",
          body: [
            "You may use this website for lawful purposes only. You agree not to misuse the site, interfere with its operation, attempt unauthorized access, or submit false, harmful, or misleading information.",
            "By requesting a Growth Assessment, you confirm that you have the right to discuss the website or business connected to that request, or are authorized to act on its behalf.",
          ],
        },
        {
          title: "Growth Assessments",
          body: [
            "A Growth Assessment is provided for informational and business-development purposes. Any observations shared during or after the assessment are based on available information and professional judgment.",
            "Assessment recommendations are not a guarantee of rankings, revenue, traffic, conversions, or specific business outcomes. Recommendations should be reviewed in the context of your business, market, and technical setup.",
          ],
        },
        {
          title: "Consultations and Services",
          body: [
            "Any paid work, retainers, development projects, SEO campaigns, or consulting services will be governed by a separate proposal, invoice, statement of work, or written agreement where applicable.",
            "Unless a separate agreement says otherwise, timelines, deliverables, and commercial terms discussed through the website or consultation calls are estimates until confirmed in writing.",
          ],
        },
        {
          title: "Third-Party Services",
          body: [
            "The website may link to or rely on third-party platforms such as Calendly, Brevo, Google, Sanity, hosting providers, analytics tools, and social networks.",
            "We are not responsible for third-party websites, availability, data practices, commercial changes, API limitations, or terms. Your use of those services may be subject to their own agreements.",
          ],
        },
        {
          title: "Intellectual Property",
          body: [
            "The website design, copy, branding, graphics, code, and content are owned by Rank It Globally or used with permission, except where third-party marks or assets are identified.",
            "You may not copy, resell, reproduce, or reuse substantial parts of the website without written permission.",
          ],
        },
        {
          title: "No Warranties",
          body: [
            "The website and growth assessment tools are provided on an as-is and as-available basis. We do not warrant that the site will be uninterrupted, without errors, or without harmful components.",
            "We make no guarantee that recommendations, reports, or strategies will produce a particular ranking, traffic level, conversion rate, or financial result.",
          ],
        },
        {
          title: "Limitation of Liability",
          body: [
            "To the fullest extent permitted by law, Rank It Globally will not be liable for indirect, incidental, consequential, special, punitive, or lost-profit damages arising from your use of the website or growth assessment tools.",
            "Where liability cannot be excluded, our liability will be limited to the amount you paid us for the specific service giving rise to the claim.",
          ],
        },
        {
          title: "Changes to These Terms",
          body: [
            "We may update these terms from time to time. The updated version will be posted on this page with a revised date.",
          ],
        },
        {
          title: "Contact",
          body: [
            "For questions about these terms, contact Rank It Globally at hello@rankitglobally.com.",
          ],
        },
      ]}
    />
  );
}
