# 📋 Publishing Checklist

## Pre-Flight Check ✈️

### Code Quality
- [x] All features working
- [x] No console errors
- [x] Manifest V3 compliant
- [x] Icons generated (SVG available)
- [ ] Test in fresh Chrome profile
- [ ] Test all keyboard shortcuts
- [ ] Test all modals close properly

### Required Files
- [x] manifest.json
- [x] newtab.html
- [x] background.js
- [x] scripts/newtab.js
- [x] styles/newtab.css
- [x] icons/icon16.svg (or .png)
- [x] icons/icon48.svg (or .png)
- [x] icons/icon128.svg (or .png)
- [x] privacy-policy.html

### Documentation
- [x] README.md
- [x] INSTALL.md
- [x] PRIVACY_POLICY.md
- [x] Privacy policy HTML version

### Store Assets (To Do)
- [ ] icon128.png (PNG version for store)
- [ ] small_tile.png (440x280)
- [ ] screenshot-1.png (1280x800) - Hero shot
- [ ] screenshot-2.png (1280x800) - Icon settings
- [ ] screenshot-3.png (1280x800) - Wallpaper gallery
- [ ] screenshot-4.png (Optional)
- [ ] screenshot-5.png (Optional)

---

## Store Assets Creation Guide

### Icon (128x128 PNG)

**Method 1: Browser**
```bash
open ~/Projects/modern-newtab-extension/icons/generate-icons.html
# Right-click 128x128 canvas → Save Image As → icon128.png
# Save to: ~/Projects/modern-newtab-extension/store-assets/
```

**Method 2: Online Converter**
- Go to: https://cloudconvert.com/svg-to-png
- Upload: icons/icon128.svg
- Download and save as: store-assets/icon128.png

### Screenshots (1280x800)

**Recommended shots:**

1. **Hero Shot** (screenshot-1.png)
   - Full new tab view
   - Beautiful wallpaper background
   - Clock, date, search bar visible
   - Quick links showing
   - Weather widget visible

2. **Icon Settings** (screenshot-2.png)
   - "Add New Site" dialog open
   - Show all 3 icon modes
   - Preview visible
   - Highlight the innovation

3. **Wallpaper Gallery** (screenshot-3.png)
   - Settings panel open
   - Gallery modal showing 15 wallpapers
   - Thumbnails visible
   - Clean and attractive

**How to capture:**
```bash
# Mac:
# 1. Open new tab, size window to ~1280x800
# 2. Press Cmd+Shift+4, then Space
# 3. Click Chrome window
# 4. Save as screenshot-X.png in store-assets/

# Windows:
# 1. Use Win+Shift+S
# 2. Select window or area
# 3. Save as screenshot-X.png in store-assets/
```

### Small Tile (440x280)

