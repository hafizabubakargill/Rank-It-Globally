import { Hourglass, MessageSquareX, MousePointerClick, Smartphone } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      title: "Slow loading pages",
      description: "Visitors leave before they even see your offer.",
      icon: <Hourglass className="text-red-500 w-8 h-8" />,
    },
    {
      title: "Weak messaging",
      description: "The site looks nice, but people do not understand why they should choose you.",
      icon: <MessageSquareX className="text-orange-500 w-8 h-8" />,
    },
    {
      title: "No clear conversion path",
      description: "Too many sections, weak CTAs, and no simple next step.",
      icon: <MousePointerClick className="text-yellow-500 w-8 h-8" />,
    },
    {
      title: "Poor mobile experience",
      description: "Most traffic is mobile, but many sites still feel built for desktop first.",
      icon: <Smartphone className="text-brand-accent-blue w-8 h-8" />,
    },
  ];

  return (
    <section id="problems" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Most websites are built backwards.
          </h2>
          <p className="text-lg text-gray-600">
            Most businesses spend money on websites that look decent but fail where it matters: slow loading, weak messaging, unclear CTAs, poor mobile experience, and no real conversion flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
