"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faInfinity,
  faPuzzlePiece,
  faMoon,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import type { AppReview } from "./api/reviews/route";

// ── Theme hook ──────────────────────────────────────────────────────────────
function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return { isDark, toggle };
}

// ── Star Rating component ────────────────────────────────────────────────────
function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) {
  const px = size === "xs" ? "text-[10px]" : "text-xs";
  return (
    <div className={`flex gap-0.5 ${px}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? "text-amber-500" : "text-amber-200/60"}
        />
      ))}
    </div>
  );
}

// ── Review Card ──────────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: AppReview }) {
  const initials = review.name
    .split(/[\s@_]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div className="glass-card p-6 flex flex-col gap-3 h-full select-none">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-sm text-amber-900 leading-tight">
              {review.name}
            </p>
            <StarRating rating={review.rating} size="xs" />
          </div>
        </div>
        {/* Apple badge */}
        <div className="shrink-0 flex items-center gap-1 opacity-50">
          <svg className="w-3.5 h-3.5 text-amber-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span className="text-[10px] text-amber-700 font-medium">App Store</span>
        </div>
      </div>

      {review.title && (
        <p className="font-bold text-sm text-amber-800 leading-snug line-clamp-1">
          &ldquo;{review.title}&rdquo;
        </p>
      )}

      <p className="text-amber-700/80 text-sm leading-relaxed line-clamp-4 flex-1">
        {review.content}
      </p>

      {review.date && (
        <p className="text-[11px] text-amber-600/50 mt-auto">
          {new Date(review.date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
      )}
    </div>
  );
}

// ── Reviews Marquee (infinite auto-scroll) ───────────────────────────────────
// Card slot width must match the w-[320px] + gap-5 (20px) below = 340px
const CARD_SLOT = 340;
const SPEED = 1.5; // px per animation frame (~90 px/s at 60 fps)

function ReviewsCarousel({ reviews }: { reviews: AppReview[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragPosStartRef = useRef(0);
  const rafRef = useRef<number>(0);

  const ONE_SET = CARD_SLOT * reviews.length;
  const looped = [...reviews, ...reviews, ...reviews];

  // ── RAF auto-scroll loop ──────────────────────────────────────────────────
  useEffect(() => {
    const tick = () => {
      if (!isDraggingRef.current && !isHoveredRef.current && trackRef.current) {
        posRef.current -= SPEED;
        // Wrap seamlessly when one full set has scrolled past
        if (posRef.current <= -ONE_SET) posRef.current += ONE_SET;
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ONE_SET]);

  // ── Drag helpers ──────────────────────────────────────────────────────────
  const startDrag = useCallback((clientX: number) => {
    isDraggingRef.current = true;
    dragStartXRef.current = clientX;
    dragPosStartRef.current = posRef.current;
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  }, []);

  const moveDrag = useCallback((clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const delta = clientX - dragStartXRef.current;
    posRef.current = dragPosStartRef.current + delta;
    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  }, []);

  const endDrag = useCallback(() => {
    isDraggingRef.current = false;
    if (containerRef.current) containerRef.current.style.cursor = "grab";
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden reviews-mask select-none"
      style={{ cursor: "grab" }}
      aria-label="Scrolling player reviews"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; endDrag(); }}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      <div
        ref={trackRef}
        className="flex gap-5"
        style={{
          width: `${CARD_SLOT * looped.length}px`,
          willChange: "transform",
        }}
      >
        {looped.map((review, i) => (
          <div key={i} className="w-[320px] shrink-0">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();
  const [reviews, setReviews] = useState<AppReview[]>([]);
  const reviewsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data: AppReview[]) => setReviews(data))
      .catch(() => setReviews([]));
  }, []);

  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--body-gradient)" }}>

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

        {/* Desktop links + theme toggle */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/privacy"
            className="text-amber-700/80 hover:text-amber-900 font-medium transition-colors text-sm"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-amber-700/80 hover:text-amber-900 font-medium transition-colors text-sm"
          >
            Support
          </Link>

          {/* Day / Night toggle */}
          <motion.button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            whileTap={{ scale: 0.88 }}
            className="relative w-14 h-7 rounded-full glass-card flex items-center px-1 overflow-hidden"
            style={{ border: "1px solid rgba(245,158,11,0.35)" }}
          >
            <motion.div
              animate={{ x: isDark ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5 h-5 rounded-full bg-amber-500 shadow-md flex items-center justify-center text-white"
              style={{ fontSize: 9 }}
            >
              <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            whileTap={{ scale: 0.88 }}
            className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-amber-600"
            style={{ fontSize: 13 }}
          >
            <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
          </motion.button>

          <button
            className="p-2 rounded-xl glass-card"
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
                animate={{ scaleX: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.18 }}
                className="block w-full h-0.5 bg-amber-700 rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block w-full h-0.5 bg-amber-700 rounded-full origin-center"
              />
            </div>
          </button>
        </div>
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
                y: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/35 via-orange-300/20 to-transparent rounded-full blur-3xl scale-110" />
                <div className="relative w-full h-full rounded-full glass-card overflow-hidden">
                  <Image
                    src="/shiba_happy.png"
                    alt="Linko — the 2248 Shiba Inu mascot"
                    fill
                    className="object-contain mascot-glow p-6"
                    priority
                    sizes="(max-width: 768px) 288px, 352px"
                  />
                </div>
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
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 glass-card px-3 py-1.5 text-sm font-black text-amber-700 rounded-xl shadow-md"
                >
                  2248
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
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
                      textShadow: "0 4px 24px rgba(245,158,11,0.28), 0 2px 8px rgba(217,119,6,0.2)",
                    }}
                  >
                    2248
                  </span>
                  <span className="block text-3xl md:text-5xl text-amber-900 mt-2 font-bold">
                    Linko and merge
                  </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-amber-800/75 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Play in{" "}
                  <strong className="text-amber-700 font-semibold">Warm Day</strong> or{" "}
                  <strong className="text-amber-700 font-semibold">Cozy Night Mode</strong>{" "}
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
                  href="https://apps.apple.com/app/id6760681337"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download 2248 Linko on the App Store"
                  className="glass-button-primary flex items-center justify-center gap-3 px-8 py-4 min-h-[64px] hover:scale-105 active:scale-100 transition-transform duration-300 touch-manipulation"
                >
                  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-normal opacity-90 leading-tight">
                      Download on the
                    </div>
                    <div className="text-base font-bold leading-tight">App Store</div>
                    <div className="flex items-center gap-1 mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-white/80 text-[9px]" />
                      ))}
                      <span className="text-[10px] text-white/70 ml-0.5">5.0</span>
                    </div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.playlinko.mergegame"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get 2248 Linko on Google Play"
                  className="glass-button-secondary flex items-center justify-center gap-3 px-8 py-4 min-h-[64px] hover:scale-105 active:scale-100 transition-transform duration-300 touch-manipulation"
                >
                  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-normal opacity-80 leading-tight">Get it on</div>
                    <div className="text-base font-bold leading-tight">Google Play</div>
                    <div className="text-[10px] opacity-60 mt-0.5">Free to play</div>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="flex flex-col items-center lg:items-start gap-2"
              >
                <p className="text-sm text-amber-700/55">Available on iOS 14+ and Android 8+</p>
                {reviews.length > 0 && (
                  <button
                    onClick={scrollToReviews}
                    className="text-sm text-amber-600 hover:text-amber-500 font-medium underline underline-offset-2 transition-colors"
                  >
                    See what players are saying →
                  </button>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Stats Trust Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 w-full max-w-3xl"
        >
          <div className="glass-card px-6 py-4 flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-amber-200/40">
            <div className="flex items-center gap-2.5 py-1 sm:px-8">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-amber-500 text-sm" />
                ))}
              </div>
              <span className="text-amber-800 font-semibold text-sm">5.0 App Store Rating</span>
            </div>
            <div className="flex items-center gap-2.5 py-1 sm:px-8">
              <FontAwesomeIcon icon={faPuzzlePiece} className="text-amber-500 text-lg" />
              <span className="text-amber-800 font-semibold text-sm">All Age Groups</span>
            </div>
            <div className="flex items-center gap-2.5 py-1 sm:px-8">
              <FontAwesomeIcon icon={faInfinity} className="text-amber-500 text-lg" />
              <span className="text-amber-800 font-semibold text-sm">Infinite Merging</span>
            </div>
          </div>
        </motion.div>

        {/* ── Feature Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
        >
          {[
            {
              icon: faSun,
              title: "Day & Night Mode",
              desc: "Switch between warm amber daylight and a cozy dark theme — both crafted to be gentle on your eyes.",
            },
            {
              icon: faInfinity,
              title: "Infinite Merging",
              desc: "Merge numbers from 2248 to Millions, Billions, and beyond. The number challenge never stops growing.",
            },
            {
              icon: faPuzzlePiece,
              title: "Number Puzzle",
              desc: "Strategic, addictive number merging gameplay that challenges and rewards players of every skill level.",
            },
          ].map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass-card p-7 text-center cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={icon} className="text-2xl text-amber-500" />
              </div>
              <h2 className="text-lg font-bold text-amber-800 mb-2">{title}</h2>
              <p className="text-amber-700/70 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Player Reviews ── */}
        {reviews.length > 0 && (
          <motion.section
            ref={reviewsRef}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
            className="mt-20 w-full scroll-mt-24"
            aria-label="Player reviews"
          >
            {/* Heading — stays centred within the content column */}
            <div className="text-center mb-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-amber-500 text-base" />
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-amber-900">
                What Players Are Saying
              </h2>
              <p className="mt-2 text-amber-700/65 text-sm">
                Real reviews from the App Store · drag to explore
              </p>
            </div>

            {/* Full-viewport-width marquee breakout */}
            <div style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
              <ReviewsCarousel reviews={reviews} />
            </div>

            <div className="mt-8 text-center max-w-4xl mx-auto">
              <a
                href="https://apps.apple.com/app/id6760681337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500 transition-colors underline underline-offset-2"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Read all reviews on the App Store
              </a>
            </div>
          </motion.section>
        )}
      </main>

      {/* ── Footer ── */}
      <footer
        className="w-full px-6 py-10 border-t border-amber-200/50 text-center text-amber-700/55 text-sm"
        aria-label="Site footer"
      >
        <p className="font-semibold text-amber-800/70 mb-1">2248 Linko — Number Puzzle & Merge Game</p>
        <p className="text-xs mb-4">The addictive number merging game available on iOS and Android.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="https://apps.apple.com/app/id6760681337"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button-primary inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold hover:scale-105 active:scale-100 transition-transform"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.playlinko.mergegame"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button-secondary inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold hover:scale-105 active:scale-100 transition-transform"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </a>
        </div>

        <p>&copy; 2026 2248 Linko. All rights reserved.</p>
        <nav className="flex gap-6 justify-center mt-3" aria-label="Footer navigation">
          <Link href="/privacy" className="hover:text-amber-800 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/support" className="hover:text-amber-800 transition-colors">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  );
}
