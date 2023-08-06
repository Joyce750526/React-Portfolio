import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomePage1 from "../files/bridge.png";
import HomePage2 from "../files/aboutme.png";
import HomePage3 from "../files/snow.png";
import HomePage4 from "../files/gouache.png";
// import "../styles/Home.css"; 

export default function About() {
  return (
    <div className="jumbotron">
      <br />
      <br />
      <h3 align="center">Chao Ying Chen</h3>
      <p align="center">Full-Stack Web Developer • Interior Designer</p>
      {/* <h1 className="display-4">Hello, you!</h1> */}
      {/* <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus
      </p>
      <a className="btn btn-primary btn-lg" href="#portfolio" role="button">
        ABC
      </a> */}
      <Container className="h-100 pb-5">
        <Row className="justify-content-center align-items-center">
          <Carousel className="col-sm-9 col-lg-6">
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={HomePage1}
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
                src={HomePage2}
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
                src={HomePage3}
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
                src={HomePage4}
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
    </div>
  );
}
