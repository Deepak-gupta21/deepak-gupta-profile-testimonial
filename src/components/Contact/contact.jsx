import React, { useRef ,useState} from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import {Link} from "react-router-dom" ;



const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_xdwku9q",  "template_zjv6dhv",  form.current,  "FQ8toIctL3pLmlfRB")
    .then( (result) => {   console.log(result.text);  setDone(true);  form.current.reset();}, (error) => {   console.log(error.text) });
    
    };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from intro section */}
      <div className="contact-left">
        <div className="con">
          {/* darkMode */}
          <span style={{color:'black'}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="contact-right">

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" required />
          <input type="email" name="user_email" className="user" placeholder="Email" required  />
          <textarea name="message" className="user" placeholder="Message" required />
          <input type="submit" className="button form-btn" value="Send"/>
          {/* <Link to="/Popup"> <input type="submit" value="Send" className="button form-btn"></input> </Link> */}
          <span className="s1">{done && "Thank you! "}</span>
          <span className="s2">{done && "Message succesfully submited"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}> </div>
        </form>

      </div>

    </div>

  );
};

export default Contact;
