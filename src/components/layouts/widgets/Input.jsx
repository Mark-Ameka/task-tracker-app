import React from "react";

function Input(props) {
  return (
    <input
      className="w-full px-3 py-2 outline-none shadow-lg rounded-lg"
      type="text"
      required
      onChange={props.action}
    />
  );
}

export default Input;
