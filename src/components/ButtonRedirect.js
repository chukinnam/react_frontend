import React from "react";
import { useNavigate } from "react-router-dom";
const Button = (props) => {
  const buttonStyle = {
    border: "2px solid rgb(107, 155, 210)",
    borderRadius: "4px",
    fontSize: "16px",
    color: "#000000",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    padding: "5px 10px",
    minWidth: "100px",
    margin: "5px",
  };
  const navigate = useNavigate();
  const handlebutton = (e) => {
    if (props.redirect) {
      navigate("/" + props.redirectPath);
    } else {
      console.log("do.....");
    }
  };
  return (
    <button style={buttonStyle} onClick={handlebutton}>
      {props.name}
    </button>
  );
};

export default Button;
