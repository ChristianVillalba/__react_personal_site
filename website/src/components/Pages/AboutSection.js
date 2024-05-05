import React from "react";

const AboutSection = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Christian <span className="text-primary">Villalba</span>
        </h1>
        <div className="personal-info mb-5">
          <a href="mailto:christianvillalba.uk@gmail.com">
            christianvillalba.uk@gmail.com
          </a>
          <br />
          07491 691669
          {/* <!-- Cardiff , Wales · United Kingdom --> */}
        </div>
        <p className="mb-5">
          Software Developer passionate about learning,
          <br /> and keeping up with new technologies.
          <br /> <br /> I enjoy using front-end technologies thinking of making the site
          appealing, <br />
          and back-end components to make dynamic web applications that users
          can interact with.


        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/christian-villalba-2233ab206/"
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="top"
            title="Go to my LinkedIn Profile"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            href="https://github.com/ChristianVillalba"
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="top"
            title="Go to my GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-icon"
            href="mailto:christianvillalba.uk@xxxxx.com"
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="top"
            title="Send me an email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
