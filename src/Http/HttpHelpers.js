import { wgerBaseUrl } from "./HttpConstants";
import { wgerExercisesUrl } from "./HttpConstants";
import { data } from "../Constants/exercises.json";

export async function fetchExercises() {
  return fetch(`${wgerBaseUrl}/${wgerExercisesUrl}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error fetching exercise data from wger: " + err.message);
    });
}

//just to avoid api calls while testing
export async function fetchExercisesTest() {
  return data;
}
