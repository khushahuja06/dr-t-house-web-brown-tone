import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <VideoShowcase />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
