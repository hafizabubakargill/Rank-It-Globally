import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "High-Converting Landing Pages",
      description: "For campaigns, service offers, lead magnets, ads, and appointment booking.",
      tags: ["Google Ads", "Meta Ads", "Service Businesses", "Consultants", "SaaS Offers"],
    },
    {
      title: "Business Websites",
      description: "Clean, modern websites built to explain your business clearly, build trust, and generate inquiries.",
      tags: ["Homepage", "Services", "About", "Contact", "Portfolio", "FAQs"],
    },
    {
      title: "Ecommerce Websites",
      description: "Shopify, WooCommerce, or custom ecommerce experiences focused on product clarity and checkout flow.",
      tags: ["Product Pages", "Checkout", "Payments", "Trust Sections", "Store Design"],
    },
    {
      title: "Custom Systems & Automation",
      description: "For businesses that need more than a basic website.",
      tags: ["Dashboards", "Client Portals", "Booking Flows", "CRM", "Email Automation"],
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            What we can build for you
          </h2>
          <p className="text-lg text-gray-600">
            From a single high-converting landing page to a complete website, store, or digital system, we build around your business goal first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-accent-blue/20 transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-accent-blue transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-8 text-lg flex-1">{service.description}</p>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="bg-gray-50 text-gray-600 text-sm px-3 py-1.5 rounded-full border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <a href="/book-call" className="inline-flex items-center text-brand-accent-blue font-medium hover:text-blue-700 transition-colors group/link mt-auto">
                Discuss this build <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
