import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';

// Lightweight, crisp inline SVG icons for instant render with 0 layout shift
const SvgIcons = {
  Cloud: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  ),
  Server: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  ),
  Smartphone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  ),
  Cpu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
      <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
    </svg>
  ),
  Code: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Shield: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    </svg>
  ),
  Layers: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5"/><path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5"/>
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  CreditCard: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
      <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
  ),
  Terminal: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
      <polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>
    </svg>
  ),
  Plane: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-300">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
    </svg>
  )
};

const HeaderEnhanced = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'cloud' | 'apps' | 'software' | 'plugins' | null

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Category-wise simplified mega menu definitions
  const megaMenuData = {
    cloud: {
      category: "Cloud, VPS & Servers",
      subtitle: "High-performance enterprise hosting, dedicated compute, and Anycast DNS",
      badge: "Trending Infrastructure",
      columns: [
        {
          heading: "Cloud VPS & Dedicated",
          items: [
            { title: "Cloud VPS Hosting", desc: "Ultra-fast NVMe SSD, Root Access, Dedicated IP", path: "/cloud-vps-hosting", icon: SvgIcons.Server, badge: "NVMe 10x" },
            { title: "Dedicated Backend Servers", desc: "Bare-metal high-concurrency API compute", path: "/dedicated-backend-servers", icon: SvgIcons.Terminal, badge: "99.99% SLA" },
            { title: "cPanel & Linux Web Hosting", desc: "One-click installs, LiteSpeed cache, free SSL", path: "/cpanel-hosting", icon: SvgIcons.Layers }
          ]
        },
        {
          heading: "Domain & DNS Management",
          items: [
            { title: "Domain Registration & Transfer", desc: "Global TLDs (.com, .in, .ai, .io) with Whois privacy", path: "/domain-dns-management", icon: SvgIcons.Globe, badge: "Instant" },
            { title: "Anycast DNS & Routing", desc: "< 15ms global DNS resolution, DNSSEC security", path: "/domain-dns-management", icon: SvgIcons.Zap },
            { title: "Cloudflare CDN & DDoS Shield", desc: "Edge network security, SSL hardening, WAF", path: "/advanced-essential-services", icon: SvgIcons.Shield }
          ]
        },
        {
          heading: "Cloud DevOps & Architecture",
          items: [
            { title: "Multi-Cloud DevOps (AWS/GCP)", desc: "Terraform IaC, CI/CD pipelines, containerization", path: "/devops-consulting", icon: SvgIcons.Cloud, badge: "Enterprise" },
            { title: "Kubernetes & Docker Clusters", desc: "Microservices orchestration and auto-scaling", path: "/devops-consulting", icon: SvgIcons.Cpu },
            { title: "24/7 Cloud Monitoring", desc: "Prometheus, Grafana, real-time alert ops", path: "/it-support-services", icon: SvgIcons.Layers }
          ]
        }
      ],
      footerCta: {
        text: "Need high-speed Cloud VPS or Dedicated Server deployment?",
        action: "Talk to Cloud Architects",
        link: "/contact"
      }
    },
    apps: {
      category: "Apps & Mobile Development",
      subtitle: "Next-gen native and cross-platform mobile apps for iOS & Android",
      badge: "Mobile Apps Suite",
      columns: [
        {
          heading: "Mobile Frameworks",
          items: [
            { title: "iOS App Development", desc: "Swift & SwiftUI native iOS applications", path: "/ios-app-development", icon: SvgIcons.Smartphone },
            { title: "Android App Development", desc: "Kotlin & Jetpack Compose Android apps", path: "/android-app-development", icon: SvgIcons.Smartphone },
            { title: "React Native & Expo", desc: "Unified single codebase for iOS and Android", path: "/react-native-app-solution", icon: SvgIcons.Code, badge: "SDK 52" },
            { title: "Flutter App Solutions", desc: "High-FPS expressive UI for mobile and web", path: "/flutter-app-development", icon: SvgIcons.Zap }
          ]
        },
        {
          heading: "App Categories",
          items: [
            { title: "Enterprise Mobile Apps", desc: "Field service, ERP, and CRM mobile workflows", path: "/enterprise-app-development", icon: SvgIcons.Layers },
            { title: "Progressive Web Apps (PWA)", desc: "Installable web apps with offline caching", path: "/progressive-web-apps", icon: SvgIcons.Globe, badge: "Fast" },
            { title: "IoT & BLE Connected Apps", desc: "Bluetooth Low Energy and smart device sync", path: "/ble-app-solution", icon: SvgIcons.Cpu },
            { title: "AR Augmented Reality Apps", desc: "Immersive 3D interactive applications", path: "/ar-app-development", icon: SvgIcons.Layers }
          ]
        },
        {
          heading: "On-Demand App Models",
          items: [
            { title: "Booking & Reservation Apps", desc: "Real-time calendar & appointment scheduling", path: "/booking-app", icon: SvgIcons.Zap },
            { title: "Food & Delivery Apps", desc: "Live GPS driver tracking and payment flows", path: "/food-delivery-app", icon: SvgIcons.Smartphone },
            { title: "Streaming & Media Platforms", desc: "Low-latency video and audio broadcasts", path: "/video-streaming-app", icon: SvgIcons.Layers }
          ]
        }
      ],
      footerCta: {
        text: "Looking to build a market-ready mobile or on-demand app?",
        action: "Get App Estimate",
        link: "/contact"
      }
    },
    software: {
      category: "Software & Backend Engineering",
      subtitle: "Scalable backend APIs, modern web platforms, and data pipelines",
      badge: "Core Engineering",
      columns: [
        {
          heading: "Backend Technologies",
          items: [
            { title: "Node.js & Express / NestJS", desc: "High-throughput asynchronous REST APIs", path: "/nodejs-development", icon: SvgIcons.Server, badge: "High Load" },
            { title: "Python & Django / FastAPI", desc: "Data processing, ML inference & backend APIs", path: "/python-development", icon: SvgIcons.Terminal },
            { title: ".NET & Enterprise C#", desc: "Robust corporate backend architectures", path: "/net-development", icon: SvgIcons.Code },
            { title: "Microservices & GraphQL", desc: "Modular, decoupled API architectures", path: "/backend-development", icon: SvgIcons.Layers }
          ]
        },
        {
          heading: "Frontend & Full-Stack",
          items: [
            { title: "Next.js & React Full-Stack", desc: "Server-side rendering, App Router, edge speed", path: "/nextjs-development", icon: SvgIcons.Code, badge: "Next 14/15" },
            { title: "Angular Enterprise Apps", desc: "Strictly typed large-scale SPA interfaces", path: "/angular-development", icon: SvgIcons.Layers },
            { title: "UI/UX Design Systems", desc: "Figma to Tailwind high-conversion designs", path: "/uiux-design-development", icon: SvgIcons.Zap }
          ]
        },
        {
          heading: "Data & Database",
          items: [
            { title: "PostgreSQL & MongoDB Clusters", desc: "Clustered persistence, sharding, and caching", path: "/data-engineering", icon: SvgIcons.Server },
            { title: "Data Analytics & Warehousing", desc: "Snowflake, BigQuery, and pipeline ETLs", path: "/data-warehousing", icon: SvgIcons.Cpu },
            { title: "Semantic Knowledge Search", desc: "Vector embeddings & ELSER text retrieval", path: "/data-analytics", icon: SvgIcons.Zap }
          ]
        }
      ],
      footerCta: {
        text: "Need a high-performance backend architecture or full-stack team?",
        action: "Hire Developers",
        link: "/hire/full-stack"
      }
    },
    plugins: {
      category: "Plugins, Automation & AI",
      subtitle: "Workflow automation, payment gateways, and custom integrations",
      badge: "Automations & Tools",
      columns: [
        {
          heading: "AI & Smart Bots",
          items: [
            { title: "AI Assistant & Chatbots", desc: "Custom LLM integrations, OpenAI, RAG bots", path: "/chatbot-app", icon: SvgIcons.Cpu, badge: "AI Ready" },
            { title: "Semantic Search Engine", desc: "Elasticsearch vector search & Admin UI", path: "/data-analytics", icon: SvgIcons.Terminal },
            { title: "Automated Lead Intake", desc: "Smart CRM intake & dynamic qualification", path: "/contact", icon: SvgIcons.Zap }
          ]
        },
        {
          heading: "Workflows & Automation",
          items: [
            { title: "n8n Workflow Automation", desc: "Self-hosted orchestration & automated webhooks", path: "/n8n-automation-experts", icon: SvgIcons.Zap, badge: "Popular" },
            { title: "Custom CMS & Shopify Plugins", desc: "Headless CMS, WooCommerce & Shopify extensions", path: "/shopify-development", icon: SvgIcons.Layers },
            { title: "API Gateway Connectors", desc: "Third-party microservice integration hubs", path: "/backend-development", icon: SvgIcons.Code }
          ]
        },
        {
          heading: "Payments & Global Portals",
          items: [
            { title: "UPI & Google Pay Integration", desc: "Dynamic QR, UPI deep-linking, Razorpay, Stripe", path: "/ecommerce-web-development", icon: SvgIcons.CreditCard, badge: "Multi-Gateway" },
            { title: "VisaFlow Immigration Portal", desc: "26-page visa, study abroad, and travel suite", path: "/travel-technology", icon: SvgIcons.Plane, badge: "Live" },
            { title: "Subscription Billing Engines", desc: "Automated recurring invoices & webhooks", path: "/ecommerce-web-development", icon: SvgIcons.CreditCard }
          ]
        }
      ],
      footerCta: {
        text: "Automate your business workflows and integrate instant payments.",
        action: "Explore Integrations",
        link: "/contact"
      }
    }
  };

  return (
    <>
      <Navbar 
        expand="xl" 
        fixed="top" 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl py-2' 
            : 'bg-slate-950/70 backdrop-blur-sm border-b border-white/10 py-3'
        }`}
        style={{ zIndex: 1050 }}
      >
        <Container fluid className="px-3 px-lg-5">
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-decoration-none">
            <div 
              className="me-2 rounded-xl d-flex align-items-center justify-content-center shadow-lg"
              style={{
                width: '42px',
                height: '42px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)'
              }}
            >
              <SvgIcons.Zap />
            </div>
            <div className="d-flex flex-column">
              <span className="fw-extrabold fs-4 text-white tracking-tight lh-1">
                IT & AI <span style={{ color: '#38bdf8' }}>Consultant</span>
              </span>
              <span className="text-slate-400 font-monospace" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
                ENTERPRISE CLOUD & SOLUTIONS
              </span>
            </div>
          </Navbar.Brand>

          {/* Desktop Nav Items */}
          <div className="d-none d-xl-flex align-items-center gap-1 mx-auto">
            {/* Mega Menu Trigger 1: Cloud & VPS */}
            <div 
              className="position-relative"
              onMouseEnter={() => setActiveMegaMenu('cloud')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                className={`btn btn-link text-decoration-none px-3 py-2 rounded-lg d-flex align-items-center gap-1 fw-semibold transition-all ${
                  activeMegaMenu === 'cloud' ? 'text-cyan-400 bg-white/5' : 'text-slate-200 hover:text-white'
                }`}
                style={{ fontSize: '15px' }}
              >
                <span>Cloud & VPS</span>
                <span className="badge bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 ms-1 px-1.5 py-0.5 rounded-pill" style={{ fontSize: '10px' }}>
                  VPS
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`ms-1 transition-transform ${activeMegaMenu === 'cloud' ? 'rotate-180' : ''}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>

            {/* Mega Menu Trigger 2: Apps & Mobile */}
            <div 
              className="position-relative"
              onMouseEnter={() => setActiveMegaMenu('apps')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                className={`btn btn-link text-decoration-none px-3 py-2 rounded-lg d-flex align-items-center gap-1 fw-semibold transition-all ${
                  activeMegaMenu === 'apps' ? 'text-cyan-400 bg-white/5' : 'text-slate-200 hover:text-white'
                }`}
                style={{ fontSize: '15px' }}
              >
                <span>Apps & Mobile</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`ms-1 transition-transform ${activeMegaMenu === 'apps' ? 'rotate-180' : ''}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>

            {/* Mega Menu Trigger 3: Software & Backend */}
            <div 
              className="position-relative"
              onMouseEnter={() => setActiveMegaMenu('software')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                className={`btn btn-link text-decoration-none px-3 py-2 rounded-lg d-flex align-items-center gap-1 fw-semibold transition-all ${
                  activeMegaMenu === 'software' ? 'text-cyan-400 bg-white/5' : 'text-slate-200 hover:text-white'
                }`}
                style={{ fontSize: '15px' }}
              >
                <span>Software & Backend</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`ms-1 transition-transform ${activeMegaMenu === 'software' ? 'rotate-180' : ''}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>

            {/* Mega Menu Trigger 4: Plugins, Automation & AI */}
            <div 
              className="position-relative"
              onMouseEnter={() => setActiveMegaMenu('plugins')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                className={`btn btn-link text-decoration-none px-3 py-2 rounded-lg d-flex align-items-center gap-1 fw-semibold transition-all ${
                  activeMegaMenu === 'plugins' ? 'text-cyan-400 bg-white/5' : 'text-slate-200 hover:text-white'
                }`}
                style={{ fontSize: '15px' }}
              >
                <span>Plugins & AI</span>
                <span className="badge bg-purple-500/20 text-purple-300 border border-purple-500/30 ms-1 px-1.5 py-0.5 rounded-pill" style={{ fontSize: '10px' }}>
                  n8n
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`ms-1 transition-transform ${activeMegaMenu === 'plugins' ? 'rotate-180' : ''}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>

            {/* Standard Nav: VisaFlow Suite */}
            <Link 
              to="/travel-technology" 
              className="btn btn-link text-decoration-none px-3 py-2 rounded-lg text-slate-200 hover:text-white fw-semibold"
              style={{ fontSize: '15px' }}
            >
              VisaFlow Suite
            </Link>

            {/* Standard Nav: About & Contact */}
            <Link 
              to="/about" 
              className="btn btn-link text-decoration-none px-3 py-2 rounded-lg text-slate-200 hover:text-white fw-semibold"
              style={{ fontSize: '15px' }}
            >
              About
            </Link>
          </div>

          {/* Right Action Controls */}
          <div className="d-flex align-items-center gap-2">
            {/* Direct WhatsApp Callout */}
            <a 
              href="https://wa.me/919999999999?text=Hello%20IT%20%26%20AI%20Consultant%20Team%2C%20I%20want%20to%20discuss%20Cloud%20VPS%20and%20Software%20Services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm d-none d-md-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-semibold text-white border-0 shadow-sm"
              style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.085-1.802-.401-1.425-.595-2.34-2.025-2.411-2.119-.071-.094-.575-.765-.575-1.46 0-.695.362-1.036.491-1.178.13-.142.283-.178.377-.178.094 0 .188.001.27.006.087.005.203-.033.317.241.118.283.402.98.437 1.051.035.071.059.153.012.247-.047.094-.071.153-.142.235-.071.082-.149.183-.213.245-.071.071-.144.148-.062.289.082.141.364.601.782.973.539.48 1.006.634 1.148.705.142.071.224.059.306-.035.082-.094.353-.412.448-.553.094-.141.189-.118.318-.071.13.047.825.389.966.46.142.071.236.106.271.165.035.059.035.344-.109.749z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Cloud VPS / Contact CTA */}
            <Button 
              as={Link} 
              to="/contact" 
              size="sm"
              className="d-none d-sm-inline-flex align-items-center gap-1.5 px-3 py-2 rounded-pill fw-bold text-white border-0 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                boxShadow: '0 4px 15px rgba(2, 132, 199, 0.35)'
              }}
            >
              <span>Deploy Cloud VPS</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="btn btn-link text-white d-xl-none p-2 rounded-lg hover:bg-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </Container>

        {/* Desktop Dynamic Mega Menu Dropdown */}
        {activeMegaMenu && megaMenuData[activeMegaMenu] && (
          <div 
            className="d-none d-xl-block position-absolute w-100 start-0 top-100"
            style={{
              background: 'rgba(3, 7, 18, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(56, 189, 248, 0.25)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
            }}
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <Container className="py-4">
              {/* Mega Menu Top Category Header */}
              <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-white/10">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <h5 className="text-white fw-bold mb-0">{megaMenuData[activeMegaMenu].category}</h5>
                    <span className="badge bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-pill px-2 py-0.5" style={{ fontSize: '11px' }}>
                      {megaMenuData[activeMegaMenu].badge}
                    </span>
                  </div>
                  <p className="text-slate-400 small mb-0">{megaMenuData[activeMegaMenu].subtitle}</p>
                </div>
                <Link 
                  to="/services" 
                  className="text-cyan-400 small fw-semibold text-decoration-none d-flex align-items-center gap-1 hover:underline"
                >
                  <span>View All Solutions</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </Link>
              </div>

              {/* Mega Menu 3-Column Grid */}
              <div className="row g-4">
                {megaMenuData[activeMegaMenu].columns.map((col, colIdx) => (
                  <div key={colIdx} className="col-4">
                    <div className="text-uppercase text-slate-400 fw-bold mb-3 tracking-wider" style={{ fontSize: '12px' }}>
                      {col.heading}
                    </div>
                    <div className="d-flex flex-column gap-2">
                      {col.items.map((item, itemIdx) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            key={itemIdx} 
                            to={item.path}
                            className="p-2.5 rounded-xl text-decoration-none d-flex align-items-start gap-3 transition-all hover:bg-white/5 border border-transparent hover:border-cyan-500/20"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            <div className="p-2 rounded-lg bg-slate-900 border border-white/10 mt-0.5">
                              <Icon />
                            </div>
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center gap-2">
                                <span className="text-white fw-semibold" style={{ fontSize: '14px' }}>
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="badge bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-pill px-1.5 py-0.2" style={{ fontSize: '9px' }}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-slate-400 small mb-0 mt-0.5 line-clamp-1" style={{ fontSize: '12px' }}>
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mega Menu Bottom Callout Banner */}
              <div className="mt-4 pt-3 border-top border-white/10 d-flex justify-content-between align-items-center">
                <span className="text-slate-300 small">
                  {megaMenuData[activeMegaMenu].footerCta.text}
                </span>
                <Link 
                  to={megaMenuData[activeMegaMenu].footerCta.link}
                  className="btn btn-sm btn-outline-info rounded-pill px-3 py-1 fw-semibold"
                  onClick={() => setActiveMegaMenu(null)}
                >
                  {megaMenuData[activeMegaMenu].footerCta.action} →
                </Link>
              </div>
            </Container>
          </div>
        )}

        {/* Mobile Slide-Out Drawer */}
        {mobileMenuOpen && (
          <div 
            className="d-xl-none w-100 position-absolute start-0 top-100 border-top border-white/10"
            style={{
              background: '#030712',
              maxHeight: '85vh',
              overflowY: 'auto',
              boxShadow: '0 20px 30px rgba(0,0,0,0.8)'
            }}
          >
            <div className="p-4 d-flex flex-column gap-3">
              {/* Category 1: Cloud & VPS */}
              <div>
                <div className="d-flex align-items-center gap-2 text-cyan-400 fw-bold mb-2 pb-1 border-bottom border-white/10">
                  <SvgIcons.Cloud />
                  <span>Cloud, VPS & Servers</span>
                </div>
                <div className="d-flex flex-column gap-1 ms-2">
                  <Link to="/cloud-vps-hosting" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    ⚡ Cloud VPS Hosting (NVMe SSD)
                  </Link>
                  <Link to="/domain-dns-management" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    🌐 Domain Registration & Anycast DNS
                  </Link>
                  <Link to="/dedicated-backend-servers" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    🖥️ Dedicated Backend Servers
                  </Link>
                  <Link to="/devops-consulting" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    ☁️ Multi-Cloud & DevOps (AWS/GCP)
                  </Link>
                </div>
              </div>

              {/* Category 2: Apps & Mobile */}
              <div>
                <div className="d-flex align-items-center gap-2 text-sky-400 fw-bold mb-2 pb-1 border-bottom border-white/10">
                  <SvgIcons.Smartphone />
                  <span>Apps & Mobile</span>
                </div>
                <div className="d-flex flex-column gap-1 ms-2">
                  <Link to="/mobile-app-development" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    📱 iOS & Android Mobile Apps
                  </Link>
                  <Link to="/react-native-app-solution" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    ⚛️ React Native & Expo Solutions
                  </Link>
                  <Link to="/progressive-web-apps" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    ⚡ Progressive Web Apps (PWA)
                  </Link>
                  <Link to="/enterprise-app-development" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    🏢 Enterprise App Solutions
                  </Link>
                </div>
              </div>

              {/* Category 3: Software & Backend */}
              <div>
                <div className="d-flex align-items-center gap-2 text-indigo-400 fw-bold mb-2 pb-1 border-bottom border-white/10">
                  <SvgIcons.Code />
                  <span>Software & Backend</span>
                </div>
                <div className="d-flex flex-column gap-1 ms-2">
                  <Link to="/web-app-development" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    💻 Full-Stack Web Development
                  </Link>
                  <Link to="/nodejs-development" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    ⚙️ Node.js & Express REST APIs
                  </Link>
                  <Link to="/python-development" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    🐍 Python, FastAPI & Data Pipelines
                  </Link>
                  <Link to="/data-engineering" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    🗄️ Database Clustering & Sharding
                  </Link>
                </div>
              </div>

              {/* Category 4: Plugins, Automation & AI */}
              <div>
                <div className="d-flex align-items-center gap-2 text-purple-400 fw-bold mb-2 pb-1 border-bottom border-white/10">
                  <SvgIcons.Cpu />
                  <span>Plugins, Automation & AI</span>
                </div>
                <div className="d-flex flex-column gap-1 ms-2">
                  <Link to="/chatbot-app" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    🤖 AI Assistant & Chatbots
                  </Link>
                  <Link to="/n8n-automation-experts" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    ⚡ n8n Workflow Automation
                  </Link>
                  <Link to="/ecommerce-web-development" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    💳 UPI, Google Pay & Stripe Gateways
                  </Link>
                  <Link to="/travel-technology" className="text-slate-300 py-1.5 text-decoration-none small" onClick={() => setMobileMenuOpen(false)}>
                    ✈️ VisaFlow 26-Page Suite
                  </Link>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="pt-3 border-top border-white/10 d-flex flex-column gap-2">
                <Button 
                  as={Link} 
                  to="/contact" 
                  className="w-100 py-2.5 rounded-pill fw-bold text-white border-0 shadow"
                  style={{ background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Deploy Cloud VPS & Services →
                </Button>
                <a 
                  href="https://wa.me/919999999999?text=Hello%20IT%20%26%20AI%20Consultant%20Team%2C%20I%20want%20to%20discuss%20Cloud%20VPS%20and%20Software%20Services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success w-100 py-2.5 rounded-pill fw-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </Navbar>
    </>
  );
};

export default HeaderEnhanced;
