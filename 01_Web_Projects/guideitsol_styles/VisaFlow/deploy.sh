#!/bin/bash

# GuideITSol - cPanel Deployment Script
# This script will help you deploy your website to cPanel

echo "🚀 GuideITSol Deployment Script"
echo "================================"

# Check if deployment package exists
if [ ! -f "cpanel-deployment-final.zip" ]; then
    echo "❌ Deployment package not found!"
    echo "Please run 'npm run build' first to create the deployment package."
    exit 1
fi

echo "✅ Deployment package found: cpanel-deployment-final.zip"
echo "📦 Package size: $(ls -lh cpanel-deployment-final.zip | awk '{print $5}')"

echo ""
echo "📋 Manual Deployment Steps:"
echo "=========================="
echo "1. Login to cPanel: https://clients.hostingraja.in:2083"
echo "   Username: praveenkumar.kanneganti@gmail.com"
echo "   Password: KPKkpk@123"
echo ""
echo "2. Go to File Manager"
echo "3. Navigate to /home/hjqssnag/public_html/"
echo "4. Upload cpanel-deployment-final.zip"
echo "5. Extract to public_html directory"
echo "6. Set permissions: Files=644, Directories=755"
echo "7. Test: https://clients.hostingraja.in"
echo ""

# Open the deployment package location
echo "📁 Opening deployment package location..."
open .

echo "✅ Ready to deploy! Upload the zip file to your cPanel File Manager."
