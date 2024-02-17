import React from 'react'
import './education.css'
import { motion, useScroll } from "framer-motion";

const Education=() => {
  const { scrollXProgress } = useScroll();
  const transition={duration:1,type:'spring'};
  return (      
        <div className="time-line">

          <div className="e-name"> 
            <span>My Education</span>
            <span>Details </span>
            <span>School / College  </span>
          </div>

          <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      }}
      style={{ position: "relative" }}
    >

          <div className="container left-c">
            <img src="" alt="" />
           <div className="text-box">
            <h2>Saint Thomas school</h2>
            <h3>2000 - 2015</h3>
            <h3>(ICSE Board)</h3>
            <h3>Location: Khalilabad (uttar pradesh) India </h3>
            <span className="left-c-arrow"></span>
           </div>
          </div>

        </motion.div>



        <motion.div 
         initial={{left:'25rem'}}
         whileInView={{left:'17rem'}}
         transition={transition}
         style={{top:'12rem',left:'-4rem'}}>

          <div className="container right-c">
            <img src="" alt="" />
           <div className="text-box">
            <h2>Saint Thomas Inter College</h2>
            <h3>2015 - 2017</h3>
            <h3>(ISC Board)</h3>
            <h3>Location: Khalilabad (uttar pradesh) India </h3>
            <span className="right-c-arrow"></span>
           </div>
          </div>

          </motion.div>



          <motion.div 
         initial={{left:'25rem'}}
         whileInView={{left:'17rem'}}
         transition={transition}
         style={{top:'12rem',left:'-4rem'}}>

          <div className="container left-c">
            <img src="" alt="" />
           <div className="text-box">
            <h2>Mit - World Peace University</h2>
            <h3>2018 - 2022</h3>
            <h3>(Engineering)</h3>
            <h3>Location: Pune (maharastra) India</h3>
            <span className="left-c-arrow"></span>
           </div>
          </div>

          </motion.div>

          <motion.div 
         initial={{left:'25rem'}}
         whileInView={{left:'17rem'}}
         transition={transition}
         style={{top:'12rem',left:'-4rem'}}>

          <div className="container right-c">
            <img src="" alt="" />
           <div className="text-box">
            <h2>Newton school</h2>
            <h3>2022 - 2023</h3>
            <h3>(Intersnship/Experience)</h3>
            <h3>Location: Banglore (Tamil nadu) India</h3>
            <span className="right-c-arrow"></span>
           </div>
          </div>

          </motion.div>

          {/* Blur Divs */}
          <div className="p-blur" style={{background:'#C5F5FF',top:'11rem',left:'11rem',width:'21rem',height:'11rem',left:'2rem'}}></div>
          <div className="p-blur" style={{background:'var(--purple)',top:'29rem',left:'51rem',width:'21rem',height:'21rem',left:'21rem'}}></div>
          <div className="blur s-blur1" style={{background:"#ABF11174",left:'41rem',top:'15rem'}}></div>

         </div>
  )
}

export default Education