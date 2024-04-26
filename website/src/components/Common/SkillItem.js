import React from "react";

const SkillItem = (props) => {
  const { icon, name } = props;

  return (
    <div className="item-skill">
      <i className={icon}></i> {name}
    </div>
  );
};

export default SkillItem;
