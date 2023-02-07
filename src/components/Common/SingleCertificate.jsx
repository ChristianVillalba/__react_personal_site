import React from "react";

function SingleCertificate(props) {
  return (
    <li>
      <a
        href={props.url}
        target="_blank"
      >
        <span class="fa-li">
          <i class="fas fa-award text-warning"></i>
        </span>
        {props.name}
      </a>
    </li>
  );
}

export default SingleCertificate;
