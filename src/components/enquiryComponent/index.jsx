import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import enquiry from "../../assets/enquirybutton.png";
import Modal from "react-modal";
import "./index.css";

function Spinner() {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

const EnquiryComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const modalRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSend = (values, { setSubmitting }) => {
    setLoading(true);
    axios
      .post("https://careerniti-backend.onrender.com/appoint/submit", {
        name: values.fullName,
        mobile: values.phoneNo,
        city: values.selectCity,
        email: values.emailAddress,
        message: values.enquiryMessage,
      })
      .then((res) => {
        console.log(res.data);
        setSubmitted(true);
        closePopup();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      })
      .finally(() => {
        setLoading(false);
        setSubmitting(false);
      });
  };

  return (
    <div>
      <div
        className="enquiry-button"
        style={{
          position: "fixed",
          top: "300px",
          left: "-5px",
          cursor: "pointer",
          zIndex: "9999",
        }}
        onClick={openPopup}
      >
        <img id="enquiry-btn" src={enquiry} alt="" />
      </div>
      {isPopupOpen && <div className="modal-overlay"></div>}
      <div>
        <Modal
          id="enquiry-modal-popup"
          isOpen={isPopupOpen}
          onRequestClose={closePopup}
          className="custom-enquiry-modal"
          overlayClassName="custom-modal-overlay"
          ref={modalRef}
        >
          <Formik
            initialValues={{
              fullName: "",
              emailAddress: "",
              phoneNo: "",
              selectCity: "",
              enquiryMessage: "",
            }}
            validationSchema={Yup.object({
              fullName: Yup.string().required("Required"),
              emailAddress: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              phoneNo: Yup.string()
                .required("Required")
                .matches(/^[0-9]{10}$/, "Invalid phone number"),
              selectCity: Yup.string().required("Required"),
            })}
            onSubmit={handleSend}
          >
            <Form>
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
              <div className="enquiry-section poppins-regular">
                <div className="enquiry-heading">Enquiry Form</div>
                <div className="appointment-section">
                  <button
                    id="appointment-btn"
                    type="button"
                    className="btn btn-light"
                  >
                    Book Your Appointment Now
                  </button>
                </div>
                <div className="enquiry-form">
                  <div className="mb-1 mt-1">
                    <Field
                      type="text"
                      name="fullName"
                      className="form-control full-name"
                      placeholder="Full Name*"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-1 mt-1">
                    <Field
                      type="email"
                      name="emailAddress"
                      className="form-control email-address"
                      placeholder="Email Address*"
                    />
                    <ErrorMessage
                      name="emailAddress"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-1 mt-1">
                    <Field
                      type="text"
                      name="phoneNo"
                      className="form-control phone-no"
                      placeholder="Phone No*"
                    />
                    <ErrorMessage
                      name="phoneNo"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-1 mt-1">
                    <Field
                      type="text"
                      name="selectCity"
                      className="form-control select-city"
                      placeholder="Enter City*"
                    />
                    <ErrorMessage
                      name="selectCity"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-1 mt-1">
                    <Field
                      type="text"
                      name="enquiryMessage"
                      className="form-control enquiry-message"
                      placeholder="Message"
                    />
                    <ErrorMessage
                      name="enquiryMessage"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div>
                    <button
                      id="enquiry-submitbtn"
                      type="submit"
                      className="btn btn-light"
                    >
                      {loading ? <Spinner /> : "Send"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </Modal>
      </div>
    </div>
  );
};

export default EnquiryComponent;
