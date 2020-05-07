import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { materialTheme } from "../Styles/materialTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: materialTheme.palette.secondary.main,
    textAlign: "center",
    color: "#ffffff",
    "font-weight": 900,
    "font-size": "35px",
    "border-radius": "3px",
  },
}));

export default function RoundSummaryHeader(props) {
  const classes = useStyles();
  return <div className={classes.root}>Round {props.roundNumber}</div>;
}
