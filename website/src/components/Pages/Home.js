import React from "react";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import PortfolioSection from "./PortfolioSection";
import CertificatesSection from "./CertificatesSection";
import InterestsSection from "./InterestsSection";

const Home = () => {
  return (
    <div>
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <CertificatesSection />
        <InterestsSection/>
    </div>
  );
};

export default Home;