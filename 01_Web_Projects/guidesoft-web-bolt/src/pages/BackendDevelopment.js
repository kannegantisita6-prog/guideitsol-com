import React from 'react';
import PageTemplate from '../components/PageTemplate';

const BackendDevelopment = () => {
  const features = [
    { icon: 'fa-server', title: 'Scalable Architecture', description: 'Build robust systems that grow with your business' },
    { icon: 'fa-database', title: 'Database Design', description: 'Optimized data structures for performance' },
    { icon: 'fa-shield-alt', title: 'API Security', description: 'Enterprise-grade security implementations' },
    { icon: 'fa-bolt', title: 'High Performance', description: 'Optimized code for maximum efficiency' }
  ];

  const technologies = [
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: '.NET', icon: 'fab fa-microsoft', color: '#512BD4' },
    { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20' },
    { name: 'Express', icon: 'fab fa-node', color: '#000000' },
    { name: 'NestJS', icon: 'fas fa-code', color: '#E0234E' }
  ];

  const process = [
    { step: '01', title: 'Architecture Design', description: 'Planning scalable system architecture', icon: 'fa-sitemap' },
    { step: '02', title: 'Database Setup', description: 'Designing efficient database schemas', icon: 'fa-database' },
    { step: '03', title: 'API Development', description: 'Building RESTful and GraphQL APIs', icon: 'fa-plug' },
    { step: '04', title: 'Integration', description: 'Connecting with third-party services', icon: 'fa-link' },
    { step: '05', title: 'Optimization', description: 'Performance tuning and scaling', icon: 'fa-tachometer-alt' }
  ];

  return (
    <PageTemplate
      title={<>Backend <span className="gradient-text">Development Excellence</span></>}
      subtitle="Power your applications with robust, scalable backend solutions"
      heroTitle={<>Backend <span className="gradient-text">Development Services</span></>}
      heroSubtitle="Build powerful, secure, and scalable server-side solutions that drive your business forward"
      features={features}
      technologies={technologies}
      process={process}
    />
  );
};

export default BackendDevelopment;
