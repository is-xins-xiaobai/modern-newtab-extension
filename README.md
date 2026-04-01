# Modern New Tab - AI Enhanced

A beautiful, modern Chrome extension that replaces your New Tab page with a customizable dashboard featuring AI search, quick notes, weather, and more.

## ✨ Features

### 🎨 Beautiful Design
- Gradient backgrounds with customization options
- Smooth animations and transitions
- Responsive layout that works on all screen sizes
- Glass morphism UI effects

### 🔍 Smart Search
- Multiple search engines (Google, Bing, DuckDuckGo, ChatGPT)
- Quick search with keyboard shortcut (press `/`)
- AI-powered ChatGPT search integration

### 📝 Quick Notes
- Built-in notepad with auto-save
- Always accessible from the toolbar
- Syncs across devices via Chrome sync

### 🌤️ Weather Widget
- Real-time weather display
- Automatic location detection
- Free API (no key required)
- 5-day forecast support

### 🔗 Quick Links
- Add your favorite sites
- Drag-and-drop reordering
- Custom icons (emoji or favicon)
- Pre-populated with popular sites

### ⚙️ Customization
- Custom background images
- Background display modes (cover, contain, tile)
- 12/24 hour clock format
- Hide/show elements
- Export/Import settings

### 🔐 Privacy-First
- No tracking or analytics
- All data stored locally
- Open source
- Manifest V3 compliant

## 🚀 Installation

### From Source (Development)

1. **Download the extension:**
   ```bash
   cd ~/Projects/modern-newtab-extension
   ```

2. **Open Chrome Extensions:**
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" (top right)

3. **Load the extension:**
   - Click "Load unpacked"
   - Select the `modern-newtab-extension` folder

4. **Done!** Open a new tab to see your new homepage

### From Chrome Web Store (Coming Soon)
The extension will be published to the Chrome Web Store soon.

## 📖 Usage

### Search
- Click the search bar or press `/` to search
- Select your preferred search engine from the dropdown
- Choose "ChatGPT" for AI-powered answers

### Quick Links
- Click "+ Add Site" to add new links
- Enter site name, URL, and optional emoji
- Hover and click "×" to remove links
- Links sync across all your devices

### Notes
- Click the 📝 icon in the left toolbar
- Type anything - notes auto-save
- Access from any new tab

### Weather
- Automatically displays your location's weather
- Click 🌤️ icon to refresh
- Location detected via IP geolocation

### Settings
- Click ⚙️ icon to open settings
- Customize background, clock format, etc.
- Export/import your configuration

## 🎨 Customization

### Custom Background
1. Open Settings (⚙️)
2. Enter background image URL
3. Choose display mode (cover/contain/tile)
4. Click "Save"

### Adding Links
1. Click "+ Add Site"
2. Enter:
   - **Name**: Display name
   - **URL**: Website address
   - **Icon**: Emoji (e.g., 🎵) or leave blank for favicon

### Clock Format
1. Open Settings
2. Select 12-hour or 24-hour format
3. Clock updates immediately

## 🛠️ Technical Details

### Built With
- **Manifest V3** - Latest Chrome extension standard
- **Vanilla JavaScript** - No frameworks, fast performance
- **Chrome Storage API** - Sync settings across devices
- **Open-Meteo API** - Free weather data
- **Modern CSS** - Gradient, glassmorphism, animations

### Permissions
- `storage` - Save settings and notes
- `bookmarks` - Access bookmarks (planned feature)
- `topSites` - Show frequently visited sites
- `https://api.openweathermap.org/*` - Weather data

### Browser Support
- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Brave
- ✅ Opera
- ⚠️ Firefox (requires minor adjustments)

## 🔧 Development

### Project Structure
```
modern-newtab-extension/
├── manifest.json          # Extension configuration
├── newtab.html           # Main new tab page
├── popup.html            # Extension popup
├── background.js         # Service worker
├── scripts/
│   └── newtab.js        # Main logic
├── styles/
│   └── newtab.css       # Styling
├── icons/               # Extension icons
└── README.md
```

### Making Changes
1. Edit files as needed
2. Go to `chrome://extensions/`
3. Click the reload icon on your extension
4. Open new tab to test

### Adding Features
- **Search engines**: Edit `SEARCH_ENGINES` in `newtab.js`
- **Default links**: Edit `DEFAULT_LINKS` in `newtab.js`
- **Styling**: Modify `styles/newtab.css`

## 🐛 Known Issues

- Weather may not load in some regions (API limitations)
- Bookmark panel is placeholder (coming soon)
- Some favicons may fail to load (fallback provided)

## 📝 TODO

- [ ] Publish to Chrome Web Store
- [ ] Add bookmark panel functionality
- [ ] Add recently closed tabs
- [ ] Add notification badges (Gmail, Calendar)
- [ ] Add more background presets
- [ ] Add themes (dark mode, light mode)
- [ ] Add productivity timers
- [ ] Add todo list integration
- [ ] Support for multiple pages of links
- [ ] Import bookmarks as links

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use and modify

## 🙏 Credits

- Weather data: [Open-Meteo API](https://open-meteo.com/)
- Geolocation: [ipapi.co](https://ipapi.co/)
- Icons: Emoji/Google Favicons

## 📧 Support

For issues or questions:
- Open an issue on GitHub
- Email: support@example.com

---

**Enjoy your beautiful new tab page!** ✨
