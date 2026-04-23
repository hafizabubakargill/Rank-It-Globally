"use client";

import { Hourglass, MessageSquareX, MousePointerClick, Smartphone } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ProblemSection() {
  const problems = [
    {
      title: "Slow loading pages",
      description: "Visitors leave before they even see your offer.",
      icon: <Hourglass className="text-brand-primary w-8 h-8" />,
    },
    {
      title: "Weak messaging",
      description: "The site looks nice, but people do not understand why they should choose you.",
      icon: <MessageSquareX className="text-brand-primary w-8 h-8" />,
    },
    {
      title: "No clear conversion path",
      description: "Too many sections, weak CTAs, and no simple next step.",
      icon: <MousePointerClick className="text-brand-primary w-8 h-8" />,
    },
    {
      title: "Poor mobile experience",
      description: "Most traffic is mobile, but many sites still feel built for desktop first.",
      icon: <Smartphone className="text-brand-primary w-8 h-8" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
            Most websites are built backwards.
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Businesses spend money on websites that look decent but fail where it matters: slow loading, weak messaging, unclear CTAs, and no real conversion flow.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(102,100,228,0.15)" }}
              className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(102,100,228,0.08)] border border-brand-primary/10 transition-colors duration-300"
            >
              <div className="mb-8 bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{problem.title}</h3>
              <p className="text-gray-600 font-medium">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
