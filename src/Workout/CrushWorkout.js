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
  debugger;

  if (objectNullOrEmpty(workout)) {
    //hardcoded just for testing
    let workoutSpecs = {
      equipment: [],
      restLength: "00:05",
      roundLength: "00:10",
      rounds: 12,
    };
  }

  return (
    <div className={classes.workoutCrusher}>
      <WorkoutTimer times={[]} />
    </div>
  );
}

export default CrushWorkout;
