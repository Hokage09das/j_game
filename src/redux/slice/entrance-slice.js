import { createSlice } from "@reduxjs/toolkit";

const isEntrance = JSON.parse(localStorage.getItem("auth") || "false");
const initialState = {
  isEntrance: isEntrance,
  userName: null,
};

const entranceSlice = createSlice({
  name: "entrance",
  initialState,
  reducers: {
    getUser(state, { payload }) {
      state.isEntrance = true;
      state.userName = payload;
      localStorage.setItem("auth", JSON.stringify(state.isEntrance));
    },
    log_out(state, { payload }) {
      localStorage.removeItem("auth");
      state.isEntrance = false;
    },
  },
});

export const entranceAction = entranceSlice.actions;
export default entranceSlice;
