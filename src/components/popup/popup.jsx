import React ,{useState} from 'react'
import './popup.css'
import glasses from '../../img/glasses.png';

const Popup = () => {
//   const [pop,setpop] =useState(false);

//   const togglePop=()=>{
//    setpop(!pop)
//   }

  const popup=document.getElementById("popup");
  function closePopup(){
    popup.classList.add("closePopup");
  }

  return (
    <div className='popup' id='popup'>
      <img src={glasses} alt="" />
      <h2>Thank you!</h2>
      <p>Your details has been successfully submitted.</p>
      <button className='button' onclick={closePopup} type="button">Ok</button>
    </div>
  )

}

export default Popup
