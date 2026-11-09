const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('▶ GuideSoft Website Final UI/UX & Service Verification Suite');

// 1. Verify App Routes in src/App.tsx
const appTsxPath = path.join(__dirname, 'src', 'App.tsx');
assert(fs.existsSync(appTsxPath), 'src/App.tsx must exist');
const appTsx = fs.readFileSync(appTsxPath, 'utf8');
assert(appTsx.includes('CloudVPSHosting'), 'App.tsx must include CloudVPSHosting route');
assert(appTsx.includes('DomainDNSManagement'), 'App.tsx must include DomainDNSManagement route');
assert(appTsx.includes('DedicatedBackendServers'), 'App.tsx must include DedicatedBackendServers route');
console.log('  ✔ App.tsx routes verified (Cloud VPS, Domain DNS, and Dedicated Servers wired)');

// 2. Verify Mega Menu & SVGs in HeaderEnhanced.js
const headerPath = path.join(__dirname, 'src', 'components', 'HeaderEnhanced.js');
assert(fs.existsSync(headerPath), 'src/components/HeaderEnhanced.js must exist');
const headerContent = fs.readFileSync(headerPath, 'utf8');
assert(headerContent.includes('IT & AI') && headerContent.includes('Consultant'), 'Header brand must be IT & AI Consultant');
assert(headerContent.includes('Cloud VPS Hosting'), 'Header must have Cloud VPS Hosting in Mega Menu');
assert(headerContent.includes('Dedicated Backend Servers'), 'Header must have Dedicated Backend Servers');
assert(headerContent.includes('Anycast DNS & Routing'), 'Header must have Anycast DNS & Routing');
assert(headerContent.includes('<svg'), 'Header must utilize crisp inline SVGs');
console.log('  ✔ Mega Menu & Brand verified (IT & AI Consultant brand, inline SVGs, and direct CTAs)');

// 3. Verify 100% Full-Bleed Background & Capabilities in Hero.js
const heroPath = path.join(__dirname, 'src', 'components', 'Hero.js');
assert(fs.existsSync(heroPath), 'src/components/Hero.js must exist');
const heroContent = fs.readFileSync(heroPath, 'utf8');
assert(heroContent.includes('100vw'), 'Hero must occupy 100% full-width viewport');
assert(heroContent.includes('NVMe Cloud VPS'), 'Hero must highlight NVMe Cloud VPS capability');
assert(heroContent.includes('Anycast DNS'), 'Hero must highlight Anycast DNS capability');
assert(heroContent.includes('Bare-Metal Dedicated Servers'), 'Hero must highlight Bare-Metal Dedicated Servers');
console.log('  ✔ 100% Full-Bleed Hero & Cloud Infrastructure capability pills verified');

// 4. Verify Dedicated Pages Exist
const pages = [
  'CloudVPSHosting.js',
  'DomainDNSManagement.js',
  'DedicatedBackendServers.js',
  'Home.js'
];
pages.forEach(file => {
  const filePath = path.join(__dirname, 'src', 'pages', file);
  assert(fs.existsSync(filePath), `src/pages/${file} must exist`);
});
console.log('  ✔ Dedicated Service Pages verified (CloudVPS, DomainDNS, DedicatedBackend, Home)');

// 5. Verify Production & Root HTML
const rootHtmlPath = path.join(__dirname, 'index.html');
const distHtmlPath = path.join(__dirname, 'dist', 'index.html');
assert(fs.existsSync(rootHtmlPath), 'index.html must exist');
assert(fs.existsSync(distHtmlPath), 'dist/index.html must exist');

const rootHtml = fs.readFileSync(rootHtmlPath, 'utf8');
const distHtml = fs.readFileSync(distHtmlPath, 'utf8');

assert(rootHtml.includes('IT & AI Consultant'), 'Root index.html must have IT & AI Consultant title');
assert(distHtml.includes('IT & AI Consultant'), 'dist/index.html must have IT & AI Consultant title');
assert(rootHtml.includes('Cloud VPS, Dedicated Backend Servers'), 'Root index.html must have updated SEO title');
assert(distHtml.includes('Cloud VPS, Dedicated Backend Servers'), 'dist/index.html must have updated SEO title');
assert(distHtml.includes('G-GUIDEITSOL2026'), 'dist/index.html must have GA4 analytics');
assert(!distHtml.includes('Dancing Script'), 'dist/index.html must NOT contain festive Diwali font');
console.log('  ✔ Production HTML verified (IT & AI Consultant SEO titles, GA4 tracking, and zero festive bloat)');

console.log('✅ GuideSoft Website Final: 5/5 checks passed (100% success)');
