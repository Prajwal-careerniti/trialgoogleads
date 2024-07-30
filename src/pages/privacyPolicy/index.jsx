import React, { useEffect } from "react";
import "./index.css";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="priPolicy-container">
      <div className="priPolicy-head">
        <div id="priPolicy-head">Our Copyright & Privacy Policy</div>
      </div>
      <div className="priPolicy-section">
        <ol>
          <li>
            <b>Introduction</b>
          </li>
          Welcome to Career NiTi's website. This page outlines our copyright
          policy regarding the content and materials published on our website.
          Career NiTi is committed to respecting the intellectual property
          rights of others and expects our website visitors to do the same.
          <br />
          <br />
          <li>
            <b>Ownership of Content</b>
          </li>
          All content, materials, and resources published on the Career NiTi
          website, including but not limited to text, graphics, logos, images,
          videos, and software, are the property of Career NiTi unless otherwise
          stated. These materials are protected by copyright laws and
          international treaties.
          <br />
          <br />
          <li>
            <b>Permitted Use</b>
          </li>
          Visitors to the Career NiTi website are granted a limited license to
          access and use the content for personal, non-commercial purposes only.
          This includes viewing, downloading, and printing content for
          educational or informational purposes. Any unauthorized use,
          reproduction, distribution, or modification of the content is strictly
          prohibited.
          <br />
          <br />
          <li>
            <b>Copyright Infringement</b>
          </li>
          Career NiTi takes copyright infringement seriously and will respond to
          notices of alleged infringement in accordance with applicable laws and
          regulations. If you believe that your copyrighted work has been used
          on our website in a way that constitutes copyright infringement,
          please contact us promptly with the following information:
          <br />
          <ul className="priPolicy-list">
            <li>
              Identification of the copyrighted work claimed to have been
              infringed
            </li>
            <li>
              Description of the infringing material and its location on our
              website
            </li>
            <li>
              Your contact information (name, address, phone number, email)
            </li>
            <li>
              A statement by you that you have a good faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law
            </li>
            <li>
              A statement by you, made under penalty of perjury, that the above
              information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner's
              behalf
            </li>
          </ul>
          <br />
          <br />
          <li>
            <b>Modification of Policy</b>
          </li>
          Career NiTi reserves the right to modify or update this copyright
          policy at any time without prior notice. We encourage visitors to
          review this page periodically for any changes.
          <br />
          <br />
          <li>
            <b>Contact Us</b>
          </li>
          If you have any questions or concerns about our copyright policy,
          please contact us at{" "}
          <a id="pripolcontact-no" href="tel:+7030300132">
            {" "}
            7030300132
          </a>
          .
        </ol>
        <br />
        *Effective Date: 09th Apr 2024
      </div>
    </div>
  );
}

export default PrivacyPolicy;
