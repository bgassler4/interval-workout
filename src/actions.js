/*
 * action types
 */
export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
};

/*
 * action creators
 */

export function createWorkout(workoutSpecs) {
  return { type: CREATE_WORKOUT, workoutSpecs };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
