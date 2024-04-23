import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// Routes
import AboutSection from "./components/Pages/AboutSection";
import SkillsSection from "./components/Pages/SkillsSection";
import PortfolioSection from "./components/Pages/PortfolioSection";
import CertificateSection from "./components/Pages/CertificateSection";
import InterestsSection from "./components/Pages/InterestsSection";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/certificates" element={<CertificateSection />} />
          <Route path="/interests" element={<InterestsSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
