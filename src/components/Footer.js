import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Particle Accelerator UX Workshop | Hosted at SLAC National Accelerator Laboratory</p>
      <div className="social-icons">
        <a href="mailto:tiffany@slac.stanford.edu"><FaEnvelope /></a>
      </div>
    </footer>
  );
}

export default Footer;
