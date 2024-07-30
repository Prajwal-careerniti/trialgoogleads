import { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SetCookie from "../../hooks/SetCookies";
import GetCookie from "../../hooks/GetCookies";
import HorizontalAds from "../../components/ads/horizontal";

export default function Exam() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // for selecting UG or PG
  const [selectedOption, setSelectedOption] = useState("UG");

  // for stream and selected stream
  const [streams, setStream] = useState([]);
  const [selectedStreamId, setSelectedStreamId] = useState("");

  // for selected stream process
  const [streamProcess, setStreamProcess] = useState([]);

  // function which sets option ug or pg
  const handleOptionSwitch = (item) => {
    setSelectedOption(item);
    fetchStream();
  };

  // function which sets selected stream
  const handleStreamClick = (streamId) => {
    setSelectedStreamId(streamId);
    fetchStreamProcess(streamId);
  };

  async function fetchStream() {
    try {
      // if cookie found then retrieve it from that cookie otherwise send request to server and fetch data
      const data = GetCookie(`EXAM PROCESS-${selectedOption}`);
      if (data) {
        setStream(JSON.parse(data));
      } else {
        // fetch stream according to option selected
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/v1/stream/getStream?type=${selectedOption}&streamType=EXAM PROCESS`
        );

        // if stream found
        if (response.status === 200) {
          SetCookie(
            `EXAM PROCESS-${selectedOption}`,
            JSON.stringify(response.data.data)
          );
          setStream(response.data.data);
        } else {
          throw Error("");
        }
      }
    } catch (error) {
      setStream([]);
    }
  }

  // fetch stream process which is selected
  async function fetchStreamProcess(streamId) {
    try {
      const data = GetCookie(`EXAM PROCESS-${streamId}`);
      if (data) {
        setStreamProcess(JSON.parse(data));
      } else {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/v1/streamProcess/getStreamProcess?type=EXAM PROCESS&streamId=${streamId}`
        );

        // if stream process found
        if (response.status === 200) {
          setStreamProcess(response.data.data);
          SetCookie(
            `EXAM PROCESS-${streamId}`,
            JSON.stringify(response.data.data)
          );
        } else {
          throw Error("");
        }
      }
    } catch (error) {
      setStreamProcess([]);
    }
  }

  // fetch data according to ug or pg
  useEffect(() => {
    setStream([]);
    setSelectedStreamId("");
    setStreamProcess([]);
    fetchStream();
  }, [selectedOption]);

  return (
    <div>
      {/* heading of page */}
      <section id="admission-img">
        <p id="admission-title">Exam</p>
      </section>

      <HorizontalAds />
      {/* switch option */}
      <div className="ugpg">
        <div
          className={`ug ${selectedOption === "UG" ? "active-item-ugpg" : ""}`}
          onClick={() => handleOptionSwitch("UG")}
        >
          UG
        </div>
        <div
          className={`pg ${selectedOption === "PG" ? "active-item-ugpg" : ""}`}
          onClick={() => handleOptionSwitch("PG")}
        >
          PG
        </div>
      </div>

      {/* card container to hold streams */}
      <div className="card-container">
        {streams.map((stream) => (
          <div
            key={stream.id}
            className={`card`}
            onClick={() => handleStreamClick(`${stream._id}`)}
          >
            <img
              className="cardImage"
              src={stream.image}
              alt={stream.streamName}
            />
            <p>{stream.streamName}</p>
          </div>
        ))}
      </div>

      {/* container to hold stream process of selected stream */}
      <div className="all-courses">
        {streamProcess.map((course) => (
          <div
            className="course"
            key={course.id}
            onClick={() => navigate(`/examInfo?streamProcessId=${course._id}`)}
          >
            <div className="selectedImg">
              <img src={course.image} alt="" />
            </div>
            <div className="course-name">{course.processName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
