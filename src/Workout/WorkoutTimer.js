import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../Styles/workoutTimer.css";

function WorkoutTimer({ time = 0 }) {
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
    return [true, 1000];
  };

  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        duration={time}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        // onComplete={() => [true, 1000]}
        onComplete={() => afterTimerDone()}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default WorkoutTimer;
