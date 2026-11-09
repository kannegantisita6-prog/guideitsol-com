const fs = require('fs');
const path = require('path');

// Page configurations for all service pages
const pageConfigs = {
  // Backend Development Pages
  'WebAppDevelopment.js': {
    title: 'Web App Development',
    icon: 'fa-globe',
    technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Ruby on Rails']
  },
  'NetDevelopment.js': {
    title: '.NET Development',
    icon: 'fab fa-microsoft',
    technologies: ['.NET Core', 'ASP.NET', 'C#', 'Azure', 'SQL Server', 'Entity Framework']
  },
  'NodeJSDevelopment.js': {
    title: 'Node.js Development',
    icon: 'fab fa-node-js',
    technologies: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'Socket.io']
  },
  'PythonDevelopment.js': {
    title: 'Python Development',
    icon: 'fab fa-python',
    technologies: ['Python', 'Django', 'Flask', 'FastAPI', 'NumPy', 'Pandas']
  },
  'NestJSDevelopment.js': {
    title: 'NestJS Development',
    icon: 'fas fa-code',
    technologies: ['NestJS', 'TypeScript', 'GraphQL', 'Microservices', 'TypeORM', 'Prisma']
  },
  'ExpressJSDevelopment.js': {
    title: 'Express.js Development',
    icon: 'fab fa-node',
    technologies: ['Express.js', 'Node.js', 'JWT', 'Passport.js', 'Mongoose', 'REST API']
  },
  'LaravelDevelopment.js': {
    title: 'Laravel Development',
    icon: 'fab fa-laravel',
    technologies: ['Laravel', 'PHP', 'Eloquent', 'Blade', 'Artisan', 'MySQL']
  },
  'ShopifyDevelopment.js': {
    title: 'Shopify Development',
    icon: 'fab fa-shopify',
    technologies: ['Shopify', 'Liquid', 'Shopify API', 'Theme Kit', 'Polaris', 'GraphQL']
  },
  
  // Frontend Development Pages
  'FrontendDevelopment.js': {
    title: 'Frontend Development',
    icon: 'fa-laptop-code',
    technologies: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Webpack', 'Sass']
  },
  'ReactJSDevelopment.js': {
    title: 'React.js Development',
    icon: 'fab fa-react',
    technologies: ['React', 'Redux', 'Next.js', 'React Native', 'Material-UI', 'Hooks']
  },
  'AngularDevelopment.js': {
    title: 'Angular Development',
    icon: 'fab fa-angular',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Jasmine']
  },
  'HTMLDevelopment.js': {
    title: 'HTML/CSS Development',
    icon: 'fab fa-html5',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'jQuery']
  },
  'NextJSDevelopment.js': {
    title: 'Next.js Development',
    icon: 'fas fa-code',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel', 'SSR', 'SSG']
  },
  'GatsbyJSDevelopment.js': {
    title: 'Gatsby.js Development',
    icon: 'fas fa-rocket',
    technologies: ['Gatsby', 'React', 'GraphQL', 'JAMstack', 'Contentful', 'Netlify']
  },
  'MagentoDevelopment.js': {
    title: 'Magento Development',
    icon: 'fab fa-magento',
    technologies: ['Magento', 'PHP', 'MySQL', 'Redis', 'Elasticsearch', 'Varnish']
  },
  'ExtJSDevelopment.js': {
    title: 'Ext JS Development',
    icon: 'fas fa-window-restore',
    technologies: ['Ext JS', 'Sencha', 'JavaScript', 'MVVM', 'MVC', 'Theming']
  },
  
  // Mobile App Development Pages
  'MobileAppDevelopment.js': {
    title: 'Mobile App Development',
    icon: 'fa-mobile-alt',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Xamarin', 'Ionic']
  },
  'AndroidAppDevelopment.js': {
    title: 'Android App Development',
    icon: 'fab fa-android',
    technologies: ['Kotlin', 'Java', 'Android SDK', 'Jetpack', 'Firebase', 'Material Design']
  },
  'IOSAppDevelopment.js': {
    title: 'iOS App Development',
    icon: 'fab fa-apple',
    technologies: ['Swift', 'Objective-C', 'SwiftUI', 'UIKit', 'CoreData', 'Xcode']
  },
  'IoTAppDevelopment.js': {
    title: 'IoT App Development',
    icon: 'fa-microchip',
    technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node-RED', 'AWS IoT', 'Azure IoT']
  },
  'NativeAppDevelopment.js': {
    title: 'Native App Development',
    icon: 'fa-mobile',
    technologies: ['Swift', 'Kotlin', 'Java', 'Objective-C', 'Native UI', 'Platform APIs']
  },
  'FlutterAppDevelopment.js': {
    title: 'Flutter App Development',
    icon: 'fas fa-dove',
    technologies: ['Flutter', 'Dart', 'Material Design', 'Cupertino', 'Firebase', 'GetX']
  },
  'IonicAppDevelopment.js': {
    title: 'Ionic App Development',
    icon: 'fas fa-atom',
    technologies: ['Ionic', 'Angular', 'React', 'Capacitor', 'Cordova', 'TypeScript']
  },
  'EnterpriseAppDevelopment.js': {
    title: 'Enterprise App Development',
    icon: 'fa-building',
    technologies: ['Enterprise Java', '.NET', 'SAP', 'Oracle', 'Microservices', 'Cloud']
  },
  'ProgressiveWebApps.js': {
    title: 'Progressive Web Apps',
    icon: 'fa-globe',
    technologies: ['Service Workers', 'Web App Manifest', 'Push API', 'IndexedDB', 'WebRTC', 'PWA']
  }
};

// Template generator function
const generatePageContent = (config) => {
  const { title, icon, technologies } = config;
  
  return `import React from 'react';
import PageTemplate from '../components/PageTemplate';

const ${title.replace(/[^a-zA-Z]/g, '')} = () => {
  const features = [
    { 
      icon: 'fa-code', 
      title: 'Expert Development', 
      description: 'Industry-leading expertise in ${title.toLowerCase()}' 
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
    ${technologies.map(tech => `{ name: '${tech}', icon: 'fas fa-check-circle', color: '#3b82f6' }`).join(',\n    ')}
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
      question: 'What is ${title}?', 
      answer: '${title} is a specialized service focusing on building robust applications using cutting-edge technologies and best practices.' 
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
      title={<>${title.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">${title.split(' ').slice(-1)[0]}</span></>}
      subtitle="Transform your ideas into powerful digital solutions"
      heroTitle={<>${title.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">${title.split(' ').slice(-1)[0]}</span></>}
      heroSubtitle="Leverage cutting-edge technologies to build scalable, secure, and high-performance applications"
      features={features}
      technologies={technologies}
      process={process}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default ${title.replace(/[^a-zA-Z]/g, '')};`;
};

// Update all pages
const pagesDir = path.join(__dirname, 'src', 'pages');

Object.entries(pageConfigs).forEach(([filename, config]) => {
  const filePath = path.join(pagesDir, filename);
  const content = generatePageContent(config);
  
  try {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Updated ${filename}`);
  } catch (error) {
    console.error(`✗ Failed to update ${filename}:`, error.message);
  }
});

console.log('\n✅ All pages have been updated with the PageTemplate!');