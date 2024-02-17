import React from "react";
import './footer.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

const Footer=()=>{
    return (

		<footer>
    <div className="footer-text">
    <p class="name">My Social Pages.</p>
    <p class="connect">To connect with me - please click on the link below to subscribe to my social accounts:</p>
    </div>
		
		<div className="social">
          <a href='https://github.com/Deepak-gupta21'> 
            <img src={Github} alt="" />
          </a>
         <a href='https://www.linkedin.com/in/deepak-gupta-9503a01aa/'>
          <img src={LinkedIn} alt="" />
         </a>
         <a href='https://www.instagram.com/bhakalu/'>
          <img src={Instagram} alt="" />
          </a>
    </div>
		
		<p class="end">CopyRight By Deepak Gupta</p>
	</footer>

    )
}

export default Footer