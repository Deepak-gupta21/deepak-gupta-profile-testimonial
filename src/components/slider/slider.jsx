import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './slider.css'
import "swiper/css";
import "swiper/css/effect-cards";
import Projectcard from "../projectcard/projectcard";
import ProjectPic1 from '../../img/project1.jpg';
import ProjectPic2 from '../../img/project2.jpg';
import ProjectPic3 from '../../img/project3.jpg';
import ProjectPic4 from '../../img/project4.jpg';
import ProjectPic5 from '../../img/project5.jpg';
import ProjectPic6 from '../../img/project6.jpg';
import ProjectPic7 from '../../img/project7.jpg';
import ProjectPic8 from '../../img/project8.png';
import ProjectPic9 from '../../img/project9.png';
import ProjectPic10 from '../../img/project10.png';
import ProjectPic11 from '../../img/project11.png';
import ProjectPic12 from '../../img/project12.png';
import ProjectPic13 from '../../img/project13.png';
import ProjectPic14 from '../../img/project14.png';
import ProjectPic15 from '../../img/project15.png';
import ProjectPic16 from '../../img/project16.png';
import ProjectPic17 from '../../img/project17.png';
import ProjectPic18 from '../../img/project18.png';
// import required modules
import { EffectCards } from "swiper";


