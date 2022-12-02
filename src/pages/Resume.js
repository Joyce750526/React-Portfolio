import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Resume from "./../../files/Joyce-Resume.pdf";

export default function Resume() {
  return (
    <div class="card">
      <div class="card-body"></div>
      <div className="container">
        <div className="container text-left">
          {/* Section */}
          <div className="col-lg-12">
            <h3 style={{ fontWeight: "normal" }}>Education</h3>
            <ul>
              <li>B.F.A. Interior Architecture & Design | May 2018</li>
              <li>Academy of Art University, San Francisco, CA</li>
            </ul>
            <ul>
              <li>Certificate Full-Stack Coding BootCamp | Dec 2022</li>
              <li>University of New Hampshire, New Hampshire, MA</li>
            </ul>
          </div>

          {/* Section */}
          <div className="col-lg-12">
            <h3 style={{ fontWeight: "normal" }}>Career Path</h3>

            <h6 style={{ fontWeight: "bold" }}>
              University of New Hampshire • Full StackCoding BootCamp | 24 Weeks
            </h6>
            <ul>
              <li>
                Learning browser based technologics, API design, Databases, and
                server side development
              </li>
              <li>
                Understand the basics of troubleshooting and enhancing legacy
                code
              </li>
              <li>
                Learning how to build a front end website with implementing
                complex logical conditions
              </li>
              <li>Learning towards a goal to create a complex team project</li>
            </ul>
            <h6 style={{ fontWeight: "bold" }}>
              The Tech Foundry | IT Live Course | 16 Weeks
            </h6>
            <ul>
              <li>
                Basic IT knowledge training with hardware troubleshooting to
                help solve the issue
              </li>
              <li>
                Learned system administration: Windows Server and Active
                Directory
              </li>
              <li>
                Learned operating systems: Linux (OS Terminal) and Windows
                (PowerShell)
              </li>
              <li>Learned Network services: DHCP and DNS</li>
              <li>
                Learned imaging and deployment to install software on computers
              </li>
            </ul>
            <h6 style={{ fontWeight: "bold" }}>
              ELVTR | UX Live Course | 12 Weeks
            </h6>
            <ul>
              <li>UX design skills in a B2B software environment</li>
              <li>
                UX research- Ideate the solution, wireframing & prototyping,
                usability testing
              </li>
              <li>
                Redesigned Airbnb adding feature and share function on APP to
                make it more usable
              </li>
            </ul>
            <h6 style={{ fontWeight: "bold" }}>
              {" "}
              Holyoke Community College • The Accelerated English Course |
              Current
            </h6>
            <ul>
              <li>
                Enhancing advanced level in grammar, listening, and writing for
                professional skills
              </li>
              <li>
                Enriching English skills for higher education preparation and
                career change
              </li>
              <li>
                Learning professional interview skills and receiving career
                coaching for career prep
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="col-lg-12">
            <h3 style={{ fontWeight: "normal" }}>Work Experience</h3>
            <h6 style={{ fontWeight: "bold" }}>IT Internship • Tech Foundry</h6>
            <ul>
              <li>Reviewed 30 weeks Google IT courses for Tech Foundry</li>
              <li>
                Created documentations and summarized a 30 weeks Google IT
                Support course
              </li>
              <li>
                Explored Amazon Web Service (S3) for a hosting static website
              </li>
              <li>
                Worked on WordPress to prepare creating a professional website
              </li>
            </ul>
            <h6 style={{ fontWeight: "bold" }}>
              Intermediate Designer • MA Dimensions Inc
            </h6>
            <ul>
              <li>
                Familiar with city submittal process for residential and
                commercial permit
              </li>
              <li>
                Onsite measuring for projects, creating floor plan and
                construction document set
              </li>
              <li>
                Solutionional design for projects with knowledge of regulations
              </li>
              <li>
                Onsite/online meetings with clients to go over the design
                process/ options
              </li>
              <li>
                Collaboratively with MEP engineers on the design goal to meet
                deadlines
              </li>
            </ul>
            <h6 style={{ fontWeight: "bold" }}>
              Interior Design Consultant • Gooder Supply Home Design, Inc
            </h6>
            <ul>
              <li>
                Created 2D floor plans for cabinetry using in house software
                20/20 for clients
              </li>
              <li>
                Helping clients to pick needed products to bring company values
              </li>
              <li>
                Work closely with clients to their needs and offer solutions
                through space design
              </li>
            </ul>
            <h6 style={{ fontWeight: "bold" }}>
              Design Consultant Experience • Harley Ellis Devereaux (HED)
            </h6>
            <ul>
              <li>
                Combined a portfolio of six projects on time with high quality
                aligned with requirements from the project architects
              </li>
              <li>
                Structured bookmarks and created hyperlinks for navigation to
                all single drawing and to schematics into PDFs in Bluebeam Revu
                to meet DSA requirements
              </li>
            </ul>
            <h3 style={{ fontWeight: "normal" }}>Technical Skills</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Front-End: HTML, CSS, JavaScript, JQuery, Bootstrap, React
              </li>
              <li class="list-group-item">
                Back-End: MySQL | Sequelize, Mongo | Mongoose, Express.js,
                Node.js, APIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
