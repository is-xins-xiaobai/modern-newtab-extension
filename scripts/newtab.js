// 配置
const SEARCH_ENGINES = {
  google: 'https://www.google.com/search?q=',
  bing: 'https://www.bing.com/search?q=',
  duckduckgo: 'https://duckduckgo.com/?q=',
  chatgpt: 'https://chat.openai.com/?q='
};

const DEFAULT_LINKS = [
  { title: 'Gmail', url: 'https://mail.google.com', icon: 'https://www.google.com/s2/favicons?domain=mail.google.com&sz=256' },
  { title: 'YouTube', url: 'https://youtube.com', icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=256' },
  { title: 'GitHub', url: 'https://github.com', icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=256' },
  { title: 'Twitter', url: 'https://twitter.com', icon: 'https://www.google.com/s2/favicons?domain=twitter.com&sz=256' },
  { title: 'Reddit', url: 'https://reddit.com', icon: 'https://www.google.com/s2/favicons?domain=reddit.com&sz=256' },
  { title: 'LinkedIn', url: 'https://linkedin.com', icon: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=256' }
];

const WALLPAPER_GALLERY = [
  { name: 'Mountain Peak', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920', thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300' },
  { name: 'Ocean Sunset', url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920', thumbnail: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300' },
  { name: 'Forest Path', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920', thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300' },
  { name: 'Aurora Borealis', url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920', thumbnail: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300' },
  { name: 'Desert Dunes', url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920', thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=300' },
  { name: 'City Night', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920', thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=300' },
  { name: 'Lavender Field', url: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=1920', thumbnail: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=300' },
  { name: 'Starry Night', url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920', thumbnail: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300' },
  { name: 'Cherry Blossom', url: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920', thumbnail: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=300' },
  { name: 'Tropical Beach', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920', thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300' },
  { name: 'Snow Mountain', url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920', thumbnail: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=300' },
  { name: 'Autumn Forest', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920', thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300' },
  { name: 'Abstract Colors', url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920', thumbnail: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300' },
  { name: 'Minimal Gray', url: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920', thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300' },
  { name: 'Gradient Purple', url: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920', thumbnail: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=300' }
];

let settings = {
  backgroundUrl: '',
  backgroundType: 'cover',
  clockFormat: '24',
  searchEngine: 'google',
  quickLinks: [],
  customWallpapers: [] // 用户自定义的壁纸
};

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  initClock();
  initSearch();
  initQuickLinks();
  initSettings();
  initWallpaperGallery();
  applyBackground();
  
  // ESC键关闭模态框
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal, .settings-panel').forEach(el => {
        el.classList.add('hidden');
        if (el.classList.contains('modal')) el.remove();
      });
    }
  });
});

// 加载设置
async function loadSettings() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['settings'], (result) => {
      if (result.settings) {
        settings = { ...settings, ...result.settings };
      } else {
        settings.quickLinks = DEFAULT_LINKS;
        saveSettings();
      }
      resolve();
    });
  });
}

// 保存设置
function saveSettings() {
  chrome.storage.sync.set({ settings });
}

