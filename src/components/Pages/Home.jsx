import React from "react";
import About from "./About";
import Certifications from "./Certifications";
import Interests from "./Interests";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Portfolio />
      <Certifications />
      <Interests />
    </div>
  );
}

export default Home;