import React, { useState } from "react";
import { Link } from "react-scroll";
import './hamburger.css'
import logo from "../../img/logo.png";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };



  return (
    <div className="hamburger-wrapper">
      <input type="checkbox" className="hamburger-checkbox" id="hamburger-toggle" checked={isOpen} onChange={handleToggle} />

      <div className="hamburgerLogo">
        <div className="n-logo">
              <img src={logo} alt="" />
        </div>
      <label className="hamburger-label" htmlFor="hamburger-toggle">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </label>
    </div>

      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="hamburger-menu-content">
          <ul className="hamburger-list">
            <li className="hamburger-item ham-btn">
              <Link to="intro" spy={true} smooth={true} offset={-100} onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li className="hamburger-item ham-btn">
              <Link to="services" spy={true} smooth={true} offset={-100} onClick={handleMenuItemClick}>
                Services
              </Link>
            </li>
            <li className="hamburger-item ham-btn">
              <Link to="Education" spy={true} smooth={true} offset={-100} onClick={handleMenuItemClick}>
                Education
              </Link>
            </li>
            <li className="hamburger-item ham-btn">
              <Link to="projects" spy={true} smooth={true} offset={-100} onClick={handleMenuItemClick}>
                Projects
              </Link>
            </li>
            <li className="hamburger-item ham-btn">
              <Link to="Pricecard" spy={true} smooth={true} offset={-100} onClick={handleMenuItemClick}>
                Mentorship
              </Link>
            </li>
            <li  className="hamburger-item ham-btn">
              <Link to="contact" spy={true} smooth={true} offset={-111} onClick={handleMenuItemClick}>
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
