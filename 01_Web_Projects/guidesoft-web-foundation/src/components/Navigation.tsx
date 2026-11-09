import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone, Mail, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import gsLogo from '@/assets/gslogo.png';

const serviceCategories = {
  'BACKEND DEVELOPMENT': [
    'Web App Development', '.Net Development', 'NodeJS Development', 'Python Development',
    'NestJS Development', 'ExpressJS Development', 'Laravel Development', 'Shopify Development',
    'WordPress Development', 'Website Development', 'Hapi.js Development', 'Fastify Development', 'Golang Development'
  ],
  'FRONTEND DEVELOPMENT': [
    'ReactJS Development', 'Angular Development', 'HTML Development', 'NextJS Development',
    'GatsbyJS Development', 'Magento Development', 'ExtJS Development Company'
  ],
  'MOBILE APP DEVELOPMENT': [
    'Android App Development', 'iOS App Development', 'IoT App Development', 'Native App Development',
    'Flutter App Development', 'Ionic App Development', 'Enterprise App Development', 'Progressive Web Apps',
    'Wearable App Development', 'VOIP App Development', 'React Native Development', 'Cross Platform Development'
  ],
  'ADVANCE ESSENTIAL SERVICES': [
    'Travel Technology', 'n8n Automation Experts', 'UI/UX Design & Development', 'eCommerce Web Design',
    'eCommerce Web Development', 'Healthcare Website Design', 'mCommerce Development', 'Digital Marketing',
    'Software Testing', 'DevOps Services', 'Agile Software Development', 'Custom Software Development',
    'CRM Software Development', 'Software Development', 'Blockchain Development', 'Full Stack Development', 'Payload CMS Development'
  ]
};

const solutionCategories = {
  'ON DEMAND SOLUTION': [
    'Booking App', 'Chatbot App', 'Food Delivery App', 'Video Streaming App',
    'Question Answer App', 'Scheduling App', 'Event Management App', 'Flight Booking App', 'Video Conferencing'
  ],
  'EMERGING TECH SOLUTION': [
    'eLearning Solution', 'HRMS App Solution', 'BLE App Solution', 'Survey App Solution',
    'Employee Management App', 'Reverse Auction App', 'React Native App Solution', 'AR App Development', 'eCommerce App Development'
  ],
  'TRENDING TECHNOLOGY': [
    'Data Engineering', 'Data Analytics', 'Data Visualization', 'Data Warehousing',
    'Snowflake Solution', 'DevOps Consulting', 'IT Consulting Services', 'IT Support Services',
    'IT Outsourcing Services', 'Offshore Development'
  ]
};

const travelCategories = {
  'TRAVEL BOOKING ENGINE': [
    'Hotel Booking Engine', 'Car Rental Booking Engine', 'Cruise Booking Engine', 'Bus Reservation System',
    'Activities Booking Solution', 'Vacation Rental Management System', 'Flight Booking Engine'
  ],
  'TRAVEL PORTAL DEVELOPMENT': [
    'B2B Travel Portal', 'B2C Travel Portal', 'Custom Travel Portal', 'Hotel Extranet',
    'B2B Flight Booking Portal', 'Air Ticket Booking Portal'
  ],
  'TRAVEL API INTEGRATION': [
    'NDC API Integration', 'Amadeus API Integration', 'Sabre API Integration', 'GDS Integration',
    'Expedia API Integration', 'Payment Gateway Integration', 'Travel Customer Support and Service', 'Flight Booking API Integration'
  ]
};

