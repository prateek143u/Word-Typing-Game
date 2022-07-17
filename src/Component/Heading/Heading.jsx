import React from "react";
import "./Heading.css";

const txt1 = "type the alphabet";
const txt2 =
  "typing game to see how fast you type. timer starts when you do :)";

const Heading = () => {
  return (
    <div className="heading">
      <h1>{txt1}</h1>
      <span>{txt2}</span>
    </div>
  );
};

export default Heading;
