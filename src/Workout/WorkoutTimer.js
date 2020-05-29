import React from "react";
//import { useSelector } from "react-redux";
import "../Styles/WorkoutTimer.css";

function WorkoutTimer(props) {
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
            className={`base-timer__path-remaining ${props.remainingPathColor}`}
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
        {props.time}
      </span>
    </div>
  );
}

export default WorkoutTimer;
