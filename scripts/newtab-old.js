// Configuration
const SEARCH_ENGINES = {
  google: 'https://www.google.com/search?q=',
  bing: 'https://www.bing.com/search?q=',
  duckduckgo: 'https://duckduckgo.com/?q=',
  chatgpt: 'https://chat.openai.com/?q='
};

const DEFAULT_LINKS = [
  { title: 'Gmail', url: 'https://mail.google.com', icon: 'https://www.google.com/s2/favicons?domain=mail.google.com&sz=128' },
  { title: 'YouTube', url: 'https://youtube.com', icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=128' },
  { title: 'GitHub', url: 'https://github.com', icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=128' },
  { title: 'Twitter', url: 'https://twitter.com', icon: 'https://www.google.com/s2/favicons?domain=twitter.com&sz=128' },
  { title: 'Reddit', url: 'https://reddit.com', icon: 'https://www.google.com/s2/favicons?domain=reddit.com&sz=128' },
  { title: 'LinkedIn', url: 'https://linkedin.com', icon: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=128' }
];

// Beautiful background wallpapers gallery
const WALLPAPER_GALLERY = [
  {
    name: 'Mountain Peak',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300'
  },
  {
    name: 'Ocean Sunset',
    url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300'
  },
  {
    name: 'Forest Path',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300'
  },
  {
    name: 'Aurora Borealis',
    url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300'
  },
  {
    name: 'Desert Dunes',
    url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=300'
  },
  {
    name: 'City Night',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=300'
  },
  {
    name: 'Lavender Field',
    url: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=300'
  },
  {
    name: 'Starry Night',
    url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300'
  },
  {
    name: 'Cherry Blossom',
    url: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=300'
  },
  {
    name: 'Tropical Beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300'
  },
  {
    name: 'Snow Mountain',
    url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=300'
  },
  {
    name: 'Autumn Forest',
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300'
  },
  {
    name: 'Abstract Colors',
    url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300'
  },
  {
    name: 'Minimal Gray',
    url: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300'
  },
  {
    name: 'Gradient Purple',
    url: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920',
    thumbnail: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=300'
  }
];

// State
let settings = {
  backgroundUrl: '',
  backgroundType: 'cover',
  clockFormat: '24',
  searchEngine: 'google',
  quickLinks: [],
  notes: ''
};

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  initClock();
  initSearch();
  initQuickLinks();
  initWeather();
  initNotes();
  initToolbar();
  initSettings();
  applyBackground();
});

// Load settings from storage
async function loadSettings() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['settings'], (result) => {
      if (result.settings) {
        settings = { ...settings, ...result.settings };
      } else {
        // First time setup
        settings.quickLinks = DEFAULT_LINKS;
        saveSettings();
      }
      resolve();
    });
  });
}

// Save settings to storage
function saveSettings() {
  chrome.storage.sync.set({ settings });
}

