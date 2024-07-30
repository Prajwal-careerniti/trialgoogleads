import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import googleCollab from "../../../src/assets/googleCollab.png";
import loginImg from "../../../src/assets/loginImg.png";
import "./index.css";

export default function Login() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const initialValues = {
    email: "",
    password: "",
    fullname: "",
    mobile: "",
    agreeTerms: false,
  };

  const onSubmit = (values) => {
    alert(values); // You can handle form submission here
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.fullname) {
      errors.fullname = "Required";
    }

    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (!/^\d{10}$/i.test(values.mobile)) {
      errors.mobile = "Invalid mobile number";
    }

    if (!values.agreeTerms) {
      errors.agreeTerms = "You must accept the terms & conditions";
    }

    return errors;
  };

  return (
    <>
      <div className="login-page">
        {!isSigningUp && (
          <div className="login-container poppins-regular">
            <div className="loginLeft-section">
              <div className="login-form">
                <div className="login-title">Welcome to Career NiTi</div>
                <div className="login-subtitle">Log in to your account</div>

                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validate={validate}
                >
                  {({ values, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="login-credential">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email address
                          </label>
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                            id="emailid"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password">Password</label>
                          <Field
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>

                      <div className="mb-3 submit-button">
                        <button id="send-btn" type="submit" className="btn">
                          Sign In
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>

                <div>
                  <div className="login-signup">
                    if you don't have an account
                    <br />
                    you can
                    <span
                      onClick={() => setIsSigningUp(!isSigningUp)}
                      className="signup-link"
                    >
                      {" "}
                      Sign Up here!
                    </span>
                  </div>
                </div>

                <div className="googlecollab-option">Or continue with</div>
                <div>
                  <img id="googlecollab-img" src={googleCollab} alt="" />
                </div>
              </div>
            </div>
            <div className="loginRight-section">
              <div>
                <img id="login-img" src={loginImg} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>

      {isSigningUp && (
        <div className="signup-page">
          <div className="signup-container poppins-regular">
            <div className="signupLeft-section">
              <div>
                <img id="login-img" src={loginImg} alt="" />
              </div>
            </div>
            <div className="signupRight-section">
              <div className="signup-form">
                <div className="signup-title">Create Your Account</div>
                <div className="signup-subtitle">
                  Its free and easy to set up!
                </div>

                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validate={validate}
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="login-credential">
                        <div className="mb-3">
                          <Field
                            type="text"
                            name="fullname"
                            className="form-control"
                            id="fullname"
                            placeholder="Full Name"
                            value={values.fullname}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name="fullname"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="mb-3">
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                            id="emailid"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="mb-3">
                          <Field
                            type="text"
                            name="mobile"
                            className="form-control"
                            id="mobile"
                            placeholder="Mobile Number"
                            value={values.mobile}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name="mobile"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="mb-3">
                          <Field
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={values.agreeTerms}
                          id="flexCheckDefault"
                          name="agreeTerms"
                          onChange={handleChange}
                          checked={values.agreeTerms}
                        />
                        <label
                          id="agreement-checkbox"
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I accept the terms & conditions
                        </label>
                        {errors.agreeTerms && (
                          <div className="error">{errors.agreeTerms}</div>
                        )}
                      </div>

                      <div className="mb-3 submit-button">
                        <button id="send-btn" type="submit" className="btn">
                          Sign Up
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>

                <div className="signup-signIn">
                  Already have an account?
                  <span
                    onClick={() => setIsSigningUp(false)}
                    className="signIn-link"
                  >
                    {" "}
                    Sign In
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
