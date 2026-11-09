const fs = require('fs');
const path = require('path');

// Component templates
const componentTemplates = {
  Header: `import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FaCode, FaMoon, FaSun } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} expand="lg" fixed="top" className="shadow">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaCode className="me-2" size={30} />
          <span className="fw-bold">GuideSoft Solutions</span>
        </Navbar.Brand>
        
        <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <NavDropdown title="Services" className="mega-dropdown">
              <div className="dropdown-mega-menu">
                <div className="row">
                  <div className="col-md-3">
                    <h6>Backend Development</h6>
                    <NavDropdown.Item as={Link} to="/backend-development">Overview</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/backend-development/nodejs">Node.js</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/backend-development/python">Python</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/backend-development/dotnet">.NET</NavDropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <h6>Frontend Development</h6>
                    <NavDropdown.Item as={Link} to="/frontend-development">Overview</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/frontend-development/reactjs">React.js</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/frontend-development/angular">Angular</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/frontend-development/nextjs">Next.js</NavDropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <h6>Mobile Development</h6>
                    <NavDropdown.Item as={Link} to="/mobile-app-development">Overview</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/mobile-app-development/android">Android</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/mobile-app-development/ios">iOS</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/mobile-app-development/flutter">Flutter</NavDropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <h6>Advanced Services</h6>
                    <NavDropdown.Item as={Link} to="/advanced-services">Overview</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/advanced-services/ui-ux-design">UI/UX</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/advanced-services/digital-marketing">Marketing</NavDropdown.Item>
                  </div>
                </div>
              </div>
            </NavDropdown>
            
            <NavDropdown title="Solutions">
              <NavDropdown.Item as={Link} to="/solutions/on-demand">On-Demand Apps</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions/emerging-tech">Emerging Tech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions/trending-tech">Trending Technology</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/travel">Travel</Nav.Link>
            <Nav.Link as={Link} to="/hire-us">Hire Us</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <Button as={Link} to="/consultation" variant="primary" className="ms-3">
              Get Free Consultation
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;`,

  Footer: `import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About GuideSoft</h5>
            <p>Leading IT solutions provider specializing in web, mobile, and enterprise applications.</p>
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
        <p className="text-center mb-0">&copy; 2024 GuideSoft Solutions. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;`,

  Hero: `import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  return (
    <section className="hero-section position-relative" style={{
      backgroundImage: backgroundImage ? \`url(\${backgroundImage})\` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <Container className="position-relative z-1">
        <Row>
          <Col lg={8} className="mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-4 fw-bold mb-4">{title}</h1>
              <p className="lead mb-5">{subtitle}</p>
              {ctaText && (
                <Button as={Link} to={ctaLink || '/contact'} size="lg" variant="primary">
                  {ctaText}
                </Button>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;`,

  ThemeToggle: `import React from 'react';
import { Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={toggleTheme}
      className="d-flex align-items-center"
    >
      {isDarkMode ? <FaSun className="me-1" /> : <FaMoon className="me-1" />}
      {isDarkMode ? 'Light' : 'Dark'}
    </Button>
  );
};

export default ThemeToggle;`,

  ServiceCard: `import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-100 shadow-sm hover-shadow">
        <Card.Body className="text-center">
          <div className="mb-3 text-primary" style={{ fontSize: '3rem' }}>
            {icon}
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button as={Link} to={link} variant="outline-primary">
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;`,

  ContactForm: `import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div>
      {showAlert && (
        <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
          Thank you for your message! We'll get back to you soon.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Message *</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Button type="submit" variant="primary" size="lg" className="w-100">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;`,

  Testimonial: `import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ name, company, content, rating = 5 }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <div className="mb-3">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-warning" />
          ))}
        </div>
        <Card.Text className="fst-italic">"{content}"</Card.Text>
        <div className="mt-3">
          <strong>{name}</strong>
          <br />
          <small className="text-muted">{company}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Testimonial;`,

  ScrollToTop: `import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;`
};

// Page template generator
const generatePageTemplate = (pageName, title, description) => {
  return `import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ${pageName} = () => {
  return (
    <div className="${pageName.toLowerCase()}-page">
      <Hero 
        title="${title}"
        subtitle="${description}"
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
                  ${description} Our expert team delivers cutting-edge solutions 
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

export default ${pageName};`;
};

