import careerImg from "../../assets/careerImg.jpeg";
import examImg from "../../assets/examNotifyImg.jpg";
import admissionImg from "../../assets/admissionImg.jpeg";

import { NavLink } from "react-router-dom";
import "../home/Slider.css";

function Slider(props) {
  return (
    <div className="notification-centre">
      <div className="notificationCard-container">
        <div className="notificationcard poppins-regular">
          <div className="img-section">
            <img id="careerimg" src={careerImg} alt="" />
          </div>
          <div className="notifyrespo-content">
            India will need 90,000 forensic scientists in 9 years
          </div>
          <NavLink id="nav-Link" to="/notification">
            <div
              className="notification-title"
              onClick={() => props.setSelectedNotify("career")}
            >
              <div>career</div>
            </div>
          </NavLink>
        </div>

        <div className="notificationcard poppins-regular">
          <div className="img-section">
            <img id="examimg" src={examImg} alt="" />
          </div>
          <div className="notifyrespo-content">
            Update on NEET 2024 Advance city Intimation Slip
          </div>
          <NavLink id="nav-Link" to="/notification">
            <div
              className="notification-title"
              onClick={() => props.setSelectedNotify("exam")}
            >
              Exam
            </div>
          </NavLink>
        </div>

        <div className="notificationcard poppins-regular">
          <div className="img-section">
            <img id="admissionimg" src={admissionImg} alt="" />
          </div>
          <div className="notifyrespo-content ">
            KEAM 2024 : Inviting Applications...
          </div>
          <NavLink id="nav-Link"  to="/notification">
            <div
              className="notification-title"
              onClick={() => props.setSelectedNotify("admission")}
            >
              Admission
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Slider;