**Option 1: Design in Canva**
1. Go to canva.com
2. Create 440x280 custom size
3. Add gradient background (#667eea to #764ba2)
4. Add text:
   ```
   Modern New Tab
   AI-Enhanced Productivity
   ```
5. Add icons: 🎨 📷 🔍
6. Download as PNG

**Option 2: Crop Screenshot**
1. Take a screenshot of new tab
2. Open in any image editor
3. Crop to 440x280
4. Save as small_tile.png

---

## Developer Account Setup

### Step 1: Register
1. Go to: https://chrome.google.com/webstore/devconsole
2. Sign in with Google account
3. Pay $5 USD registration fee
4. Complete developer profile

### Step 2: Verify Email
- Check email for verification link
- Click to verify

---

## Package Creation

### Step 1: Clean Build
```bash
cd ~/Projects/modern-newtab-extension

# Remove development files
rm -f test.html
rm -f original-extension

# Optional: Convert SVG to PNG if needed
# (Store prefers PNG but SVG works)
```

### Step 2: Update manifest.json
```bash
# Make sure version is correct
# "version": "1.0.0" or "1.1.0"

# Make sure icons point to correct files
# If using PNG:
# "icons": {
#   "16": "icons/icon16.png",
#   "48": "icons/icon48.png",
#   "128": "icons/icon128.png"
# }
```

### Step 3: Create ZIP
```bash
cd ~/Projects
zip -r modern-newtab-v1.0.0.zip modern-newtab-extension/ \
  -x "*.git*" \
  -x "*node_modules*" \
  -x "*/test.html" \
  -x "*/store-assets/*" \
  -x "*/.DS_Store"

# Verify ZIP contents
unzip -l modern-newtab-v1.0.0.zip | head -20
```

---

## Store Submission

### Step 1: Upload Package
1. Go to: https://chrome.google.com/webstore/devconsole
2. Click "New Item"
3. Upload ZIP file
4. Wait for processing

### Step 2: Fill Store Listing

**Basic Info:**
- Product name: `Modern New Tab - AI Enhanced`
- Summary: (See STORE_LISTING.txt)
- Description: (See STORE_LISTING.txt)
- Category: `Productivity`
- Language: `English`

**Privacy:**
- Privacy policy: (Your public URL for privacy-policy.html)
- Single purpose: `Replace new tab page with customizable productivity dashboard`
- Permission justification:
  - storage: "Save user settings and notes locally"
  - bookmarks: "Access bookmarks for future features"
  - topSites: "Display frequently visited sites"

**Graphics:**
- Icon: Upload icon128.png
- Small tile: Upload small_tile.png (440x280)
- Screenshots: Upload 3-5 screenshots

**Distribution:**
- Visibility: Public (or Unlisted for testing)
- Countries: All countries
- Pricing: Free

### Step 3: Review and Submit
- [ ] Double-check all information
- [ ] Preview how it looks
- [ ] Click "Submit for Review"

---

## Post-Submission

### Expected Timeline
- ⏰ Review time: 1-3 business days
- 📧 You'll receive email updates
- 🔍 Check status in dev console

### Possible Outcomes

**✅ Approved**
- Extension goes live immediately
- You'll get confirmation email
- URL format: chrome.google.com/webstore/detail/[ID]

**⚠️ Needs Changes**
- You'll receive detailed feedback
- Make requested changes
- Re-submit

**❌ Rejected**
- Read rejection reasons carefully
- Fix issues
- Re-submit (usually resolves quickly)

### Common Issues
- Missing privacy policy URL
- Unclear permission justification
- Misleading screenshots
- Incomplete description

---

## After Publishing

### Immediate Actions
- [ ] Test installation from store
- [ ] Share URL with friends for feedback
- [ ] Post on social media
- [ ] Add to your resume/portfolio

### Ongoing Maintenance
- [ ] Monitor reviews and ratings
- [ ] Respond to user comments
- [ ] Fix reported bugs
- [ ] Plan feature updates

### Marketing (Optional)
- [ ] Post on Product Hunt
- [ ] Share on Reddit (r/chrome, r/productivity)
- [ ] Write blog post
- [ ] Create demo video
- [ ] Email tech blogs

---

## Update Process (Future)

When you need to release v1.1.0, v1.2.0, etc:

1. Update version in manifest.json
2. Make code changes
3. Test thoroughly
4. Create new ZIP
5. Go to dev console
6. Click "Upload Updated Package"
7. Upload new ZIP
8. Describe what changed
9. Submit for review

---

## Quick Commands Reference

```bash
# Check project structure
cd ~/Projects/modern-newtab-extension && find . -type f -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.json" | grep -v node_modules

# Create clean ZIP
cd ~/Projects && zip -r modern-newtab-v1.0.0.zip modern-newtab-extension/ -x "*.git*" "*/test.html" "*/store-assets/*" "*/.DS_Store"

# Verify ZIP size (should be < 100MB)
ls -lh modern-newtab-v1.0.0.zip

# Test install locally
open -a "Google Chrome" "chrome://extensions/"
```

---

## Support Resources

**Chrome Web Store Docs:**
- Developer Guide: https://developer.chrome.com/docs/webstore/
- Publishing Tutorial: https://developer.chrome.com/docs/webstore/publish/
- Best Practices: https://developer.chrome.com/docs/webstore/best-practices/

**Need Help?**
- Chrome Web Store Help: https://support.google.com/chrome_webstore/
- Stack Overflow: Tag `chrome-extension`

---

## Final Checklist Before Submit

- [ ] Tested in clean Chrome profile
- [ ] All features work
- [ ] No console errors
- [ ] Privacy policy URL live and accessible
- [ ] All store assets created (icon, tile, screenshots)
- [ ] Store listing text ready
- [ ] ZIP file created and tested
- [ ] Developer account registered
- [ ] $5 fee paid

**Ready?** Let's publish! 🚀

---

**Current Status:**
- ✅ Extension code complete
- ✅ Documentation complete
- ✅ Privacy policy created
- ⏳ Store assets pending (screenshots needed)
- ⏳ Developer account pending
- ⏳ ZIP package pending

**Next Step:** Create screenshots and store assets
