import React from "react";
import { useSelector, useDispatch } from "react-redux";
function CartComponent() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => {
    return state.cart;
  });
  console.log(cart);
  return <div className="cartContainer">{/* some of the product here  */}</div>;
}

export default CartComponent;
