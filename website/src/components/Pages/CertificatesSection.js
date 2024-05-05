import React from "react";
import CertificatesList from "../Common/CertificatesList";
import {
  webDevCertificates,
  softwareCertificates,
  otherCertificates,
} from "../../data/certificatesSectionData.js";
const CertificatesSection = () => {
  return (
    <section className="resume-section" id="certificates">
      <div className="resume-section-content">
        <h2 className="mb-4">Certificates</h2>

        <CertificatesList
          title="WEB DEVELOPMENT"
          certificates={webDevCertificates}
        />
        <CertificatesList
          title="SOFTWARE DEVELOPMENT"
          certificates={softwareCertificates}
        />
        <CertificatesList
          title="OTHER CERTIFICATES"
          certificates={otherCertificates}
        />
      </div>
    </section>
  );
};

export default CertificatesSection;
