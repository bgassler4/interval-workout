import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    "grid-template-columns": "1fr 1fr",
    "grid-template-rows": "repeat(3, 1fr)",
    border: "10px solid yellow",
  },
  header: {
    "grid-column": "1 / -1",
    color: theme.palette.text.main,
    border: "1px solid black",
    textAlign: "center",
    background: "rgb(243,205,5)",
    padding: "10px",
  },
}));

function WorkoutSummary(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Your Workout</h1>
      </div>
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
                  "Your Equipment: " + props.workoutSpecs.equipment?.length > 0
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
  );
}

export default WorkoutSummary;
