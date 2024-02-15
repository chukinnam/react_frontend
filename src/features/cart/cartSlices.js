import { createSlice, current } from "@reduxjs/toolkit";
//create a cart slices
const cart = [];
const cartSlice = createSlice({
  name: cart,
  initialState: { cart: [], cartSum: 0 },
  reducers: {
    addToCartRedux: (state, action) => {
      let orgQty = state.cart.find(
        (element) => element.id === action.payload.id
      );

      let sum = state.cartSum + 1;

      if (orgQty !== undefined) {
        orgQty = orgQty.qty + 1;
        let newArray = state.cart.map((element) => {
          if (element.id === action.payload.id) {
            return { ...element, qty: orgQty };
          } else {
            return element;
          }
        });
        return {
          ...state,
          cart: newArray,
          cartSum: sum,
        };
      } else {
        orgQty = 1;
        let obj = {
          name: action.payload.name,
          qty: orgQty,
          id: action.payload.id,
          price: action.payload.price,
          image: action.payload.image,
          catalogy: action.payload.catalogy,
        };
        return {
          ...state,
          cart: [...state.cart, obj],
          cartSum: sum,
        };
      }
    },
    removeFromCartRedux: (state, action) => {
      //...state --> must copy the state first before update state
      return {
        ...state,
        cart: state.cart.filter((element) => element.id !== action.payload.id),
        cartSum:
          state.cartSum -
          state.cart.find((element) => {
            return element.id == action.payload.id;
          }).qty,
      };
    },
    minusCartProductRedux: (state, action) => {
      let orgQty = state.cart.find(
        (element) => element.id === action.payload.id
      );
      let sum = state.cartSum - 1;
      if (orgQty === undefined) {
        return {
          ...state.cart,
        };
      } else if (orgQty.qty > 1) {
        orgQty = orgQty.qty - 1;
        let newArray = state.cart.map((element) => {
          if (element.id === action.payload.id) {
            return { ...element, qty: orgQty };
          } else {
            return element;
          }
        });
        return {
          ...state,
          cart: newArray,
          cartSum: sum,
        };
      } else if (orgQty.qty === 1) {
        return {
          ...state,
          cart: state.cart.filter((element) => element.id != action.payload.id),
          cartSum: sum,
        };
      }
    },
  },
});
export const { addToCartRedux, removeFromCartRedux, minusCartProductRedux } =
  cartSlice.actions;
export default cartSlice.reducer;
