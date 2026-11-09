import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, FaChartLine, FaBullhorn, FaUsers, FaLightbulb, 
  FaMobile, FaCode, FaDatabase, FaCloud, FaPalette, FaShieldAlt,
  FaArrowRight, FaPlay, FaQuoteLeft, FaStar, FaCheck, FaTrophy,
  FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube,
  FaLaptopCode, FaServer, FaNetworkWired, FaBrain, FaRobot
} from 'react-icons/fa';

const Home = () => {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };

  // Services data with metrics
  const services = [
    {
      icon: <FaServer />,
      title: "Cloud VPS Hosting",
      description: "Enterprise NVMe SSD Cloud VPS with root access, automated backups, and 10Gbps burst bandwidth.",
      metrics: { storage: "NVMe Gen4", uptime: "99.99%", latency: "< 8ms" },
      color: "#0ea5e9",
      caseStudy: "Deployed high-speed clustered VPS hosting for multi-tenant SaaS with instant scaling",
      link: "/cloud-vps-hosting"
    },
    {
      icon: <FaNetworkWired />,
      title: "Domain & Anycast DNS",
      description: "Global TLD registrations (.com, .in, .ai, .io), DNSSEC, automated SSL, and sub-15ms Anycast routing.",
      metrics: { resolution: "< 15ms", tlds: "500+", protection: "DDoS Ready" },
      color: "#10b981",
      caseStudy: "Accelerated global domain DNS lookup latency by 70% using Anycast edge routing",
      link: "/domain-dns-management"
    },
    {
      icon: <FaDatabase />,
      title: "Dedicated Backend Servers",
      description: "Bare-metal dedicated compute, high-concurrency Node.js/Go APIs, and clustered PostgreSQL/MongoDB.",
      metrics: { concurrency: "100K+ RPS", apiLatency: "4ms", clusters: "Multi-Zone" },
      color: "#6366f1",
      caseStudy: "Architected bare-metal backend cluster supporting 100K requests/second with zero lag",
      link: "/dedicated-backend-servers"
    },
    {
      icon: <FaCloud />,
      title: "Multi-Cloud & DevOps Skills",
      description: "AWS, GCP, and Azure cloud infrastructure automated with Terraform, Docker, and Kubernetes CI/CD.",
      metrics: { deployments: "Zero-Downtime", costSavings: "-45%", automation: "100%" },
      color: "#ec4899",
      caseStudy: "Automated multi-region AWS/Kubernetes deployment pipeline cutting release time to 2 minutes",
      link: "/devops-consulting"
    },
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Web Engineering",
      description: "Next.js, React, Node.js, and TypeScript high-performance enterprise platforms and portals.",
      metrics: { projects: "500+", satisfaction: "99%", performance: "+60%" },
      color: "#8b5cf6",
      caseStudy: "Built enterprise digital platform serving over 250K active enterprise clients daily",
      link: "/web-app-development"
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Solutions",
      description: "Native iOS (Swift), Android (Kotlin), and cross-platform React Native / Flutter applications.",
      metrics: { downloads: "1M+", rating: "4.9★", platforms: "iOS & Android" },
      color: "#06b6d4",
      caseStudy: "Engineered top-rated mobile client app with offline sync and instant UPI payment intents",
      link: "/mobile-app-development"
    },
    {
      icon: <FaBrain />,
      title: "AI Engines & Semantic Search",
      description: "Vector database integration, Elasticsearch ELSER machine learning search, and n8n workflow automations.",
      metrics: { accuracy: "98%", vectorSearch: "Real-time", automation: "85%" },
      color: "#f59e0b",
      caseStudy: "Implemented AI assistant and vector search accelerating customer lead resolution by 4x",
      link: "/data-analytics"
    },
    {
      icon: <FaShieldAlt />,
      title: "VisaFlow & Digital Portals",
      description: "Comprehensive 26-page visa immigration suite, booking engines, and multi-gateway payment checkouts.",
      metrics: { pages: "26 Live", gateWays: "UPI/GPay/Stripe", security: "PCI-DSS" },
      color: "#14b8a6",
      caseStudy: "Launched automated immigration and visa processing flow handling thousands of applicant cases",
      link: "/travel-technology"
    }
  ];

  // Portfolio items
  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=E-Commerce",
      results: "300% Sales Growth"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=FinTech",
      results: "500K+ Downloads"
    },
    {
      title: "Healthcare SaaS",
      category: "Cloud Solutions",
      image: "https://via.placeholder.com/400x300/ec4899/ffffff?text=Healthcare",
      results: "10x Performance Boost"
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Solutions",
      image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Analytics",
      results: "Real-time Insights"
    }
  ];

  // Process steps
  const processSteps = [
    { phase: "Discover", description: "Understand your unique needs", icon: <FaLightbulb /> },
    { phase: "Design", description: "Create innovative solutions", icon: <FaPalette /> },
    { phase: "Develop", description: "Build with best practices", icon: <FaCode /> },
    { phase: "Deploy", description: "Launch and optimize", icon: <FaRocket /> }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechStart",
      content: "IT & AI Consultant transformed our entire digital infrastructure. Outstanding results!",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Marcus Johnson",
      position: "CTO, DataFlow",
      content: "The most innovative and reliable tech partner we've ever worked with.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Elena Rodriguez",
      position: "Founder, EcoTech",
      content: "Their expertise in cloud migration saved us millions. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  const stats = [
    { number: '500', suffix: '+', label: 'Projects Delivered' },
    { number: '200', suffix: '+', label: 'Happy Clients' },
    { number: '50', suffix: '+', label: 'Tech Experts' },
    { number: '10', suffix: 'M+', label: 'Lines of Code' }
  ];

  const technologies = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Angular', icon: 'fab fa-angular' }
  ];

  // Counter animation hook
  const [counterRef, counterInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Lazy loading for sections
  const [heroInView, setHeroInView] = useState(true);
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="home-page">
      {/* 100% Occupied Background Hero Section */}
      <motion.section 
        ref={heroRef}
        className="hero-section w-100 min-vh-100 position-relative overflow-hidden d-flex align-items-center justify-content-center"
        style={{ 
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          minHeight: '100vh',
          background: 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.28) 0%, rgba(15, 23, 42, 0) 65%), radial-gradient(circle at 85% 75%, rgba(99, 102, 241, 0.22) 0%, rgba(2, 6, 23, 0) 60%), radial-gradient(circle at 15% 70%, rgba(16, 185, 129, 0.18) 0%, rgba(2, 6, 23, 0) 60%), #030712',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      >
        {/* Ambient Glow Orbs */}
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '500px',
            height: '500px',
            top: '-10%',
            right: '-5%',
            background: 'rgba(14, 165, 233, 0.15)',
            filter: 'blur(120px)',
            pointerEvents: 'none'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '450px',
            height: '450px',
            bottom: '-5%',
            left: '-5%',
            background: 'rgba(99, 102, 241, 0.15)',
            filter: 'blur(120px)',
            pointerEvents: 'none'
          }}
        />

        <Container className="position-relative z-index-2 py-5">
          <Row className="min-vh-100 align-items-center">
            <Col lg={7}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-4">
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill border border-cyan-500/30"
                       style={{ background: 'rgba(14, 165, 233, 0.15)', backdropFilter: 'blur(10px)' }}>
                    <span className="badge bg-cyan-400 text-dark fw-bold rounded-pill" style={{ fontSize: '11px' }}>2026 ENTERPRISE</span>
                    <span className="text-cyan-300 small fw-semibold">Cloud VPS • Dedicated Servers • Anycast DNS • Mobile Apps</span>
                  </div>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="display-2 fw-extrabold text-white mb-4"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15
                  }}
                >
                  Architecting Global <span className="gradient-text">Cloud VPS, Servers</span> & Mobile Apps
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="lead text-slate-300 mb-4 fs-5"
                  style={{ maxWidth: '620px' }}
                >
                  High-concurrency backend systems, ultra-fast NVMe Cloud VPS hosting, Anycast DNS management, and scalable iOS/Android applications built for modern digital enterprises.
                </motion.p>

                {/* Capability Badges */}
                <motion.div variants={fadeInUp} className="d-flex gap-2 flex-wrap mb-4">
                  <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                    ⚡ NVMe Cloud VPS (10Gbps Burst)
                  </span>
                  <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                    🌐 Domain & Anycast DNS (&lt;15ms)
                  </span>
                  <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                    🖥️ Bare-Metal Dedicated Compute
                  </span>
                  <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                    📱 iOS & Android (Expo SDK 52)
                  </span>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="d-flex gap-3 flex-wrap">
                  <Button 
                    as={Link}
                    to="/contact"
                    size="lg" 
                    className="px-5 py-3 rounded-pill text-white border-0 shadow-lg fw-bold"
                    style={{ 
                      background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                      boxShadow: '0 10px 25px rgba(2, 132, 199, 0.4)'
                    }}
                  >
                    Deploy Cloud VPS & Services →
                  </Button>
                  <Button 
                    as={Link}
                    to="/services"
                    size="lg" 
                    variant="outline-light" 
                    className="px-4 py-3 rounded-pill border border-white/20 fw-semibold"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}
                  >
                    Explore Catalog
                  </Button>
                  <a 
                    href="https://wa.me/919999999999?text=Hello%20IT%20%26%20AI%20Consultant%20Team%2C%20I%20want%20to%20consult%20about%20Cloud%20VPS%20and%20Backend%20Servers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg px-4 py-3 rounded-pill fw-semibold text-white border-0 d-inline-flex align-items-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.085-1.802-.401-1.425-.595-2.34-2.025-2.411-2.119-.071-.094-.575-.765-.575-1.46 0-.695.362-1.036.491-1.178.13-.142.283-.178.377-.178.094 0 .188.001.27.006.087.005.203-.033.317.241.118.283.402.98.437 1.051.035.071.059.153.012.247-.047.094-.071.153-.142.235-.071.082-.149.183-.213.245-.071.071-.144.148-.062.289.082.141.364.601.782.973.539.48 1.006.634 1.148.705.142.071.224.059.306-.035.082-.094.353-.412.448-.553.094-.141.189-.118.318-.071.13.047.825.389.966.46.142.071.236.106.271.165.035.059.035.344-.109.749z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </motion.div>
              </motion.div>
            </Col>
            
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="position-relative mt-4 mt-lg-0"
              >
                {/* Live Cloud VPS & Server Monitor Terminal */}
                <div 
                  className="rounded-2xl p-4 shadow-2xl border"
                  style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(24px)',
                    borderColor: 'rgba(56, 189, 248, 0.3)',
                    boxShadow: '0 25px 60px -15px rgba(2, 132, 199, 0.35)'
                  }}
                >
                  {/* Terminal Header */}
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-white/10">
                    <div className="d-flex align-items-center gap-1.5">
                      <div className="rounded-circle" style={{ width: '10px', height: '10px', background: '#ef4444' }}></div>
                      <div className="rounded-circle" style={{ width: '10px', height: '10px', background: '#eab308' }}></div>
                      <div className="rounded-circle" style={{ width: '10px', height: '10px', background: '#22c55e' }}></div>
                      <span className="ms-2 font-monospace text-slate-300 small fw-semibold" style={{ fontSize: '12px' }}>
                        it-ai-cluster: healthy
                      </span>
                    </div>
                    <span className="badge bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-pill px-2 py-0.5" style={{ fontSize: '10px' }}>
                      ● 99.998% UPTIME
                    </span>
                  </div>

                  {/* Server Nodes Metric List */}
                  <div className="d-flex flex-column gap-2.5 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 d-flex justify-content-between align-items-center">
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-white fw-bold small">Cloud VPS (NVMe Storage)</span>
                          <span className="badge bg-cyan-500/20 text-cyan-300 rounded-pill" style={{ fontSize: '9px' }}>10 Gbps</span>
                        </div>
                        <span className="text-slate-400 font-monospace" style={{ fontSize: '11px' }}>Root Access • Dedicated IP • Snapshots</span>
                      </div>
                      <span className="text-emerald-400 font-monospace small fw-semibold">ONLINE</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 d-flex justify-content-between align-items-center">
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-white fw-bold small">Dedicated Backend API</span>
                          <span className="badge bg-indigo-500/20 text-indigo-300 rounded-pill" style={{ fontSize: '9px' }}>Port 5000</span>
                        </div>
                        <span className="text-slate-400 font-monospace" style={{ fontSize: '11px' }}>20/20 Native Tests Passing • 4ms Lag</span>
                      </div>
                      <span className="text-emerald-400 font-monospace small fw-semibold">259ms</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 d-flex justify-content-between align-items-center">
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-white fw-bold small">Domain & Anycast DNS</span>
                          <span className="badge bg-emerald-500/20 text-emerald-300 rounded-pill" style={{ fontSize: '9px' }}>Global Edge</span>
                        </div>
                        <span className="text-slate-400 font-monospace" style={{ fontSize: '11px' }}>DNSSEC • SSL Wildcard • DDoS Shield</span>
                      </div>
                      <span className="text-emerald-400 font-monospace small fw-semibold">&lt;15ms</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 d-flex justify-content-between align-items-center">
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-white fw-bold small">Mobile & Web Ecosystem</span>
                          <span className="badge bg-purple-500/20 text-purple-300 rounded-pill" style={{ fontSize: '9px' }}>9 Services</span>
                        </div>
                        <span className="text-slate-400 font-monospace" style={{ fontSize: '11px' }}>VisaFlow • Semantic Search • Expo 52</span>
                      </div>
                      <span className="text-emerald-400 font-monospace small fw-semibold">ACTIVE</span>
                    </div>
                  </div>

                  {/* Instant Provisioning Quick Bar */}
                  <div className="p-3 rounded-xl border border-cyan-500/30" style={{ background: 'rgba(14, 165, 233, 0.1)' }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="text-white fw-bold small d-block">Instant Cloud Provisioning</span>
                        <span className="text-slate-400" style={{ fontSize: '11px' }}>Deploy in under 60 seconds with 24/7 support</span>
                      </div>
                      <Link 
                        to="/contact" 
                        className="btn btn-sm btn-info text-white fw-bold rounded-pill px-3 py-1.5 shadow"
                        style={{ fontSize: '12px' }}
                      >
                        Deploy VPS →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Scroll Indicator */}
        <motion.div 
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white text-center">
            <small className="text-slate-400" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>SCROLL TO EXPLORE</small>
            <div className="mouse-icon mx-auto mt-1" style={{ width: '20px', height: '32px', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '10px' }}></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Counter Section */}
      <section className="py-5 bg-dark" ref={counterRef}>
        <Container>
          <Row className="text-center">
            {stats.map((stat, index) => (
              <Col md={3} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={counterInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="display-4 fw-bold text-gradient">
                    {counterInView && (
                      <CountUp 
                        start={0} 
                        end={parseInt(stat.number)} 
                        duration={2.5}
                        separator=","
                      />
                    )}
                    {stat.suffix}
                  </h2>
                  <p className="text-white-50">{stat.label}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section with Hover Effects */}
      <section className="py-5 position-relative" style={{ background: '#0a0a0a' }} ref={servicesRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-5"
          >
            <motion.h2 
              variants={fadeInUp}
              className="display-4 fw-bold text-white mb-3"
            >
              Technology Solutions That 
              <span className="text-gradient d-block">Drive Innovation</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="lead text-white-50">
              Choose your path to digital transformation
            </motion.p>
          </motion.div>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={6} key={index}>
                <motion.div
                  initial="hidden"
                  animate={servicesInView ? "visible" : "hidden"}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                >
                  <Card 
                    className="service-card h-100 bg-dark border-0 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}22, transparent)`,
                      border: `1px solid ${service.color}44`,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setActiveService(index)}
                    onMouseLeave={() => setActiveService(-1)}
                  >
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start mb-4">
                        <div 
                          className="service-icon me-3"
                          style={{
                            fontSize: '3rem',
                            color: service.color,
                            transition: 'transform 0.3s'
                          }}
                        >
                          {service.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h4 className="text-white mb-2">{service.title}</h4>
                          <p className="text-white-50 mb-3">{service.description}</p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {activeService === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="metrics-grid mb-3">
                              <Row>
                                {Object.entries(service.metrics).map(([key, value]) => (
                                  <Col key={key} xs={4} className="text-center">
                                    <div className="metric-item">
                                      <h5 className="text-white mb-0">{value}</h5>
                                      <small className="text-white-50 text-uppercase">{key}</small>
                                    </div>
                                  </Col>
                                ))}
                              </Row>
                            </div>
                            
                            <div 
                              className="case-study p-3 rounded"
                              style={{ background: `${service.color}11`, border: `1px solid ${service.color}44` }}
                            >
                              <FaTrophy className="text-warning mb-2" />
                              <p className="text-white small mb-0">{service.caseStudy}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <Button 
                        as={Link}
                        to={service.link}
                        variant="link" 
                        className="p-0 text-decoration-none mt-3"
                        style={{ color: service.color }}
                      >
                        Explore Service <FaArrowRight className="ms-2" />
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-5 bg-gradient-dark" ref={processRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-white mb-3">
              Our Battle-Tested Process
            </h2>
            <p className="lead text-white-50">From concept to completion in 4 power moves</p>
          </motion.div>

          <div className="process-timeline position-relative">
            <Row>
              {processSteps.map((step, index) => (
                <Col md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="process-step text-center mb-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="process-icon mx-auto mb-3"
                      style={{
                        width: '100px',
                        height: '100px',
                        background: `linear-gradient(135deg, #8b5cf6, #ec4899)`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)'
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    <h4 className="text-white mb-2">{step.phase}</h4>
                    <p className="text-white-50 small">{step.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* Connecting Line */}
            <div 
              className="process-line position-absolute"
              style={{
                top: '50px',
                left: '15%',
                right: '15%',
                height: '2px',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                zIndex: 0
              }}
            />
          </div>
        </Container>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-5" style={{ background: '#0a0a0a' }} ref={portfolioRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={portfolioInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-white mb-3">
              Success Stories That Speak
            </h2>
            <p className="lead text-white-50">Real results for real businesses</p>
          </motion.div>

          <Row className="g-4">
            {portfolio.map((item, index) => (
              <Col lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={portfolioInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="portfolio-item position-relative overflow-hidden rounded-4"
                  style={{
                    background: `url(${item.image}) center/cover`,
                    height: '300px',
                    cursor: 'pointer'
                  }}
                >
                  <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0}
                  >
                    <div className="text-white">
                      <span className="badge bg-gradient-primary rounded-pill mb-2">
                        {item.category}
                      </span>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="mb-0 text-warning fw-bold">{item.results}</p>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-5 bg-gradient-dark">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-white mb-3">
              Client Love Letters
            </h2>
            <p className="lead text-white-50">Don't just take our word for it</p>
          </motion.div>

          <Row className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="testimonial-card h-100 bg-dark border-0 p-4">
                    <Card.Body>
                      <div className="mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-warning me-1" />
                        ))}
                      </div>
                      
                      <FaQuoteLeft className="text-primary mb-3" style={{ fontSize: '2rem', opacity: 0.5 }} />
                      
                      <p className="text-white mb-4">{testimonial.content}</p>
                      
                      <div className="d-flex align-items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          style={{ width: '60px', height: '60px' }}
                        />
                        <div>
                          <h6 className="text-white mb-0">{testimonial.name}</h6>
                          <small className="text-white-50">{testimonial.position}</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="py-5 position-relative overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="display-4 fw-bold text-white mb-4">
                  Ready to Explode Your Growth?
                </h2>
                <p className="lead text-white-50 mb-4">
                  Let's create something extraordinary together. 
                  Your competition won't know what hit them.
                </p>
                
                <div className="d-flex gap-4 mb-4">
                  <div>
                    <FaCheck className="text-success me-2" />
                    <span className="text-white">Free Strategy Consultation</span>
                  </div>
                  <div>
                    <FaCheck className="text-success me-2" />
                    <span className="text-white">ROI Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                <Card className="bg-white shadow-lg border-0 p-4">
                  <Card.Body>
                    <h4 className="mb-4">Get Your Free Consultation</h4>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control 
                              size="lg"
                              type="text" 
                              placeholder="Your Name"
                              className="bg-light border-0"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control 
                              size="lg"
                              type="email" 
                              placeholder="Your Email"
                              className="bg-light border-0"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-4">
                        <Form.Control 
                          as="textarea" 
                          rows={4}
                          placeholder="Tell us about your project"
                          className="bg-light border-0"
                        />
                      </Form.Group>
                      <Button 
                        size="lg" 
                        className="w-100 bg-gradient-primary border-0 py-3"
                      >
                        Claim Your Free Audit <FaArrowRight className="ms-2" />
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Proof Bar */}
      <section className="py-3 bg-gradient-primary">
        <Container>
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
            <span className="text-white">Follow Our Success:</span>
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-white"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom CSS for this page */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
        }
        
        .bg-gradient-dark {
          background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
        }
        
        .service-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
        }
        
        .mouse-icon {
          width: 25px;
          height: 40px;
          border: 2px solid white;
          border-radius: 15px;
          position: relative;
        }
        
        .mouse-icon::after {
          content: '';
          width: 4px;
          height: 8px;
          background: white;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
          animation: scroll 1.5s infinite;
        }
        
        @keyframes scroll {
          0% { top: 8px; opacity: 1; }
          100% { top: 20px; opacity: 0; }
        }
        
        .portfolio-item {
          transition: all 0.3s ease;
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .blog-card {
          transition: all 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Home;