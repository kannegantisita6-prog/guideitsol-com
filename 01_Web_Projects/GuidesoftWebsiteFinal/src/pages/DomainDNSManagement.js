import React from 'react';
import PageTemplate from '../components/PageTemplate';

const DomainDNSManagement = () => {
  const features = [
    { icon: 'fa-globe', title: 'Global TLD Registration', description: 'Instant registration for .com, .in, .ai, .io, .org, and 500+ global extensions' },
    { icon: 'fa-bolt', title: 'Anycast DNS Routing', description: 'Sub-15ms DNS query resolution through worldwide geographically distributed edge nodes' },
    { icon: 'fa-shield-alt', title: 'DNSSEC & Privacy', description: 'Cryptographic protection against DNS hijacking and free Whois identity privacy' },
    { icon: 'fa-lock', title: 'Automated Wildcard SSL', description: 'Seamless Let\'s Encrypt and Cloudflare SSL certificates with auto-renewal' }
  ];

  const technologies = [
    { name: 'Cloudflare Edge', icon: 'fab fa-cloudflare', color: '#F38020' },
    { name: 'Anycast DNS', icon: 'fas fa-network-wired', color: '#0ea5e9' },
    { name: 'DNSSEC', icon: 'fas fa-shield-alt', color: '#10b981' },
    { name: 'Auto-SSL', icon: 'fas fa-lock', color: '#6366f1' },
    { name: 'BIND9 / PowerDNS', icon: 'fas fa-server', color: '#8b5cf6' },
    { name: 'REST DNS API', icon: 'fas fa-code', color: '#ec4899' }
  ];

  const process = [
    { step: '01', title: 'Domain Search & Registry', description: 'Instant availability check and secure multi-year domain reservation', icon: 'fa-search' },
    { step: '02', title: 'DNS Zone Configuration', description: 'A, AAAA, CNAME, MX, TXT, and SPF record configuration with zero latency', icon: 'fa-sitemap' },
    { step: '03', title: 'Security Activation', description: 'Enable DNSSEC, registrar lock, and two-factor authentication protection', icon: 'fa-user-shield' },
    { step: '04', title: 'Edge CDN Sync', description: 'Propagation across 300+ worldwide Cloudflare and Anycast edge locations', icon: 'fa-globe-americas' },
    { step: '05', title: 'DDoS & Health Guard', description: '24/7 DNS traffic anomaly detection and real-time query analytics', icon: 'fa-shield-virus' }
  ];

  return (
    <PageTemplate
      title={<>Managed Domain & <span className="gradient-text">Anycast DNS Services</span></>}
      subtitle="Ultra-fast, secure global domain registration with Anycast DNS routing and DDoS mitigation"
      heroTitle={<>Enterprise Domain & <span className="gradient-text">DNS Infrastructure</span></>}
      heroSubtitle="Protect and accelerate your brand's digital presence with high-performance DNS and automated security"
      features={features}
      technologies={technologies}
      process={process}
    />
  );
};

export default DomainDNSManagement;
