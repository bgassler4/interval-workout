import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { Field } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    pullup: true,
    abWheel: false,
    band: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { pullup, abWheel, band } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Equipment</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Field
                name="equipment"
                type="checkbox"
                value="Band"
                checked={pullup}
                onChange={handleChange}
                as={Checkbox}
              />
            }
            label="Pull Up Bar"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={abWheel}
                onChange={handleChange}
                name="abWheel"
              />
            }
            label="Ab Wheel"
          />
          <FormControlLabel
            control={
              <Checkbox checked={band} onChange={handleChange} name="band" />
            }
            label="Band"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
}
