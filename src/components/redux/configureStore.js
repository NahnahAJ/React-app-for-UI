import greetingSlice from "./greetingSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});

export default store;