import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Emoji from "../Shared/Emoji";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "grid",
    gridGap: "20px",
    "grid-template-columns": "1fr",
    "grid-template-rows": "1fr 2fr auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },
  header: {
    gridColumn: "1 / -1",
    color: theme.palette.text.main,
    textAlign: "center",
    background: "rgb(243,205,5)",
    padding: "10px",
  },
  summary: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(75px, 350px))",
    justifyContent: "space-evenly",
    gridGap: "30px",
    fontWeight: 500,
    fontSize: "30px",
  },
  "summary-item": {
    textAlign: "start",
  },
  submit: {
    gridColumn: "1 / -1",
    justifySelf: "center",
    width: "30%",
    margin: "0 0 10px 0",
  },
}));

function WorkoutSummary(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Your Workout</h1>
      </div>
      <div className={classes.summary}>
        <div className={classes["summary-item"]}>
          <Emoji label="rounds" emoji="🥊" />
          <span>{props.workoutSpecs.rounds} Rounds</span>
        </div>
        <div className={classes["summary-item"]}>
          <Emoji emoji="🕒" label="timer" />
          <span>Round Length : {props.workoutSpecs.roundLength}</span>
        </div>
        <div className={classes["summary-item"]}>
          {" "}
          <Emoji label="strongman" emoji="🏋" />
          <span>
            {"Your Equipment: " + props.workoutSpecs.equipment?.length > 0
              ? props.workoutSpecs.equipment
              : "None"}
          </span>
        </div>
        <div className={classes["summary-item"]}>
          <Emoji emoji="⏰" label="timer" />
          <span>Rest Length : {props.workoutSpecs.restLength}</span>
        </div>
      </div>

      <Button
        className={classes.submit}
        type="submit"
        value="Submit"
        variant="contained"
        color="primary"
        onClick={props.onSubmit}
      >
        GET IT
      </Button>
    </div>
  );
}

export default WorkoutSummary;
