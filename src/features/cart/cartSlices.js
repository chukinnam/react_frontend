import { createSlice, current } from "@reduxjs/toolkit";
//create a cart slices
const cart = [];
const cartSlice = createSlice({
  name: cart,
  initialState: { cart: cart ? cart : [] },
  reducers: {
    addToCartRedux: (state, action) => {
      state.cart = [...state.cart, action.payload];
      console.log(state.cart);
    },
    removeFromCartRedux: (state, action) => {
      state.cart = current(state.cart).filter(
        (element) => element == action.payload.id
      );
    },
  },
});
export const { addToCartRedux, removeFromCartRedux } = cartSlice.actions;
export default cartSlice.reducer;
