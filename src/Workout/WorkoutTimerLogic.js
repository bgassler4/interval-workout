import React from "react";
//import { useSelector } from "react-redux";
import "../Styles/WorkoutTimer.css";
import WorkoutTimer from "./WorkoutTimer";

function WorkoutTimerLogic(props) {
  const [time, setTime] = React.useState(props.time);
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = Math.ceil(props.time * 0.2); // last 20%
  const ALERT_THRESHOLD = Math.ceil(props.time * 0.05); //last 5%;
  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };
  const [remainingPathColor, setRemainingPathColor] = React.useState(
    COLOR_CODES.info.color
  );

  const TIME_LIMIT = time;

  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

  let timerInterval = null;

  function formatTime(time) {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      console.log({ timePassed, timeLeft, TIME_LIMIT });
      console.log("TIME LEFT: " + timeLeft);
      setTime(timeLeft);

      setCircleDasharray();
      //setRemainingPathColor(timeLeft);
      if (timeLeft == 0) clearInterval(timerInterval);
    }, 1000);
  }

  // Divides time left by the defined time limit.
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  // Update the dasharray value as time passes, starting with 283
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }

  //   function setRemainingPathColor(timeLeft) {
  //     const { alert, warning, info } = COLOR_CODES;

  //     if (timeLeft <= alert.threshold) {
  //       //   document
  //       //     .getElementById("base-timer-path-remaining")
  //       //     .classList.remove(warning.color);
  //       //   document
  //       //     .getElementById("base-timer-path-remaining")
  //       //     .classList.add(alert.color);
  //       // } else if (timeLeft <= warning.threshold) {
  //       //   document
  //       //     .getElementById("base-timer-path-remaining")
  //       //     .classList.remove(info.color);
  //       //   document
  //       //     .getElementById("base-timer-path-remaining")
  //       //     .classList.add(warning.color);
  //     }
  //   }

  debugger;
  startTimer();
  return (
    <WorkoutTimer
      time={formatTime(time)}
      remainingPathColor={remainingPathColor}
    />
  );
}

export default WorkoutTimerLogic;
