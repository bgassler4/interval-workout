import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../Styles/workoutTimer.css";

function WorkoutTimer({ times = [] }) {
  const [restartKey, setRestartKey] = useState(0); //key to update when timer needs to be restarted
  const [time, setTime] = useState(times[restartKey]); //use the restart key as the index for what time to be used
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
    const newRestartKey = restartKey + 1;
    if (newRestartKey == times.length) return;
    setTime(times[newRestartKey]);
    setRestartKey(newRestartKey);
  };

  return (
    <div className="timer-wrapper">
      TIME: {time}
      <CountdownCircleTimer
        key={restartKey}
        isPlaying
        duration={time}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        onComplete={() => afterTimerDone()}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default WorkoutTimer;
