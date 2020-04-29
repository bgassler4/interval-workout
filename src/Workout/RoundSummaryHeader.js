import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#FF0000",
  },
}));

export default function RoundSummaryHeader(props) {
  const classes = useStyles();
  return (
    <Grid item>
      <div className={classes.root}></div>
    </Grid>
  );
}
