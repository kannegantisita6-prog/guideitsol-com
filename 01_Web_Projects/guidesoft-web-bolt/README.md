# GuideSoft Solutions - IT Solutions Company Website

A modern, responsive, multi-page website for GuideSoft Solutions - a comprehensive IT solutions company offering web development, mobile apps, cloud solutions, and digital transformation services.

## 🚀 Features

- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Mega Menu Navigation** - Complex navigation structure with categorized services
- **50+ Service Pages** - Individual pages for each service offering
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance Optimized** - Fast loading times with lazy loading and optimized assets
- **SEO Ready** - Structured data, meta tags, and semantic HTML
- **Accessibility Compliant** - WCAG 2.1 AA standards
- **Interactive Components** - Forms, calculators, carousels, and more

## 📋 Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Features Overview](#features-overview)
- [Technologies Used](#technologies-used)
- [Development](#development)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## 💻 Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Modern web browser

### Setup Instructions

1. **Clone or Download the Repository**
```bash
# If using git
git clone https://github.com/yourusername/guidesoft-solutions.git
cd guidesoft-solutions

# Or extract the downloaded ZIP file
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm start
```

The website will open automatically at `http://localhost:3000`

## 🚀 Quick Start

### Using Live Server (Recommended for Development)

```bash
# Start with live reload
npm run dev
```

### Using HTTP Server (Production-like Environment)

```bash
# Serve static files
npm run serve
```

### Build for Production

```bash
# Minify and optimize all assets
npm run build
```

## 📁 Project Structure

```
guidesoft-web-bolt/
├── assets/
│   ├── css/
│   │   └── main.css          # Main stylesheet with design system
│   ├── js/
│   │   └── main.js           # Core JavaScript functionality
│   └── images/               # Image assets
├── components/
│   ├── navigation.html       # Mega menu navigation component
│   └── footer.html           # Footer component
├── pages/
│   ├── services/
│   │   ├── backend/          # Backend development service pages
│   │   ├── frontend/         # Frontend development service pages
│   │   ├── mobile/           # Mobile app development pages
│   │   └── advanced/         # Advanced services pages
│   ├── solutions/
│   │   ├── ondemand/         # On-demand solution pages
│   │   ├── emerging/         # Emerging tech solution pages
│   │   └── trending/         # Trending technology pages
│   ├── travel/
│   │   ├── booking/          # Travel booking engine pages
│   │   ├── portal/           # Travel portal development pages
│   │   └── api/              # Travel API integration pages
│   ├── hire/
│   │   ├── frontend/         # Hire frontend developer pages
│   │   ├── backend/          # Hire backend developer pages
│   │   ├── mobile/           # Hire mobile developer pages
│   │   └── trending/         # Hire trending tech developer pages
│   ├── about/                # About company pages
│   └── insight/              # Blog, portfolio, case studies
├── index.html                # Homepage
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## ✨ Features Overview

### Navigation Structure

#### 1. **Services** (Mega Menu)
- **Backend Development**: Node.js, Python, .NET, Laravel, etc.
- **Frontend Development**: React, Angular, Vue.js, Next.js, etc.
- **Mobile App Development**: iOS, Android, Flutter, React Native
- **Advanced Services**: DevOps, Blockchain, AI/ML, Cloud Solutions

#### 2. **Solutions** (Mega Menu)
- **On-Demand Solutions**: Booking, Food Delivery, Video Streaming
- **Emerging Tech**: AR/VR, IoT, eLearning, HRMS
- **Trending Technology**: Data Engineering, Analytics, DevOps

#### 3. **Travel** (Mega Menu)
- **Travel Booking Engine**: Hotel, Flight, Car Rental systems
- **Travel Portal Development**: B2B/B2C portals
- **API Integration**: GDS, Amadeus, Sabre integration

#### 4. **Hire Us** (Mega Menu)
- **Frontend Developers**: React, Angular, Vue.js specialists
- **Backend Developers**: Node.js, Python, .NET experts
- **Mobile Developers**: iOS, Android, Flutter developers
- **Trending Tech**: Full Stack, DevOps, Cloud engineers

#### 5. **About**
- Company Information
- Careers
- HR Consultancy
- Legal Pages

#### 6. **Insights**
- Blog
- Portfolio
- Case Studies
- Videos

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript ES6+** - Interactive functionality
- **Bootstrap 5** - Responsive framework
- **Font Awesome 6** - Icon library
- **AOS Library** - Animation on scroll

### Design System
- **Colors**:
  - Primary: `#0066CC` (Blue)
  - Secondary: `#10b981` (Green)
  - Accent: `#f59e0b` (Orange)
- **Typography**: Inter font family
- **Spacing**: 8px based system
- **Shadows**: Multiple depth levels

## 💾 Development

### Available Scripts

```bash
# Start development server
npm start

# Start with live reload
npm run dev

# Format code
npm run format

# Lint CSS
npm run lint:css

# Lint JavaScript
npm run lint:js

# Validate HTML
npm run validate:html

# Build for production
npm run build
```

### Adding New Pages

1. Create HTML file in appropriate directory
2. Include navigation and footer components
3. Link to main CSS and JS files
4. Update navigation menu if needed

Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title - GuideSoft Solutions</title>
    <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
    <div id="navigation-placeholder"></div>
    
    <!-- Page content here -->
    
    <div id="footer-placeholder"></div>
    
    <script src="/assets/js/main.js"></script>
    <script>
        // Load components
        fetch('/components/navigation.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navigation-placeholder').innerHTML = data;
            });
    </script>
</body>
</html>
```

## 🚢 Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

### Traditional Web Server (Apache, Nginx)

1. Upload all files to your web server
2. Configure server for HTML5 routing if needed
3. Enable gzip compression for better performance

### Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

Build and run:
```bash
docker build -t guidesoft-website .
docker run -p 80:80 guidesoft-website
```

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Opera (latest version)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**GuideSoft Solutions**
- Website: [www.guidesoft.com](https://www.guidesoft.com)
- Email: info@guidesoft.com
- Phone: +1 (234) 567-890

## 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- Font Awesome for the icon library
- Unsplash for placeholder images
- AOS library for scroll animations

---

**Note**: This is a demonstration website template. Replace placeholder content, images, and contact information with actual company details before deployment.

## 🔧 Troubleshooting

### Common Issues

**Issue: Components not loading**
- Ensure you're running the site through a web server (not file://)
- Check browser console for CORS errors

**Issue: Styles not applying**
- Clear browser cache
- Check file paths in HTML files

**Issue: JavaScript errors**
- Ensure Bootstrap JS is loaded before custom JS
- Check for jQuery conflicts (Bootstrap 5 doesn't require jQuery)

**Issue: Responsive layout broken**
- Check viewport meta tag in HTML head
- Verify Bootstrap CSS is loaded correctly

For more help, please open an issue on GitHub or contact support.