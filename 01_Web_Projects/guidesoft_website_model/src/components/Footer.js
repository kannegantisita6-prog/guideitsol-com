import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-content text-center">
              <div className="footer-logo mb-4">
                <Link to="/">
                  <img 
                    src="/assets/images/logo/dark-logo.webp" 
                    alt="GuideSoft Logo" 
                    width="160" 
                    height="48"
                  />
                </Link>
              </div>
              
              <div className="footer-description mb-4">
                <p>
                  GuideSoft is a leading technology company providing innovative IT solutions 
                  for businesses worldwide. We specialize in digital transformation, 
                  software development, and technology consulting.
                </p>
              </div>
              
              <div className="footer-links mb-4">
                <ul className="footer-menu">
                  <li><Link to="/about-us-01">About Us</Link></li>
                  <li><Link to="/it-services">Services</Link></li>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                  <li><Link to="/contact-us">Contact</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                </ul>
              </div>
              
              <div className="footer-social mb-4">
                <ul className="social-links">
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="footer-bottom">
                <div className="footer-copyright">
                  <p>&copy; 2024 GuideSoft. All rights reserved. | 
                    <Link to="/privacy-policy"> Privacy Policy</Link> | 
                    <Link to="/terms-of-service"> Terms of Service</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
