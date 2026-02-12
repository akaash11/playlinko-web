# PlayLinko Landing Page

A modern, neon-themed landing page for the PlayLinko mobile game built with Next.js 15 and Tailwind CSS.

## 🎮 Features

- **Neon Aesthetic Design**: Custom theme with neon-blue (#00f3ff) and electric-purple (#bc13fe) colors
- **Smooth Animations**: Framer Motion integration with floating mascot animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Mobile Store Compliance**: Complete setup for iOS and Android app store requirements
- **SEO Optimized**: Proper metadata and open graph tags

## 📱 Mobile Store Compliance

The following files have been configured for mobile app store requirements:

- `public/app-ads.txt` - App ads configuration
- `public/.well-known/apple-app-site-association` - iOS Universal Links
- `public/.well-known/assetlinks.json` - Android App Links
- `vercel.json` - Proper content-type headers for AASA files

## 🎨 Design System

### Colors
- **Neon Blue**: `#00f3ff` - Primary brand color with glow effects
- **Electric Purple**: `#bc13fe` - Secondary brand color
- **Background**: `#0a0a0a` - Deep slate/black
- **Foreground**: `#ededed` - Text color

### Custom CSS Classes
- `.neon-glow-blue` - Blue neon text glow effect
- `.neon-glow-purple` - Purple neon text glow effect
- `.neon-border-blue` - Blue neon border glow
- `.neon-border-purple` - Purple neon border glow
- `.gradient-neon` - Gradient from blue to purple

## 📄 Pages

### Home (`/`)
- Hero section with animated title
- 3D mascot placeholder with floating animation
- App Store and Google Play download buttons
- Feature highlights section
- Responsive navigation and footer

### Privacy Policy (`/privacy`)
- Comprehensive privacy policy text
- Professional typography
- Easy navigation back to home

### Support (`/support`)
- Contact form with validation
- Quick contact information
- FAQ section
- Animated layout with Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Dependencies

- **Next.js 16.1.6** - React framework
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **TypeScript 5** - Type safety

## 🎯 Project Structure

```
playlinko-web/
├── app/
│   ├── page.tsx           # Home page with hero section
│   ├── privacy/
│   │   └── page.tsx       # Privacy policy page
│   ├── support/
│   │   └── page.tsx       # Support/contact page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles and theme
├── public/
│   ├── .well-known/
│   │   ├── apple-app-site-association
│   │   └── assetlinks.json
│   └── app-ads.txt
├── vercel.json            # Vercel configuration
└── package.json
```

## 🎨 Customization

### Update Brand Colors
Edit the CSS variables in `app/globals.css`:

```css
:root {
  --neon-blue: #00f3ff;
  --electric-purple: #bc13fe;
  --background: #0a0a0a;
}
```

### Update App Store Links
Replace `#` placeholders in `app/page.tsx` with actual App Store and Google Play URLs.

### Update Mobile Store Configuration
- Update `TEAMID` in `apple-app-site-association` with your Apple Team ID
- Update `com.playlinko.app` with your actual app bundle identifier
- Update SHA256 fingerprint in `assetlinks.json` with your Android app certificate

## 📝 TODO

- [ ] Replace mascot placeholder with actual 3D model
- [ ] Add actual App Store and Google Play links
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up contact form backend
- [ ] Add more sections (Features, Screenshots, etc.)
- [ ] Implement actual app-ads.txt entries

## 🔒 Security & Privacy

- All forms are client-side validated
- Privacy policy is comprehensive and GDPR-compliant
- No personal data collection on the landing page

## 📄 License

See LICENSE file for details.

## 🤝 Contributing

This is a private project. For issues or suggestions, please contact the development team.

---

Built with ❤️ by the PlayLinko Team
