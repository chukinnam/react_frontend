import { createSlice, current } from "@reduxjs/toolkit";
//create a cart slices
const cart = [];
const cartSlice = createSlice({
  name: cart,
  initialState: { cart: [], total: 0, cartSum: 0 },
  reducers: {
    addToCartRedux: (state, action) => {
      let orgQty = state.cart.find(
        (element) => element.id === action.payload.id
      );

      let total = state.total + 1;
      let cartSum = state.cartSum + action.payload.price;

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
          total: total,
          cartSum: cartSum,
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
          total: total,
          cartSum: cartSum,
        };
      }
    },
    removeFromCartRedux: (state, action) => {
      //...state --> must copy the state first before update state
      let element = state.cart.find((element) => {
        return element.id == action.payload.id;
      });
      return {
        ...state,
        cart: state.cart.filter((element) => element.id !== action.payload.id),
        total:
          state.total -
          state.cart.find((element) => {
            return element.id == action.payload.id;
          }).qty,
        cartSum: state.cartSum - element.qty * element.price,
      };
    },
    minusCartProductRedux: (state, action) => {
      let orgQty = state.cart.find(
        (element) => element.id === action.payload.id
      );
      let total = state.total - 1;
      let cartSum = state.cartSum - action.payload.price;
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
          total: total,
          cartSum: cartSum,
        };
      } else if (orgQty.qty === 1) {
        return {
          ...state,
          cart: state.cart.filter((element) => element.id != action.payload.id),
          total: total,
          cartSum: cartSum,
        };
      }
    },
  },
});
export const { addToCartRedux, removeFromCartRedux, minusCartProductRedux } =
  cartSlice.actions;
export default cartSlice.reducer;
