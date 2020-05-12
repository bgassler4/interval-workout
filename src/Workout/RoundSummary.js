import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeSharpIcon from "@material-ui/icons/AccessTimeSharp";
import RoundSummaryHeader from "./RoundSummaryHeader";

const useStyles = makeStyles((theme) => ({
  round: {
    display: "grid",
    "grid-template-rows": "1fr 1fr 1fr",
    alignContent: "center",
    "grid-column": "4 / 8",
    "border-radius": "3px",
    border: "1px solid black",
  },
  exercise: {
    display: "inline",
  },
}));

export default function RoundSummary(props) {
  const classes = useStyles();

  return (
    <div className={classes.round}>
      <RoundSummaryHeader roundNumber={props.round.number} />
      {props.round.exercises.map((exercise) => (
        <div key={exercise.id}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AccessTimeSharpIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={exercise.name} secondary="Body Part" />
            </ListItem>
          </List>
        </div>
      ))}
    </div>
  );
}
