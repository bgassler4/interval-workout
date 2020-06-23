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
    gridGap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 350px))",
    gridTemplateRows: "repeat(3, 1fr)",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function RoundSummaryWrapper({ workout = [] }) {
  const classes = useStyles();
  if (objectNullOrEmpty(workout)) return <CircularLoading />;

  return (
    <div className={classes.round_container}>
      {workout
        .filter((round) => !round.isRest) //don't show rest periods
        .map((round) => (
          <RoundSummary key={round.number} round={round} />
        ))}
    </div>
  );
}

export default RoundSummaryWrapper;
