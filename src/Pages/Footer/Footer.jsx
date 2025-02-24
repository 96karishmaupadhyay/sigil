import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <div class="footer" id='visit'>
    <div class="footer-container">
        <div class="footer-section about">
            <h3>About SigilKey</h3>
            <p>SigilKey Consulting Solutions LLP is a trusted consulting partner, providing expert IT, cybersecurity, audit, digital transformation, HR, and tax consulting services. Our mission is to help businesses achieve operational excellence and security through innovative solutions.</p>
        </div>

        <div class="footer-section services">
            <h3>Our Services</h3>
            <ul>

                <li><a href="#">IT Consulting</a></li>
                <li><a href="#">Audit & Compliance</a></li>
                <li><a href="#">Cybersecurity</a></li>
                <li><a href="#">Digital Transformation</a></li>
                <li><a href="#">HR Consulting</a></li>
                <li><a href="#">Tax Consultation</a></li>
                <li><a href="#">Graphic Design</a></li>
            </ul>
        </div>

        <div class="footer-section contact" id='visit'>
            <h3>Contact Us</h3>
            <p><strong>Office Address:</strong> A3/304, Eastern Heights, Nyay Khand 3, Indirapuram, Ghaziabad, PIN: 201014</p>
            <p><strong>Phone:</strong> <a href="tel:+919910275909">+91 9910275909</a></p>
            <p><strong>Email:</strong> <a href="mailto:kusumakar@sigilkey.com">kusumakar@sigilkey.com</a></p>
        </div>

        <div class="footer-section social">
            <h3>Follow Us</h3>
            <a href="#" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
            <a href="#" target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2025 SigilKey Consulting Solutions LLP. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
   <div>
   <a
  href="https://wa.me/9910275909" 
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
>
    <button className='watsapp-btn'> WhatsApp us</button>
  
</a>
   </div>
    </div>
</div>

    </div>
  )
}

export default Footer
