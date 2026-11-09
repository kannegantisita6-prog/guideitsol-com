// Page Generator Script for GuideSoft Solutions
// Creates all service pages with glassmorphic design

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Page configurations
const pages = [
    // Backend Services
    { path: 'pages/services/backend/nodejs.html', title: 'Node.js Development', icon: 'fab fa-node-js', color: 'success', tech: ['Express.js', 'NestJS', 'Socket.io', 'MongoDB'] },
    { path: 'pages/services/backend/python.html', title: 'Python Development', icon: 'fab fa-python', color: 'warning', tech: ['Django', 'Flask', 'FastAPI', 'PostgreSQL'] },
    { path: 'pages/services/backend/dotnet.html', title: '.NET Development', icon: 'fab fa-microsoft', color: 'info', tech: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server'] },
    { path: 'pages/services/backend/laravel.html', title: 'Laravel Development', icon: 'fab fa-laravel', color: 'danger', tech: ['PHP', 'MySQL', 'Redis', 'Vue.js'] },
    { path: 'pages/services/backend/nestjs.html', title: 'NestJS Development', icon: 'fas fa-code', color: 'primary', tech: ['TypeScript', 'GraphQL', 'Microservices', 'PostgreSQL'] },
    { path: 'pages/services/backend/expressjs.html', title: 'Express.js Development', icon: 'fab fa-node-js', color: 'success', tech: ['REST APIs', 'JWT', 'MongoDB', 'Redis'] },
    { path: 'pages/services/backend/shopify.html', title: 'Shopify Development', icon: 'fab fa-shopify', color: 'success', tech: ['Liquid', 'Shopify Plus', 'Custom Apps', 'Storefront API'] },
    { path: 'pages/services/backend/golang.html', title: 'Golang Development', icon: 'fab fa-google', color: 'info', tech: ['Gin', 'Gorilla', 'gRPC', 'Microservices'] },
    { path: 'pages/services/backend/fastify.html', title: 'Fastify Development', icon: 'fas fa-bolt', color: 'warning', tech: ['High Performance', 'Schema-based', 'TypeScript', 'Plugins'] },
    { path: 'pages/services/backend/hapijs.html', title: 'Hapi.js Development', icon: 'fas fa-server', color: 'primary', tech: ['Configuration-centric', 'Security', 'Plugins', 'Validation'] },
    { path: 'pages/services/backend/wordpress.html', title: 'WordPress Development', icon: 'fab fa-wordpress', color: 'primary', tech: ['Custom Themes', 'Plugins', 'WooCommerce', 'REST API'] },
    
    // Frontend Services
    { path: 'pages/services/frontend/reactjs.html', title: 'React.js Development', icon: 'fab fa-react', color: 'info', tech: ['Redux', 'Next.js', 'Material-UI', 'Hooks'] },
    { path: 'pages/services/frontend/angular.html', title: 'Angular Development', icon: 'fab fa-angular', color: 'danger', tech: ['TypeScript', 'RxJS', 'Angular Material', 'NgRx'] },
    { path: 'pages/services/frontend/vuejs.html', title: 'Vue.js Development', icon: 'fab fa-vuejs', color: 'success', tech: ['Vuex', 'Nuxt.js', 'Vuetify', 'Composition API'] },
    { path: 'pages/services/frontend/nextjs.html', title: 'Next.js Development', icon: 'fas fa-arrow-right', color: 'dark', tech: ['SSR/SSG', 'API Routes', 'Image Optimization', 'Vercel'] },
    { path: 'pages/services/frontend/gatsbyjs.html', title: 'Gatsby.js Development', icon: 'fas fa-rocket', color: 'purple', tech: ['GraphQL', 'Static Site', 'PWA', 'Plugins'] },
    { path: 'pages/services/frontend/html.html', title: 'HTML5 Development', icon: 'fab fa-html5', color: 'warning', tech: ['CSS3', 'JavaScript', 'Responsive', 'SEO'] },
    { path: 'pages/services/frontend/magento.html', title: 'Magento Development', icon: 'fab fa-magento', color: 'warning', tech: ['E-commerce', 'Extensions', 'Themes', 'Performance'] },
    { path: 'pages/services/frontend/extjs.html', title: 'ExtJS Development', icon: 'fas fa-window-restore', color: 'primary', tech: ['Enterprise UI', 'Data Grids', 'Charts', 'Forms'] },
    
    // Mobile Services
    { path: 'pages/services/mobile/android.html', title: 'Android App Development', icon: 'fab fa-android', color: 'success', tech: ['Kotlin', 'Java', 'Jetpack', 'Material Design'] },
    { path: 'pages/services/mobile/ios.html', title: 'iOS App Development', icon: 'fab fa-apple', color: 'dark', tech: ['Swift', 'SwiftUI', 'Objective-C', 'Core Data'] },
    { path: 'pages/services/mobile/flutter.html', title: 'Flutter Development', icon: 'fas fa-mobile-alt', color: 'info', tech: ['Dart', 'Cross-platform', 'Material Design', 'Cupertino'] },
    { path: 'pages/services/mobile/react-native.html', title: 'React Native Development', icon: 'fab fa-react', color: 'info', tech: ['JavaScript', 'Cross-platform', 'Native Modules', 'Expo'] },
    { path: 'pages/services/mobile/ionic.html', title: 'Ionic Development', icon: 'fas fa-atom', color: 'primary', tech: ['Angular/React/Vue', 'Capacitor', 'Cordova', 'PWA'] },
    { path: 'pages/services/mobile/native.html', title: 'Native App Development', icon: 'fas fa-mobile', color: 'success', tech: ['Platform-specific', 'Best Performance', 'Full Access', 'Native UI'] },
    { path: 'pages/services/mobile/pwa.html', title: 'Progressive Web Apps', icon: 'fas fa-globe', color: 'primary', tech: ['Service Workers', 'Offline-first', 'App Shell', 'Push Notifications'] },
    { path: 'pages/services/mobile/enterprise.html', title: 'Enterprise App Development', icon: 'fas fa-building', color: 'dark', tech: ['B2B Solutions', 'Security', 'Integration', 'Scalability'] },
    { path: 'pages/services/mobile/iot.html', title: 'IoT App Development', icon: 'fas fa-microchip', color: 'warning', tech: ['Sensors', 'Connectivity', 'Real-time', 'Analytics'] },
    { path: 'pages/services/mobile/wearable.html', title: 'Wearable App Development', icon: 'fas fa-watch', color: 'info', tech: ['WatchOS', 'Wear OS', 'Fitness', 'Health'] },
    { path: 'pages/services/mobile/voip.html', title: 'VOIP App Development', icon: 'fas fa-phone', color: 'success', tech: ['WebRTC', 'SIP', 'Video Calling', 'Real-time'] },
    { path: 'pages/services/mobile/cross-platform.html', title: 'Cross Platform Development', icon: 'fas fa-layer-group', color: 'primary', tech: ['Code Reuse', 'Cost-effective', 'Faster Development', 'Unified UI'] },
    
    // Advanced Services
    { path: 'pages/services/advanced/travel-tech.html', title: 'Travel Technology', icon: 'fas fa-plane', color: 'info', tech: ['Booking Systems', 'GDS Integration', 'Travel APIs', 'B2B/B2C'] },
    { path: 'pages/services/advanced/n8n-automation.html', title: 'n8n Automation', icon: 'fas fa-robot', color: 'warning', tech: ['Workflow Automation', 'Integration', 'No-code', 'Custom Nodes'] },
    { path: 'pages/services/advanced/ui-ux.html', title: 'UI/UX Design', icon: 'fas fa-paint-brush', color: 'danger', tech: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'] },
    { path: 'pages/services/advanced/ecommerce-design.html', title: 'E-commerce Design', icon: 'fas fa-shopping-cart', color: 'success', tech: ['Conversion Optimization', 'Product Pages', 'Checkout Flow', 'Mobile Commerce'] },
    { path: 'pages/services/advanced/ecommerce-dev.html', title: 'E-commerce Development', icon: 'fas fa-store', color: 'primary', tech: ['Payment Integration', 'Inventory', 'Multi-vendor', 'Analytics'] },
    { path: 'pages/services/advanced/healthcare.html', title: 'Healthcare Website', icon: 'fas fa-heartbeat', color: 'danger', tech: ['HIPAA Compliance', 'Patient Portal', 'Telemedicine', 'EHR Integration'] },
    { path: 'pages/services/advanced/mcommerce.html', title: 'mCommerce Development', icon: 'fas fa-mobile-alt', color: 'info', tech: ['Mobile Shopping', 'Payment Gateway', 'Push Notifications', 'Analytics'] },
    { path: 'pages/services/advanced/digital-marketing.html', title: 'Digital Marketing', icon: 'fas fa-bullhorn', color: 'warning', tech: ['SEO', 'SEM', 'Social Media', 'Content Marketing'] },
    { path: 'pages/services/advanced/testing.html', title: 'Software Testing', icon: 'fas fa-bug', color: 'dark', tech: ['Automation', 'Manual Testing', 'Performance', 'Security'] },
    { path: 'pages/services/advanced/devops.html', title: 'DevOps Services', icon: 'fas fa-infinity', color: 'primary', tech: ['CI/CD', 'Docker', 'Kubernetes', 'AWS/Azure'] },
    { path: 'pages/services/advanced/agile.html', title: 'Agile Development', icon: 'fas fa-sync', color: 'success', tech: ['Scrum', 'Kanban', 'Sprint Planning', 'User Stories'] },
    { path: 'pages/services/advanced/custom-software.html', title: 'Custom Software', icon: 'fas fa-cogs', color: 'info', tech: ['Tailored Solutions', 'Integration', 'Scalability', 'Support'] },
    { path: 'pages/services/advanced/crm.html', title: 'CRM Development', icon: 'fas fa-users', color: 'warning', tech: ['Customer Management', 'Sales Pipeline', 'Analytics', 'Integration'] },
    { path: 'pages/services/advanced/blockchain.html', title: 'Blockchain Development', icon: 'fas fa-link', color: 'dark', tech: ['Smart Contracts', 'DApps', 'NFTs', 'Web3'] },
    { path: 'pages/services/advanced/fullstack.html', title: 'Full Stack Development', icon: 'fas fa-layer-group', color: 'primary', tech: ['Frontend', 'Backend', 'Database', 'DevOps'] },
    { path: 'pages/services/advanced/payload-cms.html', title: 'Payload CMS Development', icon: 'fas fa-database', color: 'success', tech: ['Headless CMS', 'TypeScript', 'GraphQL', 'Admin UI'] }
];

// Template function
function generatePage(config) {
    return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.title} Services - GuideSoft Solutions</title>
    <meta name="description" content="Professional ${config.title} services with cutting-edge technology and expert developers.">
    
    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/glassmorphic.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<body>
    <!-- Theme Toggle -->
    <div class="theme-toggle">
        <button class="theme-toggle-btn active" onclick="setTheme('light')">
            <i class="fas fa-sun"></i>
        </button>
        <button class="theme-toggle-btn" onclick="setTheme('dark')">
            <i class="fas fa-moon"></i>
        </button>
    </div>

    <!-- Navigation -->
    <nav class="nav-glass fixed-top">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center py-3">
                <a href="/index.html" class="text-decoration-none">
                    <h3 class="mb-0 neon-text">GuideSoft</h3>
                </a>
                <div class="d-none d-md-flex gap-4">
                    <a href="/pages/services.html" class="text-white text-decoration-none">Services</a>
                    <a href="/pages/solutions.html" class="text-white text-decoration-none">Solutions</a>
                    <a href="/pages/contact.html" class="text-white text-decoration-none">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-glass">
        <div class="particles">
            ${Array(9).fill().map((_, i) => `<div class="particle" style="left: ${(i+1)*10}%; animation-duration: ${15+i}s;"></div>`).join('\n            ')}
        </div>
        
        <div class="glass-float"></div>
        <div class="glass-float"></div>
        <div class="glass-float"></div>
        
        <div class="morph-shape" style="width: 400px; height: 400px; top: -100px; right: -100px;"></div>
        <div class="morph-shape" style="width: 300px; height: 300px; bottom: -50px; left: -50px;"></div>
        
        <div class="container position-relative">
            <div class="row align-items-center min-vh-100">
                <div class="col-lg-6" data-aos="fade-right">
                    <div class="glass-card p-5">
                        <div class="mb-4">
                            <i class="${config.icon} fa-4x text-${config.color}"></i>
                        </div>
                        <h1 class="display-3 fw-bold mb-4 holographic">${config.title}</h1>
                        <p class="lead mb-4 text-white">
                            Expert ${config.title} services to transform your business with cutting-edge technology 
                            and innovative solutions. Build scalable, secure, and high-performance applications.
                        </p>
                        <div class="d-flex gap-3 flex-wrap">
                            <button class="btn-glass" onclick="window.location.href='/pages/contact.html'">
                                <i class="fas fa-rocket me-2"></i>Start Project
                            </button>
                            <button class="btn-glass" onclick="window.location.href='/pages/contact.html'">
                                <i class="fas fa-calendar me-2"></i>Schedule Consultation
                            </button>
                        </div>
                        
                        <div class="row mt-5">
                            <div class="col-4">
                                <h3 class="neon-text">100+</h3>
                                <p class="text-muted">Projects</p>
                            </div>
                            <div class="col-4">
                                <h3 class="neon-text">50+</h3>
                                <p class="text-muted">Clients</p>
                            </div>
                            <div class="col-4">
                                <h3 class="neon-text">5★</h3>
                                <p class="text-muted">Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6" data-aos="fade-left">
                    <div class="gradient-border p-4">
                        <img src="https://images.unsplash.com/photo-1517180102446-f3c20b9a5b58?w=600" 
                             alt="${config.title}" 
                             class="img-fluid rounded-3">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-5 position-relative animated-gradient">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="display-4 fw-bold text-white mb-3">Why Choose Our ${config.title}?</h2>
                <p class="lead text-white-50">Industry-leading expertise and proven methodologies</p>
            </div>
            
            <div class="row g-4">
                <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
                    <div class="feature-glass h-100">
                        <div class="text-center">
                            <div class="mb-4">
                                <i class="fas fa-users fa-3x text-white"></i>
                            </div>
                            <h4 class="text-white mb-3">Expert Team</h4>
                            <p class="text-muted">Certified developers with years of experience</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
                    <div class="feature-glass h-100">
                        <div class="text-center">
                            <div class="mb-4">
                                <i class="fas fa-clock fa-3x text-white"></i>
                            </div>
                            <h4 class="text-white mb-3">On-Time Delivery</h4>
                            <p class="text-muted">Projects delivered within agreed timelines</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                    <div class="feature-glass h-100">
                        <div class="text-center">
                            <div class="mb-4">
                                <i class="fas fa-chart-line fa-3x text-white"></i>
                            </div>
                            <h4 class="text-white mb-3">Scalable Solutions</h4>
                            <p class="text-muted">Built to grow with your business needs</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
                    <div class="feature-glass h-100">
                        <div class="text-center">
                            <div class="mb-4">
                                <i class="fas fa-headset fa-3x text-white"></i>
                            </div>
                            <h4 class="text-white mb-3">24/7 Support</h4>
                            <p class="text-muted">Round-the-clock technical assistance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-5 position-relative" style="background: var(--bg-dark);">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="display-4 fw-bold text-white mb-3">Technologies We Use</h2>
                <p class="lead text-white-50">Cutting-edge tools and frameworks</p>
            </div>
            
            <div class="glass-card p-5" data-aos="fade-up" data-aos-delay="200">
                <div class="row g-4 text-center">
                    ${config.tech.map((tech, i) => `
                    <div class="col-6 col-md-3">
                        <div class="p-3">
                            <div class="gradient-border d-inline-flex p-4 rounded-circle mb-3">
                                <i class="fas fa-check fa-2x text-white"></i>
                            </div>
                            <h5 class="text-white">${tech}</h5>
                        </div>
                    </div>`).join('')}
                </div>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="py-5 position-relative" style="background: var(--bg-secondary);">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="display-4 fw-bold text-white mb-3">Our Development Process</h2>
                <p class="lead text-white-50">Streamlined approach for maximum efficiency</p>
            </div>
            
            <div class="row g-4">
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                    <div class="glass-card p-4 text-center h-100">
                        <div class="gradient-border d-inline-flex p-3 rounded-circle mb-3">
                            <span class="display-4 fw-bold text-white">1</span>
                        </div>
                        <h4 class="text-white mb-3">Planning</h4>
                        <p class="text-muted">Detailed requirement analysis and project roadmap</p>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                    <div class="glass-card p-4 text-center h-100">
                        <div class="gradient-border d-inline-flex p-3 rounded-circle mb-3">
                            <span class="display-4 fw-bold text-white">2</span>
                        </div>
                        <h4 class="text-white mb-3">Design</h4>
                        <p class="text-muted">UI/UX design and technical architecture</p>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                    <div class="glass-card p-4 text-center h-100">
                        <div class="gradient-border d-inline-flex p-3 rounded-circle mb-3">
                            <span class="display-4 fw-bold text-white">3</span>
                        </div>
                        <h4 class="text-white mb-3">Development</h4>
                        <p class="text-muted">Agile development with regular updates</p>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                    <div class="glass-card p-4 text-center h-100">
                        <div class="gradient-border d-inline-flex p-3 rounded-circle mb-3">
                            <span class="display-4 fw-bold text-white">4</span>
                        </div>
                        <h4 class="text-white mb-3">Launch</h4>
                        <p class="text-muted">Deployment and post-launch support</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 position-relative" style="background: var(--bg-accent);">
        <div class="container">
            <div class="glass-card p-5 text-center" data-aos="zoom-in">
                <h2 class="display-4 fw-bold text-white mb-4">Ready to Start Your ${config.title} Project?</h2>
                <p class="lead text-white-50 mb-5">Get expert consultation and transform your ideas into reality</p>
                <div class="d-flex gap-3 justify-content-center flex-wrap">
                    <button class="btn-glass" onclick="window.location.href='/pages/contact.html'">
                        <i class="fas fa-phone me-2"></i>Call Us Now
                    </button>
                    <button class="btn-glass" onclick="window.location.href='/pages/contact.html'">
                        <i class="fas fa-envelope me-2"></i>Get Free Quote
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 text-center text-white" style="background: rgba(0,0,0,0.9);">
        <p class="mb-0">© 2025 GuideSoft Solutions. All rights reserved.</p>
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1000,
            once: true
        });

        // Theme Toggle
        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.closest('.theme-toggle-btn').classList.add('active');
            localStorage.setItem('theme', theme);
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    </script>
</body>
</html>`;
}

// Generate all pages
pages.forEach(pageConfig => {
    const filePath = path.join(__dirname, pageConfig.path);
    const dirPath = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Generate and write the page
    const pageContent = generatePage(pageConfig);
    fs.writeFileSync(filePath, pageContent);
    console.log(`Generated: ${pageConfig.path}`);
});

console.log(`\nSuccessfully generated ${pages.length} pages!`);