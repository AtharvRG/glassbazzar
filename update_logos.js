const fs = require('fs');

let content = fs.readFileSync('src/components/BrandLogo.tsx', 'utf-8');

const colors = {
  lenovo: '#E2231A',
  lg: '#A50034',
  hp: '#0096D6',
  dell: '#007DB8',
  asus: '#000000',
  acer: '#83B81A',
  razer: '#00FF00',
  msi: '#FF0000',
  samsung: '#1428A0',
  apple: 'currentColor',
  microsoft: 'currentColor' // Assuming default or it has its own colors
};

// We will iterate over the brands, find their if block, and add className and fill to the <svg> tag.
for (const [brand, color] of Object.entries(colors)) {
  const regex = new RegExp(`if \\(norm\\.includes\\('${brand}'\\)\\)\\s*return \\(\\s*<svg([^>]*)>`, 'i');
  
  content = content.replace(regex, (match, svgAttrs) => {
    // Remove existing className and fill to avoid duplicates
    let newAttrs = svgAttrs.replace(/className="[^"]*"/g, '').replace(/className=\{[^\}]*\}/g, '').replace(/fill="[^"]*"/g, '');
    
    // Add our attributes. For Microsoft we don't force fill because rects handle it, except maybe we should. Let's just add it if not microsoft.
    let added = ` className={className}`;
    if (brand !== 'microsoft') {
        added += ` fill="${color}"`;
    }
    
    return `if (norm.includes('${brand}')) return (\n    <svg${added}${newAttrs}>`;
  });
}

fs.writeFileSync('src/components/BrandLogo.tsx', content);
console.log('Successfully updated BrandLogos with colors and classNames');
