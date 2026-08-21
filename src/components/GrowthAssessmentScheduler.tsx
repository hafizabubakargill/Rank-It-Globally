"use client";

import { useEffect, useRef } from "react";
import { calendlyUrl } from "@/content/publicPages";

type CalendlyWidgetOptions = {
  url: string;
  parentElement: HTMLElement;
};

type CalendlyMessage = {
  event?: string;
  payload?: {
    invitee?: {
      uri?: string;
    };
  };
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (options: CalendlyWidgetOptions) => void;
    };
  }
}

export default function GrowthAssessmentScheduler() {
  const calendlyContainerRef = useRef<HTMLDivElement | null>(null);
  const postedInviteesRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;

    loadCalendlyWidget()
      .then(() => {
        if (
          cancelled ||
          !window.Calendly?.initInlineWidget ||
          !calendlyContainerRef.current
        ) {
          return;
        }

        calendlyContainerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: calendlyContainerRef.current,
        });
      })
      .catch((error) => {
        console.error("Calendly widget failed to load", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    function handleCalendlyMessage(event: MessageEvent<CalendlyMessage>) {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event !== "calendly.event_scheduled") return;

      const inviteeUri = event.data.payload?.invitee?.uri;
      if (!inviteeUri || postedInviteesRef.current.has(inviteeUri)) return;

      postedInviteesRef.current.add(inviteeUri);
      void fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invitee_uri: inviteeUri }),
      }).catch((error) => {
        console.error("Calendly booking capture failed", error);
        postedInviteesRef.current.delete(inviteeUri);
      });
    }

    window.addEventListener("message", handleCalendlyMessage);
    return () => window.removeEventListener("message", handleCalendlyMessage);
  }, []);

  return (
    <div className="growth-calendly-card">
      <div className="growth-calendly-card-header">
        <span>Growth Assessment</span>
        <strong>Choose a time that works for you.</strong>
      </div>
      <div
        ref={calendlyContainerRef}
        className="growth-calendly-embed"
        aria-label="Growth Assessment scheduling calendar"
      />
    </div>
  );
}

function loadCalendlyWidget() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly?.initInlineWidget) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const existingScript = document.getElementById(
      "calendly-widget-script",
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Calendly script failed to load.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Calendly script failed to load.")),
      { once: true },
    );
    document.body.appendChild(script);
  });
}
