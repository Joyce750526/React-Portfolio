import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function About() {
  return (
    <div classNameName="jumbotron">
      <h1 className="display-4">Hello, you!</h1>
      <p classNameName="lead">
        I'm Joyce, a student who is currently learning coding at UNH Coding Boot
        Camp. I worked on a few projects to showcase my technocial skills to a
        potential employer.
      </p>
      <a classNameName="btn btn-primary btn-lg" href="#portfolio" role="button">
        Learn more about my work
      </a>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <hr className="my-4"></hr>
      <div align="left">
        <div className="card">
          <div className="card-body"></div>
          <h3>My Journey...</h3>
          <p>
            Hello, I'm Joyce. I'm original from Taipei city, Taiwan. Joyce Chen
            was born in Taipei city, Taiwan. In my childhood, I was inspired by
            one of my family members in the architecture industry. This brought
            me to study interior design and architecture design at Academy of
            Art University in San Francisco. I spent one year learning English
            in an ESL program at University of Tennessee.
          </p>
          <p>
            In 2013, I came back to San Francisco to pursue my interior design
            degree. Along with the learning process, I truly fell in love with
            interior design. My dream was to help people create a welcoming home
            that can reflect their personalities and make their visions come
            true. I completed my degree in interior and architectural design in
            2018 and soon started her professional career in an architectural
            firm right after an internship. I learned a lot from my professional
            work to be detail-oriented, a problem solver, time manager and an
            accountable person.
          </p>
          <p>
            Later, I found myself falling in love with technology, and I desired
            to be a programmer. I am taking every step to achieve my career goal
            in a huge career switch by attending an online program for IT
            training and a Full-Stack web development Boot Camp at University of
            New Hampshire.
          </p>
          <p>
            I keeps learning English, thanks to The Accelerated Career English
            (ACE) program at HCC that offered such a great opportunity for me to
            enhance my skills both professionally and personally. I just added a
            new page to my journey, and I'm hoping to share more projects and
            stories to people who is also interested in switching their career!
          </p>
        </div>
      </div>
    </div>
  );
}
