import React, { useState, useEffect } from "react";
import "../notification/admissionNotify.css";
import axios from "axios";
import {
  setPageOfAdmissionNotification,
  setAdmissionNotification,
} from "../../redux/notifications/admission.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NotifyAdmission() {
  const dispatch = useDispatch();
  const { page, admissionNotification } = useSelector(
    (state) => state.admission
  );
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const fetchAdmissionNotification = async (pageNumber) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/v1/notification/getNotifications?type=ADMISSION&page=${pageNumber}`
      );

      // If notification found
      if (response.status === 200 && response.data.data.length > 0) {
        const newlyReceivedNotificationData = admissionNotification.concat(
          response.data.data
        );
        setData(newlyReceivedNotificationData);
        dispatch(setAdmissionNotification(newlyReceivedNotificationData));
      } else {
        throw Error("No data found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const readMoreAboutNotification = (id) => {
    navigate(`/notificationInfo?id=${id}`);
  };

  useEffect(() => {
    if (isInitialLoad) {
      if (admissionNotification.length === 0) {
        fetchAdmissionNotification(page);
      } else {
        setData(admissionNotification);
      }
      setIsInitialLoad(false);
    }
  }, [isInitialLoad, admissionNotification, page, dispatch]);

  const changePageNumber = () => {
    const nextPage = page + 1;
    setPageNumber(nextPage);
    dispatch(setPageOfAdmissionNotification(nextPage));
    fetchAdmissionNotification(nextPage);
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

export default NotifyAdmission;