const Slider = () => {
  return (

    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
       

        <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/Tic_Tac_Toe_Game'}
          site={'https://deepak-gupta21.github.io/Tic_Tac_Toe_Game/'}
           pic={ProjectPic2}
           heading={'Cross-Zero Game'}
           intro={'Html / Css / Java-script'}
           detail={'Game made with Html , css and Java-script.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/portfolio-sample-'}
          site={'https://deepak-gupta21.github.io/portfolio-sample-/'}
           pic={ProjectPic1}
           heading={'Sample portfolio'}
           intro={'Html / Css'}
           detail={' Simple portfolio made with Html and css.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <Projectcard
           code={'https://github.com/Deepak-gupta21/Snake_ball_game'}
           site={'https://deepak-gupta21.github.io/Snake_ball_game/'}
            pic={ProjectPic3}
            heading={'Snake ball game'}
            intro={'Html / Css / Jva-script'}
            detail={' Game made with Html / css and java-script.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <Projectcard
           code={'https://github.com/Deepak-gupta21/Rock_paper_scissor'}
           site={'https://deepak-gupta21.github.io/Rock_paper_scissor/'}
            pic={ProjectPic4}
            heading={'Rock-paper-scissor Game'}
            intro={'Html / Css / Java-script'}
            detail={'Game made with Html , css and Java-script.'}/>
        </SwiperSlide>

        <SwiperSlide>
         <Projectcard
           code={'https://github.com/Deepak-gupta21/Online_university'}
           site={'https://deepak-gupta21.github.io/Online_university/'}
            pic={ProjectPic5}
            heading={'University website'}
            intro={'Html / Css'}
            detail={'University website made with Html and css.'}/>
        </SwiperSlide>


        <SwiperSlide>
          <Projectcard
           code={'https://github.com/Deepak-gupta21/Student-management-app'}
           site={'https://deepak-gupta.onrender.com/'}
           pic={ProjectPic6}
           heading={'Student Record Management'}
           intro={'Javascript / Noje js /  Express js / Mongo Db / Mongoose / Ejs template / Nodemon '}
           detail={'A simple Full Stack Project.'}/>
        </SwiperSlide>


        <SwiperSlide>
          <Projectcard
           code={'https://github.com/Deepak-gupta21/Modals-Example'}
           site={'https://deepak-gupta21.github.io/Modals-Example/'}
           pic={ProjectPic7}
           heading={'Sticky Notes (with Modal)'}
           intro={' Html /  Css / Javascript'}
           detail={'Making a modal in project-(Sticky Notes).'}/>
        </SwiperSlide>


        <SwiperSlide>
          <Projectcard
          code={'https://deepak-gupta21.github.io/Random-Quote-Generator/'}
          site={'https://github.com/Deepak-gupta21/Random-Quote-Generator'}
           pic={ProjectPic8}
           heading={' Random Quote Generator '}
           intro={' Html /  Css / Javascript '}
           detail={'Random Quote Generator with Api. Also using A Tweet Web Intent.'}/>
        </SwiperSlide>


        <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/ISRO-centres---JavaScript-Project---uyb8g6j7sy7f'}
          site={'https://deepak-gupta21.github.io/ISRO-centres---JavaScript-Project---uyb8g6j7sy7f/'}
           pic={ProjectPic9}
           heading={' ISRO Centers '}
           intro={' Html /  Css / Javascript '}
           detail={'A platform to search the centres of ISRO in a city or state.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/Ramayan-Dialouge-Generator'}
          site={'https://deepak-gupta21.github.io/Ramayan-Dialouge-Generator/'}
           pic={ProjectPic10}
           heading={' Ramayan character\'s Dialogue'}
           intro={' Html /  Css / Javascript / Json '}
           detail={'Building a random dialogue generator , All new Ramayan\'s character Dialogue API (self generated).'}/>
        </SwiperSlide>
        
        <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/Javascript-Q1'}
          site={'https://deepak-gupta21.github.io/Javascript-Q1/'}
           pic={ProjectPic11}
           heading={' Sorting Data in table'}
           intro={' Html /  Css / Javascript / Json '}
           detail={'Displaying the points of IPL Season 2022,from an API endpoint:'}/>
        </SwiperSlide>

        <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/Mahabharat-Dialouge-Generator'}
          site={'https://deepak-gupta21.github.io/Mahabharat-Dialouge-Generator/'}
          pic={ProjectPic12}
          heading={' Mahabharat character\'s Dialogue'}
          intro={' Html /  Css / Javascript / Json '}
          detail={'Building a random dialogue generator,All new Mahabharat\'s character Dialogue API (self generated).'}/>
       </SwiperSlide>

       <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/React-random-quote-generator'}
          site={'https://deepak-gupta21.github.io/React-random-quote-generator/'}
          pic={ProjectPic13}
          heading={'Building a random quotes generator'}
          intro={' React / Github pages'}
          detail={'Building a random quotes generator,and deploying on github pages'}/>
       </SwiperSlide>
     
       <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/crush_the_candy_game'}
          site={'https://crush-the-candy.netlify.app/'}
          pic={ProjectPic14}
          heading={'This is a simple Candy Crush game implemented using React'}
          intro={' React / Github pages'}
          detail={'The objective of the game is to match candies in rows or columns to earn points.'}/>
       </SwiperSlide>

       <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/Myntra-Shirt-Page'}
          site={'https://myntra-shirt-page.netlify.app/'}
          pic={ProjectPic15}
          heading={'This is a  clone of the Myntra shirtpage'}
          intro={' React / Github pages'}
          detail={'The clone will replicate the key features and functionalities of the original shirtpage.'}/>
       </SwiperSlide>

       <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/Redux_Project_Todo_app'}
          site={'https://redux-toapp.netlify.app/'}
          pic={ProjectPic16}
          heading={'Todo app -using redux '}
          intro={' React / Redux'}
          detail={'This is a Todo redux application'}/>
       </SwiperSlide>

        <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/family-contact-management-backend'}
          site={'https://contact-management-kprb.onrender.com'}
          pic={ProjectPic17}
          heading={'Mern project '}
          intro={'MERN'}
          detail={'Contact management system'}/>
       </SwiperSlide>

         <SwiperSlide>
          <Projectcard
          code={'https://github.com/Deepak-gupta21/learning-node-codes-basics'}
          site={'https://login-logout-node-project.onrender.com/login'}
          pic={ProjectPic18}
          heading={'login-logout-page'}
          intro={'Node js'}
          detail={'login-logout-node-project'}/>
       </SwiperSlide>

      </Swiper>
    </>
  );
}

          


export default Slider;
