# Rank It Globally - Next.js Landing Page

This is a premium, high-performance landing page built for Rank It Globally. It is designed to be fast, conversion-focused, and ready for deployment on Hostinger.

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS v4
- Lucide Icons (for lightweight SVGs)
- TypeScript

## Local Development

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Hostinger Deployment Instructions

This Next.js application is pre-configured for **Static Export**, which is the recommended and easiest way to host a landing page on Hostinger.

### Method 1: Static Export (Recommended)

Since `next.config.ts` is configured with `output: 'export'` and `images: { unoptimized: true }`, you can export the project as static HTML/CSS/JS files.

1. Build the project:
   ```bash
   npm run build
   ```
2. This will generate an `out` directory containing all the static files.
3. Upload the *contents* of the `out` directory directly to your Hostinger `public_html` folder using Hostinger's File Manager or FTP.
4. **Git Deployment (Alternative):** If Hostinger supports Git deployment for static sites, you can connect your repository, and set the build command to `npm run build` and the publish directory to `out`.

### Method 2: Node.js Hosting

If you need Server-Side Rendering (SSR) or API routes in the future, you can use Hostinger's Node.js hosting:

1. Remove `output: 'export'` from `next.config.ts`.
2. Build the app:
   ```bash
   npm run build
   ```
3. Start the production server:
   ```bash
   npm start
   ```
4. Configure the app in your Hostinger Node.js panel to point to the Next.js server.
