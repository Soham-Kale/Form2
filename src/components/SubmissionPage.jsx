import React from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css';

const SubmissionPage = () => {
  const location = useLocation();
  const { state } = location;
  const { submittedData } = state || {};

  return (
    <div className="submission-container">
      <h2>Submitted Data</h2>
      {submittedData ? (
        <>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone Number:</strong> {submittedData.phoneNumber}</p>
          <p><strong>Applying for:</strong> {submittedData.applyingFor}</p>
          {(submittedData.applyingFor === 'Developer' || submittedData.applyingFor === 'Designer') && (
            <p><strong>Relevant Experience:</strong> {submittedData.relevantExperience} years</p>
          )}
          {submittedData.applyingFor === 'Designer' && (
            <p><strong>Portfolio URL:</strong> {submittedData.portfolioURL}</p>
          )}
          {submittedData.applyingFor === 'Manager' && (
            <p><strong>Management Experience:</strong> {submittedData.managementExperience}</p>
          )}
          <p><strong>Additional Skills:</strong> {Object.keys(submittedData.additionalSkills).filter(skill => submittedData.additionalSkills[skill]).join(', ')}</p>
          <p><strong>Preferred Interview Time:</strong> {new Date(submittedData.preferredInterviewTime).toLocaleString()}</p>
        </>
      ) : (
        <p>No data submitted.</p>
      )}
    </div>
  );
};

export default SubmissionPage;
