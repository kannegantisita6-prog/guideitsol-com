import React from 'react';
import PageTemplate from '../components/PageTemplate';

const CloudVPSHosting = () => {
  const features = [
    { icon: 'fa-server', title: 'NVMe Gen4 Storage', description: 'Up to 10x faster disk I/O performance for high-traffic databases and applications' },
    { icon: 'fa-bolt', title: '10 Gbps Network Burst', description: 'Ultra-low latency global network with unmetered DDoS mitigation' },
    { icon: 'fa-lock', title: 'Full Root Access & KVM', description: 'Complete OS control with dedicated vCPU and RAM allocations' },
    { icon: 'fa-shield-alt', title: 'Automated Snapshot Backups', description: 'Daily point-in-time recovery and one-click instant disaster rollback' }
  ];

  const technologies = [
    { name: 'Ubuntu Linux', icon: 'fab fa-linux', color: '#E95420' },
    { name: 'KVM Virtualization', icon: 'fas fa-server', color: '#0ea5e9' },
    { name: 'NVMe Gen4', icon: 'fas fa-microchip', color: '#10b981' },
    { name: 'Docker Engine', icon: 'fab fa-docker', color: '#2496ED' },
    { name: 'Nginx Reverse Proxy', icon: 'fas fa-network-wired', color: '#009639' },
    { name: 'cPanel & WHM', icon: 'fas fa-cogs', color: '#FF6C2C' }
  ];

  const process = [
    { step: '01', title: 'Resource Sizing', description: 'Select optimal vCPU, NVMe storage, and memory for your workload', icon: 'fa-sliders-h' },
    { step: '02', title: 'Instant Provisioning', description: 'Cloud server booted and online in under 60 seconds', icon: 'fa-bolt' },
    { step: '03', title: 'Environment Hardening', description: 'Firewall rules, SSH key access, and automated SSL installation', icon: 'fa-shield-alt' },
    { step: '04', title: 'Application Deployment', description: 'Zero-downtime deployment of databases, APIs, and micro-frontends', icon: 'fa-rocket' },
    { step: '05', title: '24/7 SLA Monitoring', description: 'Continuous uptime tracking and proactive node health checks', icon: 'fa-chart-line' }
  ];

  return (
    <PageTemplate
      title={<>High-Performance <span className="gradient-text">Cloud VPS Hosting</span></>}
      subtitle="Enterprise NVMe SSD Cloud Virtual Private Servers with guaranteed resources and 99.99% uptime"
      heroTitle={<>Ultra-Fast <span className="gradient-text">Cloud VPS Infrastructure</span></>}
      heroSubtitle="Scale your mission-critical applications on high-speed NVMe KVM instances with global data centers and dedicated bandwidth"
      features={features}
      technologies={technologies}
      process={process}
    />
  );
};

export default CloudVPSHosting;
