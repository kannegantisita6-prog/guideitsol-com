import React from 'react';
import PageTemplate from '../components/PageTemplate';

const ProgressiveWebApps = () => {
  const features = [
    { 
      icon: 'fa-code', 
      title: 'Expert Development', 
      description: 'Industry-leading expertise in progressive web apps' 
    },
    { 
      icon: 'fa-rocket', 
      title: 'Fast Delivery', 
      description: 'Rapid development with agile methodology' 
    },
    { 
      icon: 'fa-shield-alt', 
      title: 'Secure & Reliable', 
      description: 'Built with security and reliability in mind' 
    },
    { 
      icon: 'fa-chart-line', 
      title: 'Scalable Solutions', 
      description: 'Solutions that grow with your business' 
    }
  ];

  const technologies = [
    { name: 'Service Workers', icon: 'fas fa-check-circle', color: '#3b82f6' },
    { name: 'Web App Manifest', icon: 'fas fa-check-circle', color: '#3b82f6' },
    { name: 'Push API', icon: 'fas fa-check-circle', color: '#3b82f6' },
    { name: 'IndexedDB', icon: 'fas fa-check-circle', color: '#3b82f6' },
    { name: 'WebRTC', icon: 'fas fa-check-circle', color: '#3b82f6' },
    { name: 'PWA', icon: 'fas fa-check-circle', color: '#3b82f6' }
  ];

  const process = [
    { step: '01', title: 'Requirements Analysis', description: 'Understanding your business needs', icon: 'fa-clipboard-list' },
    { step: '02', title: 'Design & Planning', description: 'Creating comprehensive project blueprint', icon: 'fa-pencil-ruler' },
    { step: '03', title: 'Development', description: 'Building with best practices', icon: 'fa-code' },
    { step: '04', title: 'Testing & QA', description: 'Ensuring quality and reliability', icon: 'fa-bug' },
    { step: '05', title: 'Deployment & Support', description: 'Launch and ongoing maintenance', icon: 'fa-rocket' }
  ];

  const benefits = [
    { title: 'Expert Team', description: 'Skilled developers with years of experience', icon: 'fa-users' },
    { title: 'Quality Code', description: 'Clean, maintainable, and well-documented code', icon: 'fa-code' },
    { title: 'On-Time Delivery', description: 'Projects delivered on schedule', icon: 'fa-calendar-check' },
    { title: '24/7 Support', description: 'Round-the-clock technical support', icon: 'fa-headset' }
  ];

  const faqs = [
    { 
      question: 'What is Progressive Web Apps?', 
      answer: 'Progressive Web Apps is a specialized service focusing on building robust applications using cutting-edge technologies and best practices.' 
    },
    { 
      question: 'How long does a typical project take?', 
      answer: 'Project timelines vary based on complexity, but most projects are completed within 2-6 months with our agile approach.' 
    },
    { 
      question: 'Do you provide ongoing support?', 
      answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your application runs smoothly.' 
    },
    { 
      question: 'Can you work with existing systems?', 
      answer: 'Absolutely! We specialize in integrating with and enhancing existing systems and infrastructure.' 
    }
  ];

  return (
    <PageTemplate
      title={<>Progressive Web <span className="gradient-text">Apps</span></>}
      subtitle="Transform your ideas into powerful digital solutions"
      heroTitle={<>Progressive Web <span className="gradient-text">Apps</span></>}
      heroSubtitle="Leverage cutting-edge technologies to build scalable, secure, and high-performance applications"
      features={features}
      technologies={technologies}
      process={process}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default ProgressiveWebApps;