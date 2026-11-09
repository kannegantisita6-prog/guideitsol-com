import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FaBolt } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <Navbar expand="lg" fixed="top" className="glass py-3">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="me-3 p-2 rounded-circle gradient-bg d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <FaBolt className="text-white" size={20} />
          </div>
          <span className="fw-bold fs-4">
            IT & AI <span className="gradient-text">Consultant</span>
          </span>
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

export default Header;