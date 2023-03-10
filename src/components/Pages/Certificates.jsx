import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading";

const webDevelopment = [
  {
    name: "The Complete Full-Stack JavaScript Course",
    url: "https://www.udemy.com/certificate/UC-ea4f7723-aaeb-4190-9a91-819f22f0c677/",
  },
  {
    name: "The Complete Front-End Web Development Course",
    url: "https://www.udemy.com/certificate/UC-7a79f48f-b490-46b0-bc23-94d2e7c3e111/",
  },
  {
    name: "Python and Django Full Stack Web Developer Bootcamp",
    url: "https://www.udemy.com/certificate/UC-18b0e6f6-0a33-4a7f-9aff-8961c1c78a25/",
  },
  {
    name: "React.JS: The Complete Course for Beginners",
    url: "https://www.udemy.com/certificate/UC-ed7b00cf-1314-4fda-b867-052406e90486/",
  },
  {
    name: "JavaScript: The Complete Course for Beginners",
    url: "https://www.udemy.com/certificate/UC-353e0a8a-3f2d-4b75-8443-307e4a60f9f6/",
  },
  {
    name: "Bootstrap 5 Course: Build Responsive Websites",
    url: "https://www.udemy.com/certificate/UC-31ffd260-d337-40d9-b58e-a82ff6dada95/",
  },
  {
    name: "HTML5 & CSS3 Complete Course: Build Websites",
    url: "https://www.udemy.com/certificate/UC-f8cb5014-1f28-4f8a-a942-479cda877c4f/",
  },
];

const softwareDevelopment = [
  {
    name: "Complete Python Bootcamp: From Zero to Hero in Python",
    url: "https://www.udemy.com/certificate/UC-TM2EH9W3/",
  },
  {
    name: "Automate the Boring Stuff with Python",
    url: "https://www.udemy.com/certificate/UC-192b0ec7-ca7d-42a2-bf4b-d8cc330900bc/",
  },
  {
    name: "Python for OOP: The A-to-Z OOP Python Programming Course",
    url: "https://www.udemy.com/certificate/UC-7723e951-8d87-4585-9a5c-2f6ff4bbe3de/",
  },
];

const otherCertificates = [
  {
    name: "Complete Git and Github Beginner to Expert",
    url: "https://www.udemy.com/certificate/UC-7248e9db-045b-42d2-b3c6-d08e79df61bf/",
  },
  {
    name: "Cyber Security for Beginners Complete Course",
    url: "https://www.udemy.com/certificate/UC-aff237a2-f841-4c5a-9d05-74b834310815/",
  },
];

function Certificates() {
  return (
    <section class="resume-section" id="certificates">
      <div class="resume-section-content">
      <Heading title="Skills" />

        <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
          <div class="flex-grow-1">
            <h3 class="mb-0">WEB DEVELOPMENT</h3>
            <ul class="certificates-list fa-ul mb-0">
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-ea4f7723-aaeb-4190-9a91-819f22f0c677/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  The Complete Full-Stack JavaScript Course
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-7a79f48f-b490-46b0-bc23-94d2e7c3e111/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  The Complete Front-End Web Development Course
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-18b0e6f6-0a33-4a7f-9aff-8961c1c78a25/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  Python and Django Full Stack Web Developer Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-ed7b00cf-1314-4fda-b867-052406e90486/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  React.JS: The Complete Course for Beginners
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-353e0a8a-3f2d-4b75-8443-307e4a60f9f6/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  JavaScript: The Complete Course for Beginners
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-31ffd260-d337-40d9-b58e-a82ff6dada95/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  Bootstrap 5 Course: Build Responsive Websites
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-f8cb5014-1f28-4f8a-a942-479cda877c4f/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  HTML5 & CSS3 Complete Course: Build Websites
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
          <div class="flex-grow-1">
            <h3 class="mb-0">SOFTWARE DEVELOPMENT</h3>
            <ul class="certificates-list fa-ul mb-0">
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-TM2EH9W3/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  Complete Python Bootcamp: From Zero to Hero in Python
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-192b0ec7-ca7d-42a2-bf4b-d8cc330900bc/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  Automate the Boring Stuff with Python
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-7723e951-8d87-4585-9a5c-2f6ff4bbe3de/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  Python for OOP: The A-to-Z OOP Python Programming Course
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
          <div class="flex-grow-1">
            <h3 class="mb-0">OTHER CERTIFICATES</h3>
            <ul class="certificates-list fa-ul mb-0">
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-7248e9db-045b-42d2-b3c6-d08e79df61bf/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  Complete Git and Github Beginner to Expert
                </a>
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-aff237a2-f841-4c5a-9d05-74b834310815/"
                  target="_blank"
                >
                  <span class="fa-li">
                    <i class="fas fa-award text-warning"></i>
                  </span>
                  Cyber Security for Beginners Complete Course
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
