import React from 'react'
import './intro.css'
import{motion} from 'framer-motion';
import Colors from '../../img/colors.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glasses from '../../img/glasses.png';
import FloatingDiv from '../floatingDiv/FloatingDiv';
import hello from '../../img/hi.gif';
import hi from '../../img/hello.gif';
import ohhi from '../../img/ohhi.gif';
import flyingstars from '../../img/flyingstars.gif';
import heartanimate from '../../img/animateheart.gif';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
const Intro = () => {
  const transition ={duration :2, type: 'spring'}
  return (
   <div className="intro">

    <div className="i-left">
        <div className="i-name">
            <span>Hi!  I Am </span>
            <span>Deepak Gupta </span>
            <span><b>Commited learner</b> with exceptional research and coding skills.
              Awarded multiple horners based on <b>merits and creativity</b>. 
              Tutored freshmen with exceptional <b>analytical and creative</b> approach in every aspect.
              Deligent school graduate with <b>92% marks</b> and 100% attadance record.
              Served a term as Student <b> president </b>with total support from council members and students.
              Have participated in various <b>social activities</b> and won prizes.
            </span>
        </div>
        <Link to="contact" spy={true} smooth={true} offset={-101}>
        <button className=" button i-button">Messege me</button>
        </Link>
        {/* <button className=" button i-button">Messege me</button> */}
    </div>

    <div className="i-right">
    {/* <img src={Vector1} alt="" />
    <img src={Vector2} alt="" /> */}
    
    <img src={boy} alt="" />
    <img src={Colors} alt="" />
    {/* <img src={flyingstars} alt="" /> */}
    {/* <img src={heartanimate} alt="" /> */}
    {/* <img src={hi} alt="" /> */}
    <img src={ohhi} alt="" />
    {/* <img src={ohhi} alt="" /> */}


    <motion.div
    initial={{top:'-4%' , left: '74%'}}
    whileInView={{left:'66%'}}
    transition={transition}
    className='floating-div'
    style={{top:'-4%',left:'68%'}}>
      <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
    </motion.div>

    <motion.div
    initial={{left:'9rem' , top: '18rem'}}
    whileInView={{left:'3rem'}}
    transition={transition}
    className='floating-div'
    style={{top:'18.6rem',left:'0.5rem'}}>
      <FloatingDiv image={thumbup} txt1='Creative' txt2='Mind'/>
    </motion.div>
    
    <motion.div 
    initial={{left: '-40%'}}
    whileInView={{left:'-15%'}}
    transition={transition}
    className='floating-div'
    style={{top:'1rem',left:'-5rem',width:'205px'}}>
      <FloatingDiv image={glasses} txt1='Data' txt2='Analyst'/>
    </motion.div>


    {/* blur divs */}
     <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
     <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
    </div>

   </div>
  )
}

export default Intro
