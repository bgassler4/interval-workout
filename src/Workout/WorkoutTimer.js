import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../Styles/workoutTimer.css";

function WorkoutTimer({ workout = [] }) {
  const [workoutIndex, setWorkoutIndex] = useState(0); //index of current round/rest within the workout
  const [round, setRound] = useState(workout[workoutIndex]); //the current round of the workout -- start at round 1
  console.log({ round });
  const [completed, setCompleted] = useState(false);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Workout Completed</div>;
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
    const newWorkoutIndex = workoutIndex + 1;

    //workout is over if all the rounds have been
    if (newWorkoutIndex === workout.length) {
      setCompleted(true);
      return;
    }
    setRound(workout[newWorkoutIndex]);
    setWorkoutIndex(newWorkoutIndex);
  };

  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        key={workoutIndex}
        isPlaying
        duration={round.time}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        onComplete={() => afterTimerDone()}
      >
        {renderTime}
      </CountdownCircleTimer>
      <div>
        {!completed ? (
          <h1>{round.isRest ? "Rest" : `Round ${round.number}`}</h1>
        ) : (
          <span>Well Done!</span>
        )}
      </div>

      <div>
        {!round.isRest ? (
          <div className="exercises">
            {" "}
            <p>{round.exercises[0].name}</p>
            <p>{round.exercises[1].name}</p>
          </div>
        ) : (
          <span>Rest</span>
        )}
      </div>

      <div></div>
    </div>
  );
}

export default WorkoutTimer;
