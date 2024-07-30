import React from "react";
import { useRef, useEffect } from "react";

// import { gsap } from "gsap";

import "./index.css";
import { NavLink } from "react-router-dom";
import headerImg from "../../assets/headerImg.png";
import headerImgRespo from "../../assets/headerImgRespo.png";
import searchImg from "../../assets/Search.png";
import rodmap from "../../assets/roadmap.png";
import roadmapRespo from "../../assets/roadmapRespo.png";
import serviceCareer from "../../assets/serviceCareer.png";
import serviceAdmission from "../../assets/serviceAdmission.png";
import serviceEntrance from "../../assets/serviceEntrance.png";

import dice from "../../assets/associatedWith/dice.jpeg";
import kcp from "../../assets/associatedWith/kcp.jpeg";
import kapsan from "../../assets/associatedWith/kapsan.jpeg";
import hiremath from "../../assets/associatedWith/hiremath.jpeg";
import rajlakshmi from "../../assets/associatedWith/rajlakshmi.jpeg";
import guidancePoint from "../../assets/associatedWith/guidancePoint.jpeg";
import photon from "../../assets/associatedWith/photon.jpeg";
import chate from "../../assets/associatedWith/chate.jpeg";
import saraswatiAcademy from "../../assets/associatedWith/saraswatiAcademy.jpeg";
import royalAcademy from "../../assets/associatedWith/royalAcademy.jpeg";

import careerImg from "../../assets/careerImg.jpeg";
import examImg from "../../assets/examNotifyImg.jpg";
import admissionImg from "../../assets/admissionImg.jpeg";

import testimonrespo1 from "../../assets/testimonrespo1.png";
import testimonrespo2 from "../../assets/testimonrespo2.png";
import testimonrespo3 from "../../assets/testimonrespo3.png";
import testimonrespo4 from "../../assets/testimonrespo4.png";

import Slider from "./Slider";
import Testimonials from "./Testimonials";

