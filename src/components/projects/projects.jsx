import React from "react";
import "./projects.css";
import Slider from "../slider/slider";
import post from '../../img/post.gif';
import post1 from '../../img/post1.gif';

const Projects = () => {
  return (
    <div className="projects">
      <div className="p-top">
        <div className="p-name">
          <span>My Exceptional</span>
          <span>Projects</span>
           <span>Work projects / Academic projects / Personal projects</span> 
           <span style={{padding: "10px"}}>Completed numerous web development projects, ranging from
           simple brochure websites to complex e-commerce platforms.</span>   
          {/* <span style={{padding: "10px"}}>Click on preview to know more / Learn to view code</span> */}
        </div>
      </div>

      <div className="p-bottom">
        {/* <img className="starsimg" src={post} alt="" /> */}
        <img className="starsimg" src={post1} alt="" />
        <Slider />
        {/* blur divs */}
        <div
          className="p-blur"
          style={{ background: "#d9c7f2", top: "12rem", left: "-18rem" }}
        ></div>
        <div
          className="p-blur"
          style={{ background: "rgb(238 110 255)", top: "13rem" }}
        ></div>
        <div
          className="p-blur"
          style={{
            background: "#A1F1FF",
            top: "-6rem",
            left: "-18rem",
            width: "21rem",
            height: "11rem",
            left: "2rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Projects;
