import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "../styles/Home.css"; // Make sure to adjust the path to your CSS file

export default function Home() {
  const roles = [
    "HTML | CSS | JavaScript | React",
    "a Frontend Software Developer!",
    "an Interior Designer",
    "Aspiring Developer!",
    "Love Tech!"
  ];

  const [typedText, setTypedText] = useState(roles[0]); // Initialize with first role
  const [typedIndex, setTypedIndex] = useState(1); // Start from the second role

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setTypedText(roles[typedIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [typedIndex]);

  return (
    <div className="home-container">
      <div className="jumbotron">
        <div className="hero-container" data-aos="fade-in">
          <h1>Hello !!</h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [roles[0]],
            }}
          />
          <div>
            <p>
              I'm{" "}
              <span className="typed">
                <u>{typedText}</u>
              </span>
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              ></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
