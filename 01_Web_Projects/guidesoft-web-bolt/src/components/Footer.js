import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About <span className="gradient-text">OneClick IT</span></h5>
            <p className="text-white-50">Empowering digital transformation with cutting-edge technology solutions for modern businesses.</p>
          </Col>
          <Col md={2}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/backend-development" className="text-white-50">Backend Dev</Link></li>
              <li><Link to="/frontend-development" className="text-white-50">Frontend Dev</Link></li>
              <li><Link to="/mobile-app-development" className="text-white-50">Mobile Apps</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Solutions</h5>
            <ul className="list-unstyled">
              <li><Link to="/solutions/on-demand" className="text-white-50">On-Demand</Link></li>
              <li><Link to="/solutions/emerging-tech" className="text-white-50">Emerging Tech</Link></li>
              <li><Link to="/solutions/trending-tech" className="text-white-50">Trending Tech</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white-50">About</Link></li>
              <li><Link to="/contact" className="text-white-50">Contact</Link></li>
              <li><Link to="/hire-us" className="text-white-50">Hire Us</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaGithub />
            </div>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <p className="text-center mb-0">&copy; 2024 OneClick IT Solution. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;