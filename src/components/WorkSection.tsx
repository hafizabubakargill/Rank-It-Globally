import { ArrowUpRight } from "lucide-react";

export default function WorkSection() {
  const projects = [
    {
      title: "Wellness Platform",
      industry: "Health & Wellness",
      description: "A clean digital experience for a wellness brand focused on clarity, trust, and user flow.",
      imageColor: "from-emerald-400/20 to-teal-500/20",
    },
    {
      title: "UR Counselor",
      description: "Lead-gen landing page for a counseling service. Increased booking inquiries by 40%.",
      category: "Landing Page",
    },
    {
      title: "Van Isle Paint",
      description: "High-trust local service website. Redesigned user flow boosted local quote requests by 35%.",
      category: "Local Business",
    },
    {
      title: "Wallito",
      description: "Mobile-first digital business card platform. Optimized signup flow resulted in a 50% drop in bounce rate.",
      category: "SaaS",
    },
    {
      title: "Peppy Pet",
      description: "Strategic upsell placement increased Average Order Value (AOV) by $22.",
      category: "Ecommerce",
    }
  ];

  return (
    <section id="work" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Real Results. Measurable Growth.</h2>
            <p className="text-xl text-gray-400 font-medium">
              We don't just write code. We build digital assets that drive revenue.
            </p>
          </div>
          <a href="/book-call" className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-3 rounded-full font-bold transition-all shadow-md shadow-brand-primary/20 shrink-0">
            Build My High-Converting Site
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Project Image Placeholder */}
              <div className="w-full aspect-video bg-brand-darker rounded-2xl mb-6 overflow-hidden relative border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-medium">
                  Project Visual
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-medium text-brand-accent-blue mb-1">{project.industry}</p>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-accent-blue group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-gray-600 mt-3">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
