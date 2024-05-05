import React from "react";

const ExperienceItem = (props) => {
  const { company, jobTitle, description, period } = props;

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{company}</h3>
        <div className="subheading mb-3">{jobTitle}</div>
        <p>
          {description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{period}</span>
      </div>
    </div>
  );
};

export default ExperienceItem;
