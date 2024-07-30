import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  careerNotification: [],
};

const careerNotificationSlice = createSlice({
  name: "careerNotification",
  initialState,
  reducers: {
    setPageOfCareerNotification(state, action) {
      state.page = action.payload;
    },
    setCareerNotification(state, action) {
      state.careerNotification = action.payload;
    },
  },
});

export const { setPageOfCareerNotification, setCareerNotification } =
  careerNotificationSlice.actions;
export default careerNotificationSlice.reducer;
