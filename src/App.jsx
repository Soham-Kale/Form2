import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobApplicationForm from './components/JobApplicationForm';
import SubmissionPage from './components/SubmissionPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<JobApplicationForm />} />
          <Route path="/submission" element={<SubmissionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
