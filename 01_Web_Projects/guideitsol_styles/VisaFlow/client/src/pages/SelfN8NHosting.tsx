import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Shield, 
  Zap, 
  Database, 
  ArrowRight,
  CheckCircle,
  Cloud,
  Settings,
  Lock,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/cta-button";

const SelfN8NHosting = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Self-Hosted N8N",
      description: "Deploy and manage your own N8N instance with full control over data and infrastructure.",
      benefits: ["Full Data Control", "Custom Configurations", "Unlimited Workflows"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with encryption, access controls, and compliance features.",
      benefits: ["End-to-End Encryption", "Role-Based Access", "Audit Logging"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Performance",
      description: "Optimized for performance with scalable infrastructure and monitoring capabilities.",
      benefits: ["Auto-scaling", "Performance Monitoring", "Load Balancing"]
    }
  ];

  const services = [
    {
      title: "N8N Installation",
      description: "Complete N8N setup and configuration on your infrastructure",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "Custom Integrations",
      description: "Build custom nodes and integrations for your specific needs",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Security Hardening",
      description: "Implement security best practices and compliance measures",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Global Deployment",
      description: "Deploy N8N across multiple regions for optimal performance",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Infrastructure Setup",
      description: "Set up secure infrastructure and deploy N8N with custom configurations",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      step: "02", 
      title: "Security Configuration",
      description: "Implement security measures, access controls, and monitoring systems",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      step: "03",
      title: "Workflow Migration",
      description: "Migrate existing workflows and set up new automation processes",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Server className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">AI / ML Services</Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Self</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                N8N Hosting
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take full control of your automation workflows with self-hosted N8N solutions. 
              Deploy, manage, and scale your N8N instance with enterprise-grade security and performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <CTAButton
                variant="contact"
                className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold px-8 py-3"
              >
                Get Started
              </CTAButton>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-3"
              >
                View Pricing
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Data Control</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Workflows</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold">Self-Hosted N8N Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete control over your automation platform with enterprise-grade features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold">N8N Hosting Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From setup to optimization, we handle every aspect of your N8N deployment.
            </p>
          </motion.div>

          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="flex items-center space-x-2 text-primary font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 h-64 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                        <Database className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">N8N Hosting Workflow</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold">N8N Hosting Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete N8N hosting and management solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Host Your Own N8N?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Take control of your automation workflows with our self-hosted N8N solutions 
              and enterprise-grade support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                variant="contact"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
              >
                Start Hosting
              </CTAButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
              >
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SelfN8NHosting;
