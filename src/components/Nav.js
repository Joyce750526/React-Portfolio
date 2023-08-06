import React from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import "../styles/Nav.css";

function Nav({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#home">Joyce Chen</Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto">
            {/* -----HOME TAB----- */}

            <li className="nav-item">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>

            {/* -----ABOUT TAB----- */}
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>

            {/* -----PORTFOLIO TAB----- */}
            {/* Projects Dropdown Group */}
            <li className="nav-item">
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                {/* -----Projects Dropdown Sub Group----- */}
                <NavDropdown.Item href="#action/3.3">
                  Solo Projects
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Group Projects
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            {/* -----INTERIOR DESIGN TAB----- */}
            <li className="nav-item">
              <NavDropdown title="Interior Design" id="basic-nav-dropdown">
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
            </li>
            {/* -----CREATIVITY COLLECTION TAB----- */}
            <li className="nav-item">
              <NavDropdown
                title="Creativity Collection"
                id="basic-nav-dropdown"
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
            </li>
            {/* -----PHOTOGRAPHY COLLECTION TAB----- */}
            <li className="nav-item">
              <NavDropdown title="Photography" id="basic-nav-dropdown">
                {/* -----Photography Collection Projects Dropdown Sub Group----- */}
                <NavDropdown.Item href="#action/3.1">Canon</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">iPhone</NavDropdown.Item>
              </NavDropdown>
            </li>
            {/* -----CONTACT TAB----- */}
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
