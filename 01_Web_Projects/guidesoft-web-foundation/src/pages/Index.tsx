import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ServicesOverview from '@/components/ServicesOverview';
import TechStack from '@/components/TechStack';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ClientLogos />
      <ServicesOverview />
      <TechStack />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
