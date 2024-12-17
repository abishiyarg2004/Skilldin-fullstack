import React, { useState } from "react";
import "./HomePage.css";
import LoginSignupModal from "./LoginSignupModel";

import back from './aset/back.png'; // Image for the background

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto"; 
  };

  return (
    <div className="homepage-container">
      {/* Background Image */}
      <img src={back} alt="Background" className="background-image" />

      {/* Overlay Content */}
      <div className="overlay">
        <h1 className="title">Welcome to SkilldIn</h1>
        <p className="description">
          Showcase your talents. Get hired. Connect with recruiters looking for your creative skills.
        </p>
        
        {/* Buttons */}
        <div className="button-container">
          <button className="btn login-btn" onClick={openModal}>Login</button>
          <button className="btn signup-btn" onClick={openModal}>Sign Up</button>
        </div>
      </div>

      {/* Login/Signup Modal */}
      {showModal && <LoginSignupModal closeModal={closeModal} />}
    </div>
  );
};

export default HomePage;
