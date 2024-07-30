import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  admissionNotification: [],
};

const admissionNotificationSlice = createSlice({
  name: "admissionNotification",
  initialState,
  reducers: {
    setPageOfAdmissionNotification(state, action) {
      state.page = action.payload;
    },
    setAdmissionNotification(state, action) {
      state.admissionNotification = action.payload;
    },
  },
});

export const { setPageOfAdmissionNotification, setAdmissionNotification } =
  admissionNotificationSlice.actions;
export default admissionNotificationSlice.reducer;
