import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Zap, 
  Database, 
  Server, 
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Layers,
  Cpu
} from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/cta-button";

const BackendPrototyping = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Prototyping",
      description: "Build and test backend prototypes in hours, not weeks, with our accelerated development platform.",
      benefits: ["Quick Setup", "Pre-built Components", "Instant Testing"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Integration",
      description: "Seamlessly integrate with multiple database systems and data sources for comprehensive backend solutions.",
      benefits: ["Multi-DB Support", "Data Migration", "Real-time Sync"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security First",
      description: "Built-in security features and best practices to ensure your backend prototypes are production-ready.",
      benefits: ["Authentication", "Authorization", "Data Encryption"]
    }
  ];

  const services = [
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs with automatic documentation",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Database Design",
      description: "Schema design and optimization for scalable applications",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Microservices",
      description: "Containerized microservices architecture and deployment",
      icon: <Server className="h-6 w-6" />
    },
    {
      title: "Performance Optimization",
      description: "Caching, load balancing, and performance monitoring",
      icon: <Cpu className="h-6 w-6" />
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Analyze your backend requirements and design the optimal architecture",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      step: "02", 
      title: "Rapid Development",
      description: "Build your backend prototype using our development tools and frameworks",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      step: "03",
      title: "Testing & Deployment",
      description: "Comprehensive testing and deployment to staging and production environments",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
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
              <Code className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">AI / ML Services</Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Backend</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Prototyping
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Accelerate your backend development with rapid prototyping solutions that help you 
              validate ideas, test concepts, and build scalable applications faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <CTAButton
                variant="contact"
                className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold px-8 py-3"
              >
                Start Prototyping
              </CTAButton>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-3"
              >
                View Examples
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10x</div>
                <div className="text-sm text-muted-foreground">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Prototypes Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
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
            <h2 className="text-4xl font-bold">Rapid Backend Development</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build, test, and deploy backend prototypes with enterprise-grade tools and frameworks.
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
            <h2 className="text-4xl font-bold">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to production-ready backend in record time.
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
                        <Layers className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">N8N Backend Workflow</p>
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
            <h2 className="text-4xl font-bold">Backend Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive backend solutions for modern applications.
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
              Ready to Build Your Backend?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get your backend prototype up and running in 24 hours with our 
              rapid development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                variant="contact"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
              >
                Start Your Project
              </CTAButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BackendPrototyping;
