import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlices";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { auth } = useSelector((state) => {
    return state.auth;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formVlaue, setFormValue] = useState({
    username: "",
    password1: "",
    password2: "",
    usernameErrorMessage: "",
    password1ErrorMessage: "",
    password2ErrorMessage: "",
    formvalidated: false,
  });
  const firstTimeRender = useRef(true);
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
  useEffect(() => {
    if (
      !firstTimeRender.current &&
      formVlaue.usernameErrorMessage === "" &&
      formVlaue.password1ErrorMessage === "" &&
      formVlaue.password2ErrorMessage === "" &&
      formVlaue.username !== "" &&
      formVlaue.password1 !== "" &&
      formVlaue.password2 !== ""
    ) {
      setFormValue((prevState) => ({
        ...prevState,
        formvalidated: true,
      }));
    }
    if (auth) {
      navigate("/all_products");
    }
    // prevent firsttime renden problem
    firstTimeRender.current = false;
  }, [
    formVlaue.usernameErrorMessage,
    formVlaue.password1ErrorMessage,
    formVlaue.password2ErrorMessage,
    formVlaue.username,
    formVlaue.password1,
    formVlaue.password2,
    auth,
    navigate,
  ]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    //call redux register function
    dispatch(
      register({ username: formVlaue.username, password: formVlaue.password1 })
    );
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((currentState) => {
      const newState = { ...currentState, [name]: value };
      return newState;
    });
  };
  const handleValitation = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      if (value.length < 8) {
        setFormValue((prevState) => ({
          ...prevState,
          usernameErrorMessage: "at least 8 characters ",
          formvalidated: false,
        }));
      } else {
        setFormValue((prevState) => ({
          ...prevState,
          usernameErrorMessage: "",
        }));
      }
      return;
    }
    if (name === "password1") {
      if (!regex.test(value)) {
        setFormValue((prevState) => ({
          ...prevState,
          password1ErrorMessage:
            "<ul> <li>At least one upper case English letter(?=.*?[A-Z])</li><li>At least one lower case English letter(?=.*?[a-z])</li><li>At least one digit, (?=.*?[0-9])</li><li>At least one special character, (?=.*?[#?!@$%^&*-])</li><li>Minimum eight in length .{8,} (with the anchors)</li><ul>",
          formvalidated: false,
        }));
      } else {
        setFormValue((prevState) => ({
          ...prevState,
          password1ErrorMessage: "",
        }));
      }

      return;
    }
    if (name === "password2") {
      if (formVlaue.password1 !== value) {
        setFormValue((prevState) => ({
          ...prevState,
          password2ErrorMessage: "must mutch with password match ",
          formvalidated: false,
        }));
      } else {
        setFormValue((prevState) => ({
          ...prevState,
          password2ErrorMessage: "",
        }));
      }

      return;
    }
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
                  required
                  type="text"
                  name="username"
                  id="username"
                  value={formVlaue.username}
                  onChange={(e) => {
                    handleChange(e);
                    handleValitation(e);
                  }}
                />
                {formVlaue.usernameErrorMessage.length > 0 && (
                  <span className="error-message">
                    {formVlaue.usernameErrorMessage}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="password1">Password:</label>
                <input
                  required
                  type="password"
                  name="password1"
                  id="password1"
                  value={formVlaue.password1}
                  onChange={(e) => {
                    handleChange(e);
                    handleValitation(e);
                  }}
                />
                {formVlaue.password1ErrorMessage.length > 0 && (
                  <span className="error-message">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formVlaue.password1ErrorMessage,
                      }}
                    ></div>
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="password2">Confirm Password</label>
                <input
                  required
                  type="password"
                  name="password2"
                  id="password2"
                  value={formVlaue.password2}
                  onChange={(e) => {
                    handleChange(e);
                    handleValitation(e);
                  }}
                ></input>
                {formVlaue.password2ErrorMessage.length > 0 && (
                  <span className="error-message">
                    {formVlaue.password2ErrorMessage}
                  </span>
                )}
              </div>
            </div>
            <div className="submit">
              <input
                disabled={!formVlaue.formvalidated}
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
