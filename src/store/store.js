import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlices";
//create store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
