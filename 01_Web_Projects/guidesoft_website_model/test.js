const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('▶ GuideSoft Website Model & UI Elements Suite Verification');

// 1. Verify Entry HTML and Key Pages
const indexHtml = path.join(__dirname, 'index.html');
const contactHtml = path.join(__dirname, 'contact-us.html');
const itServicesHtml = path.join(__dirname, 'it-services.html');
assert(fs.existsSync(indexHtml), 'index.html must exist');
assert(fs.existsSync(contactHtml), 'contact-us.html must exist');
assert(fs.existsSync(itServicesHtml), 'it-services.html must exist');
console.log('  ✔ Core pages verified (index.html, contact-us.html, it-services.html present)');

// 2. Verify UI Components Library (element-* files)
const files = fs.readdirSync(__dirname);
const elementFiles = files.filter(f => f.startsWith('element-') && f.endsWith('.html'));
assert(elementFiles.length >= 10, 'Must have at least 10 element component templates');
console.log(`  ✔ UI Elements component library verified (${elementFiles.length} element templates ready)`);

// 3. Verify Assets and Static Bundles
const assetsDir = path.join(__dirname, 'assets');
assert(fs.existsSync(assetsDir), 'assets directory must exist');
console.log('  ✔ Static assets directory verified');

console.log('✅ GuideSoft Website Model Suite: 3/3 checks passed (100% success)');
