import { createSlice } from "@reduxjs/toolkit";

export const DepartLearn = createSlice({
  name: "perfs",
  initialState: { Learn: "Visual", Department: "CSE" },
  reducers: {
    updateLearn(state, action) {
      state.Learn = action.payload; // Update the 'Learn' value
    },
    updateDepart(state, action) {
        state.Department = action.payload; // Update the 'Learn' value
      },
  },
});

export const { updateLearn, updateDepart } = DepartLearn.actions;
export default DepartLearn.reducer;
