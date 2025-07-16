import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Jiwar Group of Companies</h3>
        <p>Raihana Bint Road, Al Arid, Riyadh, Saudi Arabia</p>
        <p>
          Email:{" "}
          <a href="mailto:info.jawirgroup@gmail.com">
            info.jiwargroup@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+966554598670</a>
        </p>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Jiwar Group. All rights reserved. by
        Framenta Web Design
      </p>
    </footer>
  );
}

export default Footer;
