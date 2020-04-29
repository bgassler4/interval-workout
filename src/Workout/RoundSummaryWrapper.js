import React from "react";
import RoundSummary from "./RoundSummary";
import CircularLoading from "../Shared/CircularLoading";

const objectNullOrEmpty = (object) => {
  return !object || Object.keys(object).length === 0;
};

function RoundSummaryWrapper(props) {
  if (objectNullOrEmpty(props.workout)) return <CircularLoading />;

  return (
    <div>
      {props.workout.map((round) => (
        <RoundSummary key={round.number} round={round} />
      ))}
    </div>
  );
}

export default RoundSummaryWrapper;
