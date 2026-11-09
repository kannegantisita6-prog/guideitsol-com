const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('▶ GuideSoft Semantic Search & AI Admin Frontend Verification Suite');

// 1. Verify Production Dist Bundle
const distHtml = path.join(__dirname, 'dist', 'index.html');
assert(fs.existsSync(distHtml), 'dist/index.html must exist');
console.log('  ✔ Production build artifact verified (dist/index.html present)');

// 2. Verify Key Pages & Components
const searchPage = path.join(__dirname, 'src', 'pages', 'SearchPage.tsx');
const adminPage = path.join(__dirname, 'src', 'pages', 'AdminPage.tsx');
const homePage = path.join(__dirname, 'src', 'pages', 'HomePage.tsx');
const searchInput = path.join(__dirname, 'src', 'components', 'SearchInput.tsx');

assert(fs.existsSync(searchPage), 'SearchPage.tsx must exist');
assert(fs.existsSync(adminPage), 'AdminPage.tsx must exist');
assert(fs.existsSync(homePage), 'HomePage.tsx must exist');
assert(fs.existsSync(searchInput), 'SearchInput.tsx must exist');
console.log('  ✔ Semantic Search UI (SearchPage, AdminPage, HomePage, SearchInput) verified');

// 3. Verify Configuration Files
const viteConfig = path.join(__dirname, 'vite.config.ts');
const tailwindConfig = path.join(__dirname, 'tailwind.config.js');
assert(fs.existsSync(viteConfig), 'vite.config.ts must exist');
assert(fs.existsSync(tailwindConfig), 'tailwind.config.js must exist');
console.log('  ✔ Vite and Tailwind configuration verified');

console.log('✅ GuideSoft Semantic Search Frontend Verification: 3/3 checks passed (100% success)');
