import React from "react";
import RoundSummary from "./RoundSummary";
import CircularLoading from "../Shared/CircularLoading";
import { makeStyles } from "@material-ui/core/styles";

const objectNullOrEmpty = (object) => {
  return !object || Object.keys(object).length === 0;
};

const useStyles = makeStyles((theme) => ({
  root: {},
  round_container: {
    display: "grid",
    "grid-gap": "20px",
    "grid-template-columns": "repeat(10, 1fr)",
    "grid-template-rows": "repeat(3, 1fr)",
    "align-items": "center",
    border: "10px solid red",
  },
}));

function RoundSummaryWrapper(props) {
  const classes = useStyles();
  if (objectNullOrEmpty(props.workout)) return <CircularLoading />;

  return (
    <div className={classes.round_container}>
      {props.workout.map((round) => (
        <RoundSummary key={round.number} round={round} />
      ))}
    </div>
  );
}

export default RoundSummaryWrapper;
