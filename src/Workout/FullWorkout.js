import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CircularLoading from "../Shared/CircularLoading";
import { Redirect } from "react-router";
import { fetchWorkout } from "../WorkoutCreator";
import RoundSummary from "./RoundSummary";

function FullWorkout() {
  const workoutSpecs = useSelector((state) => state.workoutSpecs);
  const [loading, setLoading] = useState(true);
  const [workout, setWorkout] = useState([]);

  const retrieveWorkout = async () => {
    const response = await fetchWorkout(workoutSpecs);
    return response;
  };

  useEffect(() => {
    if (!workoutSpecsNullOrEmpty(workoutSpecs)) {
      retrieveWorkout()
        .then((res) => {
          setLoading(false);
          setWorkout(res);
          return res;
        })
        .then((res) => console.log("Response: " + res))
        .catch((err) => console.log("Error: " + err));
    }
  }, []);

  const workoutSpecsNullOrEmpty = (workoutSpecs) => {
    return !workoutSpecs || Object.keys(workoutSpecs).length === 0;
  };

  if (workoutSpecsNullOrEmpty(workoutSpecs)) {
    return <Redirect to="" />; //redirect back to form if workoutSpecs is null/undefined or empty
  }
  if (!workoutSpecsNullOrEmpty(workoutSpecs) && loading) {
    return <CircularLoading />;
  }

  return (
    <div>
      <h1>Your Workout</h1>
      <h3>
        Rounds: {workoutSpecs.rounds} Loading: {loading}
      </h3>
      <h3>Round Length: {workoutSpecs.roundLength}</h3>
      <h3>Rest Length: {workoutSpecs.restLength}</h3>
      <h3>
        Your Equipment:{" "}
        {workoutSpecs.equipment?.length > 0 ? workoutSpecs.equipment : "None"}
      </h3>
      <div>
        {workout.map((round) => (
          <RoundSummary key={round.number} round={round} />
        ))}
      </div>
    </div>
  );
}

export default FullWorkout;
