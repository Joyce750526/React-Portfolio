import React from "react";
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer" 


const App = () => <PortfolioContainer />;

// function App() {
//   return (
//     <div className="App">
  
//     <Nav /> 
//     {/* import pages here
//       About
//       Projects
//       Resume
//       Contact Form
//     */}

//     <Home />

//     <About />

//     <Portfolio /> 

//     <Resume /> 

//     <Contact /> 

//     <Footer />
//     <p align="center">Chao-Ying Chen</p>
//     </div>
//   );
// }

export default App;
