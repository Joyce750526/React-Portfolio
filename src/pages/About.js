import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AboutPage1 from "../files/bridge.png";
import AboutPage2 from "../files/aboutme.png";
import AboutPage3 from "../files/snow.png";
import AboutPage4 from "../files/gouache.png";

export default function About() {
  return (
    <div className="jumbotron">
      {/* <text className="display-4"></text> */}
      {/* <p className="lead">
        I'm Joyce, a student who is currently learning coding at UNH Coding Boot
        Camp. I worked on a few projects to showcase my technocial skills to a
        potential employer.
      </p> */}
      <br />
      <Container className="h-100 pb-5">
        <Row className="justify-content-center align-items-center">
          <Carousel className="col-sm-9 col-lg-6">
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={AboutPage1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>1 • Creativity</h5>
                <p>I have a lot of ideas!</p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Silde 2 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={AboutPage2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h5>2 • Fake influencer</h5>
                <p>At "Made In L.A. Wall"</p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={AboutPage3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h5>3 • Just wanna lay down</h5>
                <p>Snow days + Coding days...</p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 4 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={AboutPage4}
                alt="Forth slide"
              />

              <Carousel.Caption>
                <h5>4 • Painting w/ gouache</h5>
                <p>I used to paint...myself </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <div className="my-4"></div>

      <div align="left">
        <h4>My Journey...</h4>
        <p className="center">
          Hello, I'm Joyce. I'm original from Taipei city, Taiwan. My passion
          was to help people create a welcoming home. that can reflect their
          personalities and make their visions come true. I completed my degree
          in interior and architectural design in 2018 and soon started her
          professional career in an architectural firm right after an
          internship. I learned a lot from my professional work to be
          detail-oriented, a problem solver, time manager and an accountable
          person.
        </p>
        <p>
          Later, I found myself falling in love with technology, and I truly
          desire to be a programmer. I am taking every step to achieve my career
          goal in a huge career switch by attending an online program for IT
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
  );
}

// Save Codes for later
// <Card style={{ width: "18rem" }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
