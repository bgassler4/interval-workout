import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { createWorkout } from "../WorkoutCreator";
import RoundSummaryWrapper from "./RoundSummaryWrapper";
import { fetchExercises } from "../Http/HttpHelpers";
import WorkoutSummary from "./WorkoutSummary";

function FullWorkout() {
  const workoutSpecs = useSelector((state) => state.workoutSpecs);
  const [workout, setWorkout] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const retrieveExercises = async () => {
      const response = await fetchExercises();
      if (!response) {
        console.log("ERROR");
        return;
      }
      const equipmentFilteredExercises = response.results.filter(
        (exercise) => exercise.equipment.length === 0
      );
      const exArray = equipmentFilteredExercises.map((exercise) => {
        return {
          id: exercise.id,
          name: exercise.name,
          description: exercise.description,
        };
      });
      setExercises(exArray);
    };
    retrieveExercises();
  }, []);

  //call create workout once the exercises have been loaded from the API
  useEffect(() => {
    if (!exercises || exercises.length === 0) return;
    if (!workoutSpecs) return;

    const workout = createWorkout(workoutSpecs, exercises);
    setWorkout(workout);
  }, [workoutSpecs, exercises]);

  const objectNullOrEmpty = (object) => {
    return !object || Object.keys(object).length === 0;
  };

  if (objectNullOrEmpty(workoutSpecs)) {
    return <Redirect to="" />; //redirect back to form if workoutSpecs is null/undefined or empty
  }

  return (
    <div>
      <WorkoutSummary workoutSpecs={workoutSpecs} />
      <RoundSummaryWrapper workout={workout} className="round-summary" />
    </div>
  );
}

export default FullWorkout;
