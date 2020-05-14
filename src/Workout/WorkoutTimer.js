import React from "react";
import { useSelector } from "react-redux";
import "../Styles/WorkoutTimer.css";

function WorkoutTimer(props) {
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

  let remainingPathColor = COLOR_CODES.info.color;

  const TIME_LIMIT = props.time;

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

      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );

      setCircleDasharray();
      setRemainingPathColor(timeLeft);
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

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;

    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  startTimer();
  return (
    <div className="base-timer">
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            id="base-timer-path-remaining"
            strokeDasharray="283 283"
            //stroke={remainingPathColor}
            className={`base-timer__path-remaining ${remainingPathColor}`}
            d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" className="base-timer__label">
        {formatTime(props.time)}
      </span>
    </div>
  );
}

export default WorkoutTimer;
