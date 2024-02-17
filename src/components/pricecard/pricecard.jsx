import React from 'react'
import './pricecard.css'
import {Link} from "react-router-dom";
// import { faUserLarge } from '@fortawesome/free-solid-svg-icons'

const Pricecard
 = () => {
  return (
    <div className='price-card'>

        <div className="price-name">
           <h2> Mentorship </h2>
           <span>Plans</span>
        </div>


          <div className="price-row">
           {/* card 1 */}
        <div className="col-1-of-3">
             <div className="p-card">
                <div className="p-card__side      p-card__side--front-1">

                    <div className="p-card__title        p-card__title--1">
                        <i className="fas    fa-paper-plane"></i>
                        <h4 className="p-card__heading">Spot Mentoring</h4>
                    </div>

                    <div className="p-card__details">
                      <ul>
                      <li>Good for:</li>
                      <li>All designers</li>
                      <li>Advise support</li>
                      <li>Carrer advise</li>
                      <li>tools selection</li>
                      <li>15 min of candid conversation</li>
                      </ul>
                    </div>

                </div>


                <div className="p-card__side      p-card__side--back      p-card__side--back-1">

                    <div className="p-card__cta">
                         <div className="price-box">
                             <p className="price-only">Only</p>
                             <p className="p-card__price-value">49 rs</p>
                         </div>
                         <a href='https://topmate.io/deepak_gupta21/189035' target="_blank">
                         <button className="button btn--white">Select</button>
                         </a>
                        </div>
                </div>

            </div>
        </div>

           {/* card 2 */}

      <div className="col-1-of-3">
        <div className="p-card">
          <div className="p-card__side     p-card__side--front-2">
            <div className="p-card__title        p-card__title--2">
              <i className="fas fa-plane"></i>
              <h4 className="p-card__heading">Project Support</h4>
            </div>

            <div className="p-card__details">
              <ul>
                <li>Great for:</li>
                <li>Experienced designers</li>
                <li>design critique</li>
                <li>hours of targeted feedback </li>
                <li>help you focus on delivering your best work</li>
              </ul>
            </div>
          </div>
          <div className="p-card__side      p-card__side--back    p-card__side--back-2">
            <div className="p-card__cta">
              <div className="price-box">
                <p className="price-only">Only</p>
                <p className="p-card__price-value">99 rs</p>
              </div>
                         <a href='https://topmate.io/deepak_gupta21/190777' target="_blank">
                         <button className="button btn--white">Select</button>
                         </a>
            </div>
          </div>
        </div>
      </div>


           {/* card 3 */}

      <div className="col-1-of-3">
        <div className="p-card">
          <div className="p-card__side         p-card__side--front-3">
            <div className="p-card__title   p-card__title--3">
              <i className="fas fa-rocket"></i>
              <h4 className="p-card__heading">Tailored Learning</h4>
            </div>

            <div className="p-card__details">
              <ul>
                <li>Best for:</li>
                <li>New Developers</li>
                <li>collaboration with ambition</li>
                <li>long term assistance</li>
                <li>hours of professional coaching</li>
              </ul>
            </div>
          </div>
          <div className="p-card__side   p-card__side--back   p-card__side--back-3">
            <div className="p-card__cta">
              <div className="price-box">
                <p className="price-only">Only</p>
                <p className="p-card__price-value">199 rs</p>
              </div>
                         <a href='https://topmate.io/deepak_gupta21/189037' target="_blank">
                         <button className="button btn--white">Select</button>
                         </a>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* get started button */}

        <div className="u-center-text u-margin-top-huge">
        
           <a href='https://topmate.io/deepak_gupta21' target="_blank">
            {/* btn--green  */}
            <button className=' button btn--green' style={{textDecoration: 'none',  }} >Get Started</button> 
            {/* color: 'white' put in style */}
           </a>
            {/* color: 'white' */}
            {/* <button className=" button btn btn--green">Get Started</button> */}
        </div>
                   




{/* user contact div */}


        <div className="user-intro">
            <span>If you're wanting to level up, mentorship helps.</span>
            <span>Schedule a consultation to ask questions, discuss details, and decide if it's a fit.</span>
            <a href='https://topmate.io/deepak_gupta21/189032/pay' target="_blank">
            <button className=" button m-button u-m-button">Introduce yourself</button>
            </a>
        </div>
        
    </div>
  )
}

export default Pricecard
