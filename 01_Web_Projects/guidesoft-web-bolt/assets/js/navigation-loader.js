/**
 * Navigation Loader and Dynamic Linking System
 * Ensures all pages are properly linked and navigation works across the entire website
 */

// Define the complete site structure with all pages
const siteStructure = {
    home: '/index.html',
    contact: '/contact.html',
    
    // Service Pages
    services: {
        main: '/pages/services.html',
        backend: {
            main: '/pages/services/backend.html',
            pages: {
                'Web App Development': '/pages/services/backend/web-app.html',
                '.NET Development': '/pages/services/backend/dotnet.html',
                'NodeJS Development': '/pages/services/backend/nodejs.html',
                'Python Development': '/pages/services/backend/python.html',
                'NestJS Development': '/pages/services/backend/nestjs.html',
                'ExpressJS Development': '/pages/services/backend/expressjs.html',
                'Laravel Development': '/pages/services/backend/laravel.html',
                'Shopify Development': '/pages/services/backend/shopify.html',
                'WordPress Development': '/pages/services/backend/wordpress.html',
                'Hapi.js Development': '/pages/services/backend/hapijs.html',
                'Fastify Development': '/pages/services/backend/fastify.html',
                'Golang Development': '/pages/services/backend/golang.html'
            }
        },
        frontend: {
            main: '/pages/services/frontend.html',
            pages: {
                'ReactJS Development': '/pages/services/frontend/reactjs.html',
                'Angular Development': '/pages/services/frontend/angular.html',
                'HTML Development': '/pages/services/frontend/html.html',
                'NextJS Development': '/pages/services/frontend/nextjs.html',
                'GatsbyJS Development': '/pages/services/frontend/gatsbyjs.html',
                'Magento Development': '/pages/services/frontend/magento.html',
                'ExtJS Development': '/pages/services/frontend/extjs.html',
                'Vue.js Development': '/pages/services/frontend/vuejs.html'
            }
        },
        mobile: {
            main: '/pages/services/mobile.html',
            pages: {
                'Android App Development': '/pages/services/mobile/android.html',
                'iOS App Development': '/pages/services/mobile/ios.html',
                'IoT App Development': '/pages/services/mobile/iot.html',
                'Native App Development': '/pages/services/mobile/native.html',
                'Flutter App Development': '/pages/services/mobile/flutter.html',
                'Ionic App Development': '/pages/services/mobile/ionic.html',
                'Enterprise App Development': '/pages/services/mobile/enterprise.html',
                'Progressive Web Apps': '/pages/services/mobile/pwa.html',
                'Wearable App Development': '/pages/services/mobile/wearable.html',
                'VOIP App Development': '/pages/services/mobile/voip.html',
                'React Native Development': '/pages/services/mobile/react-native.html',
                'Cross Platform Development': '/pages/services/mobile/cross-platform.html'
            }
        },
        advanced: {
            main: '/pages/services/advanced.html',
            pages: {
                'Travel Technology': '/pages/services/advanced/travel-tech.html',
                'n8n Automation': '/pages/services/advanced/n8n-automation.html',
                'UI/UX Design': '/pages/services/advanced/ui-ux.html',
                'eCommerce Web Design': '/pages/services/advanced/ecommerce-design.html',
                'eCommerce Development': '/pages/services/advanced/ecommerce-dev.html',
                'Healthcare Website': '/pages/services/advanced/healthcare.html',
                'mCommerce Development': '/pages/services/advanced/mcommerce.html',
                'Digital Marketing': '/pages/services/advanced/digital-marketing.html',
                'Software Testing': '/pages/services/advanced/testing.html',
                'DevOps Services': '/pages/services/advanced/devops.html',
                'Agile Development': '/pages/services/advanced/agile.html',
                'Custom Software': '/pages/services/advanced/custom-software.html',
                'CRM Development': '/pages/services/advanced/crm.html',
                'Blockchain Development': '/pages/services/advanced/blockchain.html',
                'Full Stack Development': '/pages/services/advanced/fullstack.html',
                'Payload CMS Development': '/pages/services/advanced/payload-cms.html'
            }
        }
    },
    
    // Solution Pages
    solutions: {
        main: '/pages/solutions.html',
        ondemand: {
            main: '/pages/solutions/ondemand.html',
            pages: {
                'Booking App': '/pages/solutions/ondemand/booking.html',
                'Chatbot App': '/pages/solutions/ondemand/chatbot.html',
                'Food Delivery App': '/pages/solutions/ondemand/food-delivery.html',
                'Video Streaming App': '/pages/solutions/ondemand/video-streaming.html',
                'Question Answer App': '/pages/solutions/ondemand/qa.html',
                'Scheduling App': '/pages/solutions/ondemand/scheduling.html',
                'Event Management App': '/pages/solutions/ondemand/event.html',
                'Flight Booking App': '/pages/solutions/ondemand/flight.html',
                'Video Conferencing': '/pages/solutions/ondemand/video-conferencing.html'
            }
        },
        emerging: {
            main: '/pages/solutions/emerging.html',
            pages: {
                'eLearning Solution': '/pages/solutions/emerging/elearning.html',
                'HRMS App Solution': '/pages/solutions/emerging/hrms.html',
                'BLE App Solution': '/pages/solutions/emerging/ble.html',
                'Survey App Solution': '/pages/solutions/emerging/survey.html',
                'Employee Management': '/pages/solutions/emerging/employee.html',
                'Reverse Auction App': '/pages/solutions/emerging/auction.html',
                'React Native App': '/pages/solutions/emerging/react-native-app.html',
                'AR App Development': '/pages/solutions/emerging/ar.html',
                'eCommerce App': '/pages/solutions/emerging/ecommerce-app.html'
            }
        },
        trending: {
            main: '/pages/solutions/trending.html',
            pages: {
                'Data Engineering': '/pages/solutions/trending/data-engineering.html',
                'Data Analytics': '/pages/solutions/trending/data-analytics.html',
                'Data Visualization': '/pages/solutions/trending/data-visualization.html',
                'Data Warehousing': '/pages/solutions/trending/data-warehousing.html',
                'Snowflake Solution': '/pages/solutions/trending/snowflake.html',
                'DevOps Consulting': '/pages/solutions/trending/devops-consulting.html',
                'IT Consulting': '/pages/solutions/trending/it-consulting.html',
                'IT Support': '/pages/solutions/trending/it-support.html',
                'IT Outsourcing': '/pages/solutions/trending/it-outsourcing.html',
                'Offshore Development': '/pages/solutions/trending/offshore.html'
            }
        }
    },
    
    // Travel Pages
    travel: {
        main: '/pages/travel.html',
        booking: {
            main: '/pages/travel/booking.html',
            pages: {
                'Hotel Booking Engine': '/pages/travel/booking/hotel.html',
                'Car Rental Booking': '/pages/travel/booking/car-rental.html',
                'Cruise Booking Engine': '/pages/travel/booking/cruise.html',
                'Bus Reservation': '/pages/travel/booking/bus.html',
                'Activities Booking': '/pages/travel/booking/activities.html',
                'Vacation Rental': '/pages/travel/booking/vacation.html',
                'Flight Booking Engine': '/pages/travel/booking/flight.html'
            }
        },
        portal: {
            main: '/pages/travel/portal.html',
            pages: {
                'B2B Travel Portal': '/pages/travel/portal/b2b.html',
                'B2C Travel Portal': '/pages/travel/portal/b2c.html',
                'Custom Travel Portal': '/pages/travel/portal/custom.html',
                'Hotel Extranet': '/pages/travel/portal/hotel-extranet.html',
                'B2B Flight Portal': '/pages/travel/portal/b2b-flight.html',
                'Air Ticket Portal': '/pages/travel/portal/air-ticket.html'
            }
        },
        api: {
            main: '/pages/travel/api.html',
            pages: {
                'NDC API Integration': '/pages/travel/api/ndc.html',
                'Amadeus API': '/pages/travel/api/amadeus.html',
                'Sabre API': '/pages/travel/api/sabre.html',
                'GDS Integration': '/pages/travel/api/gds.html',
                'Expedia API': '/pages/travel/api/expedia.html',
                'Payment Gateway': '/pages/travel/api/payment.html',
                'Customer Support': '/pages/travel/api/customer-support.html',
                'Flight Booking API': '/pages/travel/api/flight-booking.html'
            }
        }
    },
    
    // Hire Pages
    hire: {
        main: '/pages/hire.html',
        frontend: {
            main: '/pages/hire/frontend.html',
            pages: {
                'Hire Electron Developers': '/pages/hire/frontend/electron.html',
                'Hire ReactJS Developers': '/pages/hire/frontend/reactjs.html',
                'Hire NextJS Developers': '/pages/hire/frontend/nextjs.html',
                'Hire HTML Developers': '/pages/hire/frontend/html.html',
                'Hire Angular Developers': '/pages/hire/frontend/angular.html',
                'Hire Magento Developers': '/pages/hire/frontend/magento.html',
                'Hire GatsbyJS Developers': '/pages/hire/frontend/gatsbyjs.html',
                'Hire ExtJS Developers': '/pages/hire/frontend/extjs.html'
            }
        },
        backend: {
            main: '/pages/hire/backend.html',
            pages: {
                'Hire NodeJS Developers': '/pages/hire/backend/nodejs.html',
                'Hire Laravel Developers': '/pages/hire/backend/laravel.html',
                'Hire Python Developers': '/pages/hire/backend/python.html',
                'Hire NestJS Developers': '/pages/hire/backend/nestjs.html',
                'Hire ExpressJS Developers': '/pages/hire/backend/expressjs.html',
                'Hire .NET Developers': '/pages/hire/backend/dotnet.html',
                'Hire Hapi.js Developers': '/pages/hire/backend/hapijs.html',
                'Hire Fastify Developers': '/pages/hire/backend/fastify.html',
                'Hire Golang Developers': '/pages/hire/backend/golang.html'
            }
        },
        mobile: {
            main: '/pages/hire/mobile.html',
            pages: {
                'Hire Android Developers': '/pages/hire/mobile/android.html',
                'Hire React Native Devs': '/pages/hire/mobile/react-native.html',
                'Hire Flutter Developers': '/pages/hire/mobile/flutter.html',
                'Hire Kotlin Developers': '/pages/hire/mobile/kotlin.html',
                'Hire Swift Developers': '/pages/hire/mobile/swift.html',
                'Hire iOS Developers': '/pages/hire/mobile/ios.html'
            }
        },
        trending: {
            main: '/pages/hire/trending.html',
            pages: {
                'Hire Remote Developers': '/pages/hire/trending/remote.html',
                'Hire Dedicated Devs': '/pages/hire/trending/dedicated.html',
                'Hire Full Stack Devs': '/pages/hire/trending/fullstack.html',
                'Hire DevOps Engineers': '/pages/hire/trending/devops.html',
                'Hire QA Engineers': '/pages/hire/trending/qa.html',
                'Hire Frontend Devs': '/pages/hire/trending/frontend-dev.html',
                'Hire Payload CMS Devs': '/pages/hire/trending/payload-cms.html',
                'Hire DevOps Automation': '/pages/hire/trending/devops-automation.html',
                'Hire TypeScript Devs': '/pages/hire/trending/typescript.html'
            }
        }
    },
    
    // About Pages
    about: {
        main: '/pages/about/about.html',
        pages: {
            'About Us': '/pages/about/about.html',
            'HR Consultancy': '/pages/about/hr-consultancy.html',
            'Careers': '/pages/about/careers.html',
            'Privacy Policy': '/pages/about/privacy-policy.html',
            'Terms & Conditions': '/pages/about/terms.html',
            'Refund Policy': '/pages/about/refund-policy.html'
        }
    },
    
    // Insight Pages
    insight: {
        main: '/pages/insight.html',
        pages: {
            'Blog': '/pages/insight/blogs.html',
            'Portfolio': '/pages/insight/portfolio.html',
            'Case Studies': '/pages/insight/case-studies.html',
            'Videos': '/pages/insight/videos.html',
            'Center of Excellence': '/pages/insight/center-of-excellence.html',
            'Glossary': '/pages/insight/glossary.html'
        }
    }
};

