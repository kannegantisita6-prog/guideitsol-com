'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaArrowRight,
  FaUser,
  FaQrcode
} from 'react-icons/fa'
import AuthModal, { UserSession } from './AuthModal'
import PaymentModal from './PaymentModal'

// Crisp SVG Icons for Next.js Mega Menu
const NavIcons = {
  Server: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>
    </svg>
  ),
  Globe: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  ),
  Cloud: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  ),
  Smartphone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  ),
  Code: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Cpu: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
      <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/>
    </svg>
  ),
  CreditCard: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
  ),
  Plane: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-300">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
    </svg>
  ),
  Zap: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('guideitsol_auth_user')
      if (stored) {
        setCurrentUser(JSON.parse(stored))
      }
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Modernized Category-wise Mega Menu Data
  const megaMenus: Record<string, any> = {
    cloud: {
      category: "Cloud, VPS & Server Hosting",
      subtitle: "High-performance enterprise infrastructure, bare-metal compute, and Anycast DNS",
      badge: "Trending Infrastructure",
      columns: [
        {
          heading: "Cloud VPS & Dedicated",
          items: [
            { name: "Cloud VPS Hosting (NVMe SSD)", desc: "Root access, dedicated vCPU & RAM, 10Gbps", href: "/services", badge: "NVMe 10x", icon: NavIcons.Server },
            { name: "Dedicated Backend Servers", desc: "Bare-metal high-concurrency API compute", href: "/services", badge: "99.99% SLA", icon: NavIcons.Cpu },
            { name: "cPanel & Linux Hosting", desc: "One-click installs, LiteSpeed cache, free SSL", href: "/services", icon: NavIcons.Cloud }
          ]
        },
        {
          heading: "Domain & Anycast DNS",
          items: [
            { name: "Domain Registration & Transfer", desc: "Global TLDs (.com, .in, .ai, .io) with Whois privacy", href: "/services", badge: "Instant", icon: NavIcons.Globe },
            { name: "Anycast DNS Routing", desc: "< 15ms global resolution with DNSSEC security", href: "/services", icon: NavIcons.Zap },
            { name: "Cloudflare CDN & DDoS Shield", desc: "Edge network security, SSL hardening, WAF", href: "/services", icon: NavIcons.Globe }
          ]
        },
        {
          heading: "Multi-Cloud DevOps",
          items: [
            { name: "AWS & GCP Cloud Architecture", desc: "Terraform IaC, CI/CD automated deployments", href: "/services/cloud-devops", badge: "DevOps", icon: NavIcons.Cloud },
            { name: "Kubernetes & Docker Clusters", desc: "Microservices orchestration and auto-scaling", href: "/services/cloud-devops", icon: NavIcons.Server },
            { name: "24/7 Monitoring & Health Ops", desc: "Prometheus, Grafana, real-time alert ops", href: "/services/it-consulting", icon: NavIcons.Zap }
          ]
        }
      ],
      footerCta: {
        text: "Need high-speed Cloud VPS or Dedicated Server deployment?",
        action: "Deploy Cloud VPS Now",
        href: "/contact"
      }
    },
    apps: {
      category: "Apps & Mobile Engineering",
      subtitle: "Next-gen native and cross-platform mobile apps for iOS & Android",
      badge: "Mobile Apps Suite",
      columns: [
        {
          heading: "Mobile Frameworks",
          items: [
            { name: "iOS App Development", desc: "Swift & SwiftUI native iOS applications", href: "/app-development/ios", icon: NavIcons.Smartphone },
            { name: "Android App Development", desc: "Kotlin & Jetpack Compose Android apps", href: "/app-development/android", icon: NavIcons.Smartphone },
            { name: "React Native & Expo SDK 52", desc: "Unified single codebase for iOS and Android", href: "/services/cross-platform-development", badge: "Expo 52", icon: NavIcons.Code },
            { name: "Flutter App Solutions", desc: "High-FPS expressive UI for mobile and web", href: "/app-development/flutter", icon: NavIcons.Zap }
          ]
        },
        {
          heading: "App Categories",
          items: [
            { name: "Enterprise Mobile Apps", desc: "Field service, ERP, and CRM mobile workflows", href: "/app-development/enterprise", icon: NavIcons.Server },
            { name: "Progressive Web Apps (PWA)", desc: "Installable web apps with offline caching", href: "/app-development/pwa", badge: "Fast", icon: NavIcons.Globe },
            { name: "IoT & BLE Connected Apps", desc: "Bluetooth Low Energy and smart device sync", href: "/app-development/iot", icon: NavIcons.Cpu }
          ]
        },
        {
          heading: "On-Demand Apps",
          items: [
            { name: "Booking & Appointment Apps", desc: "Real-time calendar & scheduling engines", href: "/solutions/on-demand", icon: NavIcons.Zap },
            { name: "Food & Delivery Apps", desc: "Live GPS driver tracking and payment flows", href: "/solutions/on-demand", icon: NavIcons.Smartphone },
            { name: "Media Streaming Platforms", desc: "Low-latency video and audio broadcasts", href: "/solutions/emerging-tech", icon: NavIcons.Cloud }
          ]
        }
      ],
      footerCta: {
        text: "Looking to build a market-ready mobile or on-demand app?",
        action: "Get Mobile App Quote",
        href: "/contact"
      }
    },
    software: {
      category: "Software & Backend Engineering",
      subtitle: "Scalable backend APIs, modern web platforms, and data pipelines",
      badge: "Core Engineering",
      columns: [
        {
          heading: "Backend APIs",
          items: [
            { name: "Node.js & Express REST APIs", desc: "High-throughput asynchronous REST APIs", href: "/services/software-development", badge: "High Load", icon: NavIcons.Server },
            { name: "Python, Django & FastAPI", desc: "Data processing, ML inference & backend APIs", href: "/services/software-development", icon: NavIcons.Code },
            { name: "Microservices & GraphQL", desc: "Modular, decoupled API architectures", href: "/services/software-development", icon: NavIcons.Cpu }
          ]
        },
        {
          heading: "Frontend & Full-Stack",
          items: [
            { name: "Next.js 14 & React Full-Stack", desc: "Server-side rendering, App Router, edge speed", href: "/services/web-development", badge: "Next 14", icon: NavIcons.Code },
            { name: "UI/UX Design Systems", desc: "Figma to Tailwind high-conversion designs", href: "/services/ui-ux-design", icon: NavIcons.Zap },
            { name: "eCommerce Web Platforms", desc: "Secure multi-vendor web portals", href: "/services/ecommerce-development", icon: NavIcons.CreditCard }
          ]
        },
        {
          heading: "Database & Data",
          items: [
            { name: "PostgreSQL & MongoDB Clusters", desc: "Clustered persistence, sharding, and caching", href: "/services/data-engineering", icon: NavIcons.Server },
            { name: "Data Engineering & ETL", desc: "Snowflake, BigQuery, and pipeline ETLs", href: "/services/data-engineering", icon: NavIcons.Cpu },
            { name: "Semantic Vector Search", desc: "Vector embeddings & ELSER text retrieval", href: "/services/data-engineering", badge: "AI Ready", icon: NavIcons.Zap }
          ]
        }
      ],
      footerCta: {
        text: "Need a high-performance backend architecture or full-stack team?",
        action: "Hire Dedicated Developers",
        href: "/hire/full-stack"
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
            { name: "AI Assistant & Chatbots", desc: "Custom LLM integrations, OpenAI, RAG bots", href: "/solutions/emerging-tech", badge: "AI Ready", icon: NavIcons.Cpu },
            { name: "Semantic Search Engine", desc: "Elasticsearch vector search & Admin UI", href: "/services/data-engineering", icon: NavIcons.Server },
            { name: "Automated Lead Intake", desc: "Smart CRM intake & dynamic qualification", href: "/contact", icon: NavIcons.Zap }
          ]
        },
        {
          heading: "Workflows & Automation",
          items: [
            { name: "n8n Workflow Automation", desc: "Self-hosted orchestration & automated webhooks", href: "/solutions/trending-tech", badge: "Popular", icon: NavIcons.Zap },
            { name: "Custom CMS & Shopify Plugins", desc: "Headless CMS, WooCommerce & Shopify extensions", href: "/services/ecommerce-development", icon: NavIcons.Code },
            { name: "API Gateway Connectors", desc: "Third-party microservice integration hubs", href: "/services/software-development", icon: NavIcons.Server }
          ]
        },
        {
          heading: "Payments & Global Portals",
          items: [
            { name: "UPI & Google Pay Integration", desc: "Dynamic QR, UPI deep-linking, Razorpay, Stripe", href: "/services/ecommerce-development", badge: "Multi-Gateway", icon: NavIcons.CreditCard },
            { name: "VisaFlow Immigration Portal", desc: "26-page visa, study abroad, and travel suite", href: "/travel/b2b-portal", badge: "Live", icon: NavIcons.Plane },
            { name: "Subscription Billing Engines", desc: "Automated recurring invoices & webhooks", href: "/services/ecommerce-development", icon: NavIcons.CreditCard }
          ]
        }
      ],
      footerCta: {
        text: "Automate your business workflows and integrate instant payments.",
        action: "Explore Integrations",
        href: "/contact"
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-md shadow-2xl border-b border-cyan-500/20 py-2' 
            : 'bg-slate-950/70 backdrop-blur-sm border-b border-white/10 py-3'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 lg:h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 text-decoration-none">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
                  boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)'
                }}
              >
                <NavIcons.Zap />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold font-heading text-white tracking-tight leading-none">
                  IT & AI <span className="text-cyan-400">Consultant</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                  ENTERPRISE CLOUD & SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Category-Wise Mega Menus */}
            <nav className="hidden xl:flex items-center space-x-1">
              {/* Trigger 1: Cloud & VPS */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('cloud')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className={`flex items-center gap-1.5 py-2 px-3.5 rounded-lg text-sm font-semibold transition-all ${
                  activeMegaMenu === 'cloud' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white'
                }`}>
                  <span>Cloud & VPS</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    VPS
                  </span>
                  <FaChevronDown className={`text-xs ml-0.5 transition-transform duration-200 ${activeMegaMenu === 'cloud' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Trigger 2: Apps & Mobile */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('apps')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className={`flex items-center gap-1.5 py-2 px-3.5 rounded-lg text-sm font-semibold transition-all ${
                  activeMegaMenu === 'apps' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white'
                }`}>
                  <span>Apps & Mobile</span>
                  <FaChevronDown className={`text-xs ml-0.5 transition-transform duration-200 ${activeMegaMenu === 'apps' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Trigger 3: Software & Backend */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('software')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className={`flex items-center gap-1.5 py-2 px-3.5 rounded-lg text-sm font-semibold transition-all ${
                  activeMegaMenu === 'software' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white'
                }`}>
                  <span>Software & Backend</span>
                  <FaChevronDown className={`text-xs ml-0.5 transition-transform duration-200 ${activeMegaMenu === 'software' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Trigger 4: Plugins, Automation & AI */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('plugins')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className={`flex items-center gap-1.5 py-2 px-3.5 rounded-lg text-sm font-semibold transition-all ${
                  activeMegaMenu === 'plugins' ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white'
                }`}>
                  <span>Plugins & AI</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    n8n
                  </span>
                  <FaChevronDown className={`text-xs ml-0.5 transition-transform duration-200 ${activeMegaMenu === 'plugins' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Direct Link: VisaFlow Suite */}
              <Link 
                href="/travel/b2b-portal"
                className="py-2 px-3.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                VisaFlow Suite
              </Link>

              {/* Direct Link: Hire Developers */}
              <Link 
                href="/hire/full-stack"
                className="py-2 px-3.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Hire Developers
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Dynamic UPI & GPay Payment Trigger */}
              <button
                type="button"
                onClick={() => setIsPaymentOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <FaQrcode className="text-xs" />
                <span>Pay UPI / GPay</span>
              </button>

              {/* Dynamic Auth & Profile Trigger */}
              <button
                type="button"
                onClick={() => setIsAuthOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-200 border border-white/20 hover:border-cyan-400 hover:text-white bg-slate-900/70 transition-all"
              >
                <FaUser className="text-xs text-cyan-400" />
                <span>{currentUser ? currentUser.name : 'Sign In'}</span>
              </button>

              {/* WhatsApp Callout */}
              <a 
                href="https://wa.me/919999999999?text=Hello%20IT%20%26%20AI%20Consultant%20Team%2C%20I%20want%20to%20discuss%20Cloud%20VPS%20and%20Software%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 transition-all shadow-sm"
              >
                <span>WhatsApp</span>
              </a>

              {/* Deploy Cloud VPS CTA */}
              <Link
                href="/contact"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
              >
                <span>Deploy VPS</span>
                <FaArrowRight className="text-[10px]" />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Dynamic Mega Menu Dropdown */}
        {activeMegaMenu && megaMenus[activeMegaMenu] && (
          <div 
            className="hidden xl:block absolute w-full left-0 top-full bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl py-6"
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="container mx-auto px-6">
              {/* Top Banner */}
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="text-white font-bold text-lg mb-0">{megaMenus[activeMegaMenu].category}</h5>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                      {megaMenus[activeMegaMenu].badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mb-0">{megaMenus[activeMegaMenu].subtitle}</p>
                </div>
                <Link 
                  href="/services" 
                  className="text-cyan-400 text-xs font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Explore All Services</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {/* 3-Column Content Grid */}
              <div className="grid grid-cols-3 gap-8">
                {megaMenus[activeMegaMenu].columns.map((col: any, colIdx: number) => (
                  <div key={colIdx} className="space-y-3">
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block">
                      {col.heading}
                    </span>
                    <div className="space-y-2">
                      {col.items.map((item: any, itemIdx: number) => {
                        const Icon = item.icon
                        return (
                          <Link 
                            key={itemIdx} 
                            href={item.href}
                            className="p-3 rounded-xl flex items-start gap-3.5 transition-all hover:bg-white/5 border border-transparent hover:border-cyan-500/20 group/item"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            <div className="p-2 rounded-lg bg-slate-900 border border-white/10 group-hover/item:border-cyan-500/30 transition-colors">
                              <Icon />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-white font-semibold text-sm group-hover/item:text-cyan-300 transition-colors">
                                  {item.name}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Callout Bar */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                <span className="text-slate-300">
                  {megaMenus[activeMegaMenu].footerCta.text}
                </span>
                <Link
                  href={megaMenus[activeMegaMenu].footerCta.href}
                  className="px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold hover:bg-cyan-500/30 transition-all"
                  onClick={() => setActiveMegaMenu(null)}
                >
                  {megaMenus[activeMegaMenu].footerCta.action} →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden w-full bg-slate-950 border-t border-white/10 max-h-[85vh] overflow-y-auto shadow-2xl p-6 space-y-6">
            {/* Cloud & VPS */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm pb-1 border-b border-white/10">
                <NavIcons.Server />
                <span>Cloud, VPS & Hosting</span>
              </div>
              <div className="pl-4 space-y-2 text-xs">
                <Link href="/services" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  ⚡ Cloud VPS Hosting (NVMe SSD)
                </Link>
                <Link href="/services" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  🌐 Domain Registration & Anycast DNS
                </Link>
                <Link href="/services" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  🖥️ Dedicated Backend Servers
                </Link>
                <Link href="/services/cloud-devops" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  ☁️ Multi-Cloud & DevOps (AWS/GCP)
                </Link>
              </div>
            </div>

            {/* Apps & Mobile */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm pb-1 border-b border-white/10">
                <NavIcons.Smartphone />
                <span>Apps & Mobile</span>
              </div>
              <div className="pl-4 space-y-2 text-xs">
                <Link href="/app-development/ios" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  📱 iOS & Android Apps
                </Link>
                <Link href="/services/cross-platform-development" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  ⚛️ React Native & Expo SDK 52
                </Link>
                <Link href="/app-development/pwa" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  ⚡ Progressive Web Apps (PWA)
                </Link>
              </div>
            </div>

            {/* Software & Backend */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm pb-1 border-b border-white/10">
                <NavIcons.Code />
                <span>Software & Backend</span>
              </div>
              <div className="pl-4 space-y-2 text-xs">
                <Link href="/services/web-development" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  💻 Full-Stack Web Development
                </Link>
                <Link href="/services/software-development" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  ⚙️ Node.js & Python REST APIs
                </Link>
                <Link href="/services/data-engineering" className="block text-slate-300 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  🗄️ Database Clustering & ETL
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setIsPaymentOpen(true); setIsMobileMenuOpen(false) }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <FaQrcode />
                  <span>Pay UPI / GPay</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setIsAuthOpen(true); setIsMobileMenuOpen(false) }}
                  className="w-full py-2.5 rounded-xl bg-slate-800 border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <FaUser className="text-cyan-400" />
                  <span>{currentUser ? currentUser.name : 'Sign In'}</span>
                </button>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs text-center block shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Deploy Cloud VPS & Services →
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hello%20IT%20%26%20AI%20Consultant%20Team%2C%20I%20want%20to%20discuss%20Cloud%20VPS%20and%20Software%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full border border-emerald-500/40 text-emerald-400 font-bold text-xs text-center block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Global Dynamic Auth & Payment Modals */}
        <AuthModal 
          isOpen={isAuthOpen} 
          onClose={() => setIsAuthOpen(false)} 
          onAuthSuccess={(usr) => setCurrentUser(usr)} 
        />
        <PaymentModal 
          isOpen={isPaymentOpen} 
          onClose={() => setIsPaymentOpen(false)} 
        />
      </header>
    </>
  )
}

export default Header
