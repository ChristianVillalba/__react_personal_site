import React from "react";
import ProfileSection from "./ProfileSection";
import SkillsSection from "./SkillsSection";
import PortfolioSection from "./PortfolioSection";
import ExperienceSection from "./ExperienceSection";
import CertificatesSection from "./CertificatesSection";

const Home = () => {
  return (
    <div>
        <ProfileSection />
        <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <CertificatesSection />
    </div>
  );
};

export default Home;
