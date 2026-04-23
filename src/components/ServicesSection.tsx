"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
            What we can build for you
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            From a single high-converting landing page to a complete website, store, or digital system, we build around your business goal first.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-brand-light p-8 sm:p-10 rounded-[2rem] shadow-sm border border-brand-primary/5 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 group flex flex-col h-full"
            >
              <h3 className="text-2xl font-black text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
              <p className="text-gray-700 font-medium mb-8 text-lg flex-1 leading-relaxed">{service.description}</p>
              
              <div className="mb-10">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="bg-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <a href="/book-call" className="inline-flex items-center text-white bg-brand-dark hover:bg-brand-primary px-6 py-3 rounded-full font-bold transition-colors group/link mt-auto w-max shadow-md">
                Discuss this build <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