// 时钟
function initClock() {
  const clockEl = document.getElementById('clock');
  const dateEl = document.getElementById('date');
  
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    if (settings.clockFormat === '12') {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      clockEl.textContent = `${hours}:${minutes} ${ampm}`;
    } else {
      clockEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes}`;
    }
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
  }
  
  updateClock();
  setInterval(updateClock, 1000);
}

// 搜索
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchEngine = document.getElementById('search-engine');
  
  searchEngine.value = settings.searchEngine || 'google';
  
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
  
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

// 快速链接
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
        img.src = `https://www.google.com/s2/favicons?domain=${link.url}&sz=256`;
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
      if (confirm('Remove this link?')) {
        settings.quickLinks.splice(index, 1);
        saveSettings();
        renderLinks();
      }
    };
    
    const editBtn = document.createElement('button');
    editBtn.className = 'link-edit';
    editBtn.textContent = '✎';
    editBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      showEditLinkDialog(link, index);
    };
    
    div.appendChild(removeBtn);
    div.appendChild(editBtn);
    div.appendChild(icon);
    div.appendChild(title);
    
    return div;
  }
  
  addBtn.addEventListener('click', () => {
    showAddLinkDialog();
  });
  
  function showEditLinkDialog(link, index) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    // 判断当前图标类型
    let currentIconType = 'auto';
    let currentIconValue = '';
    
    if (link.icon.startsWith('http') && !link.icon.includes('favicons')) {
      currentIconType = 'url';
      currentIconValue = link.icon;
    } else if (!link.icon.startsWith('http')) {
      currentIconType = 'emoji';
      currentIconValue = link.icon;
    }
    
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Edit Site</h3>
        <div class="form-group">
          <label>Site Name:</label>
          <input type="text" id="link-title" value="${link.title}" autocomplete="off">
        </div>
        <div class="form-group">
          <label>URL:</label>
          <input type="url" id="link-url" value="${link.url}" autocomplete="off">
        </div>
        <div class="form-group">
          <label>Icon Type:</label>
          <select id="icon-type">
            <option value="auto" ${currentIconType === 'auto' ? 'selected' : ''}>Auto (Favicon)</option>
            <option value="emoji" ${currentIconType === 'emoji' ? 'selected' : ''}>Emoji</option>
            <option value="url" ${currentIconType === 'url' ? 'selected' : ''}>Custom URL</option>
          </select>
        </div>
        <div class="form-group" id="icon-input-group" style="display: ${currentIconType !== 'auto' ? 'block' : 'none'};">
          <label id="icon-label">${currentIconType === 'emoji' ? 'Emoji:' : 'Icon URL:'}</label>
          <input type="text" id="link-icon" value="${currentIconValue}" placeholder="🌐 or https://..." autocomplete="off">
        </div>
        <div class="icon-preview" id="icon-preview"></div>
        <div class="modal-buttons">
          <button class="btn-primary" id="save-link-btn">Save Changes</button>
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
    titleInput.select();
    
    // 初始预览
    updateIconPreview();
    
    iconType.addEventListener('change', () => {
      if (iconType.value === 'auto') {
        iconInputGroup.style.display = 'none';
        iconInput.value = '';
      } else {
        iconInputGroup.style.display = 'block';
        iconLabel.textContent = iconType.value === 'emoji' ? 'Emoji:' : 'Icon URL:';
        iconInput.placeholder = iconType.value === 'emoji' ? '🌐' : 'https://...';
      }
      updateIconPreview();
    });
    
    function updateIconPreview() {
      const url = urlInput.value.trim();
      const type = iconType.value;
      const icon = iconInput.value.trim();
      
      if (type === 'auto' && url) {
        const domain = url.replace(/^https?:\/\//, '').split('/')[0];
        iconPreview.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=256" alt="Preview">`;
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
        iconValue = `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
      } else if (type === 'emoji') {
        iconValue = iconInput.value.trim() || '🌐';
      } else {
        iconValue = iconInput.value.trim() || `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
      }
      
      // 更新链接
      settings.quickLinks[index] = { title, url: fullUrl, icon: iconValue };
      saveSettings();
      renderLinks();
      modal.remove();
    });
    
    cancelBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
    
    [titleInput, urlInput, iconInput].forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveBtn.click();
      });
    });
  }
  
  function showAddLinkDialog() {
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
    
    function updateIconPreview() {
      const url = urlInput.value.trim();
      const type = iconType.value;
      const icon = iconInput.value.trim();
      
      if (type === 'auto' && url) {
        const domain = url.replace(/^https?:\/\//, '').split('/')[0];
        iconPreview.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=256" alt="Preview">`;
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
        iconValue = `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
      } else if (type === 'emoji') {
        iconValue = iconInput.value.trim() || '🌐';
      } else {
        iconValue = iconInput.value.trim() || `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
      }
      
      const newLink = { title, url: fullUrl, icon: iconValue };
      settings.quickLinks.push(newLink);
      saveSettings();
      renderLinks();
      modal.remove();
    });
    
    cancelBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
    
    [titleInput, urlInput, iconInput].forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveBtn.click();
      });
    });
  }
  
  renderLinks();
}

