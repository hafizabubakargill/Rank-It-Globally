export default function TechStackSection() {
  const tools = [
    "Next.js", "React", "WordPress", "Shopify", 
    "WooCommerce", "GoHighLevel", "Google Analytics", "Meta Pixel", 
    "Stripe", "PayPal", "SEO Tools", "Cloudflare"
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Built with the tools modern businesses actually need
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We work across modern frontend, ecommerce, CMS, automation, and analytics tools depending on your project goals.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-full text-gray-700 font-medium hover:bg-white hover:border-brand-accent-blue/30 hover:shadow-sm transition-all"
            >
              {tool}
            </div>
          ))}
        </div>

        <p className="text-gray-500 font-medium">
          We choose the right stack based on speed, scalability, maintainability, and conversion goals.
        </p>
      </div>
    </section>
  );
}
