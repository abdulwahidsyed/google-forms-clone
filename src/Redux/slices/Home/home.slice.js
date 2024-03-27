import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideDrawer: false,
  showBackdrop: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeSideDrawer: (state, action) => {
      state.showSideDrawer = action.payload;
    },
    changeBackdrop: (state, action) => {
      state.showBackdrop = action.payload;
    },
  },
});

export const { changeSideDrawer, changeBackdrop } = homeSlice.actions;
export default homeSlice.reducer;
