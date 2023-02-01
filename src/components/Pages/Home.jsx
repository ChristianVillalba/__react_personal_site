import React from "react";
import About from "./About";
import Certificates from "./Certificates";
import Interests from "./Interests";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Portfolio />
      <Certificates />
      <Interests />
    </div>
  );
}

export default Home;