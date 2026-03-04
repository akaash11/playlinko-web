import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import SupportContent from "./SupportContent";

export const metadata: Metadata = {
  title: "Support Center",
  description:
    "Get help with 2248 Linko. Contact our support team, browse common questions, and request account deletion.",
  keywords: [
    "2248 Linko support",
    "playlinko help",
    "contact 2248 Linko",
    "game support",
    "account deletion",
    "FAQ 2248 Linko",
  ],
  alternates: {
    canonical: `${siteConfig.url}/support`,
  },
  openGraph: {
    title: "Support Center | 2248 Linko",
    description:
      "Get help with 2248 Linko. Contact our team, browse FAQs, and manage your account.",
    url: `${siteConfig.url}/support`,
    type: "website",
  },
};

export default function SupportPage() {
  return <SupportContent />;
}
