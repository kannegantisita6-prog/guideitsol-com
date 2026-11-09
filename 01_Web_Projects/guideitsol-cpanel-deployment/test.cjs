const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('▶ GuideITSol cPanel Production Deployment Package Verification');

// 1. Verify Entry Server and Public HTML
const indexJs = path.join(__dirname, 'index.js');
const publicHtml = path.join(__dirname, 'public_html', 'index.html');
const htaccess = path.join(__dirname, 'public_html', '.htaccess');

assert(fs.existsSync(indexJs), 'index.js server must exist');
assert(fs.existsSync(publicHtml), 'public_html/index.html must exist');
assert(fs.existsSync(htaccess), 'public_html/.htaccess rewrite rules must exist');
console.log('  ✔ Production server and public_html SPA assets verified');

// 2. Verify Storage & Handlers
const serverCode = fs.readFileSync(indexJs, 'utf8');
assert(serverCode.includes('MemStorage'), 'Must define MemStorage high-speed persistence');
assert(serverCode.includes('consultationBookings'), 'Must support consultation bookings');
console.log('  ✔ Memory storage engine and booking handlers verified');

console.log('✅ GuideITSol cPanel Deployment: 2/2 checks passed (100% success)');
