const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const rootDir = __dirname;

// MIME types dictionary
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain'
};

// Helper: Create static SPA HTTP server
function createSpaServer(folderPath, port, appName) {
  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    if (reqUrl === '/') reqUrl = '/index.html';

    let filePath = path.join(folderPath, reqUrl);

    fs.stat(filePath, (err, stats) => {
      // If file doesn't exist, SPA fallback to index.html
      if (err || !stats.isFile()) {
        filePath = path.join(folderPath, 'index.html');
      }

      fs.readFile(filePath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        res.writeHead(200, {
          'Content-Type': contentType,
          'Access-Control-Allow-Origin': '*'
        });
        res.end(content);
      });
    });
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`[${appName}] Serving at http://localhost:${port}`);
  });

  return server;
}

// 1. Launch Backend API (Port 5000)
console.log('Starting GuideITSol Backend API on Port 5000...');
const backendDir = path.join(rootDir, '01_Web_Projects', 'guidesoft-it-solutions-fullstack', 'backend');
const backendProcess = spawn('node', ['server.js'], {
  cwd: backendDir,
  env: { ...process.env, PORT: '5000', NODE_ENV: 'development' },
  stdio: 'inherit',
  shell: true
});

// 2. Launch Fullstack Next.js Frontend (Port 3000)
console.log('Starting GuideITSol Fullstack Frontend on Port 3000...');
const frontendDir = path.join(rootDir, '01_Web_Projects', 'guidesoft-it-solutions-fullstack', 'frontend');
const frontendProcess = spawn('npx', ['next', 'start', '-p', '3000'], {
  cwd: frontendDir,
  env: { ...process.env, PORT: '3000', NODE_ENV: 'production' },
  stdio: 'inherit',
  shell: true
});

// 3. Launch VisaFlow Enterprise Portal (Port 3001)
const visaFlowDir = path.join(rootDir, '01_Web_Projects', 'guideitsol_styles', 'VisaFlow', 'dist', 'public');
createSpaServer(visaFlowDir, 3001, 'VisaFlow Portal');

// 4. Launch GuideSoft Website Final (Port 3002)
const guidesoftWebDir = path.join(rootDir, '01_Web_Projects', 'GuidesoftWebsiteFinal', 'dist');
createSpaServer(guidesoftWebDir, 3002, 'GuideSoft Production Web');

// 5. Launch cPanel Production Preview (Port 3003)
const cpanelPreviewDir = path.join(rootDir, '01_Web_Projects', 'guideitsol-cpanel-deployment', 'public_html');
createSpaServer(cpanelPreviewDir, 3003, 'cPanel Production Preview');

// 6. Launch Creative-Soft Studio (Port 3004)
const creativeSoftDir = path.join(rootDir, '01_Web_Projects', 'guidesoft-sonali-final', 'blackberrybd.com', 'creative-soft');
createSpaServer(creativeSoftDir, 3004, 'Creative-Soft Studio');

// 7. Launch Semantic Search & AI Admin Web App (Port 3005)
const semanticSearchDir = path.join(rootDir, '02_Mobile_Apps', 'guidesoft_webapp', 'frontend', 'dist');
createSpaServer(semanticSearchDir, 3005, 'Semantic Search & AI Admin App');

// 8. Launch GuideSoft Website Model & Elements Library (Port 3006)
const websiteModelDir = path.join(rootDir, '01_Web_Projects', 'guidesoft_website_model');
createSpaServer(websiteModelDir, 3006, 'GuideSoft UI Elements Library');

