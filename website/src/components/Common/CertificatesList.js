import React from "react";
import CertificateItem from "./CertificateItem";

const Liststem = ({ title, certificates }) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <ul className="certificates-list fa-ul mb-0">
          {certificates.map((certificate, index) => (
            <CertificateItem key={index} {...certificate} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Liststem;
