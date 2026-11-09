// Solution Pages Generator Script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Solution pages configuration
const solutions = [
    // On Demand Solutions
    { path: 'pages/solutions/ondemand/booking.html', title: 'Booking App Solution', icon: 'fas fa-calendar-check', gradient: 'bg-primary' },
    { path: 'pages/solutions/ondemand/chatbot.html', title: 'Chatbot App Solution', icon: 'fas fa-robot', gradient: 'bg-accent' },
    { path: 'pages/solutions/ondemand/food-delivery.html', title: 'Food Delivery App', icon: 'fas fa-utensils', gradient: 'bg-secondary' },
    { path: 'pages/solutions/ondemand/video-streaming.html', title: 'Video Streaming App', icon: 'fas fa-video', gradient: 'bg-dark' },
    { path: 'pages/solutions/ondemand/qa.html', title: 'Question Answer App', icon: 'fas fa-question-circle', gradient: 'bg-primary' },
    { path: 'pages/solutions/ondemand/scheduling.html', title: 'Scheduling App', icon: 'fas fa-clock', gradient: 'bg-accent' },
    { path: 'pages/solutions/ondemand/event.html', title: 'Event Management App', icon: 'fas fa-calendar-alt', gradient: 'bg-secondary' },
    { path: 'pages/solutions/ondemand/flight.html', title: 'Flight Booking App', icon: 'fas fa-plane', gradient: 'bg-dark' },
    { path: 'pages/solutions/ondemand/video-conferencing.html', title: 'Video Conferencing Solution', icon: 'fas fa-video', gradient: 'bg-primary' },
    
    // Emerging Tech Solutions
    { path: 'pages/solutions/emerging/elearning.html', title: 'eLearning Solution', icon: 'fas fa-graduation-cap', gradient: 'bg-accent' },
    { path: 'pages/solutions/emerging/hrms.html', title: 'HRMS App Solution', icon: 'fas fa-users-cog', gradient: 'bg-secondary' },
    { path: 'pages/solutions/emerging/ble.html', title: 'BLE App Solution', icon: 'fas fa-bluetooth', gradient: 'bg-dark' },
    { path: 'pages/solutions/emerging/survey.html', title: 'Survey App Solution', icon: 'fas fa-poll', gradient: 'bg-primary' },
    { path: 'pages/solutions/emerging/employee.html', title: 'Employee Management App', icon: 'fas fa-id-badge', gradient: 'bg-accent' },
    { path: 'pages/solutions/emerging/auction.html', title: 'Reverse Auction App', icon: 'fas fa-gavel', gradient: 'bg-secondary' },
    { path: 'pages/solutions/emerging/react-native-app.html', title: 'React Native App Solution', icon: 'fab fa-react', gradient: 'bg-dark' },
    { path: 'pages/solutions/emerging/ar.html', title: 'AR App Development', icon: 'fas fa-vr-cardboard', gradient: 'bg-primary' },
    { path: 'pages/solutions/emerging/ecommerce-app.html', title: 'eCommerce App Development', icon: 'fas fa-shopping-bag', gradient: 'bg-accent' },
    
    // Trending Technology
    { path: 'pages/solutions/trending/data-engineering.html', title: 'Data Engineering Solutions', icon: 'fas fa-database', gradient: 'bg-secondary' },
    { path: 'pages/solutions/trending/data-analytics.html', title: 'Data Analytics Solutions', icon: 'fas fa-chart-line', gradient: 'bg-dark' },
    { path: 'pages/solutions/trending/data-visualization.html', title: 'Data Visualization', icon: 'fas fa-chart-pie', gradient: 'bg-primary' },
    { path: 'pages/solutions/trending/data-warehousing.html', title: 'Data Warehousing', icon: 'fas fa-server', gradient: 'bg-accent' },
    { path: 'pages/solutions/trending/snowflake.html', title: 'Snowflake Solution', icon: 'fas fa-snowflake', gradient: 'bg-secondary' },
    { path: 'pages/solutions/trending/devops-consulting.html', title: 'DevOps Consulting', icon: 'fas fa-infinity', gradient: 'bg-dark' },
    { path: 'pages/solutions/trending/it-consulting.html', title: 'IT Consulting Services', icon: 'fas fa-handshake', gradient: 'bg-primary' },
    { path: 'pages/solutions/trending/it-support.html', title: 'IT Support Services', icon: 'fas fa-headset', gradient: 'bg-accent' },
    { path: 'pages/solutions/trending/it-outsourcing.html', title: 'IT Outsourcing Services', icon: 'fas fa-globe', gradient: 'bg-secondary' },
    { path: 'pages/solutions/trending/offshore.html', title: 'Offshore Development', icon: 'fas fa-ship', gradient: 'bg-dark' }
];

