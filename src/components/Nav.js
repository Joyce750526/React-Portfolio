import React from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// // import Collapse from "react-bootstrap/Collapse";
// import Container from "react-bootstrap/Container";
// import Photo from "../files/aboutme.png";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Nav({ currentPage, handlePageChange }) {
  // Close the Navbar when a new page is navigated to

  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        {/* <Navbar.Brand as={Link} to="#home">
          Joyce Chen
        </Navbar.Brand> */}
        {/* <Navbar.Brand as={Link} to="/home" onClick={handleBrandClick}>
          Hello!
        </Navbar.Brand> */}
        {/* -----Handle toggle button to collapse---- */}
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto mr-auto">
            {/* -----HOME TAB----- */}

            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>

            {/* -----ABOUT TAB----- */}

            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>

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
              <NavDropdown.Item href="#action/3.3">
                Solo Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Group Projects
              </NavDropdown.Item>
            </NavDropdown>

            {/* -----INTERIOR DESIGN TAB----- */}

            <NavDropdown
              title="Interior Design"
              id="basic-nav-dropdown"
              className={
                currentPage === "Interior Design"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {/* -----Interior Design Projects Dropdown Sub Group----- */}
              <NavDropdown.Item href="#action/3.1">
                Residential Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Commercial Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                School Projects
              </NavDropdown.Item>
            </NavDropdown>

            {/* -----CREATIVITY COLLECTION TAB----- */}

            <NavDropdown
              title="Creativity Collection"
              id="basic-nav-dropdown"
              className={
                currentPage === "Creativity Collection"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {/* -----Creativity Collection Projects Dropdown Sub Group----- */}

              <NavDropdown.Item href="#action/3.1">
                Art Painting
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Digital Publishing
              </NavDropdown.Item>
            </NavDropdown>

            {/* -----PHOTOGRAPHY COLLECTION TAB----- */}

            <NavDropdown
              title="Photography"
              id="basic-nav-dropdown"
              className={
                currentPage === "Photography" ? "nav-link active" : "nav-link"
              }
            >
              {/* -----Photography Collection Projects Dropdown Sub Group----- */}

              <NavDropdown.Item href="#action/3.1">Canon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">iPhone</NavDropdown.Item>
            </NavDropdown>

            {/* -----CONTACT TAB----- */}

            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Nav;
