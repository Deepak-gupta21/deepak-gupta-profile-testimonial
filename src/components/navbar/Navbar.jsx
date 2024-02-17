// import React from "react";
// // import { BrowserRouter as Router, Switch, Route,Link,Routes
// //   } from "react-router-dom";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import './Navbar.css'
// // import { Link } from "react-scroll";
// import logo from "../../img/logo.png";
// // import gif from "../../img/Gif.gif";

// const Navbar=()=>{
//     return (

//         <div className="n-wrapper">
//             <div className="n-left">
//                 <div className="n-logo">
//                     <img src={logo} alt="" />
//                 </div>
//             </div>

//             <div className="n-right">
//                 <div className="n-list">
//                     <ul style={{listStyleType: 'none'}}>
//                         <li><Link activeClass="active" to="intro" spy={true} smooth={true}>Home</Link></li>
//                         <li><Link to="services" spy={true} smooth={true}>Services</Link></li>
//                         <li><Link to="education" spy={true} smooth={true}>Education</Link></li>
//                         {/* <li>Skills</li> */}
//                         <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
//                         <li><Link to="pricecard" spy={true} smooth={true}>Mentorship</Link></li>
//                         {/* <li>Home</li>
//                         <li>Services</li>
//                         <li>Education</li>
//                         <li>Projects</li>
//                         <li>Mentorship</li> */}
//                     </ul>
//                 </div>
//                         <Link to="contact" spy={true} smooth={true}>
//                         <button className="button n-button">Contact me</button>
//                         </Link>
//             </div>
//         </div>

//     )
// }

// export default Navbar




import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import './Navbar.css'
import logo from "../../img/logo.png";

const Navbar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link
                to="intro"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="Education"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="Pricecard"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Mentorship
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true} offset={-111}>
          <button className="button n-button" onClick={handleScrollToTop}>
            Contact me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

