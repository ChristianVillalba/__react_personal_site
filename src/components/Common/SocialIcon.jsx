import React from "react";

function SocialIcon(props) {
  return (
    <a className="social-icon" href={props.externalLink} 
        target="_blank" data-toggle="tooltip" data-placement="top" title={props.title}>
        <i className={props.icon}></i>
    </a>
  );
}

export default SocialIcon;