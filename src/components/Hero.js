import React from "react";
import heroBg from "../assets/hero-bg.jpg"; // adjust path if needed
import "./Hero.css";

function Hero() {
  return (
    <div
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-card">
        <h1>Welcome to Jiwar Group of Companies</h1>
        <p>Your Trusted Partner in Growth and Operations</p>
      </div>
    </div>
  );
}

export default Hero;
