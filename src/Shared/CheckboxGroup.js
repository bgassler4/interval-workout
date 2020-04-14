import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Field } from "formik";
import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxGroup(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    const values = field.value || [];
    const index = values.indexOf(event.target.value);

    if (index === -1) values.push(event.target.value);
    else values.splice(index, 1);

    props.setFieldValue(props.name, values);
  };

  const [field, meta] = useField(props.name);

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{props.label}</FormLabel>
        <FormGroup>
          {props.options.map((option) => (
            <FormControlLabel
              key={option.id}
              control={
                <Field
                  name={props.name}
                  type="checkbox"
                  value={option.name}
                  onChange={handleChange}
                  as={Checkbox}
                />
              }
              label={option.name}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}
