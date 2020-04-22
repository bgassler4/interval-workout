import React from "react";

function RoundSummary(props) {
  return (
    <div className="round-summary">
      <h1>Round {props.round.number}</h1>
      <div>
        {props.round.exercises.map((exercise) => (
          <div>
            <span>Name: {exercise.name}</span>
            <span>Type: {exercise.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoundSummary;
