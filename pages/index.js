import React, { useState } from "react";
import Experience from "../Components/Experience";
const Home = () => {
  

  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row mt-1 align-items-center text-center text-sm-start ">
        {/* Left side - Text */}
        <div className="col-12 col-md-6 ">
          <h1 className="display-4">K M S SRINIVASU</h1>
        </div>
        {/* Right side - Profile Picture */}
        <div className="col-12 col-md-6 mt-3 mt-md-0 text-center text-md-end">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="rounded-circle profile-pic"
          />
        </div>
      </div>

      <hr className="my-4" />

      {/* Career Snapshot */}
      <div className="row">
        <div className="col-12">
          <h4 className="display-5  bold">Career Snapshot</h4>
          <p className="lead text-justify">
            Experienced Web Application Developer with a proven track record of
            enhancing web app usability and performance. Skilled in React and
            adept in both front-end development and seamless API integration.
            Known for strong problem-solving abilities, delivering high-quality
            solutions, and a commitment to excellence. Consistently driving
            improvements in client satisfaction and project efficiency.
          </p>
        </div>
      </div>
      <hr className="my-4" />

      {/* Skill Set */}
      <div className="row">
        <div className="col-12">
          <h4 className="display-5  bold">Skill Set</h4>
          <div className="d-flex flex-wrap">
            <span className="badge bg-primary m-1">Fullstack Development</span>
            <span className="badge bg-success m-1">Version Control</span>
            <span className="badge bg-info m-1">
              API Integration(RESTFull API'S)
            </span>
            <span className="badge bg-warning text-dark m-1">
              Error Handling
            </span>
            <span className="badge bg-danger m-1">Unit Testing</span>
            <span className="badge bg-secondary m-1">React Proficiency</span>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      {/* Prefessional Journey */}
      <div className="row">
        <div className="col-12">
          <h4 className="display-5  bold">Prefessional Journey</h4>
          <Experience/>
        </div>
      </div>
      <hr className="my-4" />
      {/* Education Details */}
      <div className="row">
        <div className="col-12">
          <h4 className="display-5  bold">Academic Milestones</h4>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Bachelor of Technology</h5>
              <p className="card-text"><strong>Degree:</strong> Bachelor of Technology</p>
              <p className="card-text"><strong>Field of Study:</strong> Computer Science</p>
              <p className="card-text"><strong>University:</strong> Jawaharlal Nehru Technological University Kakinada, India</p>
              <p className="card-text"><strong>Graduation Date:</strong> May 2016</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
