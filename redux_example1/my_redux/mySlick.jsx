import { createSlice, configureStore } from "@reduxjs/toolkit";

//Slick contains State and Reducer Actions:

const mySlick = createSlice({
  name: "Sina",
  initialState: {
    value: 0,
    myObj: {},
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    setObj: (state, action) => {
      state.myObj = action.payload;
    },
  },
});

export default mySlick;