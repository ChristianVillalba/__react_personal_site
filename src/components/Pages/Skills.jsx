import React from "react";

function Skills() {
  return (
    <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-4">Skills</h2>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
        <div class="flex-grow-1">
          <h3 class="mb-0">TECHNICAL SKILLS</h3>
          <div class="tech-skill"><i class="fab fa-react"></i> React</div>
          <div class="tech-skill"><i class="fab fa-python"></i> Python</div>
          <div class="tech-skill"><i class="fab fa-python"></i> Django</div>
          <div class="tech-skill"><i class="fab fab fa-js-square"></i> JavaScript</div>
          <div class="tech-skill"><i class="fab fab fa-js-square"></i> ES6 & jQuery</div>
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
          {/* <div class="personal-skill"><i class="far fa-check-circle"></i> Interest in Responsive Design, Mobile-First. </div>  */}

        </div>
      </div>

    </div>
  </section>
  );
}

export default Skills;