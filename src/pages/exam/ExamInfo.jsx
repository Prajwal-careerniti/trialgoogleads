import React, { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./ExamInfo.css";
import RightComponent from "../../components/rightComponent/RightComponent";

export default function ExamInformation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedItem, setSelectedItem] = useState("introduction");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  let nav = document.querySelectorAll("nav");

  const [data, setData] = useState({});

  const fetchInfo = async () => {
    const searchParams = new URLSearchParams(new URL(location.href).search);
    const streamProcessId = searchParams.get("streamProcessId");

    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/v1/streamProcess/getStreamProcess?_id=${streamProcessId}`
    );

    setData(response.data.data[0]);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="-navbar">
        <div className="process-container">
          <div className="header-section">
            <div className="longform">
              <div className="process-title">{data.processName}</div>
              {data.processName}
            </div>
          </div>
        </div>
        <br />
        <nav className="sec-nav">
          <div
            className={`line intro-nav ${
              selectedItem === "introduction" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("introduction")}
          >
            <li>Introduction</li>
            {/* Introduction */}
          </div>
          <div
            className={`line ${
              selectedItem === "eligibility" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("eligibility")}
          >
            <li>Eligibility</li>
            {/* Eligibility */}
          </div>
          <div
            className={`line ${
              selectedItem === "available_courses" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("available_courses")}
          >
            <li>Available Courses</li>
            {/* Available Courses */}
          </div>

          <div
            className={selectedItem === "campuses" ? "active-item" : ""}
            onClick={() => handleItemClick("campuses")}
          >
            <li className="line">Campuses</li>
          </div>
          <div
            className={`line ${
              selectedItem === "application_fees" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("application_fees")}
          >
            <li>Application Fees</li>
          </div>
          <div
            className={`line ${
              selectedItem === "imp_dates" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("imp_dates")}
          >
            <li>Important Dates</li>
          </div>
          <div
            className={`line ${
              selectedItem === "exam_pattern" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("exam_pattern")}
          >
            <li>Exam Pattern</li>
          </div>
          <div
            className={`line ${
              selectedItem === "syllabus" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("syllabus")}
          >
            <li>Syllabus</li>
          </div>
          <div
            className={`line navdiv ${
              selectedItem === "test_centres" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("test_centres")}
          >
            <li>Test Centres</li>
          </div>

          <div
            className={`line ${
              selectedItem === "required-documents" ? "active-item" : ""
            }`}
            onClick={() => handleItemClick("required_documents")}
          >
            <li>Required Documents</li>
          </div>
          <div
            className={selectedItem === "faq" ? "active-item" : ""}
            onClick={() => handleItemClick("faq")}
          >
            <li>FAQ</li>
          </div>
        </nav>

        <div className="parent-div">
          <div className="rendered-compo">
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {data.processInfo}
            </Markdown>
          </div>
          <RightComponent />
        </div>
      </div>
    </>
  );
}
