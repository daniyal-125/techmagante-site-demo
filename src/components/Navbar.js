// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar primaryNav navbar-expand-lg navbar-dark">
        <div className="container d-flex justify-content-center">
          <a className="menuicon" href="#mob-menu" aria-label="menuicon">
            {/* <span className="navbar-toggler-icon"></span> */}
            <span className="icon-bar"></span>
          </a>
          <a
            className="navbar-brand"
            href="https://www.techmagnate.com"
          >
            <img
              src="https://www.techmagnate.com/alpha/images/techmagnate-digital-excellence-logo.svg"
              width="196"
              height="50"
              alt="Techmagnate digital excellence logo"
              className="entered lazyloaded"
            />
          </a>
  
          <div className="collapse navbar-collapse" id="primaryNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li><a href="https://www.techmagnate.com/about-us.html">About Us</a></li>
                  <li><a href="https://www.techmagnate.com/digital-excellence.html">Vision &amp; Mission</a></li>
                  <li><a href="https://www.techmagnate.com/team-seo-experts.html">Team</a></li>
                  <li><a href="https://www.techmagnate.com/careers.html">Careers</a></li>
                  <li><a href="https://www.techmagnate.com/best-place-work-india.html">Best Place to Work</a></li>
                  <li><a href="https://www.techmagnate.com/life-techmagnate.html">Life at Techmagnate</a></li>
                  <li><a href="https://www.techmagnate.com/blogx-blogger-community.html">BlogX</a></li>
                </ul>
              </li>
  
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="https://www.techmagnate.com/search-trends-report.html">
                      Search Trends Reports
                    </a>
                  </li>
                </ul>
              </li>
  
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Work
                </a>
                <ul className="dropdown-menu">
                  <li><a href="https://www.techmagnate.com/portfolio.html">Portfolio</a></li>
                  <li><a href="https://www.techmagnate.com/clients-testimonials.html">Testimonials</a></li>
                  <li><a href="https://www.techmagnate.com/casestudies.html">Case Studies</a></li>
                </ul>
              </li>
  
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Industry
                </a>
                <ul className="dropdown-menu">
                  <li><a href="https://www.techmagnate.com/digital-marketing-for-bfsi-industry.html">BFSI</a></li>
                  <li><a href="https://www.techmagnate.com/digital-marketing-for-b2b-industry.html">B2B</a></li>
                  <li><a href="https://www.techmagnate.com/digital-marketing-for-healthcare-industry.html">Healthcare</a></li>
                  <li><a href="https://www.techmagnate.com/digital-marketing-for-gaming-industry.html">IGaming</a></li>
                  <li><a href="https://www.techmagnate.com/digital-marketing-for-education-industry.html">Education</a></li>
                </ul>
              </li>
  
              <li className="nav-item">
                <a className="nav-link" href="https://www.techmagnate.com/blog/">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.techmagnate.com/contact-us.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
