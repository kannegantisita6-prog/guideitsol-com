// Main JavaScript for GuideSoft Solutions Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initScrollToTop();
    initSmoothScroll();
    initAnimations();
    initContactForms();
    initSearchFunctionality();
    initLoadingStates();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.header');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
    
    // Mega menu accessibility
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            }
        });
    });
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (!scrollToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animations for cards
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('tech-category')) {
                    const cards = entry.target.parentElement.querySelectorAll('.service-card, .tech-category');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const animateElements = document.querySelectorAll('.service-card, .tech-category, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Contact form functionality
function initContactForms() {
    const contactForms = document.querySelectorAll('.contact-form, .inquiry-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (validateForm(data)) {
                submitForm(form, data);
            }
        });
    });
}

// Form validation
function validateForm(data) {
    let isValid = true;
    const errors = [];
    
    // Required fields validation
    const requiredFields = ['name', 'email', 'message'];
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(`${field} is required`);
            isValid = false;
        }
    });
    
    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (if provided)
    if (data.phone && !isValidPhone(data.phone)) {
        errors.push('Please enter a valid phone number');
        isValid = false;
    }
    
    // Display errors
    if (!isValid) {
        showNotification(errors.join('\n'), 'error');
    }
    
    return isValid;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation helper
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Form submission
function submitForm(form, data) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
        // Reset form and show success message
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        showNotification('Thank you! Your message has been sent successfully.', 'success');
    }, 2000);
}

// Search functionality
function initSearchFunctionality() {
    const searchInput = document.querySelector('.search-box input');
    const searchResults = createSearchResults();
    
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        clearTimeout(searchTimeout);
        
        if (query.length >= 2) {
            searchTimeout = setTimeout(() => {
                performSearch(query, searchResults);
            }, 300);
        } else {
            hideSearchResults(searchResults);
        }
    });
    
    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            hideSearchResults(searchResults);
        }
    });
}

// Create search results container
function createSearchResults() {
    const container = document.createElement('div');
    container.className = 'search-results';
    container.innerHTML = '<div class="search-results-content"></div>';
    
    const searchBox = document.querySelector('.search-box');
    searchBox.appendChild(container);
    
    return container;
}

// Perform search (mock implementation)
function performSearch(query, resultsContainer) {
    const mockResults = [
        { title: 'Web Development Services', url: 'services/web-development.html', type: 'Service' },
        { title: 'Mobile App Development', url: 'services/mobile-app-development.html', type: 'Service' },
        { title: 'React Native Development', url: 'services/react-native-development.html', type: 'Service' },
        { title: 'About Us', url: 'about.html', type: 'Page' },
        { title: 'Contact', url: 'contact.html', type: 'Page' }
    ];
    
    const filteredResults = mockResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    
    displaySearchResults(filteredResults, resultsContainer);
}

// Display search results
function displaySearchResults(results, container) {
    const content = container.querySelector('.search-results-content');
    
    if (results.length === 0) {
        content.innerHTML = '<div class="search-no-results">No results found</div>';
    } else {
        content.innerHTML = results.map(result => 
            `<a href="${result.url}" class="search-result-item">
                <span class="result-title">${result.title}</span>
                <span class="result-type">${result.type}</span>
            </a>`
        ).join('');
    }
    
    container.classList.add('show');
}

// Hide search results
function hideSearchResults(container) {
    container.classList.remove('show');
}

// Loading states
function initLoadingStates() {
    // Page loading
    window.addEventListener('load', function() {
        const loader = document.querySelector('.page-loading');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }
    });
    
    // Link loading states
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').endsWith('.html')) {
                showPageLoading();
            }
        });
    });
}

// Show page loading
function showPageLoading() {
    const loader = document.createElement('div');
    loader.className = 'page-loading';
    loader.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loader);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto hide after 5 seconds
    const autoHide = setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(autoHide);
        hideNotification(notification);
    });
}

// Get notification icon
function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Hide notification
function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Cookie consent (optional)
function initCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
        showCookieConsent();
    }
}

function showCookieConsent() {
    const banner = document.createElement('div');
    banner.className = 'cookie-consent';
    banner.innerHTML = `
        <div class="cookie-content">
            <p>We use cookies to enhance your browsing experience and provide personalized content.</p>
            <div class="cookie-actions">
                <button class="btn btn-primary btn-sm" onclick="acceptCookies()">Accept</button>
                <button class="btn btn-outline-primary btn-sm" onclick="declineCookies()">Decline</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.querySelector('.cookie-consent').remove();
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.querySelector('.cookie-consent').remove();
}

// Analytics (placeholder)
function trackPageView() {
    // Placeholder for analytics tracking
    console.log('Page view tracked:', window.location.pathname);
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can send error reports to your logging service here
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perf = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perf.loadEventEnd - perf.loadEventStart, 'ms');
        }, 0);
    });
}

// Export functions for global use
window.GuideSoft = {
    showNotification,
    acceptCookies,
    declineCookies,
    trackPageView
};