import { useState, useEffect } from "react";
import "../notification/examNotify.css";
import axios from "axios";
import {
  setPageOfExamNotification,
  setExamNotification,
} from "../../redux/notifications/exam.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NotifyExam() {
  const dispatch = useDispatch();
  const { page, examNotification } = useSelector((state) => state.exam);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Fetch data from API
  const fetchExamNotification = async (pageNumber) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/v1/notification/getNotifications?type=EXAM&page=${pageNumber}`
      );

      // If notification found
      if (response.status === 200 && response.data.data.length > 0) {
        const newlyReceivedNotificationData = examNotification.concat(
          response.data.data
        );
        setData(newlyReceivedNotificationData);
        dispatch(setExamNotification(newlyReceivedNotificationData));
      } else {
        throw Error("No data found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isInitialLoad) {
      if (examNotification.length === 0) {
        fetchExamNotification(page);
      } else {
        setData(examNotification);
      }
      setIsInitialLoad(false);
    }
  }, [isInitialLoad, examNotification, page, dispatch]);

  const changePageNumber = () => {
    const nextPage = page + 1;
    setPageNumber(nextPage);
    dispatch(setPageOfExamNotification(nextPage));
    fetchExamNotification(nextPage);
  };

  const readMoreAboutNotification = (id) => {
    navigate(`/notificationInfo?id=${id}`);
  };

  return (
    <>
      <div className="">
        <div>
          <div className="news-head poppins-regular">
            <b>Latest News</b>
          </div>
        </div>
        <div className="notification-newsContainer poppins-regular">
          {data.map((content, index) => (
            <div className="notifynews-card" key={index}>
              <div className="notifynews-section">
                <div>
                  <div className="notifynews-title">{content.title}</div>
                  <div className="notifynews-content">
                    <div
                      dangerouslySetInnerHTML={{ __html: content.context }}
                    />
                  </div>
                </div>
                <a
                  className="fetchMore"
                  onClick={() => readMoreAboutNotification(content._id)}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          <a className="fetchMore" onClick={changePageNumber}>
            Fetch more
          </a>
        </div>
      </div>
    </>
  );
}

export default NotifyExam;
