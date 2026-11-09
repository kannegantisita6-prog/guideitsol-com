import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, FaChartLine, FaBullhorn, FaUsers, FaLightbulb, 
  FaMobile, FaCode, FaDatabase, FaCloud, FaPalette, FaShieldAlt,
  FaArrowRight, FaPlay, FaQuoteLeft, FaStar, FaCheck, FaTrophy,
  FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube,
  FaLaptopCode, FaServer, FaNetworkWired, FaBrain, FaRobot
} from 'react-icons/fa';

const Home = () => {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };

  // Services data with metrics
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Development",
      description: "End-to-end web solutions with cutting-edge technologies",
      metrics: { projects: "500+", satisfaction: "99%", performance: "+50%" },
      color: "#8b5cf6",
      caseStudy: "Built enterprise SaaS platform serving 100K+ users daily",
      link: "/frontend-development"
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Solutions",
      description: "Native & cross-platform apps that users love",
      metrics: { downloads: "1M+", rating: "4.9★", platforms: "iOS/Android" },
      color: "#06b6d4",
      caseStudy: "Launched #1 trending app in 3 categories",
      link: "/mobile-app-development"
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and seamless deployments",
      metrics: { uptime: "99.99%", cost: "-40%", speed: "3x faster" },
      color: "#ec4899",
      caseStudy: "Migrated legacy systems to cloud, saving $2M annually",
      link: "/devops-consulting"
    },
    {
      icon: <FaBrain />,
      title: "AI & Data Solutions",
      description: "Intelligent automation and data-driven insights",
      metrics: { accuracy: "96%", automation: "80%", insights: "Real-time" },
      color: "#f59e0b",
      caseStudy: "Implemented ML model increasing revenue by 35%",
      link: "/data-analytics"
    }
  ];

  // Portfolio items
  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=E-Commerce",
      results: "300% Sales Growth"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=FinTech",
      results: "500K+ Downloads"
    },
    {
      title: "Healthcare SaaS",
      category: "Cloud Solutions",
      image: "https://via.placeholder.com/400x300/ec4899/ffffff?text=Healthcare",
      results: "10x Performance Boost"
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Solutions",
      image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Analytics",
      results: "Real-time Insights"
    }
  ];

  // Process steps
  const processSteps = [
    { phase: "Discover", description: "Understand your unique needs", icon: <FaLightbulb /> },
    { phase: "Design", description: "Create innovative solutions", icon: <FaPalette /> },
    { phase: "Develop", description: "Build with best practices", icon: <FaCode /> },
    { phase: "Deploy", description: "Launch and optimize", icon: <FaRocket /> }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechStart",
      content: "GuideSoft transformed our entire digital infrastructure. Outstanding results!",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Marcus Johnson",
      position: "CTO, DataFlow",
      content: "The most innovative and reliable tech partner we've ever worked with.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Elena Rodriguez",
      position: "Founder, EcoTech",
      content: "Their expertise in cloud migration saved us millions. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  const stats = [
    { number: '500', suffix: '+', label: 'Projects Delivered' },
    { number: '200', suffix: '+', label: 'Happy Clients' },
    { number: '50', suffix: '+', label: 'Tech Experts' },
    { number: '10', suffix: 'M+', label: 'Lines of Code' }
  ];

  const technologies = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Angular', icon: 'fab fa-angular' }
  ];

  // Counter animation hook
  const [counterRef, counterInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Lazy loading for sections
  const [heroInView, setHeroInView] = useState(true);
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="home-page">
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        className="hero-section position-relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          minHeight: '100vh'
        }}
      >
        {/* Animated Background Shapes */}
        <div className="hero-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{ 
              rotate: 360,
              x: [0, 100, 0],
              y: [0, -100, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              top: '10%',
              right: '10%'
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ 
              rotate: -360,
              x: [0, -100, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
              bottom: '10%',
              left: '5%'
            }}
          />
        </div>

        <Container className="position-relative z-index-2">
          <Row className="min-vh-100 align-items-center">
            <Col lg={7}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-4">
                  <span className="badge bg-light text-dark px-4 py-2 rounded-pill mb-3">
                    🚀 Leading IT Solutions Provider 2024
                  </span>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="display-1 fw-bold text-white mb-4"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    textShadow: '2px 4px 8px rgba(0,0,0,0.3)'
                  }}
                >
                  We Don't Just Code,
                  <span className="d-block text-warning">We Innovate</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="lead text-white-50 mb-5 fs-4"
                >
                  Transform your business with cutting-edge technology solutions 
                  that drive growth, efficiency, and unprecedented success.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="d-flex gap-3 flex-wrap">
                  <Button 
                    as={Link}
                    to="/consultation"
                    size="lg" 
                    className="px-5 py-3 rounded-pill bg-white text-dark border-0 shadow-lg"
                    style={{ 
                      fontWeight: 'bold',
                      transition: 'all 0.3s',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={e => e.target.style.transform = 'translateY(-5px)'}
                    onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                  >
                    Start Your Project <FaArrowRight className="ms-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline-light" 
                    className="px-5 py-3 rounded-pill border-2"
                  >
                    <FaPlay className="me-2" /> View Portfolio
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
            
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="position-relative"
              >
                <div className="hero-visual">
                  {/* Animated Tech Graphics */}
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-center"
                  >
                    <FaRocket className="text-white" style={{ fontSize: '15rem', opacity: 0.8 }} />
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Scroll Indicator */}
        <motion.div 
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white text-center">
            <small>Scroll to explore</small>
            <div className="mouse-icon mx-auto mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Counter Section */}
      <section className="py-5 bg-dark" ref={counterRef}>
        <Container>
          <Row className="text-center">
            {stats.map((stat, index) => (
              <Col md={3} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={counterInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="display-4 fw-bold text-gradient">
                    {counterInView && (
                      <CountUp 
                        start={0} 
                        end={parseInt(stat.number)} 
                        duration={2.5}
                        separator=","
                      />
                    )}
                    {stat.suffix}
                  </h2>
                  <p className="text-white-50">{stat.label}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section with Hover Effects */}
      <section className="py-5 position-relative" style={{ background: '#0a0a0a' }} ref={servicesRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-5"
          >
            <motion.h2 
              variants={fadeInUp}
              className="display-4 fw-bold text-white mb-3"
            >
              Technology Solutions That 
              <span className="text-gradient d-block">Drive Innovation</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="lead text-white-50">
              Choose your path to digital transformation
            </motion.p>
          </motion.div>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={6} key={index}>
                <motion.div
                  initial="hidden"
                  animate={servicesInView ? "visible" : "hidden"}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                >
                  <Card 
                    className="service-card h-100 bg-dark border-0 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}22, transparent)`,
                      border: `1px solid ${service.color}44`,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setActiveService(index)}
                    onMouseLeave={() => setActiveService(-1)}
                  >
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start mb-4">
                        <div 
                          className="service-icon me-3"
                          style={{
                            fontSize: '3rem',
                            color: service.color,
                            transition: 'transform 0.3s'
                          }}
                        >
                          {service.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h4 className="text-white mb-2">{service.title}</h4>
                          <p className="text-white-50 mb-3">{service.description}</p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {activeService === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="metrics-grid mb-3">
                              <Row>
                                {Object.entries(service.metrics).map(([key, value]) => (
                                  <Col key={key} xs={4} className="text-center">
                                    <div className="metric-item">
                                      <h5 className="text-white mb-0">{value}</h5>
                                      <small className="text-white-50 text-uppercase">{key}</small>
                                    </div>
                                  </Col>
                                ))}
                              </Row>
                            </div>
                            
                            <div 
                              className="case-study p-3 rounded"
                              style={{ background: `${service.color}11`, border: `1px solid ${service.color}44` }}
                            >
                              <FaTrophy className="text-warning mb-2" />
                              <p className="text-white small mb-0">{service.caseStudy}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <Button 
                        as={Link}
                        to={service.link}
                        variant="link" 
                        className="p-0 text-decoration-none mt-3"
                        style={{ color: service.color }}
                      >
                        Explore Service <FaArrowRight className="ms-2" />
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-5 bg-gradient-dark" ref={processRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-white mb-3">
              Our Battle-Tested Process
            </h2>
            <p className="lead text-white-50">From concept to completion in 4 power moves</p>
          </motion.div>

          <div className="process-timeline position-relative">
            <Row>
              {processSteps.map((step, index) => (
                <Col md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="process-step text-center mb-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="process-icon mx-auto mb-3"
                      style={{
                        width: '100px',
                        height: '100px',
                        background: `linear-gradient(135deg, #8b5cf6, #ec4899)`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)'
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    <h4 className="text-white mb-2">{step.phase}</h4>
                    <p className="text-white-50 small">{step.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* Connecting Line */}
            <div 
              className="process-line position-absolute"
              style={{
                top: '50px',
                left: '15%',
                right: '15%',
                height: '2px',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                zIndex: 0
              }}
            />
          </div>
        </Container>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-5" style={{ background: '#0a0a0a' }} ref={portfolioRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={portfolioInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-white mb-3">
              Success Stories That Speak
            </h2>
            <p className="lead text-white-50">Real results for real businesses</p>
          </motion.div>

          <Row className="g-4">
            {portfolio.map((item, index) => (
              <Col lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={portfolioInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="portfolio-item position-relative overflow-hidden rounded-4"
                  style={{
                    background: `url(${item.image}) center/cover`,
                    height: '300px',
                    cursor: 'pointer'
                  }}
                >
                  <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0}
                  >
                    <div className="text-white">
                      <span className="badge bg-gradient-primary rounded-pill mb-2">
                        {item.category}
                      </span>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="mb-0 text-warning fw-bold">{item.results}</p>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-5 bg-gradient-dark">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold text-white mb-3">
              Client Love Letters
            </h2>
            <p className="lead text-white-50">Don't just take our word for it</p>
          </motion.div>

          <Row className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="testimonial-card h-100 bg-dark border-0 p-4">
                    <Card.Body>
                      <div className="mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-warning me-1" />
                        ))}
                      </div>
                      
                      <FaQuoteLeft className="text-primary mb-3" style={{ fontSize: '2rem', opacity: 0.5 }} />
                      
                      <p className="text-white mb-4">{testimonial.content}</p>
                      
                      <div className="d-flex align-items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          style={{ width: '60px', height: '60px' }}
                        />
                        <div>
                          <h6 className="text-white mb-0">{testimonial.name}</h6>
                          <small className="text-white-50">{testimonial.position}</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="py-5 position-relative overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="display-4 fw-bold text-white mb-4">
                  Ready to Explode Your Growth?
                </h2>
                <p className="lead text-white-50 mb-4">
                  Let's create something extraordinary together. 
                  Your competition won't know what hit them.
                </p>
                
                <div className="d-flex gap-4 mb-4">
                  <div>
                    <FaCheck className="text-success me-2" />
                    <span className="text-white">Free Strategy Consultation</span>
                  </div>
                  <div>
                    <FaCheck className="text-success me-2" />
                    <span className="text-white">ROI Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                <Card className="bg-white shadow-lg border-0 p-4">
                  <Card.Body>
                    <h4 className="mb-4">Get Your Free Consultation</h4>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control 
                              size="lg"
                              type="text" 
                              placeholder="Your Name"
                              className="bg-light border-0"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control 
                              size="lg"
                              type="email" 
                              placeholder="Your Email"
                              className="bg-light border-0"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-4">
                        <Form.Control 
                          as="textarea" 
                          rows={4}
                          placeholder="Tell us about your project"
                          className="bg-light border-0"
                        />
                      </Form.Group>
                      <Button 
                        size="lg" 
                        className="w-100 bg-gradient-primary border-0 py-3"
                      >
                        Claim Your Free Audit <FaArrowRight className="ms-2" />
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Proof Bar */}
      <section className="py-3 bg-gradient-primary">
        <Container>
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
            <span className="text-white">Follow Our Success:</span>
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-white"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom CSS for this page */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
        }
        
        .bg-gradient-dark {
          background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
        }
        
        .service-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
        }
        
        .mouse-icon {
          width: 25px;
          height: 40px;
          border: 2px solid white;
          border-radius: 15px;
          position: relative;
        }
        
        .mouse-icon::after {
          content: '';
          width: 4px;
          height: 8px;
          background: white;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
          animation: scroll 1.5s infinite;
        }
        
        @keyframes scroll {
          0% { top: 8px; opacity: 1; }
          100% { top: 20px; opacity: 0; }
        }
        
        .portfolio-item {
          transition: all 0.3s ease;
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .blog-card {
          transition: all 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Home;