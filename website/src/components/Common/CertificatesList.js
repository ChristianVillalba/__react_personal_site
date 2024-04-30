import React from "react";
import CertificateItem from "./CertificateItem";

const Liststem = ({ title, certificates }) => {
  return (
    <div class="d-flex flex-column flex-md-row justify-content-between mb-4">
      <div class="flex-grow-1">
        <h3 class="mb-0">{title}</h3>
        <ul class="certificates-list fa-ul mb-0">
          {certificates.map((certificate, index) => (
            <CertificateItem key={index} {...certificate} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Liststem;
