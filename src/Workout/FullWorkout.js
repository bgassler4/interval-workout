import React from "react";
import { useSelector } from "react-redux";
import CircularLoading from "../Shared/CircularLoading";
import { Redirect } from "react-router";

function FullWorkout() {
  const workoutSpecs = useSelector((state) => state.workoutSpecs);

  return !workoutSpecs || Object.keys(workoutSpecs).length === 0 ? (
    <Redirect to="" /> //redirect back to form if workoutSpecs is null/undefined or empty
  ) : (
    <div>
      {/* <CircularLoading /> */}
      <h1>Your Workout</h1>
      <h3>Rounds: {workoutSpecs.rounds}</h3>
      <h3>Round Length: {workoutSpecs.roundLength}</h3>
      <h3>Rest Length: {workoutSpecs.restLength}</h3>
      <h3>Your Equipment: {workoutSpecs.equipment}</h3>
    </div>
  );
}

export default FullWorkout;
