import React, { useEffect, useState } from "react";
import newsIcon from "../../assets/newsIcon.png";
import "./../notification/notification_index.css";
import NotifyCareer from "./NotifyCareer";
import NotifyExam from "./NotifyExam";
import NotifyAdmission from "./NotifyAdmission";
import { useNavigate } from "react-router-dom";

function Notification(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [selectedNotify, setSelectedNotify] = useState("career");
  const navigate = useNavigate();

  const showComponent = () => {
    switch (props.selectedNotify) {
      case "career":
        return <NotifyCareer />;

      case "exam":
        return <NotifyExam />;

      case "admission":
        return <NotifyAdmission />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="notificationfeature-container poppins-regular">
        <div className="header-section-notify poppins-regular">
          <div className="notify-header">Notification</div>
        </div>
        <div>
          <nav className="sec-nav-Not">
            <ul>
              <div
                className={`intro-nav-notify  ${
                  props.selectedNotify === "career" ? "active-item-notify" : ""
                }`}
                onClick={() => props.setSelectedNotify("career")}
              >
                <li id="notificationfeature-list">Career</li>
              </div>
              <div
                className={
                  props.selectedNotify === "exam" ? "active-item-notify" : ""
                }
                onClick={() => props.setSelectedNotify("exam")}
              >
                <li id="notificationfeature-list">Exam</li>
              </div>

              <div
                className={`last-nav ${
                  props.selectedNotify === "admission"
                    ? "active-item-notify"
                    : ""
                }`}
                onClick={() => props.setSelectedNotify("admission")}
              >
                <li id="notificationfeature-list">Admission</li>
              </div>
            </ul>
          </nav>
        </div>

        <div className="parent-div">
          <div className="show-compo_Not">{showComponent()}</div>
          <div className="content-right-notify poppins-regular">
            <div className="Advt-heading">
              KNOW YOUR NEAREST COUNSELLING CENTRE
            </div>
            <div className="city-select">
              <select
                id="state-select"
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>State</option>
                <option value="1">Maharashtra</option>
                <option value="2">Karnataka</option>
                <option value="3">Goa</option>
              </select>

              <select
                id="district-select"
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>District</option>
                <option value="1">Sangli</option>
                <option value="2">Kolhapur</option>
                <option value="3">Satara</option>
              </select>

              <button
                type="button"
                className="btn btn-light"
                id="getlocation-btn"
                onClick={() => {
                  navigate("/contactus");
                }}
              >
                <span className="poppins-regular">Get Location</span>
              </button>
            </div>

            <div className="popular-news">
              <br />
              <div className="news-popular poppins-regular">POPULAR</div>
              <br />
              <div
                className="news-section"
                onClick={() => props.setSelectedNotify("career")}
              >
                <div className="news-img">
                  <img src={newsIcon} alt="" />
                </div>
                <div className="news-heading">
                  <span className="manrope" id="news-title">
                    India will need 90,000 forensic scientists in 9 years <br />
                  </span>
                  <span id="news-views">4.4k views</span>
                </div>
              </div>
              <div
                className="news-section"
                onClick={() => props.setSelectedNotify("exam")}
              >
                <div className="news-img">
                  <img src={newsIcon} alt="" />
                </div>
                <div className="news-heading">
                  <span className="manrope" id="news-title">
                    Update on JEE (Advanced) 2024 Exam date
                    <br />
                  </span>
                  <span id="news-views">4.4k views</span>
                </div>
              </div>

              <div
                className="news-section"
                onClick={() => props.setSelectedNotify("admission")}
              >
                <div className="news-img">
                  <img src={newsIcon} alt="" />
                </div>
                <div className="news-heading">
                  <span className="manrope" id="news-title">
                    KEAM 2024 : Inviting Applications… <br />
                  </span>
                  <span id="news-views">4.4k views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
