import React from "react";

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

  return (
    <button
      disabled={props.disabled}
      style={buttonStyle}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
