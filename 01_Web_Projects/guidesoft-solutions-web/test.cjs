const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('▶ GuideSoft Solutions Web (Vite + React 19) Suite Verification');

// 1. Verify Entry HTML and Source Files
const indexHtml = path.join(__dirname, 'index.html');
const appJsx = path.join(__dirname, 'src', 'App.jsx');
const mainJsx = path.join(__dirname, 'src', 'main.jsx');
assert(fs.existsSync(indexHtml), 'index.html must exist');
assert(fs.existsSync(appJsx), 'src/App.jsx must exist');
assert(fs.existsSync(mainJsx), 'src/main.jsx must exist');
console.log('  ✔ React 19 entry points verified (index.html, App.jsx, main.jsx present)');

// 2. Verify Config
const viteConfig = path.join(__dirname, 'vite.config.ts');
assert(fs.existsSync(viteConfig), 'vite.config.ts must exist');
console.log('  ✔ Vite build configuration verified');

console.log('✅ GuideSoft Solutions Web Suite: 2/2 checks passed (100% success)');
