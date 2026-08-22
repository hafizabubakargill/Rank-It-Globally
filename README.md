# Rank It Globally Next.js Site

Next.js conversion of the Rank It Globally landing page with a hidden Sanity blog and a Brevo-powered Growth Audit lead form.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill in the credentials you want enabled.

Required for the admin lead notification email:

```env
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_ADMIN_EMAIL=
```

Optional lead capture into a Brevo list:

```env
BREVO_LIST_ID=
```

## Sanity Setup

You already have a Sanity account. From this project folder:

```bash
npx sanity@latest login
npx sanity@latest projects list
```

Create or select a project in Sanity, then add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
```

The embedded Studio is available at `/studio`. The blog routes are available at `/blog` and `/blog/[slug]`, but they are intentionally not linked from the landing page navigation yet.

## Growth Audit Form

The landing page and the `/free-audit` page post to `/api/audit`. The route:

- validates the visitor's website and email
- saves the lead to Sanity (when write access is configured)
- adds the contact to Brevo (when a list is configured)
- sends an admin lead notification through Brevo

There is no automated report generation. The form is designed to get a visitor
onto a Calendly call, which appears immediately after a successful submission.

## Hostinger Deployment

Use Node.js 20.19+ or 22.12+ for this dependency set.

Build command:

```bash
npm run build
```

Start command:

```bash
npm start
```
