import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
function CartComponent() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => {
    return state.cart;
  });

  return (
    <div className="cartContainer">
      <ul>
        {cart.map((element) => {
          return (
            <li key={element.id} className="cart-product">
              <img
                className="product-img"
                src={`/photo/${element.catalogy}/clothing/${element.image}.jpeg`}
                alt={element.name}
              />
              <span>{element.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CartComponent;
