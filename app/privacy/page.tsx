import Link from "next/link";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "2248 Linko Privacy Policy",
  description:
    "2248 Linko Privacy Policy — Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 60%, #FDE68A 100%)",
      }}
    >
      {/* ── Navigation ── */}
      <nav className="glass-nav w-full px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <span className="text-2xl font-black text-amber-500">2248</span>
          <span className="text-xl font-bold text-amber-800">Linko</span>
        </Link>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-amber-700 font-semibold border-b-2 border-amber-500 pb-0.5"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-amber-700/70 hover:text-amber-900 font-medium transition-colors"
          >
            Support
          </Link>
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-14 md:py-20">
        {/* Page header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
              <FontAwesomeIcon icon={faShieldHalved} className="text-xl text-amber-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-amber-900 leading-tight">
            2248 Linko{" "}
            <span className="text-amber-600">Privacy Policy</span>
          </h1>
          <p className="mt-4 text-amber-800/70 text-lg">
            <strong className="text-amber-800 font-semibold">
              Last Updated:
            </strong>{" "}
            February 11, 2026
          </p>
        </div>

        {/* Styled content container */}
        <div className="glass-card p-8 md:p-12 space-y-12">

          {/* Intro */}
          <section>
            <p className="text-amber-900/80 leading-relaxed text-base md:text-lg">
              Welcome to{" "}
              <strong className="text-amber-900 font-semibold">
                2248 Linko
              </strong>
              . Your privacy is a priority. This Privacy Policy explains how we
              collect, use, and protect your information when you play our mobile
              puzzle game. We comply with the Global Data Protection Regulation
              (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and the
              Oregon Consumer Privacy Act (OCPA).
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-5 pb-2 border-b border-amber-200/60">
              1. Data We Collect
            </h2>
            <p className="text-amber-900/75 leading-relaxed mb-6">
              We collect information to provide a seamless gameplay experience
              and to improve our services.
            </p>

            <h3 className="text-lg font-semibold text-amber-800 mb-3 mt-7">
              A. Information You Provide to Us
            </h3>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              <strong className="text-amber-900 font-semibold">
                Account Data:
              </strong>{" "}
              When you play, we use Supabase to store your unique User ID,
              chosen username, high scores, and daily streaks. This allows you
              to track progress across sessions.
            </p>

            <h3 className="text-lg font-semibold text-amber-800 mb-3 mt-7">
              B. Automatically Collected Data
            </h3>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              <strong className="text-amber-900 font-semibold">
                Analytics Data:
              </strong>{" "}
              We use PostHog to collect data on how you interact with the game.
              This includes gameplay events (e.g., levels completed), UI
              interactions, and session recordings to help us identify bugs and
              improve game design.
            </p>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              <strong className="text-amber-900 font-semibold">
                Device Identifiers:
              </strong>{" "}
              We collect Advertising Identifiers (such as Apple's IDFA or
              Google's Advertising ID) to facilitate advertising and attribution.
            </p>

            <h3 className="text-lg font-semibold text-amber-800 mb-3 mt-7">
              C. Purchase Data
            </h3>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              <strong className="text-amber-900 font-semibold">
                Transaction Status:
              </strong>{" "}
              We use RevenueCat to manage in-app purchases and subscriptions. We
              do not see or store your credit card information; that is handled
              entirely by the Apple App Store or Google Play Store. RevenueCat
              provides us with your subscription status and purchase history.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-5 pb-2 border-b border-amber-200/60">
              2. Mobile Device &amp; Technical Information
            </h2>
            <p className="text-amber-900/75 leading-relaxed mb-6">
              To provide a consistent and accessible gaming experience across a
              wide variety of mobile hardware, our App collects limited,
              non-identifiable technical information from your device.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "What we collect",
                  body: "This includes your device model, Operating System version, physical screen dimensions (width and height), and screen density settings (pixel ratio).",
                },
                {
                  title: "Purpose of Collection",
                  body: "This data is used exclusively for UI Optimization and Troubleshooting. It allows us to calculate responsive layouts, fix display issues related to device notches or rounded corners, and resolve hardware-specific bugs.",
                },
                {
                  title: "No Personal Identifiers",
                  body: "We do not collect names, email addresses, precise GPS locations, or unique persistent hardware IDs (such as IMEI). The technical data collected is linked only to an anonymous session ID used for app performance monitoring.",
                },
                {
                  title: "Data Retention",
                  body: "Technical logs are kept only as long as necessary to identify and resolve layout or performance issues across our supported device list.",
                },
              ].map(({ title, body }) => (
                <div key={title}>
                  <h3 className="text-base font-semibold text-amber-800 mb-1">
                    {title}
                  </h3>
                  <p className="text-amber-900/75 leading-relaxed text-sm md:text-base">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Third-party table */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-5 pb-2 border-b border-amber-200/60">
              3. Third-Party Service Providers
            </h2>
            <p className="text-amber-900/75 leading-relaxed mb-6">
              We share certain data with trusted partners to operate the game.
              Each provider is bound by data processing agreements to ensure
              your data remains secure.
            </p>

            <div className="overflow-x-auto rounded-xl">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-amber-100/80">
                    <th className="border border-amber-200 px-4 py-3 text-left text-amber-900 font-semibold">
                      Provider
                    </th>
                    <th className="border border-amber-200 px-4 py-3 text-left text-amber-900 font-semibold">
                      Purpose
                    </th>
                    <th className="border border-amber-200 px-4 py-3 text-left text-amber-900 font-semibold">
                      Data Shared
                    </th>
                  </tr>
                </thead>
                <tbody className="text-amber-900/75">
                  {[
                    {
                      provider: "Supabase",
                      purpose: "Backend & Database",
                      data: "User ID, Username, Game Progress",
                    },
                    {
                      provider: "PostHog",
                      purpose: "Product Analytics",
                      data: "Analytics Data, Session Recordings",
                      alt: true,
                    },
                    {
                      provider: "Google AdMob",
                      purpose: "Advertising",
                      data: "Advertising Identifiers, Device Info",
                    },
                    {
                      provider: "RevenueCat",
                      purpose: "Subscription Management",
                      data: "Purchase Receipts, Transaction IDs",
                      alt: true,
                    },
                  ].map(({ provider, purpose, data, alt }) => (
                    <tr
                      key={provider}
                      className={alt ? "bg-amber-50/60" : ""}
                    >
                      <td className="border border-amber-200 px-4 py-3 font-semibold text-amber-900">
                        {provider}
                      </td>
                      <td className="border border-amber-200 px-4 py-3">
                        {purpose}
                      </td>
                      <td className="border border-amber-200 px-4 py-3">
                        {data}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-5 pb-2 border-b border-amber-200/60">
              4. Advertising and Opt-Outs
            </h2>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              We use Google AdMob to serve both personalized and
              non-personalized advertisements.
            </p>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              <strong className="text-amber-900 font-semibold">
                Personalized Ads:
              </strong>{" "}
              These use your Advertising Identifier to show ads relevant to your
              interests.
            </p>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              <strong className="text-amber-900 font-semibold">
                Non-Personalized Ads:
              </strong>{" "}
              These are contextual and do not use your ID for profiling, though
              they still use the ID for frequency capping and fraud prevention.
            </p>
            <p className="text-amber-900/75 leading-relaxed mb-3">
              <strong className="text-amber-900 font-semibold">
                How to Opt-Out:
              </strong>{" "}
              You can reset or limit ad tracking through your device settings:
            </p>
            <ul className="list-disc list-inside text-amber-900/75 leading-relaxed space-y-2 ml-2">
              <li>
                <strong className="text-amber-900 font-medium">iOS:</strong>{" "}
                Settings &gt; Privacy &amp; Security &gt; Tracking.
              </li>
              <li>
                <strong className="text-amber-900 font-medium">Android:</strong>{" "}
                Settings &gt; Google &gt; Ads &gt; Delete Advertising ID.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-5 pb-2 border-b border-amber-200/60">
              5. Your Global Privacy Rights
            </h2>
            <p className="text-amber-900/75 leading-relaxed mb-5">
              Depending on your location (EU, UK, California, Oregon, etc.), you
              have specific rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-amber-900/75 leading-relaxed space-y-3 ml-2">
              <li>
                <strong className="text-amber-900 font-semibold">
                  Right to Access:
                </strong>{" "}
                You may request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong className="text-amber-900 font-semibold">
                  Right to Deletion:
                </strong>{" "}
                You may request that we delete your account and associated
                gameplay data.
              </li>
              <li>
                <strong className="text-amber-900 font-semibold">
                  Right to Correct:
                </strong>{" "}
                You may update your username or account details via the game
                settings.
              </li>
              <li>
                <strong className="text-amber-900 font-semibold">
                  Right to Opt-Out of "Sharing" or "Selling":
                </strong>{" "}
                Under CCPA and OCPA, we "share" Advertising Identifiers for
                cross-contextual behavioral advertising. You have the right to
                opt-out of this sharing.
              </li>
            </ul>
            <p className="text-amber-900/75 leading-relaxed mt-5">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:support@playlinko.com"
                className="text-amber-600 hover:text-amber-800 underline underline-offset-2 transition-colors"
              >
                support@playlinko.com
              </a>{" "}
              or visit our{" "}
              <Link
                href="/support"
                className="text-amber-600 hover:text-amber-800 underline underline-offset-2 transition-colors"
              >
                Support page
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-5 pb-2 border-b border-amber-200/60">
              6. Children's Privacy (COPPA Compliance)
            </h2>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              Our game is not directed at children under the age of 13 (or 16 in
              certain jurisdictions). We do not knowingly collect personal
              information from children.
            </p>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              If we discover that a child under 13 has provided us with personal
              data without parental consent, we will delete it immediately.
            </p>
            <p className="text-amber-900/75 leading-relaxed">
              If you are a parent or guardian and believe your child has provided
              us with data, please contact us.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-5 pb-2 border-b border-amber-200/60">
              7. Data Retention and Security
            </h2>
            <p className="text-amber-900/75 leading-relaxed">
              We retain your gameplay data (scores/streaks) as long as your
              account is active. If you are inactive for more than 24 months, we
              reserve the right to anonymize or delete your data. We use
              industry-standard encryption provided by our technical stack
              (Supabase/PostHog) to protect your information.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-5 pb-2 border-b border-amber-200/60">
              8. Contact Us
            </h2>
            <p className="text-amber-900/75 leading-relaxed mb-4">
              If you have questions about this policy or our privacy practices,
              please contact our Data Protection Officer at:
            </p>
            <ul className="space-y-2 text-amber-900/75">
              <li>
                <strong className="text-amber-900 font-semibold">Email:</strong>{" "}
                <a
                  href="mailto:privacy@playlinko.com"
                  className="text-amber-600 hover:text-amber-800 underline underline-offset-2 transition-colors"
                >
                  privacy@playlinko.com
                </a>
              </li>
              <li>
                <strong className="text-amber-900 font-semibold">
                  Support:
                </strong>{" "}
                <a
                  href="mailto:support@playlinko.com"
                  className="text-amber-600 hover:text-amber-800 underline underline-offset-2 transition-colors"
                >
                  support@playlinko.com
                </a>{" "}
                or{" "}
                <Link
                  href="/support"
                  className="text-amber-600 hover:text-amber-800 underline underline-offset-2 transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-10 pt-8 border-t border-amber-200/50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            Back to Home
          </Link>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full px-6 py-8 border-t border-amber-200/50 text-center text-amber-700/55 text-sm">
        <p>&copy; 2026 2248 Linko. All rights reserved.</p>
      </footer>
    </div>
  );
}
