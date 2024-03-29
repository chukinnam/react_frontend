import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AllProduct from "../pages/AllProduct";
import Kids from "../pages/Kids";
import HomePage from "../pages/HomePage";
import Loginpages from "../pages/Loginpages";
import Man from "../pages/Man";
import Register from "../pages/Register";
import Women from "../pages/Women";
import { useSelector } from "react-redux";
import useAuthHook from "../hook/useAuthHook";
import Profile from "../pages/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/ButtonRedirect";
import { logout } from "../servers/logoutServer";
import CartComponent from "../components/CartComponent";
import Productdetail from "../pages/Productdetail";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";

const Navbar = () => {
  const { auth, user } = useSelector((state) => {
    return state.auth;
  });
  const dropdown = () => {
    var element = document.querySelector(".dropdown-info");
    element.classList.toggle("active");
  };
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/profile");
  };
  const togglecart = () => {
    var element = document.querySelector(".cart");
    element.classList.toggle("active");
  };
  const { total } = useSelector((state) => {
    return state.cart;
  });

  return (
    <>
      <div className="navbar">
        <div className="home_icon">
          <div className="icon">
            <Link to="/">
              <span className="image">
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                >
                  <g>
                    <g>
                      <path
                        fill="#F76D57"
                        d="M43,2v22c0,2.209,1.791,4,4,4s4-1.791,4-4V2H43z"
                      />
                      <path
                        fill="#F76D57"
                        d="M23,24c0,2.209,1.791,4,4,4s4-1.791,4-4V2h-8V24z"
                      />
                      <path
                        fill="#F76D57"
                        d="M3,4v20c0,2.209,1.791,4,4,4s4-1.791,4-4V2H5C3.896,2,3,2.895,3,4z"
                      />
                    </g>
                    <path
                      fill="#F9EBB2"
                      d="M58,60c0,1.104-0.896,2-2,2H26V37c0-0.516-0.447-1-1-1H11c-0.553,0-1,0.447-1,1v25H8c-1.104,0-2-0.896-2-2
		V29.91C6.326,29.965,6.658,30,7,30c2.088,0,3.926-1.068,5-2.688C13.074,28.932,14.912,30,17,30s3.926-1.068,5-2.688
		C23.074,28.932,24.912,30,27,30s3.926-1.068,5-2.688C33.074,28.932,34.912,30,37,30s3.926-1.068,5-2.688
		C43.074,28.932,44.912,30,47,30s3.926-1.068,5-2.688C53.074,28.932,54.912,30,57,30c0.342,0,0.674-0.035,1-0.09V60z"
                    />
                    <g>
                      <path
                        fill="#B4CCB9"
                        d="M33,24c0,2.209,1.791,4,4,4s4-1.791,4-4V2h-8V24z"
                      />
                      <path
                        fill="#B4CCB9"
                        d="M13,24c0,2.209,1.791,4,4,4s4-1.791,4-4V2h-8V24z"
                      />
                      <path
                        fill="#B4CCB9"
                        d="M59,2h-6v22c0,2.209,1.791,4,4,4s4-1.791,4-4V4C61,2.895,60.104,2,59,2z"
                      />
                    </g>
                    <path
                      fill="#394240"
                      d="M59,0H5C2.789,0,1,1.789,1,4v20c0,2.219,1.208,4.152,3,5.189V60c0,2.211,1.789,4,4,4h48
		c2.211,0,4-1.789,4-4V29.189c1.792-1.037,3-2.971,3-5.189V4C63,1.789,61.211,0,59,0z M51,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2
		H51z M41,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H41z M31,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H31z M21,2v22
		c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H21z M3,4c0-1.105,0.896-2,2-2h6v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V4z M12,62V38h12v10h-1
		c-0.553,0-1,0.447-1,1s0.447,1,1,1h1v12H12z M58,60c0,1.104-0.896,2-2,2H26V37c0-0.516-0.447-1-1-1H11c-0.553,0-1,0.447-1,1v25H8
		c-1.104,0-2-0.896-2-2V29.91C6.326,29.965,6.658,30,7,30c2.088,0,3.926-1.068,5-2.688C13.074,28.932,14.912,30,17,30
		s3.926-1.068,5-2.688C23.074,28.932,24.912,30,27,30s3.926-1.068,5-2.688C33.074,28.932,34.912,30,37,30s3.926-1.068,5-2.688
		C43.074,28.932,44.912,30,47,30s3.926-1.068,5-2.688C53.074,28.932,54.912,30,57,30c0.342,0,0.674-0.035,1-0.09V60z M57,28
		c-2.209,0-4-1.791-4-4V2h6c1.104,0,2,0.895,2,2v20C61,26.209,59.209,28,57,28z"
                    />
                    <path
                      fill="#394240"
                      d="M53,36H29c-0.553,0-1,0.447-1,1v20c0,0.553,0.447,1,1,1h24c0.553,0,1-0.447,1-1V37
		C54,36.447,53.553,36,53,36z M52,56H30V38h22V56z"
                    />
                    <g>
                      <path
                        fill="#45AAB8"
                        d="M12,62h12V50h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1V38H12V62z"
                      />
                      <rect
                        x="30"
                        y="38"
                        fill="#45AAB8"
                        width="22"
                        height="18"
                      />
                    </g>
                    <path
                      fill="#394240"
                      d="M48.293,42.707C48.488,42.902,48.744,43,49,43s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		l-1-1c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L48.293,42.707z"
                    />
                    <path
                      fill="#394240"
                      d="M48.293,47.707C48.488,47.902,48.744,48,49,48s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		l-6-6c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L48.293,47.707z"
                    />
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <ul className="list">
          <li className="item">
            <Link to="/all_products">All Products</Link>
          </li>
          <li className="item">
            <Link to="/kids">Kids</Link>
          </li>
          <li className="item">
            <Link to="/man">Man</Link>
          </li>
          <li className="item">
            <Link to="/women">Women</Link>
          </li>
        </ul>
        {auth ? (
          <div className="user">
            <FontAwesomeIcon
              icon={faUser}
              onClick={() => {
                dropdown();
              }}
            />
            <div className="dropdown-info">
              <ul>
                <li>
                  <Button
                    name="Profile"
                    onClick={() => {
                      redirect();
                      dropdown();
                    }}
                  />
                </li>
                <li>
                  <Button
                    name="Logout"
                    onClick={() => {
                      logout();
                      dropdown();
                    }}
                  />
                </li>
              </ul>
            </div>
            <span>{user.data.username}</span>
            <div className="cart-container">
              <FontAwesomeIcon
                icon={faShoppingCart}
                onClick={() => {
                  togglecart();
                }}
              />
              <span>{total}</span>
            </div>
            <div className="cart">
              <CartComponent />
            </div>
          </div>
        ) : (
          <div className="login">
            <Link to="login">login</Link>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/all_products" element={<AllProduct />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/man" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Loginpages />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Productdetail />} />
        {/* auth before access this page  */}
        <Route element={useAuthHook()}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkoutsuccess" element={<CheckoutSuccessPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navbar;
