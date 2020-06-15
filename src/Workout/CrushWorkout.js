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
  const [time, setTime] = React.useState(100);
  let workoutSpecs = useSelector((state) => state.workoutSpecs);
  if (objectNullOrEmpty(workoutSpecs)) {
    //just for testing
    workoutSpecs = {
      equipment: [],
      restLength: "00:30",
      roundLength: "03:00",
      rounds: 12,
    };
  }

  // const test = () => {
  //   setTime(30);
  // };

  return (
    <div className={classes.workoutCrusher}>
      <WorkoutTimer />
      <div>
        <strong>CURRENT ROUND!</strong>
      </div>
      <div>
        <button>{time}</button>
      </div>
    </div>
  );
}

export default CrushWorkout;
