import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Workflow, 
  Zap, 
  Clock, 
  Target, 
  BarChart3, 
  Settings,
  ArrowRight,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/cta-button";

const AutomationWorkflows = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Visual Workflow Builder",
      description: "Create complex automation workflows with our intuitive drag-and-drop interface.",
      benefits: ["Drag & Drop Interface", "Pre-built Templates", "Real-time Testing"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Smart Triggers",
      description: "Set up intelligent triggers that automatically start workflows based on events and conditions.",
      benefits: ["Event-based Triggers", "Conditional Logic", "Multi-step Actions"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Monitor workflow performance, track success rates, and optimize automation efficiency.",
      benefits: ["Real-time Metrics", "Success Tracking", "Performance Optimization"]
    }
  ];

  const workflowTypes = [
    {
      title: "Business Process Automation",
      description: "Automate repetitive business processes and workflows",
      icon: <Workflow className="h-6 w-6" />
    },
    {
      title: "Data Integration",
      description: "Connect and synchronize data across multiple systems",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Notification Systems",
      description: "Automated alerts and notifications for critical events",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Report Generation",
      description: "Automated report creation and distribution workflows",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Design Workflow",
      description: "Use our visual builder to create automation workflows with drag-and-drop simplicity",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      step: "02", 
      title: "Configure Triggers",
      description: "Set up smart triggers and conditions to automatically start your workflows",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      step: "03",
      title: "Deploy & Monitor",
      description: "Deploy workflows and monitor performance with real-time analytics and insights",
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
              <Workflow className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">AI / ML Services</Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Intelligent</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Automation Workflows
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Streamline your business processes with powerful automation workflows that save time, 
              reduce errors, and boost productivity across your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <CTAButton
                variant="contact"
                className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold px-8 py-3"
              >
                Start Automating
              </CTAButton>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-3"
              >
                View Templates
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Workflows Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">80%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Reliability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Integrations</div>
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
            <h2 className="text-4xl font-bold">Powerful Automation Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build sophisticated automation workflows with enterprise-grade reliability and performance.
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
            <h2 className="text-4xl font-bold">Build Workflows in 3 Steps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, create powerful automation workflows in minutes.
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
                        <Workflow className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">N8N Workflow Visualization</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Types Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold">Automation Workflow Types</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automate any business process with our comprehensive workflow solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowTypes.map((type, index) => (
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
                        {type.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {type.description}
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of businesses already saving time and reducing errors 
              with our automation workflow solutions.
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
                View Workflow Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutomationWorkflows;
