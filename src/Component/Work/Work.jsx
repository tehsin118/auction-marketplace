import React from "react";
import "./work.css";

const Work = () => {
  return (
    <div className="work-main">
      <div className="work-inner">
        <div className="work-title">
          <h1>How it works</h1>
          <p>Learn More</p>
        </div>
        <div className="work-flowchart">
          <img
            className="img-fluid"
            src="..\asset\artwork\flowchart.svg"
            alt="flowchart"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
