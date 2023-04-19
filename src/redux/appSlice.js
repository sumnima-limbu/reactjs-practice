import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  name: "Sumnima",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("increment", state, action);
      state.counter += action.payload;
    },
    changeName: (state) => {
      state.name = "Sabita";
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changeName } =
  appSlice.actions;

export default appSlice.reducer;
