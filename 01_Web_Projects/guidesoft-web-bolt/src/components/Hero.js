import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  const defaultTitle = (
    <>Premium <span className="gradient-text">IT Solutions</span> for Modern Businesses</>
  );
  const defaultSubtitle = "Empowering your digital transformation with cutting-edge technology solutions";

  return (
    <section className="hero-section hero-bg position-relative">
      <Container className="position-relative z-1">
        <Row>
          <Col lg={10} className="mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="display-3 fw-bold mb-4">
                {title || defaultTitle}
              </h1>
              <p className="lead fs-4 mb-5 px-lg-5">
                {subtitle || defaultSubtitle}
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button 
                  as={Link} 
                  to="/services" 
                  size="lg" 
                  className="px-5 py-3 bg-white text-primary border-0 fw-semibold"
                  style={{ backdropFilter: 'blur(10px)' }}
                >
                  Explore Services
                </Button>
                <Button 
                  as={Link} 
                  to={ctaLink || '/contact'} 
                  size="lg" 
                  className="px-5 py-3 glass border-white text-white fw-semibold"
                >
                  {ctaText || 'Get Free Consultation'}
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;