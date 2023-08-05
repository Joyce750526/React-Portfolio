import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

// import Photo from "../files/aboutme.png";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        {/* -----HOME TAB----- */}
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      {/* -----ABOUT TAB----- */}
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>

      {/* -----PORTFOLIO TAB----- */}

      {/* Projects Dropdown Group */}
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        {/* <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a> */}
        {/* -----Projects Dropdown Sub Group----- */}

        <NavDropdown.Item href="#action/3.3">Solo Projects</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">
          Projects Projects
        </NavDropdown.Item>
      </NavDropdown>

      {/* -----INTERIOR DESIGN TAB----- */}

      {/* Projects Dropdown Group */}
      <NavDropdown title="Interior Design" id="basic-nav-dropdown">
        {/* <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a> */}
        {/* -----Residential Projects Dropdown Sub Group----- */}

        <NavDropdown.Item href="#action/3.1">
          Residential Projects
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">
          Commercial Projects
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">School Projects</NavDropdown.Item>
      </NavDropdown>

      {/* -----CONTACT TAB----- */}
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
      {/* <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")} */}
      {/* // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"} */}
      {/* >
          Contact
        </a>
      </li> */}
    </ul>
  );
}
export default Nav;
