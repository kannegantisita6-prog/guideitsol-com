# Start Guidesoft IT Solutions Development Servers

Write-Host "🚀 Starting Guidesoft IT Solutions Development Environment..." -ForegroundColor Green

# Function to start a process in new window
function Start-ServiceInNewWindow {
    param(
        [string]$Title,
        [string]$Command,
        [string]$WorkingDirectory
    )
    
    $scriptBlock = {
        param($cmd, $dir, $title)
        Set-Location $dir
        Write-Host "Starting $title..." -ForegroundColor Yellow
        Invoke-Expression $cmd
    }
    
    Start-Process PowerShell -ArgumentList "-NoExit", "-Command", "& {$scriptBlock} '$Command' '$WorkingDirectory' '$Title'"
}

Write-Host "📡 Starting Backend API Server (Port 5000)..." -ForegroundColor Cyan
Start-ServiceInNewWindow -Title "Guidesoft Backend" -Command "npm run dev" -WorkingDirectory "$PWD\backend"

Start-Sleep -Seconds 3

Write-Host "🌐 Starting Frontend Development Server (Port 3000)..." -ForegroundColor Cyan
Start-ServiceInNewWindow -Title "Guidesoft Frontend" -Command "npm run dev" -WorkingDirectory "$PWD\frontend"

Write-Host ""
Write-Host "✅ Development servers starting..." -ForegroundColor Green
Write-Host "📱 Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "🔧 Backend:  http://localhost:5000" -ForegroundColor Yellow
Write-Host "❤️  Health:  http://localhost:5000/health" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C in each window to stop the servers" -ForegroundColor Gray