"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faClock,
  faShareNodes,
  faArrowLeft,
  faHeadset,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export default function SupportContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-3 bg-white/60 border border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-amber-900 placeholder:text-amber-400 transition";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 60%, #FDE68A 100%)",
      }}
    >
      {/* ── Navigation ── */}
      <nav
        className="glass-nav w-full px-6 py-4 flex justify-between items-center sticky top-0 z-50"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
          aria-label="2248 Linko home"
        >
          <span className="text-2xl font-black text-amber-500">2248</span>
          <span className="text-xl font-bold text-amber-800">Linko</span>
        </Link>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-amber-700/70 hover:text-amber-900 font-medium transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-amber-700 font-semibold border-b-2 border-amber-500 pb-0.5"
            aria-current="page"
          >
            Support
          </Link>
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-4">
            <div
              className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center"
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={faHeadset} className="text-2xl text-amber-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-amber-900 mb-4">
            Support <span className="text-amber-600">Center</span>
          </h1>
          <p className="text-amber-800/70 text-lg max-w-2xl mx-auto">
            Need help? We&rsquo;re here for you! Reach out with any questions or
            issues.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold text-amber-800 mb-6">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Support contact form">
              <div>
                <label
                  htmlFor="name"
                  className="block text-amber-800/80 mb-1.5 font-medium text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-amber-800/80 mb-1.5 font-medium text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-amber-800/80 mb-1.5 font-medium text-sm"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  aria-required="true"
                >
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Issue</option>
                  <option value="account">Account &amp; Billing</option>
                  <option value="gameplay">Gameplay Question</option>
                  <option value="feedback">Feedback &amp; Suggestions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-amber-800/80 mb-1.5 font-medium text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={inputClass + " resize-none"}
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="glass-button-primary w-full py-4 px-8 font-semibold text-base hover:scale-[1.02] active:scale-100 transition-transform duration-300 touch-manipulation"
                aria-label="Send support message"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">
                Quick Contact
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: faEnvelope,
                    title: "Email Support",
                    body: "support@playlinko.com",
                  },
                  {
                    icon: faClock,
                    title: "Response Time",
                    body: "We typically respond within 24 hours",
                  },
                  {
                    icon: faShareNodes,
                    title: "Social Media",
                    body: "@playlinko on Twitter & Instagram",
                  },
                ].map(({ icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-amber-600 text-base"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-0.5">
                        {title}
                      </h3>
                      <p className="text-amber-800/70 text-sm">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">
                Common Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How do I reset my password?",
                    a: "Go to Settings → Account → Reset Password within the app, or contact support for assistance.",
                  },
                  {
                    q: "Can I play offline?",
                    a: "Yes! 2248 Linko offers offline gameplay. However, leaderboard features require an internet connection.",
                  },
                  {
                    q: "How do in-app purchases work?",
                    a: "All purchases are processed securely through the App Store or Google Play. Receipts are sent to your email.",
                  },
                  {
                    q: "Can I transfer progress between devices?",
                    a: "Yes! Sign in with your account on any device to sync your progress automatically.",
                  },
                  {
                    q: "How do I delete my account?",
                    a: 'Email privacy@playlinko.com with the subject "Account Deletion Request" and your in-game username. We will permanently delete your account and all associated data within 30 days.',
                  },
                ].map(({ q, a }) => (
                  <div key={q}>
                    <h3 className="font-semibold text-amber-900 mb-1.5">
                      {q}
                    </h3>
                    <p className="text-amber-800/70 text-sm leading-relaxed">
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Account Deletion ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8 mb-10 border-2 border-amber-300/60"
        >
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={faTrashCan} className="text-red-500 text-lg" />
            </div>
            <h2 className="text-2xl font-bold text-amber-900">
              Delete My Account
            </h2>
          </div>
          <p className="text-amber-800/75 leading-relaxed mb-4">
            You have the right to request permanent deletion of your account and
            all associated data at any time. To submit a deletion request:
          </p>
          <ol className="list-decimal list-inside text-amber-900/75 leading-relaxed space-y-2 ml-2 mb-5">
            <li>
              Email{" "}
              <a
                href="mailto:privacy@playlinko.com"
                className="text-amber-600 hover:text-amber-800 underline underline-offset-2 font-medium transition-colors"
                aria-label="Send account deletion request email to privacy@playlinko.com"
              >
                privacy@playlinko.com
              </a>
            </li>
            <li>
              Use the subject line{" "}
              <strong className="text-amber-900 font-semibold">
                &ldquo;Account Deletion Request&rdquo;
              </strong>
            </li>
            <li>Include your in-game username in the message body</li>
          </ol>
          <p className="text-amber-800/70 text-sm">
            We will permanently delete your account and all associated gameplay
            data within <strong className="text-amber-900">30 days</strong> of
            receiving your request. You will receive a confirmation email once
            the deletion is complete.
          </p>
        </motion.div>

        <div className="pt-8 border-t border-amber-200/50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors"
            aria-label="Back to 2248 Linko home page"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="w-full px-6 py-8 border-t border-amber-200/50 text-center text-amber-700/55 text-sm"
        aria-label="Site footer"
      >
        <p>&copy; 2026 2248 Linko. All rights reserved.</p>
      </footer>
    </div>
  );
}
