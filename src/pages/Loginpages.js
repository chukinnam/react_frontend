import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlices";
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
    } else {
      console.log("login again");
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
    dispatch(login(formValue));
  };
  //test get profile
  const getProfile = async () => {
    const response = await fetch("/api/user/profile", {
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
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
            <div className="submit">
              <input type="submit" value="Submit" />
            </div>
            <div></div>
          </form>
        </div>
      </div>

      <div>
        <button onClick={getProfile}></button>
      </div>
    </section>
  );
};

export default Loginpages;
