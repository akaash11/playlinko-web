"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
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
            className="text-foreground/70 hover:text-electric-purple transition-colors"
          >
            Support
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="text-neon-blue neon-glow-blue">Play</span>
                  <span className="text-electric-purple neon-glow-purple">Linko</span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                  Experience the ultimate Plinko game with stunning 3D graphics and addictive gameplay
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* App Store Button */}
                <a
                  href="https://apps.apple.com/app/YOUR_APP_ID_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-blue-400 rounded-full font-semibold text-background hover:scale-105 transition-transform duration-300 neon-border-blue flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </a>

                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-electric-purple to-electric-purple-400 rounded-full font-semibold text-background hover:scale-105 transition-transform duration-300 neon-border-purple flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm text-foreground/60"
              >
                Available on iOS 14+ and Android 8+
              </motion.div>
            </div>

            {/* Mascot Placeholder with Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 },
                scale: { duration: 0.8, delay: 0.3 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-electric-purple/20 to-transparent rounded-full blur-3xl"></div>
                
                {/* Placeholder for 3D Mascot */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-neon-blue/10 to-electric-purple/10 border-2 border-neon-blue/30 neon-border-blue flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🎯</div>
                    <p className="text-lg text-foreground/60">3D Mascot</p>
                    <p className="text-sm text-foreground/40">Coming Soon</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-24 h-24 border-2 border-electric-purple/30 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-neon-blue/30 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full"
        >
          <div className="text-center p-6 rounded-2xl bg-neon-blue/5 border border-neon-blue/20">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold text-neon-blue mb-2">Addictive Gameplay</h3>
            <p className="text-foreground/70">Drop, bounce, and win with exciting physics-based mechanics</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-electric-purple/5 border border-electric-purple/20">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-electric-purple mb-2">Stunning Graphics</h3>
            <p className="text-foreground/70">Immersive 3D visuals with beautiful neon aesthetics</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-neon-blue/5 border border-neon-blue/20">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-neon-blue mb-2">Compete & Win</h3>
            <p className="text-foreground/70">Challenge friends and climb the global leaderboards</p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-8 border-t border-neon-blue/10 text-center text-foreground/60 text-sm">
        <p>&copy; 2026 PlayLinko. All rights reserved.</p>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/privacy" className="hover:text-neon-blue transition-colors">
            Privacy Policy
          </Link>
          <Link href="/support" className="hover:text-electric-purple transition-colors">
            Support
          </Link>
        </div>
      </footer>
    </div>
  );
}
