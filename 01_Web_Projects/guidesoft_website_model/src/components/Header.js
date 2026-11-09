import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHiddenMenuOpen, setIsHiddenMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHiddenMenu = () => {
    setIsHiddenMenuOpen(!isHiddenMenuOpen);
  };

  return (
    <div className="header-area header-area--absolute">
      <div className="preview-header-inner header-sticky">
        <div className="container-fluid container-fluid--cp-150">
          <div className="row">
            <div className="col-lg-12">
              <div className="header position-relative">
                {/* brand logo */}
                <div className="header__logo">
                  <Link to="/">
                    <img 
                      src="/assets/images/logo/light-logo.webp" 
                      aria-label="GuideSoft Logo" 
                      width="160" 
                      height="48" 
                      className="img-fluid light-logo" 
                      alt="GuideSoft Logo"
                    />
                    <img 
                      src="/assets/images/logo/dark-logo.webp" 
                      aria-label="GuideSoft Logo" 
                      width="160" 
                      height="48" 
                      className="img-fluid dark-logo" 
                      alt="GuideSoft Logo"
                    />
                  </Link>
                </div>
                
                {/* navigation menu */}
                <div className="header__navigation menu-style-four preview-menu d-none d-xl-block">
                  <nav className="navigation-menu navigation-menu--onepage navigation-menu-right">
                    <ul>
                      <li><a href="#section-demos"><span>Demos</span></a></li>
                      <li className="has-children">
                        <a href="#element"><span>Elements</span></a>
                        <ul className="megamenu megamenu--mega">
                          <li>
                            <h2 className="page-list-title">ELEMENT GROUP 01</h2>
                            <ul>
                              <li><Link to="/element-accordion"><span>Accordions & Toggles</span></Link></li>
                              <li><Link to="/element-box-icon"><span>Box Icon</span></Link></li>
                              <li><Link to="/element-box-image"><span>Box Image</span></Link></li>
                              <li><Link to="/element-box-large-image"><span>Box Large Image</span></Link></li>
                              <li><Link to="/element-buttons"><span>Buttons</span></Link></li>
                              <li><Link to="/element-cta"><span>Call to action</span></Link></li>
                              <li><Link to="/element-client-logo"><span>Client Logo</span></Link></li>
                              <li><Link to="/element-countdown"><span>Countdown</span></Link></li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title">ELEMENT GROUP 02</h2>
                            <ul>
                              <li><Link to="/element-counters"><span>Counters</span></Link></li>
                              <li><Link to="/element-dividers"><span>Dividers</span></Link></li>
                              <li><Link to="/element-flexible-image-slider"><span>Flexible image slider</span></Link></li>
                              <li><Link to="/element-google-map"><span>Google Map</span></Link></li>
                              <li><Link to="/element-gradation"><span>Gradation</span></Link></li>
                              <li><Link to="/element-instagram"><span>Instagram</span></Link></li>
                              <li><Link to="/element-lists"><span>Lists</span></Link></li>
                              <li><Link to="/element-message-box"><span>Message box</span></Link></li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title">ELEMENT GROUP 03</h2>
                            <ul>
                              <li><Link to="/element-popup-video"><span>Popup Video</span></Link></li>
                              <li><Link to="/element-pricing-box"><span>Pricing Box</span></Link></li>
                              <li><Link to="/element-progress-bar"><span>Progress Bar</span></Link></li>
                              <li><Link to="/element-progress-circle"><span>Progress Circle</span></Link></li>
                              <li><Link to="/element-rows-columns"><span>Rows & Columns</span></Link></li>
                              <li><Link to="/element-social-networks"><span>Social Networks</span></Link></li>
                              <li><Link to="/element-tabs"><span>Tabs</span></Link></li>
                              <li><Link to="/element-team-member"><span>Team member</span></Link></li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title">ELEMENT GROUP 04</h2>
                            <ul>
                              <li><Link to="/element-testimonials"><span>Testimonials</span></Link></li>
                              <li><Link to="/element-timeline"><span>Timeline</span></Link></li>
                              <li><Link to="/element-carousel-sliders"><span>Carousel Sliders</span></Link></li>
                              <li><Link to="/element-typed-text"><span>Typed Text</span></Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="https://hasthemes.com/contact-us/" target="_blank" rel="noopener noreferrer"><span>Support</span></a></li>
                    </ul>
                  </nav>
                </div>
                
                {/* header actions */}
                <div className="header__actions--preview">
                  <div className="header__actions">
                    <div className="header__icons-wrapper header-right-inner" id="hidden-icon-wrapper">
                      <div className="header-button downlode-btn ml-4">
                        <a 
                          href="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&subId2=GuideSoft-preview&subId3=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource&u=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource" 
                          className="ht-btn ht-btn-md"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Purchase
                        </a>
                      </div>
                    </div>
                    
                    {/* mobile menu */}
                    <div 
                      className="mobile-navigation-icon d-block d-xl-none" 
                      id="mobile-menu-trigger"
                      onClick={toggleMobileMenu}
                    >
                      <i></i>
                    </div>
                    
                    {/* hidden icons menu */}
                    <div 
                      className="hidden-icons-menu d-block d-md-none" 
                      id="hidden-icon-trigger"
                      onClick={toggleHiddenMenu}
                    >
                      <a href="javascript:void(0)">
                        <i className="far fa-ellipsis-h-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <button 
                className="mobile-menu-close"
                onClick={toggleMobileMenu}
              >
                ×
              </button>
            </div>
            <nav className="mobile-navigation">
              <ul>
                <li><a href="#section-demos" onClick={toggleMobileMenu}>Demos</a></li>
                <li><a href="#element" onClick={toggleMobileMenu}>Elements</a></li>
                <li><a href="https://hasthemes.com/contact-us/" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>Support</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
