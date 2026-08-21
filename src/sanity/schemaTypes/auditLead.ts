import { defineField, defineType } from "sanity";

const auditScopeOptions = [
  "Website Design",
  "SEO",
  "Local SEO / Google Business Profile",
  "Website Speed",
  "Leads / Conversions",
  "Ecommerce Performance",
  "Full Growth Assessment",
];

const problemOptions = [
  "Not getting enough leads",
  "Low website traffic",
  "Not ranking on Google",
  "Website is slow",
  "Website looks outdated",
  "Ads not converting",
  "Not sure",
];

const readinessOptions = [
  "Exploring fit",
  "Ready to start soon",
  "Planning a larger growth initiative",
  "Not sure yet",
];

export const auditLead = defineType({
  name: "auditLead",
  title: "Growth Assessment Lead",
  type: "document",
  fields: [
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["received", "reviewed", "booked", "closed"],
        layout: "radio",
      },
      initialValue: "received",
    }),
    defineField({ name: "sourcePage", title: "Source Page", type: "string" }),
    defineField({ name: "fullName", title: "Full Name", type: "string" }),
    defineField({
      name: "businessEmail",
      title: "Business Email",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({ name: "phoneNumber", title: "Phone Number", type: "string" }),
    defineField({ name: "websiteUrl", title: "Website URL", type: "url" }),
    defineField({
      name: "normalizedWebsite",
      title: "Normalized Website",
      type: "url",
      readOnly: true,
    }),
    defineField({
      name: "auditScope",
      title: "What should be assessed?",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: auditScopeOptions,
      },
    }),
    defineField({
      name: "biggestProblem",
      title: "Biggest Problem Right Now",
      type: "string",
      options: {
        list: problemOptions,
      },
    }),
    defineField({
      name: "investmentReadiness",
      title: "Investment Readiness",
      type: "string",
      options: {
        list: readinessOptions,
      },
    }),
    defineField({
      name: "message",
      title: "Message / Notes",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "adminLeadEmailStatus",
      title: "Admin Lead Email Status",
      type: "string",
      readOnly: true,
      options: {
        list: ["pending", "sent", "failed"],
      },
    }),
    defineField({
      name: "adminEmailError",
      title: "Admin Email Error",
      type: "text",
      rows: 3,
      readOnly: true,
    }),
    defineField({
      name: "reportSummary",
      title: "Assessment Notes",
      type: "text",
      rows: 8,
      readOnly: true,
    }),
    defineField({
      name: "providerStatus",
      title: "Provider Status",
      type: "text",
      rows: 3,
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest submissions",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "fullName",
      website: "websiteUrl",
      submittedAt: "submittedAt",
      status: "status",
    },
    prepare(selection) {
      const title = selection.name || selection.website || "Growth Assessment Lead";
      const date = selection.submittedAt ? new Date(selection.submittedAt).toLocaleString() : "No date";
      return {
        title,
        subtitle: `${selection.status || "received"} - ${selection.website || "No website"} - ${date}`,
      };
    },
  },
});
