function getRandomExerciseNumber(totalExercises) {
  var exerciseIndex = Math.floor(Math.random() * totalExercises);
  return exerciseIndex;
}

const timeStringToSeconds = (timeString) => {
  //mapping string from "04:30" format to int seconds;
  const [minutes, seconds] = timeString.split(":").map((element) => {
    return parseInt(element);
  });

  return minutes * 60 + seconds;
};

const timeArrayGenerator = ({ rounds, roundLength, restLength }) => {
  //mapping the number of rounds / rests to an array corresponding to the amount of time

  const roundLengthSeconds = timeStringToSeconds(roundLength);
  const restLengthSeconds = timeStringToSeconds(restLength);

  const timeArray = [];
  for (let i = 0; i < rounds; i++) {
    if (i % 2 === 0) timeArray.push(roundLengthSeconds);
    else timeArray.push(restLengthSeconds);
  }
  return timeArray;
};

export function createWorkout(workoutSpecs, exercises) {
  let allRounds = [];
  for (let i = 0; i < workoutSpecs.rounds; i++) {
    let round = {
      number: i + 1,
      exercises: [],
      time: timeStringToSeconds(workoutSpecs.roundLength),
      isRest: false,
    };
    const exerciseOne = exercises[getRandomExerciseNumber(exercises.length)];
    const exerciseTwo = exercises[getRandomExerciseNumber(exercises.length)];
    round.exercises.push(exerciseOne);
    round.exercises.push(exerciseTwo);
    allRounds.push(round); //add the round to the workout

    //add the rest after the round
    allRounds.push({
      isRest: true,
      time: timeStringToSeconds(workoutSpecs.restLength),
    });
  }
  return allRounds;
}
