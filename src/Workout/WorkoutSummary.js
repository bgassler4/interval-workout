import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TimeWorkoutSummaryComponent from "./TimeWorkoutSummaryComponent";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "grid",
    "grid-gap": "20px",
    "grid-template-columns": "auto auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function WorkoutSummary(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Paper className={classes.paper}>
          <h1>Your Workout</h1>
        </Paper>
      </div>
      <div className={classes.container}>
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
        <TimeWorkoutSummaryComponent
          time={props.workoutSpecs.restLength}
          label="Rest Length"
        />
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
                  "Your Equipment: " + props.workoutSpecs.equipment?.length > 0
                    ? props.workoutSpecs.equipment
                    : "None"
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default WorkoutSummary;
