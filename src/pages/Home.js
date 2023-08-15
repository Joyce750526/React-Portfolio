import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

export default function Home() {
  const [typedIndex, setTypedIndex] = useState(0);
  const roles = ['Full-Stack Web Developer', 'Interior Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="jumbotron">
        <div className="hero-container" data-aos="fade-in">
          <h1>Chao Ying Chen</h1>
          <div>
            <p>
              I'm an {roles[typedIndex]}
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              >
                |
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
