import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ApproachSection from "@/sections/ApproachSection";
import PortfolioSection from "@/sections/PortfolioSection";
import StrengthsSection from "@/sections/StrengthsSection";
import LeadershipSection from "@/sections/LeadershipSection";
import CTASection from "@/sections/CTASection";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <PortfolioSection />
        <StrengthsSection />
        <LeadershipSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
