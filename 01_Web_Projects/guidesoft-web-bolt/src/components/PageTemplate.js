import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Hero from './Hero';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageTemplate = ({ 
  title, 
  subtitle,
  heroTitle,
  heroSubtitle,
  features = [],
  process = [],
  technologies = [],
  benefits = [],
  faqs = [],
  relatedServices = []
}) => {
  
  // Default data if not provided
  const defaultFeatures = features.length > 0 ? features : [
    { icon: 'fa-code', title: 'Clean Code', description: 'Well-structured and maintainable code following best practices' },
    { icon: 'fa-rocket', title: 'Fast Performance', description: 'Optimized for speed and efficiency' },
    { icon: 'fa-shield-alt', title: 'Secure', description: 'Built with security best practices' },
    { icon: 'fa-mobile-alt', title: 'Responsive', description: 'Works perfectly on all devices' }
  ];

  const defaultProcess = process.length > 0 ? process : [
    { step: '01', title: 'Discovery', description: 'Understanding your requirements', icon: 'fa-search' },
    { step: '02', title: 'Planning', description: 'Creating detailed roadmap', icon: 'fa-map' },
    { step: '03', title: 'Development', description: 'Building your solution', icon: 'fa-code' },
    { step: '04', title: 'Testing', description: 'Ensuring quality', icon: 'fa-check-circle' },
    { step: '05', title: 'Deployment', description: 'Launching your project', icon: 'fa-rocket' }
  ];

  const defaultTechnologies = technologies.length > 0 ? technologies : [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'fab fa-node', color: '#339933' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' }
  ];

  const defaultBenefits = benefits.length > 0 ? benefits : [
    { title: 'Cost-Effective', description: 'Get maximum value for your investment', icon: 'fa-dollar-sign' },
    { title: 'Time-Saving', description: 'Quick turnaround without compromising quality', icon: 'fa-clock' },
    { title: 'Scalable', description: 'Solutions that grow with your business', icon: 'fa-expand-arrows-alt' },
    { title: 'Support', description: '24/7 technical support and maintenance', icon: 'fa-headset' }
  ];

  const defaultFaqs = faqs.length > 0 ? faqs : [
    { question: 'How long does development take?', answer: 'Development timeline varies based on project complexity, typically 2-6 months.' },
    { question: 'What technologies do you use?', answer: 'We use cutting-edge technologies best suited for your specific requirements.' },
    { question: 'Do you provide support after launch?', answer: 'Yes, we offer comprehensive post-launch support and maintenance services.' },
    { question: 'Can you work with existing systems?', answer: 'Absolutely, we can integrate with and enhance your existing systems.' }
  ];

  return (
    <div className="page-template">
      {/* Section 1: Hero */}
      <Hero title={heroTitle} subtitle={heroSubtitle} />

      {/* Section 2: Features & Overview */}
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
              {title || <>Key <span className="gradient-text">Features</span></>}
            </h2>
            <p className="lead text-muted">
              {subtitle || 'Discover what makes our solutions stand out'}
            </p>
          </motion.div>

          <Row className="g-4">
            {defaultFeatures.map((feature, index) => (
              <Col key={index} md={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass h-100 border-0 p-4 text-center">
                    <div className="mb-3">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle gradient-bg" 
                           style={{ width: '60px', height: '60px' }}>
                        <i className={`fas ${feature.icon} text-white fs-4`}></i>
                      </div>
                    </div>
                    <h5 className="fw-bold mb-2">{feature.title}</h5>
                    <p className="text-muted small">{feature.description}</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section 3: Development Process */}
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="lead text-muted">
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <div className="position-relative">
            <div className="process-line"></div>
            <Row className="g-4">
              {defaultProcess.map((step, index) => (
                <Col key={index} lg={12}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`d-flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                  >
                    <div className="flex-grow-1" style={{ maxWidth: '45%' }}>
                      <Card className="glass border-0 p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="gradient-bg text-white rounded-circle p-3 me-3">
                            <i className={`fas ${step.icon}`}></i>
                          </div>
                          <div>
                            <span className="gradient-text fw-bold fs-3">{step.step}</span>
                            <h5 className="mb-0 ms-3">{step.title}</h5>
                          </div>
                        </div>
                        <p className="text-muted">{step.description}</p>
                      </Card>
                    </div>
                    <div className="process-dot mx-4"></div>
                    <div className="flex-grow-1" style={{ maxWidth: '45%' }}></div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Section 4: Technologies & Benefits */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            {/* Technologies */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="fw-bold mb-4">
                  Technologies We <span className="gradient-text">Use</span>
                </h3>
                <div className="d-flex flex-wrap gap-3">
                  {defaultTechnologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="glass px-4 py-3 rounded-pill d-flex align-items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <i className={tech.icon} style={{ color: tech.color, fontSize: '1.5rem' }}></i>
                      <span className="fw-semibold">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* Benefits */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="fw-bold mb-4">
                  Why Choose <span className="gradient-text">Us</span>
                </h3>
                <Row className="g-3">
                  {defaultBenefits.map((benefit, index) => (
                    <Col key={index} xs={6}>
                      <Card className="glass border-0 p-3 h-100">
                        <div className="d-flex align-items-start">
                          <div className="gradient-text me-3">
                            <i className={`fas ${benefit.icon} fs-4`}></i>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1">{benefit.title}</h6>
                            <p className="text-muted small mb-0">{benefit.description}</p>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 5: FAQs & CTA */}
      <section className="py-5 bg-light dark:bg-gray-900">
        <Container>
          <Row className="g-5">
            {/* FAQs */}
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="fw-bold mb-4">
                  Frequently Asked <span className="gradient-text">Questions</span>
                </h3>
                <div className="accordion" id="faqAccordion">
                  {defaultFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="accordion-item glass border-0 mb-3"
                    >
                      <h2 className="accordion-header">
                        <button 
                          className="accordion-button collapsed glass" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#faq${index}`}
                        >
                          <i className="fas fa-question-circle me-2 text-primary"></i>
                          {faq.question}
                        </button>
                      </h2>
                      <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* CTA */}
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="sticky-top" style={{ top: '100px' }}
              >
                <Card className="glass border-0 p-4 text-center">
                  <div className="mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle gradient-bg" 
                         style={{ width: '80px', height: '80px' }}>
                      <i className="fas fa-rocket text-white fs-2"></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3">Ready to Get Started?</h4>
                  <p className="text-muted mb-4">
                    Let's transform your ideas into reality with our expert development services.
                  </p>
                  <Button 
                    as={Link} 
                    to="/get-free-consultation" 
                    className="gradient-bg border-0 text-white mb-3"
                    size="lg"
                  >
                    Get Free Consultation
                  </Button>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-primary"
                  >
                    Contact Our Team
                  </Button>
                  
                  <hr className="my-4" />
                  
                  <div className="text-start">
                    <h6 className="fw-bold mb-3">What you'll get:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        Free project assessment
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        Expert recommendations
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        Cost estimation
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        Timeline planning
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx="true">{`
        .process-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
          transform: translateX(-50%);
          z-index: 0;
        }
        
        .process-dot {
          width: 20px;
          height: 20px;
          background: var(--primary-color);
          border: 4px solid white;
          border-radius: 50%;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }
        
        @media (max-width: 991px) {
          .process-line {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PageTemplate;