import React from 'react'
import './projectcard.css'

const Projectcard = ({pic,heading,intro,detail,code,site}) => {
  return (
    <div>
      {/* <article></article> */}
      <div class="card">
       <div class="temporary_pic">
           <img src={pic} alt="" />
       </div>
       <div class="card_content">
           <span className="card_title">{heading}</span>
           <span className="card_subtitle">{intro}</span>
           <p className="card_description">{detail}</p>
           <div className='project-but-div'>
             <a href={site} target="_blank" > 
               <button className='project-button' >Preview</button>
             </a>
             <a href={code} target="_blank" > 
               <button className='project-button'>Details</button>
             </a>
           </div>
       </div>
  </div>
    </div>
  )
}

export default Projectcard