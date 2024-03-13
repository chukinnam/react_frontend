import React from "react";
import { useDispatch } from "react-redux";
import Button from "../components/ButtonRedirect";
import {
  addToCartRedux,
  removeFromCartRedux,
  minusCartProductRedux,
} from "../features/cart/cartSlices";
function CartProductComponent(props) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addToCartRedux({
        image: props.item.image,
        id: props.item.id,
        name: props.item.name,
        price: props.item.price,
        catalogy: props.item.category,
      })
    );
  };
  const removeFromCart = () => {
    dispatch(removeFromCartRedux({ id: props.item.id }));
  };
  const minusCartProduct = () => {
    dispatch(
      minusCartProductRedux({ id: props.item.id, price: props.item.price })
    );
  };
  return (
    <tr key={props.item.id}>
      <td>{props.item.id}</td>
      <td>{props.item.name}</td>
      <td>{props.item.price}</td>
      <td>{props.item.name}</td>
      <td>
        <Button name={"+"} onClick={addToCart} />
        {props.item.qty}
        <Button name={"-"} onClick={minusCartProduct} />
        <Button name={"Remove"} onClick={removeFromCart} />
      </td>
    </tr>
  );
}

export default CartProductComponent;
