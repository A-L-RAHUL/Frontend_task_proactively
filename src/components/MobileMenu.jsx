import React, { useState } from 'react';
import '../styles/components/mobileMenu.scss';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu">
      <button className="mobile-menu__toggle" onClick={toggleMenu} aria-label="Open menu">
        <span className={`mobile-menu__hamburger ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`mobile-menu__overlay ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu__drawer">
          <div className="mobile-menu__header">
            <img src="/images/logo-placeholder.png" alt="Provital Logo" className="mobile-menu__logo" />
            <span className="mobile-menu__brand">ProVital</span>
            <button className="mobile-menu__close" onClick={toggleMenu} aria-label="Close menu">&times;</button>
          </div>
          <div className="mobile-menu__auth">
            <div className="mobile-menu__auth-group">
              <span>Doctor</span>
              <a href="#login">Login</a>
              <a href="#signup">Sign up</a>
            </div>
            <div className="mobile-menu__auth-group">
              <span>Patients</span>
              <a href="#login">Login</a>
              <a href="#signup">Sign up</a>
            </div>
          </div>
          <nav className="mobile-menu__nav">
            <a href="#doctors">Doctors</a>
            <a href="#practice">List your practice</a>
            <a href="#employers">For Employers</a>
            <a href="#courses">Courses</a>
            <a href="#books">Books</a>
            <a href="#speakers">Speakers</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 