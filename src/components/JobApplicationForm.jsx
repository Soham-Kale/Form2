import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import './Form.css';

const JobApplicationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    applyingFor: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: {
      JavaScript: false,
      CSS: false,
      Python: false,
    },
    preferredInterviewTime: '',
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/submission', { state: { submittedData: values } });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Full Name:
            <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
            {errors.fullName && <p>{errors.fullName}</p>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </label>
        </div>
        <div>
          <label>
            Applying for Position:
            <select name="applyingFor" value={values.applyingFor} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </label>
        </div>
        {(values.applyingFor === 'Developer' || values.applyingFor === 'Designer') && (
          <div>
            <label>
              Relevant Experience (Years):
              <input type="number" name="relevantExperience" value={values.relevantExperience} onChange={handleChange} />
              {errors.relevantExperience && <p>{errors.relevantExperience}</p>}
            </label>
          </div>
        )}
        {values.applyingFor === 'Designer' && (
          <div>
            <label>
              Portfolio URL:
              <input type="text" name="portfolioURL" value={values.portfolioURL} onChange={handleChange} />
              {errors.portfolioURL && <p>{errors.portfolioURL}</p>}
            </label>
          </div>
        )}
        {values.applyingFor === 'Manager' && (
          <div>
            <label>
              Management Experience:
              <input type="text" name="managementExperience" value={values.managementExperience} onChange={handleChange} />
              {errors.managementExperience && <p>{errors.managementExperience}</p>}
            </label>
          </div>
        )}
        <div>
          <label>Additional Skills:</label>
          <label>
            <input type="checkbox" name="JavaScript" checked={values.additionalSkills.JavaScript} onChange={handleChange} />
            JavaScript
          </label>
          <label>
            <input type="checkbox" name="CSS" checked={values.additionalSkills.CSS} onChange={handleChange} />
            CSS
          </label>
          <label>
            <input type="checkbox" name="Python" checked={values.additionalSkills.Python} onChange={handleChange} />
            Python
          </label>
          {errors.additionalSkills && <p>{errors.additionalSkills}</p>}
        </div>
        <div>
          <label>
            Preferred Interview Time:
            <input type="datetime-local" name="preferredInterviewTime" value={values.preferredInterviewTime} onChange={handleChange} />
            {errors.preferredInterviewTime && <p>{errors.preferredInterviewTime}</p>}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
