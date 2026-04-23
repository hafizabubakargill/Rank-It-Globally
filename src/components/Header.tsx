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
          ? "bg-white/90 backdrop-blur-md shadow-sm text-gray-900 py-3"
          : "bg-transparent text-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          Rank It Globally
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-brand-accent-blue transition-colors ${
                isScrolled ? "text-gray-600" : "text-gray-300"
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
            className="bg-brand-accent-blue hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            Book a Free Strategy Call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col px-4 text-gray-900">
          {navLinks.map((link) => (
            <a
               key={link.name}
               href={link.href}
               className="py-3 border-b border-gray-100 font-medium"
               onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/book-call"
            className="mt-4 bg-brand-accent-blue text-white text-center py-3 rounded-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Free Strategy Call
          </a>
        </div>
      )}
    </header>
  );
}
