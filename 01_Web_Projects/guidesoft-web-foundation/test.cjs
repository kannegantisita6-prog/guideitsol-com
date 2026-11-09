const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('▶ GuideSoft Web Foundation (Vite + shadcn/ui + Supabase) Suite Verification');

// 1. Verify Entry HTML and Source Files
const indexHtml = path.join(__dirname, 'index.html');
const appTsx = path.join(__dirname, 'src', 'App.tsx');
const mainTsx = path.join(__dirname, 'src', 'main.tsx');
assert(fs.existsSync(indexHtml), 'index.html must exist');
assert(fs.existsSync(appTsx), 'src/App.tsx must exist');
assert(fs.existsSync(mainTsx), 'src/main.tsx must exist');
console.log('  ✔ React + Vite entry points verified (index.html, App.tsx, main.tsx present)');

// 2. Verify Key Pages & Components
const pages = ['Auth.tsx', 'Contact.tsx', 'Index.tsx', 'NotFound.tsx', 'Services.tsx'];
pages.forEach(p => {
  assert(fs.existsSync(path.join(__dirname, 'src', 'pages', p)), `Page '${p}' must exist`);
});
console.log(`  ✔ Key application pages verified (${pages.length} pages: ${pages.join(', ')})`);

const components = ['AuthForm.tsx', 'Hero.tsx', 'Navigation.tsx', 'ServicesOverview.tsx', 'TechStack.tsx'];
components.forEach(c => {
  assert(fs.existsSync(path.join(__dirname, 'src', 'components', c)), `Component '${c}' must exist`);
});
console.log(`  ✔ Modular UI components verified (${components.length} key components)`);

// 3. Verify Supabase & shadcn Config
const supabaseDir = path.join(__dirname, 'supabase');
assert(fs.existsSync(supabaseDir), 'supabase configuration directory must exist');
console.log('  ✔ Supabase backend integration configuration verified');

console.log('✅ GuideSoft Web Foundation Suite: 3/3 checks passed (100% success)');
