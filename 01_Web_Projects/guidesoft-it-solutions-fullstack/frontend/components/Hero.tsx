'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaArrowRight, 
  FaPlay, 
  FaCode, 
  FaMobile, 
  FaCloud,
  FaRocket,
  FaUsers,
  FaCheckCircle,
  FaLightbulb,
  FaServer,
  FaGlobe,
  FaDatabase,
  FaShieldAlt
} from 'react-icons/fa'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)

  // Rotating services text
  const heroTexts = [
    "NVMe Cloud VPS Hosting",
    "Domain & Anycast DNS",
    "Dedicated Backend Servers",
    "iOS & Android Mobile Apps",
    "Multi-Cloud DevOps & IaC"
  ]

  // Auto-rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [heroTexts.length])

  // Key stats
  const stats = [
    { number: "99.998%", label: "Cloud VPS Uptime", icon: <FaServer className="text-cyan-400" /> },
    { number: "< 15ms", label: "Anycast DNS Latency", icon: <FaGlobe className="text-emerald-400" /> },
    { number: "500+", label: "Projects Delivered", icon: <FaCode className="text-indigo-400" /> },
    { number: "24/7", label: "SLA Support", icon: <FaShieldAlt className="text-orange-400" /> }
  ]

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.28) 0%, rgba(15, 23, 42, 0) 65%), radial-gradient(circle at 85% 75%, rgba(99, 102, 241, 0.22) 0%, rgba(2, 6, 23, 0) 60%), radial-gradient(circle at 15% 70%, rgba(16, 185, 129, 0.18) 0%, rgba(2, 6, 23, 0) 60%), #030712',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }}
    >
      {/* Ambient Lighting Glow Lights */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Column (Headline, CTAs, Capability Tags) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                2026 Enterprise Cloud & Infrastructure
              </span>
            </motion.div>

            {/* Main Title with Dynamic Text Rotator */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Architecting Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                {heroTexts[currentText]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Power your enterprise with ultra-fast NVMe Cloud VPS hosting, sub-15ms Anycast DNS, bare-metal backend APIs, and native mobile applications engineered for high-concurrency scale.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5">
                <span className="text-cyan-400">⚡</span> NVMe Gen4 Cloud VPS
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5">
                <span className="text-emerald-400">🌐</span> Anycast DNS & SSL Shield
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5">
                <span className="text-indigo-400">🖥️</span> Dedicated Bare-Metal Servers
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5">
                <span className="text-purple-400">📱</span> iOS & Android (Expo 52)
              </span>
            </div>

            {/* CTAs Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>Deploy Cloud VPS & Services</span>
                <FaArrowRight className="text-xs" />
              </Link>
              <Link
                href="/services"
                className="px-6 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-white/15 hover:border-white/30 backdrop-blur-lg transition-all"
              >
                Explore Catalog
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hello%20IT%20%26%20AI%20Consultant%20Team%2C%20I%20want%20to%20consult%20about%20Cloud%20VPS%20and%20Backend%20Servers"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-semibold text-sm border border-emerald-500/30 transition-all flex items-center gap-2"
              >
                <span>WhatsApp Consultation</span>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    {s.icon}
                    <span className="text-xl font-bold text-white tracking-tight">{s.number}</span>
                  </div>
                  <span className="text-xs text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Cloud Console Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl p-6 bg-slate-900/80 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">it-ai-cloud-cluster</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ● ACTIVE
                </span>
              </div>

              {/* Live Metric Rows */}
              <div className="space-y-3 font-mono text-xs">
                {/* Node 1: Cloud VPS */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">Cloud VPS Instance</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300">NVMe SSD</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Root Access • 10Gbps • Dedicated IP</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold block">ONLINE</span>
                    <span className="text-[10px] text-slate-500">8ms</span>
                  </div>
                </div>

                {/* Node 2: Dedicated Backend */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-400 font-bold">Dedicated Backend</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300">Port 5000</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">20/20 Tests Passing • Node.js Express</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold block">100% OK</span>
                    <span className="text-[10px] text-slate-500">4ms Lag</span>
                  </div>
                </div>

                {/* Node 3: Anycast DNS */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">Domain & Anycast DNS</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">Global</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">DNSSEC • Wildcard SSL • Cloudflare WAF</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold block">SECURED</span>
                    <span className="text-[10px] text-slate-500">&lt;15ms</span>
                  </div>
                </div>

                {/* Node 4: Mobile & Web Micro-Frontends */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-bold">App & Micro-Frontends</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300">9 Ports</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">VisaFlow • Semantic Search • Expo SDK 52</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold block">SYNCED</span>
                    <span className="text-[10px] text-slate-500">Port 8080</span>
                  </div>
                </div>
              </div>

              {/* Instant Action Callout */}
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Deploy VPS or Dedicated Node</span>
                  <span className="text-[11px] text-slate-400">Instant configuration with 24/7 SLA</span>
                </div>
                <Link
                  href="/contact"
                  className="px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
                >
                  Deploy →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
