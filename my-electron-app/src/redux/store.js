import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./slice/productSlice.js";
import userReducer from "./slice/userSlice.js";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
