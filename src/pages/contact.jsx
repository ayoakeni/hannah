import React from "react";
import img from "../assets/images/image2.png";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="title-home">
        <h2>ASSIGNMENTS HUB</h2>
        <span></span>
      </div>

      <div className="contact-d">
        <div className="img-text">
          <img src={img} />
        </div>
        <div className="details">
          <span>Contact Information</span>
          <div className="text-name">
            <li>Name: <strong>Hannah Mojirade Adediji</strong></li>
            <li>Email: <strong>+234 906 343 3423</strong></li>
            <li>Phone: <strong>hannahmojirade@gmail.com</strong></li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;