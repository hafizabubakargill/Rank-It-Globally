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
      title: "Ecommerce Brand",
      industry: "Ecommerce",
      description: "A product-focused store experience designed to help customers browse faster and buy with confidence.",
      imageColor: "from-brand-accent-blue/20 to-indigo-500/20",
    },
    {
      title: "Service Business Website",
      industry: "Professional Services",
      description: "A modern website structure built to explain services clearly and drive consultation bookings.",
      imageColor: "from-brand-accent-gold/20 to-orange-500/20",
    },
    {
      title: "Automation Dashboard",
      industry: "Operations",
      description: "A custom digital system designed to simplify workflows and improve business visibility.",
      imageColor: "from-brand-accent-violet/20 to-purple-500/20",
    }
  ];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Recent work built around clarity, speed, and conversion
          </h2>
          <p className="text-lg text-gray-600">
            A few examples of digital experiences, websites, ecommerce builds, and systems designed with business outcomes in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Image Placeholder */}
              <div className={`relative w-full aspect-[4/3] rounded-2xl mb-6 overflow-hidden bg-gradient-to-br ${project.imageColor} border border-gray-100`}>
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-500" />
                {/* Mockup Frame inside */}
                <div className="absolute bottom-0 right-0 w-[90%] h-[85%] bg-white rounded-tl-xl shadow-2xl border-t border-l border-gray-200 overflow-hidden transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
                  <div className="h-6 border-b border-gray-100 bg-gray-50 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="w-full h-32 bg-gray-100 rounded-lg" />
                    <div className="w-3/4 h-4 bg-gray-100 rounded" />
                    <div className="w-1/2 h-4 bg-gray-100 rounded" />
                  </div>
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
