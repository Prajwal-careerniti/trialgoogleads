import "./index.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import aptitudeTest from "../../assets/aptitudeTest.png";
import careerGuidence from "../../assets/careerGuidence.png";
import careerCounciling from "../../assets/careerCounciling.png";

function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [msg, setMsg] = useState("");
  const [blink, setBlink] = useState(false);
  const [showMessageButton, setShowMessageButton] = useState(false);
  const navigate = useNavigate();

  const careerfun = (field) => {
    setMsg("Book Your Appointment to know more about " + field);
    // Set blink to true to trigger the blink effect
    setBlink(true);
    // Reset blink to false after 1 second to stop the blink effect
    setTimeout(() => {
      setBlink(false);
    }, 1000);
    setShowMessageButton(true);
  };

  return (
    <>
      <div className="career poppins-regular">
        <div className="career-div">
          <p className="career-title">Career</p>
        </div>
        <div className="card-container mb-5">
          <div className="card" onClick={() => careerfun("Aptitude")}>
            <img className="cardImage" src={aptitudeTest} alt="Medical" />
            <p className="card-text mt-3">Aptitude Test</p>
          </div>
          <div className="card" onClick={() => careerfun("Career Guidance")}>
            <img className="cardImage" src={careerGuidence} alt="Medical" />
            <p className="card-text mt-3">Career Guidance</p>
          </div>
          <div className="card" onClick={() => careerfun("Career Counseling")}>
            <img className="cardImage" src={careerCounciling} alt="Medical" />
            <p className="card-text mt-3">Career Counseling</p>
          </div>
        </div>

        {/* <div className="career-opt">
          <div onClick={() => careerfun("Aptitude")} className="aptitude">
            <button onClick={() => careerfun("Aptitude")}>Aptitude</button>
            <div>
              <img id="careerpage-image" src={aptitudeTest} alt="" />
            </div>
            <div className="opt-names">
              <span id="option-name">Aptitude Test</span>
            </div>
          </div>
          <div onClick={() => careerfun("Career Guidance")} className="careergd">
            <button onClick={() => careerfun("Career Guidance")}>
              Career Guidance </button>
            <div>
              <img id="careerpage-image" src={careerGuidence} alt="" />
            </div>
            <div className="opt-names">
              <span id="option-name">Career Guidance</span>
            </div>
          </div>
          <div onClick={() => careerfun("Career Counseling")} className="careercon">
             <button onClick={() => careerfun("Career Counseling")}>
              Career Counseling
            </button> 
            <div className="careerpage-imgSection">
              <img id="careerpage-image" src={careerCounciling} alt="" />
            </div>
            <div className="opt-names">
              <span id="option-name">Career Counseling</span>
            </div>
          </div>
        </div> */}

        <div>
          {showMessageButton && (
            <div className="message-section">
              <div
                id="btn-link"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                <div className="message-btn">{msg}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Career;
