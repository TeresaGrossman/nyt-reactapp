import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = (props) => {
  return(
  <button onClick={props.handleButtonClick} className="btn btn-danger btn-lg">Search</button>
)
};

export default Button;
