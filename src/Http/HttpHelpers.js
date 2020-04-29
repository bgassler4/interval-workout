import { wgerBaseUrl } from "./HttpConstants";
import { wgerExercisesUrl } from "./HttpConstants";

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
