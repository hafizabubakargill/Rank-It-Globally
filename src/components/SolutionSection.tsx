"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function SolutionSection() {
  const solutions = [
    {
      title: "Built for Speed",
      description: "We use modern tech stacks (Next.js, React) so your site loads in milliseconds, keeping bounce rates low.",
    },
    {
      title: "Conversion-First Design",
      description: "Every layout, button, and headline is strategically placed to guide users toward contacting you or buying.",
    },
    {
      title: "Premium Aesthetic",
      description: "Stand out from competitors with a high-end, custom design that immediately builds trust with prospects.",
    },
    {
      title: "SEO Optimized Base",
      description: "Clean code structure and best practices ensure Google can easily crawl and rank your new digital asset.",
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section id="solution" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              We engineer digital assets that <span className="text-brand-primary">drive revenue.</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium leading-relaxed mb-8">
              A website is an investment. We build custom solutions designed to recover that investment quickly by capturing more of your existing traffic.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/book-call" 
              className="inline-block bg-white text-brand-dark px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              See how we do it
            </motion.a>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {solutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300"
              >
                <CheckCircle2 className="text-brand-primary w-8 h-8 mb-6" />
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
