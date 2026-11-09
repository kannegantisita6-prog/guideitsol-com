import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Lock, 
  Zap, 
  Target, 
  Users, 
  Globe, 
  Settings,
  CheckCircle,
  Activity,
  FileText
} from "lucide-react";

const Cybersecurity = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-neon-purple/20 rounded-3xl glass-card flex items-center justify-center">
        <Shield className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-purple to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Lock className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-stellar-orange to-neon-cyan rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Eye className="text-white" />
      </div>
    </div>
  );

  const securityServices = [
    {
      icon: <Eye className="text-2xl text-white" />,
      title: "Threat Detection & Prevention",
      description: "Advanced threat detection systems to identify and neutralize security threats before they impact your business.",
      benefits: ["24/7 Threat Monitoring", "Intrusion Detection Systems", "Malware Protection", "Advanced Persistent Threat (APT) Detection"],
      buttonText: "Secure Against Threats",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    },
    {
      icon: <FileText className="text-2xl text-white" />,
      title: "Compliance & Risk Assessment",
      description: "Comprehensive security assessments and compliance frameworks to meet industry standards and regulations.",
      benefits: ["Security Audits", "Compliance Frameworks (SOC 2, ISO 27001)", "Risk Assessment", "Vulnerability Testing"],
      buttonText: "Assess Security Risks",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Activity className="text-2xl text-white" />,
      title: "Security Operations Center (SOC)",
      description: "Managed security operations center providing round-the-clock monitoring and incident response.",
      benefits: ["24/7 Security Monitoring", "Incident Response", "Threat Intelligence", "Security Event Management"],
      buttonText: "Setup SOC Services",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    }
  ];

  const additionalServices = [
    {
      icon: <Lock className="text-2xl text-white" />,
      title: "Identity & Access Management",
      description: "Secure identity management solutions to control access to your critical systems and data.",
      benefits: ["Multi-Factor Authentication", "Single Sign-On (SSO)", "Privileged Access Management", "Identity Governance"],
      buttonText: "Manage Access",
      gradient: "bg-gradient-to-r from-neon-cyan to-stellar-orange"
    },
    {
      icon: <Globe className="text-2xl text-white" />,
      title: "Network Security",
      description: "Comprehensive network protection including firewalls, VPNs, and network segmentation.",
      benefits: ["Firewall Management", "VPN Solutions", "Network Segmentation", "DDoS Protection"],
      buttonText: "Secure Network",
      gradient: "bg-gradient-to-r from-stellar-orange to-gold"
    },
    {
      icon: <Settings className="text-2xl text-white" />,
      title: "Security Consulting",
      description: "Strategic security consulting to develop comprehensive cybersecurity strategies and policies.",
      benefits: ["Security Strategy Development", "Policy Creation", "Security Training", "Incident Response Planning"],
      buttonText: "Get Security Consultation",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="Cybersecurity Services"
        subtitle="Protect Your Business from Cyber Threats"
        description="Comprehensive cybersecurity solutions to safeguard your digital assets, ensure compliance, and maintain business continuity. Our expert team provides 24/7 protection against evolving cyber threats."
        primaryButtonText="Secure Your Business"
        secondaryButtonText="Get Security Assessment"
        heroImage={heroImage}
      />

      {/* Core Security Services */}
      <section className="py-20 relative" data-testid="core-security-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Core Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential cybersecurity services to protect your organization from modern threats and ensure compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative" data-testid="additional-services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Comprehensive Security Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced security services to address all aspects of your cybersecurity needs and risk management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 relative" data-testid="security-framework-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Security Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive approach to cybersecurity based on industry best practices and proven methodologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <Target className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Identify</h3>
              <p className="text-muted-foreground">Asset inventory and risk assessment to understand security posture</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Shield className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Protect</h3>
              <p className="text-muted-foreground">Implement safeguards to ensure delivery of critical services</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Eye className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detect</h3>
              <p className="text-muted-foreground">Continuous monitoring to identify cybersecurity events</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Zap className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Respond</h3>
              <p className="text-muted-foreground">Rapid response to contain and mitigate security incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 relative" data-testid="compliance-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Compliance & Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help you meet and maintain compliance with major security standards and regulations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-muted-foreground">Service Organization Control compliance for security and availability</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 27001</h3>
              <p className="text-muted-foreground">International standard for information security management systems</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">GDPR</h3>
              <p className="text-muted-foreground">General Data Protection Regulation compliance for data privacy</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">HIPAA</h3>
              <p className="text-muted-foreground">Healthcare data protection and privacy compliance</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">PCI DSS</h3>
              <p className="text-muted-foreground">Payment Card Industry Data Security Standard compliance</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">NIST Framework</h3>
              <p className="text-muted-foreground">National Institute of Standards and Technology cybersecurity framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 relative" data-testid="threat-landscape-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Modern Threat Landscape</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding and protecting against the evolving cybersecurity threats facing businesses today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-xl text-center">
              <AlertTriangle className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ransomware</h3>
              <p className="text-muted-foreground">Malicious software that encrypts data and demands payment</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <Users className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Engineering</h3>
              <p className="text-muted-foreground">Psychological manipulation to gain unauthorized access</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <Globe className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Persistent Threats</h3>
              <p className="text-muted-foreground">Long-term targeted attacks by sophisticated adversaries</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <Lock className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Breaches</h3>
              <p className="text-muted-foreground">Unauthorized access to sensitive business information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't wait for a security incident. Contact us today to assess your current security posture and implement comprehensive protection.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;