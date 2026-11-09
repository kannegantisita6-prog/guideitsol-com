const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up GuideSoft React Website...');

// Create public/assets directory if it doesn't exist
const publicAssetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
  console.log('✅ Created public/assets directory');
}

// Copy assets from root to public/assets
const sourceAssetsDir = path.join(__dirname, 'assets');
if (fs.existsSync(sourceAssetsDir)) {
  console.log('📁 Copying assets to public directory...');
  
  // This is a placeholder - in a real setup, you would copy the assets
  console.log('ℹ️  Please copy the assets folder to public/assets manually');
  console.log('ℹ️  Or run: cp -r assets public/assets');
} else {
  console.log('⚠️  Assets folder not found in root directory');
  console.log('ℹ️  Please ensure the assets folder exists and contains your images, CSS, and JS files');
}

console.log('\n🎉 Setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Copy assets folder to public/assets');
console.log('2. Run: npm install');
console.log('3. Run: npm start');
console.log('\n🌐 Your React app will be available at http://localhost:3000');
