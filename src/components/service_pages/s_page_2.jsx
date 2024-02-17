import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Service_2 = () => {
  return (
    <Wrapper>
      <div className="skill_1">

         <div className="circle circle_1"></div>
         <div className="circle circle_2"></div>


         <div className="contain">
             <div className="skill_head">
               <h2>My <span> Skills </span> </h2>
               <p>Here is My skills to represent my Expertise on Data Analytics</p>
             </div>
             <div className="skill_main">

               <div className="skill_bar">
                <div className="info">
                  <p>Ms excel</p>
                  <p>60%</p>
                </div>
                <div className="bar">
                  <span className="ms"></span>
                </div>
               </div>


               <div className="skill_bar">
                <div className="info">
                  <p>My Sql</p>
                  <p>50%</p>
                </div>
                <div className="bar">
                  <span className="sql"></span>
                </div>
               </div>


               <div className="skill_bar">
                <div className="info">
                  <p>Python</p>
                  <p>60%</p>
                </div>
                <div className="bar">
                  <span className="p"></span>
                </div>
               </div>


               <div className="skill_bar">
                <div className="info">
                  <p>Data visulization / Tablue</p>
                  <p>75%</p>
                </div>
                <div className="bar">
                  <span className="dv"></span>
                </div>
               </div>


               <div className="skill_bar">
                <div className="info">
                  <p>Data cleaning</p>
                  <p>75%</p>
                </div>
                <div className="bar">
                  <span className="dc"></span>
                </div>
               </div>


               <div className="skill_bar">
                <div className="info">
                  <p>Critical thinking</p>
                  <p>90%</p>
                </div>
                <div className="bar">
                  <span className="ct"></span>
                </div>
               </div>


               <div className="skill_bar">
                <div className="info">
                  <p>Communication</p>
                  <p>95%</p>
                </div>
                <div className="bar">
                  <span className="com"></span>
                </div>
               </div>

               <div className="skill_bar">
                <div className="info">
                  <p>Machine learning</p>
                  <p>30%</p>
                </div>
                <div className="bar">
                  <span className="ml"></span>
                </div>
               </div>

             </div>
         </div>
      </div>



      <NavLink to="/">
        <button className="btnn"> Go Back</button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--lg);
  
 *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  // font-family: poppins;
 }


  .skill1{
    width: 100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
  }

  .contain{
    width: 1000px;
    height: auto;
    padding: 60px;
    border-radius: 14px;
    box-shadow: 2px 14px 45px rgba(0,0,0,0.082);
    // box-shadow: var(--boxShadow );
    backdrop-filter: blur(60px);
  }

 .circle{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    filter: blur(9px);
 }

 .circle_1{
  top: 20%;
  right: 15%;
       //background: linear-gradient(to right,#de74bb 60%,#2f8e9b -5000000%);
    background: linear-gradient(to right,#de74bb 80%,#2f8e9b -5000000%);
  // z-index: -1;
 }

 .circle_2{
  bottom: 29%;
  left: 15%;
  background: linear-gradient(to right,#2f8e2b 30%,#d6dc31 -2000%);
  // z-index: -1;
 }

.contain .skill_head{
 width: 100%;
 margin-botton: 80px;
 text-align: center;
}
.skill_head h2{
 font-size: 27px;
 font-weight: 800;
 font-family: Sans-serif;
}

.skill_head h2 span{
  color: var(--orange);
  font-size: 27px;
  font-weight: 800;
  font-family: Sans-serif;
 }

 .skill_head p{
  font-family: Sans-serif;
  font-size: 17px;
  font-weight: 700;
 }

 .skill_main{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-row-gap: 38px;
  grid-column-gap: 60px;
  padding-top: 60px;
 }

 .skill_bar .info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
 }

 .skill_bar .info p{
  font-size: 18px;
  font-weight: 500;
  font-family: Sans-serif;
  // opacity: .8;
 }

 .skill_bar .bar {
  height: 14px;
  width: 100%;
  background-color: rgba(0,0,0,0.17);
  border-radius: 25px;
  margin-top: 8px;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.11);
  position: relative;
 }

 .skill_bar .bar span{
  height: 100%;
  width: 50%;
  position: absolute;
  border-radius: 25px;
  // background: linear-gradient(to right,#ffff00 0%,#ff6600 100%);
  background: var(--orangemulti);
 }

.skill_bar .bar .ms{
  width: 60%;
  animation: ms 9s;
}
@keyframes ms{
  0%{
    width: 0%;
  }
  100%{
    width: 60%;
  }
}

.skill_bar .bar .sql{
  width: 50%;
  animation: sql 9s;
}
@keyframes sql{
  0%{
    width: 0%;
  }
  100%{
    width: 50%;
  }
}


.skill_bar .bar .p{
  width: 60%;
  animation: p 9s;
}
@keyframes p{
  0%{
    width: 0%;
  }
  100%{
    width: 60%;
  }
}


.skill_bar .bar .dv{
  width: 75%;
  animation: dv 9s;
}
@keyframes dv{
  0%{
    width: 0%;
  }
  100%{
    width: 75%;
  }
}



.skill_bar .bar .ct{
  width: 90%;
  animation: ct 9s;
}
@keyframes ct{
  0%{
    width: 0%;
  }
  100%{
    width: 90%;
  }
}



.skill_bar .bar .com{
  width: 95%;
  animation: sql 9s;
}
@keyframes com{
  0%{
    width: 0%;
  }
  100%{
    width: 95%;
  }
}



.skill_bar .bar .ml{
  width: 30%;
  animation: ml 9s;
}
@keyframes ml{
  0%{
    width: 0%;
  }
  100%{
    width: 30%;
  }
}



.skill_bar .bar .dc{
  width: 75%;
  animation: bs 9s;
}
@keyframes bs{
  0%{
    width: 0%;
  }
  100%{
    width: 75%;
  }
}



 









  .btnn {
    border-radius: 34px;
    border: none;
    color: white;
    font-size: 16px;
    padding: 10px 26px 10px 26px;
    background: var(--orangemulti);
    box-shadow: 0px 20px 24px 3px rgba(251,161,40,0.42);
    margin-top: 20px;
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









   @media screen and (max-width: 478px) {
    .contain {
      width: 100%;
      height: 88vh;
      overflow-y: auto;
      padding: 20px;
      position: relative;
    }

    .skill_main {
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
      gap: 11px 0px;
      grid-column-gap: 0;
      padding-top: 27px;
    }



    .skill_bar .info p {
      margin-top: 10px;
      font-size: 12px;
    }

    .skill_bar .bar {
      margin-top: 10px;
    }

    .btnn {
      margin-top: 10px;
    }

    .p{
      font-size: 11em;
    }
  }

  
`;

export default Service_2;
