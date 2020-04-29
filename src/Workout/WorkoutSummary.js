import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeSharpIcon from "@material-ui/icons/AccessTimeSharp";
import TimeWorkoutSummaryComponent from "./TimeWorkoutSummaryComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <h1>Your Workout</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>{props.workoutSpecs.rounds}</Avatar>
              </ListItemAvatar>
              <ListItemText primary=" Rounds" />
            </ListItem>
          </List>
        </Grid>
        <TimeWorkoutSummaryComponent
          time={props.workoutSpecs.roundLength}
          label="Round Length"
        />
        <TimeWorkoutSummaryComponent
          time={props.workoutSpecs.restLength}
          label="Rest Length"
        />
        <Grid item xs={12} sm={6}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default WorkoutSummary;
