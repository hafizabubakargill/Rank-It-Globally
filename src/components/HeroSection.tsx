import { ArrowRight, BarChart3, CheckCircle2, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent-blue/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-brand-accent-violet/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-accent-blue font-medium text-sm mb-6">
              <Zap size={16} />
              High-Performance Web Design
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Your website should bring clients,{" "}
              <span className="text-gray-400 font-normal">not just look good.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              We design and build high-performance websites, landing pages, ecommerce stores, and digital systems engineered for speed, clarity, and conversion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="/book-call"
                className="bg-brand-accent-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25"
              >
                Book a Free Strategy Call
                <ArrowRight size={20} />
              </a>
              <a
                href="#work"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center transition-all"
              >
                See Our Work
              </a>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-400 font-medium flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand-accent-gold" />
                Websites • Landing Pages • Ecommerce • Automation • SEO-ready
              </p>
              <p className="text-sm text-gray-500">
                Trusted by growing businesses, startups, ecommerce brands, and service providers.
              </p>
            </div>
          </div>

          {/* Right Visual - Browser Mockup */}
          <div className="relative w-full h-[500px] lg:h-[600px] hidden md:block">
            {/* Main Browser Window */}
            <div className="absolute inset-0 bg-gray-900 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden flex flex-col transform lg:translate-x-4 lg:-translate-y-4">
              {/* Browser Header */}
              <div className="h-10 border-b border-white/10 bg-black/40 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto bg-white/5 h-5 w-48 rounded flex items-center px-3">
                  <div className="h-2 w-32 bg-white/20 rounded" />
                </div>
              </div>
              {/* Browser Body (Mockup of a clean interface) */}
              <div className="flex-1 p-6 relative overflow-hidden bg-brand-darker">
                <div className="h-40 bg-gradient-to-r from-blue-900/40 to-violet-900/40 rounded-xl mb-6 border border-white/5 flex items-end p-6">
                   <div className="h-8 w-48 bg-white/10 rounded" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                  <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                  <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            
            {/* Performance Card */}
            <div className="absolute top-12 -left-12 bg-white rounded-xl shadow-xl p-4 border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <BarChart3 size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Performance</p>
                <p className="text-xl font-bold text-gray-900">98<span className="text-green-500">+</span></p>
              </div>
            </div>

            {/* Mobile Preview */}
            <div className="absolute -bottom-8 right-12 w-48 h-80 bg-gray-900 rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden flex flex-col z-20">
               <div className="w-16 h-4 bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl" />
               <div className="flex-1 bg-brand-dark p-4 pt-8">
                 <div className="h-16 bg-white/5 rounded-lg mb-3" />
                 <div className="h-8 w-24 bg-brand-accent-blue/20 rounded-lg mb-4" />
                 <div className="space-y-2">
                   <div className="h-2 bg-white/10 rounded w-full" />
                   <div className="h-2 bg-white/10 rounded w-4/5" />
                   <div className="h-2 bg-white/10 rounded w-full" />
                 </div>
               </div>
            </div>

            {/* Tags */}
            <div className="absolute bottom-24 -left-6 bg-gray-900/80 backdrop-blur border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-20">
              Conversion-first layout
            </div>
            <div className="absolute top-1/2 -right-8 bg-brand-accent-blue text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-20">
              Lead capture ready
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