// Travel pages configuration
const travelPages = [
    // Travel Booking Engine
    { path: 'pages/travel/booking/hotel.html', title: 'Hotel Booking Engine', icon: 'fas fa-hotel', gradient: 'bg-primary' },
    { path: 'pages/travel/booking/car-rental.html', title: 'Car Rental Booking Engine', icon: 'fas fa-car', gradient: 'bg-accent' },
    { path: 'pages/travel/booking/cruise.html', title: 'Cruise Booking Engine', icon: 'fas fa-ship', gradient: 'bg-secondary' },
    { path: 'pages/travel/booking/bus.html', title: 'Bus Reservation System', icon: 'fas fa-bus', gradient: 'bg-dark' },
    { path: 'pages/travel/booking/activities.html', title: 'Activities Booking Solution', icon: 'fas fa-hiking', gradient: 'bg-primary' },
    { path: 'pages/travel/booking/vacation.html', title: 'Vacation Rental Management', icon: 'fas fa-umbrella-beach', gradient: 'bg-accent' },
    { path: 'pages/travel/booking/flight.html', title: 'Flight Booking Engine', icon: 'fas fa-plane-departure', gradient: 'bg-secondary' },
    
    // Travel Portal Development
    { path: 'pages/travel/portal/b2b.html', title: 'B2B Travel Portal', icon: 'fas fa-building', gradient: 'bg-dark' },
    { path: 'pages/travel/portal/b2c.html', title: 'B2C Travel Portal', icon: 'fas fa-users', gradient: 'bg-primary' },
    { path: 'pages/travel/portal/custom.html', title: 'Custom Travel Portal', icon: 'fas fa-cog', gradient: 'bg-accent' },
    { path: 'pages/travel/portal/hotel-extranet.html', title: 'Hotel Extranet', icon: 'fas fa-network-wired', gradient: 'bg-secondary' },
    { path: 'pages/travel/portal/b2b-flight.html', title: 'B2B Flight Booking Portal', icon: 'fas fa-plane', gradient: 'bg-dark' },
    { path: 'pages/travel/portal/air-ticket.html', title: 'Air Ticket Booking Portal', icon: 'fas fa-ticket-alt', gradient: 'bg-primary' },
    
    // Travel API Integration
    { path: 'pages/travel/api/ndc.html', title: 'NDC API Integration', icon: 'fas fa-plug', gradient: 'bg-accent' },
    { path: 'pages/travel/api/amadeus.html', title: 'Amadeus API Integration', icon: 'fas fa-code', gradient: 'bg-secondary' },
    { path: 'pages/travel/api/sabre.html', title: 'Sabre API Integration', icon: 'fas fa-link', gradient: 'bg-dark' },
    { path: 'pages/travel/api/gds.html', title: 'GDS Integration', icon: 'fas fa-globe', gradient: 'bg-primary' },
    { path: 'pages/travel/api/expedia.html', title: 'Expedia API Integration', icon: 'fas fa-map-marked-alt', gradient: 'bg-accent' },
    { path: 'pages/travel/api/payment.html', title: 'Payment Gateway Integration', icon: 'fas fa-credit-card', gradient: 'bg-secondary' },
    { path: 'pages/travel/api/customer-support.html', title: 'Travel Customer Support', icon: 'fas fa-headset', gradient: 'bg-dark' },
    { path: 'pages/travel/api/flight-booking.html', title: 'Flight Booking API Integration', icon: 'fas fa-plane-arrival', gradient: 'bg-primary' }
];