// 设置
function initSettings() {
  const settingsBtn = document.getElementById('settings-btn');
  const settingsPanel = document.getElementById('settings-panel');
  const closeSettings = document.getElementById('close-settings');
  const bgUrlInput = document.getElementById('bg-url-input');
  const saveBgBtn = document.getElementById('save-bg-btn');
  const bgTypeSelect = document.getElementById('bg-type');
  const clockFormatSelect = document.getElementById('clock-format');
  const resetBtn = document.getElementById('reset-btn');
  
  bgUrlInput.value = settings.backgroundUrl || '';
  bgTypeSelect.value = settings.backgroundType || 'cover';
  clockFormatSelect.value = settings.clockFormat || '24';
  
  settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
  });
  
  closeSettings.addEventListener('click', () => {
    settingsPanel.classList.add('hidden');
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
}

// 壁纸画廊
function initWallpaperGallery() {
  const galleryBtn = document.getElementById('show-gallery-btn');
  
  galleryBtn.addEventListener('click', () => {
    showWallpaperGallery();
  });
}

function showWallpaperGallery() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  let galleryHTML = `
    <div class="modal-content gallery-modal">
      <div class="modal-header">
        <h3>Background Gallery</h3>
        <button class="close-btn" id="close-gallery">×</button>
      </div>
      
      <!-- Add Custom Wallpaper Section -->
      <div class="custom-wallpaper-section">
        <input type="text" id="custom-wallpaper-url" placeholder="Enter image URL or paste image" class="wallpaper-url-input">
        <button id="add-custom-wallpaper" class="btn-primary">+ Add Custom</button>
      </div>
      
      <!-- My Wallpapers Section (if any) -->
      ${settings.customWallpapers && settings.customWallpapers.length > 0 ? `
        <div class="wallpaper-section">
          <h4>My Wallpapers</h4>
          <div class="wallpaper-grid" id="custom-wallpapers-grid">
            ${settings.customWallpapers.map((wallpaper, index) => `
              <div class="wallpaper-item custom" data-custom-index="${index}">
                <img src="${wallpaper.url}" alt="${wallpaper.name || 'Custom'}" loading="lazy">
                <div class="wallpaper-name">${wallpaper.name || 'Custom ' + (index + 1)}</div>
                <button class="wallpaper-delete" data-custom-index="${index}">×</button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <!-- Built-in Wallpapers -->
      <div class="wallpaper-section">
        <h4>Built-in Gallery</h4>
        <div class="wallpaper-grid" id="builtin-wallpapers-grid">
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
    </div>`;
  modal.innerHTML = galleryHTML;
  document.body.appendChild(modal);
  
  document.getElementById('close-gallery').addEventListener('click', () => {
    modal.remove();
  });
  
  // Add custom wallpaper
  const customUrlInput = document.getElementById('custom-wallpaper-url');
  const addCustomBtn = document.getElementById('add-custom-wallpaper');
  
  addCustomBtn.addEventListener('click', () => {
    const url = customUrlInput.value.trim();
    if (!url) {
      alert('Please enter an image URL');
      return;
    }
    
    // Validate URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      alert('Please enter a valid URL starting with http:// or https://');
      return;
    }
    
    // Test if image loads
    const testImg = new Image();
    testImg.onload = () => {
      const name = prompt('Name this wallpaper (optional):') || `Custom ${(settings.customWallpapers?.length || 0) + 1}`;
      
      if (!settings.customWallpapers) settings.customWallpapers = [];
      settings.customWallpapers.push({
        name,
        url,
        thumbnail: url
      });
      
      settings.backgroundUrl = url;
      settings.backgroundType = 'cover';
      saveSettings();
      applyBackground();
      
      const bgUrlInput = document.getElementById('bg-url-input');
      if (bgUrlInput) bgUrlInput.value = url;
      
      modal.remove();
    };
    
    testImg.onerror = () => {
      alert('Failed to load image. Please check the URL.');
    };
    
    testImg.src = url;
  });
  
  // Handle Enter key
  customUrlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addCustomBtn.click();
  });
  
  // Delete custom wallpaper
  document.querySelectorAll('.wallpaper-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.customIndex);
      if (confirm('Delete this wallpaper?')) {
        settings.customWallpapers.splice(index, 1);
        saveSettings();
        modal.remove();
        showWallpaperGallery(); // Refresh gallery
      }
    });
  });
  
  // Select custom wallpaper
  document.querySelectorAll('.wallpaper-item.custom').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.customIndex);
      const wallpaper = settings.customWallpapers[index];
      settings.backgroundUrl = wallpaper.url;
      settings.backgroundType = 'cover';
      saveSettings();
      applyBackground();
      
      const bgUrlInput = document.getElementById('bg-url-input');
      if (bgUrlInput) bgUrlInput.value = wallpaper.url;
      
      modal.remove();
    });
  });
  
  // Select built-in wallpaper
  document.querySelectorAll('.wallpaper-item:not(.custom)').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index);
      const wallpaper = WALLPAPER_GALLERY[index];
      settings.backgroundUrl = wallpaper.url;
      settings.backgroundType = 'cover';
      saveSettings();
      applyBackground();
      
      const bgUrlInput = document.getElementById('bg-url-input');
      if (bgUrlInput) bgUrlInput.value = wallpaper.url;
      
      modal.remove();
    });
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// 应用背景
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
