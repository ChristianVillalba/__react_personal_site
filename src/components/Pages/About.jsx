import React from "react";
import SocialIcon from "../Common/SocialIcon";

const socialIcons = [
  {externalLink: "https://www.linkedin.com/in/christian-villalba-2233ab206/",
  title: "Go to my LinkedIn Profile",
  icon:"fab fa-linkedin-in"},
  {externalLink: "https://github.com/ChristianVillalba",
  title: "Go to my GitHub Profile",
  icon:"fab fa-github"},
  {externalLink: "mailto:christianvillalba.uk@gmail.com",
  title: "Send me an email",
  icon:"fas fa-envelope"},
]

function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
            Christian
            <span className="text-primary"> Villalba</span>
        </h1>
          <div className="subheading mb-5">
          Cardiff , Wales · United Kingdom · 07491 XXXXXX · < br/>
          <a href="mailto:christianvillalba.uk@gmail.com">christianvillalba.uk@gmail.com</a>
          </div>
          <p className="lead mb-5">Software Developer passionate about learning
          <br/>  and keep up with new technologies.</p>
          <div className="social-icons">
            {socialIcons.map((socialIcon, index) => {
              return <SocialIcon {...socialIcon} key={index}  />
            })}
        </div>
      </div>
  </section>
  );
}

export default About;