import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import navLogo from "../../assets/NavBar/fullLogo.svg";
import Modal from "react-modal";

export default function DrawerAppBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const { window } = props;
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const modalRef = useRef();

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleNavigateToServices = () => {
    navigate("/"); // Navigate to the Home page first
    setTimeout(() => {
      // Wait for navigation to complete
      const element = document.getElementById("our-Services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust the delay as needed
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container-fluid nav-bar">
          <div className="logo1">
            <img
              src={navLogo}
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span>☰</span>
          </button>

          <div
            className={`collapse navbar-collapse nav-title ${
              isOpen ? "show" : ""
            }`}
            id="navbarNavAltMarkup"
          >
            <div
              id="navbar-list"
              className="navbar-nav poppins-regular"
              onClick={closeNavbar}
            >
              <a
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/career");
                }}
              >
                Career
              </a>
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/exam");
                }}
              >
                Exam
              </a>
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/admission");
                }}
              >
                Admission
              </a>
              <a className="nav-link" onClick={handleNavigateToServices}>
                Services
              </a>
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/notification");
                }}
              >
                Notification
              </a>
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About Us
              </a>
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/contactus");
                }}
              >
                Contact Us
              </a>
              <button
                id="login-btn"
                type="button"
                className="btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {" "}
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Modal
        id="enquiry-modal-popup"
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        className="custom-enquiry-modal"
        ref={modalRef}
      >
        <div className="login-div">
          <div>
            <button
              id="close-btn"
              type="button"
              className="btn btn-light"
              onClick={closePopup}
            >
              ❌
            </button>
          </div>
          <h1>Coming Soon......</h1>
        </div>
      </Modal>
    </>
  );
}
