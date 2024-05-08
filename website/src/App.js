import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// Routes to Pages
import ProfileSection from "./components/Pages/ProfileSection";
import SkillsSection from "./components/Pages/SkillsSection";
import PortfolioSection from "./components/Pages/PortfolioSection";
import ExperienceSection from "./components/Pages/ExperienceSection";
import CertificatesSection from "./components/Pages/CertificatesSection";
import Home from "./components/Pages/Home";
import PortfolioModal from "./components/Common/PortfolioModal"
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <PortfolioModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/certificates" element={<CertificatesSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
