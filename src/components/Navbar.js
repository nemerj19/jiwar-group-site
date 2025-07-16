import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#hero" className="logo" onClick={() => setIsOpen(false)}>
          Jiwar Group of Companies
        </a>
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#products" onClick={() => setIsOpen(false)}>
          Services
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