// Pages to generate
const pages = [
  { name: 'Home', title: 'Welcome to GuideSoft Solutions', description: 'Your trusted partner for innovative IT solutions' },
  { name: 'BackendDevelopment', title: 'Backend Development Services', description: 'Robust server-side solutions for your applications' },
  { name: 'WebAppDevelopment', title: 'Web Application Development', description: 'Custom web applications built with modern technologies' },
  { name: 'NetDevelopment', title: '.NET Development Services', description: 'Enterprise-grade applications with Microsoft .NET' },
  { name: 'NodeJSDevelopment', title: 'Node.js Development', description: 'Fast and scalable Node.js applications' },
  { name: 'PythonDevelopment', title: 'Python Development', description: 'Python solutions for web, data science, and AI' },
  { name: 'NestJSDevelopment', title: 'NestJS Development', description: 'Enterprise Node.js applications with NestJS' },
  { name: 'ExpressJSDevelopment', title: 'Express.js Development', description: 'Lightweight and flexible Express.js solutions' },
  { name: 'LaravelDevelopment', title: 'Laravel Development', description: 'Elegant PHP applications with Laravel' },
  { name: 'ShopifyDevelopment', title: 'Shopify Development', description: 'Custom Shopify stores and applications' },
  { name: 'FrontendDevelopment', title: 'Frontend Development Services', description: 'Beautiful and responsive user interfaces' },
  { name: 'ReactJSDevelopment', title: 'React.js Development', description: 'Dynamic web applications with React' },
  { name: 'AngularDevelopment', title: 'Angular Development', description: 'Enterprise applications with Angular' },
  { name: 'HTMLDevelopment', title: 'HTML/CSS Development', description: 'Pixel-perfect HTML and CSS coding' },
  { name: 'NextJSDevelopment', title: 'Next.js Development', description: 'Production-ready React applications' },
  { name: 'GatsbyJSDevelopment', title: 'Gatsby.js Development', description: 'Blazing fast static sites with Gatsby' },
  { name: 'MagentoDevelopment', title: 'Magento Development', description: 'E-commerce solutions with Magento' },
  { name: 'ExtJSDevelopment', title: 'Ext JS Development', description: 'Data-intensive applications with Ext JS' },
  { name: 'MobileAppDevelopment', title: 'Mobile App Development', description: 'Native and cross-platform mobile solutions' },
  { name: 'AndroidAppDevelopment', title: 'Android App Development', description: 'Native Android applications' },
  { name: 'IOSAppDevelopment', title: 'iOS App Development', description: 'Native iOS applications for iPhone and iPad' },
  { name: 'IoTAppDevelopment', title: 'IoT App Development', description: 'Connected applications for IoT devices' },
  { name: 'NativeAppDevelopment', title: 'Native App Development', description: 'Platform-specific mobile applications' },
  { name: 'FlutterAppDevelopment', title: 'Flutter App Development', description: 'Cross-platform apps with Flutter' },
  { name: 'IonicAppDevelopment', title: 'Ionic App Development', description: 'Hybrid mobile apps with Ionic' },
  { name: 'EnterpriseAppDevelopment', title: 'Enterprise App Development', description: 'Enterprise-grade mobile solutions' },
  { name: 'ProgressiveWebApps', title: 'Progressive Web Apps', description: 'Modern web apps that work like native apps' },
  // Add more pages as needed...
];

// Create directories if they don't exist
const componentsDir = path.join(__dirname, 'src', 'components');
const pagesDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Generate component files
console.log('Generating components...');
Object.entries(componentTemplates).forEach(([name, content]) => {
  const filePath = path.join(componentsDir, `${name}.js`);
  fs.writeFileSync(filePath, content);
  console.log(`✓ Created ${name}.js`);
});

// Generate page files
console.log('\nGenerating pages...');
pages.forEach(({ name, title, description }) => {
  const filePath = path.join(pagesDir, `${name}.js`);
  const content = generatePageTemplate(name, title, description);
  fs.writeFileSync(filePath, content);
  console.log(`✓ Created ${name}.js`);
});

// Generate remaining pages with basic template
const remainingPages = [
  'AdvancedEssentialServices', 'TravelTechnology', 'N8nAutomationExperts',
  'UIUXDesignDevelopment', 'ECommerceWebDesign', 'ECommerceWebDevelopment',
  'HealthcareWebsiteDesign', 'MCommerceDevelopment', 'DigitalMarketing',
  'Solutions', 'OnDemandSolutions', 'BookingApp', 'ChatbotApp',
  'FoodDeliveryApp', 'VideoStreamingApp', 'QuestionAnswerApp',
  'SchedulingApp', 'EventManagementApp', 'FlightBookingApp',
  'EmergingTechSolutions', 'ELearningSolution', 'HRMSAppSolution',
  'BLEAppSolution', 'SurveyAppSolution', 'EmployeeManagementApp',
  'ReverseAuctionApp', 'ReactNativeAppSolution', 'ARAppDevelopment',
  'TrendingTechnology', 'DataEngineering', 'DataAnalytics',
  'DataVisualization', 'DataWarehousing', 'SnowflakeSolution',
  'DevOpsConsulting', 'ITConsultingServices', 'ITSupportServices',
  'Travel', 'HireUs', 'About', 'Contact', 'GetFreeConsultation',
  'ServiceNotFound'
];

remainingPages.forEach((name) => {
  const filePath = path.join(pagesDir, `${name}.js`);
  if (!fs.existsSync(filePath)) {
    const title = name.replace(/([A-Z])/g, ' $1').trim();
    const content = generatePageTemplate(name, title, `Professional ${title} services`);
    fs.writeFileSync(filePath, content);
    console.log(`✓ Created ${name}.js`);
  }
});

console.log('\n✅ All components and pages generated successfully!');
console.log('Run "npm install" to install dependencies, then "npm start" to run the React app.');