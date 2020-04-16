/*
 * action types
 */
export const UPDATE_WORKOUT_SPECS = "UPDATE_WORKOUT_SPECS";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
};

/*
 * action creators
 */

export function updateWorkoutSpecs(workoutSpecs) {
  return { type: UPDATE_WORKOUT_SPECS, workoutSpecs };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
