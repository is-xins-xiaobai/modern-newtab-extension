document.getElementById('open-newtab').addEventListener('click', () => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('newtab.html')
  });
});

document.getElementById('open-settings').addEventListener('click', () => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('newtab.html')
  });
  // Note: Settings will be accessible from the new tab page
});
