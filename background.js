// Background service worker for Modern New Tab Extension

// Installation handler
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Extension installed');
    // Open welcome page on first install
    chrome.tabs.create({
      url: chrome.runtime.getURL('newtab.html')
    });
  } else if (details.reason === 'update') {
    console.log('Extension updated');
  }
});

// Handle messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getWeather') {
    // Fetch weather data if needed
    fetch(request.url)
      .then(response => response.json())
      .then(data => sendResponse({ success: true, data }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }
});

// Keyboard shortcut handler (optional - only if commands are defined in manifest)
if (chrome.commands && chrome.commands.onCommand) {
  chrome.commands.onCommand.addListener((command) => {
    if (command === 'open-newtab') {
      chrome.tabs.create({
        url: chrome.runtime.getURL('newtab.html')
      });
    }
  });
}
