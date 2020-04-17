import React from "react";
import { Route, Switch } from "react-router";
import CustomizeWorkoutForm from "./Form/CustomizeWorkoutForm";
import FullWorkout from "./Workout/FullWorkout";

function BaseRouter() {
  return (
    <Switch>
      <Route path="/workout">
        <FullWorkout />
      </Route>
      <Route>
        <CustomizeWorkoutForm />
      </Route>
    </Switch>
  );
}

export default BaseRouter;
