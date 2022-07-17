import React, { useState } from "react";
import "./Credit.css";

const Credit = (props) => {
  return (
    <div className="credit">
      <input
        type="checkbox"
        id="close"
        defaultChecked={false}
        onChange={(e) => {
          e.target.parentElement.classList.add("closed");
        }}
      />
      <label
        htmlFor="close"
        className="close-credit"
        onClick={props.autoFocusFn}
      >
        x
      </label>
      <div className="credit-detail">
        <h3>A Simple</h3>
        <h1>Word Typing Game</h1>
        <span>created by</span>
        <h2>Prateek Sharma</h2>
        <div>
          Tech Stack : <code>React JS, CSS</code>
        </div>
      </div>
    </div>
  );
};

export default Credit;
