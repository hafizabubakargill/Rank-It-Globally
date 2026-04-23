import { Target, Zap, LayoutTemplate, Briefcase, Quote } from "lucide-react";

export default function ResultsSection() {
  const trustCards = [
    {
      title: "Conversion-first approach",
      description: "Every layout decision is tied to clarity, trust, and action.",
      icon: <Target className="w-6 h-6 text-brand-accent-blue" />,
    },
    {
      title: "Performance-focused development",
      description: "Pages are structured to load fast and feel smooth across devices.",
      icon: <Zap className="w-6 h-6 text-brand-accent-gold" />,
    },
    {
      title: "Multi-platform experience",
      description: "Experience across WordPress, Shopify, WooCommerce, Next.js, and automation tools.",
      icon: <LayoutTemplate className="w-6 h-6 text-brand-accent-violet" />,
    },
    {
      title: "Growth-ready systems",
      description: "Support for websites, funnels, ecommerce, CRM, analytics, and custom workflows.",
      icon: <Briefcase className="w-6 h-6 text-green-500" />,
    }
  ];

  const testimonials = [
    {
      quote: "Rank It Globally helped us turn a basic website into a much clearer and more professional online presence.",
    },
    {
      quote: "Fast communication, clean execution, and a strong understanding of what a business website needs.",
    }
  ];

  return (
    <section id="results" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Built for businesses that care about results
          </h2>
          <p className="text-lg text-gray-600">
            The goal is not just to launch a page. The goal is to create a digital experience that supports growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustCards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-brand-dark text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 -rotate-12" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-brand-accent-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-gray-200 font-medium leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
