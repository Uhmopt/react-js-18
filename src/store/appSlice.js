import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    setApp: (state, action) => {
      if (typeof action.payload === "function") {
        state = action.payload(state);
      } else if (typeof action.payload === "object") {
        Object.keys(action.payload).forEach((name) => {
          state[name] = action.payload[name];
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setApp } = appSlice.actions;

export const appReducer = appSlice.reducer;

export default appReducer;
