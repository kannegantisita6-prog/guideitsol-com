import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs01 from './pages/AboutUs01';
import AboutUs02 from './pages/AboutUs02';
import BlogGridClassic from './pages/BlogGridClassic';
import BlogGridMasonry from './pages/BlogGridMasonry';
import BlogListLargeImage from './pages/BlogListLargeImage';
import BlogListLeftLargeImage from './pages/BlogListLeftLargeImage';
import BlogPostLayoutOne from './pages/BlogPostLayoutOne';
import BlogPostNoSidebar from './pages/BlogPostNoSidebar';
import BlogPostRightSidebar from './pages/BlogPostRightSidebar';
import BusinessSolution from './pages/BusinessSolution';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import CaseStudies02 from './pages/CaseStudies02';
import ContactUs from './pages/ContactUs';
import ElementAccordion from './pages/ElementAccordion';
import ElementBoxIcon from './pages/ElementBoxIcon';
import ElementBoxImage from './pages/ElementBoxImage';
import ElementBoxLargeImage from './pages/ElementBoxLargeImage';
import ElementButtons from './pages/ElementButtons';
import ElementCarouselSliders from './pages/ElementCarouselSliders';
import ElementClientLogo from './pages/ElementClientLogo';
import ElementCountdown from './pages/ElementCountdown';
import ElementCounters from './pages/ElementCounters';
import ElementCta from './pages/ElementCta';
import ElementDividers from './pages/ElementDividers';
import ElementFlexibleImageSlider from './pages/ElementFlexibleImageSlider';
import ElementGoogleMap from './pages/ElementGoogleMap';
import ElementGradation from './pages/ElementGradation';
import ElementInstagram from './pages/ElementInstagram';
import ElementLists from './pages/ElementLists';
import ElementMessageBox from './pages/ElementMessageBox';
import ElementPopupVideo from './pages/ElementPopupVideo';
import ElementPricingBox from './pages/ElementPricingBox';
import ElementProgressBar from './pages/ElementProgressBar';
import ElementProgressCircle from './pages/ElementProgressCircle';
import ElementRowsColumns from './pages/ElementRowsColumns';
import ElementSocialNetworks from './pages/ElementSocialNetworks';
import ElementTabs from './pages/ElementTabs';
import ElementTeamMember from './pages/ElementTeamMember';
import ElementTestimonials from './pages/ElementTestimonials';
import ElementTimeline from './pages/ElementTimeline';
import ElementTypedText from './pages/ElementTypedText';
import Faqs from './pages/Faqs';
import Index2 from './pages/Index2';
import IndexAppointment from './pages/IndexAppointment';
import IndexCybersecurity from './pages/IndexCybersecurity';
import IndexInfotechno from './pages/IndexInfotechno';
import IndexMachineLearning from './pages/IndexMachineLearning';
import IndexModernItCompany from './pages/IndexModernItCompany';
import IndexProcessing from './pages/IndexProcessing';
import IndexResolutions from './pages/IndexResolutions';
import IndexServices from './pages/IndexServices';
import IndexSoftwareInnovation from './pages/IndexSoftwareInnovation';
import Industries from './pages/Industries';
import ItServices from './pages/ItServices';
import ItServicesDetails from './pages/ItServicesDetails';
import Leadership from './pages/Leadership';
import ManagedItService from './pages/ManagedItService';
import OurHistory from './pages/OurHistory';
import PricingPlans from './pages/PricingPlans';
import SingleSmartVision from './pages/SingleSmartVision';
import WhyChooseUs from './pages/WhyChooseUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us-01" element={<AboutUs01 />} />
            <Route path="/about-us-02" element={<AboutUs02 />} />
            <Route path="/blog-grid-classic" element={<BlogGridClassic />} />
            <Route path="/blog-grid-masonry" element={<BlogGridMasonry />} />
            <Route path="/blog-list-large-image" element={<BlogListLargeImage />} />
            <Route path="/blog-list-left-large-image" element={<BlogListLeftLargeImage />} />
            <Route path="/blog-post-layout-one" element={<BlogPostLayoutOne />} />
            <Route path="/blog-post-no-sidebar" element={<BlogPostNoSidebar />} />
            <Route path="/blog-post-right-sidebar" element={<BlogPostRightSidebar />} />
            <Route path="/business-solution" element={<BusinessSolution />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies-02" element={<CaseStudies02 />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/element-accordion" element={<ElementAccordion />} />
            <Route path="/element-box-icon" element={<ElementBoxIcon />} />
            <Route path="/element-box-image" element={<ElementBoxImage />} />
            <Route path="/element-box-large-image" element={<ElementBoxLargeImage />} />
            <Route path="/element-buttons" element={<ElementButtons />} />
            <Route path="/element-carousel-sliders" element={<ElementCarouselSliders />} />
            <Route path="/element-client-logo" element={<ElementClientLogo />} />
            <Route path="/element-countdown" element={<ElementCountdown />} />
            <Route path="/element-counters" element={<ElementCounters />} />
            <Route path="/element-cta" element={<ElementCta />} />
            <Route path="/element-dividers" element={<ElementDividers />} />
            <Route path="/element-flexible-image-slider" element={<ElementFlexibleImageSlider />} />
            <Route path="/element-google-map" element={<ElementGoogleMap />} />
            <Route path="/element-gradation" element={<ElementGradation />} />
            <Route path="/element-instagram" element={<ElementInstagram />} />
            <Route path="/element-lists" element={<ElementLists />} />
            <Route path="/element-message-box" element={<ElementMessageBox />} />
            <Route path="/element-popup-video" element={<ElementPopupVideo />} />
            <Route path="/element-pricing-box" element={<ElementPricingBox />} />
            <Route path="/element-progress-bar" element={<ElementProgressBar />} />
            <Route path="/element-progress-circle" element={<ElementProgressCircle />} />
            <Route path="/element-rows-columns" element={<ElementRowsColumns />} />
            <Route path="/element-social-networks" element={<ElementSocialNetworks />} />
            <Route path="/element-tabs" element={<ElementTabs />} />
            <Route path="/element-team-member" element={<ElementTeamMember />} />
            <Route path="/element-testimonials" element={<ElementTestimonials />} />
            <Route path="/element-timeline" element={<ElementTimeline />} />
            <Route path="/element-typed-text" element={<ElementTypedText />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/index-2" element={<Index2 />} />
            <Route path="/index-appointment" element={<IndexAppointment />} />
            <Route path="/index-cybersecurity" element={<IndexCybersecurity />} />
            <Route path="/index-infotechno" element={<IndexInfotechno />} />
            <Route path="/index-machine-learning" element={<IndexMachineLearning />} />
            <Route path="/index-modern-it-company" element={<IndexModernItCompany />} />
            <Route path="/index-processing" element={<IndexProcessing />} />
            <Route path="/index-resolutions" element={<IndexResolutions />} />
            <Route path="/index-services" element={<IndexServices />} />
            <Route path="/index-software-innovation" element={<IndexSoftwareInnovation />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/it-services" element={<ItServices />} />
            <Route path="/it-services-details" element={<ItServicesDetails />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/managed-it-service" element={<ManagedItService />} />
            <Route path="/our-history" element={<OurHistory />} />
            <Route path="/pricing-plans" element={<PricingPlans />} />
            <Route path="/single-smart-vision" element={<SingleSmartVision />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
