import React from "react";
import SkillsList from "../Common/SkillsList";

const SkillsPage = () => {
  const technicalSkills = [


    { icon: "fab fa-js-square", name: "JavaScript" },
    { icon: "fab fa-react", name: "React" },
    { icon: "fab fa-node-js", name: "Node" },
    { icon: "fab fa-js-square", name: "Express" },
    { icon: "fab fa-js-square", name: "jQuery" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-python", name: "Django" },
    { icon: "fas fa-database", name: "PostgreSQL" },
    { icon: "fab fa-php", name: "PHP" },
    { icon: "fab fa-bootstrap", name: "Bootstrap" },
    { icon: "fab fa-css3-alt", name: "CSS" },
    { icon: "fab fa-html5", name: "HTML" },
    { icon: "fab fa-github", name: "GitHub & Version Control" },
  ];

  const personalSkills = [
    {
      icon: "far fa-check-circle",
      name: "Enjoy collaborative problem solving activities.",
    },
    {
      icon: "far fa-check-circle",
      name: "Love of interactive, customer-centric development.",
    },
    {
      icon: "far fa-check-circle",
      name: "Comfortable operating in a rapidly changing environment.",
    },
    { icon: "far fa-check-circle", name: "Passionate about new technologies." },
    // Uncomment below line if needed
    // { icon: 'fa-check-circle', name: 'Interest in Responsive Design, Mobile-First.' },
  ];

  return (
    // <section className="resume-section" id="skills">
    //   <div className="resume-section-content">
    //     <h2 className="mb-4">Skills</h2>
    //     <SkillsList title="TECHNICAL SKILLS" skills={technicalSkills} />
    //     <SkillsList title="PERSONAL SKILLS" skills={personalSkills} />
    //   </div>
    // </section>
    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-4">Skills</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
          <div class="flex-grow-1">
            <h3 class="mb-0">TECHNICAL SKILLS</h3>
            <div class="tech-skill"><i class="fab fa-python"></i> Python</div>
            <div class="tech-skill"><i class="fab fa-python"></i> Django</div>
            <div class="tech-skill"><i class="fab fab fa-js-square"></i> JavaScript</div>
            <div class="tech-skill"><i class="fab fab fa-react"></i> React</div>
            <div class="tech-skill"><i class="fab fab fa-node-js"></i> Node</div>
            <div class="tech-skill"><i class="fab fab fa-js-square"></i> jQuery</div>
            <div class="tech-skill"><i class="fab fa-bootstrap"></i> Bootstrap</div>
            <div class="tech-skill"><i class="fab fa-css3-alt"></i> CSS</div>
            <div class="tech-skill"><i class="fab fa-html5"></i> HTML</div>
            <div class="tech-skill"><i class="fab fab fa-github"></i> GitHub & Version Control</div>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
          <div class="flex-grow-1">
            <h3 class="mb-0">PERSONAL SKILLS</h3>
            <div class="personal-skill"><i class="far fa-check-circle"></i> Enjoy collaborative problem solving activities.</div>
            <div class="personal-skill"><i class="far fa-check-circle"></i> Love of interactive, customer-centric development.</div>
            <div class="personal-skill"><i class="far fa-check-circle"></i> Comfortable operating in a rapidly changing environment.</div>
            <div class="personal-skill"><i class="far fa-check-circle"></i> Passionate about new technologies.</div>
            {/* <!-- <div class="personal-skill"><i class="far fa-check-circle"></i> Interest in Responsive Design, Mobile-First. </div> --> */}

          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsPage;
