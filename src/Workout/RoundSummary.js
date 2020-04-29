import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeSharpIcon from "@material-ui/icons/AccessTimeSharp";
import RoundSummaryHeader from "./RoundSummaryHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  exercise: {
    display: "inline",
  },
}));

export default function RoundSummary(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="column">
          <RoundSummaryHeader roundNumber={props.round.number} />
          <Grid item container direction="column" justify="flex-start">
            {props.round.exercises.map((exercise) => (
              <Grid item key={exercise.id}>
                <List className={classes.root}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AccessTimeSharpIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={exercise.name}
                      secondary="Body Part"
                    />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
