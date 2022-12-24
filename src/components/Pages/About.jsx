import React from "react";
import SocialIcon from "../Common/SocialIcon";

const socialIcons = [

  {externalLink: "https://www.linkedin.com/in/christian-villalba-2233ab206/",
    title: "Go to my LinkedIn Profile",
  icon:"fab fa-linkedin-in"}

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

          {/* <a className="social-icon" href="https://www.linkedin.com/in/christian-villalba-2233ab206/" target="_blank"
          data-toggle="tooltip" data-placement="top" title="Go to my LinkedIn Profile">
            <i className="fab fa-linkedin-in"></i></a>
          <a className="social-icon" href="https://github.com/ChristianVillalba" target="_blank"
          data-toggle="tooltip" data-placement="top" title="Go to my GitHub Profile">
            <i className="fab fa-github"></i></a>
          <a className="social-icon" href="mailto:christianvillalba.uk@gmail.com" target="_blank"
          data-toggle="tooltip" data-placement="top" title="Send me an email">
            <i className="fas fa-envelope"></i></a> */}
        </div>
      </div>
  </section>
  );
}

export default About;