// Clock
function initClock() {
  const clockEl = document.getElementById('clock');
  const dateEl = document.getElementById('date');
  
  function updateClock() {
    const now = new Date();
    
    // Time
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    if (settings.clockFormat === '12') {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      clockEl.textContent = `${hours}:${minutes} ${ampm}`;
    } else {
      clockEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes}`;
    }
    
    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
  }
  
  updateClock();
  setInterval(updateClock, 1000);
}

// Search
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchEngine = document.getElementById('search-engine');
  
  // Load saved search engine
  searchEngine.value = settings.searchEngine || 'google';
  
  // Save search engine preference
  searchEngine.addEventListener('change', () => {
    settings.searchEngine = searchEngine.value;
    saveSettings();
  });
  
  function performSearch() {
    const query = searchInput.value.trim();
    if (!query) return;
    
    const engine = searchEngine.value;
    const searchUrl = SEARCH_ENGINES[engine] + encodeURIComponent(query);
    window.location.href = searchUrl;
  }
  
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
  
  // Focus search on '/' key
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

// Quick Links
function initQuickLinks() {
  const container = document.getElementById('quick-links');
  const addBtn = document.getElementById('add-link-btn');
  
  function renderLinks() {
    container.innerHTML = '';
    settings.quickLinks.forEach((link, index) => {
      const linkEl = createLinkElement(link, index);
      container.appendChild(linkEl);
    });
  }
  
  function createLinkElement(link, index) {
    const div = document.createElement('a');
    div.className = 'link-item';
    div.href = link.url;
    div.target = '_self';
    
    const icon = document.createElement('div');
    icon.className = 'link-icon';
    
    if (link.icon.startsWith('http')) {
      const img = document.createElement('img');
      img.src = link.icon;
      img.alt = link.title;
      img.onerror = () => {
        img.src = `https://www.google.com/s2/favicons?domain=${link.url}&sz=64`;
      };
      icon.appendChild(img);
    } else {
      icon.textContent = link.icon;
    }
    
    const title = document.createElement('div');
    title.className = 'link-title';
    title.textContent = link.title;
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'link-remove';
    removeBtn.textContent = '×';
    removeBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      removeLink(index);
    };
    
    div.appendChild(removeBtn);
    div.appendChild(icon);
    div.appendChild(title);
    
    return div;
  }
  
  function removeLink(index) {
    if (confirm('Remove this link?')) {
      settings.quickLinks.splice(index, 1);
      saveSettings();
      renderLinks();
    }
  }
  
  addBtn.addEventListener('click', () => {
    showAddLinkDialog();
  });
  
  // Global ESC key handler for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(modal => modal.remove());
    }
  });
  
  function showAddLinkDialog() {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Add New Site</h3>
        <div class="form-group">
          <label>Site Name:</label>
          <input type="text" id="link-title" placeholder="e.g., YouTube" autocomplete="off">
        </div>
        <div class="form-group">
          <label>URL:</label>
          <input type="url" id="link-url" placeholder="https://example.com" autocomplete="off">
        </div>
        <div class="form-group">
          <label>Icon Type:</label>
          <select id="icon-type">
            <option value="auto">Auto (Favicon)</option>
            <option value="emoji">Emoji</option>
            <option value="url">Custom URL</option>
          </select>
        </div>
        <div class="form-group" id="icon-input-group" style="display: none;">
          <label id="icon-label">Icon:</label>
          <input type="text" id="link-icon" placeholder="🌐 or https://..." autocomplete="off">
        </div>
        <div class="icon-preview" id="icon-preview"></div>
        <div class="modal-buttons">
          <button class="btn-primary" id="save-link-btn">Add Site</button>
          <button class="btn-secondary" id="cancel-link-btn">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    const titleInput = document.getElementById('link-title');
    const urlInput = document.getElementById('link-url');
    const iconType = document.getElementById('icon-type');
    const iconInput = document.getElementById('link-icon');
    const iconInputGroup = document.getElementById('icon-input-group');
    const iconLabel = document.getElementById('icon-label');
    const iconPreview = document.getElementById('icon-preview');
    const saveBtn = document.getElementById('save-link-btn');
    const cancelBtn = document.getElementById('cancel-link-btn');
    
    titleInput.focus();
    
    // Icon type change handler
    iconType.addEventListener('change', () => {
      if (iconType.value === 'auto') {
        iconInputGroup.style.display = 'none';
        updateIconPreview();
      } else {
        iconInputGroup.style.display = 'block';
        iconLabel.textContent = iconType.value === 'emoji' ? 'Emoji:' : 'Icon URL:';
        iconInput.placeholder = iconType.value === 'emoji' ? '🌐' : 'https://...';
        updateIconPreview();
      }
    });
    
    // Preview update
    function updateIconPreview() {
      const url = urlInput.value.trim();
      const type = iconType.value;
      const icon = iconInput.value.trim();
      
      if (type === 'auto' && url) {
        const domain = url.replace(/^https?:\/\//, '').split('/')[0];
        iconPreview.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=128" alt="Preview">`;
      } else if (type === 'emoji' && icon) {
        iconPreview.innerHTML = `<div class="emoji-preview">${icon}</div>`;
      } else if (type === 'url' && icon) {
        iconPreview.innerHTML = `<img src="${icon}" alt="Preview" onerror="this.src='https://via.placeholder.com/64?text=Error'">`;
      } else {
        iconPreview.innerHTML = '';
      }
    }
    
    urlInput.addEventListener('input', updateIconPreview);
    iconInput.addEventListener('input', updateIconPreview);
    
    // Save
    saveBtn.addEventListener('click', () => {
      const title = titleInput.value.trim();
      const url = urlInput.value.trim();
      
      if (!title || !url) {
        alert('Please enter both site name and URL');
        return;
      }
      
      let iconValue;
      const type = iconType.value;
      const fullUrl = url.startsWith('http') ? url : 'https://' + url;
      const domain = fullUrl.replace(/^https?:\/\//, '').split('/')[0];
      
      if (type === 'auto') {
        iconValue = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
      } else if (type === 'emoji') {
        iconValue = iconInput.value.trim() || '🌐';
      } else {
        iconValue = iconInput.value.trim() || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
      }
      
      const newLink = {
        title,
        url: fullUrl,
        icon: iconValue
      };
      
      settings.quickLinks.push(newLink);
      saveSettings();
      renderLinks();
      modal.remove();
    });
    
    // Cancel
    cancelBtn.addEventListener('click', () => {
      modal.remove();
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
    
    // Enter to save
    [titleInput, urlInput, iconInput].forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveBtn.click();
      });
    });
  }
  
  renderLinks();
}

