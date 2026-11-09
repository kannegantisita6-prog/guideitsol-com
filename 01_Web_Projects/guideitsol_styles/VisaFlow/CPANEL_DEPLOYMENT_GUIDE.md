# GuideITSol - cPanel Deployment Guide

## Deployment Package Ready! 🚀

Your production-ready website has been built and packaged for cPanel deployment.

### Files Created:
- `cpanel-deployment-final.zip` - Complete deployment package (782 KB)
- Contains all static files, assets, and `.htaccess` for proper routing

## Deployment Steps for cPanel

### 1. Access cPanel
- **URL**: https://clients.hostingraja.in:2083
- **Username**: praveenkumar.kanneganti@gmail.com
- **Password**: KPKkpk@123

### 2. Navigate to File Manager
1. Login to cPanel
2. Find and click on "File Manager" in the Files section
3. Navigate to `/home/hjqssnag/public_html/`

### 3. Backup Current Files (Optional but Recommended)
1. Select all current files in `public_html`
2. Right-click and choose "Compress" to create a backup
3. Name it `backup-$(date).zip`

### 4. Clear Current Website Files
1. Select all files in `public_html` directory
2. Delete them (except `.cpanel` folder if it exists)

### 5. Upload New Website
1. Click "Upload" button in File Manager
2. Upload `cpanel-deployment-final.zip`
3. Wait for upload to complete

### 6. Extract Files
1. Right-click on `cpanel-deployment-final.zip`
2. Choose "Extract"
3. Extract to `/home/hjqssnag/public_html/`
4. Delete the zip file after extraction

### 7. Set Permissions (Important!)
1. Select all files in `public_html`
2. Right-click and choose "Permissions"
3. Set permissions to `644` for files
4. Set permissions to `755` for directories
5. Make sure `.htaccess` has `644` permissions

### 8. Verify Deployment
1. Visit your website: https://clients.hostingraja.in
2. Test all pages and functionality
3. Check that routing works properly (try navigating to different pages)

## What's Included in the Deployment:

### Static Files:
- `index.html` - Main HTML file
- `assets/` folder containing:
  - `index-BSkxyu0d.js` - Main JavaScript bundle
  - `index-eAx4bOcf.css` - Main CSS bundle
  - `logo-BdL-tM9p.png` - Company logo
  - `praveen-new-n1IEYmF1.png` - Profile image

### Configuration:
- `.htaccess` - Apache configuration for:
  - React Router support (SPA routing)
  - Gzip compression
  - Browser caching
  - Security headers

## Features of Your Website:

✅ **Study Abroad Visas** - Complete visa consultation services
✅ **Work & Business Visas** - Professional visa assistance
✅ **Immigration Consultation** - Expert guidance
✅ **IT & AI Consulting** - Technology services
✅ **Software Development** - Custom solutions
✅ **UI/UX Design** - Modern design services
✅ **Cybersecurity** - Security solutions
✅ **Digital Marketing** - Marketing services
✅ **Data Analytics** - Business intelligence
✅ **Backend Prototyping** - Rapid development
✅ **Automation Workflows** - Process optimization
✅ **IT Operations** - Infrastructure management

## SEO & Analytics:
- Google Analytics integrated (G-6JXCVRREDW)
- SEO-optimized meta tags
- Mobile-responsive design
- Fast loading with optimized assets

## Support:
If you encounter any issues during deployment:
1. Check file permissions
2. Ensure `.htaccess` is uploaded correctly
3. Clear browser cache
4. Check cPanel error logs

## Next Steps After Deployment:
1. Test all contact forms
2. Verify email functionality
3. Check mobile responsiveness
4. Monitor Google Analytics
5. Set up SSL certificate if not already active

---
**Deployment Package Size**: 782 KB
**Build Date**: $(date)
**Ready for Production**: ✅
