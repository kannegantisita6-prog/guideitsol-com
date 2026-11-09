import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceholderPage.css';

const PlaceholderPage = ({ title, description, backLink = "/" }) => {
  return (
    <div className="placeholder-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content text-center">
              <h1>{title}</h1>
              <p>{description}</p>
              <Link to={backLink} className="btn btn--primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
