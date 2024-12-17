import React from 'react';
import { useParams } from 'react-router-dom';
import skillsData from '../Skills/skillsData'; 
import JobOpeningsLineChart from '../JobOpeningsLineChart'; 
import './SkillDetails.css'; 

const SkillDetails = () => {
  const { id } = useParams(); 
  const skill = skillsData.find(skill => skill.id === parseInt(id)); 

  if (!skill) {
    return <h2>Skill not found</h2>; 
  }

  return (
    <div className="skill-detail-container">
      <h1>{skill.title}</h1>
      <div className="content-container"> 
        <div className="image-container">
          <img src={skill.imageUrl} alt={skill.title} className="skill-detail-image" />
        </div>
        
        
      </div>
      <p>{skill.description}</p>
      <h3>Required Skills:</h3>
      <p>{skill.skills}</p>
      <h3>Salary</h3>
      <p>{skill.salary}</p>
      <h3>Work Environment</h3>
      <p>{skill.work_environment}</p>
      <h3>Career Path</h3>
      <p>{skill.career_path}</p>
      {skill.jobOpenings && (
          <div className='chart-container'> 
            <h3>Job Openings Trend</h3>
            <JobOpeningsLineChart jobOpenings={skill.jobOpenings} title={skill.title} salary={skill.salary} />
          </div>
        )}

      <button className="back-button" onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default SkillDetails;
