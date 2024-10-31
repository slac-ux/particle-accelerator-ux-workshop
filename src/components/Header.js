import React from 'react';
import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header-section">
      <div className="header-content">
        <h1>Particle Accelerator UX Workshop</h1>
        <p>Elevating User Experience in Accelerator Labs</p>
        <button onClick={() => scrollToSection('#about')}>Learn More</button>
      </div>
    </header>
  );
}

export default Header;
