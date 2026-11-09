import React from 'react';
import { Shield, Eye, Lock, Users, Globe, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="w-6 h-6 text-neon-cyan" />,
      content: [
        "Personal identification information (name, email, phone number, address)",
        "Professional information (employment details, education background)",
        "Immigration-related documents and information",
        "Technical information (IP address, browser type, device information)",
        "Usage data and website analytics",
        "Communication records and correspondence"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Users className="w-6 h-6 text-stellar-orange" />,
      content: [
        "Provide IT services and visa consultation services",
        "Process visa applications and related documentation",
        "Communicate with you about our services",
        "Improve our website and service offerings",
        "Comply with legal and regulatory requirements",
        "Send important updates and notifications"
      ]
    },
    {
      title: "Information Sharing",
      icon: <Globe className="w-6 h-6 text-electric-blue" />,
      content: [
        "Government agencies and immigration authorities (as required for visa processing)",
        "Trusted third-party service providers (with strict confidentiality agreements)",
        "Legal authorities (when required by law or to protect our rights)",
        "Business partners (only with your explicit consent)",
        "We never sell your personal information to third parties"
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="w-6 h-6 text-neon-cyan" />,
      content: [
        "Industry-standard encryption for data transmission and storage",
        "Secure servers with regular security updates and monitoring",
        "Access controls and authentication measures",
        "Regular security audits and vulnerability assessments",
        "Employee training on data protection and privacy",
        "Incident response procedures for data breaches"
      ]
    },
    {
      title: "Your Rights",
      icon: <Shield className="w-6 h-6 text-stellar-orange" />,
      content: [
        "Access your personal information we hold",
        "Request correction of inaccurate information",
        "Request deletion of your personal information (subject to legal requirements)",
        "Object to processing of your personal information",
        "Request data portability",
        "Withdraw consent (where processing is based on consent)"
      ]
    },
    {
      title: "Cookies and Tracking",
      icon: <Eye className="w-6 h-6 text-electric-blue" />,
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand website usage",
        "Marketing cookies for personalized content (with your consent)",
        "Third-party cookies from integrated services",
        "You can control cookie preferences through your browser settings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmic-purple to-stellar-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-electric-blue to-stellar-orange bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Shield className="w-5 h-5" />
            <span>Last updated: March 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-electric-blue/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              GuideIT Solutions ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. We encourage you to read this policy carefully and contact us if you have any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-cosmic-purple/20 to-deep-space/20 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-stellar-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-stellar-orange/10 to-neon-cyan/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p>
                For visa and immigration services, we may be required to retain certain documents and information for extended periods as mandated by immigration authorities and legal requirements.
              </p>
              <p>
                When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-electric-blue/10 to-cosmic-purple/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">International Data Transfers</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                As we operate globally and provide services across multiple countries, your personal information may be transferred to and processed in countries other than your country of residence.
              </p>
              <p>
                We ensure that such transfers are conducted in accordance with applicable data protection laws and that appropriate safeguards are in place to protect your personal information.
              </p>
              <p>
                For visa processing, information may need to be shared with immigration authorities in the destination country as part of the application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-stellar-orange/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Children's Privacy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 years of age.
              </p>
              <p>
                If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately so we can take appropriate action.
              </p>
              <p>
                For student visa applications involving minors, we work with parents or legal guardians and follow additional privacy protections as required by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cosmic-purple/20 to-deep-space/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Questions About This Policy?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> privacy@guideitsol.com</p>
      
              <p><strong>Address:</strong> 123 Innovation Drive, Tech District, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-stellar-orange/10 to-electric-blue/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Policy Updates</h3>
            <p className="text-gray-300 text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;