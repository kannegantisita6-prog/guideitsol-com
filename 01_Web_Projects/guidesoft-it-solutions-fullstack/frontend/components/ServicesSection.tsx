'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { 
  FaCode, 
  FaLaptopCode, 
  FaPalette, 
  FaShoppingCart, 
  FaLayerGroup, 
  FaMobile,
  FaDatabase,
  FaServer,
  FaGlobe,
  FaCloud,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaQrcode
} from 'react-icons/fa'
import PaymentModal from './PaymentModal'

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Cloud VPS Hosting')
  const [selectedAmount, setSelectedAmount] = useState(999)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = ['All', 'Cloud & VPS', 'Backend & Infra', 'Apps & Mobile', 'Software & Web']

  // Comprehensive Services Catalog including Cloud, VPS, Domain, Backend Servers & DevOps
  const services = [
    {
      category: 'Cloud & VPS',
      icon: <FaServer />,
      title: "Cloud VPS Hosting",
      description: "High-performance enterprise NVMe SSD Cloud VPS with root access, automated backups, and 10Gbps burst bandwidth.",
      features: ["NVMe Gen4 Storage", "Dedicated vCPU & RAM", "Daily Automated Snapshots", "Root Access & Instant Scaling"],
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      badge: "Trending NVMe",
      href: "/contact"
    },
    {
      category: 'Cloud & VPS',
      icon: <FaGlobe />,
      title: "Domain & Anycast DNS",
      description: "Global TLD registration (.com, .in, .ai, .io), Anycast DNS routing, automated SSL, and Cloudflare DDoS shield.",
      features: ["Instant TLD Registration", "< 15ms Anycast DNS", "Automated Wildcard SSL", "DNSSEC & Whois Privacy"],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      badge: "Global Edge",
      href: "/contact"
    },
    {
      category: 'Backend & Infra',
      icon: <FaDatabase />,
      title: "Dedicated Backend Servers",
      description: "Bare-metal compute, clustered PostgreSQL/MongoDB, and low-latency Node.js/Go APIs engineered for 100K+ RPS.",
      features: ["Bare-Metal Compute", "100K+ RPS Concurrency", "Database Replication", "99.99% Guaranteed SLA"],
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-500/10",
      textColor: "text-indigo-400",
      borderColor: "border-indigo-500/30",
      badge: "High Concurrency",
      href: "/services/backend-development"
    },
    {
      category: 'Cloud & VPS',
      icon: <FaCloud />,
      title: "Multi-Cloud & DevOps Skills",
      description: "AWS, GCP, and Azure cloud infrastructure automated with Terraform, Docker containers, Kubernetes, and CI/CD pipelines.",
      features: ["AWS / GCP / Azure", "Kubernetes Auto-Scaling", "Terraform IaC Automation", "24/7 Prometheus Monitoring"],
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-500/10",
      textColor: "text-pink-400",
      borderColor: "border-pink-500/30",
      badge: "DevOps",
      href: "/services/cloud-devops"
    },
    {
      category: 'Software & Web',
      icon: <FaLaptopCode />,
      title: "Full-Stack Web Development",
      description: "Custom enterprise web applications built with Next.js 14, React, and TypeScript for optimal speed and search rankings.",
      features: ["Next.js App Router", "Server-Side Rendering (SSR)", "Fast Loading < 1s", "Enterprise Security"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      badge: "Enterprise",
      href: "/services/web-development"
    },
    {
      category: 'Apps & Mobile',
      icon: <FaMobile />,
      title: "Mobile App Engineering",
      description: "Unified cross-platform and native iOS & Android applications built with React Native and Expo SDK 52.",
      features: ["React Native & Flutter", "Offline-First Caching", "Push Notifications", "UPI & In-App Purchases"],
      color: "from-sky-500 to-cyan-600",
      bgColor: "bg-sky-500/10",
      textColor: "text-sky-400",
      borderColor: "border-sky-500/30",
      badge: "Expo 52",
      href: "/services/mobile-app-development"
    },
    {
      category: 'Software & Web',
      icon: <FaPalette />,
      title: "UI/UX Design Systems",
      description: "Modern, high-conversion user interfaces and cohesive design systems crafted with Tailwind and Figma prototypes.",
      features: ["User Journey Research", "Interactive Prototyping", "Design Tokens & Systems", "Responsive Micro-Interactions"],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      badge: "Design",
      href: "/services/ui-ux-design"
    },
    {
      category: 'Software & Web',
      icon: <FaShoppingCart />,
      title: "eCommerce & Payment Gateways",
      description: "High-volume digital commerce platforms with deep UPI intents, dynamic QR codes, Razorpay, Google Pay, and Stripe.",
      features: ["UPI Deep-Link & QR", "Razorpay & Google Pay", "Stripe Checkout Elements", "Automated Webhooks & Refunds"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-400",
      borderColor: "border-green-500/30",
      badge: "Multi-Gateway",
      href: "/services/ecommerce-development"
    }
  ]

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory)

  return (
    <section ref={ref} className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4"
          >
            <span>⚡ NEXT-GENERATION ENTERPRISE CAPABILITIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Enterprise Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">Cloud Infrastructure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base lg:text-lg"
          >
            From ultra-fast NVMe Cloud VPS and Anycast DNS to bare-metal backend APIs and native mobile apps, we engineer the core infrastructure powering modern global enterprises.
          </motion.p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div 
                className={`h-full rounded-2xl p-6 bg-slate-900/70 backdrop-blur-xl border border-white/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10`}
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center text-xs text-slate-300 gap-2">
                        <FaCheckCircle className="text-cyan-400 text-xs shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="flex items-center justify-between w-full pt-4 border-t border-white/10 gap-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-semibold group/link"
                  >
                    <span>Explore</span>
                    <FaArrowRight className="text-[10px] transform transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(service.title)
                      setSelectedAmount(service.title.includes('VPS') ? 999 : service.title.includes('Domain') ? 1499 : 9999)
                      setIsPaymentOpen(true)
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-sm transition-all hover:scale-105"
                  >
                    <FaQrcode className="text-[10px]" />
                    <span>Pay UPI</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Payment Modal */}
        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          initialService={selectedService}
          initialAmount={selectedAmount}
        />

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl p-8 bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border border-cyan-500/30 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl font-bold text-white mb-1">
              Need a Custom Cloud VPS, Dedicated Cluster or Mobile Solution?
            </h4>
            <p className="text-slate-400 text-sm mb-0">
              Our enterprise solution architects will tailor a scalable infrastructure blueprint within 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
            >
              Consult with Architect →
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hello%20IT%20%26%20AI%20Consultant%20Team%2C%20I%20want%20to%20discuss%20Cloud%20VPS%20and%20Infrastructure"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 font-semibold text-sm transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
