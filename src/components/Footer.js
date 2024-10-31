import React from 'react';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Particle Accelerator UX Workshop | SLAC National Accelerator Laboratory</p>
      <div className="social-icons">
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
        <a href="mailto:tiffany@slac.stanford.edu"><FaEnvelope /></a>
      </div>
    </footer>
  );
}

export default Footer;
