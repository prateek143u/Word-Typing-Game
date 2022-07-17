import React from "react";
import "./Timer.css";

const Timer = (props) => {
  let time = props.time / 1000;
  let bestScores = props.bestScore / 1000;
  return (
    <div className="timer">
      <div className="curr-time">
        <span>Timer :</span>
        <span>{time.toFixed(3)}s</span>
      </div>
      <div className="best-score">
        <span>my best time :</span>
        <span>{bestScores.toFixed(3)}s!</span>
      </div>
    </div>
  );
};

export default Timer;
