import React from "react";
import SkillsList from "../Common/SkillsList";
import { technicalSkills, personalSkills } from "../../data/skillsSectionData";

const SkillsPage = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-4">Skills</h2>
        <SkillsList title="TECHNICAL SKILLS" skills={technicalSkills} />
        <SkillsList title="PERSONAL SKILLS" skills={personalSkills} />
      </div>
    </section>
  );
};

export default SkillsPage;
