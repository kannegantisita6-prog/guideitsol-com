import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  BarChart3, 
  Database, 
  Brain, 
  TrendingUp, 
  Zap, 
  Target, 
  Cpu, 
  Globe, 
  Settings,
  PieChart,
  LineChart,
  Activity
} from "lucide-react";

const DataAnalytics = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-gold/20 rounded-3xl glass-card flex items-center justify-center">
        <BarChart3 className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Brain className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-gold to-stellar-orange rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Database className="text-white" />
      </div>
    </div>
  );

  const analyticsServices = [
    {
      icon: <Database className="text-2xl text-white" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure to collect, process, and store your data efficiently.",
      benefits: ["Data Pipeline Development", "ETL/ELT Processes", "Data Warehouse Design", "Real-time Data Processing"],
      buttonText: "Engineer Your Data",
      gradient: "bg-gradient-to-r from-neon-cyan to-gold"
    },
    {
      icon: <PieChart className="text-2xl text-white" />,
      title: "Business Intelligence & Reporting",
      description: "Transform raw data into actionable insights with comprehensive BI solutions and interactive dashboards.",
      benefits: ["Interactive Dashboards", "Automated Reporting", "KPI Monitoring", "Self-Service Analytics"],
      buttonText: "Build BI Solution",
      gradient: "bg-gradient-to-r from-gold to-electric-blue"
    },
    {
      icon: <Brain className="text-2xl text-white" />,
      title: "AI/ML & Generative AI Solutions",
      description: "Leverage artificial intelligence and machine learning to automate processes and generate insights.",
      benefits: ["Machine Learning Models", "Predictive Analytics", "Generative AI Integration", "Natural Language Processing"],
      buttonText: "Implement AI Solutions",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-purple"
    }
  ];

  const additionalServices = [
    {
      icon: <TrendingUp className="text-2xl text-white" />,
      title: "Advanced Analytics",
      description: "Deep statistical analysis and predictive modeling to uncover hidden patterns in your data.",
      benefits: ["Statistical Analysis", "Predictive Modeling", "Forecasting", "Trend Analysis"],
      buttonText: "Analyze Trends",
      gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
    },
    {
      icon: <Target className="text-2xl text-white" />,
      title: "Data Strategy & Consulting",
      description: "Strategic guidance on data governance, architecture, and analytics roadmap planning.",
      benefits: ["Data Strategy Development", "Governance Framework", "Analytics Roadmap", "ROI Assessment"],
      buttonText: "Plan Data Strategy",
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
    },
    {
      icon: <Activity className="text-2xl text-white" />,
      title: "Real-time Analytics",
      description: "Monitor and analyze data in real-time to make immediate business decisions and responses.",
      benefits: ["Stream Processing", "Real-time Dashboards", "Alert Systems", "Live Monitoring"],
      buttonText: "Go Real-time",
      gradient: "bg-gradient-to-r from-neon-cyan to-electric-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="Data & Analytics"
        subtitle="Unlock the Power of Your Data"
        description="Transform your business with data-driven insights and intelligent automation. Our comprehensive analytics services help you harness the full potential of your data to drive growth and innovation."
        primaryButtonText="Start Analytics Project"
        secondaryButtonText="Explore AI Solutions"
        heroImage={heroImage}
      />

      {/* Core Analytics Services */}
      <section className="py-20 relative" data-testid="core-analytics-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Core Analytics Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From data engineering to AI implementation, we provide end-to-end analytics solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative" data-testid="additional-services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Advanced Analytics Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized analytics services to address complex business challenges and opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative" data-testid="technology-stack-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Analytics Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge tools and platforms to deliver powerful analytics solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <Database className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Platforms</h3>
              <p className="text-muted-foreground">AWS, Azure, GCP, Snowflake, Databricks</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Brain className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI/ML Tools</h3>
              <p className="text-muted-foreground">TensorFlow, PyTorch, Scikit-learn, OpenAI</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <BarChart3 className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visualization</h3>
              <p className="text-muted-foreground">Tableau, Power BI, D3.js, Plotly</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Settings className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Processing</h3>
              <p className="text-muted-foreground">Apache Spark, Kafka, Airflow, dbt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Process */}
      <section className="py-20 relative" data-testid="analytics-process-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Analytics Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven approach to delivering analytics solutions that drive measurable business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <Target className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">Understanding business objectives and data landscape</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Database className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Prep</h3>
              <p className="text-muted-foreground">Collecting, cleaning, and preparing data for analysis</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Brain className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modeling</h3>
              <p className="text-muted-foreground">Building and training analytical models</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <LineChart className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visualization</h3>
              <p className="text-muted-foreground">Creating intuitive dashboards and reports</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Zap className="text-4xl text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-muted-foreground">Implementing solutions and monitoring performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative" data-testid="use-cases-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Analytics Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications of our analytics solutions across various industries and functions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <TrendingUp className="text-3xl text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sales Forecasting</h3>
              <p className="text-muted-foreground">Predict future sales trends and optimize inventory management</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Target className="text-3xl text-electric-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Analytics</h3>
              <p className="text-muted-foreground">Understand customer behavior and improve retention rates</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Cpu className="text-3xl text-stellar-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-muted-foreground">Optimize processes and reduce operational costs</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Globe className="text-3xl text-neon-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Intelligence</h3>
              <p className="text-muted-foreground">Analyze market trends and competitive landscape</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Brain className="text-3xl text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fraud Detection</h3>
              <p className="text-muted-foreground">Identify and prevent fraudulent activities using AI</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Activity className="text-3xl text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Monitoring</h3>
              <p className="text-muted-foreground">Real-time monitoring of business KPIs and metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how our data and analytics solutions can transform your business and drive data-driven decision making.
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

export default DataAnalytics;