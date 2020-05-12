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

function CrushWorkout(props) {
  const classes = useStyles();
  const workoutSpecs = useSelector((state) => state.workoutSpecs);
  console.log(workoutSpecs);

  return (
    <div className={classes.workoutCrusher}>
      <WorkoutTimer time="1:35" />
      <div>
        <strong>CURRENT ROUND!</strong>
      </div>
    </div>
  );
}

export default CrushWorkout;
