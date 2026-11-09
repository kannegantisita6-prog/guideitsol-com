import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import ParticleBackground from "@/components/ParticleBackground";
import SEO from "@/components/SEO";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import StudyAbroadVisas from "@/pages/StudyAbroadVisas";
import WorkBusinessVisas from "@/pages/WorkBusinessVisas";
import TravelTourismVisas from "@/pages/TravelTourismVisas";
import VisaExtensionRenewal from "@/pages/VisaExtensionRenewal";
import DocumentVerification from "@/pages/DocumentVerification";
import ImmigrationConsultation from "@/pages/ImmigrationConsultation";
import ITConsulting from "@/pages/ITConsulting";
import SoftwareDevelopment from "@/pages/SoftwareDevelopment";
import UIUXDesign from "@/pages/UIUXDesign";
import DataAnalytics from "@/pages/DataAnalytics";
import Cybersecurity from "@/pages/Cybersecurity";
import DigitalMarketing from "@/pages/DigitalMarketing";
import AIAgentBuilder from "@/pages/AIAgentBuilder";
import ITOperations from "@/pages/ITOperations";
import AutomationWorkflows from "@/pages/AutomationWorkflows";
import BackendPrototyping from "@/pages/BackendPrototyping";
import LeadManagement from "@/pages/LeadManagement";
import AIDevelopment from "@/pages/AIDevelopment";
import SelfN8NHosting from "@/pages/SelfN8NHosting";
import About from "@/pages/About";
import Career from "@/pages/Career";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/not-found";

function withSEO(Component: any, title: string, description?: string) {
  return () => (
    <>
      <SEO title={title} description={description} />
      <Component />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={withSEO(Home, "GuideITSol — Home", "Tech, visas, and consulting services to accelerate your goals.")} />
      <Route path="/services" component={withSEO(Services, "GuideITSol — Services", "Explore our complete suite: visas, IT, AI, design, cybersecurity and more.")} />
      <Route path="/study-abroad-visas" component={withSEO(StudyAbroadVisas, "GuideITSol — Study Abroad Visas", "University admissions guidance and visa assistance for global education.")} />
      <Route path="/work-business-visas" component={withSEO(WorkBusinessVisas, "GuideITSol — Work & Business Visas", "Skilled worker, entrepreneur, and investor visa assistance.")} />
      <Route path="/travel-tourism-visas" component={withSEO(TravelTourismVisas, "GuideITSol — Travel & Tourism Visas", "Tourist visa processing with end-to-end support.")} />
      <Route path="/visa-extension-renewal" component={withSEO(VisaExtensionRenewal, "GuideITSol — Visa Extension & Renewal", "Fast, compliant extensions and renewals.")} />
      <Route path="/document-verification" component={withSEO(DocumentVerification, "GuideITSol — Document Verification", "Secure document checks and attestation support.")} />
      <Route path="/immigration-consultation" component={withSEO(ImmigrationConsultation, "GuideITSol — Immigration Consultation", "Personalized immigration strategies by experts.")} />
      <Route path="/it-consulting" component={withSEO(ITConsulting, "GuideITSol — IT Consulting", "Architecture, scalability, and cloud cost optimization.")} />
      <Route path="/software-development" component={withSEO(SoftwareDevelopment, "GuideITSol — Software Development", "Full‑stack web and mobile app development services.")} />
      <Route path="/uiux-design" component={withSEO(UIUXDesign, "GuideITSol — UI/UX Design", "Human‑centered product design and audits.")} />
      <Route path="/data-analytics" component={withSEO(DataAnalytics, "GuideITSol — Data Analytics", "Dashboards, analytics pipelines, and data insights.")} />
      <Route path="/cybersecurity" component={withSEO(Cybersecurity, "GuideITSol — Cybersecurity", "Security assessments, hardening, and compliance.")} />
      <Route path="/digital-marketing" component={withSEO(DigitalMarketing, "GuideITSol — Digital Marketing", "SEO, ads, social campaigns, and CRO.")} />
      {/* AI/ML Services */}
      <Route path="/ai-agent-builder" component={withSEO(AIAgentBuilder, "GuideITSol — AI Agent Builder", "Production-ready AI assistants tailored to your workflows.")} />
      <Route path="/it-operations" component={withSEO(ITOperations, "GuideITSol — IT Operations", "Observability, automation, and SRE practices.")} />
      <Route path="/automation-workflows" component={withSEO(AutomationWorkflows, "GuideITSol — Automation Workflows", "N8N, Zapier, and custom orchestration.")} />
      <Route path="/backend-prototyping" component={withSEO(BackendPrototyping, "GuideITSol — Backend Prototyping", "Rapid API design and MVP backends.")} />
      <Route path="/lead-management" component={withSEO(LeadManagement, "GuideITSol — Lead Management", "Capture, qualify, and convert with CRM integrations.")} />
      <Route path="/ai-development" component={withSEO(AIDevelopment, "GuideITSol — AI Development", "LLM apps, RAG, and model integrations.")} />
      <Route path="/self-n8n-hosting" component={withSEO(SelfN8NHosting, "GuideITSol — Self N8N Hosting", "Private, scalable N8N automation hosting.")} />
      {/* Company Pages */}
      <Route path="/about" component={withSEO(About, "GuideITSol — About", "Our mission, values, and team.")} />
      <Route path="/career" component={withSEO(Career, "GuideITSol — Careers", "Open roles and how we work.")} />
      <Route path="/blog" component={withSEO(Blog, "GuideITSol — Blog", "Insights on tech, visas, and growth.")} />
      <Route path="/contact" component={withSEO(Contact, "GuideITSol — Contact", "Reach us at info@guideitsol.com.")} />
      <Route path="/privacy-policy" component={withSEO(PrivacyPolicy, "GuideITSol — Privacy Policy", "How we handle your data.")} />
      <Route path="/terms-of-service" component={withSEO(TermsOfService, "GuideITSol — Terms of Service", "Usage terms and service policies.")} />
      <Route component={withSEO(NotFound, "GuideITSol — Not Found", "The page you are looking for doesn’t exist.")} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <div className="min-h-screen relative overflow-x-hidden">
            <ParticleBackground />
            <Header />

            <main className="relative z-10 pt-16">
              <Router />
            </main>
            <Footer />
            <FloatingActionButton />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
