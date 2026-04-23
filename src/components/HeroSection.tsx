import { ArrowRight, BarChart3, CheckCircle2, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-brand-light pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-sm mb-6 shadow-sm">
              <Zap size={16} />
              High-Performance Web Design
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-brand-dark leading-[1.1] mb-6 tracking-tight">
              Your website should bring clients,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">not just look good.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              We design and build high-performance websites, landing pages, ecommerce stores, and digital systems engineered for speed, clarity, and conversion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="/book-call"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-primary/30 transform hover:-translate-y-1"
              >
                Book a Free Strategy Call
                <ArrowRight size={20} />
              </a>
              <a
                href="#work"
                className="bg-white hover:bg-gray-50 border border-gray-200 text-brand-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-sm hover:shadow-md"
              >
                See Our Work
              </a>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 font-semibold flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand-primary" />
                Websites • Landing Pages • Ecommerce • Automation
              </p>
              <p className="text-sm text-gray-500 font-medium">
                Trusted by growing businesses, startups, ecommerce brands, and service providers.
              </p>
            </div>
          </div>

          {/* Right Visual - Browser Mockup */}
          <div className="relative w-full h-[500px] lg:h-[650px] hidden md:block perspective-1000">
            {/* Main Browser Window */}
            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col transform lg:translate-x-4 lg:-translate-y-4 transition-transform duration-700 hover:scale-[1.02]">
              {/* Browser Header */}
              <div className="h-12 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto bg-white border border-gray-200 h-6 w-64 rounded-md flex items-center px-3 shadow-sm">
                  <div className="h-2 w-40 bg-gray-200 rounded" />
                </div>
              </div>
              {/* Browser Body */}
              <div className="flex-1 p-8 relative overflow-hidden bg-gray-50">
                <div className="h-48 bg-gradient-to-br from-brand-primary/10 to-purple-500/10 rounded-2xl mb-8 border border-brand-primary/20 flex flex-col justify-end p-8 shadow-inner">
                   <div className="h-10 w-64 bg-brand-primary/20 rounded-lg mb-4" />
                   <div className="h-4 w-96 bg-gray-300/50 rounded" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="h-40 bg-white rounded-2xl border border-gray-100 shadow-sm" />
                  <div className="h-40 bg-white rounded-2xl border border-gray-100 shadow-sm" />
                  <div className="h-40 bg-brand-primary rounded-2xl shadow-lg shadow-brand-primary/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-white/30 border-t-white animate-spin" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            
            {/* Performance Card */}
            <div className="absolute top-16 -left-16 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                <BarChart3 size={28} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Performance</p>
                <p className="text-2xl font-black text-brand-dark">98<span className="text-brand-primary">+</span></p>
              </div>
            </div>

            {/* Mobile Preview */}
            <div className="absolute -bottom-12 right-8 w-56 h-96 bg-white rounded-[2.5rem] border-[8px] border-brand-dark shadow-2xl overflow-hidden flex flex-col z-20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
               <div className="w-20 h-5 bg-brand-dark absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-30" />
               <div className="flex-1 bg-gray-50 p-5 pt-10">
                 <div className="h-20 bg-gradient-to-r from-brand-primary to-purple-500 rounded-xl mb-4 shadow-md" />
                 <div className="h-6 w-32 bg-gray-200 rounded-md mb-6" />
                 <div className="space-y-3">
                   <div className="h-3 bg-gray-200 rounded-full w-full" />
                   <div className="h-3 bg-gray-200 rounded-full w-4/5" />
                   <div className="h-3 bg-gray-200 rounded-full w-full" />
                   <div className="h-3 bg-brand-primary/20 rounded-full w-2/3 mt-6" />
                 </div>
               </div>
            </div>

            {/* Tags */}
            <div className="absolute bottom-32 -left-8 bg-brand-dark text-white px-5 py-3 rounded-xl text-sm font-bold shadow-2xl z-20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Conversion-first layout
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
