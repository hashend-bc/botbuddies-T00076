import React from "react";
import Navbar from "../src/components/navbar/navItem";
import HeroSection from "../src/components/ui/hero";
import AboutSection from "../src/components/ui/about";
import Tokenomics from "../src/components/ui/tokenomics";
import HowToBuy from "../src/components/ui/howtobuy";
import RoadMap from "../src/components/ui/roadMap";
import FAQSection from "../src/components/ui/faqSection";
import Footer from "../src/components/ui/footer";
import ScreenSizeIndicator from "./components/ScreenSizeIndicator";
const App: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="howtobuy">
        <HowToBuy />
      </div>
      <div id="roadmap">
        <RoadMap />
      </div>
      <FAQSection />
      <Footer />
      <ScreenSizeIndicator />
    </div>
  );
};

export default App;