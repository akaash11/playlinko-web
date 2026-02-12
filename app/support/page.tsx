"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (placeholder for now)
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            className="text-foreground/70 hover:text-neon-blue transition-colors"
          >
            Privacy
          </Link>
          <Link 
            href="/support" 
            className="text-electric-purple font-semibold"
          >
            Support
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-neon-blue neon-glow-blue">Support</span>{" "}
            <span className="text-electric-purple neon-glow-purple">Center</span>
          </h1>
          <p className="text-center text-foreground/80 text-lg mb-16 max-w-2xl mx-auto">
            Need help? We're here for you! Reach out to us with any questions or issues.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neon-blue/5 border border-neon-blue/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-neon-blue mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground/80 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-neon-blue/30 rounded-lg focus:outline-none focus:border-neon-blue text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground/80 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-neon-blue/30 rounded-lg focus:outline-none focus:border-neon-blue text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-foreground/80 mb-2 font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-neon-blue/30 rounded-lg focus:outline-none focus:border-neon-blue text-foreground"
                >
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Issue</option>
                  <option value="account">Account & Billing</option>
                  <option value="gameplay">Gameplay Question</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground/80 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-neon-blue/30 rounded-lg focus:outline-none focus:border-neon-blue text-foreground resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-electric-purple rounded-lg font-semibold text-background hover:scale-105 transition-transform duration-300 neon-border-blue"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* FAQ and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-electric-purple/5 border border-electric-purple/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-electric-purple mb-6">Quick Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-electric-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                    <p className="text-foreground/70">support@playlinko.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-foreground/70">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-electric-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
                    <p className="text-foreground/70">@playlinko on Twitter & Instagram</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-neon-blue/5 border border-neon-blue/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-neon-blue mb-6">Common Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How do I reset my password?</h3>
                  <p className="text-foreground/70 text-sm">
                    Go to Settings → Account → Reset Password within the app, or contact support for assistance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I play offline?</h3>
                  <p className="text-foreground/70 text-sm">
                    Yes! PlayLinko offers offline gameplay. However, leaderboard features require an internet connection.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">How do in-app purchases work?</h3>
                  <p className="text-foreground/70 text-sm">
                    All purchases are processed securely through the App Store or Google Play. Receipts are sent to your email.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I transfer progress between devices?</h3>
                  <p className="text-foreground/70 text-sm">
                    Yes! Sign in with your account on any device to sync your progress automatically.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
