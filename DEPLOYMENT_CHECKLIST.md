# PlayLinko Deployment Checklist

## ✅ Completed Configuration

- [x] App Store IDs updated in `app-ads.txt`
- [x] Android certificate fingerprint updated in `assetlinks.json`
- [x] Metadata title set to "PlayLinko - The Ultimate Puzzle Challenge"
- [x] All navigation links point to root domain
- [x] Logo is clickable and returns to homepage

## 🔗 App Store URLs to Update

Once your app is live on the app stores, update these placeholder URLs in `app/page.tsx`:

### App Store (iOS)
**Current URL:** 
```
https://apps.apple.com/app/YOUR_APP_ID_HERE
```

**What to update:**
- Replace `YOUR_APP_ID_HERE` with your actual App Store ID (found in App Store Connect)
- Example: `https://apps.apple.com/app/id1234567890`

**Line in file:** Line 58 in `app/page.tsx`

### Google Play Store (Android)
**Current URL:** 
```
https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME_HERE
```

**What to update:**
- Replace `YOUR_PACKAGE_NAME_HERE` with your actual package name (e.g., `com.playlinko.app`)
- Example: `https://play.google.com/store/apps/details?id=com.playlinko.app`

**Line in file:** Line 74 in `app/page.tsx`

## 📱 Mobile Store Configuration Files

### Apple App Site Association
**File:** `public/.well-known/apple-app-site-association`

**What to update:**
- Replace `TEAMID` with your Apple Team ID (found in Apple Developer account)
- Replace `com.playlinko.app` with your actual bundle identifier
- Example: `1234ABCDEF.com.playlinko.app`

### Android Asset Links
**File:** `public/.well-known/assetlinks.json`

✅ **Already updated** with certificate fingerprint:
```
B248F18E1B3C80590E3671F58CE733DB3D5A602E8B7E23F96BAD62C8CE95D7EF
```

**Verify:**
- Package name matches your Android app: `com.playlinko.app`
- SHA256 fingerprint is correct (obtained from Google Play Console)

### App Ads Configuration
**File:** `public/app-ads.txt`

✅ **Already updated** with publisher ID:
```
# google.com, pub-8302113663212183, DIRECT, f08c47fec0942fa0
```

**To activate:**
- Uncomment the line by removing the `#` at the beginning
- Add any additional ad network entries as needed

## 🚀 Quick Deploy Guide

1. **Update App Store URLs** (when apps are live)
   ```bash
   # Edit app/page.tsx
   # Update lines 58 and 74 with real URLs
   ```

2. **Verify Mobile Store Files**
   ```bash
   # Check apple-app-site-association
   # Update TEAMID placeholder
   
   # Verify assetlinks.json
   # Confirm SHA256 fingerprint is correct
   ```

3. **Activate App Ads** (when ready)
   ```bash
   # Edit public/app-ads.txt
   # Uncomment the Google AdMob line
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   npm start
   # Or deploy to Vercel/Netlify
   ```

## 🔍 Testing Checklist

- [ ] Test all navigation links (Privacy, Support, Home)
- [ ] Verify logo clicks return to homepage
- [ ] Confirm download buttons open correct stores (after URL update)
- [ ] Test responsive design on mobile devices
- [ ] Verify AASA file serves with correct Content-Type header
- [ ] Test Universal Links on iOS device
- [ ] Test App Links on Android device

## 📝 Notes

- The `vercel.json` file ensures proper Content-Type headers for AASA files
- All store links open in new tabs with `target="_blank"`
- Security attributes `rel="noopener noreferrer"` are included
- The site is fully responsive and mobile-optimized

---

**Ready to deploy!** Just update the placeholder URLs once your apps are live. 🚀
