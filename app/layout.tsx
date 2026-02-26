import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "2248 Linko: Number Puzzle Game",
  description:
    "Merge numbers in Warm Light Mode and reach infinity — from 2248 to Millions, Billions, and beyond! Download 2248 Linko on iOS and Android.",
  keywords: [
    "2248",
    "linko",
    "number puzzle",
    "merge game",
    "mobile game",
    "2248 linko",
    "number merge",
    "puzzle game",
  ],
  authors: [{ name: "2248 Linko Team" }],
  openGraph: {
    title: "2248 Linko: Number Puzzle Game",
    description:
      "Merge numbers in Warm Light Mode and reach infinity — from 2248 to Millions, Billions, and beyond!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2248 Linko: Number Puzzle Game",
    description:
      "Merge numbers in Warm Light Mode and reach infinity — from 2248 to Millions, Billions, and beyond!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
