import React from "react";
import Heading from "../Common/Heading";
import Subheading from "../Common/Subheading";

function Skills() {
  return (
    <section className="resume-section" id="skills">
    <div className="resume-section-content">
      <Heading title="Skills" />
      <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
        <div className="flex-grow-1">
          <Subheading subtitle="TECHNICAL SKILLS" />
          <div className="tech-skill"><i className="fab fa-react"></i> React</div>
          <div className="tech-skill"><i className="fab fa-python"></i> Python</div>
          <div className="tech-skill"><i className="fab fa-python"></i> Django</div>
          <div className="tech-skill"><i className="fab fab fa-js-square"></i> JavaScript</div>
          <div className="tech-skill"><i className="fab fab fa-js-square"></i> ES6 & jQuery</div>
          <div className="tech-skill"><i className="fab fa-bootstrap"></i> Bootstrap</div>
          <div className="tech-skill"><i className="fab fa-css3-alt"></i> CSS</div>
          <div className="tech-skill"><i className="fab fa-html5"></i> HTML</div>
          <div className="tech-skill"><i className="fab fab fa-github"></i> GitHub & Version Control</div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
        <div className="flex-grow-1">
          <h3 className="mb-0">PERSONAL SKILLS</h3>
          <div className="personal-skill"><i className="far fa-check-circle"></i> Enjoy collaborative problem solving activities.</div>
          <div className="personal-skill"><i className="far fa-check-circle"></i> Love of interactive, customer-centric development.</div>
          <div className="personal-skill"><i className="far fa-check-circle"></i> Comfortable operating in a rapidly changing environment.</div>
          <div className="personal-skill"><i className="far fa-check-circle"></i> Passionate about new technologies.</div>
          {/* <div className="personal-skill"><i className="far fa-check-circle"></i> Interest in Responsive Design, Mobile-First. </div>  */}

        </div>
      </div>

    </div>
  </section>
  );
}

export default Skills;