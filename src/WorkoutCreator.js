import data from "./Constants/exercises.json";

const exercises = data?.exercises;
const totalNumberOfExercises = exercises.length;

//simulating an async call to an api
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getRandomExerciseNumber() {
  var exerciseIndex = Math.floor(Math.random() * totalNumberOfExercises);
  return exerciseIndex;
}

//simulating an API Call where this logic would execute
export async function fetchWorkout(workoutSpecs) {
  return await delay(500).then(() => {
    let allRounds = [];
    for (let i = 0; i < workoutSpecs.rounds; i++) {
      let round = {
        number: i + 1,
        exercises: [],
      };
      const exerciseOne = exercises[getRandomExerciseNumber()];
      const exerciseTwo = exercises[getRandomExerciseNumber()];
      round.exercises.push(exerciseOne);
      round.exercises.push(exerciseTwo);
      allRounds.push(round);
    }
    return allRounds;
  });
}
