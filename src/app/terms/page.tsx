import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Terms of Service | Rank It Globally',
  description: 'Terms of Service for Rank It Globally.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full prose prose-lg prose-blue">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Terms of Service</h1>
        
        <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Terms</h2>
        <p>
          By accessing the website at <a href="https://rankitglobally.com">https://rankitglobally.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on Rank It Globally's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on Rank It Globally's website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on Rank It Globally's website are provided on an 'as is' basis. Rank It Globally makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall Rank It Globally or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Rank It Globally's website, even if Rank It Globally or a Rank It Globally authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2>5. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms, please contact us at: <strong>sales@rankitglobally.com</strong>
        </p>
      </div>

      <Footer />
    </main>
  );
}
