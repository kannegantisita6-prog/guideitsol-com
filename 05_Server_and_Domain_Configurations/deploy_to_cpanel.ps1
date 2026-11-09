# ==============================================================================
# GuideITSol cPanel & HostingRaja Production Deployment Script
# ==============================================================================
# Target Host: ftp.gsgroups.net / guideitsol.com (Port 21)
# User: guideitsol@guideitsol.com
# Remote Web Root: /home/hjqssnag/public_html/guideitsol.com/
# ==============================================================================

param(
    [string]$SourceFolder = "C:\Users\user\Desktop\GUIDEITSOL.COM\01_Web_Projects\guideitsol-cpanel-deployment\public_html",
    [string]$FtpPassword = "",
    [switch]$BuildZipOnly = $false
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "       GuideITSol cPanel Deployment Package Generator     " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Verify Source Directory
if (-not (Test-Path $SourceFolder)) {
    Write-Error "Source folder does not exist: $SourceFolder"
    exit 1
}

Write-Host "1. Validating deployment files in: $SourceFolder" -ForegroundColor Yellow

$indexFile = Join-Path $SourceFolder "index.html"
$htaccessFile = Join-Path $SourceFolder ".htaccess"
$assetsFolder = Join-Path $SourceFolder "assets"

if (-not (Test-Path $indexFile)) {
    Write-Error "CRITICAL: index.html missing in $SourceFolder"
    exit 1
}

# 2. Ensure .htaccess with LiteSpeed / Apache 404 routing fix
if (-not (Test-Path $htaccessFile)) {
    Write-Host "  Creating essential .htaccess for SPA routing..." -ForegroundColor Green
    $htaccessContent = @"
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
"@
    Set-Content -Path $htaccessFile -Value $htaccessContent
} else {
    Write-Host "  .htaccess verified (prevents 404 errors on deep routes)" -ForegroundColor Green
}

# 3. Create Clean Production Zip
$outputZip = "C:\Users\user\Desktop\GUIDEITSOL.COM\05_Server_and_Domain_Configurations\cpanel-ready-guideitsol-latest.zip"
Write-Host "2. Packaging clean release archive: $outputZip" -ForegroundColor Yellow

if (Test-Path $outputZip) {
    Remove-Item $outputZip -Force
}

Compress-Archive -Path "$SourceFolder\*" -DestinationPath $outputZip -Force
Write-Host "  Successfully created release zip: $((Get-Item $outputZip).Length / 1MB | ForEach-Object { '{0:N2} MB' -f $_ })" -ForegroundColor Green

# 4. Optional FTP Upload
if (-not [string]::IsNullOrEmpty($FtpPassword) -and -not $BuildZipOnly) {
    Write-Host "3. Connecting to ftp.gsgroups.net for user guideitsol@guideitsol.com..." -ForegroundColor Yellow
    # FTP Upload implementation using System.Net.FtpWebRequest
    $ftpUrl = "ftp://ftp.gsgroups.net/cpanel-ready-guideitsol-latest.zip"
    $ftpRequest = [System.Net.FtpWebRequest]::Create($ftpUrl)
    $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
    $ftpRequest.Credentials = New-Object System.Net.NetworkCredential("guideitsol@guideitsol.com", $FtpPassword)
    $ftpRequest.UseBinary = $true
    
    $fileBytes = [System.IO.File]::ReadAllBytes($outputZip)
    $ftpRequest.ContentLength = $fileBytes.Length
    $requestStream = $ftpRequest.GetRequestStream()
    $requestStream.Write($fileBytes, 0, $fileBytes.Length)
    $requestStream.Close()
    
    Write-Host "  FTP Upload Complete! Extract zip in cPanel File Manager." -ForegroundColor Green
} else {
    Write-Host "`nReady for manual or Cyberduck upload:" -ForegroundColor Cyan
    Write-Host "  1. Login to cPanel at https://clients.hostingraja.in:2083" -ForegroundColor White
    Write-Host "  2. Go to File Manager -> /home/hjqssnag/public_html/guideitsol.com/" -ForegroundColor White
    Write-Host "  3. Upload '$outputZip' and Extract" -ForegroundColor White
    Write-Host "  4. Ensure .htaccess is visible and present in the root folder." -ForegroundColor White
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "                Deployment Step Complete                  " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
