export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Strategy & Audit",
      description: "We review your current site, offer, competitors, audience, and conversion gaps.",
    },
    {
      step: "02",
      title: "Content & Structure",
      description: "We map the landing page sections, rewrite the messaging, and define the CTA flow.",
    },
    {
      step: "03",
      title: "Design",
      description: "We create a polished UI using your brand, screenshots, visuals, and trust elements.",
    },
    {
      step: "04",
      title: "Next.js Development",
      description: "We build a fast, responsive frontend with optimized assets and clean structure.",
    },
    {
      step: "05",
      title: "Launch & Optimization",
      description: "We test performance, mobile experience, forms, links, tracking, and conversion flow before launch.",
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            A simple process that keeps the project moving
          </h2>
          <p className="text-lg text-gray-600">
            No confusing handoff. No endless revisions without direction. We follow a clear process from audit to launch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className="md:w-1/2 w-full p-6 md:p-8">
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-sm font-bold text-brand-accent-blue tracking-widest uppercase mb-2 block">Step {item.step}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-brand-accent-blue items-center justify-center font-bold text-gray-900 z-10 shadow-lg">
                  {item.step}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
