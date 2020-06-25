import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import WorkoutTimer from "./WorkoutTimer";

const useStyles = makeStyles((theme) => ({
  workoutCrusher: {
    display: "grid",
    "grid-template-rows": "2fr 1fr",
    "grid-gap": "20px",
    placeItems: "center center",
    height: "550px",
  },
}));

const objectNullOrEmpty = (object) => {
  return !object || Object.keys(object).length === 0;
};

function CrushWorkout() {
  const classes = useStyles();
  let workout = useSelector((state) => state.workout);

  if (objectNullOrEmpty(workout)) {
    //hardcoded just for testing
    workout = [
      { number: 1, exercises: Array(2), time: 180, isRest: false },
      { isRest: true, time: 30 },
      { number: 2, exercises: Array(2), time: 180, isRest: false },
      { isRest: true, time: 30 },
      { number: 3, exercises: Array(2), time: 180, isRest: false },
      { isRest: true, time: 30 },
    ];
  }

  return (
    <div className={classes.workoutCrusher}>
      <WorkoutTimer times={[30]} />
    </div>
  );
}

export default CrushWorkout;
