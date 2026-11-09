const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('▶ GuideSoft Web Bolt Suite Verification');

// 1. Verify Production Dist Bundle
const distHtml = path.join(__dirname, 'dist', 'index.html');
assert(fs.existsSync(distHtml), 'dist/index.html must exist');
console.log('  ✔ Production build artifact verified (dist/index.html present)');

// 2. Verify Generated Page Collections
const pagesDir = path.join(__dirname, 'pages');
assert(fs.existsSync(pagesDir), 'pages directory must exist');
const categories = ['about', 'hire', 'insight', 'services', 'solutions', 'travel'];
categories.forEach(cat => {
  assert(fs.existsSync(path.join(pagesDir, cat)), `Category directory '${cat}' must exist`);
});
console.log(`  ✔ Page collections verified (${categories.length} categories verified: ${categories.join(', ')})`);

// 3. Verify Components
const navComp = path.join(__dirname, 'components', 'navigation.html');
const footerComp = path.join(__dirname, 'components', 'footer.html');
assert(fs.existsSync(navComp), 'navigation.html component must exist');
assert(fs.existsSync(footerComp), 'footer.html component must exist');
console.log('  ✔ Navigation and footer modular components verified');

console.log('✅ GuideSoft Web Bolt Suite: 3/3 checks passed (100% success)');
