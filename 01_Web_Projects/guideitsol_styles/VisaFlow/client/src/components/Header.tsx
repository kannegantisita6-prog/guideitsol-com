import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/ui/cta-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const visaServices = [
    { name: "Study Abroad Visas", path: "/study-abroad-visas" },
    { name: "Work & Business Visas", path: "/work-business-visas" },
    { name: "Travel & Tourism Visas", path: "/travel-tourism-visas" },
    { name: "Visa Extension & Renewal", path: "/visa-extension-renewal" },
    { name: "Document Verification", path: "/document-verification" },
    { name: "Immigration Consultation", path: "/immigration-consultation" },
  ];

  const itServices = [
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "Software Development", path: "/software-development" },
    { name: "UI/UX Design", path: "/uiux-design" },
    { name: "Data Analytics", path: "/data-analytics" },
    { name: "Cybersecurity", path: "/cybersecurity" },
    { name: "Digital Marketing", path: "/digital-marketing" },
  ];

  const aiMlServices = [
    { name: "AI Agent Builder", path: "/ai-agent-builder" },
    { name: "IT Operations", path: "/it-operations" },
    { name: "Automation Workflows", path: "/automation-workflows" },
    { name: "Backend Prototyping", path: "/backend-prototyping" },
    { name: "Lead Management", path: "/lead-management" },
    { name: "AI Development", path: "/ai-development" },
    { name: "Self N8N Hosting", path: "/self-n8n-hosting" },
  ];

  const companyPages = [
    { name: "About Us", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="Guidesoft Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold gradient-text">Guidesoft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Home */}
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            {/* Visa Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    visaServices.some(service => isActive(service.path)) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  Visa Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {visaServices.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      href={service.path}
                      className={`w-full ${
                        isActive(service.path) ? "bg-accent" : ""
                      }`}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* IT Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    itServices.some(service => isActive(service.path)) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {itServices.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      href={service.path}
                      className={`w-full ${
                        isActive(service.path) ? "bg-accent" : ""
                      }`}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* AI/ML Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    aiMlServices.some(service => isActive(service.path)) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  AI / ML Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {aiMlServices.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      href={service.path}
                      className={`w-full ${
                        isActive(service.path) ? "bg-accent" : ""
                      }`}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    companyPages.some(page => isActive(page.path)) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  Company
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {companyPages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link
                      href={page.path}
                      className={`w-full ${
                        isActive(page.path) ? "bg-accent" : ""
                      }`}
                    >
                      {page.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-sm border-stellar-orange text-stellar-orange hover:bg-stellar-orange hover:text-white"
            >
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <CTAButton
              variant="contact"
              className="bg-gradient-to-r from-stellar-orange to-electric-blue hover:from-stellar-orange/90 hover:to-electric-blue/90"
            >
              Get Started
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="space-y-4">
              {/* Home */}
              <Link
                href="/"
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Visa Services */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-foreground">Visa Services</div>
                {visaServices.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`block pl-4 text-sm transition-colors hover:text-primary ${
                      isActive(service.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* IT Services */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-foreground">IT Services</div>
                {itServices.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`block pl-4 text-sm transition-colors hover:text-primary ${
                      isActive(service.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* AI / ML Services */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-foreground">AI / ML Services</div>
                {aiMlServices.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`block pl-4 text-sm transition-colors hover:text-primary ${
                      isActive(service.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Company Pages */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-foreground">Company</div>
                {companyPages.map((page) => (
                  <Link
                    key={page.path}
                    href={page.path}
                    className={`block pl-4 text-sm transition-colors hover:text-primary ${
                      isActive(page.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="text-sm border-stellar-orange text-stellar-orange hover:bg-stellar-orange hover:text-white mb-2 w-full"
                >
                  <Link href="/book-appointment">Book Appointment</Link>
                </Button>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Mail className="h-4 w-4" />
                  <span>info@Guidesoft.com</span>
                </div>
                <CTAButton
                  variant="contact"
                  className="w-full bg-gradient-to-r from-stellar-orange to-electric-blue hover:from-stellar-orange/90 hover:to-electric-blue/90"
                >
                  Get Started
                </CTAButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
