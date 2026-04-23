import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rank It Globally | High-Performance Websites & Digital Systems",
  description: "Rank It Globally builds fast, conversion-focused websites, landing pages, ecommerce stores, and digital systems that help businesses turn visitors into leads and sales.",
  openGraph: {
    title: "Rank It Globally | Websites Built for Speed, Clarity & Conversion",
    description: "Fast, modern, conversion-focused websites and digital systems for growing businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased h-full`}>
      <body className="font-sans bg-white text-gray-900 flex flex-col min-h-full">
        {children}
      </body>
    </html>
  );
}
