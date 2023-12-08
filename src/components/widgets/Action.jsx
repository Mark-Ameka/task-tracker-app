import React from "react";

function Action(props) {
  return (
    <button
      className={`px-3 py-2 w-full rounded-lg shadow-lg ${props.class}`}
      onClick={props.action}
    >
      {props.text}
    </button>
  );
}

export default Action;
