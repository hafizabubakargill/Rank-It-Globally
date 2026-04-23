import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Book a Free Consultation | Rank It Globally',
  description: 'Schedule a free strategy session to see how we can scale your lead volume.',
}

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col">
      {/* We add a solid background header by passing a prop or just letting the user scroll. 
          Actually, since Header is transparent at top, let's just add a top padding spacer. */}
      <Header />
      
      <div className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Book Your Free Strategy Session
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Select a time below that works for you. We'll analyze your current setup and show you exactly where you're losing money.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full min-h-[700px] border border-gray-100">
          <iframe 
            src="https://calendly.com/rankitglobally/free-consultation?embed_domain=rankitglobally.com&embed_type=Inline"
            width="100%" 
            height="100%" 
            className="w-full h-full min-h-[700px] border-none"
            title="Book a Free Consultation"
          ></iframe>
        </div>
      </div>

      <Footer />
    </main>
  );
}
