import React, { useState } from "react";
import "./about.css";
import emailjs from "emailjs-com";
const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handling input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Sending data:", formData);
  
    emailjs.send(
      "service_20ws4zs",  // Service ID
      "template_116f54o", // Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "BD-pO5ndOlCZFIFvC"  // Public Key
    )
    .then((response) => {
      alert("Email sent successfully!");
      console.log("Success:", response.status, response.text);
    })
    .catch((error) => {
      alert("Failed to send email!");
      console.error("Error:", error);
    });
  
    setFormData({ name: "", email: "", message: "" });
  };
  
  
  
  

  return (
    <div className="about-container">
     
      <div className="about-text" id="about-us">
        <h2>ABOUT US</h2>
        <p>
          Empowering Businesses Through Innovation & Strategy SigilKey Consulting
          Solutions LLP was founded in 2023 with a vision to empower businesses by
          delivering strategic, innovative, and technology-driven solutions. Over
          the years, we have grown into a trusted consulting partner for
          organizations across various industries, helping them achieve
          efficiency, security, and sustainable growth. We specialize in providing
          end-to-end consulting services spanning IT, cybersecurity, audits,
          compliance, digital transformation, marketing, HR, and tax consulting.
          Our expertise ensures that businesses can optimize operations, enhance
          security, and seamlessly integrate cutting-edge technologies.
        </p>
      </div>

      
      <div className="enquiry-form" id="contact">
        <h2>Send Us an Enquiry</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default About;
