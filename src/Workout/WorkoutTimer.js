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

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  const afterTimerDone = () => {
    //updating the index and then setting the time to the next time
    const newRestartKey = restartKey + 1;
    if (newRestartKey > times.length) return;
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
