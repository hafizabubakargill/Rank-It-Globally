"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Results", href: "#results" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm text-brand-dark py-3"
          : "bg-white/5 backdrop-blur-sm border-b border-white/10 text-brand-dark py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img 
            src="https://rankitglobally.com/wp-content/uploads/2024/08/Logo.svg" 
            alt="Rank It Globally Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-brand-primary transition-colors ${
                isScrolled ? "text-gray-600" : "text-gray-800"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="/book-call"
            className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg shadow-brand-primary/20"
          >
            Book a Free Strategy Call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col px-4 text-brand-dark border-t border-gray-100">
          {navLinks.map((link) => (
            <a
               key={link.name}
               href={link.href}
               className="py-3 border-b border-gray-100 font-medium hover:text-brand-primary"
               onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/book-call"
            className="mt-6 bg-brand-primary text-white text-center py-3 rounded-xl font-medium shadow-md shadow-brand-primary/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Free Strategy Call
          </a>
        </div>
      )}
    </header>
  );
}
