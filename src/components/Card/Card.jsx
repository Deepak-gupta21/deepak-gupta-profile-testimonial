import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";
import { text } from '@fortawesome/fontawesome-svg-core';

const Card = ({emoji,heading,detail,redirect}) => {
  return (
    <div className="s-card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'><Link to={redirect} className='c-button' >Learn more</Link></button>
    </div>
  )
}

export default Card

// target="_blank"
