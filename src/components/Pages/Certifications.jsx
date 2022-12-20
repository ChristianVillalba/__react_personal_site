import React from "react";
import {Link} from "react-router-dom";


function Certifications() {
  return (
    <section class="resume-section" id="certifications">
    <div class="resume-section-content">
      <h2 class="mb-4">Certifications</h2>
      <ul class="fa-ul mb-0">
        <li>
          <a href="https://www.udemy.com/certificate/UC-7a79f48f-b490-46b0-bc23-94d2e7c3e111/" target="_blank">
            <span class="fa-li"><i class="fas fa-award text-warning"></i></span>
            The Complete Front-End Web Development Course
          </a>
        </li>
        <li>
          <a href="https://www.udemy.com/certificate/UC-18b0e6f6-0a33-4a7f-9aff-8961c1c78a25/" target="_blank">
            <span class="fa-li"><i class="fas fa-award text-warning"></i></span>
            Python and Django Full Stack Web Developer Bootcamp
          </a>
        </li>
        <li>
          <a href="https://www.udemy.com/certificate/UC-192b0ec7-ca7d-42a2-bf4b-d8cc330900bc/" target="_blank">
            <span class="fa-li"><i class="fas fa-award text-warning"></i></span>
            Automate the Boring Stuff with Python
          </a>
        </li>
        <li>
          <a href="https://www.udemy.com/certificate/UC-TM2EH9W3/" target="_blank">
            <span class="fa-li"><i class="fas fa-award text-warning"></i></span>
            Complete Python Bootcamp From Zero to Hero in Python
          </a>
        </li>
      </ul>
    </div>
  </section>
  );
}

export default Certifications;