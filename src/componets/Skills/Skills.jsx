

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Skills.css'; 
import skillsData from './skillsData'; 

const Skills = () => {
  return (
    <div className="skills-container">
     
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-card">
            <img src={skill.imageUrl} alt={skill.title} className="skill-image" />
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
            <p><strong>Required Skills:</strong> {skill.skills}</p>
            <Link to={`/skills/${skill.id}`} className="skill-button">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
