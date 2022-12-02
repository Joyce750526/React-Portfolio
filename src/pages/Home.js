import React from 'react';
import HomePage1 from "../files/aboutme.jpg";
// import HomePage2 from "../files/aboutme.jpg";
// import HomePage3 from "../files/home-image.jpg";

export default function About() {
  return (
    <div class="jumbotron">
      <h1 class="display-4">Hello, you!</h1>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus</p>
      <a class="btn btn-primary btn-lg" href="#portfolio" role="button">ABC</a>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={HomePage1}  class="d-block w-100" alt="HomePage1" />
    </div>
    <div class="carousel-item">
    <img src={HomePage1}  class="d-block w-100" alt="HomePage2" />
    </div>
    <div class="carousel-item">

    <img src={HomePage1}  class="d-block w-75" alt="HomePage3" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      

    </div>
  );
}




// {/* <p>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
// velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
// ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
// non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
// ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
// rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
// tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
// porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
// vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
// fames ac ante ipsum primis in faucibus.
// </p> */}