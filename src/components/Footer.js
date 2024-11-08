// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Techmagnate. All Rights Reserved.</p>
        <div>
          <a href="https://www.techmagnate.com/privacy-policy.html">Privacy Policy</a> | 
          <a href="https://www.techmagnate.com/terms-of-use.html"> Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
