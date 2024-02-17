

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Error_2 from '../../img/error_1.gif'

const Get_started = () => {
  return (
    <Wrapper>
      <img src={Error_2} alt="" />
      <NavLink to="/">
        <button className="btnn"> Go Back</button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btnn {
    border-radius: 34px;
    border: none;
    color: white;
    font-size: 16px;
    padding: 10px 26px 10px 26px;
    background: var(--multi);
    box-shadow: 0px 20px 24px 3px rgba(251,161,40,0.42);
  }

  .btnn::after{
    transition: transform .4s;
  }

  .btnn:hover{
    background: white;
    cursor: pointer;
    transform: scale(1.2) ;
    transition: transform .4s;
    color: var(--orange);
    border: 1px solid var(--orange) ;
   }

   `;

export default Get_started;