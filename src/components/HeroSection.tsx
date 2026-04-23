"use client";

import { ArrowRight, CheckCircle2, PlayCircle, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative bg-[#0f110f] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white">
      {/* Aggressive Grid Background for tech/system feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Content (Copy & CTA) */}
          <motion.div 
            className="lg:col-span-7 max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-sm mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Stop Losing Leads to Competitors
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              We Build Digital Assets That <span className="text-[#6664e4]">Generate High-Ticket Leads</span> On Autopilot.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-400 mb-10 leading-relaxed font-medium">
              If your website isn't your #1 salesperson, it's a liability. We re-engineer your online presence for maximum speed, clarity, and conversion.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* High Contrast Primary CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/book-call"
                className="bg-[#FF5A5F] hover:bg-[#ff4046] text-white px-8 py-5 rounded-lg font-black text-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_40px_rgba(255,90,95,0.4)]"
              >
                Claim Your Free Conversion Audit
                <ArrowRight size={24} />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-400" size={18} />
                <span>100% ROI Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#6664e4]" size={18} />
                <span>No Long-Term Contracts</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual (VSL / Video Sales Letter Placeholder) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[4/5] perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6664e4] to-purple-600 rounded-3xl p-1 shadow-2xl">
              <div className="absolute inset-0 bg-black/40 rounded-3xl z-10" />
              {/* Fake Video Thumbnail Image */}
              <div 
                className="w-full h-full rounded-[1.4rem] bg-gray-900 bg-cover bg-center overflow-hidden relative z-0"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop")' }}
              >
                {/* Play Button Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:bg-[#FF5A5F] group-hover:border-[#FF5A5F] transition-colors"
                  >
                    <PlayCircle className="w-10 h-10 text-white ml-1" />
                  </motion.div>
                  <p className="text-white font-bold mt-4 tracking-widest uppercase text-sm drop-shadow-md">Watch the 2-Min Breakdown</p>
                </div>
              </div>
            </div>
            
            {/* Direct Response Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white text-gray-900 px-6 py-4 rounded-xl font-bold shadow-2xl z-30 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Average Increase</p>
                <p className="text-xl font-black">+240% Lead Volume</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Immediate Social Proof Strip (Below Fold) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-8">Trusted by 7-Figure Agencies, Consultancies, and Ecom Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos (Replace with actual client logos) */}
            <div className="text-2xl font-black italic tracking-tighter">Acme Corp</div>
            <div className="text-xl font-bold tracking-widest uppercase">TechFlow</div>
            <div className="text-2xl font-serif">GlobalScale</div>
            <div className="text-xl font-bold uppercase border-2 border-current px-2">Vertex</div>
            <div className="text-2xl font-black lowercase tracking-tight">nexus.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
