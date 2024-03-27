import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./ButtonRedirect";
import {
  addToCartRedux,
  removeFromCartRedux,
  minusCartProductRedux,
} from "../features/cart/cartSlices";
import { useNavigate } from "react-router-dom";
function CartComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { cart } = useSelector((state) => {
    return state.cart;
  });

  return (
    <div className="cartContainer">
      <ul className="cart-products">
        {cart.map((element) => {
          return (
            <li key={element.id} className="item">
              <div className="product">
                <img
                  style={{ height: "100px", width: "100px" }}
                  className="product-img"
                  src={`/photo/${element.catalogy}/clothing/${element.image}.jpeg`}
                  alt={element.name}
                />
                <span className="product_name">{element.name}</span>
                <div className="actions">
                  {/* <Button
                    name={"+"}
                    onClick={() => {
                      dispatch(
                        addToCartRedux({
                          image: element.image,
                          id: element.id,
                          name: element.name,
                          price: element.price,
                          catalogy: element.catalogy,
                        })
                      );
                    }}
                  /> */}
                  <div className="product_qty">QTY:{element.qty}</div>
                  {/* <Button
                    name={"-"}
                    onClick={() => {
                      // call function here because upper function will not rerednd
                      dispatch(
                        minusCartProductRedux({
                          id: element.id,
                          price: element.price,
                        })
                      );
                    }}
                  /> */}
                  <Button
                    name={"Remove"}
                    onClick={() => {
                      dispatch(removeFromCartRedux({ id: element.id }));
                    }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart_checkour_container">
        <Button
          name={"Checkout"}
          onClick={() => {
            return navigate("/checkout");
          }}
        />
      </div>
    </div>
  );
}

export default CartComponent;
