
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SavingsCalculator />
        <FeatureSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
