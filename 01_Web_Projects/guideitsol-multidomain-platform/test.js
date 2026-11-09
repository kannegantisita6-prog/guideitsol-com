const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('▶ GuideITSol Multi-Domain Platform (Next.js + Prisma) Verification Suite');

// 1. Verify Prisma ORM Schema
const prismaSchema = path.join(__dirname, 'prisma', 'schema.prisma');
assert(fs.existsSync(prismaSchema), 'prisma/schema.prisma must exist');
const schemaContent = fs.readFileSync(prismaSchema, 'utf8');
assert(schemaContent.includes('model') || schemaContent.includes('datasource'), 'schema.prisma must define models');
console.log('  ✔ Prisma ORM schema verified');

// 2. Verify Next.js App Router Structure
const appDir = path.join(__dirname, 'app');
assert(fs.existsSync(path.join(appDir, 'layout.tsx')), 'app/layout.tsx must exist');
assert(fs.existsSync(path.join(appDir, 'page.tsx')), 'app/page.tsx must exist');
assert(fs.existsSync(path.join(appDir, 'providers.tsx')), 'app/providers.tsx must exist');
console.log('  ✔ App Router components (layout, page, providers) verified');

// 3. Verify Configuration
const nextConfig = path.join(__dirname, 'next.config.js');
const tailwindConfig = path.join(__dirname, 'tailwind.config.js');
assert(fs.existsSync(nextConfig), 'next.config.js must exist');
assert(fs.existsSync(tailwindConfig), 'tailwind.config.js must exist');
console.log('  ✔ Next.js and Tailwind configuration verified');

console.log('✅ GuideITSol Multi-Domain Platform: 3/3 checks passed (100% success)');
