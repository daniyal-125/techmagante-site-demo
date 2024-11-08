// src/pages/Home.js
import React from 'react';

function About() {
  return (
    <div>
      <header className="hero-section">
        <h1>Welcome to about</h1>
        <p>Your partner in digital excellence.</p>
        <button className="btn btn-primary">Learn More</button>
      </header>
      <section className="services py-5">
        <div className="container">
          <h2>Our Services</h2>
          <p>Explore our wide range of digital marketing services.</p>
        </div>
      </section>
      {/* Add additional sections as needed */}
    </div>
  );
}

export default About;
