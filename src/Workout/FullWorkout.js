import React from "react";
import { useSelector } from "react-redux";

function FullWorkout() {
  const v = useSelector((state) => state.visibilityFilter);
  return <div>FULL WORKOUTS!: {v}</div>;
}

export default FullWorkout;