/**
 * Generate Navigation HTML
 */
function generateNavigationHTML() {
    return `
    <!-- Main Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark nav-glass fixed-top" id="mainNavbar">
        <div class="container-fluid px-4">
            <!-- Logo -->
            <a class="navbar-brand d-flex align-items-center" href="${siteStructure.home}">
                <i class="fas fa-code-branch text-primary me-2" style="font-size: 28px;"></i>
                <span class="fw-bold fs-4 neon-text">GuideSoft <span class="text-primary">Solutions</span></span>
            </a>

            <!-- Mobile Toggle -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navigation Content -->
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mx-auto">
                    <!-- Services Mega Menu -->
                    <li class="nav-item dropdown mega-dropdown">
                        <a class="nav-link dropdown-toggle fw-medium text-white" href="#" data-bs-toggle="dropdown">
                            Services
                        </a>
                        <div class="dropdown-menu mega-menu shadow-lg">
                            <div class="container-fluid">
                                <div class="row">
                                    <!-- Backend Development -->
                                    <div class="col-lg-3 col-md-6 mb-3">
                                        <h6 class="text-primary mb-3">
                                            <i class="fas fa-server me-2"></i>Backend Development
                                        </h6>
                                        <ul class="list-unstyled">
                                            ${Object.entries(siteStructure.services.backend.pages).map(([name, path]) => 
                                                `<li><a href="${path}">${name}</a></li>`
                                            ).join('')}
                                        </ul>
                                    </div>

                                    <!-- Frontend Development -->
                                    <div class="col-lg-3 col-md-6 mb-3">
                                        <h6 class="text-primary mb-3">
                                            <i class="fas fa-laptop-code me-2"></i>Frontend Development
                                        </h6>
                                        <ul class="list-unstyled">
                                            ${Object.entries(siteStructure.services.frontend.pages).map(([name, path]) => 
                                                `<li><a href="${path}">${name}</a></li>`
                                            ).join('')}
                                        </ul>
                                    </div>

                                    <!-- Mobile App Development -->
                                    <div class="col-lg-3 col-md-6 mb-3">
                                        <h6 class="text-primary mb-3">
                                            <i class="fas fa-mobile-alt me-2"></i>Mobile App Development
                                        </h6>
                                        <ul class="list-unstyled">
                                            ${Object.entries(siteStructure.services.mobile.pages).slice(0, 6).map(([name, path]) => 
                                                `<li><a href="${path}">${name}</a></li>`
                                            ).join('')}
                                            <li><a href="${siteStructure.services.mobile.main}" class="text-primary fw-bold">View All →</a></li>
                                        </ul>
                                    </div>

                                    <!-- Advanced Services -->
                                    <div class="col-lg-3 col-md-6 mb-3">
                                        <h6 class="text-primary mb-3">
                                            <i class="fas fa-rocket me-2"></i>Advanced Services
                                        </h6>
                                        <ul class="list-unstyled">
                                            ${Object.entries(siteStructure.services.advanced.pages).slice(0, 6).map(([name, path]) => 
                                                `<li><a href="${path}">${name}</a></li>`
                                            ).join('')}
                                            <li><a href="${siteStructure.services.advanced.main}" class="text-primary fw-bold">View All →</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Solutions Mega Menu -->
                    <li class="nav-item dropdown mega-dropdown">
                        <a class="nav-link dropdown-toggle fw-medium text-white" href="#" data-bs-toggle="dropdown">
                            Solutions
                        </a>
                        <div class="dropdown-menu mega-menu shadow-lg">
                            <div class="container-fluid">
                                <div class="row">
                                    <!-- On Demand Solutions -->
                                    <div class="col-lg-4 col-md-6 mb-3">
                                        <h6 class="text-primary mb-3">
                                            <i class="fas fa-bolt me-2"></i>On Demand Solutions
                                        </h6>
                                        <ul class="list-unstyled">
                                            ${Object.entries(siteStructure.solutions.ondemand.pages).map(([name, path]) => 
                                                `<li><a href="${path}">${name}</a></li>`
                                            ).join('')}
                                        </ul>
                                    </div>

                                    <!-- Emerging Tech -->
                                    <div class="col-lg-4 col-md-6 mb-3">
                                        <h6 class="text-primary mb-3">
                                            <i class="fas fa-microchip me-2"></i>Emerging Tech
                                        </h6>
                                        <ul class="list-unstyled">
                                            ${Object.entries(siteStructure.solutions.emerging.pages).map(([name, path]) => 
                                                `<li><a href="${path}">${name}</a></li>`
                                            ).join('')}
                                        </ul>
                                    </div>

                                    <!-- Trending Technology -->
                                    <div class="col-lg-4 col-md-6 mb-3">
                                        <h6 class="text-primary mb-3">
                                            <i class="fas fa-chart-line me-2"></i>Trending Technology
                                        </h6>
                                        <ul class="list-unstyled">
                                            ${Object.entries(siteStructure.solutions.trending.pages).map(([name, path]) => 
                                                `<li><a href="${path}">${name}</a></li>`
                                            ).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Travel Menu -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fw-medium text-white" href="#" data-bs-toggle="dropdown">
                            Travel
                        </a>
                        <div class="dropdown-menu shadow">
                            <h6 class="dropdown-header">Travel Solutions</h6>
                            <a class="dropdown-item" href="${siteStructure.travel.booking.pages['Hotel Booking Engine']}">
                                <i class="fas fa-hotel me-2"></i>Hotel Booking
                            </a>
                            <a class="dropdown-item" href="${siteStructure.travel.booking.pages['Flight Booking Engine']}">
                                <i class="fas fa-plane me-2"></i>Flight Booking
                            </a>
                            <a class="dropdown-item" href="${siteStructure.travel.portal.pages['B2B Travel Portal']}">
                                <i class="fas fa-building me-2"></i>B2B Portal
                            </a>
                            <a class="dropdown-item" href="${siteStructure.travel.api.pages['GDS Integration']}">
                                <i class="fas fa-plug me-2"></i>API Integration
                            </a>
                        </div>
                    </li>

                    <!-- Hire Menu -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fw-medium text-white" href="#" data-bs-toggle="dropdown">
                            Hire Us
                        </a>
                        <div class="dropdown-menu shadow">
                            <a class="dropdown-item" href="${siteStructure.hire.frontend.pages['Hire ReactJS Developers']}">
                                <i class="fab fa-react me-2"></i>ReactJS Developers
                            </a>
                            <a class="dropdown-item" href="${siteStructure.hire.backend.pages['Hire NodeJS Developers']}">
                                <i class="fab fa-node-js me-2"></i>NodeJS Developers
                            </a>
                            <a class="dropdown-item" href="${siteStructure.hire.mobile.pages['Hire Flutter Developers']}">
                                <i class="fas fa-mobile me-2"></i>Mobile Developers
                            </a>
                            <a class="dropdown-item" href="${siteStructure.hire.trending.pages['Hire Full Stack Devs']}">
                                <i class="fas fa-layer-group me-2"></i>Full Stack Developers
                            </a>
                        </div>
                    </li>

                    <!-- About -->
                    <li class="nav-item">
                        <a class="nav-link fw-medium text-white" href="${siteStructure.about.pages['About Us']}">About</a>
                    </li>

                    <!-- Contact -->
                    <li class="nav-item">
                        <a class="nav-link fw-medium text-white" href="${siteStructure.contact}">Contact</a>
                    </li>
                </ul>

                <!-- CTA Button -->
                <div class="d-flex align-items-center">
                    <a href="${siteStructure.contact}" class="btn btn-primary btn-sm px-4 py-2">
                        <i class="fas fa-phone-alt me-2"></i>Get Free Consultation
                    </a>
                </div>
            </div>
        </div>
    </nav>`;
}

