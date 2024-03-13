import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/ButtonRedirect";
import { getProductById } from "../servers/productsServer";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartRedux,
  removeFromCartRedux,
  minusCartProductRedux,
} from "../features/cart/cartSlices";
function Productdetail() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => {
    return state.cart;
  });
  let cartProduct = cart.find((element) => element.id === product.id);
  const addToCart = () => {
    dispatch(
      addToCartRedux({
        image: product.image,
        id: product.id,
        name: product.name,
        price: product.price,
        catalogy: product.category,
      })
    );
  };
  const removeFromCart = () => {
    dispatch(removeFromCartRedux({ id: product.id }));
  };
  const minusCartProduct = () => {
    dispatch(minusCartProductRedux({ id: product.id, price: product.price }));
  };
  useEffect(() => {
    const getproduct = async (id) => {
      let value = await getProductById(id);
      setProduct(value.data[0]);
    };
    getproduct(id);
  }, [id]);

  return (
    <>
      <div className="imagegallery-container">
        <img
          className="product-img"
          src={`/photo/${product.category}/clothing/${product.image}.jpeg`}
          alt={product.name}
        />
      </div>
      <div className="product-info-container">
        <div className="info">
          <b className="catalog">{product.catalogy}</b>
          <h2 className="product-name">{product.name}</h2>
          <span className="price">{product.price}</span>
          <p className="produtc-des">{product.description}</p>
        </div>
        <div className="action">
          <Button name={"+"} onClick={addToCart} />
          <Button
            disabled={cartProduct ? false : true}
            name={"-"}
            onClick={minusCartProduct}
          />
          <Button name={"Remove"} onClick={removeFromCart} />
        </div>
      </div>
    </>
  );
}

export default Productdetail;
