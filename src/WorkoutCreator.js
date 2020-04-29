function getRandomExerciseNumber(totalExercises) {
  var exerciseIndex = Math.floor(Math.random() * totalExercises);
  return exerciseIndex;
}

export function createWorkout(workoutSpecs, exercises) {
  let allRounds = [];
  for (let i = 0; i < workoutSpecs.rounds; i++) {
    let round = {
      number: i + 1,
      exercises: [],
    };
    const exerciseOne = exercises[getRandomExerciseNumber(exercises.length)];
    const exerciseTwo = exercises[getRandomExerciseNumber(exercises.length)];
    round.exercises.push(exerciseOne);
    round.exercises.push(exerciseTwo);
    allRounds.push(round);
  }
  return allRounds;
}
