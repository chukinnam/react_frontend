import React, { lazy } from "react";
import Button from "./ButtonRedirect";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartRedux,
  removeFromCartRedux,
  minusCartProductRedux,
} from "../features/cart/cartSlices";
import { Link } from "react-router-dom";
const ProductComponent = (prop) => {
  let cartProduct = null;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => {
    return state.cart;
  });
  cartProduct = cart.find((element) => element.id == prop.id);

  const addToCart = () => {
    dispatch(
      addToCartRedux({
        image: prop.image,
        id: prop.id,
        name: prop.name,
        price: prop.price,
        catalogy: prop.catalogy,
      })
    );
  };
  const removeFromCart = () => {
    dispatch(removeFromCartRedux({ id: prop.id }));
  };
  const minusCartProduct = () => {
    dispatch(minusCartProductRedux({ id: prop.id }));
  };

  return (
    <>
      <div className="product-container">
        <div className="product-box">
          <div>
            <Link to={"/product/" + prop.id}>
              <img
                height={300}
                width={300}
                className="product-img"
                src={`/photo/${prop.catalogy}/clothing/${prop.image}.jpeg`}
                alt={prop.name}
                loading="lazy"
              />
            </Link>
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
            {cartProduct ? <div>{cartProduct.qty}</div> : <div> 0 </div>}

            <Button
              disabled={cartProduct ? false : true}
              name={"-"}
              onClick={minusCartProduct}
            />
            {cartProduct ? (
              <Button name={"Remove"} onClick={removeFromCart} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
