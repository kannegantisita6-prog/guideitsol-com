import React from 'react';
import { FileText, Shield, AlertTriangle, Users, Globe, Scale } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <FileText className="w-6 h-6 text-neon-cyan" />,
      content: [
        "By accessing and using GuideIT Solutions' services, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our services.",
        "These terms apply to all users, including visitors, customers, and other users of our services.",
        "We reserve the right to update these terms at any time without prior notice."
      ]
    },
    {
      title: "Services Description",
      icon: <Users className="w-6 h-6 text-stellar-orange" />,
      content: [
        "We provide IT consulting, software development, UI/UX design, data analytics, and cybersecurity services.",
        "We offer visa and immigration services including consultation, application assistance, and document verification.",
        "Our services are provided on a professional basis with industry-standard practices.",
        "Service availability may vary by location and is subject to applicable laws and regulations."
      ]
    },
    {
      title: "User Responsibilities",
      icon: <Shield className="w-6 h-6 text-electric-blue" />,
      content: [
        "Provide accurate and complete information when using our services.",
        "Maintain the confidentiality of your account credentials.",
        "Use our services only for lawful purposes and in accordance with these terms.",
        "Respect intellectual property rights and not infringe on third-party rights.",
        "Comply with all applicable laws and regulations in your jurisdiction."
      ]
    },
    {
      title: "Payment Terms",
      icon: <Scale className="w-6 h-6 text-neon-cyan" />,
      content: [
        "Payment is due according to the terms specified in your service agreement.",
        "All fees are non-refundable unless otherwise specified in writing.",
        "We reserve the right to suspend services for non-payment.",
        "Additional charges may apply for expedited services or changes to scope.",
        "All prices are subject to applicable taxes and fees."
      ]
    },
    {
      title: "Intellectual Property",
      icon: <Globe className="w-6 h-6 text-stellar-orange" />,
      content: [
        "All content, trademarks, and intellectual property on our website belong to GuideIT Solutions.",
        "You may not reproduce, distribute, or create derivative works without our written permission.",
        "Custom software and solutions developed for clients remain the property of the client upon full payment.",
        "We retain rights to general methodologies, processes, and know-how used in service delivery."
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6 text-electric-blue" />,
      content: [
        "Our liability is limited to the amount paid for the specific service in question.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "We do not guarantee visa approval or immigration success as these depend on government decisions.",
        "Force majeure events, including government policy changes, are beyond our control.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you."
      ]
    }
  ];

  const prohibitedUses = [
    "Violating any applicable laws or regulations",
    "Transmitting malicious code or harmful content",
    "Attempting to gain unauthorized access to our systems",
    "Interfering with the proper functioning of our services",
    "Impersonating another person or entity",
    "Collecting personal information without consent",
    "Using our services for fraudulent purposes",
    "Reverse engineering or attempting to extract source code"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmic-purple to-stellar-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-electric-blue to-stellar-orange bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Please read these terms carefully before using our services
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <FileText className="w-5 h-5" />
            <span>Last updated: March 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-electric-blue/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Agreement Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of GuideIT Solutions' website and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We provide professional IT services and immigration consultation services to individuals and businesses worldwide. These Terms establish the legal framework for our professional relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Prohibited Uses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-stellar-orange/10 to-neon-cyan/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-stellar-orange" />
              <h2 className="text-2xl font-bold text-white">Prohibited Uses</h2>
            </div>
            <p className="text-gray-300 mb-6">
              You may not use our services for any of the following prohibited purposes:
            </p>
            <ul className="space-y-3">
              {prohibitedUses.map((use, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-stellar-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Availability */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-electric-blue/10 to-cosmic-purple/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Service Availability and Modifications</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We strive to provide uninterrupted access to our services, but we do not guarantee that our services will be available at all times. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We may also impose limits on certain features or restrict access to parts of our services.
              </p>
              <p>
                For immigration services, processing times and requirements may change due to government policy updates, which are beyond our control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-stellar-orange/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Confidentiality and Data Protection</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We maintain strict confidentiality regarding all client information and adhere to professional standards of data protection. All personal and business information shared with us is treated as confidential.
              </p>
              <p>
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                For detailed information about how we handle your data, please refer to our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cosmic-purple/20 to-deep-space/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms are governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
              <p>
                You agree to waive any right to a jury trial and to participate in class action lawsuits related to these Terms or our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-stellar-orange/10 to-electric-blue/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> legal@guideitsol.com</p>
      
              <p><strong>Address:</strong> 123 Innovation Drive, Tech District, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Severability */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-cosmic-purple/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Severability</h3>
            <p className="text-gray-300 text-sm">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;