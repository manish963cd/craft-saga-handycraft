import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import CraftsPreview from '@/components/CraftsPreview';
import StoriesPreview from '@/components/StoriesPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <CraftsPreview />
      <StoriesPreview />
      <Footer />
    </div>
  );
};

export default Index;
