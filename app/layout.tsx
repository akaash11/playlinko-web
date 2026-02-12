import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlayLinko - The Ultimate Puzzle Challenge",
  description: "Experience the thrill of Plinko like never before. Download PlayLinko now on iOS and Android!",
  keywords: ["plinko", "game", "mobile game", "playlinko", "arcade"],
  authors: [{ name: "PlayLinko Team" }],
  openGraph: {
    title: "PlayLinko - The Ultimate Puzzle Challenge",
    description: "Experience the thrill of Plinko like never before. Download PlayLinko now on iOS and Android!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayLinko - The Ultimate Puzzle Challenge",
    description: "Experience the thrill of Plinko like never before. Download PlayLinko now on iOS and Android!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
