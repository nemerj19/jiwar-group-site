import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:info@jawirgroup.com">info.jiwargroup@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+966 55 459 8670</a>
        </p>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
