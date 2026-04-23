"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Analyze & Strategize",
      description: "We don't guess. We analyze your market gaps to build a roadmap that targets real revenue, not just empty clicks.",
    },
    {
      number: "02",
      title: "Design & Build",
      description: "Our team crafts persuasion-focused designs on a lightning-fast tech stack. We ensure zero bloat, robust security, and maximum conversion performance.",
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description: "We go live, set up advanced conversion tracking, and monitor performance. Your new digital asset works 24/7 to capture high-ticket leads.",
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
            From Concept to Conversion in 3 Steps.
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            A streamlined process designed to launch your high-converting website fast, without the typical agency delays.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-brand-light -z-10 rounded-full origin-left" 
          />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(102,100,228,0.05)] transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-brand-dark text-white rounded-2xl flex items-center justify-center text-3xl font-black mb-8 mx-auto shadow-lg shadow-brand-dark/20 relative"
              >
                {step.number}
                <div className="absolute -inset-2 border-2 border-brand-primary/30 rounded-[1.25rem] -z-10" />
              </motion.div>
              <h3 className="text-2xl font-black text-brand-dark mb-4 text-center">{step.title}</h3>
              <p className="text-gray-600 text-lg font-medium text-center leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
