import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../Styles/workoutTimer.css";

function WorkoutTimer({}) {
  const [restartKey, setRestartKey] = useState(0); //key to update when timer needs to be restarted
  const [time, setTime] = useState(11);
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
    setTime(7);
    setRestartKey(1);
    return [false, 1000];
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
