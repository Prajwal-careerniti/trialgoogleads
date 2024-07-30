import { configureStore } from "@reduxjs/toolkit";
import admissionNotificationReducer from "../redux/notifications/admission.slice.js";
import careerNotificationReducer from "../redux/notifications/career.slice.js";
import examNotificationReducer from "../redux/notifications/exam.slice.js";

export const store = configureStore({
  reducer: {
    admission: admissionNotificationReducer,
    career: careerNotificationReducer,
    exam: examNotificationReducer,
  },
});
