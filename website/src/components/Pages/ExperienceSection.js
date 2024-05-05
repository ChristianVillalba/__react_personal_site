import React from "react";
import ExperienceItem from "../Common/ExperienceItem";
import { workExperience } from "../../data/experienceSectionData";

const ExperienceSection = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {workExperience.map((work, index) => (
            <ExperienceItem key={index} {...work} />
          ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
