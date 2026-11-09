import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs02.css';

const AboutUs02 = () => {
  return (
    <div className="about-us-02-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content text-center">
              <h1>About Us - Alternative Layout</h1>
              <p>This is an alternative about us page layout.</p>
              <Link to="/about-us-01" className="btn btn--primary">
                View Standard Layout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs02;
