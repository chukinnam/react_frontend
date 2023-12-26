import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AllProduct from "../pages/AllProduct";
import Brands from "../pages/Brands";
import Loginpages from "../pages/Loginpages";
import Man from "../pages/Man";
import Women from "../pages/Women";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="list">
          <li className="icon">
            <Link to="/">
              <span className="image">
                <svg></svg>
              </span>
            </Link>
          </li>
          <li className="item">
            <Link to="/all_products">All Products</Link>
          </li>
          <li className="item">
            <Link to="/brands">Brands</Link>
          </li>
          <li className="item">
            <Link to="/man">Man</Link>
          </li>
          <li className="item">
            <Link to="/women">Women</Link>
          </li>
          <li className="login">
            <Link to="login">login</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/all_products" element={<AllProduct />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/man" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Loginpages />} />
      </Routes>
    </>
  );
};

export default Navbar;
