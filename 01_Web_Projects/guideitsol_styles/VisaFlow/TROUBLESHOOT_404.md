# 🔧 Troubleshooting 404 Error - guideitsol.com

## ❌ **Issue**: 404 Not Found Error

This means the website files aren't in the correct location or there's a routing issue.

## 🔍 **Possible Causes & Solutions:**

### **1. Wrong Directory Location**
**Check if files are in the correct directory:**
- If guideitsol.com is your **main domain**: files should be in `/home/hjqssnag/public_html/`
- If guideitsol.com is an **addon domain**: files should be in `/home/hjqssnag/guideitsol.com/`

### **2. Missing .htaccess File**
**The .htaccess file is crucial for React routing:**
- Make sure `.htaccess` file is uploaded
- Check if it has the correct permissions (644)
- Verify it contains the React routing rules

### **3. File Permissions Issue**
**Set correct permissions:**
- Files: 644
- Directories: 755
- .htaccess: 644

### **4. Domain Configuration**
**Check domain settings in cPanel:**
- Verify guideitsol.com is properly configured
- Check if it's pointing to the correct directory
- Ensure DNS is properly set up

## 🛠️ **Step-by-Step Fix:**

### **Step 1: Check File Location**
1. Login to cPanel: https://clients.hostingraja.in:2083
2. Go to File Manager
3. Check which directory contains your website files:
   - `/home/hjqssnag/public_html/`
   - `/home/hjqssnag/guideitsol.com/`

### **Step 2: Verify .htaccess File**
1. Make sure `.htaccess` file exists in the root directory
2. Check if it contains React routing rules
3. Set permissions to 644

### **Step 3: Check Domain Configuration**
1. In cPanel, go to "Addon Domains" or "Subdomains"
2. Verify guideitsol.com is pointing to the correct directory
3. Check if the domain is properly configured

### **Step 4: Re-upload if Necessary**
1. If files are in wrong location, move them to correct directory
2. Or re-upload `cpanel-final-deploy.zip` to correct location
3. Extract and set proper permissions

## 📋 **Quick Checklist:**
- [ ] Files are in correct directory
- [ ] .htaccess file exists and has correct permissions
- [ ] Domain is properly configured in cPanel
- [ ] File permissions are set correctly (644 for files, 755 for directories)
- [ ] DNS is pointing to correct server

## 🆘 **If Still Not Working:**
1. Check cPanel error logs
2. Verify domain DNS settings
3. Contact hosting support if needed
4. Try accessing via IP address to test if files are working

---
**Current Status**: 404 Error - Needs Troubleshooting
**Target**: guideitsol.com
**Action Required**: Check file location and configuration
