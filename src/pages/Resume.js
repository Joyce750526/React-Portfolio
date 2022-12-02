import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Resume from "./../../files/Joyce-Resume.pdf";

export default function Resume() {
  return (
    <div className="resumeList">
      {/* Section */}
      <div className="card col-8 col-md-12">
        <h3>Front End</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
      </div> 

      {/* Section */}
      <div className="card col-8 col-md-12">
        <h3>Back End</h3>
        <li>APIs</li>
        <li>Express Routing</li>
        <li>Node</li>
        <li>MySQL/Sequelize</li>
        <li>Mongo</li>
      </div>
    </div>
  );
}