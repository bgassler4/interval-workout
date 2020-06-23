import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../Styles/workoutTimer.css";

function WorkoutTimer({ times = [] }) {
  const [round, setRound] = useState(1); //the current round of the workout
  const [completed, setCompleted] = useState(false);
  const [time, setTime] = useState(times[round - 1]); //use the round - 1 as the index for what time to be used

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }

    const formattedTime = formatTime(remainingTime);

    return (
      <div className="timer">
        <div className="text"></div>
        <div className="value">{formattedTime}</div>
        <div className="text">Remaining</div>
      </div>
    );
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const formattedTime = `${minutes}:${
      remainderSeconds < 10 ? "0" : ""
    }${remainderSeconds}`;

    return formattedTime;
  };

  const afterTimerDone = () => {
    //updating the index and then setting the time to the next time
    const nextRound = round + 1;
    if (nextRound === times.length) {
      setCompleted(true);
      return;
    }
    setTime(times[nextRound - 1]);
    setRound(nextRound);
  };

  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        key={round}
        isPlaying
        duration={time}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        onComplete={() => afterTimerDone()}
      >
        {renderTime}
      </CountdownCircleTimer>
      {!completed ? (
        <div>
          <h1>
            {round % 2 === 1 ? "Round" : "Rest"} {round}
          </h1>
        </div>
      ) : (
        <div>Well Done!</div>
      )}
    </div>
  );
}

export default WorkoutTimer;
