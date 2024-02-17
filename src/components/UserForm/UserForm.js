import React, { useState } from "react";
import axios from "axios";
import "./UserForm.css";

// http://localhost:5000
function Form() {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [designation, setDesignation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for tracking submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://deepakportfolioreviews-backend.onrender.com/api/addReview", {
        name,
        experience,
        designation,
      });
      setIsSubmitted(true); // Set submission state to true
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Error submitting review:", error);
    }
    
  };



  return (
    <div className="toCenter">
      <h1>Have you ever connected with me,Write your review here!</h1>
      {/* to open the form modal */}
      {!isModalOpen && (
        <button className=" button n-b" onClick={() => setIsModalOpen(true)}>
          Add Review
        </button>
      )}
      {isSubmitted ? (
          <p className="review_Submitted">Review submitted successfully!</p>
        ) : ( "" )}
      {/* modal is coded here */}
       <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
       <div className="form-contain">
        {isSubmitted ? (
          <p className="review_Submitted">Review submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
          <div className="input-grp">
            <label htmlFor="name">Your Name:</label>
            <input
              placeholder="Your Name"
              className="user"
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={(e) =>{console.log(e.target.value);setName(e.target.value)}}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="designation">Your Designation:</label>
            <input
              className="user"
              placeholder="Enter designation"
              type="text"
              id="designation"
              value={designation}
              name="designation"
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="experience">Your Work Experience with Me:</label>
            <textarea
              placeholder="Tho kaisa laga interaction?"
              className="user"
              id="experience"
              value={experience}
              name="experience"
              onChange={(e) => setExperience(e.target.value)}
              required
              maxLength={250} // Maximum word count
            />
             <p>{experience.length}/250 words</p> {/* Display word count */}
          </div>
          <div className="button-group">
            <button className="button n-b" type="submit">
              Submit
            </button>
          </div>
        </form>
        )}
        </div>
      </Modal>
    </div>
  );
}

export default Form;

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="button n-button" onClick={closeModal}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};