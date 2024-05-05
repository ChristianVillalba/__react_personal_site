import React from "react";

const CertificateItem = (props) => {
  const { externalLink, certificate } = props;

  return (
    <li>
      <a
        href={externalLink}
        target="_blank"
        rel="noreferrer">
        <span className="fa-li">
          <i className="fas fa-award text-warning"></i>
        </span>
        {certificate}
      </a>
    </li>
  );
};

export default CertificateItem;
