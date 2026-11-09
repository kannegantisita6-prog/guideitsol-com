import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Add scroll event listener for header sticky effect
    const handleScroll = () => {
      const header = document.querySelector('.header-area');
      if (window.scrollY > 100) {
        header.classList.add('header-sticky');
      } else {
        header.classList.remove('header-sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="main-wrapper">
      <div className="site-wrapper-reveal">
        {/* Hero Section */}
        <div className="preview-hero-area preview-hero-bg position-relative section-space--ptb_120">
          <div className="container-fluid container-fluid--cp-150">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="preview-hero-text wow move-up">
                  <h6 className="mb-30">Technology and software</h6>
                  <h2 className="font-weight--reguler text-white mb-30">
                    GuideSoft - A Technology, Digital Software React Website
                  </h2>
                  <div className="hero-button mt-40">
                    <a href="#section-demos" className="btn btn--white">Browse demos</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="preview-hero-image wow move-up">
                  <img 
                    src="/assets/images/hero/hero-image.webp" 
                    alt="Technology Solutions" 
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demos Section */}
        <div id="section-demos" className="demos-section section-space--ptb_120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-5">
                  <h2>Choose Your Demo</h2>
                  <p>Explore our collection of technology and business demos</p>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="demo-card">
                  <div className="demo-image">
                    <img src="/assets/images/preview/demo-1.webp" alt="Demo 1" />
                  </div>
                  <div className="demo-content">
                    <h4>Modern IT Company</h4>
                    <p>Professional IT services company template</p>
                    <Link to="/index-modern-it-company" className="btn btn--primary">View Demo</Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="demo-card">
                  <div className="demo-image">
                    <img src="/assets/images/preview/demo-2.webp" alt="Demo 2" />
                  </div>
                  <div className="demo-content">
                    <h4>Infotechno</h4>
                    <p>Technology innovation showcase</p>
                    <Link to="/index-infotechno" className="btn btn--primary">View Demo</Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="demo-card">
                  <div className="demo-image">
                    <img src="/assets/images/preview/demo-3.webp" alt="Demo 3" />
                  </div>
                  <div className="demo-content">
                    <h4>Cybersecurity</h4>
                    <p>Security-focused technology solutions</p>
                    <Link to="/index-cybersecurity" className="btn btn--primary">View Demo</Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="demo-card">
                  <div className="demo-image">
                    <img src="/assets/images/preview/demo-4.webp" alt="Demo 4" />
                  </div>
                  <div className="demo-content">
                    <h4>Machine Learning</h4>
                    <p>AI and ML technology showcase</p>
                    <Link to="/index-machine-learning" className="btn btn--primary">View Demo</Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="demo-card">
                  <div className="demo-image">
                    <img src="/assets/images/preview/demo-5.webp" alt="Demo 5" />
                  </div>
                  <div className="demo-content">
                    <h4>Software Innovation</h4>
                    <p>Cutting-edge software solutions</p>
                    <Link to="/index-software-innovation" className="btn btn--primary">View Demo</Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="demo-card">
                  <div className="demo-image">
                    <img src="/assets/images/preview/demo-6.webp" alt="Demo 6" />
                  </div>
                  <div className="demo-content">
                    <h4>Processing Solutions</h4>
                    <p>Data processing and analytics</p>
                    <Link to="/index-processing" className="btn btn--primary">View Demo</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elements Section */}
        <div id="element" className="elements-section section-space--ptb_120 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-5">
                  <h2>UI Elements & Components</h2>
                  <p>Explore our comprehensive collection of UI elements</p>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="element-card">
                  <div className="element-icon">
                    <i className="fas fa-list"></i>
                  </div>
                  <h5>Accordions & Toggles</h5>
                  <Link to="/element-accordion" className="element-link">View Element</Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="element-card">
                  <div className="element-icon">
                    <i className="fas fa-cube"></i>
                  </div>
                  <h5>Box Icons</h5>
                  <Link to="/element-box-icon" className="element-link">View Element</Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="element-card">
                  <div className="element-icon">
                    <i className="fas fa-image"></i>
                  </div>
                  <h5>Box Images</h5>
                  <Link to="/element-box-image" className="element-link">View Element</Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="element-card">
                  <div className="element-icon">
                    <i className="fas fa-th-large"></i>
                  </div>
                  <h5>Large Images</h5>
                  <Link to="/element-box-large-image" className="element-link">View Element</Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="element-card">
                  <div className="element-icon">
                    <i className="fas fa-square"></i>
                  </div>
                  <h5>Buttons</h5>
                  <Link to="/element-buttons" className="element-link">View Element</Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="element-card">
                  <div className="element-icon">
                    <i className="fas fa-bullhorn"></i>
                  </div>
                  <h5>Call to Action</h5>
                  <Link to="/element-cta" className="element-link">View Element</Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="element-card">
                  <div className="element-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <h5>Client Logos</h5>
                  <Link to="/element-client-logo" className="element-link">View Element</Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="element-card">
                  <div className="element-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h5>Countdown</h5>
                  <Link to="/element-countdown" className="element-link">View Element</Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-5">
              <Link to="/element-accordion" className="btn btn--primary btn-lg">
                View All Elements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
