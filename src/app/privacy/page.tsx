import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Privacy Policy | Rank It Globally',
  description: 'Privacy Policy for Rank It Globally.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full prose prose-lg prose-blue">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Privacy Policy</h1>
        
        <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Rank It Globally ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
        </p>

        <h2>2. The Data We Collect About You</h2>
        <p>
          Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul>
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
        </ul>

        <h2>3. How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at: <strong>sales@rankitglobally.com</strong>
        </p>
      </div>

      <Footer />
    </main>
  );
}
