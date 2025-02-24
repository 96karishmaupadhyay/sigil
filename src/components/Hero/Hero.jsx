import React from "react";
import "./hero.css"
import men_image from "../../assets/man.png"
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-section">
        <h1>Hello! We are Sigikey</h1>
       
        <p>
        <b>Having all the keys of your Success</b><br/>
          {" "}
          SigilKey Consulting Solutions LLP was founded with the vision of
          empowering businesses through strategic and innovative solutions.
          Established in 2023, our company has quickly grown to become a trusted
          partner for organizations across industries. We specialize in
          providing end-to-end consulting services that drive efficiency,
          security, and growth.

        </p>
        <a href="#contact">
        <button className="hero-contact-btn">Contact-us</button>
        </a>
      </div>
      <div className="hero-image-box">
        <img src={men_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
