import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/ButtonRedirect";
import CartProductComponent from "../components/CartProductComponent";
import { checkout } from "../servers/checkout";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { cart, total, cartSum } = useSelector((state) => {
    return state.cart;
  });
  const navigate = useNavigate();
  const submitcheckout = async () => {
    let result = await checkout(cart);
    if (result.success) {
      navigate(`/${result.loaction}`);
    } else {
      navigate("/checkoutfail.html");
    }
  };

  return (
    <div>
      {cart.length >= 1 ? (
        <div>
          <table>
            <thead>
              <tr key="header">
                <th>Id</th>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((element, count) => {
                return <CartProductComponent item={element} key={element.id} />;
              })}
            </tbody>
          </table>
          <div className="total">
            Total{total} /{cartSum}
          </div>
          <div className="checkout_button">
            <Button
              name="checkout"
              onClick={() => {
                submitcheckout();
              }}
            />
          </div>
        </div>
      ) : (
        <div className="no-product">
          <h2>Empty Cart !</h2>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
