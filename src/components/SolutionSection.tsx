import { CheckCircle, Zap, MessageCircle, Smartphone, UserPlus, LineChart } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      title: "Conversion-focused design",
      description: "Every section is written and designed to move visitors closer to action.",
      icon: <CheckCircle className="text-brand-primary w-6 h-6" />
    },
    {
      title: "Next.js performance build",
      description: "Fast, lightweight frontend built for better loading speed, smooth user experience, and SEO foundations.",
      icon: <Zap className="text-brand-primary w-6 h-6" />
    },
    {
      title: "Clear sales messaging",
      description: "We help structure your offer, benefits, proof, and CTAs so visitors know exactly what to do.",
      icon: <MessageCircle className="text-brand-primary w-6 h-6" />
    },
    {
      title: "Mobile-first experience",
      description: "Layouts designed to feel smooth and premium on phones, tablets, and desktops.",
      icon: <Smartphone className="text-brand-primary w-6 h-6" />
    },
    {
      title: "Lead capture flow",
      description: "Forms, call buttons, WhatsApp links, booking links, and email capture placed where they matter.",
      icon: <UserPlus className="text-brand-primary w-6 h-6" />
    },
    {
      title: "Analytics-ready setup",
      description: "Tracking structure prepared for Google Analytics, Meta Pixel, Google Ads, and other tools.",
      icon: <LineChart className="text-brand-primary w-6 h-6" />
    }
  ];

  return (
    <section id="solution" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
            A faster website. A clearer offer. A better conversion path.
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Rank It Globally helps you turn your website into a focused growth asset. We simplify your message, improve the layout, optimize performance, and create a clean path from visitor to lead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white shadow-xl shadow-brand-primary/5 hover:shadow-2xl hover:shadow-brand-primary/10 border border-white hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 group-hover:scale-110 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
