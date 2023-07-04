import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">CarbonSense</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/signin" className="sign-in-btn">SIGN IN</Link>
      </div>
    </nav>
  );
};

export default NavBar;
