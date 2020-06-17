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

function CrushWorkout() {
  const classes = useStyles();
  const [time, setTime] = React.useState(13);
  let workoutSpecs = useSelector((state) => state.workoutSpecs);
  if (objectNullOrEmpty(workoutSpecs)) {
    //just for testing
    workoutSpecs = {
      equipment: [],
      restLength: 10,
      roundLength: 60,
      rounds: 12,
    };
  }

  const timeArrayGenerator = (rounds, roundLength, restLength) => {
    //hard coded for testing
    return [20, 10, 20, 10, 20, 10];
  };

  return (
    <div className={classes.workoutCrusher}>
      <WorkoutTimer times={timeArrayGenerator()} />
      <div>
        <strong>CURRENT ROUND!</strong>
      </div>
    </div>
  );
}

export default CrushWorkout;
