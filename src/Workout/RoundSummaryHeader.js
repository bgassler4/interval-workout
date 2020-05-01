import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { materialTheme } from "../Styles/materialTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: materialTheme.palette.secondary.main,
    textAlign: "center",
    color: "#ffffff",
  },
}));

export default function RoundSummaryHeader(props) {
  const classes = useStyles();
  return (
    <Grid item>
      <div className={classes.root}>Round {props.roundNumber}</div>
    </Grid>
  );
}