/**
 * Load Navigation on Page Load
 */
function loadNavigation() {
    // Check if navigation placeholder exists
    const navPlaceholder = document.getElementById('navigation-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = generateNavigationHTML();
        initializeNavigationEvents();
    }
    
    // Also update any existing navigation
    const existingNav = document.querySelector('#mainNavbar');
    if (existingNav && !navPlaceholder) {
        existingNav.outerHTML = generateNavigationHTML();
        initializeNavigationEvents();
    }
}

/**
 * Initialize Navigation Events
 */
function initializeNavigationEvents() {
    // Sticky navbar on scroll
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
                
                if (currentScroll > lastScroll) {
                    navbar.classList.add('nav-up');
                } else {
                    navbar.classList.remove('nav-up');
                }
            } else {
                navbar.classList.remove('scrolled');
                navbar.classList.remove('nav-up');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // Mega menu hover effects
    const megaMenus = document.querySelectorAll('.mega-dropdown');
    megaMenus.forEach(menu => {
        let timeout;
        
        menu.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
            this.classList.add('show');
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) dropdown.classList.add('show');
        });
        
        menu.addEventListener('mouseleave', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            timeout = setTimeout(() => {
                this.classList.remove('show');
                if (dropdown) dropdown.classList.remove('show');
            }, 200);
        });
    });
}

