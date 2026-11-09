import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import gsLogo from '@/assets/gslogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    'Web Development', 'Mobile App Development', 'Custom Software', 'UI/UX Design',
    'Digital Marketing', 'DevOps Services', 'Cloud Solutions', 'E-commerce Development'
  ];

  const solutionLinks = [
    'Booking Systems', 'Food Delivery Apps', 'eLearning Platforms', 'HRMS Solutions',
    'Data Analytics', 'Travel Portals', 'Healthcare Solutions', 'Fintech Solutions'
  ];

  const companyLinks = [
    'About Us', 'Careers', 'Portfolio', 'Case Studies', 'Blog', 'Contact Us'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={gsLogo} alt="GuideSoft Solutions" className="w-12 h-12" />
              <div>
                <div className="font-bold text-xl text-white">GuideSoft Solutions</div>
                <div className="text-sm text-gray-400">IT Solutions & Development</div>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Leading IT solutions company delivering innovative software development, 
              web applications, mobile apps, and digital transformation services to 
              businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link 
                    to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Solutions</h3>
            <ul className="space-y-3">
              {solutionLinks.map((solution) => (
                <li key={solution}>
                  <Link 
                    to={`/${solution.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>123 Business Center</div>
                  <div>New York, NY 10001</div>
                  <div>United States</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">contact@guidesoft.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold">Newsletter</h4>
              <p className="text-gray-300 text-sm">
                Subscribe to get latest updates and industry insights.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email address" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button className="btn-primary">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Certifications */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <h4 className="font-semibold text-lg">Certifications & Awards</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-sm">ISO 9001:2015 Certified</div>
              <div className="text-sm">CMMI Level 3</div>
              <div className="text-sm">Microsoft Gold Partner</div>
              <div className="text-sm">AWS Advanced Partner</div>
              <div className="text-sm">Top Developer 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} GuideSoft Solutions. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
              <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;