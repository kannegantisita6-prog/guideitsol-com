import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  TrendingUp, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/cta-button";

const LeadManagement = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Lead Scoring",
      description: "AI-powered lead scoring to identify high-value prospects and prioritize sales efforts.",
      benefits: ["Behavioral Analysis", "Predictive Scoring", "Real-time Updates"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lead Nurturing",
      description: "Automated nurturing campaigns that guide leads through the sales funnel with personalized content.",
      benefits: ["Email Automation", "Content Personalization", "Multi-channel Campaigns"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Conversion Analytics",
      description: "Comprehensive analytics and reporting to track lead performance and optimize conversion rates.",
      benefits: ["Conversion Tracking", "ROI Analysis", "Performance Insights"]
    }
  ];

  const services = [
    {
      title: "Lead Capture",
      description: "Multi-channel lead capture forms and landing pages",
      icon: <Mail className="h-6 w-6" />
    },
    {
      title: "Lead Qualification",
      description: "Automated qualification and routing of incoming leads",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Follow-up Automation",
      description: "Automated follow-up sequences and reminder systems",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Revenue Tracking",
      description: "Track lead-to-revenue conversion and pipeline performance",
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Lead Capture",
      description: "Capture leads from multiple channels with intelligent forms and landing pages",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      step: "02", 
      title: "Qualification & Scoring",
      description: "Automatically qualify and score leads based on behavior and profile data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      step: "03",
      title: "Nurturing & Conversion",
      description: "Nurture leads with personalized campaigns and track conversion to sales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
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
              <Target className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">AI / ML Services</Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Intelligent</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Lead Management
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your lead generation and management with AI-powered tools that capture, 
              qualify, and nurture prospects into paying customers.
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
                View Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Lead Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">45%</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">60%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Lead Processing</div>
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
            <h2 className="text-4xl font-bold">Advanced Lead Management</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered lead management that maximizes conversion and revenue growth.
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
            <h2 className="text-4xl font-bold">Lead Management Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From capture to conversion, optimize every step of your lead journey.
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
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">N8N Lead Management Workflow</p>
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
            <h2 className="text-4xl font-bold">Lead Management Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive lead management solutions for maximum conversion.
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
              Ready to Transform Your Lead Management?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Increase your lead conversion rates and revenue with our intelligent 
              lead management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                variant="contact"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
              >
                Start Free Trial
              </CTAButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeadManagement;
