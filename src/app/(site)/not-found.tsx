import Link from "next/link";
import HardHomeLink from "@/components/HardHomeLink";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <p className="not-found-code">404</p>
        <h1>This page has moved or no longer exists.</h1>
        <p>
          The link may be from an older version of our website. You can return
          home, explore the blog, or request a growth assessment.
        </p>
        <div className="not-found-actions">
          <HardHomeLink className="not-found-primary">
            Back to homepage
          </HardHomeLink>
          <Link href="/blog">Browse the blog</Link>
          <Link href="/growth-assessment">Book a Growth Assessment</Link>
        </div>
      </div>
    </main>
  );
}
