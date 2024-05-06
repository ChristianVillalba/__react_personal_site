import React from "react";

const ProfileSection = () => {
  return (
    <section className="resume-section" id="profile">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Christian <span className="text-primary">Villalba</span>
        </h1>
        <div className="personal-info mb-4">
          <a href="mailto:christianvillalba.uk@gmail.com">
            christianvillalba.uk@gmail.com
          </a>
          <br />
          07491 691669
          {/* <!-- Cardiff , Wales · United Kingdom --> */}
        </div>
        <div className="social-icons mb-4">
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

        <div className="flexbox">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              
                An ambitious web developer dedicated to developing and
                optimizing interactive, user-friendly, and feature-rich
                websites. 
                <br /> A problem solver with a passion for customer-centric
                development who would like to join a team of like-minded
                developers. 
                <br /> Enthusiastic and passionate team player who is
                comfortable working in fast-paced,high-pressure environments,
                and can be relied upon to successfully deliver the projects on
                schedule and to a high standard.
              
              {/* 
        <p className="mb-5">
          Software Developer passionate about learning,
          <br /> and keeping up with new technologies. <br />
           I enjoy using front-end technologies thinking of making the site
          appealing, <br />
          and back-end components to make dynamic web applications that users
          can interact with.
        </p> */}
            </div>
            <div class="col-lg-4 d-none d-lg-block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
