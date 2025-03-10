import React, { useEffect } from 'react';
import About from './About';
import PortfolioWithCards from './PortfolioWithCards';
import Contact from './Contact';
import Home from './Home';

const MainContent = () => {
  // Allows for automatic smooth scrolling to a section of the page when the user navigates to a URL with a hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array so that the effect runs only once after initial render

  return (
    <div className="section large-padding" id="main">
      <Home />

      <section id="about" className="section-spacing">
        <About />
      </section>

      <section id="portfolio" className="section-spacing">
        <PortfolioWithCards />
      </section>

      <section id="contact" className="section-spacing">
        <Contact />
      </section>
    </div>
  );
};

export default MainContent;
