import React from "react";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import PortfolioSection from "./PortfolioSection";
import CertificateSection from "./CertificateSection";
import InterestsSection from "./InterestsSection";

const Home = () => {
  return (
    <div>
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <CertificateSection />
        <InterestsSection/>
    </div>
  );
};

export default Home;
