/**
 * Site configuration — single source of truth for all SEO metadata
 */

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://playlinko.com',
  name: '2248 Linko',
  title: '2248 Linko: Number Puzzle & Merge Game',
  shortTitle: '2248 Linko',
  description:
    'Merge numbers in Warm Light Mode and reach infinity — from 2248 to Millions, Billions, and beyond! Download 2248 Linko free on iOS and Android.',
  keywords: [
    '2248 Linko',
    '2248 game',
    'number puzzle game',
    'merge numbers game',
    'number merge puzzle',
    'mobile puzzle game',
    'number game app',
    'merge game iOS',
    'merge game Android',
    'linko game',
    'number chain game',
    '2248 app',
    'warm light mode game',
    'casual puzzle game',
    'brain puzzle game',
    'free puzzle game',
    'offline puzzle game',
    'infinite merge game',
    'tile merge game',
    'number combination puzzle',
    'puzzle game download',
    'iOS puzzle game',
    'Android puzzle game',
    'best number game 2025',
  ],
  ogImage: '/og-image.png',
  mascotImage: '/shiba_happy.png',
  social: {
    twitter: '@playlinko',
  },
  contact: {
    support: 'support@playlinko.com',
    privacy: 'privacy@playlinko.com',
  },
  app: {
    ios: 'https://apps.apple.com/app/id6760681337',
    android: 'https://play.google.com/store/apps/details?id=com.playlinko.mergegame',
    bundleId: 'com.playlinko.mergegame',
  },
} as const;

export function getAbsoluteUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}
