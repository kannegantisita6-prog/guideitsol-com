import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderEnhanced from './components/HeaderEnhanced';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import BackendDevelopment from './pages/BackendDevelopment';
import WebAppDevelopment from './pages/WebAppDevelopment';
import NetDevelopment from './pages/NetDevelopment';
import NodeJSDevelopment from './pages/NodeJSDevelopment';
import PythonDevelopment from './pages/PythonDevelopment';
import NestJSDevelopment from './pages/NestJSDevelopment';
import ExpressJSDevelopment from './pages/ExpressJSDevelopment';
import LaravelDevelopment from './pages/LaravelDevelopment';
import ShopifyDevelopment from './pages/ShopifyDevelopment';
import FrontendDevelopment from './pages/FrontendDevelopment';
import ReactJSDevelopment from './pages/ReactJSDevelopment';
import AngularDevelopment from './pages/AngularDevelopment';
import HTMLDevelopment from './pages/HTMLDevelopment';
import NextJSDevelopment from './pages/NextJSDevelopment';
import GatsbyJSDevelopment from './pages/GatsbyJSDevelopment';
import MagentoDevelopment from './pages/MagentoDevelopment';
import ExtJSDevelopment from './pages/ExtJSDevelopment';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import AndroidAppDevelopment from './pages/AndroidAppDevelopment';
import IOSAppDevelopment from './pages/IOSAppDevelopment';
import IoTAppDevelopment from './pages/IoTAppDevelopment';
import NativeAppDevelopment from './pages/NativeAppDevelopment';
import FlutterAppDevelopment from './pages/FlutterAppDevelopment';
import IonicAppDevelopment from './pages/IonicAppDevelopment';
import EnterpriseAppDevelopment from './pages/EnterpriseAppDevelopment';
import ProgressiveWebApps from './pages/ProgressiveWebApps';
import AdvancedEssentialServices from './pages/AdvancedEssentialServices';
import TravelTechnology from './pages/TravelTechnology';
import N8nAutomationExperts from './pages/N8nAutomationExperts';
import UIUXDesignDevelopment from './pages/UIUXDesignDevelopment';
import ECommerceWebDesign from './pages/ECommerceWebDesign';
import ECommerceWebDevelopment from './pages/ECommerceWebDevelopment';
import HealthcareWebsiteDesign from './pages/HealthcareWebsiteDesign';
import MCommerceDevelopment from './pages/MCommerceDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import Solutions from './pages/Solutions';
import OnDemandSolutions from './pages/OnDemandSolutions';
import BookingApp from './pages/BookingApp';
import ChatbotApp from './pages/ChatbotApp';
import FoodDeliveryApp from './pages/FoodDeliveryApp';
import VideoStreamingApp from './pages/VideoStreamingApp';
import QuestionAnswerApp from './pages/QuestionAnswerApp';
import ReverseAuctionApp from './pages/ReverseAuctionApp';
import FlightBookingApp from './pages/FlightBookingApp';
import EventManagementApp from './pages/EventManagementApp';
import SchedulingApp from './pages/SchedulingApp';
import ELearningSolution from './pages/ELearningSolution';
import EmployeeManagementApp from './pages/EmployeeManagementApp';
import HRMSAppSolution from './pages/HRMSAppSolution';
import SurveyAppSolution from './pages/SurveyAppSolution';
import BLEAppSolution from './pages/BLEAppSolution';
import ReactNativeAppSolution from './pages/ReactNativeAppSolution';
import ARAppDevelopment from './pages/ARAppDevelopment';
import EmergingTechSolutions from './pages/EmergingTechSolutions';
import TrendingTechnology from './pages/TrendingTechnology';
import DataAnalytics from './pages/DataAnalytics';
import DevOpsConsulting from './pages/DevOpsConsulting';
import DataVisualization from './pages/DataVisualization';
import DataWarehousing from './pages/DataWarehousing';
import DataEngineering from './pages/DataEngineering';
import SnowflakeSolution from './pages/SnowflakeSolution';
import ITSupportServices from './pages/ITSupportServices';
import ITConsultingServices from './pages/ITConsultingServices';
import Travel from './pages/Travel';
import About from './pages/About';
import Contact from './pages/Contact';
import HireUs from './pages/HireUs';
import GetFreeConsultation from './pages/GetFreeConsultation';
import ServiceNotFound from './pages/ServiceNotFound';
import CloudVPSHosting from './pages/CloudVPSHosting';
import DomainDNSManagement from './pages/DomainDNSManagement';
import DedicatedBackendServers from './pages/DedicatedBackendServers';

