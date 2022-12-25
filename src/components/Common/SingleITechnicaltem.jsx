import React from "react";

function SingleTechnicalItem(props) {
  return (
    <div className="tech-skill"><i className={props.icon}></i> {props.name}</div>
  );
}

export default SingleTechnicalItem;