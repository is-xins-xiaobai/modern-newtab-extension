# Changelog

All notable changes to Modern New Tab extension will be documented in this file.

## [1.2.0] - 2026-04-02

### ✨ Added
- **Edit Links Feature**: Click ✎ button to edit existing links (name, URL, icon)
- **Custom Wallpaper Management**: Add, name, and delete custom wallpapers
- **My Wallpapers Section**: Separate section in gallery for user-added wallpapers
- **Clearbit Logo API**: High-quality brand logos for default icons
- **ChatGPT Link**: Replaced GitHub with ChatGPT in default links

### 🎨 Improved
- Icon resolution increased from 128px to 256px source
- Display size increased from 48px to 64px
- Added CSS rendering optimization (crisp-edges, object-fit)
- Custom wallpapers marked with ⭐ badge
- Gallery organized into "My Wallpapers" and "Built-in Gallery" sections

### 🔧 Changed
- Default icons now use Clearbit Logo API instead of Google Favicon
- ChatGPT replaces GitHub in default links (more relevant for AI-enhanced tab)

### 🐛 Fixed
- Icon clarity issues with Gmail, GitHub, Twitter
- Service worker registration error (SVG to PNG icons)
- Chrome commands API error (added existence check)
- CORS errors (removed weather API)

---

## [1.1.1] - 2026-04-01

### 🐛 Fixed
- Removed weather API to fix CORS errors
- Cleaned up console warnings
- Optimized package size (20KB)

---

## [1.1.0] - 2026-04-01

### 🎨 Improved
- Simplified UI (removed sidebar, weather widget, notes panel)
- Added floating buttons for wallpaper gallery and settings
- Increased icon display size for better clarity

### 🐛 Fixed
- Service worker registration error (Status code: 15)
- Changed from SVG to PNG icons for Manifest V3 compatibility

---

## [1.0.0] - 2026-04-01

### 🎉 Initial Release

#### Core Features
- **Icon Customization**: 3 modes (Auto, Emoji, Custom URL)
- **Wallpaper Gallery**: 15 curated HD wallpapers
- **Quick Links**: Add/delete sites with custom icons
- **Multi-Engine Search**: Google, Bing, DuckDuckGo, ChatGPT
- **Clock & Date**: Real-time display with 12/24h format
- **Privacy-First**: No tracking, all data stored locally

#### Technical
- Manifest V3 compliant
- Chrome Storage API
- PNG icons (128x128, 48x48, 16x16)
- Vanilla JavaScript (no dependencies)

---

## Version History

| Version | Date | Key Features |
|---------|------|--------------|
| 1.2.0 | 2026-04-02 | Edit links, Custom wallpapers, Clearbit logos |
| 1.1.1 | 2026-04-01 | Bug fixes, Cleanup |
| 1.1.0 | 2026-04-01 | Simplified UI, Floating buttons |
| 1.0.0 | 2026-04-01 | Initial release |

---

## Future Plans

### Planned Features
- [ ] Import/export settings
- [ ] Keyboard shortcuts customization
- [ ] Widget system (optional weather, notes, etc.)
- [ ] Themes/color schemes
- [ ] Cloud sync options
- [ ] Browser action popup improvements

### Under Consideration
- [ ] Local file upload for wallpapers
- [ ] Animated backgrounds
- [ ] Widget marketplace
- [ ] Multi-language support

---

**Latest Release**: v1.2.0 (2026-04-02)  
**Download**: [Releases Page](https://github.com/is-xins-xiaobai/modern-newtab-extension/releases)  
**Chrome Web Store**: Coming soon!
