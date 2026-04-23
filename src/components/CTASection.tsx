"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Background accents */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-dark/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight"
        >
          Ready to Dominate Your Market?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 font-medium mb-12"
        >
          Stop leaving money on the table. Let's build a digital asset that drives revenue from Day 1.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/book-call"
            className="bg-brand-dark hover:bg-brand-darker text-white px-10 py-5 rounded-full font-bold text-xl transition-colors shadow-xl"
          >
            Book Your Free Strategy Call
          </motion.a>
          <p className="text-white/80 font-semibold flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            Limited spots available for this month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
