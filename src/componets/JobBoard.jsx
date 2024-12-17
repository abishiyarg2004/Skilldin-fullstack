import React, { useState, useEffect } from 'react';
import './JobBoard.css'; // Custom CSS for the layout
import OptionsGrid from './OptionsGrid'; // Import OptionsGrid component
import NavBar from './NavBar';

const JobBoard = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    companyName: '',
    hoursOfWork: '',
    lastDateToApply: '',
    salaryRange: '',
    requiredTalents: ''
  });

  const [appliedJobs, setAppliedJobs] = useState([]); // Track applied jobs

  // Fetch job posts from the backend when the component loads
  useEffect(() => {
    fetch('http://localhost:8080/api/jobs/all')
      .then(response => response.json())
      .then(data => setJobPosts(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value
    });
  };

  // Submit new job post
  const handlePostJob = (e) => {
    e.preventDefault();

    // Post the new job to the backend
    fetch('http://localhost:8080/api/jobs/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then(response => response.json())
      .then(data => {
        // Add the newly posted job to the jobPosts state
        setJobPosts([...jobPosts, data]);

        // Reset the form
        setNewJob({
          title: '',
          description: '',
          companyName: '',
          hoursOfWork: '',
          lastDateToApply: '',
          salaryRange: '',
          requiredTalents: ''
        });
      })
      .catch(error => console.error('Error posting job:', error));
  };

  // Handle job application
  const handleApply = (index) => {
    setAppliedJobs([...appliedJobs, index]); // Add job index to applied jobs list
  };

  return (
    <div className="job-board-container">
      <div className="job-board-content">
        {/* Display Job Posts on the Left */}
        <div className="job-listing-grid">
          {jobPosts.length > 0 ? (
            jobPosts.map((job, index) => (
              <div key={index} className="job-post">
                <h3>{job.title}</h3>
                <p><strong>Company:</strong> {job.companyName}</p>
                <p><strong>Description:</strong> {job.description}</p>
                <p><strong>Hours of Work:</strong> {job.hoursOfWork}</p>
                <p><strong>Last Date to Apply:</strong> {job.lastDateToApply}</p>
                <p><strong>Salary Range:</strong> {job.salaryRange}</p>
                <p><strong>Required Talents:</strong> {job.requiredTalents}</p>

                {appliedJobs.includes(index) ? (
                  <button className="apply-button" disabled>Applied</button>
                ) : (
                  <button className="apply-button" onClick={() => handleApply(index)}>Apply</button>
                )}
              </div>
            ))
          ) : (
            <p>No job listings available.</p>
          )}
        </div>

        <div className="options-grid-container">
        {/* Job Posting Form on the Right */}
        <div className="job-posting-form">
          <h2>Post a New Job</h2>
          <form onSubmit={handlePostJob}>
            <input
              type="text"
              name="title"
              value={newJob.title}
              placeholder="Job Title"
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              value={newJob.description}
              placeholder="Job Description"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="companyName"
              value={newJob.companyName}
              placeholder="Company Name"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="hoursOfWork"
              value={newJob.hoursOfWork}
              placeholder="Hours of Work"
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="lastDateToApply"
              value={newJob.lastDateToApply}
              placeholder="Last Date to Apply"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="salaryRange"
              value={newJob.salaryRange}
              placeholder="Salary Range"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="requiredTalents"
              value={newJob.requiredTalents}
              placeholder="Required Talents (comma separated)"
              onChange={handleInputChange}
              required
            />
            <button type="submit">Post Job</button>
          </form>
        </div>
      </div>

      {/* OptionsGrid on the Right */}
        {/* <OptionsGrid /> */}
      </div>
    </div>
  );
};

export default JobBoard;
