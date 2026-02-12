import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PlayLinko",
  description: "PlayLinko Privacy Policy - Learn how we protect your data and respect your privacy.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-neon-blue/10">
        <Link href="/" className="text-2xl font-bold text-neon-blue neon-glow-blue hover:scale-105 transition-transform">
          PlayLinko
        </Link>
        <div className="flex gap-6">
          <Link 
            href="/privacy" 
            className="text-neon-blue font-semibold"
          >
            Privacy
          </Link>
          <Link 
            href="/support" 
            className="text-foreground/70 hover:text-electric-purple transition-colors"
          >
            Support
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-neon-blue neon-glow-blue">Privacy</span>{" "}
          <span className="text-electric-purple neon-glow-purple">Policy</span>
        </h1>

        <div className="max-w-none">
          <p className="text-slate-300 text-lg mb-12">
            <strong className="text-slate-200">Last Updated:</strong> February 11, 2026
          </p>

          <section className="mb-12">
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              Welcome to <strong className="text-slate-200">PlayLinko</strong>. Your privacy is a priority. This Privacy Policy explains how we collect, use, and protect your information when you play our mobile puzzle game. We comply with the Global Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and the Oregon Consumer Privacy Act (OCPA).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neon-blue neon-glow-blue mb-6">1. Data We Collect</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We collect information to provide a seamless gameplay experience and to improve our services.
            </p>

            <h3 className="text-xl font-semibold text-electric-purple mb-4 mt-8">A. Information You Provide to Us</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-slate-200">Account Data:</strong> When you play, we use Supabase to store your unique User ID, chosen username, high scores, and daily streaks. This allows you to track progress across sessions.
            </p>

            <h3 className="text-xl font-semibold text-electric-purple mb-4 mt-8">B. Automatically Collected Data</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-slate-200">Analytics Data:</strong> We use PostHog to collect data on how you interact with the game. This includes gameplay events (e.g., levels completed), UI interactions, and session recordings to help us identify bugs and improve game design.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-slate-200">Device Identifiers:</strong> We collect Advertising Identifiers (such as Apple's IDFA or Google's Advertising ID) to facilitate advertising and attribution.
            </p>

            <h3 className="text-xl font-semibold text-electric-purple mb-4 mt-8">C. Purchase Data</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-slate-200">Transaction Status:</strong> We use RevenueCat to manage in-app purchases and subscriptions. We do not see or store your credit card information; that is handled entirely by the Apple App Store or Google Play Store. RevenueCat provides us with your subscription status and purchase history.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neon-blue neon-glow-blue mb-6">2. Third-Party Service Providers</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We share certain data with trusted partners to operate the game. Each provider is bound by data processing agreements to ensure your data remains secure.
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-neon-blue/30">
                <thead>
                  <tr className="bg-neon-blue/10">
                    <th className="border border-neon-blue/30 px-4 py-3 text-left text-slate-200 font-semibold">Provider</th>
                    <th className="border border-neon-blue/30 px-4 py-3 text-left text-slate-200 font-semibold">Purpose</th>
                    <th className="border border-neon-blue/30 px-4 py-3 text-left text-slate-200 font-semibold">Data Shared</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr>
                    <td className="border border-neon-blue/30 px-4 py-3"><strong className="text-slate-200">Supabase</strong></td>
                    <td className="border border-neon-blue/30 px-4 py-3">Backend & Database</td>
                    <td className="border border-neon-blue/30 px-4 py-3">User ID, Username, Game Progress</td>
                  </tr>
                  <tr className="bg-electric-purple/5">
                    <td className="border border-neon-blue/30 px-4 py-3"><strong className="text-slate-200">PostHog</strong></td>
                    <td className="border border-neon-blue/30 px-4 py-3">Product Analytics</td>
                    <td className="border border-neon-blue/30 px-4 py-3">Analytics Data, Session Recordings</td>
                  </tr>
                  <tr>
                    <td className="border border-neon-blue/30 px-4 py-3"><strong className="text-slate-200">Google AdMob</strong></td>
                    <td className="border border-neon-blue/30 px-4 py-3">Advertising</td>
                    <td className="border border-neon-blue/30 px-4 py-3">Advertising Identifiers, Device Info</td>
                  </tr>
                  <tr className="bg-electric-purple/5">
                    <td className="border border-neon-blue/30 px-4 py-3"><strong className="text-slate-200">RevenueCat</strong></td>
                    <td className="border border-neon-blue/30 px-4 py-3">Subscription Management</td>
                    <td className="border border-neon-blue/30 px-4 py-3">Purchase Receipts, Transaction IDs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-electric-purple neon-glow-purple mb-6">3. Advertising and Opt-Outs</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We use Google AdMob to serve both personalized and non-personalized advertisements.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-slate-200">Personalized Ads:</strong> These use your Advertising Identifier to show ads relevant to your interests.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-slate-200">Non-Personalized Ads:</strong> These are contextual and do not use your ID for profiling, though they still use the ID for frequency capping and fraud prevention.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-slate-200">How to Opt-Out:</strong> You can reset or limit ad tracking through your device settings:
            </p>
            <ul className="list-disc list-inside text-slate-300 leading-relaxed space-y-2 mb-4 ml-4">
              <li><strong className="text-slate-200">iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking.</li>
              <li><strong className="text-slate-200">Android:</strong> Settings &gt; Google &gt; Ads &gt; Delete Advertising ID.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neon-blue neon-glow-blue mb-6">4. Your Global Privacy Rights</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Depending on your location (EU, UK, California, Oregon, etc.), you have specific rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-slate-300 leading-relaxed space-y-3 mb-6 ml-4">
              <li><strong className="text-slate-200">Right to Access:</strong> You may request a copy of the personal data we hold about you.</li>
              <li><strong className="text-slate-200">Right to Deletion:</strong> You may request that we delete your account and associated gameplay data.</li>
              <li><strong className="text-slate-200">Right to Correct:</strong> You may update your username or account details via the game settings.</li>
              <li><strong className="text-slate-200">Right to Opt-Out of "Sharing" or "Selling":</strong> Under CCPA and OCPA, we "share" Advertising Identifiers for cross-contextual behavioral advertising. You have the right to opt-out of this sharing.</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              To exercise these rights, please contact us at <a href="mailto:support@playlinko.com" className="text-neon-blue hover:underline">support@playlinko.com</a> or visit our <Link href="/support" className="text-neon-blue hover:underline">Support page</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-electric-purple neon-glow-purple mb-6">5. Children's Privacy (COPPA Compliance)</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our game is not directed at children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              If we discover that a child under 13 has provided us with personal data without parental consent, we will delete it immediately.
            </p>
            <p className="text-slate-300 leading-relaxed">
              If you are a parent or guardian and believe your child has provided us with data, please contact us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neon-blue neon-glow-blue mb-6">6. Data Retention and Security</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We retain your gameplay data (scores/streaks) as long as your account is active. If you are inactive for more than 24 months, we reserve the right to anonymize or delete your data. We use industry-standard encryption provided by our technical stack (Supabase/PostHog) to protect your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-electric-purple neon-glow-purple mb-6">7. Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have questions about this policy or our privacy practices, please contact our Data Protection Officer at:
            </p>
            <ul className="list-none text-slate-300 leading-relaxed space-y-2">
              <li><strong className="text-slate-200">Email:</strong> <a href="mailto:privacy@playlinko.com" className="text-neon-blue hover:underline">privacy@playlinko.com</a></li>
              <li><strong className="text-slate-200">Support:</strong> <a href="mailto:support@playlinko.com" className="text-neon-blue hover:underline">support@playlinko.com</a> or <Link href="/support" className="text-neon-blue hover:underline">Contact Support</Link></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-neon-blue/10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-neon-blue hover:text-electric-purple transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-8 border-t border-neon-blue/10 text-center text-foreground/60 text-sm">
        <p>&copy; 2026 PlayLinko. All rights reserved.</p>
      </footer>
    </div>
  );
}
