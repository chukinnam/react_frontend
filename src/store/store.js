import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlices";
import cartReducer from "../features/cart/cartSlices";
//create store
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
