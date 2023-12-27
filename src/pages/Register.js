import React, { useState } from "react";

const Register = () => {
  const [formVlaue, setFormValue] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <section>
        <div className="register-container">
          <form id="register_form" onSubmit={handleSubmit}>
            <div className="register flexbox">
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formVlaue.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password1">Password:</label>
                <input
                  type="password"
                  name="password1"
                  id="password1"
                  value={formVlaue.password1}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  value={formVlaue.password2}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
