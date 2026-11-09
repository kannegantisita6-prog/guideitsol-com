import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: 'fa-laptop-code',
      title: 'Web Development',
      description: 'Custom web applications with modern frameworks and responsive designs',
      link: '/frontend-development'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      link: '/mobile-app-development'
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      link: '/advanced-services'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      link: '/advanced-services'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Expert Developers' },
    { number: '10+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      content: 'OneClick IT transformed our digital presence completely. Their innovative solutions and professional team exceeded our expectations.',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, DataFlow Systems',
      content: 'Exceptional technical expertise and outstanding project delivery. OneClick IT is our go-to technology partner.',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Director, Creative Solutions',
      content: 'The team at OneClick IT understands business needs and delivers solutions that drive real results.',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ];

  const technologies = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Angular', icon: 'fab fa-angular' }
  ];

  return (
    <div className="home-page">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Services */}
      <section className="py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="lead text-muted">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} md={6} lg={3}>
                <ServiceCard {...service} delay={index * 0.1} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section 3: About & Stats */}
      <section className="py-5 bg-light dark:bg-gray-900">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="display-5 fw-bold mb-4">
                  About <span className="gradient-text">OneClick IT</span>
                </h2>
                <p className="lead mb-4">
                  We are a team of passionate IT professionals dedicated to delivering cutting-edge 
                  solutions that transform businesses in the digital age.
                </p>
                <p className="text-muted mb-4">
                  With over a decade of experience, we've helped countless organizations achieve 
                  their digital transformation goals through innovative technology solutions, 
                  strategic consulting, and exceptional support.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Button as={Link} to="/about" className="gradient-bg border-0 text-white px-4 py-2">
                    Learn More About Us
                  </Button>
                  <Button as={Link} to="/contact" variant="outline-primary" className="px-4 py-2">
                    Get In Touch
                  </Button>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6}>
              <Row className="g-3">
                {stats.map((stat, index) => (
                  <Col key={index} xs={6}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="glass text-center p-4 border-0">
                        <h3 className="gradient-text fw-bold mb-2">{stat.number}</h3>
                        <p className="text-muted mb-0">{stat.label}</p>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 4: Technologies */}
      <section className="py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="lead text-muted">
              Leveraging the latest technologies to build robust solutions
            </p>
          </motion.div>
          
          <Row className="g-4">
            {technologies.map((tech, index) => (
              <Col key={index} xs={6} md={4} lg={2}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="glass p-4 border-0 h-100">
                    <i className={`${tech.icon} text-primary mb-3`} style={{ fontSize: '3rem' }}></i>
                    <h6 className="fw-bold">{tech.name}</h6>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section 5: Testimonials & CTA */}
      <section className="py-5 bg-light dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="lead text-muted">
              What our clients say about working with us
            </p>
          </motion.div>
          
          <Row className="g-4 mb-5">
            {testimonials.map((testimonial, index) => (
              <Col key={index} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Testimonial {...testimonial} />
                </motion.div>
              </Col>
            ))}
          </Row>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-5 text-center border-0">
              <h3 className="display-6 fw-bold mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="lead text-muted mb-4">
                Let's discuss how our IT solutions can help you achieve your goals
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button 
                  as={Link} 
                  to="/consultation" 
                  className="gradient-bg border-0 text-white px-5 py-3"
                  size="lg"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  as={Link} 
                  to="/portfolio" 
                  variant="outline-primary" 
                  className="px-5 py-3"
                  size="lg"
                >
                  View Our Portfolio
                </Button>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Home;