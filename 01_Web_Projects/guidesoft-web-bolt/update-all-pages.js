// Script to update all HTML pages with navigation loader
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all HTML files
function findHTMLFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !filePath.includes('node_modules')) {
            findHTMLFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });
    
    return fileList;
}

// Function to update HTML file with navigation loader
function updateHTMLFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has navigation-loader.js
    if (content.includes('navigation-loader.js')) {
        console.log(`Skipping ${filePath} - already updated`);
        return;
    }
    
    // Check if it's a page in the pages directory
    if (filePath.includes('pages')) {
        // Add navigation loader script before closing body tag
        const scriptToAdd = `
    <!-- Navigation Loader for Dynamic Links -->
    <script src="/assets/js/navigation-loader.js"></script>`;
        
        // Find the closing body tag and insert before it
        if (content.includes('</body>')) {
            // Check if there are already script tags
            if (content.includes('<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>')) {
                // Add after AOS script
                content = content.replace(
                    '<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>',
                    `<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>${scriptToAdd}`
                );
            } else if (content.includes('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>')) {
                // Add after Bootstrap
                content = content.replace(
                    '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>',
                    `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>${scriptToAdd}`
                );
            } else {
                // Add before closing body tag
                content = content.replace('</body>', `${scriptToAdd}\n</body>`);
            }
            
            // Also ensure the navigation uses the dynamic loader
            if (content.includes('nav-glass fixed-top')) {
                // Replace hardcoded navigation with placeholder
                const navRegex = /<nav class="nav-glass[^>]*>[\s\S]*?<\/nav>/;
                if (navRegex.test(content)) {
                    content = content.replace(navRegex, '<div id="navigation-placeholder"></div>');
                }
            }
            
            // Write the updated content back
            fs.writeFileSync(filePath, content);
            console.log(`Updated: ${filePath}`);
        }
    }
}

// Main execution
console.log('Starting to update all HTML pages with navigation loader...\n');

// Find all HTML files in pages directory
const pagesDir = path.join(__dirname, 'pages');
const htmlFiles = findHTMLFiles(pagesDir);

console.log(`Found ${htmlFiles.length} HTML files to update\n`);

// Update each file
htmlFiles.forEach(file => {
    updateHTMLFile(file);
});

console.log('\n✅ All pages have been updated with navigation loader!');
console.log('The website navigation is now fully linked across all pages.');