function Home({ selectedNotify, setSelectedNotify }) {
  function scrollLeft() {
    const container = document.querySelector(".testimonials-responsive");
    container.scrollBy({
      left: -400, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  }

  function scrollRight() {
    const container = document.querySelector(".testimonials-responsive");
    container.scrollBy({
      left: 400, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container ">
      {/* header box */}
      <div className="home-header">
        <div className="headerSection">
          <img id="headerImg" src={headerImg} alt="" />
        </div>
      </div>

      {/* Searchbar */}
      {/* <div className="searchComp">
        <div className=" h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
              <input className="search_input" type="text" name="" placeholder="Search..." />
              <a href="#" className="search_icon"><img className="search-img" src={searchImg} alt="" /></a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Notification and Update centre */}
      <div className="notification-centre">
        <span className="poppins-regular">Notification & Updates</span>

        <div className="notify-sliders">
          <Slider
            selectedNotify={selectedNotify}
            setSelectedNotify={setSelectedNotify}
          />
        </div>
      </div>

      {/* notification-responsive */}
      <div className="notify-respo">
        <div className="notifyrespo-scrollable">
          <div className="notifyrespo-card-container">
            <div id="first-card" className="notifyrespo-card poppins-regular">
              <div>
                <img id="careerimg" src={careerImg} alt="" />
              </div>
              <div className="notifyrespo-content">
                India will need 90,000 forensic scientists in 9 years
              </div>
              <NavLink id="nav-link" to="/notification">
                <div
                  className="notifyrespo-title"
                  onClick={() => props.setSelectedNotify("career")}
                >
                  <div className="notifyrespo-btn">career</div>
                </div>
              </NavLink>

              <div className="indicators">Next »»</div>
            </div>

            <div id="second-card" className="notifyrespo-card poppins-regular">
              <div>
                <img id="examimg" src={examImg} alt="" />
              </div>
              <div className="notifyrespo-content">
                Update on NEET 2024 Advance city Intimation Slip
              </div>
              <NavLink id="nav-link" to="/notification">
                <div
                  className="notifyrespo-title"
                  onClick={() => props.setSelectedNotify("exam")}
                >
                  <div className="notifyrespo-btn">Exam</div>
                </div>
              </NavLink>

              <div className="indicators">««Previous Next »»</div>
            </div>

            <div id="third-card" className="notifyrespo-card poppins-regular">
              <div>
                <img id="careerimg" src={admissionImg} alt="" />
              </div>
              <div className="notifyrespo-content ">
                KEAM 2024 : Inviting Applications...
              </div>
              <NavLink id="nav-link" to="/notification">
                <div
                  className="notifyrespo-title"
                  onClick={() => props.setSelectedNotify("admission")}
                >
                  <div className="notifyrespo-btn">Admission</div>
                </div>
              </NavLink>

              <div className="indicators">««Previous</div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Roadmap */}
      <div className="roadmap-container">
        <img src={rodmap} id="roadmap-img" />
        <img src={roadmapRespo} id="roadmapRespo-Img" alt="" />
      </div>

      {/* Our Services box */}
      <div className="our-services" id="our-Services">
        <div className="service-header">
          <div className="service-title">Our Services</div>
        </div>
        <div
          id="service-container"
          className="service-container  poppins-regular"
        >
          <div className="serviceCard-section">
            <div className="section-one">
              <img id="serviceCareer-img" src={serviceCareer} alt="" />
            </div>

            <div className="section-two">
              <div className="serviceCard-title">Career</div>
              <div className="serviceCard-text">
                Career guidance works by combining professional expertise with
                personalized assessment to help individuals identify their
                skills, interests, and goals. It then provides actionable
                insights and strategies to navigate the job market effectively,
                empowering individuals to make informed career decisions and
                achieve their aspirations.
              </div>
              <div>
                <a className="serviceCard-link" href="">
                  Take a Free Career Guidance session »
                </a>
              </div>
            </div>

            <div className="section-ImgRespo">
              <img id="serviceCareer-img" src={serviceCareer} alt="" />
            </div>
          </div>

          <div className="serviceCard-section">
            <div className="section-three">
              <div className="serviceCard-title">Entrance</div>
              <div className="serviceCard-text">
                Career counseling operates by offering one-on-one sessions with
                trained counselors who assess an individual's strengths,
                weaknesses, and aspirations. Through a holistic approach, they
                provide tailored advice, resources, and strategies to guide
                clients in making informed career choices and achieving their
                professional goals.
              </div>
              <div>
                <a className="serviceCard-link" href="">
                  Take a Free Entrance Guidance session »
                </a>
              </div>
            </div>
            <div className="section-four">
              <img id="serviceEntrance-img" src={serviceEntrance} alt="" />
            </div>

            <div className="section-ImgRespo">
              <img id="serviceEntrance-img" src={serviceEntrance} alt="" />
            </div>
          </div>

          <div className="serviceCard-section">
            <div className="section-five">
              <img id="serviceAdmission-img" src={serviceAdmission} alt="" />
            </div>

            <div className="section-six">
              <div className="serviceCard-title">Admission</div>
              <div className="serviceCard-text">
                Taking an aptitude test is crucial for finding the best career
                fit, as it assesses one's innate abilities and interests,
                guiding individuals towards professions that align with their
                natural strengths. This personalized insight helps in making
                informed career choices, leading to greater job satisfaction and
                success.
              </div>
              <div>
                <a className="serviceCard-link" href="">
                  Take a Free Admission Guidance session »
                </a>
              </div>
            </div>

            <div className="section-ImgRespo">
              <img src={serviceAdmission} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Information stats */}
      <div className="stat-info  ">
        <div className="stat-card inter">
          <span>
            2,000+ <br />
            <p>No. Of Students Counseled </p>
          </span>
          <span>
            10,000+ <br /> <p>No. Of Students Guided</p>
          </span>
          <span>
            200+ <br /> <p>No. Of Classes Connected</p>{" "}
          </span>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <Testimonials />
      </div>

      {/* testimonials-resposnsive */}

      {/* <div className="responsive-Testimonials">
        <div className="testirespo-title"><b>Testimonials</b></div>
        <div className="testimonials-responsive">
          <div className="testi-respo-container">
            <div className="testirespo-img"><img id="testirespo-Img" src={testimonrespo1} alt="" /></div>
            <div className="testirespo-img"><img id="testirespo-Img" src={testimonrespo2} alt="" /></div>
            <div className="testirespo-img"><img id="testirespo-Img" src={testimonrespo3} alt="" /></div>
            <div className="testirespo-img"><img id="testirespo-Img" src={testimonrespo4} alt="" /></div>
          </div>
        </div>
      </div> */}

      <div className="responsive-Testimonials">
        <div className="testirespo-title">
          <b>Testimonials</b>
        </div>
        <div className="testimonials-responsive">
          <div className="testi-respo-container">
            <div className="testirespo-img">
              <img id="testirespo-img" src={testimonrespo1} alt="" />
            </div>
            <div className="testirespo-img">
              <img id="testirespo-img" src={testimonrespo2} alt="" />
            </div>
            <div className="testirespo-img">
              <img id="testirespo-img" src={testimonrespo3} alt="" />
            </div>
            <div className="testirespo-img">
              <img id="testirespo-img" src={testimonrespo4} alt="" />
            </div>
          </div>
        </div>
        <div className="carousel-controls">
          {/* <div>««</div> */}
          {/* onClick={scrollLeft()} */}
          <button className="prev">««</button>
          {/* onClick={scrollRight()} */}
          <button className="next">»»</button>
        </div>
      </div>

      {/* Associations */}
      <div className="association-section">
        <div>
          <div className="asso-heading">Associates With Us</div>
        </div>
        <marquee scrollamount="12" height="280px" loop="-1">
          <div className="morquee">
            {/* <div className="brand-logo"><img id="brand-logo" src={dummyLogo} alt="" /></div> */}
            <div>
              <img id="brand-logo" src={dice} alt="" />
            </div>
            <div>
              <img id="brand-logo" src={chate} alt="" />
            </div>
            <div>
              <img id="brand-logo" src={kcp} alt="" />
            </div>
            {/* <div ><img src={udaan} alt="" /></div> */}
            <div>
              <img id="brand-logo" src={kapsan} alt="" />
            </div>
            <div>
              <img id="brand-logo" src={guidancePoint} alt="" />
            </div>
            <div>
              <img id="brand-logo" src={photon} alt="" />
            </div>
            <div>
              <img id="brand-logo" src={rajlakshmi} alt="" />
            </div>
            <div>
              <img id="brand-logo" src={royalAcademy} alt="" />
            </div>
            <div>
              <img id="brand-logo" src={hiremath} alt="" />
            </div>
            <div>
              <img id="brand-logo" src={saraswatiAcademy} alt="" />
            </div>
          </div>
        </marquee>
      </div>
    </div>
  );
}

export default Home;
