import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RoundSummaryHeader from "./RoundSummaryHeader";
import Emoji from "../Shared/Emoji";

const useStyles = makeStyles((theme) => ({
  round: {
    display: "grid",
    "grid-template-rows": "1fr 1fr 1fr",
    alignContent: "center",
    "border-radius": "3px",
    textAlign: "center",
    boxShadow:
      "0 0 1px 0 rgba(42, 42, 42, 0.4), 0 3px 4px 0 rgba(42, 42, 42, 0.2)",
  },
  exercise: {
    display: "inline",
  },
}));

export default function RoundSummary({ round = {} }) {
  const classes = useStyles();

  function getEmoji(exerciseType) {
    let emoji;
    switch (exerciseType) {
      case "Upper Body":
        emoji = "💪";
        break;
      case "Lower Body":
        emoji = "🦵";
        break;
      case "Cardio":
        emoji = "💓";
        break;
      case "Core":
        emoji = "🌎";
        break;
    }
    return emoji;
  }

  return (
    <div className={classes.round}>
      <RoundSummaryHeader roundNumber={round.number} />
      {round.exercises.map((exercise, index) => (
        <div key={index}>
          <div>{exercise.name}</div>
          <Emoji label={exercise.name} emoji={getEmoji(exercise.category)} />
          {/* <div className="exercise-category">{exercise.category}</div> */}
        </div>
      ))}
    </div>
  );
}
