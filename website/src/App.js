import './App.css';
import AboutSection from './components/AboutSection';
import CertificateSection from './components/CertificateSection';

import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <CertificateSection></CertificateSection>
    </div>
  );
}

export default App;
