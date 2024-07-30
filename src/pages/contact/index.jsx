import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Contactus.css";
import sangliOffice from "../../assets/officeImages/Sangli.png";
import karadOffice from "../../assets/officeImages/Karad.png";
import kolhapuroffice from "../../assets/officeImages/Kolhapur.png";
import sataraOffice from "../../assets/officeImages/Satara.png";
import phoneicon from "../../assets/phoneIcon.png";

function Spinner() {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleSend = (values, { setSubmitting }) => {
    setLoading(true);
    axios
      .post("http://localhost:9002/api/v1/stream/createStream", {})
      .then((res) => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      })
      .finally(() => {
        setLoading(false);
        setSubmitting(false);
        setSubmittedName(values.name);
      });
  };

  return (
    <div className="contact-container poppins-regular">
      <div className="contact-img">
        <div className="contact-title ">Contact Us</div>
      </div>

      {!submitted ? (
        <Formik
          initialValues={{
            name: "",
            mobile: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            mobile: Yup.string()
              .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            message: Yup.string(),
          })}
          onSubmit={handleSend}
        >
          <Form>
            <div className="form-section">
              <div className="form-header">
                <h1 id="form-title">Leave Us Your Info</h1>
                <span>And we will get back to you</span>
              </div>
              <div className="contact-form">
                <div className="mb-1 mt-1">
                  <label htmlFor="name" className="form-label">
                    Your Name{" "}
                  </label>
                  <Field
                    type="text"
                    className="form-control name"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="mb-1 mt-1">
                  <label htmlFor="mobile" className="form-label">
                    Your Mobile No.
                  </label>
                  <Field
                    type="text"
                    className="form-control mobile"
                    id="mobile"
                    name="mobile"
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="mb-1 mt-1">
                  <label htmlFor="email" className="form-label">
                    Your Email{" "}
                  </label>
                  <Field
                    type="email"
                    className="form-control email"
                    id="emailaddress"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="mb-1 mt-1">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <Field
                    type="text"
                    className="form-control message"
                    id="message"
                    name="message"
                  />
                </div>

                <div>
                  <button id="send-btn" type="submit" className="btn btn-light">
                    {loading ? <Spinner /> : "Send"}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      ) : (
        <div className="contactThanking-section">
          <div className="contactThanking-message">
            <div className="thanking-text poppins-regular">
              Dear {submittedName},
              <br />
              <br />
              <br />
              Thank you for reaching out to us and submitting your contact
              details on our website. We appreciate your interest in our
              services. Your proactive step towards seeking guidance for your
              career development is commendable. <br />
              <br />
              Our team at CAREER NITI is dedicated to helping individuals like
              you we understand the importance of making informed decisions
              about your future, and we are here to support you every step of
              the way. <br />
              <br />
              One of our experienced counselors will be in touch with you
              shortly, feel free to explore our website for valuable resources
              and insights into the world of career planning.
              <br />
              <br />
              Thank you once again for choosing CAREER NITI. We look forward to
              embarking on this journey with you and helping you unlock your
              full potential. <br />
              <br />
              <br />
              Thank You,
            </div>
          </div>
        </div>
      )}

      <div className="location-section">
        <span className="location-title">Office Locations</span>
        <div className="locations">
          <div className="location-cards">
            <div className="card-contentSangli">
              <div className="img-section">
                <a
                  href="https://maps.app.goo.gl/rZTNupqp5XaveoRJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="office-img" src={sangliOffice} alt="" />
                </a>
              </div>
              <p id="office-city">Sangli</p>
              <p id="office-address">
                F14, 3rd Floor, Shree Kapila, <br /> MSEB Road, <br />
                Vishrambagh, Sangli. <br />
                <img id="phoneicon" src={phoneicon} alt="" />
                <a id="contact-no" href="tel:+91 7030300132">
                  {" "}
                  7030300132
                </a>
              </p>
            </div>
          </div>
          <div className="location-cards">
            <div className="card-content">
              <a
                href="https://maps.app.goo.gl/b5TycByp4X2fbRRf9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="office-img" src={karadOffice} alt="" />
              </a>
              <p id="office-city">Karad</p>
              <p id="office-address">
                Flat No. 2, Suman Appt, Near Hotel <br /> Deviprasad, Opposite
                to Govt <br /> Pharmacy College, Vidyanagar, Karad. <br />
                <img id="phoneicon" src={phoneicon} alt="" />
                <a id="contact-no" href="tel:+91 7030300131">
                  {" "}
                  7030300131
                </a>
              </p>
            </div>
          </div>
          <div className="location-cards">
            <div className="card-content">
              <a
                href="https://maps.app.goo.gl/psoPPTVBbmsGDMMe8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="office-img" src={kolhapuroffice} alt="" />
              </a>
              <p id="office-city">Kolhapur</p>
              <p id="office-address">
                RS No.2017/K 6th Lane, <br /> Rajarampuri, Kolhapur. <br />
                <img id="phoneicon" src={phoneicon} alt="" />
                <a id="contact-no" href="tel:+91 7030300132">
                  {" "}
                  7030300133
                </a>
              </p>
            </div>
          </div>
          <div className="location-cards">
            <div className="card-content">
              <a
                href="https://maps.app.goo.gl/ZXrfs3kE2auwQaXR6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="office-img" src={sataraOffice} alt="" />
              </a>
              <p id="office-city">Satara</p>
              <p id="office-address">
                Ingale Empire, Kesarkar Peth, <br /> Shahu Chowk, Satara 415002.{" "}
                <br />
                <img id="phoneicon" src={phoneicon} alt="" />
                <a id="contact-no" href="tel:+91 7030300132">
                  {" "}
                  7030300131
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
