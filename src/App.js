import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero data-aos="fade-down" />
      <section id="products" data-aos="fade-up">
        <Products />
      </section>
      <section id="about" data-aos="fade-left">
        <About />
      </section>
      <section id="contact" data-aos="zoom-in">
        <Contact />
      </section>
      <Footer data-aos="fade-up" />
    </>
  );
}

export default App;
