import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "logintruf",
  initialState: false,
  reducers: {
    UpdateLogintrue(state) {
      return true
    },
    UpdateLoginfalse(state) {
        return false
      },
  },
});

export const { UpdateLogintrue, UpdateLoginfalse} = LoginSlice.actions;
export default LoginSlice.reducer;