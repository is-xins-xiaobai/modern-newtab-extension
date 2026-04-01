// Simple icon generator using Canvas
const fs = require('fs');
const { createCanvas } = require('canvas');

function generateIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // White grid pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  const padding = size * 0.23;
  const cellSize = (size - 2 * padding - size * 0.05) / 2;
  const gap = size * 0.05;
  const radius = size * 0.03;
  
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const x = padding + i * (cellSize + gap);
      const y = padding + j * (cellSize + gap);
      
      ctx.beginPath();
      ctx.roundRect(x, y, cellSize, cellSize, radius);
      ctx.fill();
    }
  }
  
  // Center circle
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.06, 0, Math.PI * 2);
  ctx.fill();
  
  return canvas.toBuffer('image/png');
}

// Generate icons
try {
  fs.writeFileSync('icon128.png', generateIcon(128));
  fs.writeFileSync('icon48.png', generateIcon(48));
  fs.writeFileSync('icon16.png', generateIcon(16));
  console.log('Icons generated successfully!');
} catch (err) {
  console.error('Error generating icons:', err.message);
  console.log('\nPlease install canvas: npm install canvas');
  console.log('Or open generate-icons.html in a browser and save the images manually.');
}
