import React from "react";
import Heading from "../Common/Heading";

function Interests() {
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <Heading title="Interests" />
        <p>My main goal is to become a Full-Stack Developer.</p>
        <p className="mb-4">I enjoy using front-end technologies thinking of making the site appealing <br />
            and back-end components to make dynamic web applications that users can interact with.</p>

        <p className="mb-0">These are my first steps as a programmer.</p>
      </div>
    </section>
  );
}

export default Interests;