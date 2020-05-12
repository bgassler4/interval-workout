import React from "react";
import { Route, Switch } from "react-router";
import CustomizeWorkoutForm from "./Form/CustomizeWorkoutForm";
import FullWorkout from "./Workout/FullWorkout";
import CrushWorkout from "./Workout/CrushWorkout";

function BaseRouter() {
  return (
    <Switch>
      <Route path="/workout-summary">
        <FullWorkout />
      </Route>
      <Route path="/crush-workout">
        <CrushWorkout />
      </Route>
      <Route>
        <CustomizeWorkoutForm />
      </Route>
    </Switch>
  );
}

export default BaseRouter;
