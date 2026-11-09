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
import SchedulingApp from './pages/SchedulingApp';
import EventManagementApp from './pages/EventManagementApp';
import FlightBookingApp from './pages/FlightBookingApp';
import EmergingTechSolutions from './pages/EmergingTechSolutions';
import ELearningSolution from './pages/ELearningSolution';
import HRMSAppSolution from './pages/HRMSAppSolution';
import BLEAppSolution from './pages/BLEAppSolution';
import SurveyAppSolution from './pages/SurveyAppSolution';
import EmployeeManagementApp from './pages/EmployeeManagementApp';
import ReverseAuctionApp from './pages/ReverseAuctionApp';
import ReactNativeAppSolution from './pages/ReactNativeAppSolution';
import ARAppDevelopment from './pages/ARAppDevelopment';
import TrendingTechnology from './pages/TrendingTechnology';
import DataEngineering from './pages/DataEngineering';
import DataAnalytics from './pages/DataAnalytics';
import DataVisualization from './pages/DataVisualization';
import DataWarehousing from './pages/DataWarehousing';
import SnowflakeSolution from './pages/SnowflakeSolution';
import DevOpsConsulting from './pages/DevOpsConsulting';
import ITConsultingServices from './pages/ITConsultingServices';
import ITSupportServices from './pages/ITSupportServices';
import Travel from './pages/Travel';
import HireUs from './pages/HireUs';
import About from './pages/About';
import Contact from './pages/Contact';
import GetFreeConsultation from './pages/GetFreeConsultation';
import ServiceNotFound from './pages/ServiceNotFound';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <HeaderEnhanced isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Backend Development */}
          <Route path="/backend-development" element={<BackendDevelopment />} />
          <Route path="/backend-development/web-app" element={<WebAppDevelopment />} />
          <Route path="/backend-development/dotnet" element={<NetDevelopment />} />
          <Route path="/backend-development/nodejs" element={<NodeJSDevelopment />} />
          <Route path="/backend-development/python" element={<PythonDevelopment />} />
          <Route path="/backend-development/nestjs" element={<NestJSDevelopment />} />
          <Route path="/backend-development/expressjs" element={<ExpressJSDevelopment />} />
          <Route path="/backend-development/laravel" element={<LaravelDevelopment />} />
          <Route path="/backend-development/shopify" element={<ShopifyDevelopment />} />
          
          {/* Frontend Development */}
          <Route path="/frontend-development" element={<FrontendDevelopment />} />
          <Route path="/frontend-development/reactjs" element={<ReactJSDevelopment />} />
          <Route path="/frontend-development/angular" element={<AngularDevelopment />} />
          <Route path="/frontend-development/html" element={<HTMLDevelopment />} />
          <Route path="/frontend-development/nextjs" element={<NextJSDevelopment />} />
          <Route path="/frontend-development/gatsbyjs" element={<GatsbyJSDevelopment />} />
          <Route path="/frontend-development/magento" element={<MagentoDevelopment />} />
          <Route path="/frontend-development/extjs" element={<ExtJSDevelopment />} />
          
          {/* Mobile App Development */}
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/mobile-app-development/android" element={<AndroidAppDevelopment />} />
          <Route path="/mobile-app-development/ios" element={<IOSAppDevelopment />} />
          <Route path="/mobile-app-development/iot" element={<IoTAppDevelopment />} />
          <Route path="/mobile-app-development/native" element={<NativeAppDevelopment />} />
          <Route path="/mobile-app-development/flutter" element={<FlutterAppDevelopment />} />
          <Route path="/mobile-app-development/ionic" element={<IonicAppDevelopment />} />
          <Route path="/mobile-app-development/enterprise" element={<EnterpriseAppDevelopment />} />
          <Route path="/mobile-app-development/pwa" element={<ProgressiveWebApps />} />
          
          {/* Advanced Services */}
          <Route path="/advanced-services" element={<AdvancedEssentialServices />} />
          <Route path="/advanced-services/travel-technology" element={<TravelTechnology />} />
          <Route path="/advanced-services/n8n-automation" element={<N8nAutomationExperts />} />
          <Route path="/advanced-services/ui-ux-design" element={<UIUXDesignDevelopment />} />
          <Route path="/advanced-services/ecommerce-design" element={<ECommerceWebDesign />} />
          <Route path="/advanced-services/ecommerce-development" element={<ECommerceWebDevelopment />} />
          <Route path="/advanced-services/healthcare-website" element={<HealthcareWebsiteDesign />} />
          <Route path="/advanced-services/mcommerce" element={<MCommerceDevelopment />} />
          <Route path="/advanced-services/digital-marketing" element={<DigitalMarketing />} />
          
          {/* Solutions */}
          <Route path="/solutions" element={<Solutions />} />
          
          {/* On-Demand Solutions */}
          <Route path="/solutions/on-demand" element={<OnDemandSolutions />} />
          <Route path="/solutions/on-demand/booking-app" element={<BookingApp />} />
          <Route path="/solutions/on-demand/chatbot-app" element={<ChatbotApp />} />
          <Route path="/solutions/on-demand/food-delivery" element={<FoodDeliveryApp />} />
          <Route path="/solutions/on-demand/video-streaming" element={<VideoStreamingApp />} />
          <Route path="/solutions/on-demand/qa-app" element={<QuestionAnswerApp />} />
          <Route path="/solutions/on-demand/scheduling" element={<SchedulingApp />} />
          <Route path="/solutions/on-demand/event-management" element={<EventManagementApp />} />
          <Route path="/solutions/on-demand/flight-booking" element={<FlightBookingApp />} />
          
          {/* Emerging Tech */}
          <Route path="/solutions/emerging-tech" element={<EmergingTechSolutions />} />
          <Route path="/solutions/emerging-tech/elearning" element={<ELearningSolution />} />
          <Route path="/solutions/emerging-tech/hrms" element={<HRMSAppSolution />} />
          <Route path="/solutions/emerging-tech/ble" element={<BLEAppSolution />} />
          <Route path="/solutions/emerging-tech/survey" element={<SurveyAppSolution />} />
          <Route path="/solutions/emerging-tech/employee-management" element={<EmployeeManagementApp />} />
          <Route path="/solutions/emerging-tech/reverse-auction" element={<ReverseAuctionApp />} />
          <Route path="/solutions/emerging-tech/react-native-app" element={<ReactNativeAppSolution />} />
          <Route path="/solutions/emerging-tech/ar-app" element={<ARAppDevelopment />} />
          
          {/* Trending Technology */}
          <Route path="/solutions/trending-tech" element={<TrendingTechnology />} />
          <Route path="/solutions/trending-tech/data-engineering" element={<DataEngineering />} />
          <Route path="/solutions/trending-tech/data-analytics" element={<DataAnalytics />} />
          <Route path="/solutions/trending-tech/data-visualization" element={<DataVisualization />} />
          <Route path="/solutions/trending-tech/data-warehousing" element={<DataWarehousing />} />
          <Route path="/solutions/trending-tech/snowflake" element={<SnowflakeSolution />} />
          <Route path="/solutions/trending-tech/devops" element={<DevOpsConsulting />} />
          <Route path="/solutions/trending-tech/it-consulting" element={<ITConsultingServices />} />
          <Route path="/solutions/trending-tech/it-support" element={<ITSupportServices />} />
          
          {/* Other Pages */}
          <Route path="/travel" element={<Travel />} />
          <Route path="/hire-us" element={<HireUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<GetFreeConsultation />} />
          
          {/* 404 Page */}
          <Route path="*" element={<ServiceNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;