/**
 * Create quick links for homepage
 */
function createQuickLinks() {
    const quickLinksHTML = `
    <div class="quick-links-grid">
        <h3 class="text-center mb-4">Quick Access to All Pages</h3>
        <div class="row g-3">
            <div class="col-md-3">
                <div class="card glass-card p-3">
                    <h5 class="text-primary">Backend Services</h5>
                    <div class="list-group list-group-flush">
                        ${Object.entries(siteStructure.services.backend.pages).slice(0, 5).map(([name, path]) => 
                            `<a href="${path}" class="list-group-item list-group-item-action">${name}</a>`
                        ).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card glass-card p-3">
                    <h5 class="text-primary">Frontend Services</h5>
                    <div class="list-group list-group-flush">
                        ${Object.entries(siteStructure.services.frontend.pages).slice(0, 5).map(([name, path]) => 
                            `<a href="${path}" class="list-group-item list-group-item-action">${name}</a>`
                        ).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card glass-card p-3">
                    <h5 class="text-primary">Solutions</h5>
                    <div class="list-group list-group-flush">
                        ${Object.entries(siteStructure.solutions.ondemand.pages).slice(0, 5).map(([name, path]) => 
                            `<a href="${path}" class="list-group-item list-group-item-action">${name}</a>`
                        ).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card glass-card p-3">
                    <h5 class="text-primary">Hire Developers</h5>
                    <div class="list-group list-group-flush">
                        ${Object.entries(siteStructure.hire.frontend.pages).slice(0, 5).map(([name, path]) => 
                            `<a href="${path}" class="list-group-item list-group-item-action">${name}</a>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
    return quickLinksHTML;
}

