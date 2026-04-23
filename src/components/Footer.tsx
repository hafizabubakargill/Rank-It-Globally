import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Ensure we use 2026 if the system year is earlier as requested by the prompt,
  // or dynamic if it's 2026 or later. We'll just hardcode 2026 as per prompt if needed, 
  // but a dynamic check is cleaner.
  const displayYear = currentYear > 2026 ? currentYear : 2026;

  return (
    <footer className="bg-brand-darker text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Rank It Globally</h2>
            <p className="mb-6 text-sm leading-relaxed">
              High-performance websites and digital systems built for growth.
            </p>
            <a href="mailto:sales@rankitglobally.com" className="inline-flex items-center gap-2 text-brand-accent-blue hover:text-blue-400 transition-colors">
              <Mail size={18} />
              <span>sales@rankitglobally.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-3">
              {['Work', 'Services', 'Process', 'Results', 'FAQs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-accent-blue hover:text-white transition-all text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-accent-blue hover:text-white transition-all text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-accent-blue hover:text-white transition-all text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {displayYear} Rank It Globally. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
