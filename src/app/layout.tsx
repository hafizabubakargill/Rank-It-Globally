import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "../styles/landing.css";

const brandIcon = "/assets/brand/favicon.png";
const appleIcon = "/assets/brand/apple-touch-icon.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://rankitglobally.com"),
  title: "Rank It Globally | AI SEO & Web Design Agency",
  description:
    "We build websites that rank on AI search, dominate Google, and turn clicks into clients. Get your Growth Audit - no obligation.",
  keywords: [
    "web design agency",
    "conversion optimization",
    "landing pages",
    "Shopify development",
    "WordPress websites",
    "SEO",
    "e-commerce",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Rank It Globally",
    title: "Rank It Globally | AI SEO & Web Design Agency",
    description:
      "We build websites that rank on AI search, dominate Google, and turn clicks into clients. Get your Growth Audit - no obligation.",
    url: "https://rankitglobally.com/",
    images: [brandIcon],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rankitglobally",
    title: "Rank It Globally | AI SEO & Web Design Agency",
    description:
      "We build websites that rank on AI search, dominate Google, and turn clicks into clients. Growth Audit - no obligation.",
    images: [brandIcon],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "64x64", type: "image/x-icon" },
      { url: brandIcon, sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: appleIcon, sizes: "180x180", type: "image/png" }],
  },
};

export const viewport = {
  themeColor: "#5552D4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G8NJHBTHVL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G8NJHBTHVL');
          `}
        </Script>
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "10805233";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l) {
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q = [];
              }
            })(window.lintrk);
          `}
        </Script>
        <Script
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="afterInteractive"
        />
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=10805233&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
}
