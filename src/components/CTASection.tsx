"use client";

import { motion } from "framer-motion";
import { Clock, Users, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0f110f] text-white relative overflow-hidden border-t border-white/10">
      {/* Background accents */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#6664e4]/20 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy & Urgency */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Ready to Scale Your <span className="text-[#6664e4]">Lead Volume?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12 leading-relaxed">
              Book your Free Conversion Audit below. We'll analyze your current site and show you exactly where you're losing money and how we can fix it.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Clock className="text-[#6664e4]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">15-Minute Strategy Call</h4>
                  <p className="text-gray-500">No pressure, purely value-driven breakdown.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Zap className="text-[#6664e4]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Actionable Custom Blueprint</h4>
                  <p className="text-gray-500">Walk away with a step-by-step scaling plan.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Users className="text-[#6664e4]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Limited Availability</h4>
                  <p className="text-gray-500">We only onboard 3 new clients per month to ensure quality.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-4">
                 {/* Fake user avatars for social proof */}
                 <div className="w-12 h-12 rounded-full border-2 border-[#0f110f] bg-gray-600 bg-[url('https://i.pravatar.cc/100?img=11')] bg-cover" />
                 <div className="w-12 h-12 rounded-full border-2 border-[#0f110f] bg-gray-600 bg-[url('https://i.pravatar.cc/100?img=12')] bg-cover" />
                 <div className="w-12 h-12 rounded-full border-2 border-[#0f110f] bg-gray-600 bg-[url('https://i.pravatar.cc/100?img=13')] bg-cover" />
                 <div className="w-12 h-12 rounded-full border-2 border-[#0f110f] bg-gray-600 bg-[url('https://i.pravatar.cc/100?img=14')] bg-cover" />
              </div>
              <p className="text-sm text-gray-400 font-medium">Join 50+ founders who scaled with us.</p>
            </div>
          </motion.div>

          {/* Right: Embedded Calendar Live Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative min-h-[700px] bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe 
              src="https://calendly.com/rankitglobally/free-consultation?embed_domain=rankitglobally.com&embed_type=Inline"
              width="100%" 
              height="100%" 
              className="absolute inset-0 border-none"
              title="Book a Free Consultation"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
