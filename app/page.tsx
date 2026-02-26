"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faInfinity,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 55%, #FDE68A 100%)",
      }}
    >
      {/* ── Navigation ── */}
      <nav className="glass-nav w-full px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
          aria-label="2248 Linko home"
        >
          <span className="text-2xl font-black text-amber-500">2248</span>
          <span className="text-xl font-bold text-amber-800">Linko</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-amber-700/80 hover:text-amber-900 font-medium transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-amber-700/80 hover:text-amber-900 font-medium transition-colors"
          >
            Support
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl glass-card"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-[18px] flex flex-col justify-between">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block w-full h-0.5 bg-amber-700 rounded-full origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.18 }}
              className="block w-full h-0.5 bg-amber-700 rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block w-full h-0.5 bg-amber-700 rounded-full origin-center"
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="glass-menu md:hidden px-6 py-5 flex flex-col gap-1 z-40 overflow-hidden"
          >
            <Link
              href="/privacy"
              className="text-amber-900 font-semibold py-3 border-b border-amber-200/60 hover:text-amber-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/support"
              className="text-amber-900 font-semibold py-3 hover:text-amber-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Support
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero Section ── */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-20">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Mascot — top on mobile, right on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -18, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: {
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem]">
                {/* Ambient glow behind mascot */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/35 via-orange-300/20 to-transparent rounded-full blur-3xl scale-110" />

                {/* Main mascot container — liquid glass circle */}
                <div className="relative w-full h-full rounded-full glass-card overflow-hidden">
                  <Image
                    src="/shiba_happy.png"
                    alt="Linko — the 2248 Shiba Inu mascot"
                    fill
                    className="object-contain mascot-glow p-6"
                    priority
                  />
                </div>

                {/* Orbiting rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-5 border border-amber-300/40 rounded-full pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10 border border-amber-200/25 rounded-full pointer-events-none"
                />

                {/* Floating number badges */}
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 glass-card px-3 py-1.5 text-sm font-black text-amber-700 rounded-xl shadow-md"
                >
                  2248
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                  className="absolute -bottom-3 -left-3 glass-card px-3 py-1.5 text-sm font-black text-orange-500 rounded-xl shadow-md"
                >
                  ∞
                </motion.div>
              </div>
            </motion.div>

            {/* Text + CTA */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-black leading-none">
                  <span
                    className="block text-8xl md:text-[7rem] text-amber-500 tracking-tight"
                    style={{
                      textShadow:
                        "0 4px 24px rgba(245,158,11,0.28), 0 2px 8px rgba(217,119,6,0.2)",
                    }}
                  >
                    2248
                  </span>
                  <span className="block text-3xl md:text-5xl text-amber-900 mt-2 font-bold">
                    Linko and merge
                  </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-amber-800/75 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Bask in soothing{" "}
                  <strong className="text-amber-700 font-semibold">
                    Warm Light Mode
                  </strong>{" "}
                  as you merge numbers to infinity —{" "}
                  <strong className="text-amber-700 font-semibold">
                    Millions, Billions, and beyond!
                  </strong>
                </p>
              </motion.div>

              {/* Download Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* App Store */}
                <a
                  href="https://apps.apple.com/app/YOUR_APP_ID_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button-primary flex items-center justify-center gap-3 px-8 py-4 min-h-[64px] hover:scale-105 active:scale-100 transition-transform duration-300 touch-manipulation"
                >
                  <svg
                    className="w-7 h-7 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-normal opacity-90 leading-tight">
                      Download on the
                    </div>
                    <div className="text-base font-bold leading-tight">
                      App Store
                    </div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button-secondary flex items-center justify-center gap-3 px-8 py-4 min-h-[64px] hover:scale-105 active:scale-100 transition-transform duration-300 touch-manipulation"
                >
                  <svg
                    className="w-7 h-7 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-normal opacity-80 leading-tight">
                      Get it on
                    </div>
                    <div className="text-base font-bold leading-tight">
                      Google Play
                    </div>
                  </div>
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-sm text-amber-700/55"
              >
                Available on iOS 14+ and Android 8+
              </motion.p>
            </div>
          </div>
        </div>

        {/* ── Feature Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
        >
          <div className="glass-card p-7 text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faSun} className="text-2xl text-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-amber-800 mb-2">
              Warm Light Mode
            </h3>
            <p className="text-amber-700/70 text-sm leading-relaxed">
              A beautifully crafted warm amber palette that&apos;s gentle on your
              eyes — even during your longest play sessions.
            </p>
          </div>

          <div className="glass-card p-7 text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faInfinity} className="text-2xl text-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-amber-800 mb-2">
              Infinite Merging
            </h3>
            <p className="text-amber-700/70 text-sm leading-relaxed">
              Merge numbers from 2248 to Millions, Billions, and beyond. The
              number challenge never stops growing.
            </p>
          </div>

          <div className="glass-card p-7 text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faPuzzlePiece} className="text-2xl text-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-amber-800 mb-2">
              Number Puzzle
            </h3>
            <p className="text-amber-700/70 text-sm leading-relaxed">
              Strategic, addictive number merging gameplay that challenges and
              rewards players of every skill level.
            </p>
          </div>
        </motion.div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full px-6 py-8 border-t border-amber-200/50 text-center text-amber-700/55 text-sm">
        <p>&copy; 2026 2248 Linko. All rights reserved.</p>
        <div className="flex gap-6 justify-center mt-4">
          <Link
            href="/privacy"
            className="hover:text-amber-800 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/support"
            className="hover:text-amber-800 transition-colors"
          >
            Support
          </Link>
        </div>
      </footer>
    </div>
  );
}
