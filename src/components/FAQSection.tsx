"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Why move from WordPress to Next.js?",
      answer: "WordPress is flexible, but many landing pages become heavy because of themes, plugins, page builders, and extra scripts. A Next.js landing page can be built lighter, faster, and more controlled, especially when the goal is performance and conversion.",
    },
    {
      question: "Will I still be able to update content?",
      answer: "Yes. The page can be connected to a simple CMS, or kept as a static landing page if you do not need frequent edits.",
    },
    {
      question: "Can you use my current website screenshots?",
      answer: "Yes. Existing screenshots can be used, improved, and displayed inside polished mockups. New visuals can also be added where needed.",
    },
    {
      question: "Can this connect to forms, booking, WhatsApp, or CRM?",
      answer: "Yes. The landing page can connect to booking tools, WhatsApp, email forms, GoHighLevel, HubSpot, Google Analytics, Meta Pixel, and other platforms.",
    },
    {
      question: "Is this only for landing pages?",
      answer: "No. The landing page can be expanded into a full business website, ecommerce site, or custom digital system.",
    },
    {
      question: "Can you redesign an existing WordPress website?",
      answer: "Yes. We can audit the existing site, reuse the best content and visuals, then rebuild the experience with stronger structure, speed, and conversion flow.",
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-gray-50 shadow-sm border-brand-accent-blue/30' : 'bg-white hover:border-gray-300'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className={`font-semibold text-lg ${openIdx === idx ? 'text-brand-accent-blue' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="ml-6 shrink-0 text-gray-400">
                  {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
