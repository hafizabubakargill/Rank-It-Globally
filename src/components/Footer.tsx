export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-12 border-b border-white/10 pb-12">
          
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left max-w-sm">
            <a href="#" className="flex-shrink-0">
              <img 
                src="https://rankitglobally.com/wp-content/uploads/2025/03/Logo-White-Rank-It-Globally-1.svg" 
                alt="Rank It Globally Logo" 
                className="h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-gray-400 font-medium">
              Get your business to the new heights. We build digital assets that drive revenue.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-center md:text-left">
            <div>
              <p className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-2">Email</p>
              <a href="mailto:sales@rankitglobally.com" className="text-lg font-bold hover:text-brand-primary transition-colors">
                sales@rankitglobally.com
              </a>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-2">Phone</p>
              <a href="tel:7865917846" className="text-lg font-bold hover:text-brand-primary transition-colors">
                (786) 591 7846
              </a>
            </div>
            <div>
               <a href="https://wa.me/17865917846" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/20 hover:border-brand-primary text-white font-bold py-3 px-6 rounded-full transition-all">
                 WhatsApp Only
               </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-medium text-sm">
          <p>
            Copyright © {currentYear} Rank It Globally. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
