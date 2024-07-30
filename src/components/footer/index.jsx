import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import footerLogo from "../../assets/title-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/careerniti",
      label: "Facebook",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/careerniti/about/",
      label: "LinkedIn",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/CareerNiti",
      label: "Twitter",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/careerniti/",
      label: "Instagram",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@CareerNiTi",
      label: "YouTube",
    },
    {
      icon: <WhatsAppIcon />,
      link: "https://chat.whatsapp.com/Eq3V7ejMadBDz2j8aTgv6X",
      label: "WhatsApp",
    },
  ];

  const emailInput = useRef(null);

  // const handleSubscribe = () => {
  //   // prompt alter subscribed successfully
  //   const email = emailInput.current.value;
  //   alert("will send you our newsletter on : " + email);
  // };

  return (
    <div className="container-foot">
      <div className="footer">
        <div className="footer-info">
          <div className="footer-links">
            <ul className="poppins-regular link-ul">
              <h5>
                <div className="foot-ttl poppins-regular">
                  <b>Links</b>
                </div>
              </h5>
              <li
                className="poppins-regular"
                id="footer-link"
                onClick={() => {
                  navigate("/career");
                }}
              >
                {/* <a href="/career" className="poppins-regular">Career</a> */}
                Career
              </li>
              <li
                className="poppins-regular"
                id="footer-link"
                onClick={() => {
                  navigate("/admission");
                }}
              >
                Admission
                {/* <a href="/admission" className="poppins-regular">Admission</a> */}
              </li>
              <li
                className="poppins-regular"
                id="footer-link"
                onClick={() => {
                  navigate("/exam");
                }}
              >
                Exam
                {/* <a href="/exam" className="poppins-regular">Exam</a> */}
              </li>
              <li
                className="poppins-regular"
                id="footer-link"
                onClick={() => {
                  navigate("/notification");
                }}
              >
                Notification
                {/* <a href="/notification" className="poppins-regular">Notifications</a> */}
              </li>
              <li
                className="poppins-regular"
                id="footer-link"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                Contact Us
                {/* <a href="/contactUs" className="poppins-regular">Get Locations</a> */}
              </li>
            </ul>
          </div>

          <div className="footer-services">
            <ul className="poppins-regular link-ul">
              <h5>
                <div className="foot-ttl">Services</div>
              </h5>
              <li
                id="footer-link"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                Career Guidance & Counselling
                {/* <a href="/contactUs" className="poppins-regular">Career Guidance & Counselling</a> */}
              </li>
              <li
                id="footer-link"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                Entrance Guidance & Counselling
                {/* <a href="/contactUs" className="poppins-regular">Entrance Guidance & Counselling</a> */}
              </li>
              <li
                id="footer-link"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                Admission Guidance And Counselling
                {/* <a href="/contactUs" className="poppins-regular">Admission Guidance And Counselling</a> */}
              </li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h5 className="poppins-regular">
              <div className="foot-ttl">Subscribe</div>
            </h5>
            <div className="subscribe-input">
              <button
                type="button"
                className="btn btn-light"
                id="subscribe-btn"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                <span className="poppins-regular">Get in Touch</span>
              </button>
            </div>
            <div className="poppins-regular subscribe-line">
              By subscribing to newsletter you agree with our{" "}
              {/* <a className="privacy" href="/privacy">
                Privacy Policy
              </a> */}
              <span
                onClick={() => {
                  navigate("/privacy");
                }}
                className="privacy"
              >
                Privacy Policy
              </span>
            </div>
          </div>
        </div>

        <div className="company-info">
          <div className="footer-logo">
            <img id="footer-logo-img" src={footerLogo} />
          </div>

          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="poppins-regular copyright">
          © Copyright 2024 Career NiTi. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
