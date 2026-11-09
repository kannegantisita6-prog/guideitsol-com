import React from 'react';
import './AboutUs01.css';

const AboutUs01 = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="about-hero section-space--ptb_120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-hero-content">
                <h1>About GuideSoft</h1>
                <p className="lead">
                  We are a leading technology company dedicated to transforming businesses 
                  through innovative digital solutions and cutting-edge technology.
                </p>
                <p>
                  Founded with a vision to bridge the gap between technology and business 
                  success, GuideSoft has been at the forefront of digital innovation for 
                  over a decade.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-hero-image">
                <img 
                  src="/assets/images/about/about-hero.webp" 
                  alt="About GuideSoft" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-section section-space--ptb_120 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="mission-card">
                <div className="card-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with innovative technology solutions that drive 
                  growth, efficiency, and competitive advantage in the digital age.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="vision-card">
                <div className="card-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted technology partner for businesses worldwide, 
                  leading the digital transformation journey with excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section section-space--ptb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Our Core Values</h2>
                <p>The principles that guide everything we do</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Innovation</h4>
                <p>Constantly pushing boundaries and exploring new possibilities</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Integrity</h4>
                <p>Building trust through honest, transparent relationships</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Collaboration</h4>
                <p>Working together to achieve exceptional results</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h4>Excellence</h4>
                <p>Delivering the highest quality in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section section-space--ptb_120 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Our Leadership Team</h2>
                <p>Meet the experts driving our success</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-member-card">
                <div className="member-image">
                  <img src="/assets/images/team/team-01.webp" alt="Team Member" />
                </div>
                <div className="member-info">
                  <h4>John Smith</h4>
                  <p className="position">CEO & Founder</p>
                  <p className="bio">
                    Visionary leader with 20+ years of experience in technology and business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-member-card">
                <div className="member-image">
                  <img src="/assets/images/team/team-02.webp" alt="Team Member" />
                </div>
                <div className="member-info">
                  <h4>Sarah Johnson</h4>
                  <p className="position">CTO</p>
                  <p className="bio">
                    Technology expert leading our innovation and development initiatives.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="team-member-card">
                <div className="member-image">
                  <img src="/assets/images/team/team-03.webp" alt="Team Member" />
                </div>
                <div className="member-info">
                  <h4>Michael Brown</h4>
                  <p className="position">COO</p>
                  <p className="bio">
                    Operations specialist ensuring smooth delivery of all projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section section-space--ptb_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-card text-center">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-card text-center">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-card text-center">
                <div className="stat-number">100+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-card text-center">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs01;
