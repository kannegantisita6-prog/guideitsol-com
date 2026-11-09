# GuideITSol.com - Production Deployment Guide

## 📁 Deployment Structure

This folder contains the production-ready build of the VisaFlow application for deployment on cPanel hosting.

```
guideitsol.com/
├── .env                 # Environment variables (configure before deployment)
├── index.js            # Production server bundle
├── package.json        # Dependencies
├── README.md          # This file
└── public_html/       # Static files for web server
    ├── index.html     # Main HTML file
    └── assets/        # CSS, JS, and image assets
```

## 🚀 cPanel Deployment Steps

### Step 1: Upload Files
1. **Upload Static Files**: Upload all contents of `public_html/` to your cPanel's `public_html/` directory
2. **Upload Server Files**: Upload `index.js`, `package.json`, and `.env` to your cPanel's root directory (one level above `public_html/`)

### Step 2: Configure Environment
1. Edit the `.env` file with your actual production values:
   - Update email credentials with your cPanel email settings
   - Set correct domain URLs
   - Configure any other environment-specific settings

### Step 3: Install Dependencies
1. Access cPanel Terminal or SSH
2. Navigate to your application directory
3. Run: `npm install --production`

### Step 4: Configure Node.js App (if supported)
1. In cPanel, go to "Node.js Apps" or "Node.js Selector"
2. Create a new Node.js application:
   - **Node.js Version**: 18.x or higher
   - **Application Root**: `/` (root directory)
   - **Application URL**: your domain
   - **Application Startup File**: `index.js`
3. Set environment variables from your `.env` file in the cPanel interface

### Step 5: Alternative Deployment (Shared Hosting)
If your cPanel doesn't support Node.js apps:
1. The static files in `public_html/` will work as a static website
2. Contact forms will need to be configured with cPanel's form handlers or PHP scripts
3. Consider using serverless functions for backend functionality

## 📧 Email Configuration

Update these settings in `.env` with your cPanel email configuration:

```env
EMAIL_HOST=mail.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=business@yourdomain.com
EMAIL_PASS=your_secure_password
```

## 🔧 Troubleshooting

### Common Issues:
1. **Node.js not supported**: Use static deployment method
2. **Email not working**: Verify cPanel email settings and credentials
3. **Assets not loading**: Check file paths and permissions
4. **CORS errors**: Update CORS_ORIGIN in .env file

### File Permissions:
- Set directories to 755
- Set files to 644
- Ensure .env file is not publicly accessible

## 📱 Features Included

- ✅ Responsive design for all devices
- ✅ Professional image integration
- ✅ Contact forms with email submission
- ✅ Service pages with interactive elements
- ✅ Blog section with professional imagery
- ✅ Modern UI with animations and effects

## 🔒 Security Notes

1. **Environment Variables**: Never expose sensitive data in client-side code
2. **Email Credentials**: Use strong passwords and consider app-specific passwords
3. **File Permissions**: Ensure proper file permissions are set
4. **SSL Certificate**: Enable HTTPS for your domain

## 📞 Support

For deployment assistance, contact: business@guideitsol.com

---

**Last Updated**: January 2024
**Version**: 1.0.0
**Built with**: React, TypeScript, Node.js, Express