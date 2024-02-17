import './home.css'
import React, { useState,useEffect } from "react";
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Intro from "../intro/Intro";
import Services from "../services/Services";
import Education from "../education/education";
import Footer from "../Footer/footer"
import Projects from "../projects/projects";
import Bubbles from "../Bubbles/bubbles";
// import Mentorship from "../mentorship/mentorship";
import Pricecard from '../pricecard/pricecard';
// import Pricecard1 from './components/pricecard1/pricecard1';
import Contact from '../Contact/contact';
import Hamburger from '../Hamburger/hamburger';
import Wave from '../wave/wave';
import Curseranimation from '../curseranimation/curseranimation';
import Form from '../UserForm/UserForm'; // Import your UserForm component
import TestiMonials from '../TestiMonials/TestiMonials';


function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkDevice() {
      if (window.innerWidth < 780) {
        setIsMobile(true);
      }
    }
  
    checkDevice(); // Call the function once to set the initial value
  
  }, []);

  return (
    //  <Router>
    <div className="App">
      {isMobile ? <Hamburger/> : <Navbar/>}
     {/* <Navbar/> */}
     <Intro/>
     <Services/>
     <Education/>
     <Projects/>
     <Pricecard/>
         {/* <Pricecard1/> */}
         {/* <Mentorship/> */}
     <Contact/>
     {Form()}
     <TestiMonials />
     <Footer/>
     <Bubbles/> 
     <Wave/>
     {/* <Curseranimation/> */}
    
     
      {/* <Routes>
          <Route exact path="/" element={ <Intro/>}>
    
          </Route>
          <Route path="/services" element={<Services/>}>
          
          </Route>
          <Route path="/education" element={<Education/>}>
          
          </Route>
          <Route exact path="/projects" element={<Projects/>}>
          
          </Route>
          <Route exact path="/mentorship" element={<Pricecard/>}>
          
          </Route>
          <Route exact path="/contact" element={<Contact/>}>
          
          </Route>
        </Routes>
       
        <Footer/> */}
    </div>

    
    // </Router>
  );
}

export default Home;
