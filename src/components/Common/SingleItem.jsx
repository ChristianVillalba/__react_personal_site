import React from "react";

function SingleItem(props) {
  return (
    <div className="personal-skill"><i className={props.icon}></i> {props.listItem}</div>
  );
}

export default SingleItem;