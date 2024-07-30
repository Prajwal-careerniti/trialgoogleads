import React from "react";
import { NavLink } from "react-router-dom";
import newsIcon from "../../assets/newsIcon.png";

export default function RightComponent() {
  return (
    <div className="content-right poppins-regular">
      <div className="Advt-heading">Know Your Nearest Counselling Center</div>
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

        <NavLink to="/notification">
          <div className="noti-con">
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
                <span id="news-views">3.5k views</span>
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
                  KEAM 2024 : Inviting Applications…
                  <br />
                </span>
                <span id="news-views">2.7k views</span>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