// Weather
async function initWeather() {
  const widget = document.getElementById('weather-widget');
  
  try {
    // Get user's location using IP geolocation (free, no API key needed)
    const locationRes = await fetch('https://ipapi.co/json/');
    const locationData = await locationRes.json();
    
    // Use Open-Meteo API (free, no key required)
    const { latitude, longitude, city } = locationData;
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius`
    );
    const weatherData = await weatherRes.json();
    
    const temp = Math.round(weatherData.current_weather.temperature);
    const weatherCode = weatherData.current_weather.weathercode;
    const icon = getWeatherIcon(weatherCode);
    
    widget.querySelector('.weather-temp').textContent = `${temp}°C`;
    widget.querySelector('.weather-icon').textContent = icon;
    widget.querySelector('.weather-location').textContent = city;
  } catch (error) {
    console.error('Weather fetch failed:', error);
    widget.querySelector('.weather-location').textContent = 'Weather unavailable';
  }
}

function getWeatherIcon(code) {
  // WMO Weather interpretation codes
  const icons = {
    0: '☀️',   // Clear sky
    1: '🌤️',  // Mainly clear
    2: '⛅',   // Partly cloudy
    3: '☁️',   // Overcast
    45: '🌫️', // Fog
    48: '🌫️', // Depositing rime fog
    51: '🌦️', // Light drizzle
    61: '🌧️', // Slight rain
    71: '❄️',  // Slight snow
    80: '🌧️', // Slight rain showers
    95: '⛈️',  // Thunderstorm
  };
  return icons[code] || '🌤️';
}

// Notes
function initNotes() {
  const panel = document.getElementById('notes-panel');
  const textarea = document.getElementById('notes-textarea');
  const closeBtn = document.getElementById('close-notes');
  
  textarea.value = settings.notes || '';
  
  // Auto-save notes
  let saveTimeout;
  textarea.addEventListener('input', () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      settings.notes = textarea.value;
      saveSettings();
    }, 500);
  });
  
  closeBtn.addEventListener('click', () => {
    panel.classList.add('hidden');
  });
}

// Toolbar
function initToolbar() {
  const notesBtn = document.getElementById('notes-btn');
  const bookmarksBtn = document.getElementById('bookmarks-btn');
  const weatherBtn = document.getElementById('weather-btn');
  const settingsBtn = document.getElementById('settings-btn');
  
  const notesPanel = document.getElementById('notes-panel');
  const settingsPanel = document.getElementById('settings-panel');
  
  notesBtn.addEventListener('click', () => {
    notesPanel.classList.toggle('hidden');
    settingsPanel.classList.add('hidden');
  });
  
  settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
    notesPanel.classList.add('hidden');
  });
  
  bookmarksBtn.addEventListener('click', () => {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      alert('Bookmarks feature coming soon!');
    });
  });
  
  weatherBtn.addEventListener('click', () => {
    initWeather();
  });
}

// Settings
function initSettings() {
  const closeBtn = document.getElementById('close-settings');
  const bgUrlInput = document.getElementById('bg-url-input');
  const saveBgBtn = document.getElementById('save-bg-btn');
  const bgTypeSelect = document.getElementById('bg-type');
  const clockFormatSelect = document.getElementById('clock-format');
  const resetBtn = document.getElementById('reset-btn');
  const galleryBtn = document.getElementById('show-gallery-btn');
  
  bgUrlInput.value = settings.backgroundUrl || '';
  bgTypeSelect.value = settings.backgroundType || 'cover';
  clockFormatSelect.value = settings.clockFormat || '24';
  
  closeBtn.addEventListener('click', () => {
    document.getElementById('settings-panel').classList.add('hidden');
  });
  
  saveBgBtn.addEventListener('click', () => {
    settings.backgroundUrl = bgUrlInput.value;
    saveSettings();
    applyBackground();
  });
  
  bgTypeSelect.addEventListener('change', () => {
    settings.backgroundType = bgTypeSelect.value;
    saveSettings();
    applyBackground();
  });
  
  clockFormatSelect.addEventListener('change', () => {
    settings.clockFormat = clockFormatSelect.value;
    saveSettings();
    initClock();
  });
  
  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all settings to default?')) {
      chrome.storage.sync.clear(() => {
        location.reload();
      });
    }
  });
  
  galleryBtn.addEventListener('click', () => {
    showWallpaperGallery();
  });
}

// Wallpaper Gallery
function showWallpaperGallery() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  let galleryHTML = `
    <div class="modal-content gallery-modal">
      <div class="modal-header">
        <h3>Background Gallery</h3>
        <button class="close-btn" id="close-gallery">×</button>
      </div>
      <div class="wallpaper-grid">
  `;
  
  WALLPAPER_GALLERY.forEach((wallpaper, index) => {
    galleryHTML += `
      <div class="wallpaper-item" data-index="${index}">
        <img src="${wallpaper.thumbnail}" alt="${wallpaper.name}" loading="lazy">
        <div class="wallpaper-name">${wallpaper.name}</div>
      </div>
    `;
  });
  
  galleryHTML += `
      </div>
    </div>
  `;
  
  modal.innerHTML = galleryHTML;
  document.body.appendChild(modal);
  
  // Event listeners
  document.getElementById('close-gallery').addEventListener('click', () => {
    modal.remove();
  });
  
  document.querySelectorAll('.wallpaper-item').forEach(item => {
    item.addEventListener('click', () => {
      const index = item.dataset.index;
      const wallpaper = WALLPAPER_GALLERY[index];
      settings.backgroundUrl = wallpaper.url;
      settings.backgroundType = 'cover';
      saveSettings();
      applyBackground();
      
      // Update settings panel if open
      const bgUrlInput = document.getElementById('bg-url-input');
      if (bgUrlInput) bgUrlInput.value = wallpaper.url;
      
      modal.remove();
    });
  });
  
  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Apply background
function applyBackground() {
  const container = document.getElementById('background-container');
  
  if (settings.backgroundUrl) {
    container.style.backgroundImage = `url(${settings.backgroundUrl})`;
    
    switch (settings.backgroundType) {
      case 'cover':
        container.style.backgroundSize = 'cover';
        container.style.backgroundRepeat = 'no-repeat';
        break;
      case 'contain':
        container.style.backgroundSize = 'contain';
        container.style.backgroundRepeat = 'no-repeat';
        break;
      case 'tile':
        container.style.backgroundSize = 'auto';
        container.style.backgroundRepeat = 'repeat';
        break;
    }
  } else {
    container.style.backgroundImage = '';
  }
}
