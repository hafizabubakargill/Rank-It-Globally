export default function CTASection() {
  return (
    <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-dark/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
          Ready to Dominate Your Market?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 font-medium mb-12">
          Stop leaving money on the table. Let's build a digital asset that drives revenue from Day 1.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a
            href="/book-call"
            className="bg-brand-dark hover:bg-brand-darker text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:-translate-y-1"
          >
            Book Your Free Strategy Call
          </a>
          <p className="text-white/80 font-semibold flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            Limited spots available for this month.
          </p>
        </div>
      </div>
    </section>
  );
}