function App(): JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans">
        <ScrollToTop />
        <HeaderEnhanced theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/backend-development" element={<BackendDevelopment />} />
            <Route path="/web-app-development" element={<WebAppDevelopment />} />
            <Route path="/net-development" element={<NetDevelopment />} />
            <Route path="/nodejs-development" element={<NodeJSDevelopment />} />
            <Route path="/python-development" element={<PythonDevelopment />} />
            <Route path="/nestjs-development" element={<NestJSDevelopment />} />
            <Route path="/expressjs-development" element={<ExpressJSDevelopment />} />
            <Route path="/laravel-development" element={<LaravelDevelopment />} />
            <Route path="/shopify-development" element={<ShopifyDevelopment />} />
            <Route path="/frontend-development" element={<FrontendDevelopment />} />
            <Route path="/reactjs-development" element={<ReactJSDevelopment />} />
            <Route path="/angular-development" element={<AngularDevelopment />} />
            <Route path="/html-development" element={<HTMLDevelopment />} />
            <Route path="/nextjs-development" element={<NextJSDevelopment />} />
            <Route path="/gatsbyjs-development" element={<GatsbyJSDevelopment />} />
            <Route path="/magento-development" element={<MagentoDevelopment />} />
            <Route path="/extjs-development" element={<ExtJSDevelopment />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/android-app-development" element={<AndroidAppDevelopment />} />
            <Route path="/ios-app-development" element={<IOSAppDevelopment />} />
            <Route path="/iot-app-development" element={<IoTAppDevelopment />} />
            <Route path="/native-app-development" element={<NativeAppDevelopment />} />
            <Route path="/flutter-app-development" element={<FlutterAppDevelopment />} />
            <Route path="/ionic-app-development" element={<IonicAppDevelopment />} />
            <Route path="/enterprise-app-development" element={<EnterpriseAppDevelopment />} />
            <Route path="/progressive-web-apps" element={<ProgressiveWebApps />} />
            <Route path="/advanced-essential-services" element={<AdvancedEssentialServices />} />
            <Route path="/travel-technology" element={<TravelTechnology />} />
            <Route path="/n8n-automation-experts" element={<N8nAutomationExperts />} />
            <Route path="/ui-ux-design-development" element={<UIUXDesignDevelopment />} />
            <Route path="/ecommerce-web-design" element={<ECommerceWebDesign />} />
            <Route path="/ecommerce-web-development" element={<ECommerceWebDevelopment />} />
            <Route path="/healthcare-website-design" element={<HealthcareWebsiteDesign />} />
            <Route path="/mcommerce-development" element={<MCommerceDevelopment />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/on-demand-solutions" element={<OnDemandSolutions />} />
            <Route path="/booking-app" element={<BookingApp />} />
            <Route path="/chatbot-app" element={<ChatbotApp />} />
            <Route path="/food-delivery-app" element={<FoodDeliveryApp />} />
            <Route path="/video-streaming-app" element={<VideoStreamingApp />} />
            <Route path="/question-answer-app" element={<QuestionAnswerApp />} />
            <Route path="/reverse-auction-app" element={<ReverseAuctionApp />} />
            <Route path="/flight-booking-app" element={<FlightBookingApp />} />
            <Route path="/event-management-app" element={<EventManagementApp />} />
            <Route path="/scheduling-app" element={<SchedulingApp />} />
            <Route path="/elearning-solution" element={<ELearningSolution />} />
            <Route path="/employee-management-app" element={<EmployeeManagementApp />} />
            <Route path="/hrms-app-solution" element={<HRMSAppSolution />} />
            <Route path="/survey-app-solution" element={<SurveyAppSolution />} />
            <Route path="/ble-app-solution" element={<BLEAppSolution />} />
            <Route path="/react-native-app-solution" element={<ReactNativeAppSolution />} />
            <Route path="/ar-app-development" element={<ARAppDevelopment />} />
            <Route path="/emerging-tech-solutions" element={<EmergingTechSolutions />} />
            <Route path="/trending-technology" element={<TrendingTechnology />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/devops-consulting" element={<DevOpsConsulting />} />
            <Route path="/data-visualization" element={<DataVisualization />} />
            <Route path="/data-warehousing" element={<DataWarehousing />} />
            <Route path="/data-engineering" element={<DataEngineering />} />
            <Route path="/snowflake-solution" element={<SnowflakeSolution />} />
            <Route path="/it-support-services" element={<ITSupportServices />} />
            <Route path="/it-consulting-services" element={<ITConsultingServices />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hire-us" element={<HireUs />} />
            <Route path="/get-free-consultation" element={<GetFreeConsultation />} />
            <Route path="/cloud-vps-hosting" element={<CloudVPSHosting />} />
            <Route path="/domain-dns-management" element={<DomainDNSManagement />} />
            <Route path="/dedicated-backend-servers" element={<DedicatedBackendServers />} />
            <Route path="*" element={<ServiceNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
