import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FoodDeliveryApp = () => {
  return (
    <div className="fooddeliveryapp-page">
      <Hero 
        title="Food Delivery App"
        subtitle="Professional Food Delivery App services"
        ctaText="Get Started"
        ctaLink="/consultation"
      />
      
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">Overview</h2>
                <p className="lead">
                  Professional Food Delivery App services Our expert team delivers cutting-edge solutions 
                  tailored to your business needs.
                </p>
                
                <h3 className="mt-5 mb-3">Key Features</h3>
                <ul>
                  <li>Professional development team</li>
                  <li>Agile methodology</li>
                  <li>Quality assurance</li>
                  <li>Timely delivery</li>
                  <li>Post-launch support</li>
                </ul>
                
                <h3 className="mt-5 mb-3">Our Process</h3>
                <Row className="g-4">
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <h5>1. Discovery</h5>
                        <p>Understanding your requirements and goals</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <h5>2. Planning</h5>
                        <p>Creating detailed project roadmap</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <h5>3. Development</h5>
                        <p>Building your solution with best practices</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <h5>4. Delivery</h5>
                        <p>Testing, deployment, and support</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </motion.div>
            </Col>
            
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="sticky-top" style={{ top: '100px' }}>
                  <Card.Body>
                    <h4 className="mb-4">Get In Touch</h4>
                    <ContactForm />
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FoodDeliveryApp;