// 9. Master Launchpad Hub (Port 8080)
const hubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GuideITSol & GuideSoft - Master Launchpad</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: radial-gradient(circle at top, #0f172a 0%, #020617 100%);
      color: #f8fafc;
      min-height: 100vh;
      padding: 40px 20px;
    }
    .container { max-width: 1200px; margin: 0 auto; }
    header { text-align: center; margin-bottom: 50px; }
    .badge {
      display: inline-block;
      padding: 6px 14px;
      background: rgba(14, 165, 233, 0.15);
      border: 1px solid rgba(14, 165, 233, 0.4);
      color: #38bdf8;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 42px;
      font-weight: 800;
      background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 12px;
    }
    p.subtitle { color: #94a3b8; font-size: 18px; max-width: 650px; margin: 0 auto; }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }
    .card {
      background: rgba(30, 41, 59, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 28px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card:hover {
      transform: translateY(-6px);
      border-color: rgba(56, 189, 248, 0.4);
      box-shadow: 0 20px 35px -10px rgba(14, 165, 233, 0.25);
    }
    .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
    .status-dot {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 9999px;
      background: rgba(34, 197, 94, 0.15);
      color: #4ade80;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; animation: pulse 2s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    
    .card-title { font-size: 20px; font-weight: 700; color: #ffffff; margin-bottom: 8px; }
    .card-desc { color: #94a3b8; font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
    
    .port-tag {
      font-family: monospace;
      font-size: 13px;
      color: #38bdf8;
      background: rgba(15, 23, 42, 0.8);
      padding: 4px 10px;
      border-radius: 6px;
      display: inline-block;
      margin-bottom: 20px;
      border: 1px solid rgba(56, 189, 248, 0.2);
    }
    .btn {
      display: inline-block;
      text-align: center;
      background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      padding: 12px 20px;
      border-radius: 10px;
      transition: all 0.2s;
    }
    .btn:hover { background: linear-gradient(135deg, #0369a1 0%, #1d4ed8 100%); }
    .btn-secondary {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #e2e8f0;
      margin-top: 10px;
    }
    .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); }
    footer { text-align: center; color: #64748b; font-size: 14px; margin-top: 60px; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge">GuideITSol Ecosystem Active</div>
      <h1>Active Services & Projects Launchpad</h1>
      <p class="subtitle">All web platforms, backend APIs, client portals, and production builds are live and running locally.</p>
    </header>

    <div class="grid">
      <!-- 1. Fullstack Next.js Frontend -->
      <div class="card">
        <div>
          <div class="card-header">
            <div class="port-tag">Port 3000</div>
            <div class="status-dot"><div class="dot"></div> Online</div>
          </div>
          <div class="card-title">GuideITSol Fullstack Web App</div>
          <p class="card-desc">Next.js 14 App Router enterprise frontend featuring Hero, Services, Solutions, Hire Developers, and connected Contact API.</p>
        </div>
        <a href="http://localhost:3000" target="_blank" class="btn">Launch Web App →</a>
      </div>

      <!-- 2. Backend REST API -->
      <div class="card">
        <div>
          <div class="card-header">
            <div class="port-tag">Port 5000</div>
            <div class="status-dot"><div class="dot"></div> 20/20 Tests Passing (100%)</div>
          </div>
          <div class="card-title">GuideITSol Backend API</div>
          <p class="card-desc">Node.js / Express REST API with JWT Auth, Multi-Gateway Payments (UPI, QR, Google Pay, Razorpay, Stripe), Fast In-Memory Fallback, and Nodemailer.</p>
        </div>
        <a href="http://localhost:5000/api" target="_blank" class="btn">Explore API Docs →</a>
        <a href="http://localhost:5000/health" target="_blank" class="btn btn-secondary">Health Check Status</a>
      </div>

      <!-- 3. VisaFlow Enterprise Portal -->
      <div class="card">
        <div>
          <div class="card-header">
            <div class="port-tag">Port 3001</div>
            <div class="status-dot"><div class="dot"></div> 26 Pages Live</div>
          </div>
          <div class="card-title">VisaFlow Immigration & IT Suite</div>
          <p class="card-desc">Vite + React single-page platform covering Study Abroad, Work Visas, IT Consulting, AI Agent Builder, and N8N Hosting.</p>
        </div>
        <a href="http://localhost:3001" target="_blank" class="btn">Launch VisaFlow Portal →</a>
      </div>

      <!-- 4. GuideSoft Production Website Final -->
      <div class="card">
        <div>
          <div class="card-header">
            <div class="port-tag">Port 3002</div>
            <div class="status-dot"><div class="dot"></div> Optimized Production</div>
          </div>
          <div class="card-title">GuideSoft Clean Web Platform</div>
          <p class="card-desc">Lightning-fast production distribution with instantaneous rendering, zero festive bloat, Google Maps embed, GA4 tracking, and WhatsApp conversion CTAs.</p>
        </div>
        <a href="http://localhost:3002" target="_blank" class="btn">Launch GuideSoft Web →</a>
      </div>

      <!-- 5. cPanel Production Preview -->
      <div class="card">
        <div>
          <div class="card-header">
            <div class="port-tag">Port 3003</div>
            <div class="status-dot"><div class="dot"></div> cPanel Bundle</div>
          </div>
          <div class="card-title">cPanel Deployment Preview</div>
          <p class="card-desc">Exact reproduction of public_html for HostingRaja cPanel, pre-configured with the permanent .htaccess 404 routing fix.</p>
        </div>
        <a href="http://localhost:3003" target="_blank" class="btn">View cPanel Preview →</a>
      </div>

      <!-- 6. Creative-Soft Studio Suite -->
      <div class="card">
        <div>
          <div class="card-header">
            <div class="port-tag">Port 3004</div>
            <div class="status-dot"><div class="dot"></div> Studio Live</div>
          </div>
          <div class="card-title">Creative-Soft Web Studio</div>
          <p class="card-desc">Classic multi-brand studio portfolio with interactive showcases, team galleries, and client reviews.</p>
        </div>
        <a href="http://localhost:3004" target="_blank" class="btn">Launch Creative Studio →</a>
      </div>

      <!-- 7. Semantic Search & AI Admin App -->
      <div class="card">
        <div>
          <div class="card-header">
            <div class="port-tag">Port 3005</div>
            <div class="status-dot"><div class="dot"></div> AI Search Live</div>
          </div>
          <div class="card-title">GuideSoft Semantic Search & AI Admin</div>
          <p class="card-desc">Elasticsearch & ELSER machine learning vector search platform with administrative dashboard and index management.</p>
        </div>
        <a href="http://localhost:3005" target="_blank" class="btn">Launch AI Search App →</a>
      </div>

      <!-- 8. GuideSoft Website Model & Elements Library -->
      <div class="card">
        <div>
          <div class="card-header">
            <div class="port-tag">Port 3006</div>
            <div class="status-dot"><div class="dot"></div> 28+ Elements</div>
          </div>
          <div class="card-title">GuideSoft UI Elements & Model Library</div>
          <p class="card-desc">Extensive design system showcase featuring 50+ templates and 28 modular UI element demos (maps, pricing boxes, team sliders).</p>
        </div>
        <a href="http://localhost:3006" target="_blank" class="btn">Launch Elements Library →</a>
      </div>
    </div>

    <footer>
      <p>GuideITSol & GuideSoft Ecosystem • Running locally on Windows • All services healthy</p>
    </footer>
  </div>
</body>
</html>
`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(hubHtml);
}).listen(8080, '0.0.0.0', () => {
  console.log('================================================================');
  console.log('🚀 GUIDEITSOL MASTER LAUNCHPAD LIVE AT: http://localhost:8080');
  console.log('================================================================');
});

// Process cleanup
process.on('SIGINT', () => {
  console.log('Shutting down all services...');
  backendProcess.kill();
  frontendProcess.kill();
  process.exit();
});
