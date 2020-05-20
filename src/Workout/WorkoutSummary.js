import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TimeWorkoutSummaryComponent from "./TimeWorkoutSummaryComponent";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "grid",
    gridGap: "20px",
    "grid-template-columns": "1fr",
    "grid-template-rows": "repeat(2, 1fr) auto",
    border: "10px solid yellow",
  },
  header: {
    gridColumn: "1 / -1",
    color: theme.palette.text.main,
    border: "1px solid black",
    textAlign: "center",
    background: "rgb(243,205,5)",
    padding: "10px",
  },
  summary: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyItems: "center",
  },
  submit: {
    gridColumn: "1 / -1",
    justifySelf: "center",
    width: "30%",
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
        <div>
          <div>
            {" "}
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{props.workoutSpecs.rounds}</Avatar>
                </ListItemAvatar>
                <ListItemText primary=" Rounds" />
              </ListItem>
            </List>
          </div>
          <TimeWorkoutSummaryComponent
            time={props.workoutSpecs.roundLength}
            label="Round Length"
          />
        </div>
        <div>
          <div>
            {" "}
            <List>
              <ListItem>
                <ListItemAvatar>
                  <img
                    src={require("../Assets/weights-icon-sm.png")}
                    alt="Equipment"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    "Your Equipment: " + props.workoutSpecs.equipment?.length >
                    0
                      ? props.workoutSpecs.equipment
                      : "None"
                  }
                />
              </ListItem>
            </List>
          </div>
          <TimeWorkoutSummaryComponent
            time={props.workoutSpecs.restLength}
            label="Rest Length"
          />
        </div>
      </div>

      <Button
        className={classes.submit}
        type="submit"
        value="Submit"
        variant="contained"
        color="primary"
        //onClick={onSubmit}
      >
        GET TO IT
      </Button>
    </div>
  );
}

export default WorkoutSummary;