/**
 * Initialize on DOM Load
 */
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation
    loadNavigation();
    
    // Add quick links to homepage if on index.html
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        const quickLinksContainer = document.getElementById('quick-links-container');
        if (quickLinksContainer) {
            quickLinksContainer.innerHTML = createQuickLinks();
        }
    }
    
    // Update any broken links
    fixBrokenLinks();
});

/**
 * Fix any broken navigation links
 */
function fixBrokenLinks() {
    // Update all navigation links that might be broken
    document.querySelectorAll('a[href^="/pages/"]').forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if link exists in our structure
        let validPath = findValidPath(href);
        if (validPath && validPath !== href) {
            link.setAttribute('href', validPath);
        }
    });
}

/**
 * Find valid path in site structure
 */
function findValidPath(path) {
    // Search through all paths in siteStructure
    const allPaths = getAllPaths(siteStructure);
    
    // Try to find exact match
    if (allPaths.includes(path)) {
        return path;
    }
    
    // Try to find similar path
    const fileName = path.split('/').pop();
    const similarPath = allPaths.find(p => p.endsWith(fileName));
    
    return similarPath || path;
}

/**
 * Get all paths from site structure
 */
function getAllPaths(obj, paths = []) {
    for (let key in obj) {
        if (typeof obj[key] === 'string' && obj[key].startsWith('/')) {
            paths.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            getAllPaths(obj[key], paths);
        }
    }
    return paths;
}

// Export for use in other scripts
window.siteNavigation = {
    structure: siteStructure,
    loadNavigation: loadNavigation,
    createQuickLinks: createQuickLinks
};