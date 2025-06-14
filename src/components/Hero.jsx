import React from 'react';
import '../styles/components/hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>
          Book an appointment with <span className="hero__highlight">lifestyle medicine experts</span>
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
        <form className="hero__search">
          <input type="text" placeholder="Condition, procedure, specialty..." />
          <input type="text" placeholder="City, state, or zipcode" />
          <input type="text" placeholder="Insurance carrier" />
          <button type="submit">Find now</button>
        </form>
        <div className="hero__underline"></div>
      </div>
    </section>
  );
};

export default Hero; 