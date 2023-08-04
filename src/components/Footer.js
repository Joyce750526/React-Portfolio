import React from "react";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { FiletypePdf } from "react-bootstrap-icons";
import { EnvelopeAtFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div align="center">
      eslint-disable-next-line
      {/* Hyberlinked GitHub Icon */}
      <a
        href="https://github.com/Joyce750526"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github color="black" size={20} />
      </a>
      {/* Hyberlinked LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/joyce-chen-0526/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin color="blue" size={20} />
      </a>
      {/* Hyberlinked Email Icon */}
      <a href="mailto:joyceideas@outlook.com">
        <EnvelopeAtFill
          color="black"
          size={20}
          target="_blank"
          rel="noreferrer"
        />
      </a>
      {/* Hyberlinked Viwe Resume Need to Fix this! */}
      <a href="src/files/resume.pdf">
        <FiletypePdf color="black" size={20} />
      </a>
      <br />
      {/* Copyright Text */}
      <p align="center" style={{ fontSize: "small" }}>
        © 2022 Copyright • Chao-Ying Chen
      </p>
    </div>
  );
}

// Saved Codes for later- this React website is still in working progress

// https://github.com/Joyce750526
// https://www.linkedin.com/in/joyce-chen-0526/
// <p>UNH Coding BootCamp</p>
// <p>© 2022 Copyright • Chao-Ying Chen</p>

// <footer className="foot-icons">
// <a href="https://github.com/Joyce750526" target="_blank" rel="noreferrer"></a>
// <img
//   className="footer-icon"
//   src="https://drive.google.com/file/d/12j7GoDGQF7sYgw0XEQE66JalMZNfRwOf/view?usp=sharing"
//   alt="GitGub"
// ></img>
// </footer>;

// <p align="center">© 2022 Copyright • Chao-Ying Chen</p>
// <i class="bi bi-linkedin"></i>
