# Installation Guide

## 📦 Quick Start

### 1. Generate Icons (Required)

The extension needs icon files. Choose one method:

#### Method A: Use Browser (Easiest)
1. Open `icons/generate-icons.html` in Chrome
2. Right-click each canvas image
3. Save as:
   - `icon128.png` (128x128 canvas)
   - `icon48.png` (48x48 canvas)
   - `icon16.png` (16x16 canvas)
4. Save all in the `icons/` folder

#### Method B: Use Node.js (If you have canvas installed)
```bash
cd icons/
node generate.js
```

#### Method C: Use any icons you like
- Just name them `icon16.png`, `icon48.png`, `icon128.png`
- Place in `icons/` folder
- Recommended: 128x128, 48x48, 16x16 PNG images

### 2. Load Extension in Chrome

1. **Open Chrome Extensions page:**
   - Type `chrome://extensions/` in address bar
   - Or: Menu → Extensions → Manage Extensions

2. **Enable Developer Mode:**
   - Toggle "Developer mode" switch (top right)

3. **Load Extension:**
   - Click "Load unpacked"
   - Select the `modern-newtab-extension` folder
   - Click "Select"

4. **Done!** 🎉
   - Open a new tab to see your new homepage
   - The extension icon appears in your toolbar

### 3. First Use

When you open a new tab:
- You'll see the default gradient background
- Pre-populated quick links (Gmail, YouTube, etc.)
- Live weather for your location
- Current time and date

**Customize it:**
1. Click ⚙️ (Settings) on the left toolbar
2. Add custom background image URL
3. Change clock format (12/24 hour)
4. Add your own favorite sites

## 🔧 Troubleshooting

### "Extension failed to load"
- Make sure all files are in place
- Check that `icons/` folder contains the PNG files
- Verify `manifest.json` is valid JSON

### Icons missing error
- Generate the icon files using Method A above
- Or temporarily use any 3 PNG images renamed as `icon16.png`, `icon48.png`, `icon128.png`

### Weather not loading
- Check internet connection
- Weather uses free APIs, may have rate limits
- Click 🌤️ to refresh

### Search not working
- Make sure you selected a search engine
- Try different search engine from dropdown
- Check browser internet connection

### Notes not saving
- Check Chrome storage permissions
- Try reloading the extension
- Click "Reset to Default" in settings

## 🔄 Updating the Extension

After making code changes:
1. Go to `chrome://extensions/`
2. Find "Modern New Tab"
3. Click the reload icon 🔄
4. Open new tab to test changes

## 🗑️ Uninstalling

1. Go to `chrome://extensions/`
2. Find "Modern New Tab"
3. Click "Remove"
4. Confirm removal

Your Chrome will return to the default new tab page.

## 📱 Using on Other Chromium Browsers

This extension works on:
- **Microsoft Edge**: Same process
- **Brave**: Same process
- **Opera**: Same process
- **Vivaldi**: Same process

## 🎨 Customization Tips

### Best Background Images
- Use high-resolution images (1920x1080 or higher)
- Free sources:
  - unsplash.com
  - pexels.com
  - pixabay.com
- Get image URL: Right-click image → Copy Image Address

### Popular Quick Links to Add
- Notion: notion.so
- Figma: figma.com
- Spotify: spotify.com
- Netflix: netflix.com
- Amazon: amazon.com
- Discord: discord.com

### Clock Format
- **24-hour**: 14:30 (Military time)
- **12-hour**: 2:30 PM (Standard)

## 💡 Pro Tips

1. **Keyboard Shortcut**: Press `/` to focus search
2. **Quick Search**: Type in search box and press Enter
3. **AI Search**: Select "ChatGPT" for AI-powered answers
4. **Drag Links**: Rearrange quick links by dragging (coming soon)
5. **Sync**: Settings sync across devices via Chrome Sync

## ❓ Need Help?

If you encounter issues:
1. Check this guide first
2. Reload the extension
3. Try "Reset to Default" in settings
4. Check browser console for errors (F12 → Console)

---

**Enjoy your beautiful new tab!** ✨
