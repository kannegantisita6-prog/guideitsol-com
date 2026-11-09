import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FaBolt, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const HeaderEnhanced = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesMenu = {
    backend: [
      { path: '/backend-development', label: 'Backend Development' },
      { path: '/web-app-development', label: 'Web App Development' },
      { path: '/net-development', label: '.NET Development' },
      { path: '/nodejs-development', label: 'NodeJS Development' },
      { path: '/python-development', label: 'Python Development' },
      { path: '/nestjs-development', label: 'NestJS Development' },
      { path: '/expressjs-development', label: 'ExpressJS Development' },
      { path: '/laravel-development', label: 'Laravel Development' },
      { path: '/shopify-development', label: 'Shopify Development' }
    ],
    frontend: [
      { path: '/frontend-development', label: 'Frontend Development' },
      { path: '/reactjs-development', label: 'ReactJS Development' },
      { path: '/angular-development', label: 'Angular Development' },
      { path: '/html-development', label: 'HTML Development' },
      { path: '/nextjs-development', label: 'NextJS Development' },
      { path: '/gatsbyjs-development', label: 'GatsbyJS Development' },
      { path: '/magento-development', label: 'Magento Development' },
      { path: '/extjs-development', label: 'ExtJS Development' }
    ],
    mobile: [
      { path: '/mobile-app-development', label: 'Mobile App Development' },
      { path: '/android-app-development', label: 'Android App Development' },
      { path: '/ios-app-development', label: 'iOS App Development' },
      { path: '/iot-app-development', label: 'IoT App Development' },
      { path: '/native-app-development', label: 'Native App Development' },
      { path: '/flutter-app-development', label: 'Flutter App Development' },
      { path: '/ionic-app-development', label: 'Ionic App Development' },
      { path: '/enterprise-app-development', label: 'Enterprise App Development' },
      { path: '/progressive-web-apps', label: 'Progressive Web Apps' }
    ],
    advanced: [
      { path: '/advanced-essential-services', label: 'Advanced Essential Services' },
      { path: '/travel-technology', label: 'Travel Technology' },
      { path: '/n8n-automation-experts', label: 'n8n Automation Experts' },
      { path: '/uiux-design-development', label: 'UI/UX Design & Development' },
      { path: '/ecommerce-web-design', label: 'eCommerce Web Design' },
      { path: '/ecommerce-web-development', label: 'eCommerce Web Development' },
      { path: '/healthcare-website-design', label: 'Healthcare Website Design' },
      { path: '/mcommerce-development', label: 'mCommerce Development' },
      { path: '/digital-marketing', label: 'Digital Marketing' }
    ]
  };

  const solutionsMenu = {
    onDemand: [
      { path: '/on-demand-solutions', label: 'On Demand Solutions' },
      { path: '/booking-app', label: 'Booking App' },
      { path: '/chatbot-app', label: 'Chatbot App' },
      { path: '/food-delivery-app', label: 'Food Delivery App' },
      { path: '/video-streaming-app', label: 'Video Streaming App' },
      { path: '/question-answer-app', label: 'Question Answer App' },
      { path: '/scheduling-app', label: 'Scheduling App' },
      { path: '/event-management-app', label: 'Event Management App' },
      { path: '/flight-booking-app', label: 'Flight Booking App' }
    ],
    emerging: [
      { path: '/emerging-tech-solutions', label: 'Emerging Tech Solutions' },
      { path: '/elearning-solution', label: 'eLearning Solution' },
      { path: '/hrms-app-solution', label: 'HRMS App Solution' },
      { path: '/ble-app-solution', label: 'BLE App Solution' },
      { path: '/survey-app-solution', label: 'Survey App Solution' },
      { path: '/employee-management-app', label: 'Employee Management App' },
      { path: '/reverse-auction-app', label: 'Reverse Auction App' },
      { path: '/react-native-app-solution', label: 'React Native App Solution' },
      { path: '/ar-app-development', label: 'AR App Development' }
    ],
    trending: [
      { path: '/trending-technology', label: 'Trending Technology' },
      { path: '/data-engineering', label: 'Data Engineering' },
      { path: '/data-analytics', label: 'Data Analytics' },
      { path: '/data-visualization', label: 'Data Visualization' },
      { path: '/data-warehousing', label: 'Data Warehousing' },
      { path: '/snowflake-solution', label: 'Snowflake Solution' },
      { path: '/devops-consulting', label: 'DevOps Consulting' },
      { path: '/it-consulting-services', label: 'IT Consulting Services' },
      { path: '/it-support-services', label: 'IT Support Services' }
    ]
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`glass py-3 transition-all ${scrolled ? 'shadow-lg py-2' : ''}`}
        style={{ backdropFilter: scrolled ? 'blur(15px)' : 'blur(10px)' }}
      >
        <Container fluid className="px-4">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="me-3 p-2 rounded-circle gradient-bg d-flex align-items-center justify-content-center" 
                 style={{ width: '40px', height: '40px' }}>
              <FaBolt className="text-white" size={20} />
            </div>
            <span className="fw-bold fs-4">
              OneClick<span className="gradient-text">IT</span>
            </span>
          </Navbar.Brand>
          
          <Navbar.Toggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Navbar.Toggle>
          
          <Navbar.Collapse className={mobileMenuOpen ? 'show' : ''}>
            <Nav className="mx-auto">
              {/* Services Mega Menu */}
              <NavDropdown 
                title="Services" 
                className="mega-dropdown mx-2"
                renderMenuOnMount={true}
              >
                <div className="mega-menu glass p-4" style={{ minWidth: '800px' }}>
                  <Container>
                    <div className="row">
                      {/* Backend Development */}
                      <div className="col-lg-3 col-md-6 mb-3">
                        <h6 className="gradient-text fw-bold mb-3">
                          <i className="fas fa-server me-2"></i>Backend Development
                        </h6>
                        {servicesMenu.backend.map((item, index) => (
                          <Link 
                            key={index} 
                            to={item.path} 
                            className="dropdown-item py-1 px-2 rounded hover-glass"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/backend-development" className="dropdown-item mt-2 text-primary fw-bold">
                          View All →
                        </Link>
                      </div>
                      
                      {/* Frontend Development */}
                      <div className="col-lg-3 col-md-6 mb-3">
                        <h6 className="gradient-text fw-bold mb-3">
                          <i className="fas fa-laptop-code me-2"></i>Frontend Development
                        </h6>
                        {servicesMenu.frontend.map((item, index) => (
                          <Link 
                            key={index} 
                            to={item.path} 
                            className="dropdown-item py-1 px-2 rounded hover-glass"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/frontend-development" className="dropdown-item mt-2 text-primary fw-bold">
                          View All →
                        </Link>
                      </div>
                      
                      {/* Mobile App Development */}
                      <div className="col-lg-3 col-md-6 mb-3">
                        <h6 className="gradient-text fw-bold mb-3">
                          <i className="fas fa-mobile-alt me-2"></i>Mobile App Development
                        </h6>
                        {servicesMenu.mobile.map((item, index) => (
                          <Link 
                            key={index} 
                            to={item.path} 
                            className="dropdown-item py-1 px-2 rounded hover-glass"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/mobile-app-development" className="dropdown-item mt-2 text-primary fw-bold">
                          View All →
                        </Link>
                      </div>
                      
                      {/* Advanced Services */}
                      <div className="col-lg-3 col-md-6 mb-3">
                        <h6 className="gradient-text fw-bold mb-3">
                          <i className="fas fa-rocket me-2"></i>Advanced Services
                        </h6>
                        {servicesMenu.advanced.map((item, index) => (
                          <Link 
                            key={index} 
                            to={item.path} 
                            className="dropdown-item py-1 px-2 rounded hover-glass"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/advanced-essential-services" className="dropdown-item mt-2 text-primary fw-bold">
                          View All →
                        </Link>
                      </div>
                    </div>
                  </Container>
                </div>
              </NavDropdown>
              
              {/* Solutions Mega Menu */}
              <NavDropdown 
                title="Solutions" 
                className="mega-dropdown mx-2"
                renderMenuOnMount={true}
              >
                <div className="mega-menu glass p-4" style={{ minWidth: '700px' }}>
                  <Container>
                    <div className="row">
                      {/* On Demand Solutions */}
                      <div className="col-lg-4 col-md-6 mb-3">
                        <h6 className="gradient-text fw-bold mb-3">
                          <i className="fas fa-bolt me-2"></i>On Demand Solutions
                        </h6>
                        {solutionsMenu.onDemand.map((item, index) => (
                          <Link 
                            key={index} 
                            to={item.path} 
                            className="dropdown-item py-1 px-2 rounded hover-glass"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/on-demand-solutions" className="dropdown-item mt-2 text-primary fw-bold">
                          View All →
                        </Link>
                      </div>
                      
                      {/* Emerging Tech */}
                      <div className="col-lg-4 col-md-6 mb-3">
                        <h6 className="gradient-text fw-bold mb-3">
                          <i className="fas fa-microchip me-2"></i>Emerging Tech
                        </h6>
                        {solutionsMenu.emerging.map((item, index) => (
                          <Link 
                            key={index} 
                            to={item.path} 
                            className="dropdown-item py-1 px-2 rounded hover-glass"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/emerging-tech-solutions" className="dropdown-item mt-2 text-primary fw-bold">
                          View All →
                        </Link>
                      </div>
                      
                      {/* Trending Technology */}
                      <div className="col-lg-4 col-md-6 mb-3">
                        <h6 className="gradient-text fw-bold mb-3">
                          <i className="fas fa-chart-line me-2"></i>Trending Technology
                        </h6>
                        {solutionsMenu.trending.map((item, index) => (
                          <Link 
                            key={index} 
                            to={item.path} 
                            className="dropdown-item py-1 px-2 rounded hover-glass"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link to="/trending-technology" className="dropdown-item mt-2 text-primary fw-bold">
                          View All →
                        </Link>
                      </div>
                    </div>
                  </Container>
                </div>
              </NavDropdown>
              
              <Nav.Link as={Link} to="/travel" className="mx-2">Travel</Nav.Link>
              <Nav.Link as={Link} to="/hire-us" className="mx-2">Hire Us</Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-2">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
            </Nav>
            
            <div className="d-flex align-items-center gap-3">
              <ThemeToggle darkMode={isDarkMode} toggleTheme={toggleTheme} />
              <Button 
                as={Link} 
                to="/get-free-consultation" 
                className="gradient-bg border-0 text-white px-4 py-2"
              >
                Get Free Consultation
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <style jsx="true">{`
        .mega-dropdown:hover .mega-menu {
          display: block !important;
        }
        
        .mega-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          display: none;
          border-radius: 1rem;
          margin-top: 0.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        
        .hover-glass:hover {
          background: rgba(59, 130, 246, 0.1);
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        @media (max-width: 991px) {
          .mega-menu {
            position: relative !important;
            width: 100% !important;
            min-width: auto !important;
            transform: none !important;
            left: 0 !important;
            display: block !important;
            box-shadow: none !important;
            background: transparent !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderEnhanced;