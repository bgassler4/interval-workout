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
      { number: 1, exercises: Array(2), time: 20, isRest: false },
      { number: 1, isRest: true, time: 10 },
      { number: 2, exercises: Array(2), time: 20, isRest: false },
      { number: 2, isRest: true, time: 10 },
      { number: 3, exercises: Array(2), time: 20, isRest: false },
      { number: 3, isRest: true, time: 10 },
    ];
  }

  return (
    <div className={classes.workoutCrusher}>
      <WorkoutTimer workout={workout} />
    </div>
  );
}

export default CrushWorkout;
