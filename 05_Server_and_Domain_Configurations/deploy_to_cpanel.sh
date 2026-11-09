#!/usr/bin/env bash
# ==============================================================================
# GuideITSol cPanel & HostingRaja Production Deployment Script (Bash Shell)
# ==============================================================================

set -e

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../01_Web_Projects/GuidesoftWebsiteFinal/dist" && pwd)"
OUTPUT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Convert to Windows style paths for powershell interop
WIN_SOURCE=$(cygpath -w "${SOURCE_DIR}")
WIN_OUTPUT=$(cygpath -w "${OUTPUT_DIR}/cpanel-ready-guideitsol-latest.zip")

echo "=========================================================="
echo "    GuideITSol cPanel Deployment Packager (Bash Shell)    "
echo "=========================================================="

echo "1. Checking source build directory: ${WIN_SOURCE}"

if [ ! -d "${SOURCE_DIR}" ]; then
  echo "Error: Directory ${SOURCE_DIR} not found!"
  exit 1
fi

if [ ! -f "${SOURCE_DIR}/index.html" ]; then
  echo "Error: index.html missing from ${SOURCE_DIR}!"
  exit 1
fi

echo "2. Ensuring production .htaccess with SPA rewrite rules..."
cat << 'EOF' > "${SOURCE_DIR}/.htaccess"
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^ index.html [QSA,L]
</IfModule>
EOF

echo "3. Packaging deployment bundle into ${WIN_OUTPUT}..."
powershell.exe -Command "if (Test-Path '${WIN_OUTPUT}') { Remove-Item '${WIN_OUTPUT}' -Force }; Compress-Archive -Path '${WIN_SOURCE}\*' -DestinationPath '${WIN_OUTPUT}' -Force"

echo "=========================================================="
echo "✅ Deployment Bundle Successfully Created:"
echo "1. File: ${WIN_OUTPUT}"
echo "2. Target cPanel directory: /home/hjqssnag/public_html/guideitsol.com/"
echo "3. Extract zip and verify .htaccess is active"
echo "=========================================================="
