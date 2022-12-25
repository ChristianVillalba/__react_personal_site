import React from "react";
import Heading from "../Common/Heading";
import Subheading from "../Common/Subheading";
import SingleTechnicalItem from "../Common/SingleITechnicaltem";
import SingleItem from "../Common/SingleItem";

const technicalItems = [
  {icon: "fab fa-react", name:"React"},
  {icon: "fab fa-python", name:"Python"},
  {icon: "fab fa-python", name:"Django"},
  {icon: "fab fa-js-square", name:"JavaScript"},
  {icon: "fab fa-js-square", name:"ES6 & jQuery"},
  {icon: "fab fa-bootstrap", name:"Bootstrap"},
  {icon: "fab fa-css3-alt", name:"CSS"},
  {icon: "fab fa-html5", name:"HTML"},
  {icon: "fab fa-github", name:"GitHub & Version Control"},
]

const commonItems = []

function Skills() {
  return (
    <section className="resume-section" id="skills">
    <div className="resume-section-content">
      <Heading title="Skills" />
      <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
        <div className="flex-grow-1">
          <Subheading subtitle="TECHNICAL SKILLS" />

          {technicalItems.map(( technicalItem, index) => {
            return <SingleTechnicalItem {...technicalItem} key={index}/>
          } )}

        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
        <div className="flex-grow-1">
        <Subheading subtitle="PERSONAL SKILLS" />
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