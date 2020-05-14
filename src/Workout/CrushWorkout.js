import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import WorkoutTimer from "./WorkoutTimer";

const useStyles = makeStyles((theme) => ({
  workoutCrusher: {
    display: "grid",
    "grid-template-columns": "1fr 1fr",
    "grid-template-rows": "2fr 1fr",
    "grid-gap": "20px",
    placeItems: "center center",
    height: "550px",
  },
}));

const objectNullOrEmpty = (object) => {
  return !object || Object.keys(object).length === 0;
};

function CrushWorkout(props) {
  const classes = useStyles();
  const workoutSpecs = useSelector((state) => state.workoutSpecs);
  if (objectNullOrEmpty(workoutSpecs)) {
    //just for testing
    workoutSpecs = {
      equipment: [],
      restLength: "00:30",
      roundLength: "03:00",
      rounds: 12,
    };
  }

  function parseTime(time) {
    const [mins, secs] = time.split(":").map(parseFloat);
    return mins * 60 + secs;
  }

  let timerInterval = null;

  function getCurrentTime() {
    for (let i = 0; i < workoutSpecs.round; i++) {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;

        if (timeLeft == 0) {
          clearInterval(timerInterval);
        }
        return currentTime;
      }, 1000);
    }
  }

  currentTime = getCurrentTime();

  return (
    <div className={classes.workoutCrusher}>
      <WorkoutTimer time={90} />
      <div>
        <strong>CURRENT ROUND!</strong>
      </div>
    </div>
  );
}

export default CrushWorkout;
