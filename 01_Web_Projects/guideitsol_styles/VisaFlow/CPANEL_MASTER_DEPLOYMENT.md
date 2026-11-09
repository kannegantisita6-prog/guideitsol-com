# GuideITSol - Master cPanel Deployment

## 🎯 **Master Login Credentials**
- **Domain**: clients.hostingraja.in
- **cPanel URL**: https://clients.hostingraja.in:2083
- **Username**: praveenkumar.kanneganti@gmail.com
- **Password**: KPKkpk@123
- **File Path**: /home/hjqssnag/public_html/

## 🚀 **Step-by-Step Deployment Process**

### Step 1: Login to cPanel
1. Go to: https://clients.hostingraja.in:2083
2. Enter username: `praveenkumar.kanneganti@gmail.com`
3. Enter password: `KPKkpk@123`
4. Click "Log In"

### Step 2: Access File Manager
1. In cPanel dashboard, find "Files" section
2. Click on "File Manager"
3. Navigate to `/home/hjqssnag/public_html/`

### Step 3: Backup Current Files (Optional)
1. Select all files in `public_html`
2. Right-click → "Compress" → Create backup zip

### Step 4: Clear Current Website
1. Select all files in `public_html` directory
2. Delete them (keep `.cpanel` folder if exists)

### Step 5: Upload New Website
1. Click "Upload" button in File Manager
2. Select `cpanel-deployment-final.zip` from your local machine
3. Wait for upload to complete (764 KB)

### Step 6: Extract Files
1. Right-click on `cpanel-deployment-final.zip`
2. Choose "Extract"
3. Extract to `/home/hjqssnag/public_html/`
4. Delete the zip file after extraction

### Step 7: Set Permissions
1. Select all files in `public_html`
2. Right-click → "Permissions"
3. Set:
   - Files: `644`
   - Directories: `755`
   - `.htaccess`: `644`

### Step 8: Verify Deployment
1. Visit: https://clients.hostingraja.in
2. Test all pages and navigation
3. Check mobile responsiveness
4. Verify contact forms work

## 📁 **File Structure After Deployment**
```
/home/hjqssnag/public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-BSkxyu0d.js
    ├── index-eAx4bOcf.css
    ├── logo-BdL-tM9p.png
    └── praveen-new-n1IEYmF1.png
```

## ✅ **What's Deployed**
- Complete React SPA with all services
- Study Abroad Visas, Work Visas, Immigration
- IT Consulting, AI Development, Software Development
- UI/UX Design, Cybersecurity, Digital Marketing
- Data Analytics, Backend Prototyping, Automation
- SEO optimized with Google Analytics
- Mobile responsive design
- Fast loading with optimized assets

## 🔧 **Troubleshooting**
If you encounter issues:
1. Check file permissions (644 for files, 755 for directories)
2. Ensure `.htaccess` is uploaded correctly
3. Clear browser cache
4. Check cPanel error logs
5. Verify all files are in `public_html` root

## 📞 **Support**
- Domain: clients.hostingraja.in
- Hosting: HostingRaja
- Master Account: praveenkumar.kanneganti@gmail.com

---
**Deployment Package**: cpanel-deployment-final.zip (764 KB)
**Ready for Production**: ✅
**Master Access**: ✅