// Hire pages configuration
const hirePages = [
    // Frontend Developers
    { path: 'pages/hire/frontend/electron.html', title: 'Hire Electron.js Developers', icon: 'fas fa-desktop', gradient: 'bg-accent' },
    { path: 'pages/hire/frontend/reactjs.html', title: 'Hire ReactJS Developers', icon: 'fab fa-react', gradient: 'bg-secondary' },
    { path: 'pages/hire/frontend/nextjs.html', title: 'Hire NextJS Developers', icon: 'fas fa-arrow-right', gradient: 'bg-dark' },
    { path: 'pages/hire/frontend/html.html', title: 'Hire HTML Developers', icon: 'fab fa-html5', gradient: 'bg-primary' },
    { path: 'pages/hire/frontend/angular.html', title: 'Hire Angular Developers', icon: 'fab fa-angular', gradient: 'bg-accent' },
    { path: 'pages/hire/frontend/magento.html', title: 'Hire Magento Developers', icon: 'fab fa-magento', gradient: 'bg-secondary' },
    { path: 'pages/hire/frontend/gatsbyjs.html', title: 'Hire GatsbyJS Developers', icon: 'fas fa-rocket', gradient: 'bg-dark' },
    { path: 'pages/hire/frontend/extjs.html', title: 'Hire ExtJS Developers', icon: 'fas fa-window-restore', gradient: 'bg-primary' },
    
    // Backend Developers
    { path: 'pages/hire/backend/nodejs.html', title: 'Hire NodeJS Developers', icon: 'fab fa-node-js', gradient: 'bg-accent' },
    { path: 'pages/hire/backend/laravel.html', title: 'Hire Laravel Developers', icon: 'fab fa-laravel', gradient: 'bg-secondary' },
    { path: 'pages/hire/backend/python.html', title: 'Hire Python Developers', icon: 'fab fa-python', gradient: 'bg-dark' },
    { path: 'pages/hire/backend/nestjs.html', title: 'Hire NestJS Developers', icon: 'fas fa-code', gradient: 'bg-primary' },
    { path: 'pages/hire/backend/expressjs.html', title: 'Hire ExpressJS Developers', icon: 'fab fa-node', gradient: 'bg-accent' },
    { path: 'pages/hire/backend/dotnet.html', title: 'Hire .NET Developers', icon: 'fab fa-microsoft', gradient: 'bg-secondary' },
    { path: 'pages/hire/backend/hapijs.html', title: 'Hire Hapi.js Developers', icon: 'fas fa-server', gradient: 'bg-dark' },
    { path: 'pages/hire/backend/fastify.html', title: 'Hire Fastify Developers', icon: 'fas fa-bolt', gradient: 'bg-primary' },
    { path: 'pages/hire/backend/golang.html', title: 'Hire Golang Developers', icon: 'fab fa-google', gradient: 'bg-accent' },
    
    // Mobile Developers
    { path: 'pages/hire/mobile/android.html', title: 'Hire Android Developers', icon: 'fab fa-android', gradient: 'bg-secondary' },
    { path: 'pages/hire/mobile/react-native.html', title: 'Hire React Native Developers', icon: 'fab fa-react', gradient: 'bg-dark' },
    { path: 'pages/hire/mobile/flutter.html', title: 'Hire Flutter Developers', icon: 'fas fa-mobile-alt', gradient: 'bg-primary' },
    { path: 'pages/hire/mobile/kotlin.html', title: 'Hire Kotlin Developers', icon: 'fab fa-kickstarter', gradient: 'bg-accent' },
    { path: 'pages/hire/mobile/swift.html', title: 'Hire Swift Developers', icon: 'fab fa-swift', gradient: 'bg-secondary' },
    { path: 'pages/hire/mobile/ios.html', title: 'Hire iOS Developers', icon: 'fab fa-apple', gradient: 'bg-dark' },
    
    // Trending Tech Developers
    { path: 'pages/hire/trending/remote.html', title: 'Hire Remote Developers', icon: 'fas fa-laptop-house', gradient: 'bg-primary' },
    { path: 'pages/hire/trending/dedicated.html', title: 'Hire Dedicated Developers', icon: 'fas fa-user-tie', gradient: 'bg-accent' },
    { path: 'pages/hire/trending/fullstack.html', title: 'Hire Full Stack Developers', icon: 'fas fa-layer-group', gradient: 'bg-secondary' },
    { path: 'pages/hire/trending/devops.html', title: 'Hire DevOps Engineers', icon: 'fas fa-infinity', gradient: 'bg-dark' },
    { path: 'pages/hire/trending/qa.html', title: 'Hire QA Engineers', icon: 'fas fa-bug', gradient: 'bg-primary' },
    { path: 'pages/hire/trending/frontend-dev.html', title: 'Hire Frontend Developers', icon: 'fas fa-paint-brush', gradient: 'bg-accent' },
    { path: 'pages/hire/trending/payload-cms.html', title: 'Hire Payload CMS Developers', icon: 'fas fa-database', gradient: 'bg-secondary' },
    { path: 'pages/hire/trending/devops-automation.html', title: 'Hire DevOps Automation Engineers', icon: 'fas fa-robot', gradient: 'bg-dark' },
    { path: 'pages/hire/trending/typescript.html', title: 'Hire TypeScript Developers', icon: 'fas fa-code', gradient: 'bg-primary' }
];

