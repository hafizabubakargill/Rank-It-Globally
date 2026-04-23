import { CheckCircle2, ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  const checklist = [
    "Speed",
    "Messaging",
    "Mobile UX",
    "CTA Flow",
    "SEO Basics",
    "Tracking",
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent-violet/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to turn your website into a better sales asset?
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Share your current website and we'll review what can be improved in speed, design, messaging, and conversion flow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/book-call"
                className="bg-brand-accent-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25"
              >
                Book a Free Strategy Call
                <ArrowRight size={20} />
              </a>
              <a
                href="mailto:sales@rankitglobally.com"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all"
              >
                <Mail size={20} />
                Send an Email
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md w-full max-w-sm shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-brand-accent-gold text-gray-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full transform rotate-12 shadow-md">
                Free Audit
              </div>
              <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Website Audit Checklist</h3>
              <ul className="space-y-4">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-brand-accent-blue" />
                    <span className="text-lg text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
