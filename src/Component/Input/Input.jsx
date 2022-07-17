import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [input, setInput] = useState(props.keyPress);
  return (
    <div className="input-form">
      <input
        type="text"
        ref={props.refHook}
        className="input-field"
        placeholder="Type Here"
        value={props.value}
        onChange={(event) => setInput(input + props.keyPress)}
      />
      <button className="reset" onClick={props.resetFn}>
        Reset
      </button>
    </div>
  );
};

export default Input;
