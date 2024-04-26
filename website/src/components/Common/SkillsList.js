import React from 'react';
import SkillItem from './SkillItem';

const SkillsList = ({ title, skills }) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
    <div flex-grow-1>
      <h3 className="mb-0">{title}</h3>
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
    </div>
  );
};

export default SkillsList;