const hireCategories = {
  'FRONTEND': [
    'Hire Electron Js Developers', 'Hire ReactJS Developers', 'Hire NextJS Developers', 'Hire HTML Developers',
    'Hire Angular Developers', 'Hire Magento Developers', 'Hire GatsbyJS Developers', 'Hire Extjs Developers'
  ],
  'BACKEND': [
    'Hire NodeJS Developers', 'Hire Laravel Developers', 'Hire Python Developers', 'Hire NestJS Developers',
    'Hire ExpressJS Developers', 'Hire .Net Developers', 'Hire Hapi.js Developers', 'Hire Fastify Developers', 'Hire Golang Developers'
  ],
  'MOBILE': [
    'Hire Android App Developer', 'Hire React Native Developers', 'Hire Flutter Developers',
    'Hire Kotlin Developers', 'Hire Swift Developers', 'Hire iOS Developers'
  ],
  'TRENDING TECHNOLOGY': [
    'Hire Remote Developers', 'Hire Dedicated Developers', 'Hire Full Stack Developer', 'Hire DevOps Engineers',
    'Hire QA Engineers', 'Hire Front End Developer', 'Hire Payload CMS Developers', 'Hire DevOps automation Engineers', 'Hire TypeScript Developers'
  ]
};

const aboutCategories = {
  'ABOUT COMPANY': [
    'About', 'HR Consultancy', 'Careers', 'Privacy Policy', 'Terms & Conditions', 'Refund and Cancellation Policy'
  ],
  'INSIGHT': [
    'Blogs', 'Portfolio', 'Case Studies', 'Videos', 'Center Of Excellence', 'Glossary'
  ]
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { user, profile, isAdmin } = useAuth();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Signed out successfully');
    }
  };

  const NavDropdown = ({ title, categories, isOpen }: { title: string, categories: any, isOpen: boolean }) => (
    <div className="group relative">
      <button className="nav-link flex items-center gap-1 px-4 py-2">
        {title} <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="mega-menu">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(categories).map(([category, items]) => (
                <div key={category} className="space-y-4">
                  <h3 className="font-semibold text-primary text-sm uppercase tracking-wider border-b border-border pb-2">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {(items as string[]).map((item: string) => (
                      <li key={item}>
                        <Link 
                          to={`/${item.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-card shadow-lg sticky top-0 z-50 border-b">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@guidesoft.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Follow Us:</span>
            <div className="flex gap-2">
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={gsLogo} alt="GuideSoft Solutions" className="w-12 h-12" />
            <div>
              <div className="font-bold text-xl text-primary">GuideSoft Solutions</div>
              <div className="text-xs text-muted-foreground">IT Solutions & Development</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavDropdown title="Services" categories={serviceCategories} isOpen={activeDropdown === 'services'} />
            <NavDropdown title="Solutions" categories={solutionCategories} isOpen={activeDropdown === 'solutions'} />
            <NavDropdown title="Travel" categories={travelCategories} isOpen={activeDropdown === 'travel'} />
            <NavDropdown title="Hire Us" categories={hireCategories} isOpen={activeDropdown === 'hire'} />
            <NavDropdown title="About" categories={aboutCategories} isOpen={activeDropdown === 'about'} />
            <Link to="/contact" className="nav-link px-4 py-2">Contact</Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>
            
            {user ? (
              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4" />
                  <span>{profile?.full_name || user.email}</span>
                  {isAdmin && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-accent/20 rounded-full">
                      <Shield className="h-3 w-3 text-accent" />
                      <span className="text-xs text-accent font-medium">Admin</span>
                    </div>
                  )}
                </div>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button asChild variant="outline" size="sm" className="hidden md:flex">
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
            
            <Button className="btn-primary hidden md:flex">
              Get Free Consultation
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <Link to="/services" className="block py-2 nav-link">Services</Link>
              <Link to="/solutions" className="block py-2 nav-link">Solutions</Link>
              <Link to="/travel" className="block py-2 nav-link">Travel</Link>
              <Link to="/hire" className="block py-2 nav-link">Hire Us</Link>
              <Link to="/about" className="block py-2 nav-link">About</Link>
              <Link to="/contact" className="block py-2 nav-link">Contact</Link>
              <Button className="btn-primary w-full mt-4">
                Get Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;