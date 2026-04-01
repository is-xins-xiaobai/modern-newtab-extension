#!/usr/bin/env python3
"""
Simple icon generator for Chrome extension
Creates gradient icons with a grid pattern
"""

def create_icon_svg(size):
    """Create SVG content for icon"""
    return f'''<svg width="{size}" height="{size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="{size}" height="{size}" fill="url(#grad)" rx="{size//8}"/>
  
  <g fill="white" opacity="0.9">
    <rect x="{size//4}" y="{size//4}" width="{size//5}" height="{size//5}" rx="{size//40}"/>
    <rect x="{size*3//5}" y="{size//4}" width="{size//5}" height="{size//5}" rx="{size//40}"/>
    <rect x="{size//4}" y="{size*3//5}" width="{size//5}" height="{size//5}" rx="{size//40}"/>
    <rect x="{size*3//5}" y="{size*3//5}" width="{size//5}" height="{size//5}" rx="{size//40}"/>
  </g>
  
  <circle cx="{size//2}" cy="{size//2}" r="{size//16}" fill="white"/>
</svg>'''

# Create SVG files
for size in [16, 48, 128]:
    svg_content = create_icon_svg(size)
    filename = f'icon{size}.svg'
    with open(filename, 'w') as f:
        f.write(svg_content)
    print(f'Created {filename}')

print('\nSVG icons created!')
print('Note: Chrome extensions prefer PNG, but SVG works for development.')
print('For production, convert to PNG using online tools or ImageMagick.')
