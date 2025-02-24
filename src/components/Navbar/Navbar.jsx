import React from 'react'
import "./navbar.css" 
import logo from "../../assets/logo.png"
import menu from "../../assets/menu.png"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >
      <img src={logo} alt=""  height={40} width={120}/>
    </a>
    <button className="navbar-toggler light" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"  ></span> */}
      <img src={menu} alt="" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-us" >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services" >Our Services</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#visit" >Visit us</a>
        </li>
       
      </ul>
      <div>
        <a href="#contact">
        <button className="contact-btn" >Contact us</button>
        </a></div>
    </div>
  
  </div>
</nav>
    </div>
  )
}

export default Navbar

