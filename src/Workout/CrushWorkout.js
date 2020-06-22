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
  let workoutSpecs = useSelector((state) => state.workoutSpecs);
  if (objectNullOrEmpty(workoutSpecs)) {
    //hardcoded just for testing
    workoutSpecs = {
      equipment: [],
      restLength: "00:05",
      roundLength: "00:10",
      rounds: 12,
    };
  }

  const timeStringToSeconds = (timeString) => {
    //mapping string from "04:30" format to int seconds;
    const [minutes, seconds] = timeString.split(":").map((element) => {
      return parseInt(element);
    });

    return minutes * 60 + seconds;
  };

  const timeArrayGenerator = ({ rounds, roundLength, restLength }) => {
    //mapping the number of rounds / rests to an array corresponding to the amount of time

    const roundLengthSeconds = timeStringToSeconds(roundLength);
    const restLengthSeconds = timeStringToSeconds(restLength);

    const timeArray = [];
    for (let i = 0; i < rounds; i++) {
      if (i % 2 === 0) timeArray.push(roundLengthSeconds);
      else timeArray.push(restLengthSeconds);
    }
    return timeArray;
  };

  return (
    <div className={classes.workoutCrusher}>
      <WorkoutTimer times={timeArrayGenerator(workoutSpecs)} />
    </div>
  );
}

export default CrushWorkout;
