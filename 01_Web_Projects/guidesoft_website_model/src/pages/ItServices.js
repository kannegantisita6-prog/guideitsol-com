import React from 'react';
import { Link } from 'react-router-dom';
import './ItServices.css';

const ItServices = () => {
  const services = [
    {
      id: 1,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      icon: 'fas fa-code',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: 'fas fa-cloud',
      features: ['AWS Services', 'Azure Solutions', 'Google Cloud', 'Migration Support']
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security measures',
      icon: 'fas fa-shield-alt',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance']
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights',
      icon: 'fas fa-chart-line',
      features: ['Business Intelligence', 'Data Mining', 'Predictive Analytics', 'Reporting']
    },
    {
      id: 5,
      title: 'IT Consulting',
      description: 'Strategic technology guidance for business growth',
      icon: 'fas fa-lightbulb',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Selection']
    },
    {
      id: 6,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management and support',
      icon: 'fas fa-cogs',
      features: ['24/7 Monitoring', 'Help Desk Support', 'Backup & Recovery', 'Network Management']
    }
  ];

  return (
    <div className="it-services-page">
      {/* Hero Section */}
      <div className="services-hero section-space--ptb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="services-hero-content text-center">
                <h1>IT Services & Solutions</h1>
                <p className="lead">
                  Comprehensive technology services to drive your business forward
                </p>
                <p>
                  From software development to cybersecurity, we provide end-to-end 
                  IT solutions that help businesses innovate, grow, and succeed in 
                  the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="services-grid-section section-space--ptb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Our Services</h2>
                <p>Comprehensive IT solutions for modern businesses</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                <div className="service-card">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <Link to={`/it-services-details`} className="service-link">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section section-space--ptb_120 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Why Choose GuideSoft?</h2>
                <p>The advantages of working with our team</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h5>Expert Team</h5>
                <p>Certified professionals with years of experience</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h5>24/7 Support</h5>
                <p>Round-the-clock technical support and monitoring</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h5>Fast Delivery</h5>
                <p>Quick turnaround times without compromising quality</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h5>Trusted Partner</h5>
                <p>Long-term relationships built on trust and results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section section-space--ptb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Our Process</h2>
                <p>How we deliver exceptional results</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="process-step">
                <div className="step-number">01</div>
                <h5>Discovery</h5>
                <p>Understanding your requirements and business goals</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="process-step">
                <div className="step-number">02</div>
                <h5>Planning</h5>
                <p>Creating detailed project roadmap and strategy</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="process-step">
                <div className="step-number">03</div>
                <h5>Development</h5>
                <p>Building your solution with best practices</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="process-step">
                <div className="step-number">04</div>
                <h5>Delivery</h5>
                <p>Launching and supporting your solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section section-space--ptb_120 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white mb-4">
                Let's discuss how our IT services can transform your business. 
                Get in touch for a free consultation.
              </p>
              <div className="cta-buttons">
                <Link to="/contact-us" className="btn btn--white btn-lg me-3">
                  Contact Us
                </Link>
                <Link to="/case-studies" className="btn btn--outline-white btn-lg">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItServices;
