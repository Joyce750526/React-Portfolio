import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Project1 from "../files/P1-lyrictionary.png";
import Project2 from "../files/P2-TAC.jpg";
import Challenge5 from "../files/W5-crazy-work-scheduler.png";
import Challenge10 from "../files/W10-team-profile-generator.png";
import Challenge12 from "../files/W12-SQL-employee-tracker.png";
import Challenge13 from "../files/W13-ORM-business-backend-platform.png";
export default function Portfolio() {
  return (
    <div class="card text-center">
      <div class="card-header" align="left">
        <p class="card-text">UNH Coding Boot Camp Full-Stack Projects</p>
      </div>

      {/* Card  */}
      <div class="card-body h100">
        <div class="row">
          {/* Project 1  */}

          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Project 1- Lyrictionary</h5>
                <img src={Project1} alt="Project 1" />
                <p class="card-text">
                  This is a site or app that you can search for song titles on
                  with the ability to click on words to give the definitions of
                  each word.
                </p>
                <a
                  href="https://github.com/Joyce750526/lyrictionary"
                  class="btn btn-primary"
                >
                  View Me
                </a>
              </div>
            </div>
          </div>

          {/* Project 2  */}
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Project 2- TAC</h5>
                <img src={Project2} alt="Project 2" />
                <p class="card-text">
                  The Advertising Campaign (TAC), is a marketing webtool for
                  administrators to promote their startup business. This
                  application provides a secure login, minimalistic user
                  interface, and a commercial email marketing service to send
                  personalized emails to our customers.
                </p>
                <a
                  href="https://github.com/Joyce750526/the_advertising_campaign"
                  class="btn btn-primary"
                >
                  View Me
                </a>
              </div>
            </div>
          </div>

          {/* Challenge 5  */}
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Challenge 5</h5>
                <img src={Challenge5} alt="Project 5" />
                <p class="card-text">
                  This is an scheduler application that creates to plan your
                  day. Creating in JavaScript, jQuery, and moment.js with
                  library of Bootstrap, FontAwesome, to make this app more
                  orgainzed and interactive.
                </p>
                <a
                  href="https://github.com/Joyce750526/crazy-busy-scheduler"
                  class="btn btn-primary"
                >
                  View Me
                </a>
              </div>
            </div>
          </div>

          {/* Challenge 10  */}
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Challenge 10</h5>
                <img src={Challenge10} alt="Project 10" />
                <p class="card-text">
                  This is an scheduler application that creates to plan your
                  day. Creating in JavaScript, jQuery, and moment.js with
                  library of Bootstrap, FontAwesome, to make this app more
                  orgainzed and interactive. This application that takes in
                  information about employees on a software engineering team,
                  then generates an HTML webpage that displays summaries of the
                  team's basic information for each person to help the company
                  organization.
                </p>
                <a
                  href="https://github.com/Joyce750526/OOP-team-profile-generator"
                  class="btn btn-primary"
                >
                  View Me
                </a>
              </div>
            </div>
          </div>

          {/* Challenge 12  */}
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Challenge 12</h5>
                <img src={Challenge12} alt="Project 12" />
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://github.com/Joyce750526/SQL-Employee-Tracker"
                  class="btn btn-primary"
                >
                  View Me
                </a>
              </div>
            </div>
          </div>

          {/* Challenge 13  */}
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Challenge 13</h5>
                <img src={Challenge13} alt="Project 13" />
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://github.com/Joyce750526/ORM-Business-Backend-Platform"
                  class="btn btn-primary"
                >
                  View Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
