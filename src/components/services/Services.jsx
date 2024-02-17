import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume  from './resumeNew.pdf';
// import Resume  from './Resume.pdf';
import Mock  from './inzpira.pdf';
import {motion} from 'framer-motion';

const Services = () => {
  const transition={duration:1,type:'spring'};
  return (
    <div className="services">
      {/* left */}
      <div className="awesome">
        <span>My Awesome </span>
        <span>Services </span>
        <span>
  {/* <h2>Our Services</h2> */}
  {/* <ul>
    <li><b>Web Development Services:</b><br></br>offering custom web development wesite, <br></br>responsive web design,<br></br> and website maintenance and support.</li>
    <li><b>Data Analysis Services:</b><br></br>offering data mining, data visualization, <br></br>statistical analysis,forecasting, <br></br>and dashboard development.</li>
    <li><b>Design Services:</b><br></br>offer logo and branding design, website design, <br></br>UX/UI design, print design/packaging design.</li>
    <li><b>  Creative and Research Services:</b><br></br>offering you ideation, prototyping, user research,<br></br> product development, and innovation strategy services.</li>
  </ul> */}
  <p>I pride myself on my ability to work closely with my clients to understand their unique needs and deliver solutions that exceed their expectations. Whether you need a custom website, data analysis, design services, or creative and research solutions, here to help you achieve your goals.</p>
      </span>
        <a href={Resume} download>
          <button className="s-button">Download CV</button>
        </a>

        <a href={Mock} download>
          <button className="s-button">Evaluation</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF11194" }}></div>
      </div>

      {/* right */}
      <div className="cards">
        {/* first card */}

        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "17rem" }}
          transition={transition}
          style={{ left: "12rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Data Analysis"}
            detail={"MS-Excel , MY-Sql , Tablue , Python "}
            redirect={"/Service_2"}
          />
        </motion.div>

        {/* second card */}

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Web Developer"}
            detail={"Html , Css , Javascript , React , node "}
            redirect={"/Service_1"}
          />
        </motion.div>

        {/* third card */}

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "18rem", top: "18rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Designer"}
            detail={"Sketch up , Adobe , Illustrater , Figma "}
            redirect={"/Service_3"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
        <div
          className="blur s-blur3"
          style={{ background: "var(--lightblue" }}
        ></div>
      </div>
    </div>
  );
}

export default Services
