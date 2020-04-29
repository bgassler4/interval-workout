import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AccessTimeSharpIcon from "@material-ui/icons/AccessTimeSharp";

export default function TimeWorkoutSummaryComponent(props) {
  return (
    <Grid item xs={12} sm={6}>
      {" "}
      <List>
        <ListItem>
          <ListItemAvatar>
            <AccessTimeSharpIcon />
          </ListItemAvatar>
          <ListItemText primary={`${props.label} : ${props.time}`} />
        </ListItem>
      </List>
    </Grid>
  );
}
