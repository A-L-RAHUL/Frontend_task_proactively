import React from 'react';
import '../styles/components/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* Replace with real logo image later */}
        <img src="/images/logo-placeholder.png" alt="Provital Logo" className="navbar__logo-img" />
        <span className="navbar__brand">ProVital</span>
      </div>
      <div className="navbar__links">
        <a href="#doctors">Doctors</a>
        <a href="#practice">List your practice</a>
        <a href="#employers">For Employers</a>
        <a href="#courses">Courses</a>
        <a href="#books">Books</a>
        <a href="#speakers">Speakers</a>
      </div>
      <div className="navbar__auth">
        <span>Doctor</span>
        <a href="#login" className="navbar__login">Login</a>
        <a href="#signup" className="navbar__signup">Sign up</a>
        <span className="navbar__divider">|</span>
        <span>Patients</span>
        <a href="#login" className="navbar__login">Login</a>
        <a href="#signup" className="navbar__signup">Sign up</a>
      </div>
    </nav>
  );
};

export default Navbar; 