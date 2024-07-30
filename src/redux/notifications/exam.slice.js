import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  examNotification: [],
};

const examNotificationSlice = createSlice({
  name: "examNotification",
  initialState,
  reducers: {
    setPageOfExamNotification(state, action) {
      state.page = action.payload;
    },
    setExamNotification(state, action) {
      state.examNotification = action.payload;
    },
  },
});

export const { setPageOfExamNotification, setExamNotification } =
  examNotificationSlice.actions;
export default examNotificationSlice.reducer;
