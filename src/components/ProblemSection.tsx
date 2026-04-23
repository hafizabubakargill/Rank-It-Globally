"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ProblemSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  const oldWay = [
    "Slow load times (3+ seconds) killing traffic before they see your offer.",
    "A generic 'brochure' site that explains what you do, but doesn't sell it.",
    "Hidden contact forms and weak 'Learn More' buttons.",
    "Desktop-first designs that break or look awful on mobile devices.",
    "No clear funnel—visitors browse aimlessly and leave without tracing."
  ];

  const newWay = [
    "Sub-second load times engineered with Next.js to maximize traffic retention.",
    "Direct-response copywriting that positions you as the only logical choice.",
    "High-contrast, impossible-to-miss CTAs that drive immediate action.",
    "Mobile-first architecture designed perfectly for where 80% of your traffic lives.",
    "A focused, single-path conversion funnel that forces a buying decision."
  ];

  return (
    <section id="problems" className="py-24 bg-[#f8f9fa] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0f110f] mb-6 tracking-tight leading-tight">
            Why 90% of Agency Websites <span className="text-red-500">Bleed Money.</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Most businesses buy websites based on how "pretty" they look. They end up with digital brochures that generate zero ROI. We build digital assets focused on one metric: Revenue.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* The Old Way */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 md:p-12 border-t-8 border-red-500 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-gray-900">The Old Way</h3>
            </div>
            <ul className="space-y-6">
              {oldWay.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="text-red-400 w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-gray-600 font-medium text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The New Way (Rank It Globally) */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#0f110f] rounded-3xl p-8 md:p-12 border-t-8 border-[#6664e4] shadow-[0_20px_50px_rgba(102,100,228,0.2)] text-white relative overflow-hidden"
          >
            {/* Subtle highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6664e4]/10 rounded-full blur-[80px]" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 bg-[#6664e4]/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-[#6664e4] w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black">The Rank It Globally Way</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              {newWay.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#6664e4] w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
