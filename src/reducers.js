import {
  UPDATE_WORKOUT_SPECS,
  UPDATE_WORKOUT,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "./actions";
import { combineReducers } from "redux";

const { SHOW_ALL } = VisibilityFilters;

function workoutSpecs(state = {}, action) {
  switch (action.type) {
    case UPDATE_WORKOUT_SPECS:
      return action.payload;
    default:
      return state;
  }
}

function workout(state = {}, action) {
  switch (action.type) {
    case UPDATE_WORKOUT:
      return action.payload;
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const intervalWorkoutApp = combineReducers({
  visibilityFilter,
  workoutSpecs,
  workout,
});

export default intervalWorkoutApp;
