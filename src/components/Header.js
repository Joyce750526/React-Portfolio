import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "./components/Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Header.css";

export default function Header() {
  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
