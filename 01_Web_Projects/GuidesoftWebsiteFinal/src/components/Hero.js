import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  const defaultTitle = (
    <>
      Architecting Global <span className="gradient-text">Cloud VPS, Servers</span> & Mobile Apps
    </>
  );
  const defaultSubtitle = "Empowering high-growth businesses with ultra-fast NVMe Cloud VPS, Anycast DNS, bare-metal backend APIs, and scalable cross-platform mobile apps.";

  return (
    <section 
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
      {/* Ambient Lighting Orbs */}
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

      <Container className="position-relative z-1 py-5">
        <Row className="align-items-center">
          <Col lg={11} className="mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Top Trending Badge */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-4 border border-cyan-500/30"
                   style={{ background: 'rgba(14, 165, 233, 0.15)', backdropFilter: 'blur(10px)' }}>
                <span className="badge bg-cyan-400 text-dark fw-bold rounded-pill" style={{ fontSize: '11px' }}>2026 CLOUD READY</span>
                <span className="text-cyan-300 small fw-semibold">Cloud VPS • Dedicated Servers • Anycast DNS • Mobile Apps</span>
              </div>

              <h1 className="display-3 fw-extrabold mb-4 text-white" style={{ letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                {title || defaultTitle}
              </h1>

              <p className="lead fs-5 mb-5 px-lg-5 text-slate-300" style={{ maxWidth: '850px', margin: '0 auto 2.5rem' }}>
                {subtitle || defaultSubtitle}
              </p>

              {/* Service Capabilities Pills */}
              <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
                <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                  ⚡ NVMe Cloud VPS (10Gbps Burst)
                </span>
                <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                  🌐 Domain & Anycast DNS (&lt;15ms)
                </span>
                <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                  🖥️ Bare-Metal Dedicated Servers
                </span>
                <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                  📱 iOS & Android Mobile Apps
                </span>
                <span className="badge bg-white/5 border border-white/10 text-slate-200 px-3 py-2 rounded-pill small">
                  💳 Real UPI & Google Pay
                </span>
              </div>

              {/* High-Impact CTA Action Buttons */}
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button 
                  as={Link} 
                  to="/contact" 
                  size="lg" 
                  className="px-5 py-3 rounded-pill border-0 fw-bold text-white shadow-lg"
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
                  className="px-5 py-3 rounded-pill fw-semibold text-white border border-white/20"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)'
                  }}
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
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
