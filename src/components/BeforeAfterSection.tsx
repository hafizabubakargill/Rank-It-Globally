import { XCircle, CheckCircle2 } from "lucide-react";

export default function BeforeAfterSection() {
  const beforePoints = [
    "Generic content",
    "Slow WordPress setup",
    "Too many sections",
    "Weak call to action",
    "No conversion strategy",
    "Unclear service positioning",
  ];

  const afterPoints = [
    "Clear positioning",
    "Fast Next.js landing page",
    "Focused conversion journey",
    "Strong CTAs",
    "SEO and analytics-ready structure",
    "Mobile-first premium experience",
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-accent-blue/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            From generic website to growth-focused experience
          </h2>
          <p className="text-lg text-gray-400">
            The difference is not just better design. It is better structure, clearer messaging, faster loading, and a stronger path to conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Before Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
            <div className="mb-8 flex items-center gap-3">
              <div className="bg-red-500/10 text-red-500 p-2 rounded-lg">
                <XCircle size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-300">Before</h3>
            </div>
            
            <ul className="space-y-5">
              {beforePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <XCircle size={20} className="text-red-500/50 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-gradient-to-b from-brand-accent-blue/20 to-brand-accent-violet/10 border border-brand-accent-blue/30 rounded-3xl p-8 sm:p-10 backdrop-blur-md relative shadow-[0_0_40px_rgba(59,130,246,0.15)] transform md:-translate-y-4">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent-blue to-transparent opacity-50" />
            
            <div className="mb-8 flex items-center gap-3">
              <div className="bg-brand-accent-blue/20 text-brand-accent-blue p-2 rounded-lg">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">After</h3>
            </div>
            
            <ul className="space-y-5">
              {afterPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 size={20} className="text-brand-accent-blue shrink-0 mt-0.5" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
