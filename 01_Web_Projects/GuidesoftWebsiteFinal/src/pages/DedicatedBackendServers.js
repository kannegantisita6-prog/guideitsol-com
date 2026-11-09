import React from 'react';
import PageTemplate from '../components/PageTemplate';

const DedicatedBackendServers = () => {
  const features = [
    { icon: 'fa-server', title: 'Bare-Metal Dedicated Compute', description: 'Exclusive physical hardware allocation with zero virtualization hypervisor overhead' },
    { icon: 'fa-microchip', title: 'High-Concurrency API Engines', description: 'Engineered for 100K+ concurrent requests per second with sub-5ms response times' },
    { icon: 'fa-database', title: 'Clustered Database Nodes', description: 'Multi-master PostgreSQL, MongoDB sharded clusters, and in-memory Redis caching' },
    { icon: 'fa-network-wired', title: 'Redundant Load Balancing', description: 'Nginx, HAProxy, and hardware load balancers with automated failover' }
  ];

  const technologies = [
    { name: 'Node.js & Go', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'PostgreSQL Clustered', icon: 'fas fa-database', color: '#336791' },
    { name: 'Redis Cache', icon: 'fas fa-bolt', color: '#DC382D' },
    { name: 'HAProxy Load Balancer', icon: 'fas fa-random', color: '#0ea5e9' },
    { name: 'Docker & Kubernetes', icon: 'fab fa-docker', color: '#2496ED' },
    { name: 'Prometheus & Grafana', icon: 'fas fa-chart-area', color: '#F46800' }
  ];

  const process = [
    { step: '01', title: 'Workload Profiling', description: 'Analyze expected transactions, I/O requirements, and peak concurrency thresholds', icon: 'fa-tachometer-alt' },
    { step: '02', title: 'Server Provisioning', description: 'Deploy enterprise Intel Xeon / AMD EPYC bare-metal server infrastructure', icon: 'fa-server' },
    { step: '03', title: 'Cluster & Network Setup', description: 'Configure private internal VLAN, encrypted RPC endpoints, and load balancing', icon: 'fa-network-wired' },
    { step: '04', title: 'Security Hardening', description: 'Implement zero-trust network policies, hardware firewalls, and audit trails', icon: 'fa-user-lock' },
    { step: '05', title: 'Stress & Load Testing', description: 'Validate 100,000+ RPS resilience under synthetic burst workloads', icon: 'fa-vial' }
  ];

  return (
    <PageTemplate
      title={<>Dedicated Backend Servers & <span className="gradient-text">High-Load APIs</span></>}
      subtitle="Bare-metal dedicated compute, clustered databases, and low-latency API architectures"
      heroTitle={<>Mission-Critical <span className="gradient-text">Backend Server Infrastructure</span></>}
      heroSubtitle="Maximize throughput and stability with dedicated hardware compute and scalable microservices"
      features={features}
      technologies={technologies}
      process={process}
    />
  );
};

export default DedicatedBackendServers;
