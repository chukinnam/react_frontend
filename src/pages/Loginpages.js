import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlices";
import Button from "../components/Button";
const Loginpages = () => {
  // use navigation to redirect
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const { auth, user, loading, message } = useSelector((state) => {
    return state.auth;
  });
  useEffect(() => {
    if (auth) {
      navigate("/all_products");
    }
  }, [auth, user, loading, message, dispatch, navigate]);
  //handle input value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };
  //handle login
  const submit = (event) => {
    event.preventDefault();
    // call redux login function adn pass value
    dispatch(login(formValue));
  };
  return (
    <section>
      <div className="LoginContainer">
        <div className="LoginBox">
          <form onSubmit={submit} id="login-form" className="login_form">
            <div className="user_name">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={formValue.username}
              ></input>
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formValue.password}
              ></input>
            </div>
            <div className="form button">
              <input type="submit" value="Submit" />
              <Button
                redirect={true}
                redirectPath={"register"}
                name={"Register"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Loginpages;
