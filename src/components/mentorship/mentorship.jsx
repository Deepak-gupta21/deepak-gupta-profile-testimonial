import React from 'react'
import './mentorship.css'

import mentor from '../../img/mentorship.svg';

const Mentorship = () => {
  return (
    <div className='mentor-ship'>

        <div className="m-name">
            <span>I haven't met you, and this is crazy...</span>
            <span>But if you need a help, then email me maybe.</span>
            <span>So whether you're new to the field or simply looking for some guidance or support, I can help.</span>
            <img src={mentor} alt="" />
        </div>

        <div className="mentor-benefits">
            <span>Benefits of Mentorship</span>
            <span>I've walked more than a few miles in those shoes.</span>
            <span>I'm committed to helping you make use of that knowledge.</span>
            <div className="price-card">

            </div>
        </div>

        <div className="mentor-style">
            <span> My Mentoring Style</span>
            <span>I strive to function as a catalyst and challenge you to grow as both a designer and a human.</span> 
            <span>I care about the details and will encourage you to think, plan, and dream.</span>
            <span>These are the qualities I will bring to every conversation.</span>
            <div className="style-card">
                
            </div>
        </div>

        <div className="book-consultant">
            <span> Book a consult</span>
            <span>Thinking about mentorship? Let's talk about it. The first call is on me.</span>
            <button className=" button c-m-button">Start a conversation</button>
        </div>

        <div className="collab">
            <span>Interested in collaborating with me?</span>
            {/* <span>I'm always open to discussing product design, work or partnership opportunities. </span> */}
            <span>Interested in working together? We should queue up a time to chat. </span>
            <span>I'll buy the coffee.</span>

            <button className=" button c-m-button ">Let's do this</button>
        </div>
    </div>
  )
}

export default Mentorship

