import React, { useState, useEffect, useRef } from "react";
import { useTimer } from "use-timer";
import { randomeStreamGenerator } from "./util/stream";
import Heading from "./Component/Heading/Heading";
import Display from "./Component/Display/Display";
import Input from "./Component/Input/Input";
import useKeyPress from "./util/useKeyPress";
import "./App.css";
import Timer from "./Component/Timer/Timer";
import Credit from "./Component/Credit/Credit";

let stream = randomeStreamGenerator();
// console.log(stream);

const App = () => {
  const inputRef = useRef(null);
  const [outgoingChar, setOutgoingChar] = useState("");
  const [currentChar, setCurrentChar] = useState(stream.charAt(0));
  const [upcomingChar, setUpcomingChar] = useState(stream.substring(1));
  const [score, setScore] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [highScore, setHighScore] = useState(localStorage.highScore);
  const { time, start, pause, reset, advanceTime } = useTimer({
    interval: 15,
    step: 15,
  });

  const resetFn = () => {
    stream = randomeStreamGenerator();
    setOutgoingChar("");
    setCurrentChar(stream.charAt(0));
    setUpcomingChar(stream.substring(1));
    setScore(0);
    setIsTimerRunning(false);
    reset();
  };

  const autoFocus = () => {
    inputRef.current.focus();
  };

  let keyPress = useKeyPress((key) => {
    let copyOutgoingChar = outgoingChar;
    let copyUpcomingChar = upcomingChar;

    if (score === 0 || !isTimerRunning) {
      start();
      setIsTimerRunning(true);
    }

    if (key.toUpperCase() === currentChar) {
      setScore(score + 1);

      copyOutgoingChar += currentChar;
      setOutgoingChar(copyOutgoingChar);

      // console.log(upcomingChar.charAt(0));
      if (upcomingChar.length !== 0) {
        setCurrentChar(upcomingChar.charAt(0));

        copyUpcomingChar = upcomingChar.substring(1);
        setUpcomingChar(copyUpcomingChar);
      } else {
        if (time == 0) {
          resetFn();
          return;
        }
        setCurrentChar(score == 19 ? "Success!" : "Fail!");
        pause();
        if (
          (highScore == 0 && score == 19) ||
          (score == 19 && time < highScore)
        ) {
          localStorage.highScore = JSON.stringify(time);
        }
        setHighScore(localStorage.highScore);
        reset();
      }
    } else if (!upcomingChar == "") {
      setScore(score - 1);
      advanceTime(500);
    } else {
      resetFn();
    }
  });

  return (
    <div className="App">
      <Credit autoFocusFn={autoFocus} />
      <Heading />
      <Display txt={currentChar} />
      <Timer time={time} bestScore={highScore} />
      <Input
        refHook={inputRef}
        value={outgoingChar}
        keyPress={keyPress}
        resetFn={resetFn}
      />
    </div>
  );
};

export default App;
