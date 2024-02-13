import React from "react";
import Button from "./ButtonRedirect";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartRedux,
  removeFromCartRedux,
} from "../features/cart/cartSlices";
const ProductComponent = (prop) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addToCartRedux({ id: prop.id, name: prop.name, price: prop.price })
    );
  };
  const removeFromCart = () => {
    dispatch(removeFromCartRedux({ id: prop.id }));
  };
  return (
    <>
      <div className="product-container">
        <div className="product-box">
          <div>
            <img
              className="product-img"
              src={`/photo/${prop.catalogy}/clothing/${prop.image}.jpeg`}
              alt={prop.name}
            />
          </div>
          <div>
            <span>{prop.catalogy}</span>
          </div>
          <div>
            <h2>
              <span className="product-name">{prop.name}</span>
            </h2>
          </div>
          <span className="product-price">{prop.price}</span>
          <div className="actions">
            <Button name={"+"} onClick={addToCart} />
            <Button name={"-"} onClick={removeFromCart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
