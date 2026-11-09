# 🔧 LiteSpeed 404 Fix for guideitsol.com

## ❌ **Issue**: 404 Error with LiteSpeed Web Server

The "Proudly powered by LiteSpeed Web Server" message indicates the server is working, but your website files aren't found.

## 🔍 **Common Causes & Solutions:**

### **1. Files in Wrong Directory**
**Check file location:**
- Files should be in `/home/hjqssnag/public_html/guideitsol.com/`
- NOT in `/home/hjqssnag/public_html/guideitsol.com/webdesk/` or any subfolder

### **2. Missing index.html**
**Verify main file exists:**
- `index.html` must be in the root directory
- Check if it's named correctly (case-sensitive)

### **3. Domain Configuration Issue**
**Check domain settings:**
- guideitsol.com might not be pointing to the correct directory
- Verify in cPanel "Addon Domains" section

### **4. LiteSpeed Configuration**
**LiteSpeed might need specific configuration:**
- Check if .htaccess is working with LiteSpeed
- Verify file permissions

## 🛠️ **Step-by-Step Fix:**

### **Step 1: Verify File Location via WebDisk**
1. Connect to WebDisk
2. Navigate to `/home/hjqssnag/public_html/guideitsol.com/`
3. **Check what files are actually there:**
   - Do you see `index.html`?
   - Do you see `.htaccess`?
   - Do you see `assets/` folder?

### **Step 2: Check if Files are in Subfolder**
- If files are in a subfolder (like webdesk/), move them up one level
- Files must be directly in `/home/hjqssnag/public_html/guideitsol.com/`

### **Step 3: Verify Domain Configuration**
1. Login to cPanel: https://clients.hostingraja.in:2083
2. Go to "Addon Domains"
3. Check if guideitsol.com is pointing to `/home/hjqssnag/public_html/guideitsol.com/`

### **Step 4: Check File Permissions**
1. In WebDisk, right-click on files
2. Set permissions:
   - Files: 644
   - Directories: 755
   - .htaccess: 644

### **Step 5: Test with Simple HTML**
1. Create a simple `test.html` file with content: `<h1>Test</h1>`
2. Upload it to `/home/hjqssnag/public_html/guideitsol.com/`
3. Try accessing: https://guideitsol.com/test.html

## 📋 **Quick Checklist:**
- [ ] Files are in `/home/hjqssnag/public_html/guideitsol.com/` (not in subfolder)
- [ ] `index.html` exists in root directory
- [ ] `.htaccess` file exists and has 644 permissions
- [ ] Domain is properly configured in cPanel
- [ ] File permissions are correct (644 for files, 755 for directories)

## 🆘 **If Still Not Working:**
1. Check cPanel error logs
2. Try accessing via IP address
3. Verify DNS settings
4. Contact hosting support

---
**Current Status**: 404 Error with LiteSpeed
**Target**: guideitsol.com
**Action Required**: Verify file location and domain configuration
