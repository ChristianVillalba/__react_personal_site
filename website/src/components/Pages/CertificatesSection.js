import React from "react";
import CertificatesList from "../Common/CertificatesList";

const CertificatesSection = () => {
  const webDevCertificates = [
    {
      externalLink:
        "https://www.udemy.com/certificate/UC-ea4f7723-aaeb-4190-9a91-819f22f0c677/",
      certificate: "The Complete Full-Stack JavaScript Course"
    },
    { externalLink: "https://www.udemy.com/certificate/UC-7a79f48f-b490-46b0-bc23-94d2e7c3e111/", 
    certificate: "The Complete Front-End Web Development Course" 
  },
    { externalLink: "https://www.udemy.com/certificate/UC-18b0e6f6-0a33-4a7f-9aff-8961c1c78a25/", 
    certificate: "Python and Django Full Stack Web Developer Bootcamp" 
  },
    { externalLink: "https://www.udemy.com/certificate/UC-ed7b00cf-1314-4fda-b867-052406e90486/", 
    certificate: "React.JS: The Complete Course for Beginners" 
  },
    { externalLink: "https://www.udemy.com/certificate/UC-353e0a8a-3f2d-4b75-8443-307e4a60f9f6/", 
    certificate: "JavaScript: The Complete Course for Beginners" 
  },
    { externalLink: "https://www.udemy.com/certificate/UC-31ffd260-d337-40d9-b58e-a82ff6dada95/", 
    certificate: "Bootstrap 5 Course: Build Responsive Websites" 
  },
    { externalLink: "https://www.udemy.com/certificate/UC-f8cb5014-1f28-4f8a-a942-479cda877c4f/", 
    certificate: "HTML5 & CSS3 Complete Course: Build Websites" 
  },
  ];
  const softwareCertificates = [
    { externalLink: "https://www.udemy.com/certificate/UC-TM2EH9W3/", 
    certificate: "Complete Python Bootcamp: From Zero to Hero in Python" 
  },
    { externalLink: "https://www.udemy.com/certificate/UC-192b0ec7-ca7d-42a2-bf4b-d8cc330900bc/", 
    certificate: "Automate the Boring Stuff with Python" 
  },
    { externalLink: "https://www.udemy.com/certificate/UC-7723e951-8d87-4585-9a5c-2f6ff4bbe3de/", 
    certificate: "Python for OOP: The A-to-Z OOP Python Programming Course" 
  },
  ];
  const otherCertificates = [
    { externalLink: "https://www.udemy.com/certificate/UC-7248e9db-045b-42d2-b3c6-d08e79df61bf/", 
    certificate: "Complete Git and Github Beginner to Expert" 
  },
    { externalLink: "https://www.udemy.com/certificate/UC-aff237a2-f841-4c5a-9d05-74b834310815/", 
    certificate: "Cyber Security for Beginners Complete Course" 
  },
  ];

  return (
    <section class="resume-section" id="certificates">
      <div class="resume-section-content">
        <h2 class="mb-4">Certificates</h2>

        <CertificatesList title="WEB DEVELOPMENT" certificates={webDevCertificates}/>
        <CertificatesList title="SOFTWARE DEVELOPMENT" certificates={softwareCertificates}/>
        <CertificatesList title="OTHER CERTIFICATES" certificates={otherCertificates}/>
        
      </div>
    </section>
  );
};

export default CertificatesSection;
