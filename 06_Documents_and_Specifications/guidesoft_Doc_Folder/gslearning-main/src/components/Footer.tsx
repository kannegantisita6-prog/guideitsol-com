import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/gslogo.png" alt="Guidesoft" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Guidesoft</h3>
                <p className="text-sm text-gray-400">Learning Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Master Development, Design, Deploy. Join thousands of developers advancing their careers with premium courses, live workshops, and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Frontend Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Backend Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Full Stack Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">DevOps & Cloud</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:sale@guideitsol.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Sales & Courses</div>
                  <div>sale@guideitsol.com</div>
                </div>
              </a>
              <a href="mailto:support@guideitsol.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Technical Support</div>
                  <div>support@guideitsol.com</div>
                </div>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-medium">Address</div>
                  <div>Bangalore, India</div>
                </div>
              </div>
            </div>

            {/* Full Course CTA */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
              <h5 className="font-semibold mb-2 flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span>Need Full Courses?</span>
              </h5>
              <p className="text-sm text-gray-300 mb-3">
                Get comprehensive full-stack development courses tailored to your needs.
              </p>
              <a
                href="mailto:sale@guideitsol.com"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Contact: sale@guideitsol.com →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Guidesoft Learning Platform. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}