// Template function for all pages
function generateGlassmorphicPage(config) {
    return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.title} - GuideSoft Solutions</title>
    <meta name="description" content="${config.title} - Professional IT solutions and services by GuideSoft Solutions">
    
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

    <!-- Hero Section with Glassmorphism -->
    <section class="hero-glass">
        <div class="particles">
            ${Array(12).fill().map((_, i) => `<div class="particle" style="left: ${Math.random()*100}%; animation-duration: ${15+Math.random()*10}s;"></div>`).join('\n            ')}
        </div>
        
        <div class="glass-float"></div>
        <div class="glass-float"></div>
        <div class="glass-float"></div>
        
        <div class="morph-shape" style="width: 500px; height: 500px; top: -150px; right: -150px;"></div>
        <div class="morph-shape" style="width: 400px; height: 400px; bottom: -100px; left: -100px;"></div>
        
        <div class="container position-relative">
            <div class="row align-items-center min-vh-100">
                <div class="col-lg-7" data-aos="fade-right">
                    <div class="glass-card p-5">
                        <div class="mb-4">
                            <i class="${config.icon} fa-4x holographic"></i>
                        </div>
                        <h1 class="display-2 fw-bold mb-4 neon-text">${config.title}</h1>
                        <p class="lead mb-4 text-white">
                            Transform your business with our cutting-edge ${config.title.toLowerCase()}. 
                            We deliver innovative solutions that drive growth and efficiency.
                        </p>
                        <div class="d-flex gap-3 flex-wrap">
                            <button class="btn-glass" onclick="window.location.href='/pages/contact.html'">
                                <i class="fas fa-rocket me-2"></i>Get Started
                            </button>
                            <button class="btn-glass" onclick="window.location.href='/pages/contact.html'">
                                <i class="fas fa-info-circle me-2"></i>Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5" data-aos="fade-left">
                    <div class="gradient-border p-3">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500" 
                             alt="${config.title}" 
                             class="img-fluid rounded-3">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-5 position-relative" style="background: var(--${config.gradient});">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="display-4 fw-bold text-white mb-3">Key Features</h2>
                <p class="lead text-white-50">What makes our solution stand out</p>
            </div>
            
            <div class="row g-4">
                ${Array(4).fill().map((_, i) => `
                <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="${(i+1)*100}">
                    <div class="feature-glass h-100">
                        <div class="text-center">
                            <div class="mb-4">
                                <i class="fas fa-star fa-3x text-white"></i>
                            </div>
                            <h4 class="text-white mb-3">Feature ${i+1}</h4>
                            <p class="text-muted">Advanced capabilities and innovative features</p>
                        </div>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-5 position-relative animated-gradient">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="display-4 fw-bold text-white mb-3">Benefits</h2>
                <p class="lead text-white-50">Why choose our solution</p>
            </div>
            
            <div class="glass-card p-5" data-aos="fade-up">
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <i class="fas fa-check-circle fa-2x text-success me-3"></i>
                            <div>
                                <h5 class="text-white">Cost Effective</h5>
                                <p class="text-muted">Reduce operational costs by up to 40%</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <i class="fas fa-check-circle fa-2x text-success me-3"></i>
                            <div>
                                <h5 class="text-white">Scalable</h5>
                                <p class="text-muted">Grows seamlessly with your business</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <i class="fas fa-check-circle fa-2x text-success me-3"></i>
                            <div>
                                <h5 class="text-white">Secure</h5>
                                <p class="text-muted">Enterprise-grade security standards</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <i class="fas fa-check-circle fa-2x text-success me-3"></i>
                            <div>
                                <h5 class="text-white">24/7 Support</h5>
                                <p class="text-muted">Round-the-clock technical assistance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="py-5 position-relative" style="background: var(--bg-dark);">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="display-4 fw-bold text-white mb-3">How It Works</h2>
                <p class="lead text-white-50">Simple steps to get started</p>
            </div>
            
            <div class="row g-4">
                ${Array(4).fill().map((_, i) => `
                <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${(i+1)*100}">
                    <div class="glass-card p-4 text-center h-100">
                        <div class="gradient-border d-inline-flex p-3 rounded-circle mb-3">
                            <span class="display-4 fw-bold text-white">${i+1}</span>
                        </div>
                        <h4 class="text-white mb-3">Step ${i+1}</h4>
                        <p class="text-muted">Process description and details</p>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 position-relative" style="background: var(--bg-accent);">
        <div class="container">
            <div class="glass-card p-5 text-center" data-aos="zoom-in">
                <h2 class="display-4 fw-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p class="lead text-white-50 mb-5">Let's discuss how we can help you achieve your goals</p>
                <div class="d-flex gap-3 justify-content-center flex-wrap">
                    <button class="btn-glass" onclick="window.location.href='/pages/contact.html'">
                        <i class="fas fa-phone me-2"></i>Contact Us
                    </button>
                    <button class="btn-glass" onclick="window.location.href='/pages/contact.html'">
                        <i class="fas fa-download me-2"></i>Download Brochure
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
        AOS.init({ duration: 1000, once: true });
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            document.querySelectorAll('.theme-toggle-btn').forEach(btn => btn.classList.remove('active'));
            event.target.closest('.theme-toggle-btn').classList.add('active');
        }
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    </script>
</body>
</html>`;
}

// Generate all pages
const allPages = [...solutions, ...travelPages, ...hirePages];

allPages.forEach(pageConfig => {
    const filePath = path.join(__dirname, pageConfig.path);
    const dirPath = path.dirname(filePath);
    
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const pageContent = generateGlassmorphicPage(pageConfig);
    fs.writeFileSync(filePath, pageContent);
    console.log(`Generated: ${pageConfig.path}`);
});

console.log(`\nSuccessfully generated ${allPages.length} pages!`);