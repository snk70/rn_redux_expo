import { createSlice, configureStore } from "@reduxjs/toolkit";
import mySlick from "./mySlick";

const myStore = configureStore({ reducer: mySlick.reducer });

myStore.subscribe(() => console.log("My Store", myStore.getState()));

export default myStore;
